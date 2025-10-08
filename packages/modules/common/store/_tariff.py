from modules.common.component_state import TariffState
from modules.common.fault_state import FaultState
from modules.common.store import ValueStore
from modules.common.store._api import LoggingValueStore
from modules.common.store._broker import pub_to_broker
from helpermodules.timecheck import (
    create_unix_timestamp_current_quarter_hour, 
    create_unix_timestamp_current_full_hour
)
import logging
import threading
import time
from datetime import datetime, timedelta

log = logging.getLogger(__name__)


class TariffValueStoreBroker(ValueStore[TariffState]):
    def __init__(self):
        pass

    def set(self, state: TariffState) -> None:
        self.state = state

    def __update(self):
        try:
            prices = self.state.prices
            pub_to_broker("openWB/set/optional/et/get/prices", prices)
            log.debug(f"published prices list to MQTT having {len(prices)} entries")
        except Exception as e:
            raise FaultState.from_exception(e)

    def __republish(full_hour:int,  quarter_index:int, fifteen_minutes:int = 900) -> None:
        now = datetime.now()
        target_time = datetime.datetime.fromtimestamp(
            full_hour + (quarter_index * fifteen_minutes))
        if now < target_time:
            delay = (target_time - now).total_seconds()
            log.debug(f"reduce prices list and push to MQTT at {target_time.strftime('%m/%d/%Y, %H:%M')}")
            # self.state.prices removes outdated entries itself
            timer = threading.Timer(delay, self.__update())
            timer.start()

    def update(self):
        log.debug(f"pushing prices list to MQTT")
        self.__update()
        full_hour = create_unix_timestamp_current_full_hour
        if ( 1 < self.state.prices_per_hour and 
                full_hour == create_unix_timestamp_current_quarter_hour):
            log.debug(f"creating {length(range(1, self.state.prices_per_day))} jobs to push prices list to MQTT")
            try:
                [self.__republish(full_hour, quarter_index) for quarter_index in range(1, self.state.prices_per_day)]
            except Exception as e:
                raise FaultState.from_exception(e)


def get_electricity_tariff_value_store() -> ValueStore[TariffState]:
    return LoggingValueStore(TariffValueStoreBroker())


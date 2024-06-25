import{_ as g,C as T}from"./index-643e9eb5.js";import{_ as E}from"./dynamic-import-helper-be004503.js";import{_ as h,q as a,k as s,l as p,B as n,M as o,x as r,y as _,u as c,a1 as $,z as k,a2 as V,I as P,A as W}from"./vendor-b3afda6d.js";import"./vendor-fortawesome-d651dd92.js";import"./vendor-bootstrap-37731caa.js";import"./vendor-jquery-2371184a.js";import"./vendor-axios-dc7988e3.js";import"./vendor-sortablejs-806a0b5c.js";const A={name:"ElectricityTariffConfigFallback",emits:["update:configuration"],props:{electricityTariff:{type:Object,required:!0}},methods:{updateConfiguration(e,t=void 0){this.$emit("update:configuration",{value:e,object:t})}}},O={class:"backup-cloud-fallback"};function q(e,t,l,y,v,d){const u=a("openwb-base-alert"),f=a("openwb-base-textarea");return s(),p("div",O,[n(u,{subtype:"warning"},{default:o(()=>[r(' Es wurde keine Konfigurationsseite für den Anbieter "'+_(l.electricityTariff.name)+'" gefunden. Die Einstellungen können als JSON direkt bearbeitet werden. ',1)]),_:1}),n(f,{title:"Konfiguration",subtype:"json","model-value":l.electricityTariff.configuration,"onUpdate:modelValue":t[0]||(t[0]=m=>d.updateConfiguration(m,"configuration"))},{help:o(()=>[r(" Bitte prüfen Sie, ob die Eingaben richtig interpretiert werden. ")]),_:1},8,["model-value"]),n(u,{subtype:"info"},{default:o(()=>[c("pre",null,_(JSON.stringify(l.electricityTariff.configuration,void 0,2)),1)]),_:1})])}const L=h(A,[["render",q],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/electricity_tariffs/OpenwbElectricityTariffConfigFallback.vue"]]),F={name:"OpenwbElectricityTariffProxy",emits:["update:configuration"],props:{electricityTariff:{type:Object,required:!0}},computed:{myComponent(){return console.debug(`loading electricity tariff cloud: ${this.electricityTariff.type}`),$({loader:()=>E(Object.assign({"./awattar/electricity_tariff.vue":()=>g(()=>import("./electricity_tariff-440299b5.js"),["assets/electricity_tariff-440299b5.js","assets/vendor-b3afda6d.js","assets/vendor-sortablejs-806a0b5c.js","assets/vendor-aab9f734.css"]),"./energycharts/electricity_tariff.vue":()=>g(()=>import("./electricity_tariff-edb0917c.js"),["assets/electricity_tariff-edb0917c.js","assets/index-643e9eb5.js","assets/vendor-b3afda6d.js","assets/vendor-sortablejs-806a0b5c.js","assets/vendor-aab9f734.css","assets/vendor-fortawesome-d651dd92.js","assets/vendor-bootstrap-37731caa.js","assets/vendor-jquery-2371184a.js","assets/vendor-bootstrap-c4951098.css","assets/vendor-axios-dc7988e3.js","assets/index-b3227821.css"]),"./rabot/electricity_tariff.vue":()=>g(()=>import("./electricity_tariff-7a249832.js"),["assets/electricity_tariff-7a249832.js","assets/vendor-b3afda6d.js","assets/vendor-sortablejs-806a0b5c.js","assets/vendor-aab9f734.css"]),"./tibber/electricity_tariff.vue":()=>g(()=>import("./electricity_tariff-ff5ad3ad.js"),["assets/electricity_tariff-ff5ad3ad.js","assets/vendor-b3afda6d.js","assets/vendor-sortablejs-806a0b5c.js","assets/vendor-aab9f734.css"]),"./voltego/electricity_tariff.vue":()=>g(()=>import("./electricity_tariff-2f2bda3c.js"),["assets/electricity_tariff-2f2bda3c.js","assets/vendor-b3afda6d.js","assets/vendor-sortablejs-806a0b5c.js","assets/vendor-aab9f734.css"])}),`./${this.electricityTariff.type}/electricity_tariff.vue`),errorComponent:L})}},methods:{updateConfiguration(e){this.$emit("update:configuration",e)}}};function D(e,t,l,y,v,d){const u=a("openwb-base-heading");return s(),p(P,null,[n(u,null,{default:o(()=>[r(' Einstellungen für Modul "'+_(l.electricityTariff.name)+'" ',1)]),_:1}),(s(),k(V(d.myComponent),{electricityTariff:l.electricityTariff,"onUpdate:configuration":t[0]||(t[0]=f=>d.updateConfiguration(f))},null,40,["electricityTariff"]))],64)}const N=h(F,[["render",D],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/electricity_tariffs/OpenwbElectricityTariffProxy.vue"]]),U={name:"OpenwbGeneralChargeConfig",mixins:[T],components:{OpenwbElectricityTariffProxy:N},data(){return{mqttTopicsToSubscribe:["openWB/general/extern","openWB/general/chargemode_config/retry_failed_phase_switches","openWB/general/chargemode_config/unbalanced_load","openWB/general/chargemode_config/unbalanced_load_limit","openWB/general/prices/bat","openWB/general/prices/grid","openWB/general/prices/pv","openWB/optional/et/provider","openWB/system/configurable/electricity_tariffs"]}},computed:{electricityTariffList(){return this.$store.state.mqtt["openWB/system/configurable/electricity_tariffs"]}},methods:{getElectricityTariffDefaultConfiguration(e){const t=this.electricityTariffList.find(l=>l.value==e);return Object.prototype.hasOwnProperty.call(t,"defaults")?{...t.defaults}:(console.warn("no default configuration found for electricity tariff type!",e),{})},updateSelectedElectricityTariff(e){this.updateState("openWB/optional/et/provider",e,"type"),this.updateState("openWB/optional/et/provider",this.getElectricityTariffDefaultConfiguration(e))},updateConfiguration(e,t){console.debug("updateConfiguration",e,t),this.updateState(e,t.value,t.object)}}},I={class:"generalChargeConfig"},R={name:"generalChargeConfigForm"},Z={key:0},j={key:1},x=c("br",null,null,-1),G=c("br",null,null,-1),J=c("hr",null,null,-1),K=c("br",null,null,-1),H={key:0},M={key:1},Q=c("br",null,null,-1),X={key:0};function Y(e,t,l,y,v,d){const u=a("openwb-base-alert"),f=a("openwb-base-button-group-input"),m=a("openwb-base-range-input"),w=a("openwb-base-heading"),b=a("openwb-base-number-input"),B=a("openwb-base-card"),S=a("openwb-base-select-input"),z=a("openwb-electricity-tariff-proxy"),C=a("openwb-base-submit-buttons");return s(),p("div",I,[c("form",R,[n(B,{title:"Allgemein"},{default:o(()=>[e.$store.state.mqtt["openWB/general/extern"]===!0?(s(),p("div",Z,[n(u,{subtype:"info"},{default:o(()=>[r(' Diese Einstellungen sind nicht verfügbar, solange sich diese openWB im Steuerungsmodus "secondary" befindet. ')]),_:1})])):(s(),p("div",j,[n(f,{title:"Begrenzung der Schieflast",buttons:[{buttonValue:!1,text:"Nein",class:"btn-outline-danger"},{buttonValue:!0,text:"Ja",class:"btn-outline-success"}],"model-value":e.$store.state.mqtt["openWB/general/chargemode_config/unbalanced_load"],"onUpdate:modelValue":t[0]||(t[0]=i=>e.updateState("openWB/general/chargemode_config/unbalanced_load",i))},{help:o(()=>[r(" Wenn diese Option aktiviert ist, werden nicht-dreiphasige Ladevorgänge so geregelt, dass am Netzanschlusspunkt (EVU-Zähler) die eingestellte Grenze für die Schieflast nicht überschritten wird. Hierfür muss der EVU-Zähler einzelne Phasenströme bereitstellen!"),x,r(' Weiterhin müssen bei den Ladepunkten sowie Fahrzeugen sämtliche Angaben zur Anzahl angeschlossener/unterstützter Phasen und der Phasenrotation hinterlegt werden, damit der Regelung bekannt ist, welcher Ladevorgang welche Phase am Netzanschluss beeinflusst. siehe "Konfiguration - Ladepunkte -> elektrischer Anschluss - Phase 1" und "Konfiguration - Fahrzeuge -> Fahrzeug-Profile" ')]),_:1},8,["model-value"]),e.$store.state.mqtt["openWB/general/chargemode_config/unbalanced_load"]?(s(),k(m,{key:0,title:"Erlaubte Schieflast",min:10,max:32,step:1,unit:"A","model-value":e.$store.state.mqtt["openWB/general/chargemode_config/unbalanced_load_limit"],"onUpdate:modelValue":t[1]||(t[1]=i=>e.updateState("openWB/general/chargemode_config/unbalanced_load_limit",i))},{help:o(()=>[r(" Hiermit wird festgelegt, welche Schieflast am Netzanschlusspunkt erlaubt ist. Bei Überschreitung werden gezielt einzelne Ladevorgänge in der Leistung begrenzt. ")]),_:1},8,["model-value"])):W("",!0),n(f,{title:"Phasenumschaltung wiederholt anstoßen",buttons:[{buttonValue:!1,text:"Nein",class:"btn-outline-danger"},{buttonValue:!0,text:"Ja",class:"btn-outline-success"}],"model-value":e.$store.state.mqtt["openWB/general/chargemode_config/retry_failed_phase_switches"],"onUpdate:modelValue":t[2]||(t[2]=i=>e.updateState("openWB/general/chargemode_config/retry_failed_phase_switches",i))},{help:o(()=>[r(" Wenn diese Option aktiviert ist, werden bis zu drei Umschaltversuche vorgenommen, wenn die vorgegebene und genutzte Phasenzahl nicht übereinstimmen. Wird die Option deaktiviert, wird nur eine Umschaltung durchgeführt."),G,r(" Die gezählten Fehlversuche werden mit dem Abstecken zurückgesetzt. ")]),_:1},8,["model-value"]),J,n(w,null,{help:o(()=>[r(" Zur Berechnung der Ladekosten im Lade-Log werden stundenweise die Anteile der Stromquellen (Speicher, Netz, PV) berechnet und mit den hier angegebenen Preisen multipliziert."),K,r(" Ist die Abrechnung über das Ladeprotokoll, z.B. mit dem Arbeitgeber, vereinbart, ist bei allen drei Feldern der vereinbarte Preis einzutragen. ")]),default:o(()=>[r(" Berechnung der Ladekosten ")]),_:1}),n(b,{title:"Preis für Netzbezug",step:.001,precision:3,unit:"ct/kWh","model-value":e.$store.state.mqtt["openWB/general/prices/grid"]*1e5,"onUpdate:modelValue":t[3]||(t[3]=i=>e.updateState("openWB/general/prices/grid",parseFloat((i/1e5).toFixed(7))))},{help:o(()=>[r(" Ist ein Anbieter für variable Stromtarife konfiguriert, wird statt des hier angegebenen Netzpreises der dynamische Strompreis des Anbieters verwendet (stündliche Aktualisierung durch den Anbieter). ")]),_:1},8,["model-value"]),n(b,{title:"Preis für Speicherentladung",step:.001,precision:3,unit:"ct/kWh","model-value":e.$store.state.mqtt["openWB/general/prices/bat"]*1e5,"onUpdate:modelValue":t[4]||(t[4]=i=>e.updateState("openWB/general/prices/bat",parseFloat((i/1e5).toFixed(7))))},null,8,["model-value"]),n(b,{title:"Preis für PV-Strom",step:.001,precision:3,unit:"ct/kWh","model-value":e.$store.state.mqtt["openWB/general/prices/pv"]*1e5,"onUpdate:modelValue":t[5]||(t[5]=i=>e.updateState("openWB/general/prices/pv",parseFloat((i/1e5).toFixed(7))))},null,8,["model-value"])]))]),_:1}),n(B,{title:"Optional"},{default:o(()=>[e.$store.state.mqtt["openWB/general/extern"]===!0?(s(),p("div",H,[n(u,{subtype:"info"},{default:o(()=>[r(' Diese Einstellungen sind nicht verfügbar, solange sich diese openWB im Steuerungsmodus "secondary" befindet. ')]),_:1})])):(s(),p("div",M,[n(w,null,{default:o(()=>[r(" Variable Stromtarife ")]),_:1}),n(u,{subtype:"info"},{default:o(()=>[r(" Bei Sofort- und Zeitladen wird nur geladen, wenn der Strompreis unter dem maximalen angegeben Strompreis liegt. Für Zielladen wird die Ladedauer ermittelt und dann zu den günstigsten Stunden geladen."),Q,r(" Wenn keine Preise abgefragt werden können, wird bei Sofort- und Zeitladen immer geladen und bei Zielladen zunächst mit PV-Überschuss und zum Erreichen des Zieltermins mit Netzstrom. ")]),_:1}),n(S,{class:"mb-2",title:"Anbieter",options:d.electricityTariffList,"model-value":e.$store.state.mqtt["openWB/optional/et/provider"]?e.$store.state.mqtt["openWB/optional/et/provider"].type:"","onUpdate:modelValue":t[6]||(t[6]=i=>d.updateSelectedElectricityTariff(i))},null,8,["options","model-value"]),e.$store.state.mqtt["openWB/optional/et/provider"]&&e.$store.state.mqtt["openWB/optional/et/provider"].type?(s(),p("div",X,[n(z,{electricityTariff:e.$store.state.mqtt["openWB/optional/et/provider"],"onUpdate:configuration":t[7]||(t[7]=i=>d.updateConfiguration("openWB/optional/et/provider",i))},null,8,["electricityTariff"])])):W("",!0)]))]),_:1}),n(C,{formName:"generalChargeConfigForm",onSave:t[8]||(t[8]=i=>e.$emit("save")),onReset:t[9]||(t[9]=i=>e.$emit("reset")),onDefaults:t[10]||(t[10]=i=>e.$emit("defaults"))})])])}const le=h(U,[["render",Y],["__file","/opt/openWB-dev/openwb-ui-settings/src/views/GeneralChargeConfig.vue"]]);export{le as default};
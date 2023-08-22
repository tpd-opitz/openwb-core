import{C as w}from"./index-451d2d20.js";import{_ as W,p as g,k as o,l as d,q as r,A as i,L as l,u as a,y as _,z as v}from"./vendor-59c39d33.js";import"./vendor-fortawesome-532a6e75.js";import"./vendor-bootstrap-aeba3518.js";import"./vendor-jquery-7c356c02.js";import"./vendor-axios-1660eacd.js";import"./vendor-sortablejs-1a35b5ad.js";const B={name:"OpenwbPVChargeConfig",mixins:[w],data(){return{mqttTopicsToSubscribe:["openWB/general/extern","openWB/general/chargemode_config/pv_charging/control_range","openWB/general/chargemode_config/pv_charging/feed_in_yield","openWB/general/chargemode_config/pv_charging/switch_on_threshold","openWB/general/chargemode_config/pv_charging/switch_on_delay","openWB/general/chargemode_config/pv_charging/switch_off_threshold","openWB/general/chargemode_config/pv_charging/switch_off_delay","openWB/general/chargemode_config/pv_charging/phases_to_use","openWB/general/chargemode_config/pv_charging/phase_switch_delay","openWB/general/chargemode_config/pv_charging/bat_prio","openWB/general/chargemode_config/pv_charging/switch_on_soc","openWB/general/chargemode_config/pv_charging/switch_off_soc","openWB/general/chargemode_config/pv_charging/charging_power_reserve","openWB/general/chargemode_config/pv_charging/rundown_power","openWB/general/chargemode_config/pv_charging/rundown_soc"]}},methods:{calculateControlMode(){const e="openWB/general/chargemode_config/pv_charging/control_range";let n=this.$store.state.mqtt[e];if(typeof n<"u")return n[0]===-230&&n[1]===0?"export":n[0]===0&&n[1]===230?"import":"individual"},setControlMode(e){const n="openWB/general/chargemode_config/pv_charging/control_range";switch(console.debug("set controlMode",e),e){case"export":this.updateState(n,[-230,0]);break;case"import":this.updateState(n,[0,230]);break;case"individual":this.updateState(n,[-230,230]);break}},updateBatterySwitchOnSoc(e){this.updateState("openWB/general/chargemode_config/pv_charging/switch_on_soc",e),e<=this.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/switch_off_soc"]&&this.updateState("openWB/general/chargemode_config/pv_charging/switch_off_soc",Math.max(0,e-5))},updateBatterySwitchOffSoc(e){this.updateState("openWB/general/chargemode_config/pv_charging/switch_off_soc",e),e>=this.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/switch_on_soc"]&&this.updateState("openWB/general/chargemode_config/pv_charging/switch_on_soc",e+5)}}},S={class:"pvChargeConfig"},V={name:"pvChargeConfigForm"},z={key:0},k={key:1},E=r("hr",null,null,-1),C=r("br",null,null,-1),L=r("hr",null,null,-1),y=r("br",null,null,-1),M=r("hr",null,null,-1),U=r("br",null,null,-1),P=r("br",null,null,-1),$=r("br",null,null,-1),q={key:0},R={key:1},A={key:0},I={key:1},F=r("br",null,null,-1),N=r("br",null,null,-1),D=r("br",null,null,-1),O=r("br",null,null,-1),Z=r("br",null,null,-1),T=r("br",null,null,-1),H=r("hr",null,null,-1);function G(e,n,K,j,J,u){const p=g("openwb-base-alert"),c=g("openwb-base-button-group-input"),s=g("openwb-base-number-input"),m=g("openwb-base-card"),h=g("openwb-base-range-input"),b=g("openwb-base-heading"),f=g("openwb-base-submit-buttons");return o(),d("div",S,[r("form",V,[i(m,{title:"Regelparameter"},{default:l(()=>[e.$store.state.mqtt["openWB/general/extern"]===!0?(o(),d("div",z,[i(p,{subtype:"info"},{default:l(()=>[a(' Diese Einstellungen sind nicht verfügbar, solange sich diese openWB im Steuerungsmodus "secondary" befindet. ')]),_:1})])):(o(),d("div",k,[i(c,{title:"Regelmodus",buttons:[{buttonValue:"export",text:"Einspeisung"},{buttonValue:"import",text:"Bezug"},{buttonValue:"individual",text:"Individuell"}],"model-value":u.calculateControlMode(),"onUpdate:modelValue":n[0]||(n[0]=t=>u.setControlMode(t))},{help:l(()=>[a(' Mit dieser Einstellung wird der angestrebte Regelbereich festgelegt. "Einspeisung" und "Bezug" definieren einen Bereich mit minimaler Einspeisung (-230W, 0W) bzw. minimalem Netzbezug (0W, 230W). Mit der Auswahl "individuell" kann ein eigener Regelbereich definiert werden. ')]),_:1},8,["model-value"]),u.calculateControlMode()==="individual"?(o(),_(s,{key:0,title:"Minimum",step:.01,unit:"kW","model-value":e.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/control_range"][0]/1e3,"onUpdate:modelValue":n[1]||(n[1]=t=>e.updateState("openWB/general/chargemode_config/pv_charging/control_range",t*1e3,"0"))},{help:l(()=>[a(" Untere Grenze des Regelbereichs. ")]),_:1},8,["model-value"])):v("v-if",!0),u.calculateControlMode()==="individual"?(o(),_(s,{key:1,title:"Maximum",step:.01,unit:"kW","model-value":e.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/control_range"][1]/1e3,"onUpdate:modelValue":n[2]||(n[2]=t=>e.updateState("openWB/general/chargemode_config/pv_charging/control_range",t*1e3,"1"))},{help:l(()=>[a("Obere Grenze des Regelbereichs.")]),_:1},8,["model-value"])):v("v-if",!0),E,i(s,{title:"Einschaltschwelle",min:0,step:.05,unit:"kW","model-value":e.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/switch_on_threshold"]/1e3,"onUpdate:modelValue":n[3]||(n[3]=t=>e.updateState("openWB/general/chargemode_config/pv_charging/switch_on_threshold",t*1e3))},{help:l(()=>[a(" Wird der Regelbereich in Richtung Einspeisung um diese Leistung überschritten, so wird der Ladevorgang gestartet. ")]),_:1},8,["model-value"]),i(s,{title:"Einschaltverzögerung",min:0,step:1,unit:"s","model-value":e.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/switch_on_delay"],"onUpdate:modelValue":n[4]||(n[4]=t=>e.updateState("openWB/general/chargemode_config/pv_charging/switch_on_delay",t))},{help:l(()=>[a(" Die Einschaltschwelle muss für die hier angegebene Zeit dauerhaft überschritten werden, bevor ein Ladevorgang gestartet wird."),C,a(" Wenn ein Ladevorgang aktiv ist und auf PV-Laden umgeschaltet wird, wird weiter geladen, wenn die Abschaltschwelle nicht unterschritten wird. ")]),_:1},8,["model-value"]),L,i(s,{title:"Abschaltschwelle",min:0,step:.05,unit:"kW","model-value":e.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/switch_off_threshold"]/1e3,"onUpdate:modelValue":n[5]||(n[5]=t=>e.updateState("openWB/general/chargemode_config/pv_charging/switch_off_threshold",t*1e3))},{help:l(()=>[a(" Wird der Regelbereich in Richtung Netzbezug um diese Leistung überschritten, so wird der Ladevorgang beendet. ")]),_:1},8,["model-value"]),i(s,{title:"Abschaltverzögerung",min:0,step:1,unit:"s","model-value":e.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/switch_off_delay"],"onUpdate:modelValue":n[6]||(n[6]=t=>e.updateState("openWB/general/chargemode_config/pv_charging/switch_off_delay",t))},{help:l(()=>[a(" Die Abschaltschwelle muss für die hier angegebene Zeit dauerhaft unterschritten werden, bevor ein Ladevorgang beendet wird."),y,a(" Wenn ein Ladevorgang aktiv ist und auf PV-Laden umgeschaltet wird, wird die Ladung sofort beendet, wenn die Abschaltschwelle unterschritten wird. ")]),_:1},8,["model-value"]),M,i(s,{title:"Regelpunkt Einspeisegrenze",min:0,step:.05,unit:"kW","model-value":e.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/feed_in_yield"]/1e3,"onUpdate:modelValue":n[7]||(n[7]=t=>e.updateState("openWB/general/chargemode_config/pv_charging/feed_in_yield",t*1e3))},{help:l(()=>[a(" Die Nutzung dieser Option ergibt nur Sinn, wenn ein Wechselrichter mit separatem Smart-Meter am EVU-Punkt verbaut ist (nicht der originale Zähler des Versorgers!), welches eine dynamische Begrenzung der Einspeiseleistung am EVU-Punkt durch den PV-Wechselrichter bietet (bitte bei ev. Problemen immer vorab prüfen lassen)."),U,a(' Ist eine Einspeiseleistungsreduzierung verbaut (in vielen älteren, privaten Einspeiseverträgen z.B. als 70% Regelung bekannt), wird mit Eingabe des Wertes "Regelpunkt Einspeisegrenze" ein eigenverbrauchsoptimiertes Fahrzeugladen mit PV-Überschussenergie möglich, die sonst abgeregelt werden würde (Nutzung der PV-Peaks).'),P,a(' Wird in einem "Ladeprofil" die Option "Einspeisegrenze beachten" eingeschaltet, so wird der Regelpunkt auf diesen Wert verschoben und die Ladung startet erst, wenn der hinterlegte Wert "Regelpunkt Einspeisegrenze" überschritten wird.'),$,a(" Zur optimalen Eigenverbrauchssteuerung sollte der Wert einige hundert Watt UNTER der im Wechselrichter hinterlegten EVU-Einspeiseleistungsgrenze liegen, damit openWB die Ladung freigibt, BEVOR der Wechselrichter begrenzt wird. ")]),_:1},8,["model-value"])]))]),_:1}),i(m,{title:"Phasenumschaltung"},{default:l(()=>[e.$store.state.mqtt["openWB/general/extern"]===!0?(o(),d("div",q,[i(p,{subtype:"info"},{default:l(()=>[a(' Diese Einstellungen sind nicht verfügbar, solange sich diese openWB im Steuerungsmodus "secondary" befindet. ')]),_:1})])):(o(),d("div",R,[i(c,{title:"Anzahl Phasen",buttons:[{buttonValue:1,text:"1"},{buttonValue:3,text:"Maximum"},{buttonValue:0,text:"Automatik"}],"model-value":e.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/phases_to_use"],"onUpdate:modelValue":n[8]||(n[8]=t=>e.updateState("openWB/general/chargemode_config/pv_charging/phases_to_use",t))},{help:l(()=>[a(' Hier kann eingestellt werden, ob Ladevorgänge im Modus "PV-Laden" mit nur einer Phase oder dem möglichen Maximum in Abhängigkeit der "Ladepunkt"- und "Fahrzeug"-Einstellungen durchgeführt werden. Im Modus "Automatik" entscheidet die Regelung, welche Einstellung genutzt wird, um den verfügbaren Überschuss in die Fahrzeuge zu laden. Voraussetzung ist die verbaute Umschaltmöglichkeit zwischen 1- und 3-phasig (s.g. 1p3p). ')]),_:1},8,["model-value"]),e.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/phases_to_use"]==0?(o(),_(h,{key:0,title:"Verzögerung automat. Phasenumschaltung",min:1,max:15,step:1,unit:"Min.","model-value":e.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/phase_switch_delay"],"onUpdate:modelValue":n[9]||(n[9]=t=>e.updateState("openWB/general/chargemode_config/pv_charging/phase_switch_delay",t))},{help:l(()=>[a(" Um zu viele Umschaltungen zu vermeiden, wird Anhand dieses Wertes definiert, wann die Umschaltung erfolgen soll. Ist für durchgehend x Minuten die Maximalstromstärke erreicht, wird auf mehrphasige Ladung umgestellt. Ist die Ladung nur für ein Intervall unterhalb der Maximalstromstärke, beginnt das Intervall für die Umschaltung erneut. Ist die Ladung im mehrphasigen Modus für 16 - x Minuten auf der Minimalstromstärke, wird wieder auf einphasige Ladung gewechselt. ")]),_:1},8,["model-value"])):v("v-if",!0)]))]),_:1}),i(m,{title:"Speicher-Beachtung"},{default:l(()=>[e.$store.state.mqtt["openWB/general/extern"]===!0?(o(),d("div",A,[i(p,{subtype:"info"},{default:l(()=>[a(' Diese Einstellungen sind nicht verfügbar, solange sich diese openWB im Steuerungsmodus "secondary" befindet. ')]),_:1})])):(o(),d("div",I,[i(c,{title:"Priorisierung",buttons:[{buttonValue:!1,text:"Fahrzeuge"},{buttonValue:!0,text:"Speicher"}],"model-value":e.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/bat_prio"],"onUpdate:modelValue":n[10]||(n[10]=t=>e.updateState("openWB/general/chargemode_config/pv_charging/bat_prio",t))},{help:l(()=>[a(' Sofern ein Hausstromspeicher (im Folgenden "Speicher" genannt) im Energiesystem verbaut ist, kann dieser beim Fahrzeugladen mit berücksichtigt werden. Dies erfolgt passiv über die Berücksichtigung der Speicherleistungswerte und des Speicher-SoC. Eine aktive Speichersteuerung durch openWB ist aktuell mangels Speicherschnittstelle nicht möglich.'),F,N,a(' Bei Priorisierung "Fahrzeuge" wird die gesamte PV-Leistung ABZÜGLICH der "reservierten Ladeleistung" des Speichers zum Fahrzeugladen verwendet.'),D,O,a(' Bei Priorisierung "Speicher" wird die gesamte PV-Leistung und ZUSÄTZLICH die "erlaubte Entladeleistung" des Speichers (bis zum Erreichen des "minimalen Entlade-SoC" des Speichers) zum Fahrzeugladen verwendet.'),Z,T,a(" Beide Modi lassen sich mit den zusätzlichen Einstellungen an die eigenen Bedürfnisse anpassen, so dass auch ein Mischbetrieb möglich ist. ")]),_:1},8,["model-value"]),i(s,{title:"Reservierte Ladeleistung",min:0,step:.1,unit:"kW","model-value":e.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/charging_power_reserve"]/1e3,"onUpdate:modelValue":n[11]||(n[11]=t=>e.updateState("openWB/general/chargemode_config/pv_charging/charging_power_reserve",t*1e3))},{help:l(()=>[a(' Die "reservierte Ladeleistung" des Speichers wird von der Regelung auch bei "Fahrzeuge"-Vorrang NICHT für das Fahrzeugladen verwendet und bleibt immer dem Speicher vorbehalten. ')]),_:1},8,["model-value"]),i(s,{title:"Erlaubte Entladeleistung",min:0,step:.1,unit:"kW","model-value":e.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/rundown_power"]/1e3,"onUpdate:modelValue":n[12]||(n[12]=t=>e.updateState("openWB/general/chargemode_config/pv_charging/rundown_power",t*1e3))},{help:l(()=>[a(' Die "erlaubte Entladeleistung" des Speichers wird von der Regelung bei "Speicher"-Vorrang ZUSÄTZLICH zur PV-Leistung für das Fahrzeugladen verwendet, solange der Speicher-SoC über dem "minimalen Entlade-SoC" liegt. ')]),_:1},8,["model-value"]),i(h,{title:"Minimaler Entlade-SoC",min:0,max:20,step:1,unit:"%",labels:[{label:0,value:0},{label:5,value:5},{label:10,value:10},{label:15,value:15},{label:20,value:20},{label:25,value:25},{label:30,value:30},{label:35,value:35},{label:40,value:40},{label:45,value:45},{label:50,value:50},{label:55,value:55},{label:60,value:60},{label:65,value:65},{label:70,value:70},{label:75,value:75},{label:80,value:80},{label:85,value:85},{label:90,value:90},{label:95,value:95},{label:"Aus",value:100}],"model-value":e.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/rundown_soc"],"onUpdate:modelValue":n[13]||(n[13]=t=>e.updateState("openWB/general/chargemode_config/pv_charging/rundown_soc",t))},{help:l(()=>[a(" Ein vorhandener Speicher wird im Modus PV-Laden mit der erlaubten Entladeleistung höchstens bis zu dem hier eingestellten Ladestand entladen. ")]),_:1},8,["model-value"]),H,i(b,null,{default:l(()=>[a(" Laden mit Mindeststrom ")]),_:1}),i(h,{title:"Einschalt-SoC",min:0,max:18,step:1,unit:"%",labels:[{label:"Aus",value:0},{label:10,value:10},{label:15,value:15},{label:20,value:20},{label:25,value:25},{label:30,value:30},{label:35,value:35},{label:40,value:40},{label:45,value:45},{label:50,value:50},{label:55,value:55},{label:60,value:60},{label:65,value:65},{label:70,value:70},{label:75,value:75},{label:80,value:80},{label:85,value:85},{label:90,value:90},{label:95,value:95}],"model-value":e.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/switch_on_soc"],"onUpdate:modelValue":n[14]||(n[14]=t=>u.updateBatterySwitchOnSoc(t))},{help:l(()=>[a('Ist der Speicher-SoC größer oder gleich dem "Einschalt-SoC", wird der Speicher im Modus "PV-Laden" bei aktiviertem Mindeststrom bis zum "Ausschalt-SoC" entladen, auch wenn KEIN Überschuss vorhanden ist. Der "Einschalt-SoC" muss größer oder gleich dem "Ausschalt-SoC" sein.')]),_:1},8,["model-value"]),i(h,{title:"Ausschalt-SoC",min:0,max:18,step:1,unit:"%",labels:[{label:"Aus",value:0},{label:5,value:5},{label:10,value:10},{label:15,value:15},{label:20,value:20},{label:25,value:25},{label:30,value:30},{label:35,value:35},{label:40,value:40},{label:45,value:45},{label:50,value:50},{label:55,value:55},{label:60,value:60},{label:65,value:65},{label:70,value:70},{label:75,value:75},{label:80,value:80},{label:85,value:85},{label:90,value:90}],"model-value":e.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/switch_off_soc"],"onUpdate:modelValue":n[15]||(n[15]=t=>u.updateBatterySwitchOffSoc(t))},{help:l(()=>[a('Ist der Speicher-SoC größer oder gleich dem "Einschalt-SoC", wird der Speicher im Modus "PV-Laden" bei aktiviertem Mindeststrom bis zum "Ausschalt-SoC" entladen, auch wenn KEIN Überschuss vorhanden ist. Der "Einschalt-SoC" muss größer oder gleich dem "Ausschalt-SoC" sein.')]),_:1},8,["model-value"])]))]),_:1}),i(f,{formName:"pvChargeConfigForm",onSave:n[16]||(n[16]=t=>e.$emit("save")),onReset:n[17]||(n[17]=t=>e.$emit("reset")),onDefaults:n[18]||(n[18]=t=>e.$emit("defaults"))})])])}const ae=W(B,[["render",G],["__file","/opt/openWB-dev/openwb-ui-settings/src/views/PVChargeConfig.vue"]]);export{ae as default};

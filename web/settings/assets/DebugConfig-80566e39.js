import{C as k}from"./index-94bf3ff2.js";import{l as B,a7 as D,a8 as L,F as W}from"./vendor-fortawesome-994bfc1e.js";import{_ as f,q as s,k as d,z as w,M as l,B as i,p as C,O as x,u as v,y,l as _,I as F,J as N,x as b}from"./vendor-d624aab7.js";import"./vendor-bootstrap-f73ddddf.js";import"./vendor-jquery-b0321e08.js";import"./vendor-axios-e5457936.js";import"./vendor-sortablejs-c0fcb1ea.js";B.add(D,L);const $={name:"OpenwbLogCard",components:{FontAwesomeIcon:W},props:{title:{type:String,required:!0},logFile:{type:String,required:!0}},data(){return{logData:"-- noch nicht geladen --",loading:!1}},methods:{async getFilePromise(n,e=!1){return this.axios.get(location.protocol+"//"+location.host+n).then(t=>t.data).catch(t=>t.response?t.response.status==404&&e?"":`A 404 is expected if running node.js dev server!
`+t.response.status+" "+t.response.statusText+": "+t.response.request.responseURL:t.request?t.request:t.message)},async loadLog(n){this.logData="wird aktualisiert...",this.loading=!0;var e="";for(let r=4;r>=1;r--){const a=await this.getFilePromise(n+"."+r,!0);e+=a}const t=await this.getFilePromise(n);e+=t,this.logData=e,this.loading=!1}}},S={class:"log-data mb-0"};function I(n,e,t,r,a,g){const u=s("font-awesome-icon"),p=s("openwb-base-avatar"),m=s("openwb-base-card");return d(),w(m,{title:t.title,class:"log-card mt-3",collapsible:!0,collapsed:!0},{actions:l(()=>[i(p,{class:"bg-success clickable",onClick:e[0]||(e[0]=x(c=>g.loadLog(t.logFile),["stop"]))},{default:l(()=>[i(u,{"fixed-width":"",class:C(a.loading?"fa-spin-pulse":""),icon:a.loading?["fas","spinner"]:["fas","file-download"]},null,8,["class","icon"])]),_:1})]),default:l(()=>[v("pre",S,y(a.logData),1)]),_:1},8,["title"])}const P=f($,[["render",I],["__scopeId","data-v-a320c3d6"],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/debug_config/LogCard.vue"]]),q={name:"OpenwbDebugging",mixins:[k],components:{OpenwbLogCard:P},data(){return{mqttTopicsToSubscribe:["openWB/general/extern","openWB/system/debug_level"],logFiles:[{title:"Main-Log",fileName:"/openWB/ramdisk/main.log"},{title:"Log des internen Ladepunktes",fileName:"/openWB/ramdisk/internal_chargepoint.log"},{title:"MQTT-Log",fileName:"/openWB/ramdisk/mqtt.log"},{title:"SoC-Log",fileName:"/openWB/ramdisk/soc.log"},{title:"Protokoll des letzten Updates",fileName:"/openWB/data/log/update.log"},{title:"Protokoll des Remote-Dienstes",fileName:"/openWB/ramdisk/remote_support.log"},{title:"Protokoll des SmartHome Dienstes",fileName:"/openWB/ramdisk/smarthome.log"},{title:"Protokoll der Datenmigration",fileName:"/openWB/data/log/data_migration.log"}]}}},z={class:"debugging"},V={name:"debugConfigForm"};function T(n,e,t,r,a,g){const u=s("openwb-base-button-group-input"),p=s("openwb-base-alert"),m=s("openwb-base-card"),c=s("openwb-base-submit-buttons"),h=s("openwb-log-card");return d(),_("div",z,[v("form",V,[i(m,{title:"Protokollierung"},{default:l(()=>[i(u,{title:"Debug Level",buttons:[{buttonValue:30,text:"Warnungen und Fehler"},{buttonValue:20,text:"Info"},{buttonValue:10,text:"Details"}],"model-value":n.$store.state.mqtt["openWB/system/debug_level"],"onUpdate:modelValue":e[0]||(e[0]=o=>n.updateState("openWB/system/debug_level",o))},{help:l(()=>[b(' Wenn der Debug Level auf "Info" oder "Details" gesetzt wird, werden mehr Informationen in die Logdateien geschrieben. Im normalen Betrieb sollte immer "Warnungen und Fehler" gewählt werden, um die Schreibvorgänge auf der SD-Karte zu reduzieren. ')]),_:1},8,["model-value"]),i(p,{subtype:"warning"},{default:l(()=>[b(' Achtung! In den Einstellungen "Info" und "Details" können in den Logdateien sensible Daten wie Benutzernamen und Kennwörter enthalten sein. Diese sollten vor dem Veröffentlichen z.B. im Forum unkenntlich gemacht werden. Private IP-Adressen (z.B. 192.168.x.x) müssen nicht maskiert werden, da diese nicht über das Internet erreichbar sind. ')]),_:1})]),_:1}),i(c,{formName:"debugConfigForm",onSave:e[1]||(e[1]=o=>n.$emit("save")),onReset:e[2]||(e[2]=o=>n.$emit("reset")),onDefaults:e[3]||(e[3]=o=>n.$emit("defaults"))})]),(d(!0),_(F,null,N(a.logFiles,o=>(d(),w(h,{key:o.fileName,title:o.title,"log-file":o.fileName},null,8,["title","log-file"]))),128))])}const j=f(q,[["render",T],["__file","/opt/openWB-dev/openwb-ui-settings/src/views/DebugConfig.vue"]]);export{j as default};
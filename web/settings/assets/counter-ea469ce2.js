import{_ as c,p as n,k as u,l as d,A as o,L as a,u as s,q as p,x as l}from"./vendor-6e5b23b4.js";import"./vendor-sortablejs-b3476726.js";const _={name:"DeviceJanitzaCounter",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0},componentId:{required:!0}},methods:{updateConfiguration(e,t=void 0){this.$emit("update:configuration",{value:e,object:t})}}},f={class:"device-janitza-counter"},m={class:"small"};function b(e,t,g,v,h,w){const i=n("openwb-base-heading"),r=n("openwb-base-alert");return u(),d("div",f,[o(i,null,{default:a(()=>[s(" Einstellungen für Janitza Zähler "),p("span",m,"(Modul: "+l(e.$options.name)+")",1)]),_:1}),o(r,{subtype:"info"},{default:a(()=>[s(' ModbusTCP muss im Janitza auf Port 502 aktiv und die ID auf "1" eingestellt sein. ')]),_:1})])}const z=c(_,[["render",b],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/janitza/counter.vue"]]);export{z as default};
import{_ as c,u as t,k as d,l as p,D as o,N as s,y as a,x as u,z as l}from"./vendor-f2b8aa6f.js";import"./vendor-sortablejs-2f1828d0.js";const _={name:"DeviceSonnenbatterieInverter",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0},componentId:{required:!0}},methods:{updateConfiguration(e,n=void 0){this.$emit("update:configuration",{value:e,object:n})}}},f={class:"device-sonnenbatterie-inverter"},m={class:"small"};function b(e,n,v,g,h,w){const r=t("openwb-base-heading"),i=t("openwb-base-alert");return d(),p("div",f,[o(r,null,{default:s(()=>[a(" Einstellungen für SonnenBatterie Wechselrichter "),u("span",m,"(Modul: "+l(e.$options.name)+")",1)]),_:1}),o(i,{subtype:"info"},{default:s(()=>[a(" Diese Komponente erfordert keine Einstellungen. ")]),_:1})])}const B=c(_,[["render",b],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/sonnen/sonnenbatterie/inverter.vue"]]);export{B as default};
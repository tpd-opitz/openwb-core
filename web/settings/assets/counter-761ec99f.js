import{_ as c,u as t,k as d,l as u,D as o,N as s,y as a,x as p,z as l}from"./vendor-f2b8aa6f.js";import"./vendor-sortablejs-2f1828d0.js";const _={name:"DeviceSiemensCounter",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0},componentId:{required:!0}},methods:{updateConfiguration(e,n=void 0){this.$emit("update:configuration",{value:e,object:n})}}},m={class:"device-siemens-counter"},f={class:"small"};function b(e,n,g,h,v,w){const i=t("openwb-base-heading"),r=t("openwb-base-alert");return d(),u("div",m,[o(i,null,{default:s(()=>[a(" Einstellungen für Siemens Zähler "),p("span",f,"(Modul: "+l(e.$options.name)+")",1)]),_:1}),o(r,{subtype:"info"},{default:s(()=>[a(" Diese Komponente erfordert keine Einstellungen. ")]),_:1})])}const k=c(_,[["render",b],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/siemens/siemens/counter.vue"]]);export{k as default};
import{_ as c,p as o,k as _,l as m,A as a,L as s,u,q as b,x as v}from"./vendor-59c39d33.js";import"./vendor-sortablejs-1a35b5ad.js";const f={name:"DeviceSunnyBoyInverter",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0},componentId:{required:!0}},methods:{updateConfiguration(t,e=void 0){this.$emit("update:configuration",{value:t,object:e})}}},g={class:"device-sunnyboy-inverter"},y={class:"small"};function h(t,e,i,w,S,r){const d=o("openwb-base-heading"),l=o("openwb-base-button-group-input"),p=o("openwb-base-select-input");return _(),m("div",g,[a(d,null,{default:s(()=>[u(" Einstellungen für SMA Sunny Boy/Tripower Wechselrichter "),b("span",y,"(Modul: "+v(t.$options.name)+")",1)]),_:1}),a(l,{title:"Hybrid-System",buttons:[{buttonValue:!1,text:"nicht vorhanden"},{buttonValue:!0,text:"vorhanden"}],"model-value":i.configuration.hybrid,"onUpdate:modelValue":e[0]||(e[0]=n=>r.updateConfiguration(n,"configuration.hybrid"))},{help:s(()=>[u(" Diese Option aktivieren, wenn ein Tripower Smart Energy, Sunny Boy Smart Energy oder ein anderes Hybrid-System verbaut ist. ")]),_:1},8,["model-value"]),a(p,{title:"Version",notSelected:"Bitte auswählen",options:[{value:0,text:"Standard"},{value:1,text:"Core-2"},{value:2,text:"Data Manager/Cluster Controller"}],"model-value":i.configuration.version,"onUpdate:modelValue":e[1]||(e[1]=n=>r.updateConfiguration(n,"configuration.version"))},null,8,["model-value"])])}const C=c(f,[["render",h],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/sma_sunny_boy/inverter.vue"]]);export{C as default};

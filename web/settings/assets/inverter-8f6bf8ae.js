import{_ as u,p as o,k as p,l as m,A as n,L as a,u as i,q as _,x as f}from"./vendor-93bd3532.js";import"./vendor-sortablejs-b80cade1.js";const v={name:"DeviceSolarViewInverter",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0},componentId:{required:!0}},methods:{updateConfiguration(t,e=void 0){this.$emit("update:configuration",{value:t,object:e})}}},g={class:"device-solar-view-inverter"},h={class:"small"};function b(t,e,r,w,x,s){const d=o("openwb-base-heading"),c=o("openwb-base-text-input");return p(),m("div",g,[n(d,null,{default:a(()=>[i(" Einstellungen für SolarView Wechselrichter "),_("span",h,"(Modul: "+f(t.$options.name)+")",1)]),_:1}),n(c,{title:"Kommando für die Abfrage",required:"","model-value":r.configuration.command,"onUpdate:modelValue":e[0]||(e[0]=l=>s.updateConfiguration(l,"configuration.command"))},{help:a(()=>[i(" Kommandos gemäß SolarView-Dokumentation, z.B.: 00* (gesamte Anlage), 01* (Wechselrichter 1), 02* (Wechselrichter 2) ")]),_:1},8,["model-value"])])}const k=u(v,[["render",b],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/solar_view/inverter.vue"]]);export{k as default};

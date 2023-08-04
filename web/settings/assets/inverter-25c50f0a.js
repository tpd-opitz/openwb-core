import{_ as l,p as o,k as f,l as _,A as r,L as i,u as t,q as s,x as m}from"./vendor-6e5b23b4.js";import"./vendor-sortablejs-b3476726.js";const b={name:"DevicePowerfoxInverter",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0},componentId:{required:!0}},methods:{updateConfiguration(n,e=void 0){this.$emit("update:configuration",{value:n,object:e})}}},v={class:"device-powerfox-inverter"},g={class:"small"},h=s("a",{href:"https://backend.powerfox.energy/api/2.0/my/all/devices",target:"_blank",rel:"noopener noreferrer"}," https://backend.powerfox.energy/api/2.0/my/all/devices ",-1);function w(n,e,a,x,D,d){const u=o("openwb-base-heading"),c=o("openwb-base-text-input");return f(),_("div",v,[r(u,null,{default:i(()=>[t(" Einstellungen für Powerfox Wechselrichter "),s("span",g,"(Modul: "+m(n.$options.name)+")",1)]),_:1}),r(c,{title:"ID",required:"","model-value":a.configuration.id,"onUpdate:modelValue":e[0]||(e[0]=p=>d.updateConfiguration(p,"configuration.id"))},{help:i(()=>[t(" Um die ID herauszufinden mit dem Browser die Adresse "),h,t(" aufrufen und dort Benutzername und Passwort eingeben. Die Device ID ist exakt so einzutragen, wie in der Antwort des Servers. Das bedeutet insbesondere auch, die Groß-/KLeinschreibung ist zu beachten! ")]),_:1},8,["model-value"])])}const B=l(b,[["render",w],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/powerfox/inverter.vue"]]);export{B as default};
import{D as a}from"./HardwareInstallation-4f848d8b.js";import{_ as d,u as t,k as u,l,D as i,N as m,y as _}from"./vendor-a21b3a62.js";import"./vendor-fortawesome-41164876.js";import"./index-7731ba98.js";import"./vendor-bootstrap-d0c3645c.js";import"./vendor-jquery-a5dbbab1.js";import"./vendor-axios-0e6de98a.js";import"./vendor-sortablejs-3016fed8.js";import"./dynamic-import-helper-be004503.js";const c={name:"DeviceFoxEss",mixins:[a]},f={class:"device-fox_ess"};function b(o,e,v,g,x,w){const s=t("openwb-base-heading"),r=t("openwb-base-text-input"),p=t("openwb-base-number-input");return u(),l("div",f,[i(s,null,{default:m(()=>e[2]||(e[2]=[_("Einstellungen für FoxEss")])),_:1}),i(r,{title:"IP oder Hostname",subtype:"host",required:"","model-value":o.device.configuration.ip_address,"onUpdate:modelValue":e[0]||(e[0]=n=>o.updateConfiguration(n,"configuration.ip_address"))},null,8,["model-value"]),i(p,{title:"Port",required:"",min:1,max:65535,"model-value":o.device.configuration.port,"onUpdate:modelValue":e[1]||(e[1]=n=>o.updateConfiguration(n,"configuration.port"))},null,8,["model-value"])])}const y=d(c,[["render",b],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/fox_ess/fox_ess/device.vue"]]);export{y as default};
import{D as a}from"./HardwareInstallation-4f848d8b.js";import{_ as d,u as t,k as l,l as u,D as i,N as m,y as _}from"./vendor-a21b3a62.js";import"./vendor-fortawesome-41164876.js";import"./index-7731ba98.js";import"./vendor-bootstrap-d0c3645c.js";import"./vendor-jquery-a5dbbab1.js";import"./vendor-axios-0e6de98a.js";import"./vendor-sortablejs-3016fed8.js";import"./dynamic-import-helper-be004503.js";const b={name:"DeviceOpenwbFlex",mixins:[a]},c={class:"device-openwb-flex"};function f(o,e,v,w,g,x){const p=t("openwb-base-heading"),s=t("openwb-base-text-input"),r=t("openwb-base-number-input");return l(),u("div",c,[i(p,null,{default:m(()=>e[2]||(e[2]=[_(" Einstellungen für openWB-Flex ")])),_:1}),i(s,{title:"IP oder Hostname",subtype:"host",required:"","model-value":o.device.configuration.ip_address,"onUpdate:modelValue":e[0]||(e[0]=n=>o.updateConfiguration(n,"configuration.ip_address"))},null,8,["model-value"]),i(r,{title:"Port",required:"",min:1,max:65535,"model-value":o.device.configuration.port,"onUpdate:modelValue":e[1]||(e[1]=n=>o.updateConfiguration(n,"configuration.port"))},null,8,["model-value"])])}const E=d(b,[["render",f],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/openwb/openwb_flex/device.vue"]]);export{E as default};
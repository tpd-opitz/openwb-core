import{D as d}from"./HardwareInstallation-4f848d8b.js";import{_ as u,u as i,k as p,l,D as t,N as m,y as v}from"./vendor-a21b3a62.js";import"./vendor-fortawesome-41164876.js";import"./index-7731ba98.js";import"./vendor-bootstrap-d0c3645c.js";import"./vendor-jquery-a5dbbab1.js";import"./vendor-axios-0e6de98a.js";import"./vendor-sortablejs-3016fed8.js";import"./dynamic-import-helper-be004503.js";const f={name:"DeviceVarta",mixins:[d]},b={class:"device-varta"};function _(o,e,c,g,w,V){const r=i("openwb-base-heading"),s=i("openwb-base-text-input"),a=i("openwb-base-number-input");return p(),l("div",b,[t(r,null,{default:m(()=>e[3]||(e[3]=[v(" Einstellungen für Varta ")])),_:1}),t(s,{title:"IP oder Hostname",subtype:"host",required:"","model-value":o.device.configuration.ip_address,"onUpdate:modelValue":e[0]||(e[0]=n=>o.updateConfiguration(n,"configuration.ip_address"))},null,8,["model-value"]),t(a,{title:"Port",required:"",min:1,max:65535,"model-value":o.device.configuration.port,"onUpdate:modelValue":e[1]||(e[1]=n=>o.updateConfiguration(n,"configuration.port"))},null,8,["model-value"]),t(a,{title:"Modbus ID",required:"","model-value":o.device.configuration.modbus_id,min:"1",max:"255","onUpdate:modelValue":e[2]||(e[2]=n=>o.updateConfiguration(n,"configuration.modbus_id"))},null,8,["model-value"])])}const y=u(f,[["render",_],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/varta/varta/device.vue"]]);export{y as default};
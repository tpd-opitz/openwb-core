import{B as r}from"./DataManagement-f7ee6dfd.js";import{_ as i,u as s,k as p,l as d,D as t,N as m,y as a,x as l}from"./vendor-a21b3a62.js";import"./vendor-fortawesome-41164876.js";import"./index-7731ba98.js";import"./vendor-bootstrap-d0c3645c.js";import"./vendor-jquery-a5dbbab1.js";import"./vendor-axios-0e6de98a.js";import"./vendor-sortablejs-3016fed8.js";import"./dynamic-import-helper-be004503.js";const b={name:"BackupCloudSamba",mixins:[r]},f={class:"backup-cloud-samba"};function g(o,e,v,C,k,c){const u=s("openwb-base-text-input");return p(),d("div",f,[t(u,{title:"Server",subtype:"host",required:"","model-value":o.backupCloud.configuration.smb_server,"onUpdate:modelValue":e[0]||(e[0]=n=>o.updateConfiguration(n,"configuration.smb_server"))},null,8,["model-value"]),t(u,{title:"Freigabe",required:"","model-value":o.backupCloud.configuration.smb_share,"onUpdate:modelValue":e[1]||(e[1]=n=>o.updateConfiguration(n,"configuration.smb_share"))},null,8,["model-value"]),t(u,{title:"Unterordner (optional)","model-value":o.backupCloud.configuration.smb_path,pattern:'(^\\/$)|(^([^\\\\:"\\|*?<>]+\\/)+$)',required:"","onUpdate:modelValue":e[2]||(e[2]=n=>o.updateConfiguration(n,"configuration.smb_path"))},{help:m(()=>e[5]||(e[5]=[a(" Jeder Unterordner muss mit / enden."),l("br",null,null,-1),a(' Die Zeichen \\:"|*?<> sind verboten!'),l("br",null,null,-1),a(" Beispiel 1: openwb/ "),l("br",null,null,-1),a(" Beispiel 2: openwb/lp2/ ")])),_:1},8,["model-value"]),t(u,{title:"Benutzer",subtype:"user","model-value":o.backupCloud.configuration.smb_user,"onUpdate:modelValue":e[3]||(e[3]=n=>o.updateConfiguration(n,"configuration.smb_user"))},null,8,["model-value"]),t(u,{title:"Kennwort",subtype:"password","model-value":o.backupCloud.configuration.smb_password,"onUpdate:modelValue":e[4]||(e[4]=n=>o.updateConfiguration(n,"configuration.smb_password"))},null,8,["model-value"])])}const D=i(b,[["render",g],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/backup_clouds/samba/backup_cloud.vue"]]);export{D as default};
import{u as S}from"./index-CtySFcBa.js";import{l as y,C as x,F as k,D as V}from"./vendor-fortawesome-C68yAli-.js";import{_ as w}from"./vendor-inkline-Ce5aFAnW.js";import{o as _,l as f,n as e,k as s,s as o,q as n,I as M,j as A,i as C}from"./vendor-CZ1MGz7j.js";import{D as I}from"./DashBoardCard-BterAPyf.js";y.add(x);const P={name:"ReloadButton",components:{FontAwesomeIcon:k},props:{},data(){return{}},methods:{reloadDisplay(){location.reload()}}};function F(b,t,p,h,u,m){const d=n("FontAwesomeIcon"),l=n("i-button");return _(),f(l,{color:"success",size:"lg",onClick:t[0]||(t[0]=a=>m.reloadDisplay())},{default:e(()=>[t[1]||(t[1]=s(" Display neu laden ")),o(d,{"fixed-width":"",icon:["fas","fa-undo"]})]),_:1})}const z=w(P,[["render",F]]);y.add(x);const D={name:"RebootButton",components:{FontAwesomeIcon:k},props:{},data(){return{mqttStore:S(),showModal:!1}},methods:{toggleModal(){this.showModal=!this.showModal},cancel(){this.toggleModal()},confirm(){this.toggleModal(),console.log("reboot requested"),this.mqttStore.settings.parentChargePoint1!==void 0?(console.log("rebooting secondary charge point:",this.mqttStore.settings.parentChargePoint1),this.$root.sendSystemCommand("chargepointReboot",{chargePoint:this.mqttStore.settings.parentChargePoint1})):(console.log("rebooting primary system"),this.$root.sendSystemCommand("systemReboot"))}}};function N(b,t,p,h,u,m){const d=n("FontAwesomeIcon"),l=n("i-container"),a=n("i-button"),r=n("i-column"),c=n("i-row"),g=n("i-modal");return _(),f(a,{color:"warning",size:"lg",onClick:t[3]||(t[3]=i=>m.toggleModal())},{default:e(()=>[t[8]||(t[8]=s(" openWB neu starten ")),o(d,{"fixed-width":"",icon:["fas","fa-undo"]}),(_(),f(M,{to:"body"},[o(g,{modelValue:u.showModal,"onUpdate:modelValue":t[2]||(t[2]=i=>u.showModal=i),size:"sm"},{header:e(()=>t[4]||(t[4]=[s(" openWB neu starten... ")])),footer:e(()=>[o(l,null,{default:e(()=>[o(c,null,{default:e(()=>[o(r,{class:"_text-align:right"},{default:e(()=>[o(a,{color:"success",onClick:t[0]||(t[0]=i=>m.cancel())},{default:e(()=>t[6]||(t[6]=[s(" Zurück ")])),_:1})]),_:1}),o(r,null,{default:e(()=>[o(a,{color:"danger",onClick:t[1]||(t[1]=i=>m.confirm())},{default:e(()=>t[7]||(t[7]=[s(" Neustart ")])),_:1})]),_:1})]),_:1})]),_:1})]),default:e(()=>[o(l,null,{default:e(()=>t[5]||(t[5]=[s(" Möchten Sie diese openWB wirklich neu starten? ")])),_:1})]),_:1},8,["modelValue"])]))]),_:1})}const R=w(D,[["render",N]]);y.add(V);const W={name:"ShutdownButton",components:{FontAwesomeIcon:k},props:{},data(){return{mqttStore:S(),showModal:!1}},methods:{toggleModal(){this.showModal=!this.showModal},cancel(){this.toggleModal()},confirm(){this.toggleModal(),console.log("shutdown requested"),this.mqttStore.settings.parentChargePoint1!==void 0?(console.log("shutting down secondary charge point:",this.mqttStore.settings.parentChargePoint1),this.$root.sendSystemCommand("chargepointShutdown",{chargePoint:this.mqttStore.settings.parentChargePoint1})):(console.log("shutting down primary system"),this.$root.sendSystemCommand("systemShutdown"))}}};function L(b,t,p,h,u,m){const d=n("FontAwesomeIcon"),l=n("i-container"),a=n("i-button"),r=n("i-column"),c=n("i-row"),g=n("i-modal");return _(),f(a,{color:"danger",size:"lg",onClick:t[3]||(t[3]=i=>m.toggleModal())},{default:e(()=>[t[8]||(t[8]=s(" openWB ausschalten ")),o(d,{"fixed-width":"",icon:["fas","fa-power-off"]}),(_(),f(M,{to:"body"},[o(g,{modelValue:u.showModal,"onUpdate:modelValue":t[2]||(t[2]=i=>u.showModal=i),size:"sm"},{header:e(()=>t[4]||(t[4]=[s(" openWB ausschalten... ")])),footer:e(()=>[o(l,null,{default:e(()=>[o(c,null,{default:e(()=>[o(r,{class:"_text-align:right"},{default:e(()=>[o(a,{color:"success",onClick:t[0]||(t[0]=i=>m.cancel())},{default:e(()=>t[6]||(t[6]=[s(" Zurück ")])),_:1})]),_:1}),o(r,null,{default:e(()=>[o(a,{color:"danger",onClick:t[1]||(t[1]=i=>m.confirm())},{default:e(()=>t[7]||(t[7]=[s(" Ausschalten ")])),_:1})]),_:1})]),_:1})]),_:1})]),default:e(()=>[o(l,null,{default:e(()=>t[5]||(t[5]=[s(" Möchten Sie diese openWB wirklich ausschalten?"),A("br",null,null,-1),s(" Nach dem Ausschalten muss die Ladestation komplett spannungsfrei geschaltet werden. Erst beim erneuten Zuschalten der Spannung fährt das System wieder hoch. ")])),_:1})]),_:1},8,["modelValue"])]))]),_:1})}const T=w(W,[["render",L]]),U={name:"StatusView",components:{ReloadButton:z,RebootButton:R,ShutdownButton:T,DashBoardCard:I},props:{changesLocked:{required:!1,type:Boolean,default:!1}},data(){return{mqttStore:S()}}};function Z(b,t,p,h,u,m){const d=n("i-form-label"),l=n("i-column"),a=n("i-input"),r=n("i-row"),c=n("i-form-group"),g=n("reload-button"),i=n("reboot-button"),q=n("shutdown-button"),v=n("i-form"),B=n("i-container"),$=n("dash-board-card");return _(),f($,{color:"primary"},{headerLeft:e(()=>t[0]||(t[0]=[s(" Status ")])),default:e(()=>[o(B,null,{default:e(()=>[o(v,null,{default:e(()=>[o(r,null,{default:e(()=>[o(l,null,{default:e(()=>[o(c,null,{default:e(()=>[o(r,{class:"_margin-top:2"},{default:e(()=>[o(l,{xl:"2",lg:"3",md:"4"},{default:e(()=>[o(d,null,{default:e(()=>t[1]||(t[1]=[s(" IP-Adresse ")])),_:1})]),_:1}),o(l,null,{default:e(()=>[o(a,{id:"input_system_ip",plaintext:"","model-value":u.mqttStore.getSystemIp},null,8,["model-value"])]),_:1})]),_:1}),o(r,{class:"_margin-top:1"},{default:e(()=>[o(l,{xl:"2",lg:"3",md:"4"},{default:e(()=>[o(d,null,{default:e(()=>t[2]||(t[2]=[s(" Systemzeit ")])),_:1})]),_:1}),o(l,null,{default:e(()=>[o(a,{id:"input_system_time",plaintext:"","model-value":u.mqttStore.getSystemTime},null,8,["model-value"])]),_:1})]),_:1}),o(r,{class:"_margin-top:1"},{default:e(()=>[o(l,{xl:"2",lg:"3",md:"4"},{default:e(()=>[o(d,null,{default:e(()=>t[3]||(t[3]=[s(" Version ")])),_:1})]),_:1}),o(l,null,{default:e(()=>[o(a,{id:"input_system_version",plaintext:"","model-value":u.mqttStore.getSystemVersion},null,8,["model-value"])]),_:1})]),_:1}),o(r,{class:"_margin-top:1"},{default:e(()=>[o(l,{xl:"2",lg:"3",md:"4"},{default:e(()=>[o(d,null,{default:e(()=>t[4]||(t[4]=[s(" Version (Details) ")])),_:1})]),_:1}),o(l,null,{default:e(()=>[o(a,{id:"input_system_commit",plaintext:"","model-value":u.mqttStore.getSystemCurrentCommit},null,8,["model-value"])]),_:1})]),_:1}),o(r,{class:"_margin-top:1"},{default:e(()=>[o(l,{xl:"2",lg:"3",md:"4"},{default:e(()=>[o(d,null,{default:e(()=>t[5]||(t[5]=[s(" Entwicklungszweig ")])),_:1})]),_:1}),o(l,null,{default:e(()=>[o(a,{id:"input_system_branch",plaintext:"","model-value":u.mqttStore.getSystemBranch},null,8,["model-value"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),p.changesLocked?C("",!0):(_(),f(r,{key:0,class:"_margin-top:5",between:""},{default:e(()=>[o(l,null,{default:e(()=>[o(g,{block:""})]),_:1})]),_:1})),p.changesLocked?C("",!0):(_(),f(r,{key:1,between:""},{default:e(()=>[o(l,null,{default:e(()=>[o(i,{block:"",class:"_margin-top:2"})]),_:1}),o(l,null,{default:e(()=>[o(q,{block:"",class:"_margin-top:2"})]),_:1})]),_:1}))]),_:1})]),_:1})]),_:1})}const J=w(U,[["render",Z]]);export{J as default};
import{u as W}from"./index-d95c9514.js";import{D as Y}from"./DashBoardCard-74212101.js";import{S as $,C as ee}from"./ChargePointPlugBadge-0d003abe.js";import{l as F,f as Z,a as j,F as U,b as te,c as ne,j as le,k as oe,m as ie,n as ae,o as re,e as se,p as ce,q as de,r as ue,s as ge,t as he,u as me,v as Ce,w as fe,x as _e,y as pe,z as ve,A as Pe}from"./vendor-fortawesome-63041232.js";import{l as d,o as c,n as v,p as t,s as e,z as M,k as a,x as C,i as u,I as be,e as b,j as Ve,F as B,A as L}from"./vendor-caccd77e.js";import{_ as z}from"./vendor-inkline-cfd5d53d.js";F.add(Z,j);const Se={name:"ChargePointLockButton",props:{chargePointId:{required:!0,type:Number},changesLocked:{required:!1,type:Boolean,default:!1}},data(){return{mqttStore:W()}},components:{FontAwesomeIcon:U},computed:{locked(){return this.mqttStore.getChargePointManualLock(this.chargePointId)},stateIcon(){return this.locked?["fas","fa-lock"]:["fas","fa-lock-open"]},stateClass(){return this.locked?["_color:danger"]:"_color:success"}},methods:{toggleChargePointManualLock(){this.changesLocked||this.$root.sendTopicToBroker(`openWB/chargepoint/${this.chargePointId}/set/manual_lock`,!this.mqttStore.getValueBool(`openWB/chargepoint/${this.chargePointId}/set/manual_lock`))}}};function ke(i,n,s,f,l,r){const S=d("font-awesome-icon"),_=d("i-button");return c(),v(_,{size:"lg",disabled:s.changesLocked,outline:s.changesLocked},{default:t(()=>[e(S,{"fixed-width":"",icon:r.stateIcon,class:M(r.stateClass),onClick:n[0]||(n[0]=p=>r.toggleChargePointManualLock())},null,8,["icon","class"])]),_:1},8,["disabled","outline"])}const Ie=z(Se,[["render",ke],["__file","/home/openwb/core/packages/modules/display_themes/cards/source/src/components/ChargePointLockButton.vue"]]),qe={name:"ExtendedNumberInput",inheritAttrs:!1,props:{modelValue:{type:Number},unit:{type:String},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:Number,default:1},labels:{type:Array}},emits:["update:modelValue"],data(){return{minimum:this.labels?0:this.min,maximum:this.labels?this.labels.length-1:this.max,stepSize:this.labels?1:this.step}},computed:{label(){var i;return this.labels&&this.inputValue!=null?this.inputValue<this.labels.length?i=this.labels[this.inputValue].label:console.error("index out of bounds: "+this.inputValue):i=this.inputValue,typeof i=="number"&&(i=i.toLocaleString(void 0,{minimumFractionDigits:this.precision,maximumFractionDigits:this.precision})),i},precision(){if(!isFinite(this.stepSize))return 0;for(var i=1,n=0;Math.round(this.stepSize*i)/i!==this.stepSize;)i*=10,n++;return n},inputValue:{get(){if(this.labels){var i=void 0;for(let n=0;n<this.labels.length;n++)if(this.labels[n].value==this.modelValue){i=n;break}return i===void 0&&this.modelValue!==void 0?(console.warn("inputValue: not found in values: ",this.modelValue,"using minimum as default: ",this.minimum),this.minimum):i}return this.modelValue},set(i){if(this.labels){var n=this.labels[i].value;this.$emit("update:modelValue",n)}else this.$emit("update:modelValue",i)}}},methods:{increment(){var i=Math.min(this.inputValue+this.stepSize,this.maximum);this.inputValue=Math.round(i*Math.pow(10,this.precision))/Math.pow(10,this.precision)},decrement(){var i=Math.max(this.inputValue-this.stepSize,this.minimum);this.inputValue=Math.round(i*Math.pow(10,this.precision))/Math.pow(10,this.precision)}}};function we(i,n,s,f,l,r){const S=d("i-button"),_=d("i-input");return c(),v(_,{plaintext:"",class:"_text-align:right",size:"lg",modelValue:r.label,"onUpdate:modelValue":n[0]||(n[0]=p=>r.label=p)},{prepend:t(()=>[e(S,{onClick:r.decrement},{default:t(()=>[a("-")]),_:1},8,["onClick"])]),suffix:t(()=>[a(C(s.unit),1)]),append:t(()=>[e(S,{onClick:r.increment},{default:t(()=>[a("+")]),_:1},8,["onClick"])]),_:1},8,["modelValue"])}const O=z(qe,[["render",we],["__file","/home/openwb/core/packages/modules/display_themes/cards/source/src/components/ExtendedNumberInput.vue"]]);F.add(te,ne);const xe={name:"ManualSocInput",props:{modelValue:{required:!0,type:Boolean,default:!1},vehicleId:{required:!0,type:Number,default:0}},data(){return{mqttStore:W(),newSoc:0}},components:{ExtendedNumberInput:O,FontAwesomeIcon:U},emits:["update:modelValue"],methods:{enter(i){let n=this.newSoc*10+i;n>=0&&n<=100&&(this.newSoc=n)},removeDigit(){this.newSoc=Math.trunc(this.newSoc/10)},clear(){this.newSoc=0},close(){this.$emit("update:modelValue",!1),this.newSoc=0},updateManualSoc(){this.$root.sendTopicToBroker(`openWB/vehicle/${this.vehicleId}/soc_module/general_config/soc_start`,this.newSoc),this.close()}}};function ye(i,n,s,f,l,r){const S=d("extended-number-input"),_=d("i-column"),p=d("i-row"),h=d("i-button"),k=d("i-container"),g=d("FontAwesomeIcon"),w=d("i-modal");return c(),v(be,{to:"body"},[e(w,{modelValue:s.modelValue,"onUpdate:modelValue":n[15]||(n[15]=m=>i.$emit("update:modelValue",m)),size:"sm"},{header:t(()=>[a(' SoC für Fahrzeug "'+C(l.mqttStore.getVehicleName(s.vehicleId))+'" ',1)]),footer:t(()=>[e(k,null,{default:t(()=>[e(p,null,{default:t(()=>[u(" charge point data on left side "),e(_,null,{default:t(()=>[e(h,{color:"danger",onClick:n[13]||(n[13]=m=>r.close())},{default:t(()=>[a(" Zurück ")]),_:1})]),_:1}),e(_,{class:"_text-align:right"},{default:t(()=>[e(h,{color:"success",onClick:n[14]||(n[14]=m=>r.updateManualSoc())},{default:t(()=>[a(" OK ")]),_:1})]),_:1})]),_:1})]),_:1})]),default:t(()=>[e(k,null,{default:t(()=>[e(p,{center:"",class:"_padding-bottom:1"},{default:t(()=>[e(_,null,{default:t(()=>[e(S,{modelValue:l.newSoc,"onUpdate:modelValue":n[0]||(n[0]=m=>l.newSoc=m),unit:"%",min:0,max:100,step:1,size:"lg",class:"_text-align:center"},null,8,["modelValue"])]),_:1})]),_:1}),e(p,{center:"",class:"_padding-bottom:1"},{default:t(()=>[e(_,{class:"_flex-grow:0"},{default:t(()=>[e(h,{size:"lg",class:"numberButton",onClick:n[1]||(n[1]=m=>r.enter(1))},{default:t(()=>[a("1")]),_:1})]),_:1}),e(_,{class:"_flex-grow:0"},{default:t(()=>[e(h,{size:"lg",class:"numberButton",onClick:n[2]||(n[2]=m=>r.enter(2))},{default:t(()=>[a("2")]),_:1})]),_:1}),e(_,{class:"_flex-grow:0"},{default:t(()=>[e(h,{size:"lg",class:"numberButton",onClick:n[3]||(n[3]=m=>r.enter(3))},{default:t(()=>[a("3")]),_:1})]),_:1})]),_:1})]),_:1}),e(k,null,{default:t(()=>[e(p,{center:"",class:"_padding-bottom:1"},{default:t(()=>[e(_,{class:"_flex-grow:0"},{default:t(()=>[e(h,{size:"lg",class:"numberButton",onClick:n[4]||(n[4]=m=>r.enter(4))},{default:t(()=>[a("4")]),_:1})]),_:1}),e(_,{class:"_flex-grow:0"},{default:t(()=>[e(h,{size:"lg",class:"numberButton",onClick:n[5]||(n[5]=m=>r.enter(5))},{default:t(()=>[a("5")]),_:1})]),_:1}),e(_,{class:"_flex-grow:0"},{default:t(()=>[e(h,{size:"lg",class:"numberButton",onClick:n[6]||(n[6]=m=>r.enter(6))},{default:t(()=>[a("6")]),_:1})]),_:1})]),_:1})]),_:1}),e(k,null,{default:t(()=>[e(p,{center:"",class:"_padding-bottom:1"},{default:t(()=>[e(_,{class:"_flex-grow:0"},{default:t(()=>[e(h,{size:"lg",class:"numberButton",onClick:n[7]||(n[7]=m=>r.enter(7))},{default:t(()=>[a("7")]),_:1})]),_:1}),e(_,{class:"_flex-grow:0"},{default:t(()=>[e(h,{size:"lg",class:"numberButton",onClick:n[8]||(n[8]=m=>r.enter(8))},{default:t(()=>[a("8")]),_:1})]),_:1}),e(_,{class:"_flex-grow:0"},{default:t(()=>[e(h,{size:"lg",class:"numberButton",onClick:n[9]||(n[9]=m=>r.enter(9))},{default:t(()=>[a("9")]),_:1})]),_:1})]),_:1})]),_:1}),e(k,null,{default:t(()=>[e(p,{center:"",class:"_padding-bottom:1"},{default:t(()=>[e(_,{class:"_flex-grow:0"},{default:t(()=>[e(h,{size:"lg",class:"numberButton",onClick:n[10]||(n[10]=m=>r.clear())},{default:t(()=>[e(g,{"fixed-width":"",icon:["fas","fa-eraser"]})]),_:1})]),_:1}),e(_,{class:"_flex-grow:0"},{default:t(()=>[e(h,{size:"lg",class:"numberButton",onClick:n[11]||(n[11]=m=>r.enter(0))},{default:t(()=>[a("0")]),_:1})]),_:1}),e(_,{class:"_flex-grow:0"},{default:t(()=>[e(h,{size:"lg",class:"numberButton",onClick:n[12]||(n[12]=m=>r.removeDigit())},{default:t(()=>[e(g,{"fixed-width":"",icon:["fas","fa-delete-left"]})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])])}const Te=z(xe,[["render",ye],["__scopeId","data-v-4ad611a1"],["__file","/home/openwb/core/packages/modules/display_themes/cards/source/src/components/ChargePoints/ManualSocInput.vue"]]);F.add(le,oe,ie,ae,Z,j,re,se,ce,de,ue,ge,he,me,Ce,fe,_e,pe,ve,Pe);const Be={name:"ChargePointsView",data(){return{mqttStore:W(),modalChargePointSettingsVisible:!1,modalChargePointId:0,modalVehicleId:0,modalActiveTab:"tab-general",modalManualSocInputVisible:!1}},props:{changesLocked:{required:!1,type:Boolean,default:!1}},components:{DashBoardCard:Y,SparkLine:$,ChargePointPlugBadge:ee,ChargePointLockButton:Ie,ExtendedNumberInput:O,ManualSocInput:Te,FontAwesomeIcon:U},computed:{vehicleList(){let i=this.mqttStore.getVehicleList;var n=[];return Object.keys(i).forEach(s=>{let f=parseInt(s.match(/(?:\/)([0-9]+)(?=\/)*/g)[0].replace(/[^0-9]+/g,""));n.push({id:f,name:i[s]})}),n}},methods:{toggleChargePointSettings(i){this.modalChargePointId!=i&&(this.modalActiveTab="tab-general"),this.modalChargePointId=i,this.modalChargePointSettingsVisible=!0},handleSocClick(i){let n=this.mqttStore.getChargePointConnectedVehicleId(i);if(this.mqttStore.getVehicleSocIsManual(n)){this.modalVehicleId=n,this.modalManualSocInputVisible=!0;return}this.$root.sendTopicToBroker(`openWB/set/vehicle/${n}/get/force_soc_update`,1)},setChargePointConnectedVehicle(i,n){n.id!=this.mqttStore.getChargePointConnectedVehicleId(i)&&this.$root.sendTopicToBroker(`openWB/chargepoint/${i}/config/ev`,n.id)},setChargePointConnectedVehicleChargeMode(i,n){if(n.id!=this.mqttStore.getChargePointConnectedVehicleChargeMode(i)){var s=this.mqttStore.getChargePointConnectedVehicleChargeTemplateIndex(i);this.$root.sendTopicToBroker(`openWB/vehicle/template/charge_template/${s}/chargemode/selected`,n)}},setChargePointConnectedVehiclePriority(i,n){if(n!=this.mqttStore.getChargePointConnectedVehiclePriority(i)){var s=this.mqttStore.getChargePointConnectedVehicleChargeTemplateIndex(i);this.$root.sendTopicToBroker(`openWB/vehicle/template/charge_template/${s}/prio`,n)}},setChargePointConnectedVehicleTimeChargingActive(i,n){if(n!=this.mqttStore.getChargePointConnectedVehicleTimeChargingActive(i)){var s=this.mqttStore.getChargePointConnectedVehicleChargeTemplateIndex(i);this.$root.sendTopicToBroker(`openWB/vehicle/template/charge_template/${s}/time_charging/active`,n)}},setChargePointConnectedVehicleInstantChargingCurrent(i,n){if(n&&n!=this.mqttStore.getChargePointConnectedVehicleInstantChargingCurrent(i)){var s=this.mqttStore.getChargePointConnectedVehicleChargeTemplateIndex(i);this.$root.sendTopicToBroker(`openWB/vehicle/template/charge_template/${s}/chargemode/instant_charging/current`,parseFloat(n))}},setChargePointConnectedVehicleInstantChargingLimit(i,n){if(n&&n!=this.mqttStore.getChargePointConnectedVehicleInstantChargingLimit(i).selected){var s=this.mqttStore.getChargePointConnectedVehicleChargeTemplateIndex(i);this.$root.sendTopicToBroker(`openWB/vehicle/template/charge_template/${s}/chargemode/instant_charging/limit/selected`,n)}},setChargePointConnectedVehicleInstantChargingLimitSoc(i,n){if(n&&n!=this.mqttStore.getChargePointConnectedVehicleInstantChargingLimit(i).soc){var s=this.mqttStore.getChargePointConnectedVehicleChargeTemplateIndex(i);this.$root.sendTopicToBroker(`openWB/vehicle/template/charge_template/${s}/chargemode/instant_charging/limit/soc`,parseInt(n))}},setChargePointConnectedVehicleInstantChargingLimitAmount(i,n){if(n&&n!=this.mqttStore.getChargePointConnectedVehicleInstantChargingLimit(i).amount){var s=this.mqttStore.getChargePointConnectedVehicleChargeTemplateIndex(i);this.$root.sendTopicToBroker(`openWB/vehicle/template/charge_template/${s}/chargemode/instant_charging/limit/amount`,n)}},setChargePointConnectedVehiclePvChargingFeedInLimit(i,n){if(n!=this.mqttStore.getChargePointConnectedVehiclePvChargingFeedInLimit(i)){var s=this.mqttStore.getChargePointConnectedVehicleChargeTemplateIndex(i);this.$root.sendTopicToBroker(`openWB/vehicle/template/charge_template/${s}/chargemode/pv_charging/feed_in_limit`,n)}},setChargePointConnectedVehiclePvChargingMinCurrent(i,n){let s=this.mqttStore.getChargePointConnectedVehiclePvChargingMinCurrent(i),f=parseInt(n);if(f!=s&&!isNaN(f)){var l=this.mqttStore.getChargePointConnectedVehicleChargeTemplateIndex(i);this.$root.sendTopicToBroker(`openWB/vehicle/template/charge_template/${l}/chargemode/pv_charging/min_current`,f)}},setChargePointConnectedVehiclePvChargingMinSoc(i,n){let s=this.mqttStore.getChargePointConnectedVehiclePvChargingMinSoc(i),f=parseInt(n);if(f!=s&&!isNaN(f)){var l=this.mqttStore.getChargePointConnectedVehicleChargeTemplateIndex(i);this.$root.sendTopicToBroker(`openWB/vehicle/template/charge_template/${l}/chargemode/pv_charging/min_soc`,f)}},setChargePointConnectedVehiclePvChargingMinSocCurrent(i,n){let s=this.mqttStore.getChargePointConnectedVehiclePvChargingMinSocCurrent(i),f=parseInt(n);if(f!=s&&!isNaN(f)){var l=this.mqttStore.getChargePointConnectedVehicleChargeTemplateIndex(i);this.$root.sendTopicToBroker(`openWB/vehicle/template/charge_template/${l}/chargemode/pv_charging/min_soc_current`,f)}},setChargePointConnectedVehiclePvChargingMaxSoc(i,n){let s=this.mqttStore.getChargePointConnectedVehiclePvChargingMaxSoc(i),f=parseInt(n);if(f!=s&&!isNaN(f)){var l=this.mqttStore.getChargePointConnectedVehicleChargeTemplateIndex(i);this.$root.sendTopicToBroker(`openWB/vehicle/template/charge_template/${l}/chargemode/pv_charging/max_soc`,f)}},setChargePointConnectedVehicleScheduledChargingPlanActive(i,n){this.$root.sendTopicToBroker(`${i}/active`,n)},setChargePointConnectedVehicleTimeChargingPlanActive(i,n){this.$root.sendTopicToBroker(`${i}/active`,n)}}},Le={class:"charge-points-card-wrapper"},Me={key:0},ze={key:0},Ae={key:1},Ne={key:2},We={key:3},Fe={key:4},Ue={key:0},Ee={key:1},De={key:2},Ze={key:3},je={key:4};function Oe(i,n,s,f,l,r){const S=d("charge-point-plug-badge"),_=d("charge-point-lock-button"),p=d("i-column"),h=d("i-row"),k=d("spark-line"),g=d("font-awesome-icon"),w=d("i-badge"),m=d("i-button"),A=d("i-container"),R=d("dash-board-card"),x=d("i-tab-title"),V=d("i-form-label"),E=d("i-select"),P=d("i-form-group"),X=d("i-select-option"),N=d("i-toggle"),y=d("i-form"),T=d("i-tab"),I=d("extended-number-input"),G=d("i-button-group"),D=d("i-alert"),H=d("i-tabs"),J=d("i-modal"),K=d("manual-soc-input");return c(),b(B,null,[Ve("div",Le,[(c(!0),b(B,null,L(l.mqttStore.getChargePointIds,o=>(c(),v(R,{key:o,color:"primary"},{headerLeft:t(()=>[a(C(l.mqttStore.getChargePointName(o)),1)]),headerRight:t(()=>[e(S,{chargePointId:[o]},null,8,["chargePointId"])]),default:t(()=>[e(A,null,{default:t(()=>[e(h,null,{default:t(()=>[u(" charge point data on left side "),e(p,null,{default:t(()=>[e(h,null,{default:t(()=>[e(p,{class:"_padding-left:0 _padding-right:0"},{default:t(()=>[e(_,{chargePointId:o,changesLocked:s.changesLocked},null,8,["chargePointId","changesLocked"])]),_:2},1024),e(p,{class:"_text-align:right _padding-left:0"},{default:t(()=>[a(C(l.mqttStore.getChargePointPower(o))+" "+C(l.mqttStore.getChargePointPhasesInUse(o))+" "+C(l.mqttStore.getChargePointSetCurrent(o)),1)]),_:2},1024)]),_:2},1024),e(h,{class:"_padding-top:1"},{default:t(()=>[e(p,{class:"_padding-left:0"},{default:t(()=>[e(k,{color:"var(--color--primary)",data:l.mqttStore.getChargePointPowerChartData(o)},null,8,["data"])]),_:2},1024)]),_:2},1024)]),_:2},1024),u(" vehicle data on right side "),e(p,{md:"6"},{default:t(()=>[u(" vehicle and soc "),e(h,{class:"_display:flex"},{default:t(()=>[e(p,{class:"_padding-left:0 _padding-right:0 _flex-grow:1"},{default:t(()=>[e(w,{size:"lg",class:"full-width"},{default:t(()=>[e(g,{"fixed-width":"",icon:["fas","fa-car"]}),a(" "+C(l.mqttStore.getChargePointConnectedVehicleName(o)),1)]),_:2},1024)]),_:2},1024),l.mqttStore.getVehicleSocConfigured(l.mqttStore.getChargePointConnectedVehicleId(o))||l.mqttStore.getVehicleFaultState(l.mqttStore.getChargePointConnectedVehicleId(o))!=0?(c(),v(p,{key:0,class:"_flex-grow:0 _padding-right:0 _padding-left:1"},{default:t(()=>[e(m,{size:"sm",disabled:s.changesLocked,onClick:q=>r.handleSocClick(o)},{default:t(()=>[l.mqttStore.getVehicleSocConfigured(l.mqttStore.getChargePointConnectedVehicleId(o))?(c(),b("span",Me,[e(g,{"fixed-width":"",icon:l.mqttStore.getVehicleSocIsManual(l.mqttStore.getChargePointConnectedVehicleId(o))?["fas","fa-edit"]:["fas","fa-car-battery"]},null,8,["icon"]),a(" "+C(l.mqttStore.getChargePointConnectedVehicleSoc(o).soc)+"% ",1)])):u("v-if",!0),l.mqttStore.getVehicleFaultState(l.mqttStore.getChargePointConnectedVehicleId(o))!=0?(c(),v(g,{key:1,"fixed-width":"",icon:l.mqttStore.getVehicleFaultState(l.mqttStore.getChargePointConnectedVehicleId(o))>0?l.mqttStore.getVehicleFaultState(l.mqttStore.getChargePointConnectedVehicleId(o))>1?["fas","times-circle"]:["fas","exclamation-triangle"]:[],class:M(l.mqttStore.getVehicleFaultState(l.mqttStore.getChargePointConnectedVehicleId(o))>0?l.mqttStore.getVehicleFaultState(l.mqttStore.getChargePointConnectedVehicleId(o))>1?"_color:danger":"_color:warning":"")},null,8,["icon","class"])):u("v-if",!0)]),_:2},1032,["disabled","onClick"])]),_:2},1024)):u("v-if",!0)]),_:2},1024),u(" charge mode info "),e(h,{class:"_padding-top:1 _display:flex"},{default:t(()=>[e(p,{class:"_padding-left:0 _padding-right:0 _flex-grow:1"},{default:t(()=>[e(w,{size:"lg",class:"full-width",color:l.mqttStore.getChargePointConnectedVehicleChargeMode(o).class},{default:t(()=>[a(C(l.mqttStore.getChargePointConnectedVehicleChargeMode(o).label),1)]),_:2},1032,["color"])]),_:2},1024),l.mqttStore.getChargePointConnectedVehiclePriority(o)||l.mqttStore.getChargePointConnectedVehicleTimeChargingActive(o)?(c(),v(p,{key:0,class:"_flex-grow:0 _padding-right:0 _padding-left:1"},{default:t(()=>[e(w,{size:"lg"},{default:t(()=>[l.mqttStore.getChargePointConnectedVehiclePriority(o)?(c(),v(g,{key:0,"fixed-width":"",icon:["fas","fa-star"],class:"_color:warning"})):u("v-if",!0),l.mqttStore.getChargePointConnectedVehicleTimeChargingActive(o)?(c(),v(g,{key:1,"fixed-width":"",icon:l.mqttStore.getChargePointConnectedVehicleTimeChargingRunning(o)?["fas","fa-clock"]:["far","fa-clock"],class:M(l.mqttStore.getChargePointConnectedVehicleTimeChargingRunning(o)?"_color:success":"")},null,8,["icon","class"])):u("v-if",!0)]),_:2},1024)]),_:2},1024)):u("v-if",!0)]),_:2},1024),u(" settings button "),s.changesLocked?u("v-if",!0):(c(),v(h,{key:0,class:"_padding-top:1"},{default:t(()=>[e(p,{class:"_padding-left:0 _padding-right:0"},{default:t(()=>[e(m,{block:"",onClick:q=>r.toggleChargePointSettings(o)},{default:t(()=>[e(g,{"fixed-width":"",icon:["fas","fa-wrench"]})]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024))]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),u(" modals "),u(" charge point settings "),e(J,{modelValue:l.modalChargePointSettingsVisible,"onUpdate:modelValue":n[16]||(n[16]=o=>l.modalChargePointSettingsVisible=o),size:"lg"},{header:t(()=>[a(' Einstellungen für Ladepunkt "'+C(l.mqttStore.getChargePointName(l.modalChargePointId))+'" ',1)]),default:t(()=>[e(H,{modelValue:l.modalActiveTab,"onUpdate:modelValue":n[15]||(n[15]=o=>l.modalActiveTab=o),stretch:""},{header:t(()=>[e(x,{for:"tab-general"},{default:t(()=>[a(" Allgemein ")]),_:1}),e(x,{for:"tab-instant-charging"},{default:t(()=>[a(" Sofort ")]),_:1}),e(x,{for:"tab-pv-charging"},{default:t(()=>[a(" PV ")]),_:1}),e(x,{for:"tab-scheduled-charging"},{default:t(()=>[a(" Zielladen ")]),_:1}),e(x,{for:"tab-time-charging"},{default:t(()=>[a(" Zeitladen ")]),_:1})]),default:t(()=>[e(T,{name:"tab-general"},{default:t(()=>[e(y,null,{default:t(()=>[e(P,null,{default:t(()=>[e(V,null,{default:t(()=>[e(g,{"fixed-width":"",icon:["fas","fa-car"]}),a(" Fahrzeug ")]),_:1}),e(E,{size:"lg",disabled:!l.mqttStore.getChargePointVehicleChangePermitted(l.modalChargePointId),"model-value":l.mqttStore.getChargePointConnectedVehicleInfo(l.modalChargePointId),label:"name",options:r.vehicleList,placeholder:"Bitte auswählen..","onUpdate:modelValue":n[0]||(n[0]=o=>r.setChargePointConnectedVehicle(l.modalChargePointId,o))},null,8,["disabled","model-value","options"])]),_:1}),e(P,null,{default:t(()=>[e(V,null,{default:t(()=>[a("Lademodus")]),_:1}),e(E,{size:"lg","model-value":l.mqttStore.getChargePointConnectedVehicleChargeMode(l.modalChargePointId),placeholder:"Bitte auswählen..","onUpdate:modelValue":n[1]||(n[1]=o=>r.setChargePointConnectedVehicleChargeMode(l.modalChargePointId,o))},{default:t(()=>[(c(!0),b(B,null,L(l.mqttStore.chargeModeList(),o=>(c(),v(X,{key:o.id,value:o.id,label:o.label,class:M("_background:"+o.class)},null,8,["value","label","class"]))),128))]),_:1},8,["model-value"])]),_:1}),e(P,{inline:"",class:"_justify-content:space-around"},{default:t(()=>[e(P,{inline:""},{default:t(()=>[e(V,{placement:"left",class:"_align-items:center"},{default:t(()=>[e(g,{"fixed-width":"",icon:["far","fa-star"]}),a(" Priorität ")]),_:1}),e(N,{size:"lg","model-value":l.mqttStore.getChargePointConnectedVehiclePriority(l.modalChargePointId),"onUpdate:modelValue":n[2]||(n[2]=o=>r.setChargePointConnectedVehiclePriority(l.modalChargePointId,o))},null,8,["model-value"])]),_:1}),e(P,{inline:"",class:"_margin-top:0"},{default:t(()=>[e(V,{placement:"left",class:"_align-items:center"},{default:t(()=>[e(g,{"fixed-width":"",icon:["far","fa-clock"]}),a(" Zeitladen ")]),_:1}),e(N,{size:"lg","model-value":l.mqttStore.getChargePointConnectedVehicleTimeChargingActive(l.modalChargePointId),"onUpdate:modelValue":n[3]||(n[3]=o=>r.setChargePointConnectedVehicleTimeChargingActive(l.modalChargePointId,o))},null,8,["model-value"])]),_:1})]),_:1})]),_:1})]),_:1}),e(T,{name:"tab-instant-charging"},{default:t(()=>[e(y,null,{default:t(()=>[e(P,null,{default:t(()=>[e(V,null,{default:t(()=>[a("Stromstärke")]),_:1}),e(I,{unit:"A",min:6,max:32,"model-value":l.mqttStore.getChargePointConnectedVehicleInstantChargingCurrent(l.modalChargePointId),"onUpdate:modelValue":n[4]||(n[4]=o=>r.setChargePointConnectedVehicleInstantChargingCurrent(l.modalChargePointId,o))},null,8,["model-value"])]),_:1}),e(P,null,{default:t(()=>[e(V,null,{default:t(()=>[a("Begrenzung")]),_:1}),e(G,{block:""},{default:t(()=>[e(m,{color:l.mqttStore.getChargePointConnectedVehicleInstantChargingLimit(l.modalChargePointId).selected=="none"?"primary":"",active:l.mqttStore.getChargePointConnectedVehicleInstantChargingLimit(l.modalChargePointId).selected=="none",onClick:n[5]||(n[5]=o=>r.setChargePointConnectedVehicleInstantChargingLimit(l.modalChargePointId,"none"))},{default:t(()=>[a(" Keine ")]),_:1},8,["color","active"]),e(m,{color:l.mqttStore.getChargePointConnectedVehicleInstantChargingLimit(l.modalChargePointId).selected=="soc"?"primary":"",active:l.mqttStore.getChargePointConnectedVehicleInstantChargingLimit(l.modalChargePointId).selected=="soc",onClick:n[6]||(n[6]=o=>r.setChargePointConnectedVehicleInstantChargingLimit(l.modalChargePointId,"soc"))},{default:t(()=>[a(" EV-SoC ")]),_:1},8,["color","active"]),e(m,{color:l.mqttStore.getChargePointConnectedVehicleInstantChargingLimit(l.modalChargePointId).selected=="amount"?"primary":"",active:l.mqttStore.getChargePointConnectedVehicleInstantChargingLimit(l.modalChargePointId).selected=="amount",onClick:n[7]||(n[7]=o=>r.setChargePointConnectedVehicleInstantChargingLimit(l.modalChargePointId,"amount"))},{default:t(()=>[a(" Energie ")]),_:1},8,["color","active"])]),_:1})]),_:1}),l.mqttStore.getChargePointConnectedVehicleInstantChargingLimit(l.modalChargePointId).selected=="soc"?(c(),v(P,{key:0},{default:t(()=>[e(V,null,{default:t(()=>[a("Max. SoC")]),_:1}),e(I,{unit:"%",min:5,max:100,step:5,"model-value":l.mqttStore.getChargePointConnectedVehicleInstantChargingLimit(l.modalChargePointId).soc,"onUpdate:modelValue":n[8]||(n[8]=o=>r.setChargePointConnectedVehicleInstantChargingLimitSoc(l.modalChargePointId,o))},null,8,["model-value"])]),_:1})):u("v-if",!0),l.mqttStore.getChargePointConnectedVehicleInstantChargingLimit(l.modalChargePointId).selected=="amount"?(c(),v(P,{key:1},{default:t(()=>[e(V,null,{default:t(()=>[a("Max. Energie")]),_:1}),e(I,{unit:"kWh",min:1,max:100,"model-value":l.mqttStore.getChargePointConnectedVehicleInstantChargingLimit(l.modalChargePointId).amount/1e3,"onUpdate:modelValue":n[9]||(n[9]=o=>r.setChargePointConnectedVehicleInstantChargingLimitAmount(l.modalChargePointId,o*1e3))},null,8,["model-value"])]),_:1})):u("v-if",!0)]),_:1})]),_:1}),e(T,{name:"tab-pv-charging"},{default:t(()=>[e(y,null,{default:t(()=>[e(P,{inline:""},{default:t(()=>[e(V,{placement:"left",class:"_align-items:center"},{default:t(()=>[a(" Einspeisegrenze beachten ")]),_:1}),e(N,{size:"lg","model-value":l.mqttStore.getChargePointConnectedVehiclePvChargingFeedInLimit(l.modalChargePointId),"onUpdate:modelValue":n[10]||(n[10]=o=>r.setChargePointConnectedVehiclePvChargingFeedInLimit(l.modalChargePointId,o))},null,8,["model-value"])]),_:1}),e(P,null,{default:t(()=>[e(V,null,{default:t(()=>[a("Mindeststrom")]),_:1}),e(I,{unit:"A",labels:[{label:"Aus",value:0},{label:6,value:6},{label:7,value:7},{label:8,value:8},{label:9,value:9},{label:10,value:10},{label:11,value:11},{label:12,value:12},{label:13,value:13},{label:14,value:14},{label:15,value:15},{label:16,value:16}],"model-value":l.mqttStore.getChargePointConnectedVehiclePvChargingMinCurrent(l.modalChargePointId),"onUpdate:modelValue":n[11]||(n[11]=o=>r.setChargePointConnectedVehiclePvChargingMinCurrent(l.modalChargePointId,o))},null,8,["model-value"])]),_:1}),e(P,null,{default:t(()=>[e(V,null,{default:t(()=>[a("Mindest-SoC")]),_:1}),e(I,{unit:"%",labels:[{label:"Aus",value:0},{label:5,value:5},{label:10,value:10},{label:15,value:15},{label:20,value:20},{label:25,value:25},{label:30,value:30},{label:35,value:35},{label:40,value:40},{label:45,value:45},{label:50,value:50},{label:55,value:55},{label:60,value:60},{label:65,value:65},{label:70,value:70},{label:75,value:75},{label:80,value:80},{label:85,value:85},{label:90,value:90},{label:95,value:95}],"model-value":l.mqttStore.getChargePointConnectedVehiclePvChargingMinSoc(l.modalChargePointId),"onUpdate:modelValue":n[12]||(n[12]=o=>r.setChargePointConnectedVehiclePvChargingMinSoc(l.modalChargePointId,o))},null,8,["model-value"])]),_:1}),e(P,null,{default:t(()=>[e(V,null,{default:t(()=>[a("Mindest-SoC Strom")]),_:1}),e(I,{min:6,max:32,unit:"A","model-value":l.mqttStore.getChargePointConnectedVehiclePvChargingMinSocCurrent(l.modalChargePointId),"onUpdate:modelValue":n[13]||(n[13]=o=>r.setChargePointConnectedVehiclePvChargingMinSocCurrent(l.modalChargePointId,o))},null,8,["model-value"])]),_:1}),e(P,null,{default:t(()=>[e(V,null,{default:t(()=>[a("SoC-Limit")]),_:1}),e(I,{unit:"%",labels:[{label:5,value:5},{label:10,value:10},{label:15,value:15},{label:20,value:20},{label:25,value:25},{label:30,value:30},{label:35,value:35},{label:40,value:40},{label:45,value:45},{label:50,value:50},{label:55,value:55},{label:60,value:60},{label:65,value:65},{label:70,value:70},{label:75,value:75},{label:80,value:80},{label:85,value:85},{label:90,value:90},{label:95,value:95},{label:100,value:100},{label:"Aus",value:101}],"model-value":l.mqttStore.getChargePointConnectedVehiclePvChargingMaxSoc(l.modalChargePointId),"onUpdate:modelValue":n[14]||(n[14]=o=>r.setChargePointConnectedVehiclePvChargingMaxSoc(l.modalChargePointId,o))},null,8,["model-value"])]),_:1})]),_:1})]),_:1}),e(T,{name:"tab-scheduled-charging"},{default:t(()=>[Object.keys(l.mqttStore.getChargePointConnectedVehicleScheduledChargingPlans(l.modalChargePointId)).length===0?(c(),v(D,{key:0},{icon:t(()=>[e(g,{"fixed-width":"",icon:["fas","fa-info-circle"]})]),default:t(()=>[a(" Es wurden noch keine Zeitpläne für das Zielladen eingerichtet. ")]),_:1})):(c(),v(y,{key:1},{default:t(()=>[(c(!0),b(B,null,L(l.mqttStore.getChargePointConnectedVehicleScheduledChargingPlans(l.modalChargePointId),(o,q)=>(c(),v(P,{key:q},{default:t(()=>[e(A,null,{default:t(()=>[e(h,null,{default:t(()=>[e(V,null,{default:t(()=>[a(C(o.name),1)]),_:2},1024)]),_:2},1024),e(h,null,{default:t(()=>[e(m,{size:"lg",block:"",color:o.active?"success":"danger",onClick:Q=>r.setChargePointConnectedVehicleScheduledChargingPlanActive(q,!o.active)},{default:t(()=>[o.frequency.selected=="once"?(c(),b("span",ze,[e(g,{"fixed-width":"",icon:["fas","calendar-day"]}),a(" "+C(l.mqttStore.formatDate(o.frequency.once)),1)])):u("v-if",!0),o.frequency.selected=="daily"?(c(),b("span",Ae,[e(g,{"fixed-width":"",icon:["fas","calendar-week"]}),a(" täglich ")])):u("v-if",!0),o.frequency.selected=="weekly"?(c(),b("span",Ne,[e(g,{"fixed-width":"",icon:["fas","calendar-alt"]}),a(" "+C(l.mqttStore.formatWeeklyScheduleDays(o.frequency.weekly)),1)])):u("v-if",!0),e(g,{"fixed-width":"",icon:["fas","clock"]}),a(" "+C(o.time)+" ",1),o.limit.selected=="soc"?(c(),b("span",We,[e(g,{"fixed-width":"",icon:["fas","car-battery"]}),a(" "+C(o.limit.soc_scheduled)+" % ",1)])):u("v-if",!0),o.limit.selected=="amount"?(c(),b("span",Fe,[e(g,{"fixed-width":"",icon:["fas","bolt"]}),a(" "+C(o.limit.amount/1e3)+" kWh ",1)])):u("v-if",!0)]),_:2},1032,["color","onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1}))]),_:1}),e(T,{name:"tab-time-charging"},{default:t(()=>[Object.keys(l.mqttStore.getChargePointConnectedVehicleTimeChargingPlans(l.modalChargePointId)).length===0?(c(),v(D,{key:0},{icon:t(()=>[e(g,{"fixed-width":"",icon:["fas","fa-circle-info"]})]),default:t(()=>[a(" Es wurden noch keine Zeitpläne für das Zeitladen eingerichtet. ")]),_:1})):(c(),v(y,{key:1},{default:t(()=>[(c(!0),b(B,null,L(l.mqttStore.getChargePointConnectedVehicleTimeChargingPlans(l.modalChargePointId),(o,q)=>(c(),v(P,{key:q},{default:t(()=>[e(A,null,{default:t(()=>[e(h,null,{default:t(()=>[e(V,null,{default:t(()=>[a(C(o.name),1)]),_:2},1024)]),_:2},1024),e(h,null,{default:t(()=>[e(m,{size:"lg",block:"",color:o.active?"success":"danger",onClick:Q=>r.setChargePointConnectedVehicleTimeChargingPlanActive(q,!o.active)},{default:t(()=>[o.frequency.selected=="once"?(c(),b("span",Ue,[e(g,{"fixed-width":"",icon:["fas","calendar-day"]}),a(" "+C(l.mqttStore.formatDateRange(o.frequency.once)),1)])):u("v-if",!0),o.frequency.selected=="daily"?(c(),b("span",Ee,[e(g,{"fixed-width":"",icon:["fas","calendar-week"]}),a(" täglich ")])):u("v-if",!0),o.frequency.selected=="weekly"?(c(),b("span",De,[e(g,{"fixed-width":"",icon:["fas","calendar-alt"]}),a(" "+C(l.mqttStore.formatWeeklyScheduleDays(o.frequency.weekly)),1)])):u("v-if",!0),e(g,{"fixed-width":"",icon:["fas","clock"]}),a(" "+C(o.time.join("-"))+" ",1),o.limit.selected=="soc"?(c(),b("span",Ze,[e(g,{"fixed-width":"",icon:["fas","car-battery"]}),a(" "+C(o.limit.soc)+" % ",1)])):u("v-if",!0),o.limit.selected=="amount"?(c(),b("span",je,[e(g,{"fixed-width":"",icon:["fas","bolt"]}),a(" "+C(o.limit.amount/1e3)+" kWh ",1)])):u("v-if",!0)]),_:2},1032,["color","onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1}))]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["modelValue"]),u(" end charge point settings modal"),u(" manual soc input "),e(K,{vehicleId:l.modalVehicleId,modelValue:l.modalManualSocInputVisible,"onUpdate:modelValue":n[17]||(n[17]=o=>l.modalManualSocInputVisible=o)},null,8,["vehicleId","modelValue"]),u(" end manual soc input ")],64)}const Qe=z(Be,[["render",Oe],["__scopeId","data-v-dd5faf5e"],["__file","/home/openwb/core/packages/modules/display_themes/cards/source/src/views/ChargePointsView.vue"]]);export{Qe as default};
(this["webpackJsonpwolfpack-torp-comp"]=this["webpackJsonpwolfpack-torp-comp"]||[]).push([[0],[,,,,,,function(e,t,n){e.exports=n(15)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(5),o=n.n(r),u=(n(11),n(3)),c=(n(12),n(2)),i=n(1);n(13);function m(e){var t=e.bowAngleCalculations,n=e.setBowAngleCalculations,a=e.calculatedAngle,r=function(e){return n(Object(i.a)(Object(i.a)({},t),{},Object(c.a)({},e.target.name,parseFloat(e.target.value)))),t.zoom?null:n(Object(i.a)(Object(i.a)({},t),{},{zoom:4}))};return l.a.createElement("div",{className:"speedCalculatorContainer"},l.a.createElement("h2",null,"Calculate angle of target"),l.a.createElement("label",null,"targetLength"),l.a.createElement("input",{onChange:function(e){return r(e)},name:"targetLength",type:"number"}),l.a.createElement("label",null,"targetMastHeight"),l.a.createElement("input",{onChange:function(e){return r(e)},name:"targetMastHeight",type:"number"}),l.a.createElement("label",null,"angularMast"),l.a.createElement("input",{onChange:function(e){return r(e)},name:"angularMast",type:"number"}),l.a.createElement("label",null,"angularLength"),l.a.createElement("input",{onChange:function(e){return r(e)},name:"angularLength",type:"number"}),l.a.createElement("label",null,"zoom"),l.a.createElement("input",{onChange:function(e){return r(e)},name:"zoom",type:"number",defaultValue:"4"}),l.a.createElement("span",{className:"resultNumber"},a.distance.toFixed(0),"m"),l.a.createElement("span",{className:"resultNumber"},a.bowAngle.toFixed(3),"\xb0"))}n(14);function s(e){var t=e.speedCalculations,n=e.setSpeedCalculations,a=e.calculatedSpeed,r=e.targetLength,o=e.calculatedAngle,u=function(e){n(Object(i.a)(Object(i.a)({},t),{},Object(c.a)({},e.target.name,parseFloat(e.target.value))))};return l.a.createElement("div",{className:"speedCalculatorContainer"},l.a.createElement("h2",null,"Calculate speed of target"),l.a.createElement("label",null,"subSpeed"),l.a.createElement("input",{onChange:function(e){return u(e)},name:"subSpeed",type:"number"}),l.a.createElement("label",null,"targetLength"),l.a.createElement("input",{onChange:function(e){return u(e)},value:r||(r=void 0)||"",name:"targetLength",type:"number"}),l.a.createElement("label",null,"lineOfSightAngle"),l.a.createElement("input",{onChange:function(e){return u(e)},name:"lineOfSightAngle",type:"number"}),l.a.createElement("label",null,"angleOnBow"),l.a.createElement("input",{onChange:function(e){return u(e)},value:(o.bowAngle?o.bowAngle:o.bowAngle=void 0)||"",name:"angleOnBow",type:"number"}),l.a.createElement("label",null,"timeToCross"),l.a.createElement("input",{onChange:function(e){return u(e)},name:"timeToCross",type:"number"}),l.a.createElement("span",{className:"resultNumber"},a.toFixed(3)," KNOTS"))}function g(){var e=l.a.useState({}),t=Object(u.a)(e,2),n=t[0],a=t[1],r=n.targetMastHeight,o=n.targetLength,c=function(e,t,n,a,l){var r=e/n*l*100;return{distance:r,bowAngle:Math.asin(r*(Math.tan(a/(100*l))/t))*(180/Math.PI)}}(r,o,n.angularMast,n.angularLength,n.zoom),i=l.a.useState({}),g=Object(u.a)(i,2),p=g[0],b=g[1],h=function(e,t,n,a,l){var r=1.94384*(l/a);return n*Math.cos((180-(t+e))*(Math.PI/180))+r}(p.lineOfSightAngle,p.angleOnBow,p.subSpeed,p.timeToCross,o);return l.a.createElement("div",{className:"App"},l.a.createElement(m,{setBowAngleCalculations:a,bowAngleCalculations:n,calculatedAngle:c}),l.a.createElement(s,{setSpeedCalculations:b,speedCalculations:p,calculatedSpeed:h,targetLength:o,calculatedAngle:c}))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[6,1,2]]]);
//# sourceMappingURL=main.a346bff2.chunk.js.map
(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{170:function(e,t,a){},306:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),s=a(74),i=a.n(s),r=(a(170),a(50)),d=a.n(r),o=a(144),m=a(17),l=a(2);function j(e){var t=e.query,a=e.setQuery,c=e.search;return Object(l.jsx)("div",{className:"card card-body",children:Object(l.jsx)("form",{onSubmit:function(e){e.preventDefault()},children:Object(l.jsx)("div",{className:"form-group",children:Object(l.jsx)("input",{type:"text",placeholder:"Location",className:"form-control",onChange:function(e){return a(e.target.value)},value:t,onKeyPress:c})})})})}function b(e){var t=e.weather,a=t.sys.sunset,n=new Date(1e3*a).toLocaleString([],{hour:"2-digit",minute:"2-digit"}),s=t.sys.sunrise,i=new Date(1e3*s).toLocaleString([],{hour:"2-digit",minute:"2-digit"}),r=Object(c.useState)(!1),d=Object(m.a)(r,2),o=d[0],j=d[1];return Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:"card card-body",children:[Object(l.jsxs)("h5",{className:"mb-1",children:[t.name,", ",t.sys.country]}),Object(l.jsxs)("p",{className:"lead",children:[Math.round(t.main.temp),"\xb0c"]}),Object(l.jsx)("p",{className:"lead",children:t.weather[0].main})]}),Object(l.jsxs)("div",{className:"card-group",children:[Object(l.jsx)("div",{className:"card",children:Object(l.jsx)("div",{className:"card-body",children:Object(l.jsxs)("h5",{className:"card-title",children:["Temp max ",Math.round(t.main.temp_max),"\xb0c"]})})}),Object(l.jsx)("div",{className:"card",children:Object(l.jsx)("div",{className:"card-body",children:Object(l.jsxs)("h5",{className:"card-title",children:["Temp min ",Math.round(t.main.temp_min),"\xb0c"]})})})]}),Object(l.jsx)("button",{type:"button",className:"btn btn-primary btn-lg btn-block",onClick:function(){return j((function(e){return!e}))},children:"More info"}),o?Object(l.jsxs)("div",{className:"card-group",children:[Object(l.jsx)("div",{className:"card",children:Object(l.jsx)("div",{className:"card-body",children:Object(l.jsxs)("h5",{className:"card-title",children:["Wind Speed ",Math.round(t.wind.speed)," meter/sec"]})})}),Object(l.jsx)("div",{className:"card",children:Object(l.jsx)("div",{className:"card-body",children:Object(l.jsxs)("h5",{className:"card-title",children:["Humidity ",Math.round(t.main.humidity),"%"]})})}),Object(l.jsx)("div",{className:"card",children:Object(l.jsx)("div",{className:"card-body",children:Object(l.jsxs)("h5",{className:"card-title",children:["Pressure ",Math.round(t.main.pressure)," hPa"]})})}),Object(l.jsx)("div",{className:"card",children:Object(l.jsx)("div",{className:"card-body",children:Object(l.jsxs)("h5",{className:"card-title",children:["Sunrise time ",i]})})}),Object(l.jsx)("div",{className:"card",children:Object(l.jsx)("div",{className:"card-body",children:Object(l.jsxs)("h5",{className:"card-title",children:["Sunset time ",n]})})})]}):null]})}var u=a(308),h=a(312),p=a(158),x=a(159),O=a(84),y=a(62),v=a(161),f={key:"dcd0b5d180bd96b258e48eafd54c0351",base:"https://api.openweathermap.org/data/2.5/"};function N(){var e=Object(c.useState)(""),t=Object(m.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)({}),i=Object(m.a)(s,2),r=i[0],N=i[1],g=Object(c.useState)({}),_=Object(m.a)(g,2),w=_[0],k=_[1],S=Object(c.useState)("today"),D=Object(m.a)(S,2),P=D[0],C=D[1],M=w.list;console.log(M);var K=[],L=[];if("undefined"!=typeof w.list){for(var T=0;T<M.length;T+=8)K.push(M[T]);L=[{day:"".concat(K[0].dt_txt.slice(8,10)),temp_min:"".concat(K[0].main.temp_min),temp_max:"".concat(K[0].main.temp_max),time:"".concat(K[0].weather.main)},{day:"".concat(K[1].dt_txt.slice(8,10)),temp_min:"".concat(K[1].main.temp_min),temp_max:"".concat(K[1].main.temp_max)},{day:"".concat(K[2].dt_txt.slice(8,10)),temp_min:"".concat(K[2].main.temp_min),temp_max:"".concat(K[2].main.temp_max)},{day:"".concat(K[3].dt_txt.slice(8,10)),temp_min:"".concat(K[3].main.temp_min),temp_max:"".concat(K[3].main.temp_max)},{day:"".concat(K[4].dt_txt.slice(8,10)),temp_min:"".concat(K[4].main.temp_min),temp_max:"".concat(K[4].main.temp_max)}]}return Object(l.jsx)("div",{className:"container p-4 ",children:Object(l.jsx)("div",{className:"row",children:Object(l.jsxs)("div",{className:"col-md-10 mx-auto",children:[Object(l.jsx)(j,{data:f,query:a,setQuery:n,search:function(e){"Enter"===e.key&&Promise.all([fetch("".concat(f.base,"weather?q=").concat(a,"&units=metric&APPID=").concat(f.key)),fetch("".concat(f.base,"forecast?q=").concat(a,"&units=metric&APPID=").concat(f.key))]).then(function(){var e=Object(o.a)(d.a.mark((function e(t){var a,c,s,i,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object(m.a)(t,2),c=a[0],s=a[1],e.next=3,c.json();case 3:return i=e.sent,e.next=6,s.json();case 6:r=e.sent,N(i),k(r),n(""),console.log(i,r);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log(e)}))}}),Object(l.jsxs)("div",{className:"btn-group btn-group-toggle","data-toggle":"buttons",children:[Object(l.jsxs)("label",{className:"btn btn-primary active",children:[Object(l.jsx)("input",{type:"radio",name:"options",id:"option1",autoComplete:"off",onClick:function(e){return C(e.target.value)},value:"today"})," Today"]}),Object(l.jsxs)("label",{className:"btn btn-primary",children:[Object(l.jsx)("input",{type:"radio",name:"options",id:"option2",autoComplete:"off",onClick:function(e){return C(e.target.value)},value:"days"})," 5 days"]})]}),"undefined"!=typeof r.main&&"today"===P?Object(l.jsx)("div",{children:Object(l.jsx)(b,{weather:r})}):"","undefined"!=typeof w.list&&"days"===P?Object(l.jsx)("div",{children:Object(l.jsx)("div",{className:"card",children:Object(l.jsx)("div",{className:"card-body center",children:Object(l.jsxs)(u.a,{width:500,height:300,data:L,margin:{top:5,right:100,left:0,bottom:5},children:[Object(l.jsx)(h.a,{strokeDasharray:"3 3"}),Object(l.jsx)(p.a,{dataKey:"day"}),Object(l.jsx)(p.a,{dataKey:"time"}),Object(l.jsx)(x.a,{domain:[0," + 1000"],allowDataOverflow:!0}),Object(l.jsx)(O.a,{}),Object(l.jsx)(y.a,{}),Object(l.jsx)(v.a,{type:"monotone",dataKey:"temp_min",stroke:"#4582ec",activeDot:{r:8}}),Object(l.jsx)(v.a,{type:"monotone",dataKey:"temp_max",stroke:"#000",activeDot:{r:8}})]})})})}):""]})})})}var g=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,314)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),c(e),n(e),s(e),i(e)}))};i.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(N,{})}),document.getElementById("root")),g()}},[[306,1,2]]]);
//# sourceMappingURL=main.e3588d2a.chunk.js.map
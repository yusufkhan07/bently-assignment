(this["webpackJsonpbently-assignment"]=this["webpackJsonpbently-assignment"]||[]).push([[0],{209:function(e,t,n){"use strict";n.r(t);var s=n(3),a=n(0),c=n.n(a),r=n(83),l=n.n(r),i=(n(96),n(13)),o=(n(97),n(22)),j=n(5),b=function(e){return Object(s.jsxs)("div",{className:"is-size-5",children:[Object(s.jsx)("p",{children:"We're logging every request to our Express API server."}),Object(s.jsx)("p",{children:"We're storing the logs as a JSON because JSON gives us the flexibility to diplay the logs the way we want on UI. Due to time constraints, I am simply going to diplay the JSON logs over here."}),Object(s.jsx)("a",{href:"http://localhost:3007/logs.json",target:"_blank",children:"View logs"})]})},d=n(53),h=n.n(d),u=n(84);var O=function(e){var t=Object(a.useRef)(!0),n=Object(a.useState)(),c=Object(i.a)(n,2),r=c[0],l=c[1],o=Object(a.useState)(""),j=Object(i.a)(o,2),b=j[0],d=j[1],O=Object(a.useState)(null),x=Object(i.a)(O,2),m=x[0],p=x[1],g=Object(a.useState)(null),v=Object(i.a)(g,2),f=v[0],N=v[1],k=function(e){alert(e)},y=function(e){return!!function(e){try{JSON.parse(e)}catch(t){return!1}return!0}(e)||"Pass comma seperated numbers"},C=function(){var e=Object(u.a)(h.a.mark((function e(){var n,s,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r){e.next=2;break}return e.abrupt("return");case 2:if(!0===(n=y(b))){e.next=5;break}return e.abrupt("return",k(n));case 5:return l(!0),e.prev=6,"http://localhost:3007",e.next=10,fetch("http://localhost:3007",{method:"POST",headers:{"Content-Type":"application/json"},body:b});case 10:return s=e.sent,e.next=13,s.json();case 13:a=e.sent,s.status>=200&&s.status<300?(p(a.message.max),N(a.message.secondMax)):k(a.message),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(6),k(e.t0.body);case 20:return e.prev=20,t.current&&l(!1),e.finish(20);case 23:case"end":return e.stop()}}),e,null,[[6,17,20,23]])})));return function(){return e.apply(this,arguments)}}();return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("div",{className:"field",children:[Object(s.jsx)("label",{className:"label",children:"Enter comma seperated numbers"}),Object(s.jsx)("div",{className:"control",children:Object(s.jsx)("input",{className:"input",type:"text",placeholder:"11, 53, 613, 90, 25",onChange:function(e){d("["+e.target.value+"]")}})})]}),Object(s.jsx)("div",{className:"field",children:Object(s.jsx)("button",{onClick:C,className:"button is-primary "+(r?"is-loading":""),children:"Submit"})}),Object(s.jsx)("div",{className:"field",children:m&&Object(s.jsxs)("p",{className:"title",children:["Max: ",m]})}),Object(s.jsx)("div",{className:"field",children:f&&Object(s.jsxs)("p",{className:"title",children:["SecondMax: ",f]})})]})},x=n(90),m=function(e){return Object(s.jsx)("div",{className:"select is-large",children:Object(s.jsxs)("select",{name:"colors",id:"color-picker",onChange:e.colorChanged,value:e.defaultColor,children:[Object(s.jsx)("option",{value:"red",children:"Red"}),Object(s.jsx)("option",{value:"blue",children:"Blue"}),Object(s.jsx)("option",{value:"green",children:"Green"}),Object(s.jsx)("option",{value:"black",children:"Black"})]})})},p=function(e){return Object(s.jsx)("div",{className:"card",style:{backgroundColor:e.color,margin:"20px 0"},children:Object(s.jsxs)("div",{className:"card-content",children:[Object(s.jsx)("p",{className:"title",children:"...just a random card"}),Object(s.jsxs)("p",{className:"subtitle",children:["with a color of ",Object(s.jsxs)("b",{children:[e.color," "]})]})]})})},g=function(e){var t=Object(a.useState)("red"),n=Object(i.a)(t,2),c=n[0],r=n[1];return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("h1",{className:"title",children:"Select a color from the drop-down"}),Object(s.jsx)("div",{children:Object(s.jsx)(m,{defaultColor:c,colorChanged:function(e){return function(e){r(e)}(e.target.value)}})}),Object(s.jsx)("div",{children:Object(s.jsx)(p,{color:c})})]}),Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("h1",{className:"title",children:"Try a new Background Color"}),Object(s.jsx)(x.a,{color:e.bgColor,onChangeComplete:e.bgColorChanged})]})]})};var v=function(){var e=Object(a.useState)("#7ECBA2"),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(s.jsxs)(o.a,{children:[Object(s.jsx)("nav",{className:"navbar is-dark",role:"navigation","aria-label":"main navigation",children:Object(s.jsx)("div",{className:"navbar-menu is-active is-dark",children:Object(s.jsxs)("div",{className:"navbar-start",children:[Object(s.jsx)(o.b,{to:"/",className:"navbar-item",children:"Task 1"}),Object(s.jsx)(o.b,{to:"/task2",className:"navbar-item",children:"Task 2"}),Object(s.jsx)(o.b,{to:"/task3",className:"navbar-item",children:"Task 3"})]})})}),Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("section",{className:"hero",style:{backgroundColor:n},children:Object(s.jsx)("div",{className:"hero-body",children:Object(s.jsxs)(j.c,{children:[Object(s.jsx)(j.a,{path:"/task3",children:Object(s.jsx)(b,{})}),Object(s.jsx)(j.a,{path:"/task2",children:Object(s.jsx)(O,{})}),Object(s.jsx)(j.a,{path:"/",children:Object(s.jsx)(g,{bgColor:n,bgColorChanged:function(e){c(e.hex)}})})]})})}),Object(s.jsxs)("p",{children:["Note: I have deployed the UI on",Object(s.jsx)("a",{href:"https://yusufkhan07.github.io/bently-assignment/",children:"https://yusufkhan07.github.io/bently-assignment/"}),". I was planning to deploy backend on an AWS instance and connect it with the UI but due to time constraints I am unable to deploy the backend code on server; due to which API calls will fail on the github-pages hosted UI"]})]})]})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,211)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),s(e),a(e),c(e),r(e)}))};l.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(v,{})}),document.getElementById("root")),f()},96:function(e,t,n){},97:function(e,t,n){}},[[209,1,2]]]);
//# sourceMappingURL=main.58cc8940.chunk.js.map
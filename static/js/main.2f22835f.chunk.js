(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{27:function(e,t,c){},34:function(e,t,c){"use strict";c.r(t);var n=c(0),i=c(1),s=c.n(i),a=c(18),r=c.n(a),l=(c(27),c(8)),j=c(2),d=c(21),b=c(16),o=c(19),m=c.n(o);var u=function(e){return Object(n.jsx)("li",{class:"list-group-item shadow",children:Object(n.jsxs)("div",{className:"row align-items-center",children:[Object(n.jsx)("div",{className:"col-2 d-flex justify-content-center",children:Object(n.jsx)("img",{class:"border rounded-circle",src:e.avatar,alt:e.name})}),Object(n.jsxs)("div",{className:"col-10",children:[Object(n.jsxs)("h4",{children:["Name: ",e.name]}),Object(n.jsxs)("p",{className:"mb-1",children:["City: ",e.city]}),Object(n.jsxs)("p",{children:["Email: ",e.email]}),Object(n.jsxs)("p",{children:["Birthday: ",m()(e.birthday).format("DD-MM-YYYY")]})]})]})})};var h=function(){var e=Object(i.useState)(new Date),t=Object(b.a)(e,2),c=t[0],a=t[1],r=Object(i.useState)([]),l=Object(b.a)(r,2),j=l[0],o=l[1];return Object(i.useEffect)((function(){fetch("https://randomuser.me/api").then((function(e){return e.json()})).then((function(e){o((function(t){return[].concat(Object(d.a)(t),[e.results[0]])}))}))}),[c]),Object(n.jsx)(s.a.Fragment,{children:Object(n.jsxs)("div",{className:"container my-3",children:[Object(n.jsx)("button",{className:"btn btn-dark mb-3",onClick:function(){a(new Date)},children:"Add User"}),Object(n.jsx)("ul",{className:"list-group",children:j.map((function(e){return Object(n.jsx)(u,{name:e.name.title+" "+e.name.first+" "+e.name.last,city:e.location.city,email:e.email,birthday:e.dob.date,avatar:e.picture.medium},e.id)}))})]})})};var O=function(){return Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(n.jsx)("span",{className:"navbar-brand mb-0 h1",children:"Name List"}),Object(n.jsxs)("ul",{className:"navbar-nav",children:[Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(l.b,{className:"nav-link",to:"/",children:"Home"})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(l.b,{className:"nav-link",to:"/about",children:"About"})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(l.b,{className:"nav-link",to:"/namelist",children:"User List"})})]})]})})};var x=function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{className:"container my-3",children:[Object(n.jsx)("h3",{children:"Welcome"}),Object(n.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque impedit delectus hic quidem, officia tenetur odit doloribus ex explicabo reprehenderit, consectetur omnis. Odio, deserunt quis?"})]})})};var p=function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{className:"container my-3",children:[Object(n.jsx)("h3",{children:"About"}),Object(n.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque impedit delectus hic quidem, officia tenetur odit doloribus ex explicabo reprehenderit, consectetur omnis. Odio, deserunt quis?"})]})})};var v=function(){return Object(n.jsx)("div",{children:Object(n.jsxs)(l.a,{children:[Object(n.jsx)(O,{}),Object(n.jsxs)(j.c,{children:[Object(n.jsx)(j.a,{path:"/about",children:Object(n.jsx)(p,{})}),Object(n.jsx)(j.a,{path:"/namelist",children:Object(n.jsx)(h,{})}),Object(n.jsx)(j.a,{path:"/",children:Object(n.jsx)(x,{})})]})]})})},f=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,35)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),n(e),i(e),s(e),a(e)}))};r.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(v,{})}),document.getElementById("root")),f()}},[[34,1,2]]]);
//# sourceMappingURL=main.2f22835f.chunk.js.map
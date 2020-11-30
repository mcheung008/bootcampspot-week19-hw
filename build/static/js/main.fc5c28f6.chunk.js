(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{26:function(e,t,c){},49:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c(0),s=c.n(r),a=c(19),l=c.n(a),i=(c(26),c(50));function j(){return Object(n.jsxs)(i.a,{className:"text-center",children:[Object(n.jsx)("h1",{children:"Employee Directory"}),Object(n.jsx)("p",{children:"Click on column name to filter by heading or use the search box to narrow your results."})]})}var o=c(9),d=c(51),h=c(52),b=c(53),u=c(55),O=c(56),m=c(57);function x(e){return Object(n.jsx)(d.a,{children:Object(n.jsx)(h.a,{className:"justify-content-md-center",children:Object(n.jsx)(b.a,{lg:4,children:Object(n.jsxs)(u.a,{className:"mb-3",children:[Object(n.jsx)(O.a,{id:"searchName",placeholder:"Employee Name","aria-label":"Employee Name","aria-describedby":"basic-addon2"}),Object(n.jsx)(u.a.Append,{children:Object(n.jsx)(m.a,{variant:"outline-secondary",onClick:e.handleClick,children:"Search"})})]})})})})}var p=c(54);function f(e){return console.log("employees: ",e.employees),Object(n.jsx)(d.a,{children:Object(n.jsx)(h.a,{className:"justify-content-md-center",children:Object(n.jsx)(b.a,{children:Object(n.jsxs)(p.a,{striped:!0,bordered:!0,hover:!0,children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"Image"}),Object(n.jsx)("th",{children:"Name"}),Object(n.jsx)("th",{children:"Phone"}),Object(n.jsx)("th",{children:"Email"}),Object(n.jsx)("th",{children:"DOB"})]})}),Object(n.jsx)("tbody",{children:e.employees.map((function(e,t){var c=new Date(e.dob.date),r=c.getMonth()+"/"+c.getDate()+"/"+c.getFullYear();return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:Object(n.jsx)("img",{src:e.picture.thumbnail,alt:"employee avatar"})}),Object(n.jsx)("td",{children:e.name.first+" "+e.name.last}),Object(n.jsx)("td",{children:e.phone}),Object(n.jsx)("td",{children:e.email}),Object(n.jsx)("th",{children:r})]},t)}))})]})})})})}var y=c(20),g=c.n(y),v=function(){return g.a.get("https://randomuser.me/api/?results=200&nat=us")};function N(){var e=Object(r.useState)([]),t=Object(o.a)(e,2),c=t[0],s=t[1],a=Object(r.useState)([]),l=Object(o.a)(a,2),i=l[0],j=l[1];return Object(r.useEffect)((function(){v().then((function(e,t){if(t)throw t;s(e.data.results),j(e.data.results)}))}),[]),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(x,{handleClick:function(e){e.preventDefault();var t=document.querySelector("#searchName"),n=c.filter((function(e){return e.name.first.toUpperCase()===t.value.toUpperCase()}));console.log("filterEmployees: ",n),0===n.length?j(c):j(n)}}),Object(n.jsx)(f,{employees:i})]})}var C=function(){return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(j,{}),Object(n.jsx)(N,{})]})},E=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,58)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),n(e),r(e),s(e),a(e)}))};l.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(C,{})}),document.getElementById("root")),E()}},[[49,1,2]]]);
//# sourceMappingURL=main.fc5c28f6.chunk.js.map
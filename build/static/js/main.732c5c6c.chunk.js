(this.webpackJsonptemp=this.webpackJsonptemp||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n(7),s=n.n(i),r=n(5),o=n(6),u=n(0),a=function(e){var t=e.item,n=e.index,c=e.removeItem,i=e.handleChange;return console.log("This is item: ",t),Object(u.jsx)("div",{children:Object(u.jsxs)("p",{style:t.isComplete?{textDecoration:"line-through"}:null,children:[Object(u.jsx)("input",{type:"checkbox",checked:t.isComplete,onChange:function(){return i(n)}}),Object(u.jsx)("span",{children:t.name}),Object(u.jsx)("button",{onClick:function(){return c(n)},children:"X"})]})})},j=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],i=t[1],s=Object(c.useState)(""),j=Object(o.a)(s,2),l=j[0],b=j[1],m=function(e){var t=n.filter((function(t,n){return e!==n}));i(t)},p=function(e){var t=Object(r.a)(n);t[e].isComplete=!t[e].isComplete,i(t)};return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"To do list"}),Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),e.persist(),i([].concat(Object(r.a)(n),[{name:l,isComplete:!1}])),b("")},children:[Object(u.jsx)("input",{type:"text",name:"item",value:l,onChange:function(e){e.persist(),b(e.target.value)}}),Object(u.jsx)("input",{type:"submit",value:"Submit"})]}),n.map((function(e,t){return Object(u.jsx)(a,{item:e,index:t,removeItem:m,handleChange:p})}))]})};n(13);function l(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(j,{})})}var b=document.getElementById("root");s.a.render(Object(u.jsx)(l,{}),b)}},[[14,1,2]]]);
//# sourceMappingURL=main.732c5c6c.chunk.js.map
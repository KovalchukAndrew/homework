(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,function(e,t,a){e.exports={message:"Message_message__3nB0p",avatar:"Message_avatar__3Oy27",angle:"Message_angle__Nix_M",content:"Message_content__oITB7",name:"Message_name__3OGf1",textMessage:"Message_textMessage__36dYC",time:"Message_time__3OdmB"}},,,,function(e,t,a){e.exports={superInput:"SuperInputText_superInput__27Uui",errorInput:"SuperInputText_errorInput__2GwbQ",error:"SuperInputText_error__2vibO"}},function(e,t,a){e.exports={default:"SuperButton_default__2bcgE",red:"SuperButton_red__Um_n9",disabled:"SuperButton_disabled__1rA6m"}},,function(e,t,a){e.exports={someClass:"Greeting_someClass__1g857",error:"Greeting_error__366p2"}},,function(e,t,a){e.exports={blue:"HW4_blue__3zc2O",column:"HW4_column__1qC34",testSpanError:"HW4_testSpanError__1WcZe"}},function(e,t,a){e.exports={checkbox:"SuperCheckbox_checkbox__21Xcr",spanClassName:"SuperCheckbox_spanClassName__2-gLn"}},,function(e,t,a){e.exports={App:"App_App__1HKtA"}},,,,,,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(14),s=a.n(c),i=(a(21),a(15)),o=a.n(i),l=a(3),j=a.n(l),u=a.p+"static/media/retrowave-sunset-with-palm-silhouette-and-flying-birds-in-the-foreground-summer-time-themed-synthwave-styled-illustration_148087-215.1c14277a.jpg",d=a(0);var b=function(e){return Object(d.jsxs)("div",{className:j.a.message,children:[Object(d.jsx)("img",{src:u,alt:"avatar",className:j.a.avatar}),Object(d.jsx)("div",{className:j.a.angle}),Object(d.jsxs)("div",{className:j.a.content,children:[Object(d.jsx)("div",{className:j.a.name,children:e.name}),Object(d.jsx)("div",{className:j.a.textMessage,children:e.message}),Object(d.jsx)("div",{className:j.a.time,children:e.time})]})]})},h="Some Name",m="my message",O="22:00";var x=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 1",Object(d.jsx)(b,{name:h,message:m,time:O}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},p=a(2);var _=function(e){return Object(d.jsxs)("div",{children:[e.affair.name+" "+e.affair.priority,Object(d.jsx)("button",{onClick:function(){return e.deleteAffairCallback(e.affair._id)},children:"X"})]})};var f=function(e){var t=e.data.map((function(t){return Object(d.jsx)(_,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(d.jsxs)("div",{children:[t,Object(d.jsx)("button",{onClick:function(){e.setFilter("all")},children:"All"}),Object(d.jsx)("button",{onClick:function(){e.setFilter("high")},children:"High"}),Object(d.jsx)("button",{onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(d.jsx)("button",{onClick:function(){e.setFilter("low")},children:"Low"})]})},g=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var v=function(){var e=Object(n.useState)(g),t=Object(p.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)("all"),s=Object(p.a)(c,2),i=s[0],o=s[1],l=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(a,i);return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 2",Object(d.jsx)(f,{data:l,setFilter:o,deleteAffairCallback:function(e){return r(function(e,t){return e.filter((function(e){return e._id!==t}))}(a,e))}}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},C=a(16),k=a(10),N=a.n(k),y=function(e){var t=e.name,a=e.setNameCallback,n=e.addUser,r=e.error,c=e.totalUsers,s=r?N.a.errorInput:N.a.error;return Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{value:t,onChange:a,className:s}),Object(d.jsx)("button",{onClick:n,disabled:!t,className:N.a.button,children:"add"}),Object(d.jsx)("span",{children:c}),Object(d.jsx)("div",{children:Object(d.jsx)("span",{children:r})})]})},w=function(e){var t=e.users,a=e.addUserCallback,r=Object(n.useState)(""),c=Object(p.a)(r,2),s=c[0],i=c[1],o=Object(n.useState)(""),l=Object(p.a)(o,2),j=l[0],u=l[1],b=t.length;return Object(d.jsx)(y,{name:s,setNameCallback:function(e){var t=e.currentTarget.value.trim();t?(i(t),u("")):(u("uncorrected"),i(""))},addUser:function(){a(s),alert("Hello ".concat(s," !")),i("")},error:j,totalUsers:b})},S=a(25);var M=function(){var e=Object(n.useState)([]),t=Object(p.a)(e,2),a=t[0],r=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 3",Object(d.jsx)(w,{users:a,addUserCallback:function(e){var t={_id:Object(S.a)(),name:e};r([t].concat(Object(C.a)(a)))}}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},I=a(4),A=a(5),T=a(7),B=a.n(T),E=function(e){e.type;var t=e.onChange,a=e.onChangeText,n=e.onKeyPress,r=e.onEnter,c=e.error,s=e.className,i=e.spanClassName,o=Object(A.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),l="".concat(B.a.error," ").concat(i||""),j="".concat(B.a.input," ").concat(c?B.a.errorInput:B.a.superInput," ").concat(s);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("input",Object(I.a)({type:"text",onChange:function(e){t&&t(e),a&&a(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),r&&"Enter"===e.key&&r()},className:j},o)),c&&Object(d.jsx)("span",{className:l,children:c})]})},U=a(12),F=a.n(U),H=a(8),W=a.n(H),G=function(e){var t=e.red,a=e.className,n=e.disabled,r=Object(A.a)(e,["red","className","disabled"]),c="".concat(n?W.a.disabled:W.a.default," ").concat(t?W.a.red:W.a.default,"  ").concat(a," ");return Object(d.jsx)("button",Object(I.a)({className:c},r))},K=a(13),P=a.n(K),J=function(e){e.type;var t=e.onChange,a=e.onChangeChecked,n=e.className,r=(e.spanClassName,e.children),c=Object(A.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(P.a.checkbox," ").concat(n||"");return Object(d.jsxs)("label",{children:[Object(d.jsx)("input",Object(I.a)({type:"checkbox",onChange:function(e){t&&t(e),a&&a(!0)},className:s},c)),r&&Object(d.jsx)("span",{className:P.a.spanClassName,children:r})]})};var L=function(){var e=Object(n.useState)(""),t=Object(p.a)(e,2),a=t[0],r=t[1],c=a?"":"error",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(a)},i=Object(n.useState)(!1),o=Object(p.a)(i,2),l=o[0],j=o[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 4",Object(d.jsxs)("div",{className:F.a.column,children:[Object(d.jsx)(E,{value:a,onChangeText:r,onEnter:s,error:c}),Object(d.jsx)(E,{className:F.a.blue}),Object(d.jsx)(G,{children:"default"}),Object(d.jsx)(G,{red:!0,onClick:s,children:"delete "}),Object(d.jsx)(G,{disabled:!0,children:"disabled"}),Object(d.jsx)(J,{checked:l,onChangeChecked:j,children:"some text "}),Object(d.jsx)(J,{checked:l,onChange:function(e){return j(e.currentTarget.checked)}})]}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})};var X=function(){return Object(d.jsxs)("div",{className:o.a.App,children:[Object(d.jsx)("div",{children:"react homeworks:"}),Object(d.jsx)(x,{}),Object(d.jsx)(v,{}),Object(d.jsx)(M,{}),Object(d.jsx)(L,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(X,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[23,1,2]]]);
//# sourceMappingURL=main.cc0f2179.chunk.js.map
(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,,,,,function(e,a,t){e.exports={someClass:"Affairs_someClass__25r49",buttons:"Affairs_buttons__a6DD0",flex_but:"Affairs_flex_but__3QGfZ",btn_act:"Affairs_btn_act__3FKWZ"}},,function(e,a,t){e.exports={dropbox_head:"Header_dropbox_head__3AEky",dropbox:"Header_dropbox__1HPT7",dropbox_list:"Header_dropbox_list__3Ea6f",active:"Header_active__1mmgW"}},,function(e,a,t){e.exports={message:"Message_message__1Uwsa",header:"Message_header__1b4c9",chat:"Message_chat__P8G96",textChat:"Message_textChat__2VJey",name:"Message_name__2ph39",icon:"Message_icon__3trIm"}},function(e,a,t){e.exports={someClass:"Greeting_someClass__28lSn",error:"Greeting_error__3FjTW",good:"Greeting_good__Phj1C",buttons:"Greeting_buttons__nawZl",total:"Greeting_total__17HEq",errorWrap:"Greeting_errorWrap__J85Uq"}},,,,,function(e,a,t){e.exports={someClass:"Affair_someClass__3bSEv",buttons:"Affair_buttons__17oG-",flex_but:"Affair_flex_but__1tMyX",btn_act:"Affair_btn_act__1RJXL",name:"Affair_name__hbukO",head:"Affair_head__1i0QB"}},function(e,a,t){e.exports={superInput:"SuperInputText_superInput__3gH-L",errorInput:"SuperInputText_errorInput__PsV7d",error:"SuperInputText_error__3fjSo"}},function(e,a,t){e.exports={default:"SuperButton_default__afy7m",red:"SuperButton_red__3T6vi",buttons:"SuperButton_buttons__1D4n8"}},,function(e,a,t){e.exports={header:"Error404_header__1nN8w",text:"Error404_text__335ow"}},,,,function(e,a,t){e.exports={blue:"HW4_blue__x1gEn",column:"HW4_column__2Bx-c",title:"HW4_title__Pv0OO"}},function(e,a,t){e.exports={spanClassName:"SuperCheckbox_spanClassName__WeGx0",checkbox_inp:"SuperCheckbox_checkbox_inp__1u7np"}},,,,function(e,a,t){e.exports={App:"App_App__L8ky3"}},function(e,a,t){e.exports=t.p+"static/media/img_er.353a8786.png"},,function(e,a,t){e.exports={title:"HW3_title__3tQ1m"}},,function(e,a,t){e.exports=t(46)},,,,,function(e,a,t){},,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(29),c=t.n(l),o=(t(40),t(30)),s=t.n(o),i=t(8),u=t(9),m=t.n(u),_=t(1),d=t(21),f=t.n(d),p=t(31),E=t.n(p);var h=function(){return r.a.createElement("div",{className:f.a.header},r.a.createElement("div",null,r.a.createElement("img",{src:E.a,alt:"logo"})),r.a.createElement("div",{className:f.a.text},r.a.createElement("div",null,"404"),r.a.createElement("div",null,"Page not found!"),r.a.createElement("div",null,"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"),r.a.createElement("div",null,r.a.createElement(i.b,{to:"/"},"Return Home"))))},b=t(11),v=t.n(b);var g=function(e){var a=e.avatar,t=e.name,n=e.message,l=e.time;return r.a.createElement("div",{className:v.a.message},r.a.createElement("div",{className:v.a.chat,key:t},r.a.createElement("div",{className:v.a.icon},r.a.createElement("img",{src:a,alt:"icon"})),r.a.createElement("div",{className:v.a.header},r.a.createElement("ul",null,r.a.createElement("li",{className:v.a.name},t),r.a.createElement("li",null,l)),r.a.createElement("div",{className:v.a.textChat},n))))},C="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",N="Some Name",x="some text",k="22:00";var j=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1 should work (\u0434\u043e\u043b\u0436\u043d\u043e \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c)",r.a.createElement(g,{avatar:C,name:N,message:x,time:k}),r.a.createElement("hr",null),r.a.createElement("hr",null))},w=t(5),y=t(17),O=t.n(y);var S=function(e){var a=e.affair,t=e.deleteAffairCallback;return r.a.createElement("div",{className:O.a.head},r.a.createElement("span",{className:O.a.name},a.name),r.a.createElement("button",{className:O.a.buttons,onClick:function(){t(a._id)}},"X"))},A=t(7),H=t.n(A);var W=function(e){var a=e.data,t=e.setFilter,n=e.deleteAffairCallback,l=e.filter,c=a.map((function(e){return r.a.createElement(S,{key:e._id,affair:e,deleteAffairCallback:n})}));return r.a.createElement("div",null,c,r.a.createElement("div",{className:H.a.flex_but},r.a.createElement("button",{className:"".concat(H.a.buttons," ").concat("all"===l?H.a.btn_act:""),onClick:function(){t("all")}},"All"),r.a.createElement("button",{className:"".concat(H.a.buttons," ").concat("high"===l?H.a.btn_act:""),onClick:function(){t("high")}},"High"),r.a.createElement("button",{className:"".concat(H.a.buttons," ").concat("middle"===l?H.a.btn_act:""),onClick:function(){t("middle")}},"Middle"),r.a.createElement("button",{className:"".concat(H.a.buttons," ").concat("low"===l?H.a.btn_act:""),onClick:function(){t("low")}},"Low")))},P=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var T=function(){var e=Object(n.useState)(P),a=Object(w.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),o=Object(w.a)(c,2),s=o[0],i=o[1],u=function(e,a){switch(a){case"high":return e.filter((function(e){return"high"===e.priority}));case"middle":return e.filter((function(e){return"middle"===e.priority}));case"low":return e.filter((function(e){return"low"===e.priority}));default:return e}}(t,s);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(W,{data:u,setFilter:i,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))},filter:s}))},G=t(34),I=t(12),J=t.n(I),M=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,o=l?J.a.error:J.a.good;return r.a.createElement("div",null,r.a.createElement("div",{className:J.a.someClass},r.a.createElement("input",{value:a,onChange:t,className:o,title:"\u0420\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0440\u0443\u0441\u0441\u043a\u0438\u0435 \u0438 \u043b\u0430\u0442\u0438\u043d\u0441\u043a\u0438\u0435 \u0431\u0443\u043a\u0432\u044b",placeholder:"Name"}),r.a.createElement("button",{onClick:n,className:J.a.buttons},"ADD"),r.a.createElement("div",{className:J.a.total},r.a.createElement("span",null,c))),r.a.createElement("div",{className:J.a.errorWrap},r.a.createElement("span",null,l)))},B=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(w.a)(l,2),o=c[0],s=c[1],i=Object(n.useState)(null),u=Object(w.a)(i,2),m=u[0],_=u[1],d=a.length;return r.a.createElement(M,{name:o,setNameCallback:function(e){s(e.target.value.replace(/[^\D]+/g,"")),_(null)},addUser:function(){""===o.trim()?(_("You must enter a name"),s("")):(alert("Hello ".concat(o," !")),t(o.trim()),s(""))},error:m,totalUsers:d})},U=t(48),D=t(33),F=t.n(D),K=[];var L=function(){var e=Object(n.useState)(K),a=Object(w.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("div",{className:F.a.title},"Homeworks 3"),r.a.createElement(B,{users:t,addUserCallback:function(e){var a={_id:Object(U.a)(),name:e};l([a].concat(Object(G.a)(t))),console.log(K)}}))},R=t(13),X=t(18),Z=t.n(X),q=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,o=e.className,s=e.spanClassName,i=Object(R.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),u="".concat(Z.a.error," ").concat(s||""),m=c?"".concat(Z.a.errorInput," ").concat(o||""):"".concat(Z.a.superInput);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),"Enter"===e.key&&l&&l()},className:m,placeholder:"Name"},i)),c&&r.a.createElement("span",{className:u},c))},Q=t(25),V=t.n(Q),Y=t(19),$=t.n(Y),z=function(e){var a=e.red,t=(e.className,Object(R.a)(e,["red","className"])),n="".concat(a?$.a.red:$.a.default," ").concat($.a.buttons);return r.a.createElement("button",Object.assign({className:n},t))},ee=t(26),ae=t.n(ee),te=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(R.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),o="".concat(n||"");return r.a.createElement("label",{className:ae.a.checkbox_inp},r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){a&&a(e),t&&t(e.currentTarget.checked)},className:o},c)),l&&r.a.createElement("span",{className:ae.a.spanClassName},l))};var ne=function(){var e=Object(n.useState)(""),a=Object(w.a)(e,2),t=a[0],l=a[1],c=t?"":"error",o=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t)},s=Object(n.useState)(!1),i=Object(w.a)(s,2),u=i[0],m=i[1];return r.a.createElement("div",{className:V.a.title},r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:V.a.column},r.a.createElement(q,{value:t,onChangeText:l,onEnter:o,error:c}),r.a.createElement(z,{red:!0,onClick:o},"delete "),r.a.createElement(te,{checked:u,onChangeChecked:m},"Check "),r.a.createElement(te,{checked:u,onChange:function(e){return m(e.currentTarget.checked)}},"Check")))};var re=function(){return r.a.createElement("div",null,r.a.createElement(j,null),r.a.createElement(T,null),r.a.createElement(L,null),r.a.createElement(ne,null))};var le=function(){return r.a.createElement("div",null,"Junior")};var ce=function(){return r.a.createElement("div",null,"JuniorPlus")},oe="/pre-junior",se="/junior",ie="/junior_plus";var ue=function(){return r.a.createElement("div",null,r.a.createElement(_.d,null,r.a.createElement(_.b,{path:"/",exact:!0,render:function(){return r.a.createElement(_.a,{to:oe})}}),r.a.createElement(_.b,{path:oe,render:function(){return r.a.createElement(re,null)}}),r.a.createElement(_.b,{path:se,render:function(){return r.a.createElement(le,null)}}),r.a.createElement(_.b,{path:ie,render:function(){return r.a.createElement(ce,null)}}),r.a.createElement(_.b,{render:function(){return r.a.createElement(h,null)}})))};var me=function(){return r.a.createElement("div",{className:m.a.dropbox_head},r.a.createElement("div",{className:m.a.dropbox}," ",r.a.createElement("span",{className:m.a.dropbox_btn},"Menu"),r.a.createElement("nav",{className:m.a.dropbox_list},r.a.createElement(i.c,{exact:!0,to:oe,activeClassName:m.a.active},"Pre-junior"),r.a.createElement(i.c,{to:se,activeClassName:m.a.active},"Junior"),r.a.createElement(i.c,{to:ie,activeClassName:m.a.active},"JuniorPlus"))))};var _e=function(){return r.a.createElement("div",null,r.a.createElement(i.a,null,r.a.createElement(me,null),r.a.createElement(ue,null)))};var de=function(){return r.a.createElement("div",{className:s.a.App},r.a.createElement("div",null,"React homeworks:"),r.a.createElement(_e,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(de,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[35,1,2]]]);
//# sourceMappingURL=main.b66f3de6.chunk.js.map
(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,,,,,function(e,a,t){e.exports={someClass:"Affairs_someClass__1dbWD",buttons:"Affairs_buttons__3Sj-6",flex_but:"Affairs_flex_but__1nEhA",btn_act:"Affairs_btn_act__2o38e"}},,function(e,a,t){e.exports={dropbox_head:"Header_dropbox_head__3ktDy",dropbox:"Header_dropbox__3hahO",dropbox_list:"Header_dropbox_list__eBjEo",active:"Header_active__1tEjL"}},,function(e,a,t){e.exports={message:"Message_message__2ZALR",header:"Message_header__hywop",chat:"Message_chat__1yzGj",textChat:"Message_textChat__1_J6O",name:"Message_name__YW4ac",icon:"Message_icon__125HQ"}},function(e,a,t){e.exports={someClass:"Greeting_someClass__1ekMC",error:"Greeting_error__20RAN",good:"Greeting_good__bpgzp",buttons:"Greeting_buttons__3Dova",total:"Greeting_total__2M4Ne",errorWrap:"Greeting_errorWrap__1ozBJ"}},,,,,function(e,a,t){e.exports={someClass:"Affair_someClass__3OuID",buttons:"Affair_buttons__14mls",flex_but:"Affair_flex_but__3FEXP",btn_act:"Affair_btn_act__1S3ml",name:"Affair_name__54wnr",head:"Affair_head__3dVb9"}},function(e,a,t){e.exports={superInput:"SuperInputText_superInput__3oYpl",errorInput:"SuperInputText_errorInput__IAbW9",error:"SuperInputText_error__1ysiy"}},function(e,a,t){e.exports={default:"SuperButton_default__2xWqW",red:"SuperButton_red__21-xR",buttons:"SuperButton_buttons__p2noi"}},,,,,function(e,a,t){e.exports={header:"Error404_header__rCvAa",text:"Error404_text__2FNJ0"}},function(e,a,t){e.exports={blue:"HW4_blue__155Q_",column:"HW4_column__2jcyF",title:"HW4_title__2sldD"}},function(e,a,t){e.exports={spanClassName:"SuperCheckbox_spanClassName__1sNYP",checkbox_inp:"SuperCheckbox_checkbox_inp__GV3dE"}},,,,function(e,a,t){e.exports={App:"App_App__-A5yA"}},,function(e,a,t){e.exports=t.p+"static/media/img_er.353a8786.png"},function(e,a,t){e.exports={title:"HW3_title__2iWwG"}},,function(e,a,t){e.exports=t(46)},,,,,function(e,a,t){},,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(29),c=t.n(l),o=(t(40),t(30)),s=t.n(o),i=t(8),u=t(9),m=t.n(u);var _=function(){return r.a.createElement("div",{className:m.a.dropbox_head},r.a.createElement("div",{className:m.a.dropbox}," ",r.a.createElement("span",{className:m.a.dropbox_btn},"Menu"),r.a.createElement("nav",{className:m.a.dropbox_list},r.a.createElement(i.c,{exact:!0,to:"/pre-junior",activeClassName:m.a.active},"Pre-junior"),r.a.createElement(i.c,{to:"/junior",activeClassName:m.a.active},"Junior"),r.a.createElement(i.c,{to:"/junior_plus",activeClassName:m.a.active},"JuniorPlus"))))},d=t(1),p=t(24),f=t.n(p),E=t(32),h=t.n(E);var b=function(){return r.a.createElement("div",{className:f.a.header},r.a.createElement("div",null,r.a.createElement("img",{src:h.a,alt:"logo"})),r.a.createElement("div",{className:f.a.text},r.a.createElement("div",null,"404"),r.a.createElement("div",null,"Page not found!"),r.a.createElement("div",null,"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"),r.a.createElement("div",null,r.a.createElement(i.b,{to:"/"},"Return Home"))))},v=t(11),g=t.n(v);var N=function(e){var a=e.avatar,t=e.name,n=e.message,l=e.time;return r.a.createElement("div",{className:g.a.message},r.a.createElement("div",{className:g.a.chat,key:t},r.a.createElement("div",{className:g.a.icon},r.a.createElement("img",{src:a,alt:"icon"})),r.a.createElement("div",{className:g.a.header},r.a.createElement("ul",null,r.a.createElement("li",{className:g.a.name},t),r.a.createElement("li",null,l)),r.a.createElement("div",{className:g.a.textChat},n))))},C="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",x="Some Name",k="some text",j="22:00";var y=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1 should work (\u0434\u043e\u043b\u0436\u043d\u043e \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c)",r.a.createElement(N,{avatar:C,name:x,message:k,time:j}),r.a.createElement("hr",null),r.a.createElement("hr",null))},A=t(5),w=t(17),O=t.n(w);var S=function(e){var a=e.affair,t=e.deleteAffairCallback;return r.a.createElement("div",{className:O.a.head},r.a.createElement("span",{className:O.a.name},a.name),r.a.createElement("button",{className:O.a.buttons,onClick:function(){t(a._id)}},"X"))},W=t(7),H=t.n(W);var I=function(e){var a=e.data,t=e.setFilter,n=e.deleteAffairCallback,l=e.filter,c=a.map((function(e){return r.a.createElement(S,{key:e._id,affair:e,deleteAffairCallback:n})}));return r.a.createElement("div",null,c,r.a.createElement("div",{className:H.a.flex_but},r.a.createElement("button",{className:"".concat(H.a.buttons," ").concat("all"===l?H.a.btn_act:""),onClick:function(){t("all")}},"All"),r.a.createElement("button",{className:"".concat(H.a.buttons," ").concat("high"===l?H.a.btn_act:""),onClick:function(){t("high")}},"High"),r.a.createElement("button",{className:"".concat(H.a.buttons," ").concat("middle"===l?H.a.btn_act:""),onClick:function(){t("middle")}},"Middle"),r.a.createElement("button",{className:"".concat(H.a.buttons," ").concat("low"===l?H.a.btn_act:""),onClick:function(){t("low")}},"Low")))},M=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var G=function(){var e=Object(n.useState)(M),a=Object(A.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),o=Object(A.a)(c,2),s=o[0],i=o[1],u=function(e,a){switch(a){case"high":return e.filter((function(e){return"high"===e.priority}));case"middle":return e.filter((function(e){return"middle"===e.priority}));case"low":return e.filter((function(e){return"low"===e.priority}));default:return e}}(t,s);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(I,{data:u,setFilter:i,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))},filter:s}))},J=t(34),P=t(12),T=t.n(P),B=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,o=l?T.a.error:T.a.good;return r.a.createElement("div",null,r.a.createElement("div",{className:T.a.someClass},r.a.createElement("input",{value:a,onChange:t,className:o,title:"\u0420\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0440\u0443\u0441\u0441\u043a\u0438\u0435 \u0438 \u043b\u0430\u0442\u0438\u043d\u0441\u043a\u0438\u0435 \u0431\u0443\u043a\u0432\u044b",placeholder:"Name"}),r.a.createElement("button",{onClick:n,className:T.a.buttons},"ADD"),r.a.createElement("div",{className:T.a.total},r.a.createElement("span",null,c))),r.a.createElement("div",{className:T.a.errorWrap},r.a.createElement("span",null,l)))},D=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(A.a)(l,2),o=c[0],s=c[1],i=Object(n.useState)(null),u=Object(A.a)(i,2),m=u[0],_=u[1],d=a.length;return r.a.createElement(B,{name:o,setNameCallback:function(e){s(e.target.value.replace(/[^\D]+/g,"")),_(null)},addUser:function(){""===o.trim()?(_("You must enter a name"),s("")):(alert("Hello ".concat(o," !")),t(o.trim()),s(""))},error:m,totalUsers:d})},F=t(48),R=t(33),U=t.n(R),Y=[];var z=function(){var e=Object(n.useState)(Y),a=Object(A.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("div",{className:U.a.title},"Homeworks 3"),r.a.createElement(D,{users:t,addUserCallback:function(e){var a={_id:Object(F.a)(),name:e};l([a].concat(Object(J.a)(t))),console.log(Y)}}))},K=t(13),L=t(18),X=t.n(L),q=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,o=e.className,s=e.spanClassName,i=Object(K.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),u="".concat(X.a.error," ").concat(s||""),m=c?"".concat(X.a.errorInput," ").concat(o||""):"".concat(X.a.superInput);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),"Enter"===e.key&&l&&l()},className:m,placeholder:"Name"},i)),c&&r.a.createElement("span",{className:u},c))},Q=t(25),V=t.n(Q),Z=t(19),$=t.n(Z),ee=function(e){var a=e.red,t=(e.className,Object(K.a)(e,["red","className"])),n="".concat(a?$.a.red:$.a.default," ").concat($.a.buttons);return r.a.createElement("button",Object.assign({className:n},t))},ae=t(26),te=t.n(ae),ne=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(K.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),o="".concat(n||"");return r.a.createElement("label",{className:te.a.checkbox_inp},r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){a&&a(e),t&&t(e.currentTarget.checked)},className:o},c)),l&&r.a.createElement("span",{className:te.a.spanClassName},l))};var re=function(){var e=Object(n.useState)(""),a=Object(A.a)(e,2),t=a[0],l=a[1],c=t?"":"error",o=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t)},s=Object(n.useState)(!1),i=Object(A.a)(s,2),u=i[0],m=i[1];return r.a.createElement("div",{className:V.a.title},r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:V.a.column},r.a.createElement(q,{value:t,onChangeText:l,onEnter:o,error:c}),r.a.createElement(ee,{red:!0,onClick:o},"delete "),r.a.createElement(ne,{checked:u,onChangeChecked:m},"Check "),r.a.createElement(ne,{checked:u,onChange:function(e){return m(e.currentTarget.checked)}},"Check")))};var le=function(){return r.a.createElement("div",null,r.a.createElement(y,null),r.a.createElement(G,null),r.a.createElement(z,null),r.a.createElement(re,null))};var ce=function(){return r.a.createElement("div",null,"Junior")};var oe=function(){return r.a.createElement("div",null,"JuniorPlus")},se="/pre-junior",ie="/junior",ue="/junior_plus";var me=function(){return r.a.createElement("div",null,r.a.createElement(d.d,null,r.a.createElement(d.b,{path:"/",exact:!0,render:function(){return r.a.createElement(d.a,{to:se})}}),r.a.createElement(d.b,{path:se,render:function(){return r.a.createElement(le,null)}}),r.a.createElement(d.b,{path:ie,render:function(){return r.a.createElement(ce,null)}}),r.a.createElement(d.b,{path:ue,render:function(){return r.a.createElement(oe,null)}}),r.a.createElement(d.b,{render:function(){return r.a.createElement(b,null)}})))};var _e=function(){return r.a.createElement("div",null,r.a.createElement(i.a,null,r.a.createElement(_,null),r.a.createElement(me,null)))};var de=function(){return r.a.createElement("div",{className:s.a.App},r.a.createElement("div",null,"React homeworks:"),r.a.createElement(_e,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(de,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[35,1,2]]]);
//# sourceMappingURL=main.18bdc9a4.chunk.js.map
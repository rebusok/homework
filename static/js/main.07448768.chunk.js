(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,,,,,,function(e,a,t){e.exports={someClass:"Affairs_someClass__1dbWD",buttons:"Affairs_buttons__3Sj-6",flex_but:"Affairs_flex_but__1nEhA",btn_act:"Affairs_btn_act__2o38e"}},,function(e,a,t){e.exports={dropbox_head:"Header_dropbox_head__3ktDy",dropbox:"Header_dropbox__3hahO",dropbox_list:"Header_dropbox_list__eBjEo",active:"Header_active__1tEjL"}},,function(e,a,t){e.exports={message:"Message_message__2ZALR",header:"Message_header__hywop",chat:"Message_chat__1yzGj",textChat:"Message_textChat__1_J6O",name:"Message_name__YW4ac",icon:"Message_icon__125HQ"}},function(e,a,t){e.exports={someClass:"Greeting_someClass__1ekMC",error:"Greeting_error__20RAN",good:"Greeting_good__bpgzp",buttons:"Greeting_buttons__3Dova",total:"Greeting_total__2M4Ne",errorWrap:"Greeting_errorWrap__1ozBJ"}},,,,function(e,a,t){e.exports={someClass:"Affair_someClass__3OuID",buttons:"Affair_buttons__14mls",flex_but:"Affair_flex_but__3FEXP",btn_act:"Affair_btn_act__1S3ml",name:"Affair_name__54wnr",head:"Affair_head__3dVb9"}},function(e,a,t){e.exports={superInput:"SuperInputText_superInput__3oYpl",errorInput:"SuperInputText_errorInput__IAbW9",error:"SuperInputText_error__1ysiy"}},function(e,a,t){e.exports={default:"SuperButton_default__2xWqW",red:"SuperButton_red__21-xR",buttons:"SuperButton_buttons__p2noi"}},function(e,a,t){e.exports={wrapper:"SuperRadio_wrapper__1iaYS",checkbox_inp:"SuperRadio_checkbox_inp__3Or6X",super_input:"SuperRadio_super_input__1jM9A"}},,function(e,a,t){e.exports={header:"Error404_header__rCvAa",text:"Error404_text__2FNJ0"}},,,,function(e,a,t){e.exports={blue:"HW4_blue__155Q_",column:"HW4_column__2jcyF",title:"HW4_title__2sldD"}},function(e,a,t){e.exports={spanClassName:"SuperCheckbox_spanClassName__1sNYP",checkbox_inp:"SuperCheckbox_checkbox_inp__GV3dE"}},,,,function(e,a,t){e.exports={App:"App_App__-A5yA"}},function(e,a,t){e.exports=t.p+"static/media/img_er.353a8786.png"},,function(e,a,t){e.exports={title:"HW3_title__2iWwG"}},function(e,a,t){e.exports={redit_span:"superEditableSpan_redit_span__uWrKB"}},,function(e,a,t){e.exports=t(48)},,,,,function(e,a,t){},,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(30),c=t.n(l),o=(t(42),t(31)),s=t.n(o),u=t(9),i=t(10),m=t.n(i),_=t(1),p=t(22),d=t.n(p),E=t(32),f=t.n(E);var h=function(){return r.a.createElement("div",{className:d.a.header},r.a.createElement("div",null,r.a.createElement("img",{src:f.a,alt:"logo"})),r.a.createElement("div",{className:d.a.text},r.a.createElement("div",null,"404"),r.a.createElement("div",null,"Page not found!"),r.a.createElement("div",null,"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"),r.a.createElement("div",null,r.a.createElement(u.b,{to:"/"},"Return Home"))))},b=t(12),v=t.n(b);var g=function(e){var a=e.avatar,t=e.name,n=e.message,l=e.time;return r.a.createElement("div",{className:v.a.message},r.a.createElement("div",{className:v.a.chat,key:t},r.a.createElement("div",{className:v.a.icon},r.a.createElement("img",{src:a,alt:"icon"})),r.a.createElement("div",{className:v.a.header},r.a.createElement("ul",null,r.a.createElement("li",{className:v.a.name},t),r.a.createElement("li",null,l)),r.a.createElement("div",{className:v.a.textChat},n))))},C="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",N="Some Name",x="some text",k="22:00";var O=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1 should work (\u0434\u043e\u043b\u0436\u043d\u043e \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c)",r.a.createElement(g,{avatar:C,name:N,message:x,time:k}),r.a.createElement("hr",null),r.a.createElement("hr",null))},j=t(3),y=t(17),S=t.n(y);var w=function(e){var a=e.affair,t=e.deleteAffairCallback;return r.a.createElement("div",{className:S.a.head},r.a.createElement("span",{className:S.a.name},a.name),r.a.createElement("button",{className:S.a.buttons,onClick:function(){t(a._id)}},"X"))},A=t(8),W=t.n(A);var H=function(e){var a=e.data,t=e.setFilter,n=e.deleteAffairCallback,l=e.filter,c=a.map((function(e){return r.a.createElement(w,{key:e._id,affair:e,deleteAffairCallback:n})}));return r.a.createElement("div",null,c,r.a.createElement("div",{className:W.a.flex_but},r.a.createElement("button",{className:"".concat(W.a.buttons," ").concat("all"===l?W.a.btn_act:""),onClick:function(){t("all")}},"All"),r.a.createElement("button",{className:"".concat(W.a.buttons," ").concat("high"===l?W.a.btn_act:""),onClick:function(){t("high")}},"High"),r.a.createElement("button",{className:"".concat(W.a.buttons," ").concat("middle"===l?W.a.btn_act:""),onClick:function(){t("middle")}},"Middle"),r.a.createElement("button",{className:"".concat(W.a.buttons," ").concat("low"===l?W.a.btn_act:""),onClick:function(){t("low")}},"Low")))},I=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var P=function(){var e=Object(n.useState)(I),a=Object(j.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),o=Object(j.a)(c,2),s=o[0],u=o[1],i=function(e,a){switch(a){case"high":return e.filter((function(e){return"high"===e.priority}));case"middle":return e.filter((function(e){return"middle"===e.priority}));case"low":return e.filter((function(e){return"low"===e.priority}));default:return e}}(t,s);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(H,{data:i,setFilter:u,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))},filter:s}))},B=t(36),F=t(13),J=t.n(F),M=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,o=l?J.a.error:J.a.good;return r.a.createElement("div",null,r.a.createElement("div",{className:J.a.someClass},r.a.createElement("input",{value:a,onChange:t,className:o,title:"\u0420\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0440\u0443\u0441\u0441\u043a\u0438\u0435 \u0438 \u043b\u0430\u0442\u0438\u043d\u0441\u043a\u0438\u0435 \u0431\u0443\u043a\u0432\u044b",placeholder:"Name"}),r.a.createElement("button",{onClick:n,className:J.a.buttons},"ADD"),r.a.createElement("div",{className:J.a.total},r.a.createElement("span",null,c))),r.a.createElement("div",{className:J.a.errorWrap},r.a.createElement("span",null,l)))},D=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(j.a)(l,2),o=c[0],s=c[1],u=Object(n.useState)(null),i=Object(j.a)(u,2),m=i[0],_=i[1],p=a.length;return r.a.createElement(M,{name:o,setNameCallback:function(e){s(e.target.value.replace(/[^\D]+/g,"")),_(null)},addUser:function(){""===o.trim()?(_("You must enter a name"),s("")):(alert("Hello ".concat(o," !")),t(o.trim()),s(""))},error:m,totalUsers:p})},T=t(50),G=t(34),R=t.n(G),U=[];var Y=function(){var e=Object(n.useState)(U),a=Object(j.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("div",{className:R.a.title},"Homeworks 3"),r.a.createElement(D,{users:t,addUserCallback:function(e){var a={_id:Object(T.a)(),name:e};l([a].concat(Object(B.a)(t))),console.log(U)}}))},z=t(4),K=t(18),X=t.n(K),L=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,o=e.className,s=e.spanClassName,u=Object(z.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),i="".concat(X.a.error," ").concat(s||""),m=c?"".concat(X.a.errorInput," ").concat(o||""):"".concat(X.a.superInput);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),"Enter"===e.key&&l&&l()},className:m,placeholder:"Name"},u)),c&&r.a.createElement("span",{className:i},c))},q=t(26),Q=t.n(q),V=t(19),Z=t.n(V),$=function(e){var a=e.red,t=(e.className,Object(z.a)(e,["red","className"])),n="".concat(a?Z.a.red:Z.a.default," ").concat(Z.a.buttons);return r.a.createElement("button",Object.assign({className:n},t))},ee=t(27),ae=t.n(ee),te=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(z.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),o="".concat(n||"");return r.a.createElement("label",{className:ae.a.checkbox_inp},r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){a&&a(e),t&&t(e.currentTarget.checked)},className:o},c)),l&&r.a.createElement("span",{className:ae.a.spanClassName},l))};var ne=function(){var e=Object(n.useState)(""),a=Object(j.a)(e,2),t=a[0],l=a[1],c=t?"":"error",o=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t)},s=Object(n.useState)(!1),u=Object(j.a)(s,2),i=u[0],m=u[1];return r.a.createElement("div",{className:Q.a.title},r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:Q.a.column},r.a.createElement(L,{value:t,onChangeText:l,onEnter:o,error:c}),r.a.createElement($,{red:!0,onClick:o},"delete "),r.a.createElement(te,{checked:i,onChangeChecked:m},"Check "),r.a.createElement(te,{checked:i,onChange:function(e){return m(e.currentTarget.checked)}},"Check")))},re=t(35),le=t.n(re),ce=function(e){e.autoFocus;var a=e.onBlur,t=e.onEnter,l=e.spanProps,c=Object(z.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),o=Object(n.useState)(!1),s=Object(j.a)(o,2),u=s[0],i=s[1],m=l||{},_=m.children,p=m.onDoubleClick,d=m.className,E=Object(z.a)(m,["children","onDoubleClick","className"]),f="".concat(le.a.redit_span," ").concat(d);return r.a.createElement(r.a.Fragment,null,u?r.a.createElement(L,Object.assign({autoFocus:!0,onBlur:function(e){i(!1),a&&a(e)},onEnter:function(){i(!1),t&&t()}},c)):r.a.createElement("span",Object.assign({onDoubleClick:function(e){i(!0),p&&p(e)},className:f},E),_||c.value))};function oe(e,a){var t=JSON.stringify(a);localStorage.setItem(e,t)}function se(e,a){var t=localStorage.getItem(e);return null!==t&&(a=JSON.parse(t)),a}oe("test",{x:"A",y:1});se("test",{x:"",y:0});var ue=function(){var e=Object(n.useState)(""),a=Object(j.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 6",r.a.createElement("div",null,r.a.createElement(ce,{value:t,onChangeText:l,spanProps:{children:t?void 0:"Enter text..."}})),r.a.createElement($,{onClick:function(){oe("editable-span-value",t)}},"save"),r.a.createElement($,{onClick:function(){l(se("editable-span-value",t))}},"restore"),r.a.createElement("hr",null),r.a.createElement("hr",null))},ie=function(e){var a=e.options,t=e.onChange,n=e.onChangeOption,l=Object(z.a)(e,["options","onChange","onChangeOption"]),c=a?a.map((function(e){return r.a.createElement("option",{key:e,value:e},e)})):[];return r.a.createElement("select",Object.assign({onChange:function(e){n&&n(e.target.value),t&&t(e)}},l),c)},me=t(20),_e=t.n(me),pe=function(e){e.type;var a=e.name,t=e.options,n=e.value,l=e.onChange,c=e.onChangeOption,o=(Object(z.a)(e,["type","name","options","value","onChange","onChangeOption"]),function(e){c&&c(e.target.value),l&&l(e)}),s=t?t.map((function(e,t){return r.a.createElement("div",{className:_e.a.wrapper,key:a+"-"+t},r.a.createElement("label",{className:e===n?_e.a.super_input:_e.a.checkbox_inp},r.a.createElement("input",{type:a,onChange:o,value:e,checked:e===n}),e))})):[];return r.a.createElement(r.a.Fragment,null,s)},de=["x","y","z"];var Ee=function(){var e=Object(n.useState)(de[1]),a=Object(j.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 7",r.a.createElement("div",null,r.a.createElement(ie,{options:de,value:t,onChangeOption:l})),r.a.createElement("div",null,r.a.createElement(pe,{name:"radio",options:de,value:t,onChangeOption:l})),r.a.createElement("hr",null),r.a.createElement("hr",null))};var fe=function(){return r.a.createElement("div",null,r.a.createElement(O,null),r.a.createElement(P,null),r.a.createElement(Y,null),r.a.createElement(ne,null),r.a.createElement(ue,null),r.a.createElement(Ee,null))};var he=function(){return r.a.createElement("div",null,"Junior")};var be=function(){return r.a.createElement("div",null,"JuniorPlus")},ve="/pre-junior",ge="/junior",Ce="/junior_plus";var Ne=function(){return r.a.createElement("div",null,r.a.createElement(_.d,null,r.a.createElement(_.b,{path:"/",exact:!0,render:function(){return r.a.createElement(_.a,{to:ve})}}),r.a.createElement(_.b,{path:ve,render:function(){return r.a.createElement(fe,null)}}),r.a.createElement(_.b,{path:ge,render:function(){return r.a.createElement(he,null)}}),r.a.createElement(_.b,{path:Ce,render:function(){return r.a.createElement(be,null)}}),r.a.createElement(_.b,{render:function(){return r.a.createElement(h,null)}})))};var xe=function(){return r.a.createElement("div",{className:m.a.dropbox_head},r.a.createElement("div",{className:m.a.dropbox}," ",r.a.createElement("span",{className:m.a.dropbox_btn},"Menu"),r.a.createElement("nav",{className:m.a.dropbox_list},r.a.createElement(u.c,{exact:!0,to:ve,activeClassName:m.a.active},"Pre-junior"),r.a.createElement(u.c,{to:ge,activeClassName:m.a.active},"Junior"),r.a.createElement(u.c,{to:Ce,activeClassName:m.a.active},"JuniorPlus"))))};var ke=function(){return r.a.createElement("div",null,r.a.createElement(u.a,null,r.a.createElement(xe,null),r.a.createElement(Ne,null)))};var Oe=function(){return r.a.createElement("div",{className:s.a.App},r.a.createElement("div",null,"React homeworks:"),r.a.createElement(ke,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Oe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[37,1,2]]]);
//# sourceMappingURL=main.07448768.chunk.js.map
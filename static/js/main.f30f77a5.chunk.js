(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,,,,,,function(e,a,t){e.exports={someClass:"Affairs_someClass__25r49",buttons:"Affairs_buttons__a6DD0",flex_but:"Affairs_flex_but__3QGfZ",btn_act:"Affairs_btn_act__3FKWZ"}},,function(e,a,t){e.exports={dropbox_head:"Header_dropbox_head__3AEky",dropbox:"Header_dropbox__1HPT7",dropbox_list:"Header_dropbox_list__3Ea6f",active:"Header_active__1mmgW"}},,function(e,a,t){e.exports={message:"Message_message__1Uwsa",header:"Message_header__1b4c9",chat:"Message_chat__P8G96",textChat:"Message_textChat__2VJey",name:"Message_name__2ph39",icon:"Message_icon__3trIm"}},function(e,a,t){e.exports={someClass:"Greeting_someClass__28lSn",error:"Greeting_error__3FjTW",good:"Greeting_good__Phj1C",buttons:"Greeting_buttons__nawZl",total:"Greeting_total__17HEq",errorWrap:"Greeting_errorWrap__J85Uq"}},function(e,a,t){e.exports={wrapper:"Clock_wrapper__23KSw",clock:"Clock_clock__2phxv",displayOn:"Clock_displayOn__2MZpO",displayOff:"Clock_displayOff__3KTx9",time:"Clock_time__2kyrF",date:"Clock_date__djBru"}},,,,,function(e,a,t){e.exports={someClass:"Affair_someClass__3bSEv",buttons:"Affair_buttons__17oG-",flex_but:"Affair_flex_but__1tMyX",btn_act:"Affair_btn_act__1RJXL",name:"Affair_name__hbukO",head:"Affair_head__1i0QB"}},function(e,a,t){e.exports={superInput:"SuperInputText_superInput__3gH-L",errorInput:"SuperInputText_errorInput__PsV7d",error:"SuperInputText_error__3fjSo"}},function(e,a,t){e.exports={default:"SuperButton_default__afy7m",red:"SuperButton_red__3T6vi",buttons:"SuperButton_buttons__1D4n8"}},function(e,a,t){e.exports={wrapper:"SuperRadio_wrapper__3qT1L",checkbox_inp:"SuperRadio_checkbox_inp__1eXwD",super_input:"SuperRadio_super_input__K1JDT"}},,function(e,a,t){e.exports={header:"Error404_header__1nN8w",text:"Error404_text__335ow"}},,,,function(e,a,t){e.exports={blue:"HW4_blue__x1gEn",column:"HW4_column__2Bx-c",title:"HW4_title__Pv0OO"}},function(e,a,t){e.exports={spanClassName:"SuperCheckbox_spanClassName__WeGx0",checkbox_inp:"SuperCheckbox_checkbox_inp__1u7np"}},function(e,a,t){e.exports={myBox:"SuperSelect_myBox__1MyIk",myArrow:"SuperSelect_myArrow__g_-dU"}},,,,function(e,a,t){e.exports={App:"App_App__L8ky3"}},function(e,a,t){e.exports=t.p+"static/media/img_er.353a8786.png"},,function(e,a,t){e.exports={title:"HW3_title__3tQ1m"}},function(e,a,t){e.exports={redit_span:"superEditableSpan_redit_span__3gDyz"}},function(e,a,t){e.exports=t(50)},,,,,function(e,a,t){},,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(33),c=t.n(l),o=(t(44),t(34)),u=t.n(o),i=t(9),s=t(10),m=t.n(s),d=t(2),_=t(24),p=t.n(_),E=t(35),f=t.n(E);var v=function(){return r.a.createElement("div",{className:p.a.header},r.a.createElement("div",null,r.a.createElement("img",{src:f.a,alt:"logo"})),r.a.createElement("div",{className:p.a.text},r.a.createElement("div",null,"404"),r.a.createElement("div",null,"Page not found!"),r.a.createElement("div",null,"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"),r.a.createElement("div",null,r.a.createElement(i.b,{to:"/"},"Return Home"))))},h=t(12),b=t.n(h);var g=function(e){var a=e.avatar,t=e.name,n=e.message,l=e.time;return r.a.createElement("div",{className:b.a.message},r.a.createElement("div",{className:b.a.chat,key:t},r.a.createElement("div",{className:b.a.icon},r.a.createElement("img",{src:a,alt:"icon"})),r.a.createElement("div",{className:b.a.header},r.a.createElement("ul",null,r.a.createElement("li",{className:b.a.name},t),r.a.createElement("li",null,l)),r.a.createElement("div",{className:b.a.textChat},n))))},C="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",k="Some Name",x="some text",N="22:00";var y=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1 should work (\u0434\u043e\u043b\u0436\u043d\u043e \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c)",r.a.createElement(g,{avatar:C,name:k,message:x,time:N}),r.a.createElement("hr",null),r.a.createElement("hr",null))},O=t(1),j=t(19),w=t.n(j);var S=function(e){var a=e.affair,t=e.deleteAffairCallback;return r.a.createElement("div",{className:w.a.head},r.a.createElement("span",{className:w.a.name},a.name),r.a.createElement("button",{className:w.a.buttons,onClick:function(){t(a._id)}},"X"))},A=t(8),T=t.n(A);var M=function(e){var a=e.data,t=e.setFilter,n=e.deleteAffairCallback,l=e.filter,c=a.map((function(e){return r.a.createElement(S,{key:e._id,affair:e,deleteAffairCallback:n})}));return r.a.createElement("div",null,c,r.a.createElement("div",{className:T.a.flex_but},r.a.createElement("button",{className:"".concat(T.a.buttons," ").concat("all"===l?T.a.btn_act:""),onClick:function(){t("all")}},"All"),r.a.createElement("button",{className:"".concat(T.a.buttons," ").concat("high"===l?T.a.btn_act:""),onClick:function(){t("high")}},"High"),r.a.createElement("button",{className:"".concat(T.a.buttons," ").concat("middle"===l?T.a.btn_act:""),onClick:function(){t("middle")}},"Middle"),r.a.createElement("button",{className:"".concat(T.a.buttons," ").concat("low"===l?T.a.btn_act:""),onClick:function(){t("low")}},"Low")))},H=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var I=function(){var e=Object(n.useState)(H),a=Object(O.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),o=Object(O.a)(c,2),u=o[0],i=o[1],s=function(e,a){switch(a){case"high":return e.filter((function(e){return"high"===e.priority}));case"middle":return e.filter((function(e){return"middle"===e.priority}));case"low":return e.filter((function(e){return"low"===e.priority}));default:return e}}(t,u);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(M,{data:s,setFilter:i,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))},filter:u}))},P=t(15),W=t(13),B=t.n(W),D=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,o=l?B.a.error:B.a.good;return r.a.createElement("div",null,r.a.createElement("div",{className:B.a.someClass},r.a.createElement("input",{value:a,onChange:t,className:o,title:"\u0420\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0440\u0443\u0441\u0441\u043a\u0438\u0435 \u0438 \u043b\u0430\u0442\u0438\u043d\u0441\u043a\u0438\u0435 \u0431\u0443\u043a\u0432\u044b",placeholder:"Name"}),r.a.createElement("button",{onClick:n,className:B.a.buttons},"ADD"),r.a.createElement("div",{className:B.a.total},r.a.createElement("span",null,c))),r.a.createElement("div",{className:B.a.errorWrap},r.a.createElement("span",null,l)))},F=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(O.a)(l,2),o=c[0],u=c[1],i=Object(n.useState)(null),s=Object(O.a)(i,2),m=s[0],d=s[1],_=a.length;return r.a.createElement(D,{name:o,setNameCallback:function(e){u(e.target.value.replace(/[^\D]+/g,"")),d(null)},addUser:function(){""===o.trim()?(d("You must enter a name"),u("")):(alert("Hello ".concat(o," !")),t(o.trim()),u(""))},error:m,totalUsers:_})},J=t(52),G=t(37),U=t.n(G),K=[];var R=function(){var e=Object(n.useState)(K),a=Object(O.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("div",{className:U.a.title},"Homeworks 3"),r.a.createElement(F,{users:t,addUserCallback:function(e){var a={_id:Object(J.a)(),name:e};l([a].concat(Object(P.a)(t))),console.log(K)}}))},L=t(4),X=t(20),Z=t.n(X),q=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,o=e.className,u=e.spanClassName,i=Object(L.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),s="".concat(Z.a.error," ").concat(u||""),m=c?"".concat(Z.a.errorInput," ").concat(o||""):"".concat(Z.a.superInput);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),"Enter"===e.key&&l&&l()},className:m,placeholder:"Name"},i)),c&&r.a.createElement("span",{className:s},c))},Q=t(28),Y=t.n(Q),z=t(21),V=t.n(z),$=function(e){var a=e.red,t=(e.className,Object(L.a)(e,["red","className"])),n="".concat(a?V.a.red:V.a.default," ").concat(V.a.buttons);return r.a.createElement("button",Object.assign({className:n},t))},ee=t(29),ae=t.n(ee),te=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(L.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),o="".concat(n||"");return r.a.createElement("label",{className:ae.a.checkbox_inp},r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){a&&a(e),t&&t(e.currentTarget.checked)},className:o},c)),l&&r.a.createElement("span",{className:ae.a.spanClassName},l))};var ne=function(){var e=Object(n.useState)(""),a=Object(O.a)(e,2),t=a[0],l=a[1],c=t?"":"error",o=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t)},u=Object(n.useState)(!1),i=Object(O.a)(u,2),s=i[0],m=i[1];return r.a.createElement("div",{className:Y.a.title},r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:Y.a.column},r.a.createElement(q,{value:t,onChangeText:l,onEnter:o,error:c}),r.a.createElement($,{red:!0,onClick:o},"delete "),r.a.createElement(te,{checked:s,onChangeChecked:m},"Check "),r.a.createElement(te,{checked:s,onChange:function(e){return m(e.currentTarget.checked)}},"Check")))},re=t(38),le=t.n(re),ce=function(e){e.autoFocus;var a=e.onBlur,t=e.onEnter,l=e.spanProps,c=Object(L.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),o=Object(n.useState)(!1),u=Object(O.a)(o,2),i=u[0],s=u[1],m=l||{},d=m.children,_=m.onDoubleClick,p=m.className,E=Object(L.a)(m,["children","onDoubleClick","className"]),f="".concat(le.a.redit_span," ").concat(p);return r.a.createElement(r.a.Fragment,null,i?r.a.createElement(q,Object.assign({autoFocus:!0,onBlur:function(e){s(!1),a&&a(e)},onEnter:function(){s(!1),t&&t()}},c)):r.a.createElement("span",Object.assign({onDoubleClick:function(e){s(!0),_&&_(e)},className:f},E),d||c.value))};function oe(e,a){var t=JSON.stringify(a);localStorage.setItem(e,t)}function ue(e,a){var t=localStorage.getItem(e);return null!==t&&(a=JSON.parse(t)),a}oe("test",{x:"A",y:1});ue("test",{x:"",y:0});var ie=function(){var e=Object(n.useState)(""),a=Object(O.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 6",r.a.createElement("div",null,r.a.createElement(ce,{value:t,onChangeText:l,spanProps:{children:t?void 0:"Enter text..."}})),r.a.createElement($,{onClick:function(){oe("editable-span-value",t)}},"save"),r.a.createElement($,{onClick:function(){l(ue("editable-span-value",t))}},"restore"),r.a.createElement("hr",null),r.a.createElement("hr",null))},se=t(30),me=t.n(se),de=function(e){var a=e.options,t=e.onChange,n=e.onChangeOption,l=Object(L.a)(e,["options","onChange","onChangeOption"]),c=a?a.map((function(e){return r.a.createElement("option",{key:e,value:e},e)})):[];return r.a.createElement("div",{className:me.a.myBox},r.a.createElement("span",{className:me.a.myArrow}),r.a.createElement("select",Object.assign({onChange:function(e){n&&n(e.target.value),t&&t(e)}},l),c))},_e=t(22),pe=t.n(_e),Ee=function(e){e.type;var a=e.name,t=e.options,n=e.value,l=e.onChange,c=e.onChangeOption,o=(Object(L.a)(e,["type","name","options","value","onChange","onChangeOption"]),function(e){c&&c(e.target.value),l&&l(e)}),u=t?t.map((function(e,t){return r.a.createElement("div",{className:pe.a.wrapper,key:a+"-"+t},r.a.createElement("label",{className:e===n?pe.a.super_input:pe.a.checkbox_inp},r.a.createElement("input",{type:a,onChange:o,value:e,checked:e===n,name:"name"}),e))})):[];return r.a.createElement(r.a.Fragment,null,u)},fe=["x","y","z"];var ve=function(){var e=Object(n.useState)(fe[1]),a=Object(O.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 7",r.a.createElement("div",null,r.a.createElement(de,{options:fe,value:t,onChangeOption:l})),r.a.createElement("div",null,r.a.createElement(Ee,{name:"radio",options:fe,value:t,onChangeOption:l})),r.a.createElement("hr",null),r.a.createElement("hr",null))},he=function(e,a){switch(a.type){case"sort":return be(e,a.payload);case"check":return ge(e,a.payload);default:return e}},be=function(e,a){return"up"===a?Object(P.a)(e.sort((function(e,a){return e.name<a.name?-1:1}))):"down"===a?Object(P.a)(e.sort((function(e,a){return e.name>a.name?-1:1}))):void 0},ge=function(e,a){if(18===a)return Object(P.a)(e.filter((function(e){return e.age>=18})))},Ce=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var ke=function(){var e=Object(n.useState)(Ce),a=Object(O.a)(e,2),t=a[0],l=a[1],c=t.map((function(e){return r.a.createElement("div",{key:e._id},e.name,", ",e.age)}));return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 8",c,r.a.createElement("div",null,r.a.createElement($,{onClick:function(){return l(he(Ce,{type:"sort",payload:"up"}))}},"sort up")),r.a.createElement("div",null,r.a.createElement($,{onClick:function(){return l(he(Ce,{type:"sort",payload:"down"}))}},"sort down")),r.a.createElement("div",null,r.a.createElement($,{onClick:function(){return l(he(Ce,{type:"check",payload:18}))}},"check 18")),r.a.createElement("hr",null),r.a.createElement("hr",null))},xe=t(14),Ne=t.n(xe);var ye=function(){var e=Object(n.useState)(0),a=Object(O.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(),o=Object(O.a)(c,2),u=o[0],i=o[1],s=Object(n.useState)(!1),m=Object(O.a)(s,2),d=m[0],_=m[1],p=Object(n.useState)(!1),E=Object(O.a)(p,2),f=E[0],v=E[1],h=function(){clearInterval(t)},b=function(e){return e<10?"0"+e:e},g=b(null===u||void 0===u?void 0:u.getHours()),C=b(null===u||void 0===u?void 0:u.getMinutes()),k=b(null===u||void 0===u?void 0:u.getSeconds()),x=null===u||void 0===u?void 0:u.getDay(),N=null===u||void 0===u?void 0:u.getFullYear(),y=b(null===u||void 0===u?void 0:u.getMonth()),j=null===u||void 0===u?void 0:u.getDate();(null===u||void 0===u?void 0:u.getMonth())&&(y+=1),console.log(N),console.log(j);var w="".concat(g,":").concat(C,":").concat(k),S=" ".concat(N,"-").concat(y,"-").concat(j," : ").concat(["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][x]);console.log(w);var A="".concat(Ne.a.wrapper,"  ").concat(d?Ne.a.displayOn:Ne.a.displayOff);return r.a.createElement("div",null,r.a.createElement("div",{className:A,onMouseEnter:function(){v(!0)},onMouseLeave:function(){v(!1)}},r.a.createElement("div",{className:Ne.a.clock},d&&r.a.createElement("div",{className:Ne.a.time},w),f&&r.a.createElement("div",{className:Ne.a.date},S))),r.a.createElement($,{onClick:function(){h();var e=window.setInterval((function(){var e=new Date;i(e),_(!0)}),1e3);l(e)}},"start"),r.a.createElement($,{onClick:h},"stop"))};var Oe=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 9",r.a.createElement(ye,null),r.a.createElement("hr",null),r.a.createElement("hr",null))};var je=function(){return r.a.createElement("div",null,r.a.createElement(y,null),r.a.createElement(I,null),r.a.createElement(R,null),r.a.createElement(ne,null),r.a.createElement(ie,null),r.a.createElement(ve,null),r.a.createElement(ke,null),r.a.createElement(Oe,null))};var we=function(){return r.a.createElement("div",null,"Junior")};var Se=function(){return r.a.createElement("div",null,"JuniorPlus")},Ae="/pre-junior",Te="/junior",Me="/junior_plus";var He=function(){return r.a.createElement("div",null,r.a.createElement(d.d,null,r.a.createElement(d.b,{path:"/",exact:!0,render:function(){return r.a.createElement(d.a,{to:Ae})}}),r.a.createElement(d.b,{path:Ae,render:function(){return r.a.createElement(je,null)}}),r.a.createElement(d.b,{path:Te,render:function(){return r.a.createElement(we,null)}}),r.a.createElement(d.b,{path:Me,render:function(){return r.a.createElement(Se,null)}}),r.a.createElement(d.b,{render:function(){return r.a.createElement(v,null)}})))};var Ie=function(){return r.a.createElement("div",{className:m.a.dropbox_head},r.a.createElement("div",{className:m.a.dropbox}," ",r.a.createElement("span",{className:m.a.dropbox_btn},"Menu"),r.a.createElement("nav",{className:m.a.dropbox_list},r.a.createElement(i.c,{exact:!0,to:Ae,activeClassName:m.a.active},"Pre-junior"),r.a.createElement(i.c,{to:Te,activeClassName:m.a.active},"Junior"),r.a.createElement(i.c,{to:Me,activeClassName:m.a.active},"JuniorPlus"))))};var Pe=function(){return r.a.createElement("div",null,r.a.createElement(i.a,null,r.a.createElement(Ie,null),r.a.createElement(He,null)))};var We=function(){return r.a.createElement("div",{className:u.a.App},r.a.createElement("div",null,"React homeworks:"),r.a.createElement(Pe,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(We,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[39,1,2]]]);
//# sourceMappingURL=main.f30f77a5.chunk.js.map
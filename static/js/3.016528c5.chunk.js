(this.webpackJsonpshopify_challenge=this.webpackJsonpshopify_challenge||[]).push([[3],{176:function(e,n,a){e.exports={icons:"GradientButton_icons__38WAV",orange:"GradientButton_orange__3MH0l",purple:"GradientButton_purple__PfJb5",green:"GradientButton_green__2MpUf"}},177:function(e,n,a){e.exports={Input:"Input_Input__1FwTG",Label:"Input_Label__vUBXH",InputElement:"Input_InputElement__32tFP",Invalid:"Input_Invalid__25a9-",Message:"Input_Message__32lBN"}},178:function(e,n,a){e.exports={container:"Auth_container__12o6L",Auth:"Auth_Auth__bIVYM"}},179:function(e,n,a){"use strict";a.r(n);var t=a(0),i=a(3),l=a(19),c=a(1),r=a(176),o=a.n(r),u=function(e){return Object(t.jsx)("div",{className:[o.a.icons,o.a[e.color]].join(" "),onClick:e.clicked,disabled:e.disabled,children:Object(t.jsx)("a",{children:Object(t.jsx)("div",{children:e.children})})})},s=a(177),d=a.n(s),h=function(e){var n=null,a=null,l=[d.a.InputElement];switch(e.invalid&&e.shouldValidate&&e.touched&&(l.push(d.a.Invalid),a=Object(t.jsxs)("p",{className:d.a.Message,children:["*please enter a valid ",e.field," "]})),e.elementType){case"input":n=Object(t.jsx)("input",Object(i.a)(Object(i.a)({className:l.join(" ")},e.elementConfig),{},{value:e.value,onChange:e.changed}));break;case"textarea":n=Object(t.jsx)("textarea",Object(i.a)(Object(i.a)({className:l.join(" ")},e.elementConfig),{},{value:e.value,onChange:e.changed}));break;case"select":n=Object(t.jsx)("select",{className:l.join(" "),value:e.value,onChange:e.changed,children:e.elementConfig.options.map((function(e){return Object(t.jsx)("option",{value:e.value,children:e.displayValue},e.value)}))});break;default:n=Object(t.jsx)("input",Object(i.a)(Object(i.a)({className:l.join(" ")},e.elementConfig),{},{value:e.value,onChange:e.changed}))}return Object(t.jsxs)("div",{className:d.a.Input,children:[Object(t.jsx)("label",{className:d.a.Label,children:e.label}),n,a]})},j=a(178),p=a.n(j),b=a(14),m=a(68),g=a(6),v=a(4);n.default=Object(g.b)((function(e){return{loading:e.auth.loading,error:e.auth.error,isAuth:null!==e.auth.token}}),(function(e){return{onAuth:function(n,a,t){return e(b.a(n,a,t))}}}))((function(e){var n=Object(c.useState)({email:{elementType:"input",elementConfig:{type:"text",placeholder:"Your Email"},value:"",validation:{required:!0,isEmail:!0},valid:!1,touched:!1,element_name:"email"},password:{elementType:"input",elementConfig:{type:"password",placeholder:"Your Password"},value:"",validation:{required:!0,minLength:6},valid:!1,touched:!1,element_name:"password"}}),a=Object(l.a)(n,2),r=a[0],o=a[1],s=Object(c.useState)(!1),d=Object(l.a)(s,2),j=d[0],b=d[1],g=Object(c.useState)(!0),f=Object(l.a)(g,2),_=f[0],O=f[1],x=[];for(var I in r)x.push({id:I,config:r[I]});var A=x.map((function(e){return Object(t.jsx)(h,{elementType:e.config.elementType,elementConfig:e.config.elementConfig,value:e.config.value,invalid:!e.config.valid,shouldValidate:e.config.validation,touched:e.config.touched,changed:function(n){return function(e,n){var a=Object(i.a)({},r),t=Object(i.a)({},a[n]);t.value=e.target.value,t.valid=function(e,n){var a=!0;return!n||(n.required&&(a=""!==e.trim()&&a),n.minLength&&(a=e.length>=n.minLength&&a),n.maxLength&&(a=e.length<=n.maxLength&&a),n.isEmail&&(a=/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(e)&&a),n.isNumeric&&(a=/^\d+$/.test(e)&&a),a)}(t.value,t.validation),t.touched=!0,a[n]=t;var l=!0;for(var c in a)l=a[c].valid&&l;o(a),b(l)}(n,e.id)},field:e.config.element_name},e.id)}));e.loading&&(A=Object(t.jsx)(m.a,{}));var w=null;e.error&&(w="EMAIL_EXISTS"===e.error.message?Object(t.jsx)("h4",{children:"Sorry you can't signup with this E-mail, it's already taken!"}):"INVALID_PASSWORD"===e.error.message?Object(t.jsx)("h4",{children:"Wrong password!"}):Object(t.jsx)("h4",{children:e.error.message}));var y=null;return e.isAuth&&(y=Object(t.jsx)(v.a,{to:"/"})),Object(t.jsx)("div",{className:p.a.container,children:e.loading?Object(t.jsx)(m.a,{}):Object(t.jsxs)("div",{className:p.a.Auth,children:[w,Object(t.jsxs)("form",{onSubmit:function(n){n.preventDefault(),e.onAuth(r.email.value,r.password.value,_)},id:"form",children:[A,Object(t.jsx)(u,{disabled:!j,clicked:function(){e.onAuth(r.email.value,r.password.value,_)},color:"orange",children:"Submit"})]}),Object(t.jsxs)(u,{clicked:function(){O(!_)},color:_?"green":"purple",children:["Switch to ",_?"Sign In":"Sign Up"]}),y]})})}))}}]);
//# sourceMappingURL=3.016528c5.chunk.js.map
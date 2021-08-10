(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{67:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(21),r=n(7),s=n(6),o=n(5),i=n(0),u=function(){return Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{class:"jumbotron mt-5",children:[Object(i.jsx)("h1",{class:"display-4",children:"Welcome to Auth System!"}),Object(i.jsx)("p",{class:"lead",children:"This is an incredible authentication system with production level features!"}),Object(i.jsx)("hr",{class:"my-4"}),Object(i.jsx)("p",{children:"Click the Log In button"}),Object(i.jsx)(s.b,{class:"btn btn-primary btn-lg",to:"/login",role:"button",children:"Login"})]})})},l=n(2),p=n.n(l),b=n(8),j=n(16),d=n(4),h=n(10),m=n(9),O=n.n(m),f="LOGIN_SUCCESS",x="LOGIN_FAIL",v="SIGNUP_SUCCESS",g="SIGNUP_FAIL",y="ACTIVATION_SUCCESS",w="ACTIVATION_FAIL",S="USER_LOADED_SUCCESS",N="USER_LOADED_FAIL",_="AUTHENTICATED_SUCCESS",k="AUTHENTICATED_FAIL",C="PASSWORD_RESET_FAIL",A="PASSWORD_RESET_SUCCESS",I="PASSWORD_RESET_CONFIRM_FAIL",T="PASSWORD_RESET_CONFIRM_SUCCESS",E="GOOGLE_AUTH_SUCCESS",L="GOOGLE_AUTH_FAIL",U="FACEBOOK_AUTH_SUCCESS",R="FACEBOOK_AUTH_FAIL",F="LOGOUT",D=function(){return function(){var e=Object(b.a)(p.a.mark((function e(t){var n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem("access")){e.next=14;break}return n={headers:{"Content-Type":"application/json",Authorization:"JWT ".concat(localStorage.getItem("access")),Accept:"application/json"}},e.prev=2,e.next=5,O.a.get("".concat("http://127.0.0.1:8000","/auth/users/me/"),n);case 5:a=e.sent,t({type:S,payload:a.data}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),t({type:N});case 12:e.next=15;break;case 14:t({type:N});case 15:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}()},P=Object(r.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{login:function(e,t){return function(){var n=Object(b.a)(p.a.mark((function n(a){var c,r,s;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c={headers:{"Content-Type":"application/json"}},r=JSON.stringify({email:e,password:t}),n.prev=2,n.next=5,O.a.post("".concat("http://127.0.0.1:8000","/auth/jwt/create/"),r,c);case 5:s=n.sent,a({type:f,payload:s.data}),a(D()),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(2),a({type:x});case 13:case"end":return n.stop()}}),n,null,[[2,10]])})));return function(e){return n.apply(this,arguments)}}()}})((function(e){var t=e.login,n=e.isAuthenticated,c=Object(a.useState)({email:"",password:""}),r=Object(h.a)(c,2),u=r[0],l=r[1],m=u.email,f=u.password,x=function(e){return l(Object(d.a)(Object(d.a)({},u),{},Object(j.a)({},e.target.name,e.target.value)))},v=function(){var e=Object(b.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("".concat("http://127.0.0.1:8000","/auth/o/google-oauth2/?redirect_uri=").concat("http://127.0.0.1:8000","/google"));case 3:t=e.sent,window.location.replace(t.data.authorization_url),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(b.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("".concat("http://127.0.0.1:8000","/auth/o/facebook/?redirect_uri=").concat("http://127.0.0.1:8000","/facebook"));case 3:t=e.sent,window.location.replace(t.data.authorization_url),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return n?Object(i.jsx)(o.a,{to:"/"}):Object(i.jsxs)("div",{className:"container mt-5",children:[Object(i.jsx)("h1",{children:"Sign In"}),Object(i.jsx)("p",{children:"Sign into your Account Test"}),Object(i.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),t(m,f)}(e)},children:[Object(i.jsx)("div",{className:"form-group",children:Object(i.jsx)("input",{className:"form-control",type:"email",placeholder:"Email",name:"email",value:m,onChange:function(e){return x(e)},required:!0})}),Object(i.jsx)("div",{className:"form-group",children:Object(i.jsx)("input",{className:"form-control",type:"password",placeholder:"Password",name:"password",value:f,onChange:function(e){return x(e)},minLength:"6",required:!0})}),Object(i.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Login"})]}),Object(i.jsx)("button",{className:"btn btn-danger mt-3",onClick:v,children:"Continue With Google"}),Object(i.jsx)("br",{}),Object(i.jsx)("button",{className:"btn btn-primary mt-3",onClick:g,children:"Continue With Facebook"}),Object(i.jsxs)("p",{className:"mt-3",children:["Don't have an account? ",Object(i.jsx)(s.b,{to:"/signup",children:"Sign Up"})]}),Object(i.jsxs)("p",{className:"mt-3",children:["Forgot your Password? ",Object(i.jsx)(s.b,{to:"/reset-password",children:"Reset Password"})]})]})})),W=Object(r.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{signup:function(e,t,n,a,c){return function(){var r=Object(b.a)(p.a.mark((function r(s){var o,i,u;return p.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o={headers:{"Content-Type":"application/json"}},i=JSON.stringify({first_name:e,last_name:t,email:n,password:a,re_password:c}),r.prev=2,r.next=5,O.a.post("".concat("http://127.0.0.1:8000","/auth/users/"),i,o);case 5:u=r.sent,s({type:v,payload:u.data}),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(2),s({type:g});case 12:case"end":return r.stop()}}),r,null,[[2,9]])})));return function(e){return r.apply(this,arguments)}}()}})((function(e){var t=e.signup,n=e.isAuthenticated,c=Object(a.useState)(!1),r=Object(h.a)(c,2),u=r[0],l=r[1],m=Object(a.useState)({first_name:"",last_name:"",email:"",password:"",re_password:""}),f=Object(h.a)(m,2),x=f[0],v=f[1],g=x.first_name,y=x.last_name,w=x.email,S=x.password,N=x.re_password,_=function(e){return v(Object(d.a)(Object(d.a)({},x),{},Object(j.a)({},e.target.name,e.target.value)))},k=function(){var e=Object(b.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("".concat("http://127.0.0.1:8000","/auth/o/google-oauth2/?redirect_uri=").concat("http://127.0.0.1:8000","/google"));case 3:t=e.sent,window.location.replace(t.data.authorization_url),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(b.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("".concat("http://127.0.0.1:8000","/auth/o/facebook/?redirect_uri=").concat("http://127.0.0.1:8000","/facebook"));case 3:t=e.sent,window.location.replace(t.data.authorization_url),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return n?Object(i.jsx)(o.a,{to:"/"}):u?Object(i.jsx)(o.a,{to:"/login"}):Object(i.jsxs)("div",{className:"container mt-5",children:[Object(i.jsx)("h1",{children:"Sign Up"}),Object(i.jsx)("p",{children:"Create your Account"}),Object(i.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),S===N&&(t(g,y,w,S,N),l(!0))}(e)},children:[Object(i.jsx)("div",{className:"form-group",children:Object(i.jsx)("input",{className:"form-control",type:"text",placeholder:"First Name*",name:"first_name",value:g,onChange:function(e){return _(e)},required:!0})}),Object(i.jsx)("div",{className:"form-group",children:Object(i.jsx)("input",{className:"form-control",type:"text",placeholder:"Last Name*",name:"last_name",value:y,onChange:function(e){return _(e)},required:!0})}),Object(i.jsx)("div",{className:"form-group",children:Object(i.jsx)("input",{className:"form-control",type:"email",placeholder:"Email*",name:"email",value:w,onChange:function(e){return _(e)},required:!0})}),Object(i.jsx)("div",{className:"form-group",children:Object(i.jsx)("input",{className:"form-control",type:"password",placeholder:"Password*",name:"password",value:S,onChange:function(e){return _(e)},minLength:"6",required:!0})}),Object(i.jsx)("div",{className:"form-group",children:Object(i.jsx)("input",{className:"form-control",type:"password",placeholder:"Confirm Password*",name:"re_password",value:N,onChange:function(e){return _(e)},minLength:"6",required:!0})}),Object(i.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Register"})]}),Object(i.jsx)("button",{className:"btn btn-danger mt-3",onClick:k,children:"Continue With Google"}),Object(i.jsx)("br",{}),Object(i.jsx)("button",{className:"btn btn-primary mt-3",onClick:C,children:"Continue With Facebook"}),Object(i.jsxs)("p",{className:"mt-3",children:["Already have an account? ",Object(i.jsx)(s.b,{to:"/login",children:"Sign In"})]})]})})),G=Object(r.b)(null,{verify:function(e,t){return function(){var n=Object(b.a)(p.a.mark((function n(a){var c,r;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c={headers:{"Content-Type":"application/json"}},r=JSON.stringify({uid:e,token:t}),n.prev=2,n.next=5,O.a.post("".concat("http://127.0.0.1:8000","/auth/users/activation/"),r,c);case 5:a({type:y}),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(2),a({type:w});case 11:case"end":return n.stop()}}),n,null,[[2,8]])})));return function(e){return n.apply(this,arguments)}}()}})((function(e){var t=e.verify,n=e.match,c=Object(a.useState)(!1),r=Object(h.a)(c,2),s=r[0],u=r[1];return s?Object(i.jsx)(o.a,{to:"/"}):Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"d-flex flex-column justify-content-center align-items-center",style:{marginTop:"200px"},children:[Object(i.jsx)("h1",{children:"Verify your Account:"}),Object(i.jsx)("button",{onClick:function(e){var a=n.params.uid,c=n.params.token;t(a,c),u(!0)},style:{marginTop:"50px"},type:"button",className:"btn btn-primary",children:"Verify"})]})})})),q=Object(r.b)(null,{reset_password:function(e){return function(){var t=Object(b.a)(p.a.mark((function t(n){var a,c;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={headers:{"Content-Type":"application/json"}},c=JSON.stringify({email:e}),t.prev=2,t.next=5,O.a.post("".concat("http://127.0.0.1:8000","/auth/users/reset_password/"),c,a);case 5:n({type:A}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(2),n({type:C});case 11:case"end":return t.stop()}}),t,null,[[2,8]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.reset_password,n=Object(a.useState)(!1),c=Object(h.a)(n,2),r=c[0],s=c[1],u=Object(a.useState)({email:""}),l=Object(h.a)(u,2),p=l[0],b=l[1],m=p.email;return r?Object(i.jsx)(o.a,{to:"/"}):Object(i.jsxs)("div",{className:"container mt-5",children:[Object(i.jsx)("h1",{children:"Password Reset:"}),Object(i.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),t(m),s(!0)}(e)},children:[Object(i.jsx)("div",{className:"form-group",children:Object(i.jsx)("input",{className:"form-control",type:"email",placeholder:"Email",name:"email",value:m,onChange:function(e){return function(e){return b(Object(d.a)(Object(d.a)({},p),{},Object(j.a)({},e.target.name,e.target.value)))}(e)},required:!0})}),Object(i.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Reset Password"})]})]})})),J=Object(r.b)(null,{reset_password_confirm:function(e,t,n,a){return function(){var c=Object(b.a)(p.a.mark((function c(r){var s,o;return p.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return s={headers:{"Content-Type":"application/json"}},o=JSON.stringify({uid:e,token:t,new_password:n,re_new_password:a}),c.prev=2,c.next=5,O.a.post("".concat("http://127.0.0.1:8000","/auth/users/reset_password_confirm/"),o,s);case 5:r({type:T}),c.next=11;break;case 8:c.prev=8,c.t0=c.catch(2),r({type:I});case 11:case"end":return c.stop()}}),c,null,[[2,8]])})));return function(e){return c.apply(this,arguments)}}()}})((function(e){var t=e.match,n=e.reset_password_confirm,c=Object(a.useState)(!1),r=Object(h.a)(c,2),s=r[0],u=r[1],l=Object(a.useState)({new_password:"",re_new_password:""}),p=Object(h.a)(l,2),b=p[0],m=p[1],O=b.new_password,f=b.re_new_password,x=function(e){return m(Object(d.a)(Object(d.a)({},b),{},Object(j.a)({},e.target.name,e.target.value)))};return s?Object(i.jsx)(o.a,{to:"/"}):Object(i.jsx)("div",{className:"container mt-5",children:Object(i.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault();var a=t.params.uid,c=t.params.token;n(a,c,O,f),u(!0)}(e)},children:[Object(i.jsx)("div",{className:"form-group",children:Object(i.jsx)("input",{className:"form-control",type:"password",placeholder:"New Password",name:"new_password",value:O,onChange:function(e){return x(e)},minLength:"6",required:!0})}),Object(i.jsx)("div",{className:"form-group",children:Object(i.jsx)("input",{className:"form-control",type:"password",placeholder:"Confirm New Password",name:"re_new_password",value:f,onChange:function(e){return x(e)},minLength:"6",required:!0})}),Object(i.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Reset Password"})]})})})),H=n(23),z=n.n(H),V=Object(r.b)(null,{facebookAuthenticate:function(e,t){return function(){var n=Object(b.a)(p.a.mark((function n(a){var c,r,s,o;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e||!t||localStorage.getItem("access")){n.next=15;break}return c={headers:{"Content-Type":"application/x-www-form-urlencoded"}},r={state:e,code:t},s=Object.keys(r).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(r[e])})).join("&"),n.prev=4,n.next=7,O.a.post("".concat("http://127.0.0.1:8000","/auth/o/facebook/?").concat(s),c);case 7:o=n.sent,a({type:U,payload:o.data}),a(D()),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(4),a({type:R});case 15:case"end":return n.stop()}}),n,null,[[4,12]])})));return function(e){return n.apply(this,arguments)}}()}})((function(e){var t=e.facebookAuthenticate,n=Object(o.g)();return Object(a.useEffect)((function(){var e=z.a.parse(n.search),a=e.state?e.state:null,c=e.code?e.code:null;console.log("State: "+a),console.log("Code: "+c),a&&c&&t(a,c)}),[n]),Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{class:"jumbotron mt-5",children:[Object(i.jsx)("h1",{class:"display-4",children:"Welcome to Auth System!"}),Object(i.jsx)("p",{class:"lead",children:"This is an incredible authentication system with production level features!"}),Object(i.jsx)("hr",{class:"my-4"}),Object(i.jsx)("p",{children:"Click the Log In button"}),Object(i.jsx)(s.b,{class:"btn btn-primary btn-lg",to:"/login",role:"button",children:"Login"})]})})})),B=Object(r.b)(null,{googleAuthenticate:function(e,t){return function(){var n=Object(b.a)(p.a.mark((function n(a){var c,r,s,o;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e||!t||localStorage.getItem("access")){n.next=15;break}return c={headers:{"Content-Type":"application/x-www-form-urlencoded"}},r={state:e,code:t},s=Object.keys(r).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(r[e])})).join("&"),n.prev=4,n.next=7,O.a.post("".concat("http://127.0.0.1:8000","/auth/o/google-oauth2/?").concat(s),c);case 7:o=n.sent,a({type:E,payload:o.data}),a(D()),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(4),a({type:L});case 15:case"end":return n.stop()}}),n,null,[[4,12]])})));return function(e){return n.apply(this,arguments)}}()}})((function(e){var t=e.googleAuthenticate,n=Object(o.g)();return Object(a.useEffect)((function(){var e=z.a.parse(n.search),a=e.state?e.state:null,c=e.code?e.code:null;console.log("State: "+a),console.log("Code: "+c),a&&c&&t(a,c)}),[n]),Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{class:"jumbotron mt-5",children:[Object(i.jsx)("h1",{class:"display-4",children:"Welcome to Auth System!"}),Object(i.jsx)("p",{class:"lead",children:"This is an incredible authentication system with production level features!"}),Object(i.jsx)("hr",{class:"my-4"}),Object(i.jsx)("p",{children:"Click the Log In button"}),Object(i.jsx)(s.b,{class:"btn btn-primary btn-lg",to:"/login",role:"button",children:"Login"})]})})})),M=Object(r.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{logout:function(){return function(e){e({type:F})}}})((function(e){var t=e.logout,n=e.isAuthenticated,c=Object(a.useState)(!1),r=Object(h.a)(c,2),u=r[0],l=r[1],p=function(){t(),l(!0)};return Object(i.jsxs)(a.Fragment,{children:[Object(i.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(i.jsx)(s.b,{className:"navbar-brand",to:"/",children:"Auth System"}),Object(i.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(i.jsx)("span",{className:"navbar-toggler-icon"})}),Object(i.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(i.jsxs)("ul",{className:"navbar-nav",children:[Object(i.jsx)("li",{className:"nav-item active",children:Object(i.jsxs)(s.b,{className:"nav-link",to:"/",children:["Home ",Object(i.jsx)("span",{className:"sr-only",children:"(current)"})]})}),n?Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)("a",{className:"nav-link",href:"#!",onClick:p,children:"Logout"})}):Object(i.jsxs)(a.Fragment,{children:[Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(s.b,{className:"nav-link",to:"/login",children:"Login"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(s.b,{className:"nav-link",to:"/signup",children:"Sign Up"})})]})]})})]}),u?Object(i.jsx)(o.a,{to:"/"}):Object(i.jsx)(a.Fragment,{})]})})),K=Object(r.b)(null,{checkAuthenticated:function(){return function(){var e=Object(b.a)(p.a.mark((function e(t){var n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem("access")){e.next=15;break}return n={headers:{"Content-Type":"application/json",Accept:"application/json"}},a=JSON.stringify({token:localStorage.getItem("access")}),e.prev=3,e.next=6,O.a.post("".concat("http://127.0.0.1:8000","/auth/jwt/verify/"),a,n);case 6:"token_not_valid"!==e.sent.data.code?t({type:_}):t({type:k}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),t({type:k});case 13:e.next=16;break;case 15:t({type:k});case 16:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t){return e.apply(this,arguments)}}()},load_user:D})((function(e){var t=e.checkAuthenticated,n=e.load_user,c=e.children;return Object(a.useEffect)((function(){t(),n()}),[]),Object(i.jsxs)("div",{children:[Object(i.jsx)(M,{}),c]})})),Q=function(){return Object(i.jsx)(s.a,{children:Object(i.jsx)(K,{children:Object(i.jsxs)(o.d,{children:[Object(i.jsx)(o.b,{exact:!0,path:"/",component:u}),Object(i.jsx)(o.b,{exact:!0,path:"/login",component:P}),Object(i.jsx)(o.b,{exact:!0,path:"/signup",component:W}),Object(i.jsx)(o.b,{exact:!0,path:"/facebook",component:V}),Object(i.jsx)(o.b,{exact:!0,path:"/google",component:B}),Object(i.jsx)(o.b,{exact:!0,path:"/reset-password",component:q}),Object(i.jsx)(o.b,{exact:!0,path:"/password/reset/confirm/:uid/:token",component:J}),Object(i.jsx)(o.b,{exact:!0,path:"/activate/:uid/:token",component:G})]})})})},X=n(18),Y=n(35),Z=n(36),$={access:localStorage.getItem("access"),refresh:localStorage.getItem("refresh"),isAuthenticated:null,user:null},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case _:return Object(d.a)(Object(d.a)({},e),{},{isAuthenticated:!0});case f:case E:case U:return localStorage.setItem("access",a.access),localStorage.setItem("refresh",a.refresh),Object(d.a)(Object(d.a)({},e),{},{isAuthenticated:!0,access:a.access,refresh:a.refresh});case v:return Object(d.a)(Object(d.a)({},e),{},{isAuthenticated:!1});case S:return Object(d.a)(Object(d.a)({},e),{},{user:a});case k:return Object(d.a)(Object(d.a)({},e),{},{isAuthenticated:!1});case N:return Object(d.a)(Object(d.a)({},e),{},{user:null});case L:case R:case x:case g:case F:return localStorage.removeItem("access"),localStorage.removeItem("refresh"),Object(d.a)(Object(d.a)({},e),{},{access:null,refresh:null,isAuthenticated:!1,user:null});case A:case C:case T:case I:case y:case w:return Object(d.a)({},e);default:return e}},te=Object(X.combineReducers)({auth:ee}),ne=[Y.a],ae=Object(X.createStore)(te,{},Object(Z.composeWithDevTools)(X.applyMiddleware.apply(void 0,ne)));Object(c.render)(Object(i.jsx)(r.a,{store:ae,children:Object(i.jsx)(Q,{})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.d9388ec4.chunk.js.map
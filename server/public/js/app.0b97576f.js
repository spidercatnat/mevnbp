(function(e){function t(t){for(var a,i,o=t[0],c=t[1],u=t[2],p=0,v=[];p<o.length;p++)i=o[p],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&v.push(s[i][0]),s[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);l&&l(t);while(v.length)v.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,o=1;o<n.length;o++){var c=n[o];0!==s[c]&&(a=!1)}a&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},s={app:0},r=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var l=c;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"09e0":function(e,t,n){},2513:function(e,t,n){},"285b":function(e,t,n){},"2b56":function(e,t,n){"use strict";var a=n("09e0"),s=n.n(a);s.a},"45a6":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("TheNavBar"),n("router-view")],1)},r=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{staticClass:"navbar is-fixed-top",staticStyle:{outline:"none"},attrs:{tabindex:"0",role:"navigation","aria-label":"main navigation"},on:{blur:e.toggleMenu}},[n("div",{staticClass:"navbar-brand"},[n("router-link",{staticClass:"navbar-item",attrs:{to:"/"}},[n("img",{staticStyle:{height:"30px"},attrs:{src:"https://www.svgrepo.com/show/300753/barber-shop.svg"}}),e._v(" BarberZen ")]),n("a",{staticClass:"navbar-burger burger",attrs:{role:"button","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"},on:{click:e.toggleMenu}},[n("span",{attrs:{"aria-hidden":"true"}}),n("span",{attrs:{"aria-hidden":"true"}}),n("span",{attrs:{"aria-hidden":"true"}})])],1),n("div",{staticClass:"navbar-menu",class:{"is-active":e.isActive},attrs:{id:"navbarBasicExample"}},[n("div",{staticClass:"navbar-start"},[n("div",{staticClass:"navbar-item"},[n("div",{staticClass:"buttons"},[n("router-link",{staticClass:"button is-small is-inverted is-primary ripple",attrs:{to:"schedule"}},[n("strong",[e._v("Book Now")])])],1)])]),n("div",{staticClass:"navbar-end"},[this["user/authStatus"]?n("div",{staticClass:"navbar-item"},[n("router-link",{attrs:{to:"dashboard"}},[n("small",[e._v("Hi, "+e._s(this["user/userInfo"].name.split(" ")[0])+"!")])])],1):e._e(),n("div",{staticClass:"navbar-item"},[n("div",{staticClass:"buttons"},[this["user/authStatus"]?e._e():n("router-link",{staticClass:"button is-primary",attrs:{to:"/register"}},[n("strong",[e._v("Sign up")])]),this["user/authStatus"]?n("a",{staticClass:"button is-light",attrs:{to:"/login"},on:{click:e.logout}},[e._v("Logout")]):n("router-link",{staticClass:"button is-light",attrs:{to:"/login"}},[e._v(" Log in ")])],1)])])])])},o=[],c=(n("96cf"),n("1da1")),u=n("5530"),l=n("2f62"),p={name:"TheNavBar",data:function(){return{isActive:!1,loggedIn:!1}},computed:Object(u["a"])({},Object(l["c"])(["user/userInfo"]),{},Object(l["c"])(["user/authStatus"])),created:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e["user/auth"]();case 2:case"end":return t.stop()}}),t)})))()},methods:Object(u["a"])({},Object(l["b"])(["user/auth"]),{toggleMenu:function(){var e=this;setTimeout((function(){e.isActive=!e.isActive}),100)},logout:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("user/logout");case 2:return t.next=4,e.$router.push("/");case 4:e.toggleMenu();case 5:case"end":return t.stop()}}),t)})))()}})},v=p,m=(n("e974"),n("2877")),d=Object(m["a"])(v,i,o,!1,null,"d23b640a",null),f=d.exports,h={name:"App",components:{TheNavBar:f}},g=h,b=Object(m["a"])(g,s,r,!1,null,null,null),_=b.exports,w=(n("caad"),n("2532"),n("8c4f")),C=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},x=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[n("section",{staticClass:"section"},[n("div",{staticClass:"container"},[e._v(" Home Page ")])])])}],k={name:"Home"},y=k,O=Object(m["a"])(y,C,x,!1,null,null,null),j=O.exports,S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"login-form"}},[n("TheLogin")],1)},E=[],$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.success?n("div",{staticClass:"notification is-success has-text-centered"},[n("p",[n("strong",[e._v("Success!")]),e._v(" "+e._s(e.success))])]):e._e(),e.errors.length?n("div",{staticClass:"notification is-danger has-text-centered"},[e._m(0),e._l(e.errors,(function(t,a){return n("small",{key:a},[e._v(" "+e._s(t)+" "),a<e.errors.length-1?n("span",[e._v("· ")]):e._e()])}))],2):e._e(),e.loading?n("progress",{staticClass:"progress is-small is-primary"}):e._e(),n("div",{staticClass:"box"},[n("form",{staticClass:"signup",on:{submit:e.login}},[n("div",[e._m(1),n("div",{staticClass:"field"},[n("p",{staticClass:"control has-icons-left has-icons-right"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"input",attrs:{type:"email",placeholder:"Email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),e._m(2)])]),n("div",{staticClass:"field"},[n("p",{staticClass:"control has-icons-left"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"input",attrs:{type:"password",placeholder:"Password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),e._m(3)])]),e._m(4),n("p",{staticClass:"has-text-centered"},[n("small",[e._v("Don't have an account? "),n("router-link",{attrs:{to:"register"}},[e._v("Sign up!")])],1)])])])])])},R=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[n("strong",[e._v("Oops!")]),e._v(" Something went wrong.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"level-left"},[n("div",{staticClass:"level-item"},[n("img",{staticStyle:{height:"30px"},attrs:{src:"https://www.svgrepo.com/show/300753/barber-shop.svg"}})]),n("section",{staticClass:"hero"},[n("div",{staticClass:"hero-body"},[n("div",{staticClass:"container"},[n("h1",{staticClass:"title"},[e._v(" Log in ")]),n("h2",{staticClass:"subtitle"},[e._v(" Manage appointments from your BarberZen dashboard. ")])])])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"icon is-small is-left"},[n("i",{staticClass:"fas fa-envelope"})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"icon is-small is-left"},[n("i",{staticClass:"fas fa-lock"})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"field"},[n("p",{staticClass:"control"},[n("button",{staticClass:"button is-light is-success is-fullwidth"},[e._v(" Login ")])])])}],P={name:"TheLogin",data:function(){return{email:"",password:"",errors:[],success:"",loading:!1}},methods:{login:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function n(){var a,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.preventDefault(),a={email:t.email,password:t.password},n.prev=2,t.loading=!0,n.next=6,t.$store.dispatch("user/login",a);case 6:s=n.sent,t.success=s,setTimeout((function(){t.$router.push("dashboard")}),2e3),n.next=16;break;case 11:n.prev=11,n.t0=n["catch"](2),console.log(n.t0),t.loading=!1,t.errors=[n.t0.message];case 16:case"end":return n.stop()}}),n,null,[[2,11]])})))()}}},I=P,T=(n("8ef4"),Object(m["a"])(I,$,R,!1,null,null,null)),B=T.exports,A={name:"Login",components:{TheLogin:B}},N=A,M=(n("d6db"),Object(m["a"])(N,S,E,!1,null,null,null)),L=M.exports,D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"signup-form"}},[n("TheSignup")],1)},U=[],z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.loading?n("progress",{staticClass:"progress is-small is-primary"}):e._e(),e.success?n("div",{staticClass:"notification is-success has-text-centered"},[n("p",[n("strong",[e._v("Success!")]),e._v(" "+e._s(e.success))])]):e._e(),e.errors.length?n("div",{staticClass:"notification is-danger has-text-centered"},[e._m(0),e._l(e.errors,(function(t,a){return n("small",{key:a},[e._v(e._s(t)+" "),a<e.errors.length-1?n("span",[e._v("· ")]):e._e()])}))],2):e._e(),n("div",{staticClass:"box"},[n("form",{staticClass:"signup",on:{submit:e.onSubmit}},[n("div",[e._m(1),n("div",{staticClass:"field"},[n("p",{staticClass:"control has-icons-left has-icons-right"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"input",attrs:{type:"text",placeholder:"Name"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),e._m(2)])]),n("div",{staticClass:"field"},[n("p",{staticClass:"control has-icons-left has-icons-right"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"input",attrs:{type:"email",placeholder:"Email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),e._m(3)])]),n("div",{staticClass:"field"},[n("p",{staticClass:"control has-icons-left"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"input",attrs:{type:"password",placeholder:"Password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),e._m(4)])]),e._m(5)])])])])},H=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[n("strong",[e._v("Oops!")]),e._v(" Something went wrong.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"level-left"},[n("div",{staticClass:"level-item"},[n("img",{staticStyle:{height:"30px"},attrs:{src:"https://www.svgrepo.com/show/300753/barber-shop.svg"}})]),n("section",{staticClass:"hero"},[n("div",{staticClass:"hero-body"},[n("div",{staticClass:"container"},[n("h1",{staticClass:"title"},[e._v(" Sign up ")]),n("h2",{staticClass:"subtitle"},[e._v(" Register now to begin booking appointments. ")])])])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"icon is-small is-left"},[n("i",{staticClass:"fas fa-user-circle"})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"icon is-small is-left"},[n("i",{staticClass:"fas fa-envelope"})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"icon is-small is-left"},[n("i",{staticClass:"fas fa-lock"})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"field"},[n("p",{staticClass:"control"},[n("button",{staticClass:"button is-primary is-fullwidth"},[e._v(" Register ")])])])}],J=(n("99af"),n("4160"),n("fb6a"),n("b0c0"),n("b64b"),n("159b"),{name:"TheSignup",data:function(){return{name:"",email:"",password:"",errors:[],success:"",loading:!1}},methods:{onSubmit:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function n(){var a,s,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.preventDefault(),a={name:t.name,email:t.email,password:t.password},n.prev=2,t.loading=!0,n.next=6,t.$store.dispatch("user/signup",a);case 6:s=n.sent,t.success=s,setTimeout((function(){t.$router.push("dashboard")}),2e3),n.next=18;break;case 11:if(n.prev=11,n.t0=n["catch"](2),t.loading=!1,r=n.t0.message.errors,r){n.next=17;break}return n.abrupt("return",t.errors=["Do you already have an account?"]);case 17:Object.keys(r).forEach((function(e){return t.errors.push("".concat(r[e].path.charAt(0).toUpperCase()+r[e].path.slice(1)," is ").concat(r[e].kind.substring(0,r[e].kind.length)))}));case 18:case"end":return n.stop()}}),n,null,[[2,11]])})))()}}}),Z=J,F=(n("9e6c"),Object(m["a"])(Z,z,H,!1,null,null,null)),G=F.exports,V={name:"Signup",components:{TheSignup:G}},W=V,Y=(n("e42b"),Object(m["a"])(W,D,U,!1,null,null,null)),q=Y.exports,K=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[n("section",{staticClass:"section"},[n("div",{staticClass:"container"},[n("h2",{staticClass:"subtitle"},[e._v(" You don't currently have any upcoming appointments. "),n("router-link",{attrs:{to:"schedule"}},[e._v("Book one now!")])],1)])])])},Q=[],X={name:"Dashboard",computed:Object(u["a"])({},Object(l["c"])(["user/userInfo"]))},ee=X,te=(n("2b56"),Object(m["a"])(ee,K,Q,!1,null,null,null)),ne=te.exports,ae=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("section",{staticClass:"section"},[e._m(0),n("TheCalendar")],1)])},se=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"hero"},[n("div",{staticClass:"hero-body"},[n("div",{staticClass:"container"},[n("h1",{staticClass:"title"},[e._v(" Book an appointment ")]),n("h2",{staticClass:"subtitle"},[e._v(" We're flexible. ")])])])])}],re=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"container"},[n("div",{staticClass:"box"},[n("vue-cal",{ref:"vuecal",staticStyle:{height:"60vh"},attrs:{"time-from":540,"time-to":1380,"disable-views":["years","year","month"],events:e.events,"twelve-hour":!0,"editable-events":"","cell-click-hold":!1,"snap-to-time":5,"on-event-create":e.onEventCreate},on:{"event-drop":e.onEventDrop,"cell-dblclick":function(t){e.$refs.vuecal.createEvent(t,120,{title:e.username.split(" ")[0]+"'s haircut",class:"appointment"})}}})],1),n("div",{staticClass:"has-text-right"},[n("button",{staticClass:"button is-primary",on:{click:e.scheduleHaircut}},[e._v("Finish scheduling my appointment")])])])])},ie=[],oe=n("7fa7"),ce=n.n(oe),ue=(n("6486"),n("b55b"),{name:"TheCalendar",components:{VueCal:ce.a},data:function(){return{active:!1,selectedEvent:{},events:[],username:"Natalie"}},computed:Object(u["a"])({},Object(l["c"])(["user/userInfo"])),created:function(){this.username=this["user/userInfo"].name},methods:{onEventCreate:function(e){this.events.length||(console.log("created event",e),this.events=[e])},onEventDrop:function(e){var t=e.event;this.events=[t]},closeModal:function(){this.active=!1},scheduleHaircut:function(){if(!this.events.length)return console.log("Please choose an available time.");console.log("Scheduling",this.events[0])}}}),le=ue,pe=(n("aae2"),Object(m["a"])(le,re,ie,!1,null,null,null)),ve=pe.exports,me={name:"Schedule",components:{TheCalendar:ve}},de=me,fe=Object(m["a"])(de,ae,se,!1,null,null,null),he=fe.exports,ge=(n("d3b7"),n("d4ec")),be=n("bee2"),_e=n("bc3a"),we=n.n(_e),Ce="api",xe=function(){function e(){Object(ge["a"])(this,e)}return Object(be["a"])(e,null,[{key:"createUser",value:function(e){return new Promise((function(t,n){(function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(a){var s,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,we.a.post("".concat(Ce,"/signup"),{newUser:a});case 3:s=e.sent,r=s.data,t(r),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),n(e.t0.response.data);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}})()(e)}))}},{key:"login",value:function(e){return new Promise((function(t,n){(function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(a){var s,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,we.a.post("".concat(Ce,"/login"),Object(u["a"])({},a));case 3:s=e.sent,r=s.data,localStorage.setItem("bztoken",r.token),console.log("newtoken"),t(r),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](0),n(e.t0.response.data);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}})()(e)}))}},{key:"logout",value:function(){return new Promise((function(e,t){try{var n=localStorage.getItem("bztoken");Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,we.a.get("".concat(Ce,"/logout"),{headers:{Authorization:"Bearer ".concat(n)}});case 2:case"end":return e.stop()}}),e)})))(),localStorage.removeItem("bztoken"),sessionStorage.clear(),e()}catch(a){t(a)}}))}},{key:"guard",value:function(){var e=localStorage.getItem("bztoken");return new Promise((function(t,n){(function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(a){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,we.a.get("".concat(Ce,"/verify"),{headers:{Authorization:"Bearer ".concat(a)}});case 3:s=e.sent,t(s.data.auth),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),n(!1);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}})()(e)}))}}]),e}(),ke=xe;a["default"].use(w["a"]);var ye=new w["a"]({routes:[{path:"/",name:"Home",component:j},{path:"/login",name:"Login",component:L},{path:"/register",name:"Signup",component:q},{path:"/dashboard",name:"Dashboard",component:ne},{path:"/schedule",name:"Schedule",component:he}]});ye.beforeEach(function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(t,n,a){var s,r,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return s=["/","/register","/login"],r=!s.includes(t.path),e.next=4,ke.guard();case 4:if(i=e.sent,!r||i){e.next=7;break}return e.abrupt("return",a("/login"));case 7:a();case 8:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}());var Oe=ye,je=(n("92c6"),{loggedIn:Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,ke.guard();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))(),userInfo:{name:"Guest User"}}),Se={authStatus:function(e){return e.loggedIn},userInfo:function(e){return e.userInfo}},Ee={auth:function(e,t){return Object(c["a"])(regeneratorRuntime.mark((function n(){var a,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,s=ke.guard(t),n.t0=a,n.next=5,s;case 5:return n.t1=n.sent,(0,n.t0)("setAuth",n.t1),n.abrupt("return",s);case 8:case"end":return n.stop()}}),n)})))()},login:function(e,t){return Object(c["a"])(regeneratorRuntime.mark((function n(){var a,s,r,i,o,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,n.next=3,ke.login(t);case 3:return s=n.sent,r=s.user,i=r._id,o=r.name,c=r.email,a("setUser",{user:{_id:i,name:o,email:c}}),n.abrupt("return",s.message);case 7:case"end":return n.stop()}}),n)})))()},signup:function(e,t){return Object(c["a"])(regeneratorRuntime.mark((function n(){var a,s,r,i,o,c,u;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,n.next=3,ke.createUser(t);case 3:return s=n.sent,n.next=6,ke.login(t);case 6:return r=n.sent,i=r.user,o=i._id,c=i.name,u=i.email,a("setUser",{user:{_id:o,name:c,email:u}}),n.abrupt("return",s.message);case 10:case"end":return n.stop()}}),n)})))()},logout:function(e){return Object(c["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,ke.logout();case 3:n("setAuth",!1);case 4:case"end":return t.stop()}}),t)})))()}},$e={setAuth:function(e,t){e.loggedIn=t,t||(e.userInfo="")},setUser:function(e,t){var n=t.user;e.userInfo=n,e.loggedIn=!0}},Re={namespaced:!0,state:je,getters:Se,actions:Ee,mutations:$e},Pe=n("8de1");a["default"].use(l["a"]);var Ie=new l["a"].Store({plugins:[Object(Pe["a"])({storage:window.sessionStorage})],modules:{user:Re}});a["default"].config.productionTip=!1,new a["default"]({store:Ie,router:Oe,render:function(e){return e(_)}}).$mount("#app")},"8ef4":function(e,t,n){"use strict";var a=n("285b"),s=n.n(a);s.a},"9e6c":function(e,t,n){"use strict";var a=n("e054"),s=n.n(a);s.a},aae2:function(e,t,n){"use strict";var a=n("2513"),s=n.n(a);s.a},cff3:function(e,t,n){},d6db:function(e,t,n){"use strict";var a=n("e67a"),s=n.n(a);s.a},e054:function(e,t,n){},e42b:function(e,t,n){"use strict";var a=n("cff3"),s=n.n(a);s.a},e67a:function(e,t,n){},e974:function(e,t,n){"use strict";var a=n("45a6"),s=n.n(a);s.a}});
//# sourceMappingURL=app.0b97576f.js.map
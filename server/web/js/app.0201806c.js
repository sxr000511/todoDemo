(function(t){function e(e){for(var o,r,a=e[0],c=e[1],u=e[2],d=0,p=[];d<a.length;d++)r=a[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&p.push(i[r][0]),i[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);l&&l(e);while(p.length)p.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],o=!0,a=1;a<n.length;a++){var c=n[a];0!==i[c]&&(o=!1)}o&&(s.splice(e--,1),t=r(r.s=n[0]))}return t}var o={},i={app:0},s=[];function r(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=o,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/web/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var u=0;u<a.length;u++)e(a[u]);var l=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0916":function(t,e,n){"use strict";n("2080")},"173e":function(t,e,n){"use strict";n("62f4")},2080:function(t,e,n){},"21ae":function(t,e,n){"use strict";n("29b3")},"29b3":function(t,e,n){},"555a":function(t,e,n){"use strict";n("848a")},"56d7":function(t,e,n){"use strict";n.r(e);var o={};n.r(o),n.d(o,"getTodo",(function(){return pt})),n.d(o,"updateMenu",(function(){return mt}));var i={};n.r(i),n.d(i,"getTodoList",(function(){return ft}));n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],c={name:"App"},u=c,l=n("2877"),d=Object(l["a"])(u,r,a,!1,null,null,null),p=d.exports,m=n("8c4f"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"container",class:{"menu-open":t.menuOpen}},[n("section",{staticClass:"menu"},[n("menus")],1),n("div",{staticClass:"content-overlay",on:{click:function(e){return t.$store.dispatch("updateMenu")}}}),n("section",{staticClass:"content-container"},[n("todo")],1)])},h=[],v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"list-todos"},[t._l(t.todoList,(function(e,o){return n("a",{key:o,staticClass:"list-todo list activeListClass",class:{active:e._id===t.todoId},on:{click:function(n){return t.goList(e._id)}}},[e.locked?n("span",{staticClass:"icon-lock"}):t._e(),e.count>0?n("span",{staticClass:"count-list"},[t._v(t._s(e.count))]):t._e(),t._v(" "+t._s(e.title)+" ")])})),n("a",{staticClass:"link-list-new",on:{click:t.addTodoList}},[n("span",{staticClass:"icon-plus"}),t._v(" 新增 ")])],2)},g=[],_=n("1da1"),k=(n("96cf"),n("bc3a")),w=n.n(k),y=w.a.create({baseURL:Object({NODE_ENV:"production",BASE_URL:"/web/"}).VUE_APP_API_URL||""});function x(t){return b.apply(this,arguments)}function b(){return b=Object(_["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,y.get("/todo/list",{params:e});case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)}))),b.apply(this,arguments)}function C(t){return O.apply(this,arguments)}function O(){return O=Object(_["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,y.post("/todo/addTodo",{params:e});case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)}))),O.apply(this,arguments)}function $(t){return T.apply(this,arguments)}function T(){return T=Object(_["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,y.get("/todo/listId/".concat(e._id));case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)}))),T.apply(this,arguments)}function E(t){return L.apply(this,arguments)}function L(){return L=Object(_["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,y.post("/todo/addRecord/".concat(e._id),e);case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)}))),L.apply(this,arguments)}function j(t){return P.apply(this,arguments)}function P(){return P=Object(_["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,y.post("/todo/editTodo",e);case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)}))),P.apply(this,arguments)}function N(t){return R.apply(this,arguments)}function R(){return R=Object(_["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,y.post("/todo/editRecord",e);case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)}))),R.apply(this,arguments)}function U(t){return D.apply(this,arguments)}function D(){return D=Object(_["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,y.post("/todo/logIn",e);case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)}))),D.apply(this,arguments)}var A={name:"menus",data:function(){return{todoId:"",todoNum:0}},computed:{todoList:function(){var t=this.$store.getters.getTodoList.length;return this.$store.getters.getTodoList.length<this.todoNum&&this.goList(this.$store.getters.getTodoList[0]._id),this.todoNum=t,this.$store.getters.getTodoList}},created:function(){var t=this;this.$store.dispatch("getTodo").then((function(){t.$nextTick((function(){t.goList(t.todoList[0]._id)}))}))},watch:{todoId:function(t){this.$router.push({name:"todo",params:{_id:t}})}},methods:{goList:function(t){this.todoId=t},addTodoList:function(){var t=this;C({}).then((function(){t.$store.dispatch("getTodo").then((function(){t.$nextTick((function(){setTimeout((function(){t.goList(t.todoList[t.todoList.length-1]._id)}),100)}))}))}))}}},I=A,S=(n("21ae"),Object(l["a"])(I,v,g,!1,null,null,null)),M=S.exports,V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:!t.todo.isDelete,expression:"!todo.isDelete"}],staticClass:"page lists-show"},[n("nav",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isUpdate,expression:"isUpdate"}],staticClass:"form list-edit-form"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.todo.title,expression:"todo.title"}],attrs:{type:"text",disabled:t.todo.locked},domProps:{value:t.todo.title},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.updateTitle.apply(null,arguments)},input:function(e){e.target.composing||t.$set(t.todo,"title",e.target.value)}}}),n("div",{staticClass:"nav-group right"},[n("a",{staticClass:"nav-item",on:{click:function(e){t.isUpdate=!1}}},[n("span",{staticClass:"icon-close"})])])]),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.isUpdate,expression:"!isUpdate"}],staticClass:"nav-group",on:{click:function(e){return t.$store.dispatch("updateMenu")}}},[t._m(0)]),n("h1",{directives:[{name:"show",rawName:"v-show",value:!t.isUpdate,expression:"!isUpdate"}],staticClass:"title-page",on:{click:function(e){t.isUpdate=!0}}},[n("span",{staticClass:"title-wrapper"},[t._v(t._s(t.todo.title))]),n("span",{staticClass:"count-list"},[t._v(t._s(t.todo.count||0))])]),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.isUpdate,expression:"!isUpdate"}],staticClass:"nav-group right"},[n("div",{staticClass:"options-web"},[n("a",{staticClass:"nav-item",on:{click:t.onlock}},[t.todo.locked?n("span",{staticClass:"icon-lock"}):n("span",{staticClass:"icon-unlock"})]),n("a",{staticClass:"nav-item"},[n("span",{staticClass:"icon-trash",on:{click:t.onDelete}})])])]),n("div",{staticClass:"form todo-new input-symbol"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],attrs:{type:"text",placeholder:"请输入",disabled:t.todo.locked},domProps:{value:t.text},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onAdd.apply(null,arguments)},input:function(e){e.target.composing||(t.text=e.target.value)}}}),n("span",{staticClass:"icon-add"})])]),n("div",{staticClass:"content-scrollable list-items"},t._l(t.items,(function(e,o){return n("div",{key:o},[n("item",{attrs:{item:e,index:o,_id:t.todo._id,init:t.init,locked:t.todo.locked}})],1)})),0)])},q=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"nav-item"},[n("span",{staticClass:"icon-list-unordered"})])}],B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"slide-fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:!t.item.isDelete,expression:"!item.isDelete"}],staticClass:"list-item editingClass editing",class:{checked:t.item.checked}},[n("label",{staticClass:"checkbox"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.item.checked,expression:"item.checked"}],attrs:{type:"checkbox",name:"checked",disabled:t.locked},domProps:{checked:Array.isArray(t.item.checked)?t._i(t.item.checked,null)>-1:t.item.checked},on:{change:[function(e){var n=t.item.checked,o=e.target,i=!!o.checked;if(Array.isArray(n)){var s=null,r=t._i(n,s);o.checked?r<0&&t.$set(t.item,"checked",n.concat([s])):r>-1&&t.$set(t.item,"checked",n.slice(0,r).concat(n.slice(r+1)))}else t.$set(t.item,"checked",i)},t.onChange]}}),n("span",{staticClass:"checkbox-custom"})]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.item.text,expression:"item.text"}],attrs:{type:"text",placeholder:"写点什么。。。",disabled:t.item.checked||t.locked},domProps:{value:t.item.text},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onChange.apply(null,arguments)},input:function(e){e.target.composing||t.$set(t.item,"text",e.target.value)}}}),t.item.checked&&!t.locked?n("a",{staticClass:"delete-item",on:{click:function(e){t.item.isDelete=!0,t.onChange()}}},[n("span",{staticClass:"icon-trash"})]):t._e()])])},J=[],z={props:{item:{type:Object,default:function(){return{checked:!1,text:"你好,世界"}}},index:{},_id:{},init:{},locked:{}},methods:{onChange:function(){var t=this;N({_id:this._id,record:this.item,index:this.index}).then((function(e){t.init(),t.$store.dispatch("getTodo")}))}}},F=z,G=(n("0916"),Object(l["a"])(F,B,J,!1,null,null,null)),H=G.exports,K={data:function(){return{todo:{},items:[],text:"",isUpdate:!1}},components:{item:H},watch:{"$route.params._id":function(){console.log(this.$route.params._id),this.init()}},created:function(){this.init()},methods:{init:function(){var t=this,e=this.$route.params._id;$({_id:e}).then((function(e){var n=e.data.todo,o=n._id,i=n.title,s=n.count,r=n.isDelete,a=n.locked,c=n.record;t.items=c,t.todo={_id:o,title:i,count:s,locked:a,isDelete:r}}))},onAdd:function(){var t=this,e=this.$route.params._id;E({_id:e,text:this.text}).then((function(){t.text="",t.init(),t.$store.dispatch("getTodo")}))},updateTitle:function(){this.isUpdate=!1,this.updateTodo()},onDelete:function(){this.todo.isDelete=!0,this.updateTodo()},onlock:function(){this.todo.locked=!this.todo.locked,this.updateTodo()},updateTodo:function(){var t=this;j({todo:this.todo}).then((function(){t.$store.dispatch("getTodo"),t.init()}))}}},Q=K,W=(n("555a"),Object(l["a"])(Q,V,q,!1,null,null,null)),X=W.exports,Y={name:"Layouts",components:{menus:M,todo:X},computed:{menuOpen:function(){return this.$store.state.menuOpen}}},Z=Y,tt=(n("173e"),Object(l["a"])(Z,f,h,!1,null,null,null)),et=tt.exports,nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pages_agile_info_w3l"},[n("div",{staticClass:"over_lay_agile_pages_w3ls"},[n("div",{staticClass:"registration"},[n("div",{staticClass:"signin-form profile"},[n("h2",[t._v("请登录")]),n("div",{staticClass:"login-form"},[n("form",{attrs:{action:""},on:{submit:function(e){return e.preventDefault(),t.loginhandle.apply(null,arguments)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.model.user,expression:"model.user"}],attrs:{type:"text",name:"username",placeholder:"用户名",required:""},domProps:{value:t.model.user},on:{input:function(e){e.target.composing||t.$set(t.model,"user",e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.model.password,expression:"model.password"}],attrs:{type:"password",name:"password",placeholder:"密码",required:""},domProps:{value:t.model.password},on:{input:function(e){e.target.composing||t.$set(t.model,"password",e.target.value)}}}),t._m(0)])])])])])])},ot=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tp"},[n("input",{attrs:{type:"submit",value:"登录"}})])}],it={data:function(){return{model:{}}},methods:{loginhandle:function(){var t=this;console.log(Object({NODE_ENV:"production",BASE_URL:"/web/"}).VUE_APP_API_ROOT),U(this.model).then((function(e){console.log(e),localStorage.todouser=t.model.user,t.$router.push("/todo")}))}}},st=it,rt=(n("9ce0"),Object(l["a"])(st,nt,ot,!1,null,null,null)),at=rt.exports,ct=m["a"].prototype.push;m["a"].prototype.push=function(t){return ct.call(this,t).catch((function(t){return t}))},s["a"].use(m["a"]);var ut=new m["a"]({routes:[{path:"/todo/login",name:"Login",component:at,meta:{isPublic:!0}},{path:"/todo",name:"Layouts",component:et,children:[{path:"/todo/:_id",name:"todo",component:X,props:!0}]}]});ut.beforeEach((function(t,e,n){if(!t.meta.isPublic&&!localStorage.todouser)return n("/todo/login");n()}));var lt=ut,dt=n("2f62"),pt=(n("d3b7"),function(t){var e=t.commit;return new Promise((function(t){x().then((function(n){e("EDITTODE",n.data.todos),t()}))}))}),mt=function(t){var e=t.commit;e("MENUOPEN")},ft=function(t){return t.todoList};s["a"].use(dt["a"]);var ht={todoList:[],menuOpen:!1},vt={EDITTODE:function(t,e){t.todoList=e},MENUOPEN:function(t){t.menuOpen=!t.menuOpen}},gt=new dt["a"].Store({actions:o,getters:i,state:ht,mutations:vt});s["a"].config.productionTip=!1,new s["a"]({el:"#app",router:lt,store:gt,render:function(t){return t(p)}})},"62f4":function(t,e,n){},"848a":function(t,e,n){},"9ce0":function(t,e,n){"use strict";n("d64c")},d64c:function(t,e,n){}});
//# sourceMappingURL=app.0201806c.js.map
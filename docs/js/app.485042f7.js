(function(t){function e(e){for(var i,a,r=e[0],c=e[1],d=e[2],u=0,p=[];u<r.length;u++)a=r[u],n[a]&&p.push(n[a][0]),n[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);l&&l(e);while(p.length)p.shift()();return s.push.apply(s,d||[]),o()}function o(){for(var t,e=0;e<s.length;e++){for(var o=s[e],i=!0,r=1;r<o.length;r++){var c=o[r];0!==n[c]&&(i=!1)}i&&(s.splice(e--,1),t=a(a.s=o[0]))}return t}var i={},n={app:0},s=[];function a(e){if(i[e])return i[e].exports;var o=i[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=t,a.c=i,a.d=function(t,e,o){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(o,i,function(e){return t[e]}.bind(null,i));return o},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var d=0;d<r.length;d++)e(r[d]);var l=c;s.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";var i=o("64a9"),n=o.n(i);n.a},"56d7":function(t,e,o){"use strict";o.r(e);o("cadf"),o("551c"),o("f751"),o("097d");var i=o("2b0e"),n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("TodoList",{attrs:{todos:t.todos}}),o("CreateTodo",{on:{"create-todo":t.addTodo}})],1)},s=[],a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"list-info"},[o("p",[t._v("Completed Tasks: "+t._s(t.todos.filter(function(t){return!0===t.done}).length))]),o("p",[t._v("Pending Tasks: "+t._s(t.todos.filter(function(t){return!1===t.done}).length))])]),t._l(t.todos,function(e,i){return o("TodoItem",{key:i,attrs:{todo:e},on:{"delete-todo":t.deleteTodo,"complete-todo":t.completeTodo}})})],2)},r=[],c=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"ui centered card"},[o("div",{directives:[{name:"show",rawName:"v-show",value:!t.isEditing,expression:"!isEditing"}],staticClass:"content"},[o("div",{staticClass:"header"},[t._v("\n        "+t._s(t.todo.title)+"\n    ")]),o("div",{staticClass:"meta"},[t._v("\n        "+t._s(t.todo.project)+"\n    ")]),o("div",{staticClass:"extra content"},[o("span",{staticClass:"right floated edit icon",on:{click:t.showForm}},[o("i",{staticClass:"edit icon big"})]),o("span",{staticClass:"right floated trash icon",on:{click:function(e){t.deleteTodo(t.todo)}}},[o("i",{staticClass:"trash icon big"})])])]),o("div",{directives:[{name:"show",rawName:"v-show",value:t.isEditing,expression:"isEditing"}],staticClass:"content"},[o("div",{staticClass:"ui form"},[o("div",{staticClass:"field"},[o("label",[t._v("Title")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.todo.title,expression:"todo.title"}],attrs:{type:"text"},domProps:{value:t.todo.title},on:{input:function(e){e.target.composing||t.$set(t.todo,"title",e.target.value)}}})]),o("div",{staticClass:"field"},[o("label",[t._v("Project")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.todo.project,expression:"todo.project"}],attrs:{type:"text"},domProps:{value:t.todo.project},on:{input:function(e){e.target.composing||t.$set(t.todo,"project",e.target.value)}}})]),o("div",{staticClass:"ui two button attached buttons"},[o("button",{staticClass:"ui basic blue button",on:{click:t.hideForm}},[t._v("\n          Close X\n        ")])])])]),o("div",{directives:[{name:"show",rawName:"v-show",value:!t.isEditing&&t.todo.done,expression:"!isEditing && todo.done"}],staticClass:"ui bottom attached green basic button",attrs:{disabled:""}},[t._v("\n      Completed\n  ")]),o("div",{directives:[{name:"show",rawName:"v-show",value:!t.isEditing&&!t.todo.done,expression:"!isEditing && !todo.done"}],staticClass:"ui bottom attached red basic button",on:{click:function(e){t.completeTodo(t.todo)}}},[t._v("\n      Pending\n  ")])])},d=[],l={props:["todo"],data:function(){return{isEditing:!1}},methods:{showForm:function(){this.isEditing=!0},hideForm:function(){this.isEditing=!1},deleteTodo:function(t){this.$emit("delete-todo",t)},completeTodo:function(t){this.$emit("complete-todo",t)}}},u=l,p=(o("c8c0"),o("2877")),v=Object(p["a"])(u,c,d,!1,null,"49b3ac52",null),f=v.exports,m={props:["todos"],components:{TodoItem:f},methods:{deleteTodo:function(t){var e=this.todos.indexOf(t);this.todos.splice(e,1)},completeTodo:function(t){var e=this.todos.indexOf(t);this.todos[e].done=!0}}},h=m,b=(o("b79b"),Object(p["a"])(h,a,r,!1,null,"52487346",null)),g=b.exports,C=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"ui basic content center aligned segment"},[o("button",{directives:[{name:"show",rawName:"v-show",value:!t.isCreating,expression:"!isCreating"}],staticClass:"ui basic button icon",on:{click:t.openForm}},[o("i",{staticClass:"plus icon"})]),o("div",{directives:[{name:"show",rawName:"v-show",value:t.isCreating,expression:"isCreating"}],staticClass:"ui centered card"},[o("div",{staticClass:"content"},[o("div",{staticClass:"ui form"},[o("div",{staticClass:"field"},[o("label",[t._v("Title")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.titleText,expression:"titleText"}],ref:"title",attrs:{type:"text",defaultValue:""},domProps:{value:t.titleText},on:{input:function(e){e.target.composing||(t.titleText=e.target.value)}}})]),o("div",{staticClass:"field"},[o("label",[t._v("Project")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.projectText,expression:"projectText"}],ref:"project",attrs:{type:"text",defaultValue:""},domProps:{value:t.projectText},on:{input:function(e){e.target.composing||(t.projectText=e.target.value)}}})]),o("div",{staticClass:"ui two button attached buttons"},[o("button",{staticClass:"ui basic blue button",on:{click:t.sendForm}},[t._v("\n            Create\n          ")]),o("button",{staticClass:"ui basic red button",on:{click:t.closeForm}},[t._v("\n            Cancel\n          ")])])])])])])},x=[],T={data:function(){return{titleText:"",projectText:"",isCreating:!1}},methods:{openForm:function(){this.isCreating=!0},closeForm:function(){this.isCreating=!1},sendForm:function(){if(this.titleText.length>0&&this.projectText.length>0){var t=this.titleText,e=this.projectText;this.$emit("create-todo",{title:t,project:e,done:!1}),this.titleText="",this.projectText="",this.isCreating=!1}}}},j=T,w=Object(p["a"])(j,C,x,!1,null,null,null),_=w.exports,y={name:"app",components:{TodoList:g,CreateTodo:_},data:function(){return{todos:[{title:"Todo A",project:"Project A",done:!1},{title:"Todo B",project:"Project B",done:!0},{title:"Todo C",project:"Project C",done:!1},{title:"Todo D",project:"Project D",done:!1}]}},methods:{addTodo:function(t){this.todos.push(t)}}},P=y,E=(o("034f"),Object(p["a"])(P,n,s,!1,null,null,null)),O=E.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(O)}}).$mount("#app")},"64a9":function(t,e,o){},b79b:function(t,e,o){"use strict";var i=o("d395"),n=o.n(i);n.a},c627:function(t,e,o){},c8c0:function(t,e,o){"use strict";var i=o("c627"),n=o.n(i);n.a},d395:function(t,e,o){}});
//# sourceMappingURL=app.485042f7.js.map
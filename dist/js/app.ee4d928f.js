(function(t){function e(e){for(var n,r,l=e[0],a=e[1],u=e[2],d=0,f=[];d<l.length;d++)r=l[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&f.push(i[r][0]),i[r]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n]);s&&s(e);while(f.length)f.shift()();return c.push.apply(c,u||[]),o()}function o(){for(var t,e=0;e<c.length;e++){for(var o=c[e],n=!0,l=1;l<o.length;l++){var a=o[l];0!==i[a]&&(n=!1)}n&&(c.splice(e--,1),t=r(r.s=o[0]))}return t}var n={},i={app:0},c=[];function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=n,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(o,n,function(e){return t[e]}.bind(null,n));return o},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/vuetodolist/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],a=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var s=a;c.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"100b":function(t,e,o){},"123c":function(t,e,o){},"12c1":function(t,e,o){},"1a52":function(t,e,o){"use strict";var n=o("5239"),i=o.n(n);i.a},"2d02":function(t,e,o){},"2fe8":function(t,e,o){},"31b3":function(t,e,o){"use strict";var n=o("2d02"),i=o.n(n);i.a},5239:function(t,e,o){},"52c1":function(t,e,o){"use strict";var n=o("12c1"),i=o.n(n);i.a},"545e":function(t,e,o){"use strict";var n=o("e910"),i=o.n(n);i.a},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n,i=o("2b0e"),c=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("div",{staticClass:"main"},[o("Header"),o("Main"),o("Footer")],1)])},r=[],l=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("header",[o("h1",[t._v("todo")])])}],u={},s=u,d=(o("1a52"),o("2877")),f=Object(d["a"])(s,l,a,!1,null,"1dff55dc",null),p=f.exports,m=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},h=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("footer",[o("p",[t._v("Double-click to edit a todo")]),o("p",[t._v("Created by "),o("a",{attrs:{href:"http://github.com/blacksonic/"}},[t._v("blacksonic")])]),o("p",[t._v("Part of "),o("a",{attrs:{href:"http://todomvc.com"}},[t._v("TodoMVC")])])])}],O={},v=O,L=(o("c459"),Object(d["a"])(v,m,h,!1,null,"6c6a37cb",null)),b=L.exports,T=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("main",{staticClass:"todo-main"},[o("AddInput"),o("TodoList"),o("FilterFooter")],1)},_=[],E=o("5530"),g=o("d4ec"),C=o("bee2"),D="localTodoKey",j=function(){function t(){Object(g["a"])(this,t)}return Object(C["a"])(t,null,[{key:"loadTodos",value:function(){return JSON.parse(localStorage.getItem(D)||"[]")}},{key:"storeTodos",value:function(t){localStorage.setItem(D,JSON.stringify(t))}}]),t}(),y=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"todo-input-wrapper"},[t.todoListLength?o("label",{staticClass:"tiw-toggle-all",class:{"all-check":t.allCheck},on:{click:t.onCompletedAll}}):t._e(),o("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],staticClass:"tiw-input",attrs:{placeholder:"What needs to be done?",type:"text"},domProps:{value:t.value},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onAdd(e)},input:function(e){e.target.composing||(t.value=e.target.value)}}})])},A=[],k=(o("a623"),o("2f62")),x={data:function(){return{value:""}},computed:Object(E["a"])({},Object(k["d"])(["todoList"]),{},Object(k["c"])(["todoListLength"]),{allCheck:function(){return this.todoList.length&&this.todoList.every((function(t){return t.completed}))}}),methods:Object(E["a"])({},Object(k["b"])(["onCreate","onCompletedAll"]),{onAdd:function(){this.onCreate(this.value),this.value=""}})},w=x,P=(o("31b3"),Object(d["a"])(w,y,A,!1,null,"201203d4",null)),G=P.exports,M=function(){var t=this,e=t.$createElement,o=t._self._c||e;return 0!==t.todoListLength?o("footer",{staticClass:"todo-footer-wrapper"},[o("span",{staticClass:"tfw-count"},[o("span",[t._v(t._s(t.unCompletedTodoLength)+" "+t._s(t.itemText)+" left")])]),o("ul",{staticClass:"tfw-filter"},t._l(t.filterTitle,(function(e,n){return o("li",{key:n},[o("a",{class:{selected:e.key===t.filter},attrs:{href:"#"},on:{click:function(o){return t.handleFilter(e.key)}}},[t._v(t._s(e.text))])])})),0),o("button",{directives:[{name:"show",rawName:"v-show",value:t.completedTodoLength,expression:"completedTodoLength"}],staticClass:"tfw-clear",on:{click:t.onClear}},[t._v(" Clear completed ")])]):t._e()},$=[],F={all:"all",active:"active",completed:"completed"},N={data:function(){return{filterTitle:[{key:F.all,text:"All"},{key:F.active,text:"Active"},{key:F.completed,text:"Completed"}]}},computed:Object(E["a"])({},Object(k["d"])(["filter"]),{},Object(k["c"])(["completedTodo","completedTodoLength","todoListLength","unCompletedTodoLength"]),{itemText:function(){return 0===this.unCompletedTodoLength||1===this.unCompletedTodoLength?"item":"items"}}),methods:Object(E["a"])({},Object(k["b"])(["onChangeFilter","onClear"]),{handleFilter:function(t){this.onChangeFilter({key:t})}})},H=N,I=(o("adc4"),Object(d["a"])(H,M,$,!1,null,"0275678e",null)),S=I.exports,R=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ul",{staticClass:"todo-list"},t._l(t.filterTodoList,(function(e,n){return o("ListItem",{key:n,attrs:{data:e},on:{blur:t.onBlur,toggle:t.onToggle,delete:t.handleDelete}})})),1)},U=[],V=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("li",{staticClass:"todo-item",on:{dblclick:t.handleEdit}},[t.isEdit?o("input",{ref:"inputDom",staticClass:"edit",attrs:{type:"text"},domProps:{value:t.editValue},on:{blur:function(e){return t.handleBlur(t.data)},input:t.handleChange}}):o("div",[o("input",{staticClass:"toggle",attrs:{type:"checkbox"},on:{click:function(e){return t.handleToggle(t.data)}}}),o("label",{class:{completed:t.data.completed}},[t._v(t._s(t.data.text))]),o("button",{staticClass:"item-delete",on:{click:function(e){return t.handleDelete(t.data.id)}}},[t._v(" × ")])])])])},B=[],J={props:{data:{type:Object}},data:function(){return{isEdit:!1,editValue:""}},methods:{handleEdit:function(){var t=this;this.isEdit=!0,this.editValue=this.data.text,this.$nextTick((function(){t.$refs.inputDom.focus()}))},handleChange:function(t){this.editValue=t.target.value},handleBlur:function(t){this.isEdit=!1,this.$emit("blur",{id:t.id,text:this.editValue})},handleToggle:function(t){this.$emit("toggle",{id:t.id,completed:!t.completed})},handleDelete:function(t){this.$emit("delete",{id:t})}}},K=J,W=(o("73ef"),Object(d["a"])(K,V,B,!1,null,"590d9346",null)),q=W.exports,z={components:{ListItem:q},computed:Object(E["a"])({},Object(k["c"])(["filterTodoList"])),methods:Object(E["a"])({},Object(k["b"])(["onUpdate","onToggleTodo","onDelete"]),{onBlur:function(t){this.onUpdate(t)},onToggle:function(t){this.onToggleTodo(t)},handleDelete:function(t){this.onDelete(t)}})},Q=z,X=(o("52c1"),Object(d["a"])(Q,R,U,!1,null,"53d3427c",null)),Y=X.exports,Z={components:{AddInput:G,FilterFooter:S,TodoList:Y},watch:{todoList:function(){j.storeTodos(this.todoList)}},computed:Object(E["a"])({},Object(k["d"])(["todoList"])),methods:Object(E["a"])({},Object(k["b"])(["onLoad"])),beforeMount:function(){this.onLoad(j.loadTodos())}},tt=Z,et=(o("545e"),Object(d["a"])(tt,T,_,!1,null,"10f29cc9",null)),ot=et.exports,nt={text:"App",components:{Header:p,Main:ot,Footer:b}},it=nt,ct=(o("5c0b"),Object(d["a"])(it,c,r,!1,null,null,null)),rt=ct.exports,lt=(o("4de4"),o("d81d"),o("ade3")),at=o("ec26"),ut={LOAD:"LOAD",ADD_TODO:"ADD_TODO",DELETE_TODO:"DELETE_TODO",UPDATE_TODO:"UPDATE_TODO",TOGGLE_TODO:"TOGGLE_TODO",CLEAR_COMPLETED:"CLEAR_COMPLETED",CHANGE_FILTER:"CHANGE_FILTER",CHANGE_ALL_COMPLETED:"CHANGE_ALL_COMPLETED"};i["a"].use(k["a"]);var st=new k["a"].Store({state:{todoList:[],filter:F.all},getters:{filterTodoList:function(t){return t.filter===F.active?t.todoList.filter((function(t){return!t.completed})):t.filter===F.completed?t.todoList.filter((function(t){return t.completed})):t.todoList},completedTodo:function(t){return t.todoList.filter((function(t){return t.completed}))},todoListLength:function(t){return t.todoList.length},completedTodoLength:function(t,e){return e.completedTodo.length},unCompletedTodoLength:function(t){return t.todoList.filter((function(t){return!t.completed})).length}},mutations:(n={},Object(lt["a"])(n,ut.LOAD,(function(t,e){t.todoList=e})),Object(lt["a"])(n,ut.ADD_TODO,(function(t,e){t.todoList.push({id:Object(at["a"])(),text:e,completed:!1})})),Object(lt["a"])(n,ut.DELETE_TODO,(function(t,e){var o=e.id;t.todoList=t.todoList.filter((function(t){return t.id!==o}))})),Object(lt["a"])(n,ut.UPDATE_TODO,(function(t,e){t.todoList=t.todoList.map((function(t){return t.id===e.id?Object(E["a"])({},t,{},e):t}))})),Object(lt["a"])(n,ut.TOGGLE_TODO,(function(t,e){t.todoList=t.todoList.map((function(t){return t.id===e.id?Object(E["a"])({},t,{},e):t}))})),Object(lt["a"])(n,ut.CLEAR_COMPLETED,(function(t){t.todoList=t.todoList.filter((function(t){return!t.completed}))})),Object(lt["a"])(n,ut.CHANGE_FILTER,(function(t,e){var o=e.key;t.filter=o})),Object(lt["a"])(n,ut.CHANGE_ALL_COMPLETED,(function(t){t.todoList=t.todoList.map((function(t){return Object(E["a"])({},t,{},{completed:!0})}))})),n),actions:{onLoad:function(t,e){var o=t.commit;o(ut.LOAD,e)},onCreate:function(t,e){var o=t.commit;o(ut.ADD_TODO,e)},onDelete:function(t,e){var o=t.commit;o(ut.DELETE_TODO,e)},onUpdate:function(t,e){var o=t.commit;o(ut.UPDATE_TODO,e)},onToggleTodo:function(t,e){var o=t.commit;o(ut.TOGGLE_TODO,e)},onClear:function(t){var e=t.commit;e(ut.CLEAR_COMPLETED)},onChangeFilter:function(t,e){var o=t.commit;o(ut.CHANGE_FILTER,e)},onCompletedAll:function(t){var e=t.commit;e(ut.CHANGE_ALL_COMPLETED)}},modules:{}});i["a"].config.productionTip=!1,new i["a"]({store:st,render:function(t){return t(rt)}}).$mount("#app")},"5c0b":function(t,e,o){"use strict";var n=o("9c0c"),i=o.n(n);i.a},"73ef":function(t,e,o){"use strict";var n=o("100b"),i=o.n(n);i.a},"9c0c":function(t,e,o){},adc4:function(t,e,o){"use strict";var n=o("123c"),i=o.n(n);i.a},c459:function(t,e,o){"use strict";var n=o("2fe8"),i=o.n(n);i.a},e910:function(t,e,o){}});
//# sourceMappingURL=app.ee4d928f.js.map
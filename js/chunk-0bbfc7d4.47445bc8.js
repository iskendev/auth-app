(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0bbfc7d4"],{"206d":function(s,e,t){"use strict";t("4413")},4413:function(s,e,t){},a55b:function(s,e,t){"use strict";t.r(e);var a=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"login"},[t("form",{staticClass:"login__form",on:{submit:function(e){return e.preventDefault(),s.login(e)}}},[t("div",{staticClass:"login__form--username"},[t("label",{attrs:{for:"username"}},[s._v("Username")]),t("input",{directives:[{name:"model",rawName:"v-model",value:s.username,expression:"username"}],attrs:{type:"text",id:"username"},domProps:{value:s.username},on:{input:function(e){e.target.composing||(s.username=e.target.value)}}})]),t("div",{staticClass:"login__form--password"},[t("label",{attrs:{for:"password"}},[s._v("Password")]),t("input",{directives:[{name:"model",rawName:"v-model",value:s.password,expression:"password"}],attrs:{type:"password",id:"password"},domProps:{value:s.password},on:{input:function(e){e.target.composing||(s.password=e.target.value)}}})]),t("div",{staticClass:"login__form--btn"},[t("button",{attrs:{disabled:s.isDisabled}},[s._v("Login")])])])])},n=[],r={data:function(){return{username:"",password:"",isDisabled:!1}},methods:{login:function(){var s=this;if(this.username&&this.password){this.isDisabled=!0;var e={username:this.username,password:this.password,client_id:"frontend_app",client_secret:"secret",grant_type:"password"};this.$store.dispatch("auth/login",e).then((function(){s.$router.push("/collections"),s.isDisabled=!1})).catch((function(s){alert("".concat(s,": Probably the credentials are incorrect, please try again")),location.reload()}))}else alert("Введите данные")}}},o=r,i=(t("206d"),t("2877")),l=Object(i["a"])(o,a,n,!1,null,null,null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-0bbfc7d4.47445bc8.js.map
"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[69485],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return s}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=r.createContext({}),p=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},c=function(t){var e=p(t.components);return r.createElement(u.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,u=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),m=p(n),s=a,b=m["".concat(u,".").concat(s)]||m[s]||d[s]||o;return n?r.createElement(b,l(l({ref:e},c),{},{components:n})):r.createElement(b,l({ref:e},c))}));function s(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},94993:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),l=["components"],i={sidebar_position:10},u="DyteControlBar",p={unversionedId:"reference/dyte-control-bar",id:"version-0.19.x/reference/dyte-control-bar",isDocsHomePage:!1,title:"DyteControlBar",description:"Methods",source:"@site/javascript_versioned_docs/version-0.19.x/reference/dyte-control-bar.mdx",sourceDirName:"reference",slug:"/reference/dyte-control-bar",permalink:"/javascript/0.19.x/reference/dyte-control-bar",tags:[],version:"0.19.x",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"version-0.19.x/mainSidebar",previous:{title:"DyteGrid",permalink:"/javascript/0.19.x/reference/dyte-grid"},next:{title:"ChatMessage",permalink:"/javascript/0.19.x/reference/chat-message"}},c=[{value:"Methods",id:"methods",children:[]},{value:"ButtonProp",id:"buttonprop",children:[]}],d={toc:c};function m(t){var e=t.components,n=(0,a.Z)(t,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"dytecontrolbar"},"DyteControlBar"),(0,o.kt)("h2",{id:"methods"},"Methods"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Method name"),(0,o.kt)("th",{parentName:"tr",align:null},"Params (with data type)"),(0,o.kt)("th",{parentName:"tr",align:null},"Use"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"addButton"),(0,o.kt)("td",{parentName:"tr",align:null},"button: ",(0,o.kt)("a",{parentName:"td",href:"#buttonprop"},"ButtonProp")),(0,o.kt)("td",{parentName:"tr",align:null},"Adds a button with the given config to the control bar at the bottom and returns the index number of the newly added button")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"removeButton"),(0,o.kt)("td",{parentName:"tr",align:null},"button: number"),(0,o.kt)("td",{parentName:"tr",align:null},"Removes the button with given index number from the bottom control bar")))),(0,o.kt)("h2",{id:"buttonprop"},"ButtonProp"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property name"),(0,o.kt)("th",{parentName:"tr",align:null},"Data type"),(0,o.kt)("th",{parentName:"tr",align:null},"Use"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"icon"),(0,o.kt)("td",{parentName:"tr",align:null},"HTMLElement"),(0,o.kt)("td",{parentName:"tr",align:null},"The icon to show on the button")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"label"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"The text label to show on the button")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"position"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"Position of the button with respect to the button groups on the control bar - ",(0,o.kt)("inlineCode",{parentName:"td"},"left"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"center")," and ",(0,o.kt)("inlineCode",{parentName:"td"},"right")," (the button is always added to the end of chosen section)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"onClick"),(0,o.kt)("td",{parentName:"tr",align:null},"Function"),(0,o.kt)("td",{parentName:"tr",align:null},"Your handler for the click of this button")))))}m.isMDXComponent=!0}}]);
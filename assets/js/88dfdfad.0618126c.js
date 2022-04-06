"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[48512],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=p(n),m=a,g=s["".concat(u,".").concat(m)]||s[m]||c[m]||i;return n?r.createElement(g,l(l({ref:t},d),{},{components:n})):r.createElement(g,l({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=s;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},81357:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return d},default:function(){return s}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=["components"],o={sidebar_position:1},u="DyteMeeting (Flutter widget)",p={unversionedId:"reference/dyte-meeting",id:"version-0.3.x/reference/dyte-meeting",isDocsHomePage:!1,title:"DyteMeeting (Flutter widget)",description:"DyteMeeting is a Flutter widget that can be used in your Flutter application to show the Dyte Meeting UI.",source:"@site/flutter_versioned_docs/version-0.3.x/reference/dyte-meeting.mdx",sourceDirName:"reference",slug:"/reference/dyte-meeting",permalink:"/flutter/0.3.x/reference/dyte-meeting",editUrl:"https://github.com/dyte-in/docs/tree/main/flutter_versioned_docs/version-0.3.x/reference/dyte-meeting.mdx",tags:[],version:"0.3.x",lastUpdatedBy:"Kushagra Vaish",lastUpdatedAt:1649225637,formattedLastUpdatedAt:"4/6/2022",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"version-0.3.2/mainSidebar",previous:{title:"Sample app",permalink:"/flutter/0.3.x/sample-app"},next:{title:"DyteMeetingHandler",permalink:"/flutter/0.3.x/reference/meeting"}},d=[{value:"Properties",id:"properties",children:[]}],c={toc:d};function s(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"dytemeeting-flutter-widget"},"DyteMeeting (Flutter widget)"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"DyteMeeting")," is a Flutter widget that can be used in your Flutter application to show the Dyte Meeting UI."),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property name"),(0,i.kt)("th",{parentName:"tr",align:null},"Data type"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Use"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"onInit"),(0,i.kt)("td",{parentName:"tr",align:null},"function(meeting: DyteMeetingHandler)"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"On successful meeting creation, returns the meeting to the callback function provided (see ",(0,i.kt)("a",{parentName:"td",href:"./meeting"},"DyteMeetingHandler object")," for more details)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"authToken"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"Auth token for the particpant")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"roomName"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"Meeting name to join")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"showSetupScreen"),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"No (defaults to ",(0,i.kt)("inlineCode",{parentName:"td"},"false"),")"),(0,i.kt)("td",{parentName:"tr",align:null},"Show audio / video setup screen to the participant")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"autoTune"),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"No (defaults to ",(0,i.kt)("inlineCode",{parentName:"td"},"true"),")"),(0,i.kt)("td",{parentName:"tr",align:null},"Dyte uses VP9 codec by default, but switches to H264/VP8 depending on participants video codec support. VP9 is a superior codec but not all browsers support it. If you disable ",(0,i.kt)("inlineCode",{parentName:"td"},"autoTune")," Dyte will use VP8 by default.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"uiConfig"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"./dyte-ui-config"},"<String, dynamic>")),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"To customize ui meeting")))))}s.isMDXComponent=!0}}]);
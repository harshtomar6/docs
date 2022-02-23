"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[97041],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=d(n),g=a,s=m["".concat(p,".").concat(g)]||m[g]||c[g]||i;return n?r.createElement(s,l(l({ref:t},u),{},{components:n})):r.createElement(s,l({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},71788:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return u},default:function(){return m}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=["components"],o={sidebar_position:3},p="DyteMeeting",d={unversionedId:"reference/meeting",id:"version-0.1.x/reference/meeting",isDocsHomePage:!1,title:"DyteMeeting",description:"Properties",source:"@site/android_versioned_docs/version-0.1.x/reference/meeting.mdx",sourceDirName:"reference",slug:"/reference/meeting",permalink:"/android/0.1.x/reference/meeting",tags:[],version:"0.1.x",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"version-0.1.30/mainSidebar",previous:{title:"MeetingConfig",permalink:"/android/0.1.x/reference/connection-config"},next:{title:"DyteParticipant",permalink:"/android/0.1.x/reference/participant"}},u=[{value:"Properties",id:"properties",children:[]},{value:"Methods",id:"methods",children:[]},{value:"Interfaces",id:"interfaces",children:[]},{value:"BackgroundBehaviourType",id:"backgroundbehaviourtype",children:[]}],c={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"dytemeeting"},"DyteMeeting"),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property name"),(0,i.kt)("th",{parentName:"tr",align:null},"Data type"),(0,i.kt)("th",{parentName:"tr",align:null},"Use"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"config"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"./connection-config"},"MeetingConfig")),(0,i.kt)("td",{parentName:"tr",align:null},"Connection info about the current meeting in progress, as defined below")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"participants"),(0,i.kt)("td",{parentName:"tr",align:null},"ArrayList <",(0,i.kt)("a",{parentName:"td",href:"./participant"},"DyteParticipant"),">"),(0,i.kt)("td",{parentName:"tr",align:null},"Array of participants, including the current participant (see ",(0,i.kt)("a",{parentName:"td",href:"./../advanced-usage#controlling-individual-participants-and-actions"},"participant controls and actions")," for more info)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"self"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"./self-participant"},"DyteSelfParticipant")),(0,i.kt)("td",{parentName:"tr",align:null},"The current participant (see ",(0,i.kt)("a",{parentName:"td",href:"./../advanced-usage#replace-the-meeting-control-buttons-with-your-own-buttons"},"self participant controls")," for more info)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"backgroundBehaviour"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#backgroundbehaviourtype"},"BackgroundBehaviourType")),(0,i.kt)("td",{parentName:"tr",align:null},"Defines the meeting view behaviour for when the app is moved to background")))),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Method name"),(0,i.kt)("th",{parentName:"tr",align:null},"Params (with data type)"),(0,i.kt)("th",{parentName:"tr",align:null},"Use"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"setup"),(0,i.kt)("td",{parentName:"tr",align:null},"config: ",(0,i.kt)("a",{parentName:"td",href:"./connection-config"},"MeetingConfig")),(0,i.kt)("td",{parentName:"tr",align:null},"Setup a Dyte meeting with given config parameters")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"updateUIConfig"),(0,i.kt)("td",{parentName:"tr",align:null},"uiConfig: String (which is stringified JSON of ",(0,i.kt)("a",{parentName:"td",href:"./dyte-ui-config"},"DyteUIConfig"),")"),(0,i.kt)("td",{parentName:"tr",align:null},"Change the UI and layout of the current meeting according to the relevant params specified in the object (see ",(0,i.kt)("a",{parentName:"td",href:"./../customize-meeting-ui"},"customize the meeting UI")," for available options)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"init"),(0,i.kt)("td",{parentName:"tr",align:null},"activity: Activity, width: Integer, height: Integer"),(0,i.kt)("td",{parentName:"tr",align:null},"Initialize a view of given ",(0,i.kt)("inlineCode",{parentName:"td"},"width")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"height")," with Dyte meeting, as a part of view heirarchy under the given ",(0,i.kt)("inlineCode",{parentName:"td"},"activity"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"addEventListener"),(0,i.kt)("td",{parentName:"tr",align:null},"eventListener: ",(0,i.kt)("a",{parentName:"td",href:"./dyte-meeting-events"},"MeetingEventListener")),(0,i.kt)("td",{parentName:"tr",align:null},"Add an event listener to the meeting")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"removeEventListener"),(0,i.kt)("td",{parentName:"tr",align:null},"eventListener: ",(0,i.kt)("a",{parentName:"td",href:"./dyte-meeting-events"},"MeetingEventListener")),(0,i.kt)("td",{parentName:"tr",align:null},"Remove an event listener from the meeting")))),(0,i.kt)("h2",{id:"interfaces"},"Interfaces"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Interface"),(0,i.kt)("th",{parentName:"tr",align:null},"Purpose"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"./dyte-meeting-events"},"MeetingEventListener")),(0,i.kt)("td",{parentName:"tr",align:null},"Helper interface for adding event listeners to the meeting")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"./dyte-errors"},"MeetingErrorListener")),(0,i.kt)("td",{parentName:"tr",align:null},"Helper interface for adding error listeners to the meeting")))),(0,i.kt)("h2",{id:"backgroundbehaviourtype"},"BackgroundBehaviourType"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Behaviour Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Effect"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"PICTURE_IN_PICTURE"),(0,i.kt)("td",{parentName:"tr",align:null},"Puts the meeting view in picture in picture mode, and continues with capturing the participant video")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"DISABLE_CAMERA_CAPTURE"),(0,i.kt)("td",{parentName:"tr",align:null},"Puts the meeting view in background (same as the app), and stops capturing participant video")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"CONTINUE_CAMERA_CAPTURE"),(0,i.kt)("td",{parentName:"tr",align:null},"Puts the meeting view in background (same as the app), but continues with capturing the participant video")))))}m.isMDXComponent=!0}}]);
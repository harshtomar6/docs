"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[48534],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return u}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,g=m["".concat(l,".").concat(u)]||m[u]||d[u]||i;return n?r.createElement(g,o(o({ref:t},s),{},{components:n})):r.createElement(g,o({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},23454:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return s},default:function(){return m}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],c={sidebar_position:7},l="DyteMeetingViewDelegate",p={unversionedId:"reference/dyte-meeting-events",id:"version-1.12/reference/dyte-meeting-events",isDocsHomePage:!1,title:"DyteMeetingViewDelegate",description:"DyteMeetingViewDelegate is a protocol that enlists different events that can occur in between a meeting.",source:"@site/ios_versioned_docs/version-1.12/reference/dyte-meeting-events.mdx",sourceDirName:"reference",slug:"/reference/dyte-meeting-events",permalink:"/ios/1.12/reference/dyte-meeting-events",editUrl:"https://github.com/dyte-in/docs/tree/main/ios_versioned_docs/version-1.12/reference/dyte-meeting-events.mdx",tags:[],version:"1.12",lastUpdatedBy:"Vaibhav Shinde",lastUpdatedAt:1647414710,formattedLastUpdatedAt:"3/16/2022",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"version-1.12/mainSidebar",previous:{title:"DyteSelfParticipant",permalink:"/ios/1.12/reference/self-participant"}},s=[],d={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"dytemeetingviewdelegate"},"DyteMeetingViewDelegate"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"DyteMeetingViewDelegate")," is a protocol that enlists different events that can occur in between a meeting."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-objectivec"},"- (void) meetingConnected;\n- (void) meetingJoined;\n- (void) meetingDisconnect;\n- (void) meetingEnded;\n- (void) participantJoin: (DyteParticipant *) participant;\n- (void) participantLeave: (DyteParticipant *) participant;\n- (void) activeSpeaker: (NSString *) peerId;\n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Event"),(0,i.kt)("th",{parentName:"tr",align:null},"Triggered when"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"meetingConnected"),(0,i.kt)("td",{parentName:"tr",align:null},"the participant has connected to the meeting but hasn\u2019t started producing or consuming content streams - think of this as establishing a successful connection to the meeting and nothing else")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"meetingJoined"),(0,i.kt)("td",{parentName:"tr",align:null},"the participant actually joins the meeting, and can start producing as well as consuming content streams")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"meetingDisconnect"),(0,i.kt)("td",{parentName:"tr",align:null},"the participant gets disconnected from the meeting for any reason")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"meetingEnded"),(0,i.kt)("td",{parentName:"tr",align:null},"the meeting is ended by the host or by the organization (as an admin function)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"participantJoin"),(0,i.kt)("td",{parentName:"tr",align:null},'another participant joins the meeting ("join" here as the same context as the ',(0,i.kt)("inlineCode",{parentName:"td"},"meetingJoined")," event)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"participantLeave"),(0,i.kt)("td",{parentName:"tr",align:null},'another participant disconnects from the meeting ("disconnect" here as the same context as the ',(0,i.kt)("inlineCode",{parentName:"td"},"disconnect")," event)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"activeSpeaker"),(0,i.kt)("td",{parentName:"tr",align:null},"the active speaker in the meeting changes - active speaker is the participant whose audio level has most recently been the highest (kind of like LRU with the selection factor being audio level)")))))}m.isMDXComponent=!0}}]);
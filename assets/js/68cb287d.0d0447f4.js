"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[3212],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=i.createContext({}),l=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=l(e.components);return i.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(t),m=r,g=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return t?i.createElement(g,o(o({ref:n},s),{},{components:t})):i.createElement(g,o({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=d;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<a;l++)o[l]=t[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},23334:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return s},default:function(){return d}});var i=t(87462),r=t(63366),a=(t(67294),t(3905)),o=["components"],c={sidebar_position:3},p="Basic Usage",l={unversionedId:"usage",id:"version-0.18.x/usage",isDocsHomePage:!1,title:"Basic Usage",description:"Include Dyte Meeting in your app",source:"@site/javascript_versioned_docs/version-0.18.x/usage.mdx",sourceDirName:".",slug:"/usage",permalink:"/javascript/0.18.x/usage",tags:[],version:"0.18.x",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"version-0.18.x/mainSidebar",previous:{title:"Quickstart",permalink:"/javascript/0.18.x/quickstart"},next:{title:"Customize the meeting UI",permalink:"/javascript/0.18.x/customize-meeting-ui"}},s=[{value:"Include Dyte Meeting in your app",id:"include-dyte-meeting-in-your-app",children:[{value:"Pass Client ID for verification",id:"pass-client-id-for-verification",children:[]},{value:"Configure the meeting connection",id:"configure-the-meeting-connection",children:[]},{value:"Initialize the meeting in its parent container",id:"initialize-the-meeting-in-its-parent-container",children:[]}]}],u={toc:s};function d(e){var n=e.components,t=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"basic-usage"},"Basic Usage"),(0,a.kt)("h2",{id:"include-dyte-meeting-in-your-app"},"Include Dyte Meeting in your app"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"DyteClient")," is a JavaScript library that can be included in your JavaScript application to show the Dyte Meeting UI."),(0,a.kt)("p",null,"It has a ",(0,a.kt)("a",{parentName:"p",href:"./reference/meeting"},(0,a.kt)("inlineCode",{parentName:"a"},"Meeting"))," component which can be initialized using 2 mandatory and 2 optional properties. The mandatory ones are defined below along with their usage, and the optional ones can be found ",(0,a.kt)("a",{parentName:"p",href:"./advanced-usage#turn-on-the-setup--preview-screen"},"here in the advanced usage")," page."),(0,a.kt)("h3",{id:"pass-client-id-for-verification"},"Pass Client ID for verification"),(0,a.kt)("p",null,"You need to pass a ",(0,a.kt)("inlineCode",{parentName:"p"},"clientId")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"DyteClient")," to verify the participant's ",(0,a.kt)("inlineCode",{parentName:"p"},"authToken")," against."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:"{2}","{2}":!0},'<script>\n  const client = new DyteClient({ clientId: "orgId|clientId" });\n<\/script>\n')),(0,a.kt)("h3",{id:"configure-the-meeting-connection"},"Configure the meeting connection"),(0,a.kt)("p",null,"You need to pass a ",(0,a.kt)("inlineCode",{parentName:"p"},"meetingConfig")," object to initialize the ",(0,a.kt)("inlineCode",{parentName:"p"},"Meeting"),", to define which meeting should the client connect to and a couple of other setup parameters, out of which only ",(0,a.kt)("inlineCode",{parentName:"p"},"authToken")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"roomName")," are mandatory. This ",(0,a.kt)("inlineCode",{parentName:"p"},"Meeting")," reference can be used to take further actions and make customizations to the meeting."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:"{4-7}","{4-7}":!0},'<script>\n  const client = new DyteClient({ clientId: "orgId|clientId" });\n\n  const meeting = client.Meeting({\n    roomName: "<roomName>",\n    authToken: "<authToken>",\n  });\n<\/script>\n')),(0,a.kt)("h3",{id:"initialize-the-meeting-in-its-parent-container"},"Initialize the meeting in its parent container"),(0,a.kt)("p",null,"You need to call the ",(0,a.kt)("inlineCode",{parentName:"p"},"init")," method on ",(0,a.kt)("inlineCode",{parentName:"p"},"meeting")," and pass it the ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," of the parent container in which you want the meeting to get initialized."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:"{9}","{9}":!0},'<script>\n  const client = new DyteClient({ clientId: "orgId|clientId" });\n\n  const meeting = client.Meeting({\n    roomName: "<roomName>",\n    authToken: "<authToken>",\n  });\n\n  meeting.init("root");\n<\/script>\n')))}d.isMDXComponent=!0}}]);
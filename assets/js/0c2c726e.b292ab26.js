"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[35771],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(r),d=o,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return r?n.createElement(f,a(a({ref:t},c),{},{components:r})):n.createElement(f,a({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},77676:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],s={sidebar_position:3},l="Livestreaming Dyte Meetings to other platforms",p={unversionedId:"livestreaming-other-platforms",id:"livestreaming-other-platforms",isDocsHomePage:!1,title:"Livestreaming Dyte Meetings to other platforms",description:"Dyte can livestream your meeting to any platform which supports an RTMP endpoint like YouTube, Twitch etc. All you need to do is pass that RTMP endpoint while you start the recording.",source:"@site/docs/guides/livestreaming-other-platforms.mdx",sourceDirName:".",slug:"/livestreaming-other-platforms",permalink:"/guides/livestreaming-other-platforms",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"mySidebar",previous:{title:"Recording your meetings via Dyte",permalink:"/guides/recording-your-meetings"},next:{title:"Livestreaming Dyte Meeting to HLS",permalink:"/guides/livestreaming-rtmp-hls"}},c=[{value:"Considerations",id:"considerations",children:[]}],u={toc:c};function m(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"livestreaming-dyte-meetings-to-other-platforms"},"Livestreaming Dyte Meetings to other platforms"),(0,i.kt)("p",null,"Dyte can livestream your meeting to any platform which supports an RTMP endpoint like YouTube, Twitch etc. All you need to do is pass that RTMP endpoint while you ",(0,i.kt)("a",{parentName:"p",href:"/api/#/operations/start_recording"},"start the recording"),"."),(0,i.kt)("p",null,"For example, if you want to stream it to ",(0,i.kt)("a",{parentName:"p",href:"https://restream.io"},"restream.io"),", you can do:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"curl --request POST \\\n  --url https://api.dyte.in/v1/organizations/orgid/meetings/meetingid/recording \\\n  --header 'Authorization: APIKEY yourapi-key' \\\n  --header 'Content-Type: application/json' \\\n  --data '{\n    \"liveStreamingConfig\": {\n        \"rtmpUrl\": \"rtmp://live.restream.io/live/your-stream-key\"\n    }\n}'\n")),(0,i.kt)("p",null,"And it just works \ud83d\ude4c"),(0,i.kt)("h3",{id:"considerations"},"Considerations"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Currently, you need to ",(0,i.kt)("a",{parentName:"li",href:"/api/#/operations/start_recording"},"start a recording")," to live stream your content."),(0,i.kt)("li",{parentName:"ol"},"There is few seconds of lag between the meeting and the stream.")))}m.isMDXComponent=!0}}]);
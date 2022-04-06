"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[39286],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return p}});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=c(n),p=o,h=u["".concat(s,".").concat(p)]||u[p]||d[p]||a;return n?i.createElement(h,r(r({ref:t},m),{},{components:n})):i.createElement(h,r({ref:t},m))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var c=2;c<a;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},21315:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return m},toc:function(){return d},default:function(){return p}});var i=n(87462),o=n(63366),a=(n(67294),n(3905)),r=n(61422),l=["components"],s={sidebar_position:4},c="Customize the meeting UI",m={unversionedId:"customize-meeting-ui",id:"version-0.2.x/customize-meeting-ui",isDocsHomePage:!1,title:"Customize the meeting UI",description:"Dyte offers a host of customizations for the UI of meetings, some of which also defines the interactions the participants can have within a meeting room. While the initial values for these options are picked up from the preset used to generate the authToken, you can override them at the client end based on specific use cases or events. There are 2 ways to update the config:",source:"@site/react-native_versioned_docs/version-0.2.x/customize-meeting-ui.mdx",sourceDirName:".",slug:"/customize-meeting-ui",permalink:"/react-native/0.2.x/customize-meeting-ui",editUrl:"https://github.com/dyte-in/docs/tree/main/react-native_versioned_docs/version-0.2.x/customize-meeting-ui.mdx",tags:[],version:"0.2.x",lastUpdatedBy:"Kushagra Vaish",lastUpdatedAt:1649225637,formattedLastUpdatedAt:"4/6/2022",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"version-0.2.0/mainSidebar",previous:{title:"Basic Usage",permalink:"/react-native/0.2.x/usage"},next:{title:"Advanced usage",permalink:"/react-native/0.2.x/advanced-usage"}},d=[{value:"Set your logo in the meeting room",id:"set-your-logo-in-the-meeting-room",children:[]},{value:"Change the color scheme to your brand / theme",id:"change-the-color-scheme-to-your-brand--theme",children:[]},{value:"Adjust the meeting size to a custom container",id:"adjust-the-meeting-size-to-a-custom-container",children:[]},{value:"Make the meeting fit your container size (dynamic)",id:"make-the-meeting-fit-your-container-size-dynamic",children:[]},{value:"Hide the bottom control bar",id:"hide-the-bottom-control-bar",children:[]},{value:"Hide individual controls from the bottom control bar",id:"hide-individual-controls-from-the-bottom-control-bar",children:[]},{value:"Hide the header bar",id:"hide-the-header-bar",children:[]},{value:"Hide individual controls from the header bar",id:"hide-individual-controls-from-the-header-bar",children:[]},{value:"Customize waiting room",id:"customize-waiting-room",children:[]}],u={toc:d};function p(e){var t=e.components,s=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,i.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"customize-the-meeting-ui"},"Customize the meeting UI"),(0,a.kt)("p",null,"Dyte offers a host of customizations for the UI of meetings, some of which also defines the interactions the participants can have within a meeting room. While the initial values for these options are picked up from the ",(0,a.kt)("a",{parentName:"p",href:"/docs/home/introduction#glossary"},(0,a.kt)("inlineCode",{parentName:"a"},"preset"))," used to generate the ",(0,a.kt)("inlineCode",{parentName:"p"},"authToken"),", you can override them at the client end based on specific use cases or events. There are 2 ways to update the config:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"pass the config options at the time of initiating a meeting.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{8}","{8}":!0},"<DyteMeeting\n    onInit={(meeting) => { }}\n    clientId=`yourClientID`\n    meetingConfig={{\n        roomName: `roomName`,\n        authToken: `authToken`\n    }}\n    uiConfig={uiConfigOptions}\n>\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"call the ",(0,a.kt)("inlineCode",{parentName:"li"},"updateUIConfig")," method on ",(0,a.kt)("a",{parentName:"li",href:"./reference/meeting"},(0,a.kt)("inlineCode",{parentName:"a"},"meeting")," instance")," and pass the ",(0,a.kt)("a",{parentName:"li",href:"./reference/dyte-ui-config"},(0,a.kt)("inlineCode",{parentName:"a"},"uiConfigOptions"))," as a parameter to this call")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"meeting.updateUIConfig(uiConfigOptions);\n")),(0,a.kt)("p",null,"Described below are various different options that you can customize in a meeting. The complete reference for UI config options can be found ",(0,a.kt)("a",{parentName:"p",href:"./reference/dyte-ui-config"},"here"),"."),(0,a.kt)("p",null,"Here is a pictorial representation of all the config options defined below."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"meeting UI screenshot with labeled parts",src:n(19310).Z})),(0,a.kt)("h2",{id:"set-your-logo-in-the-meeting-room"},"Set your logo in the meeting room"),(0,a.kt)("p",null,"You can change the logo in the meeting room to reflect your brand or your organization."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"logo: logoUrlString;\n")),(0,a.kt)("h2",{id:"change-the-color-scheme-to-your-brand--theme"},"Change the color scheme to your brand / theme"),(0,a.kt)("p",null,"You can change the color scheme of the meeting to reflect your brand and theme. Dyte allows you to specify four color values."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"primary"),": color of the primary elements like participant name box"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"secondary"),": color of the secondary elements like control bar, control buttons, hover"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"textPrimary"),": color of the text elements"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"videoBackground"),": color behind the video when the video is turned off")),(0,a.kt)("p",null,"The default values for each of these are shown in the below example. Remember to specify all the colors, otherwise this feature won't work."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"colors: {\n    primary:         '#2160FD',\n    secondary:       '#262626',\n    textPrimary:     '#EEEEEE',\n    videoBackground: '#1A1A1A'\n}\n")),(0,a.kt)(r.Z,{src:"/ui-customizations/mobile/mobile-themes.mp4",mobile:!0,mdxType:"VideoPlayer"}),(0,a.kt)("h2",{id:"adjust-the-meeting-size-to-a-custom-container"},"Adjust the meeting size to a custom container"),(0,a.kt)("p",null,"The default behaviour of a meeting on Dyte is to take up the full viewport. However, if you want to customize the size of a meeting to fit within a certain container or ",(0,a.kt)("inlineCode",{parentName:"p"},"div"),", you can do so by specifying the ",(0,a.kt)("inlineCode",{parentName:"p"},"width")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"height")," under ",(0,a.kt)("inlineCode",{parentName:"p"},"dimensions")," as numerical values which are taken as pixels (",(0,a.kt)("inlineCode",{parentName:"p"},"px")," in CSS). Remember to specify both, otherwise this feature won't work."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"dimensions?: {\n    width:  400,\n    height: 800\n}\n")),(0,a.kt)("h2",{id:"make-the-meeting-fit-your-container-size-dynamic"},"Make the meeting fit your container size (dynamic)"),(0,a.kt)("p",null,"Similarly, if you want to make the size of a meeting dynamically fit to within the bounds of its parent container or ",(0,a.kt)("inlineCode",{parentName:"p"},"div"),", you can do so by specifying the ",(0,a.kt)("inlineCode",{parentName:"p"},"mode")," under ",(0,a.kt)("inlineCode",{parentName:"p"},"dimensions")," and set the value to ",(0,a.kt)("inlineCode",{parentName:"p"},"fillParent"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"dimensions?: {\n    mode: 'fillParent'\n}\n")),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Use either the ",(0,a.kt)("inlineCode",{parentName:"p"},"width")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"height")," OR the ",(0,a.kt)("inlineCode",{parentName:"p"},"mode")," under ",(0,a.kt)("inlineCode",{parentName:"p"},"dimensions"),", but not both."))),(0,a.kt)("h2",{id:"hide-the-bottom-control-bar"},"Hide the bottom control bar"),(0,a.kt)("p",null,"You can hide the bottom control bar by setting ",(0,a.kt)("inlineCode",{parentName:"p"},"controlBar")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," in config. The default value is ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", which means the control bar is visible."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"controlBar: true;\n")),(0,a.kt)(r.Z,{src:"/ui-customizations/mobile/mobile-control-bar.mp4",mobile:!0,mdxType:"VideoPlayer"}),(0,a.kt)("h2",{id:"hide-individual-controls-from-the-bottom-control-bar"},"Hide individual controls from the bottom control bar"),(0,a.kt)("p",null,"You can hide individual controls from the bottom control bar by setting their respective options to ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," in the config. The default value is ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," for all controls, which means all the controls are visible."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"controlBarElements: {\n    fullscreen:   true,\n    share:        true,\n    screenShare:  true,\n    layout:       true,\n    chat:         true,\n    polls:        true,\n    participants: true,\n    plugins:      true\n}\n")),(0,a.kt)(r.Z,{src:"/ui-customizations/mobile/mobile-control-bar-elements.mp4",mobile:!0,mdxType:"VideoPlayer"}),(0,a.kt)("h2",{id:"hide-the-header-bar"},"Hide the header bar"),(0,a.kt)("p",null,"You can hide the header bar by setting ",(0,a.kt)("inlineCode",{parentName:"p"},"header")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," in config. The default value is ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", which means the header is visible."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"header: true;\n")),(0,a.kt)(r.Z,{src:"/ui-customizations/mobile/mobile-header.mp4",mobile:!0,mdxType:"VideoPlayer"}),(0,a.kt)("h2",{id:"hide-individual-controls-from-the-header-bar"},"Hide individual controls from the header bar"),(0,a.kt)("p",null,"You can hide individual elements from the header bar by setting their respective options to ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," in the config. The default value is ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," for all elements, which means all the elements are visible."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"headerElements: {\n    logo:             true,\n    title:            true,\n    participantCount: true,\n    clock:            true\n}\n")),(0,a.kt)("h2",{id:"customize-waiting-room"},"Customize waiting room"),(0,a.kt)("p",null,"If you have enabled waiting room in the ",(0,a.kt)("inlineCode",{parentName:"p"},"role"),", the participant will be put in an empty zone until the host joins and / or lets them in. You can choose the exact HTML to be rendered while the participant is in the waiting room (such as an infographic or play a video or display info about your org) by setting the ",(0,a.kt)("inlineCode",{parentName:"p"},"element")," to a ReactNode or an HTMLElement, and whether the participant sees their own video while in the waiting room using ",(0,a.kt)("inlineCode",{parentName:"p"},"showSelfVideo")," (which is ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," by default)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"waitingRoom: {\n    showSelfVideo: true,\n    element:       ReactNode|HTMLElement\n}\n")))}p.isMDXComponent=!0},61422:function(e,t,n){var i=n(87462),o=n(63366),a=n(67294),r=n(86010),l=n(45697),s=["src","mobile"],c=function(e){var t=e.src,n=e.mobile,l=(0,o.Z)(e,s);return a.createElement("video",(0,i.Z)({className:(0,r.default)("dyte-video-showcase",n&&"mobile"),src:t,autoPlay:!0,loop:!0,controls:!1,muted:!0},l))};c.propTypes={src:l.string,mobile:l.bool},t.Z=c},86010:function(e,t,n){function i(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=i(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=i(e))&&(o&&(o+=" "),o+=t);return o}n.r(t),n.d(t,{default:function(){return o}})},19310:function(e,t,n){t.Z=n.p+"assets/images/mobile-meeting-ui-7d5049d1b44d22c253cee52c808fede0.png"}}]);
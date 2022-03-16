"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[79218],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=i,g=p["".concat(s,".").concat(m)]||p[m]||d[m]||r;return n?a.createElement(g,o(o({ref:t},u),{},{components:n})):a.createElement(g,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},77164:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return p},default:function(){return g}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),o=n(55064),l=n(58215),s=["components"],c={sidebar_position:6},u="Events",d={unversionedId:"events",id:"version-1.23/events",isDocsHomePage:!1,title:"Events",description:"To integrate well with modern workflows, Dyte SDK also emits a rich set of events on meeting events and state changes. Using these events on the client side, you can make your app event driven and respond to changes in the meeting in real-time. You can subscribe to the following events on the DyteMeetingViewDelegate. To do this, you need to set the delegate for DyteMeetingView to an object (such as self) that implements the DyteMeetingViewDelegate protocol. The methods in this protocol correspond to events for the given meeting.",source:"@site/ios_versioned_docs/version-1.23/events.mdx",sourceDirName:".",slug:"/events",permalink:"/ios/1.23/events",editUrl:"https://github.com/dyte-in/docs/tree/main/ios_versioned_docs/version-1.23/events.mdx",tags:[],version:"1.23",lastUpdatedBy:"Vaibhav Shinde",lastUpdatedAt:1647414710,formattedLastUpdatedAt:"3/16/2022",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"version-1.23/mainSidebar",previous:{title:"Advanced usage",permalink:"/ios/1.23/advanced-usage"},next:{title:"Sample app",permalink:"/ios/1.23/sample-app"}},p=[{value:"Connected to the meeting",id:"connected-to-the-meeting",children:[]},{value:"Joined the meeting",id:"joined-the-meeting",children:[]},{value:"Disconnected from the meeting",id:"disconnected-from-the-meeting",children:[]},{value:"End of the meeting",id:"end-of-the-meeting",children:[]},{value:"Another participant joins the meeting",id:"another-participant-joins-the-meeting",children:[]},{value:"Another participant leaves the meeting",id:"another-participant-leaves-the-meeting",children:[]},{value:"Receiving a custom broadcast event",id:"receiving-a-custom-broadcast-event",children:[]},{value:"Receiving a custom targeted event",id:"receiving-a-custom-targeted-event",children:[]},{value:"Detecting change in active speaker",id:"detecting-change-in-active-speaker",children:[]}],m={toc:p};function g(e){var t=e.components,n=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"events"},"Events"),(0,r.kt)("p",null,"To integrate well with modern workflows, Dyte SDK also emits a rich set of events on meeting events and state changes. Using these events on the client side, you can make your app event driven and respond to changes in the meeting in real-time. You can subscribe to the following events on the ",(0,r.kt)("a",{parentName:"p",href:"./reference/dyte-meeting-events"},(0,r.kt)("inlineCode",{parentName:"a"},"DyteMeetingViewDelegate")),". To do this, you need to set the ",(0,r.kt)("inlineCode",{parentName:"p"},"delegate")," for ",(0,r.kt)("inlineCode",{parentName:"p"},"DyteMeetingView")," to an object (such as ",(0,r.kt)("inlineCode",{parentName:"p"},"self"),") that implements the ",(0,r.kt)("inlineCode",{parentName:"p"},"DyteMeetingViewDelegate")," protocol. The methods in this protocol correspond to events for the given meeting."),(0,r.kt)(o.Z,{groupId:"ios-language",defaultValue:"swift",values:[{label:"Swift",value:"swift"},{label:"Obj-C",value:"obj-c"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"swift",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"dyteView.delegate = self\n"))),(0,r.kt)(l.Z,{value:"obj-c",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},"dyteView.delegate = self;\n")))),(0,r.kt)("p",null,"While the delegate methods can now directly be implemented by the class that ",(0,r.kt)("inlineCode",{parentName:"p"},"self")," refers to if you are using Objective-C, you will have to go a little roundabout way if you are using Swift. You would need to create an extension of the class that extends the class using the protocol, and then from the delegate method inside this extension you would need to call a private function of the base class."),(0,r.kt)("p",null,"Remember the golden rule of thumb for iOS: all UI related operations need to be dispatched on the ",(0,r.kt)("inlineCode",{parentName:"p"},"mainQueue"),". Since delegates are asynchronous and are not guaranteed to be called on the ",(0,r.kt)("inlineCode",{parentName:"p"},"mainQueue"),", any delegates methods that deal with UI need to explicitly specify the thread for such operations."),(0,r.kt)("h3",{id:"connected-to-the-meeting"},"Connected to the meeting"),(0,r.kt)("p",null,"This event is triggered when the participant has connected to the meeting but hasn't started producing or consuming content streams. Think of this as establishing a successful connection to the meeting and nothing else."),(0,r.kt)(o.Z,{groupId:"ios-language",defaultValue:"swift",values:[{label:"Swift",value:"swift"},{label:"Obj-C",value:"obj-c"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"swift",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"extension ViewController: DyteMeetingViewDelegate {\n    func meetingConnected() {\n    }\n}\n"))),(0,r.kt)(l.Z,{value:"obj-c",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},"- (void) meetingConnected {\n}\n")))),(0,r.kt)("h3",{id:"joined-the-meeting"},"Joined the meeting"),(0,r.kt)("p",null,"This event is triggered when the participant actually joins the meeting, and can start producing as well as consuming content streams."),(0,r.kt)(o.Z,{groupId:"ios-language",defaultValue:"swift",values:[{label:"Swift",value:"swift"},{label:"Obj-C",value:"obj-c"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"swift",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"extension ViewController: DyteMeetingViewDelegate {\n    func meetingJoined() {\n    }\n}\n"))),(0,r.kt)(l.Z,{value:"obj-c",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},"- (void) meetingJoined {\n}\n")))),(0,r.kt)("h3",{id:"disconnected-from-the-meeting"},"Disconnected from the meeting"),(0,r.kt)("p",null,"This event is triggered when the participant gets disconnected from the meeting for any reason. It could be a bad network connection, the meeting being exited by the participant manually, the meeting tab / browser / app being closed by the participant, or just any other reason."),(0,r.kt)(o.Z,{groupId:"ios-language",defaultValue:"swift",values:[{label:"Swift",value:"swift"},{label:"Obj-C",value:"obj-c"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"swift",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"extension ViewController: DyteMeetingViewDelegate {\n    func meetingDisconnect() {\n    }\n}\n"))),(0,r.kt)(l.Z,{value:"obj-c",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},"- (void) meetingDisconnect {\n}\n")))),(0,r.kt)("h3",{id:"end-of-the-meeting"},"End of the meeting"),(0,r.kt)("p",null,"This event is triggered when the meeting is ended by the host or by the organization (as an admin function). In this case, all the participants are kicked out and you can take actions such as asking for feedback or redirecting to an exercise."),(0,r.kt)(o.Z,{groupId:"ios-language",defaultValue:"swift",values:[{label:"Swift",value:"swift"},{label:"Obj-C",value:"obj-c"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"swift",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"extension ViewController: DyteMeetingViewDelegate {\n    func meetingEnded() {\n    }\n}\n"))),(0,r.kt)(l.Z,{value:"obj-c",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},"- (void) meetingEnded {\n}\n")))),(0,r.kt)("h3",{id:"another-participant-joins-the-meeting"},"Another participant joins the meeting"),(0,r.kt)("p",null,'This event is triggered when another participant joins the meeting. "Join" here as the same context as the ',(0,r.kt)("inlineCode",{parentName:"p"},"meetingJoined")," event: so when that event triggers for the a participant, this event triggers for all other participants that have already joined the meeting."),(0,r.kt)(o.Z,{groupId:"ios-language",defaultValue:"swift",values:[{label:"Swift",value:"swift"},{label:"Obj-C",value:"obj-c"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"swift",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"extension ViewController: DyteMeetingViewDelegate {\n    func participantJoin(participant) {\n    }\n}\n"))),(0,r.kt)(l.Z,{value:"obj-c",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},"- (void) participantJoin: (DyteParticipant *) participant {\n}\n")))),(0,r.kt)("h3",{id:"another-participant-leaves-the-meeting"},"Another participant leaves the meeting"),(0,r.kt)("p",null,'This event is triggered when another participant disconnects from the meeting. "Disconnect" here as the same context as the ',(0,r.kt)("inlineCode",{parentName:"p"},"disconnect")," event: so when that event triggers for the a participant, this event triggers for all other participants that have already joined the meeting."),(0,r.kt)(o.Z,{groupId:"ios-language",defaultValue:"swift",values:[{label:"Swift",value:"swift"},{label:"Obj-C",value:"obj-c"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"swift",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"extension ViewController: DyteMeetingViewDelegate {\n    func participantLeave(participant) {\n    }\n}\n"))),(0,r.kt)(l.Z,{value:"obj-c",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},"- (void) participantLeave: (DyteParticipant *) participant {\n}\n")))),(0,r.kt)("h3",{id:"receiving-a-custom-broadcast-event"},"Receiving a custom broadcast event"),(0,r.kt)("p",null,"This event is triggered when a custom message is broadcast to all participants in the meeting. A custom message may contain any serializable data."),(0,r.kt)(o.Z,{groupId:"ios-language",defaultValue:"swift",values:[{label:"Swift",value:"swift"},{label:"Obj-C",value:"obj-c"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"swift",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"extension ViewController: DyteMeetingViewDelegate {\n    func roomMessage(data) {\n    }\n}\n"))),(0,r.kt)(l.Z,{value:"obj-c",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},"- (void) roomMessage: (NSObject *) data {\n}\n")))),(0,r.kt)("h3",{id:"receiving-a-custom-targeted-event"},"Receiving a custom targeted event"),(0,r.kt)("p",null,"This event is triggered when a custom message is targeted to a particular participant in the meeting and only the target participant receives this event. A custom message may contain any serializable data."),(0,r.kt)(o.Z,{groupId:"ios-language",defaultValue:"swift",values:[{label:"Swift",value:"swift"},{label:"Obj-C",value:"obj-c"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"swift",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"extension ViewController: DyteMeetingViewDelegate {\n    func message(data) {\n    }\n}\n"))),(0,r.kt)(l.Z,{value:"obj-c",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},"- (void) message: (NSObject *) data {\n}\n")))),(0,r.kt)("h3",{id:"detecting-change-in-active-speaker"},"Detecting change in active speaker"),(0,r.kt)("p",null,"This event is triggered when the active speaker in the meeting changes. Active speaker is the participant whose audio level has most recently been the highest (kind of like LRU with the selection factor being audio level). The ",(0,r.kt)("inlineCode",{parentName:"p"},"participant")," is an instance of ",(0,r.kt)("inlineCode",{parentName:"p"},"Participant"),", whose prototype is defined below in the reference section and can be directly used as a type if you prefer using TypeScript bindings."),(0,r.kt)(o.Z,{groupId:"ios-language",defaultValue:"swift",values:[{label:"Swift",value:"swift"},{label:"Obj-C",value:"obj-c"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"swift",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"extension ViewController: DyteMeetingViewDelegate {\n    func activeSpeaker(peerId) {\n    }\n}\n"))),(0,r.kt)(l.Z,{value:"obj-c",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},"- (void) activeSpeaker: (NSString *) peerId {\n}\n")))))}g.isMDXComponent=!0},58215:function(e,t,n){var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:i},t)}},55064:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(67294),i=n(79443);var r=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=n(86010),l="tabItem_1uMI",s="tabItemActive_2DSg";var c=function(e){var t,n=e.lazy,i=e.block,c=e.defaultValue,u=e.values,d=e.groupId,p=e.className,m=a.Children.toArray(e.children),g=null!=u?u:m.map((function(e){return{value:e.props.value,label:e.props.label}})),h=null!=c?c:null==(t=m.find((function(e){return e.props.default})))?void 0:t.props.value,v=r(),f=v.tabGroupChoices,b=v.setTabGroupChoices,k=(0,a.useState)(h),y=k[0],w=k[1],T=[];if(null!=d){var j=f[d];null!=j&&j!==y&&g.some((function(e){return e.value===j}))&&w(j)}var N=function(e){var t=e.currentTarget,n=T.indexOf(t),a=g[n].value;w(a),null!=d&&(b(d,a),setTimeout((function(){var e,n,a,i,r,o,l,c;(e=t.getBoundingClientRect(),n=e.top,a=e.left,i=e.bottom,r=e.right,o=window,l=o.innerHeight,c=o.innerWidth,n>=0&&r<=c&&i<=l&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},x=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=T.indexOf(e.target)+1;n=T[a]||T[0];break;case"ArrowLeft":var i=T.indexOf(e.target)-1;n=T[i]||T[T.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.default)("tabs",{"tabs--block":i},p)},g.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,o.default)("tabs__item",l,{"tabs__item--active":y===t}),key:t,ref:function(e){return T.push(e)},onKeyDown:x,onFocus:N,onClick:N},null!=n?n:t)}))),n?(0,a.cloneElement)(m.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},m.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},79443:function(e,t,n){var a=(0,n(67294).createContext)(void 0);t.Z=a},86010:function(e,t,n){function a(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function i(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}n.r(t),n.d(t,{default:function(){return i}})}}]);
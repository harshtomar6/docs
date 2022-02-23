"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[54994],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,r(r({ref:t},l),{},{components:n})):a.createElement(h,r({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:i,r[1]=p;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},74286:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return l},default:function(){return d}});var a=n(87462),i=n(63366),o=(n(67294),n(3905)),r=["components"],p={sidebar_position:5},s="Advanced usage",c={unversionedId:"advanced-usage",id:"version-0.1.x/advanced-usage",isDocsHomePage:!1,title:"Advanced usage",description:"Turn on the setup / preview screen",source:"@site/react-native_versioned_docs/version-0.1.x/advanced-usage.mdx",sourceDirName:".",slug:"/advanced-usage",permalink:"/react-native/0.1.x/advanced-usage",tags:[],version:"0.1.x",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"version-0.1.2/mainSidebar",previous:{title:"Customize the meeting UI",permalink:"/react-native/0.1.x/customize-meeting-ui"},next:{title:"Events",permalink:"/react-native/0.1.x/events"}},l=[{value:"Turn on the setup / preview screen",id:"turn-on-the-setup--preview-screen",children:[]},{value:"Dynamic codec switching",id:"dynamic-codec-switching",children:[]},{value:"Get error details for meeting creation",id:"get-error-details-for-meeting-creation",children:[]},{value:"Control the meeting, and take meeting &amp; participant actions",id:"control-the-meeting-and-take-meeting--participant-actions",children:[]},{value:"Get info about meeting&#39;s connection configuration",id:"get-info-about-meetings-connection-configuration",children:[]},{value:"Get info about the meeting&#39;s UI configuration",id:"get-info-about-the-meetings-ui-configuration",children:[]},{value:"Get info about the plugins configured for the meeting",id:"get-info-about-the-plugins-configured-for-the-meeting",children:[]},{value:"Replace the meeting control buttons with your own buttons",id:"replace-the-meeting-control-buttons-with-your-own-buttons",children:[{value:"Mic control",id:"mic-control",children:[]},{value:"Camera control",id:"camera-control",children:[]},{value:"Leave meeting",id:"leave-meeting",children:[]}]},{value:"Send a custom message to other participants in the meeting (P2P message / data exchange)",id:"send-a-custom-message-to-other-participants-in-the-meeting-p2p-message--data-exchange",children:[]},{value:"Get list of all participants in the meeting",id:"get-list-of-all-participants-in-the-meeting",children:[]},{value:"Controlling individual participants and actions",id:"controlling-individual-participants-and-actions",children:[{value:"Get participant list",id:"get-participant-list",children:[]},{value:"Participant info and actions",id:"participant-info-and-actions",children:[]}]},{value:"Errors",id:"errors",children:[]}],u={toc:l};function d(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"advanced-usage"},"Advanced usage"),(0,o.kt)("h2",{id:"turn-on-the-setup--preview-screen"},"Turn on the setup / preview screen"),(0,o.kt)("p",null,"The audio / video setup screen that appears for the participant right before getting into the meeting is turned off by default. You can set ",(0,o.kt)("inlineCode",{parentName:"p"},"showSetupScreen")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"meetingConfig")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," to turn it on (default value is ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),")."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{7}","{7}":!0},"<DyteMeeting\n    onInit={(meeting) => { }}\n    clientId=`yourClientID`\n    meetingConfig={{\n        roomName: `roomName`,\n        authToken: `authToken`,\n        showSetupScreen: true\n    }}\n    >\n")),(0,o.kt)("h2",{id:"dynamic-codec-switching"},"Dynamic codec switching"),(0,o.kt)("p",null,"Dyte uses VP9 codec by default, but switches to H264/VP8 depending on participants' video codec support. VP9 is a superior codec but not all browsers support it. If you set ",(0,o.kt)("inlineCode",{parentName:"p"},"autoTune")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"meetingConfig")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),", Dyte will use VP8 only for all participants (default value is ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),")."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{7}","{7}":!0},"<DyteMeeting\n    onInit={(meeting) => { }}\n    clientId=`yourClientID`\n    meetingConfig={{\n        roomName: `roomName`,\n        authToken: `authToken`,\n        autoTune: false\n    }}\n    >\n")),(0,o.kt)("h2",{id:"get-error-details-for-meeting-creation"},"Get error details for meeting creation"),(0,o.kt)("p",null,"You can optionally choose to subscribe to the error details, in case an error occurs while joining a meeting from the client app, by passing an ",(0,o.kt)("inlineCode",{parentName:"p"},"onError")," prop to ",(0,o.kt)("inlineCode",{parentName:"p"},"DyteMeeting"),". ",(0,o.kt)("inlineCode",{parentName:"p"},"onError")," expects a function which has a single param of type ",(0,o.kt)("inlineCode",{parentName:"p"},"Error")," and is not expected to return anything."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{8}","{8}":!0},"<DyteMeeting\n    onInit={(meeting) => { }}\n    clientId=`yourClientID`\n    meetingConfig={{\n        roomName: `roomName`,\n        authToken: `authToken`\n    }}\n    onError={(error) => { }}\n    >\n")),(0,o.kt)("p",null,"You can refer to ",(0,o.kt)("a",{parentName:"p",href:"#errors"},"this section")," for info on errors."),(0,o.kt)("h2",{id:"control-the-meeting-and-take-meeting--participant-actions"},"Control the meeting, and take meeting & participant actions"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Meeting")," instance (referenced as ",(0,o.kt)("inlineCode",{parentName:"p"},"meeting")," above) helps you interact with the meeting. You can take actions on the meeting as well as the participants. You can also setup custom controls to that interact with the meeting in certain ways that help you send events and messages across to other participants in the meeting. You can find the complete reference to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Meeting")," type ",(0,o.kt)("a",{parentName:"p",href:"./reference/meeting"},"here"),". Read on to understand how to use these individual controls."),(0,o.kt)("h2",{id:"get-info-about-meetings-connection-configuration"},"Get info about meeting's connection configuration"),(0,o.kt)("p",null,"You can get the connection configuration of the meeting in progress using the ",(0,o.kt)("inlineCode",{parentName:"p"},"connectionConfig")," property of ",(0,o.kt)("inlineCode",{parentName:"p"},"Meeting"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"let config = meeting.connectionConfig;\n")),(0,o.kt)("p",null,"sets the value of ",(0,o.kt)("inlineCode",{parentName:"p"},"config")," to the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n  clientId: string,\n  roomName: string,\n  showSetupScreen: boolean,\n  autoTune: boolean,\n}\n")),(0,o.kt)("h2",{id:"get-info-about-the-meetings-ui-configuration"},"Get info about the meeting's UI configuration"),(0,o.kt)("p",null,"You can get the UI configuration of the meeting in progress using the ",(0,o.kt)("inlineCode",{parentName:"p"},"uiConfig")," property of ",(0,o.kt)("inlineCode",{parentName:"p"},"Meeting"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"let config = meeting.uiConfig;\n")),(0,o.kt)("p",null,"sets the value of ",(0,o.kt)("inlineCode",{parentName:"p"},"config")," to the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    controlBar: boolean,\n    controlBarElements: {\n        fullscreen:   boolean,\n        share:        boolean,\n        screenShare:  boolean,\n        layout:       boolean,\n        chat:         boolean,\n        polls:        boolean,\n        participants: boolean,\n        plugins:      boolean\n    },\n    header: boolean,\n    headerElements: {\n        logo:             boolean,\n        title:            boolean,\n        participantCount: boolean,\n        clock:            boolean\n    },\n    dimensions:{\n        width:  number,\n        height: number\n    },\n    logo: string_url,\n    colors: {\n        primary:         string_hexColor\n        secondary:       string_hexColor\n        textPrimary:     string_hexColor\n        videoBackground: string_hexColor\n    }\n}\n")),(0,o.kt)("h2",{id:"get-info-about-the-plugins-configured-for-the-meeting"},"Get info about the plugins configured for the meeting"),(0,o.kt)("p",null,"You can get info about the plugins configured for the meeting in progress using the ",(0,o.kt)("inlineCode",{parentName:"p"},"plugins")," property of ",(0,o.kt)("inlineCode",{parentName:"p"},"Meeting"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"let plugins = meeting.plugins;\n")),(0,o.kt)("p",null,"sets the value of ",(0,o.kt)("inlineCode",{parentName:"p"},"plugins")," to an array of with elements that are instances of type ",(0,o.kt)("inlineCode",{parentName:"p"},"DytePlugin"),", whose prototype is defined below in the reference section and can be directly used as a type if you prefer using TypeScript bindings."),(0,o.kt)("h2",{id:"replace-the-meeting-control-buttons-with-your-own-buttons"},"Replace the meeting control buttons with your own buttons"),(0,o.kt)("p",null,"Let's say you don't want to give many options to the participants in a meeting, other than the basic audio and video turning on, or you don't like our buttons and control bar design (you really should give us feedback too, in this case), or for any other reason - you just want to build your own buttons for basic meeting controls. This is possible with Dyte, with the minor caveat that you will need to put some validations at your end."),(0,o.kt)("p",null,"First thing in such a scenario would be to do away with our control bar"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"meeting.updateUIConfig({ controlBar: false });\n")),(0,o.kt)("p",null,"Now you can perform the basic functions of a meeting, like below. These functions can be used as the ",(0,o.kt)("inlineCode",{parentName:"p"},"onClick")," handlers of your own buttons."),(0,o.kt)("h3",{id:"mic-control"},"Mic control"),(0,o.kt)("p",null,"To turn off the mic"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"meeting.self.disableAudio();\n")),(0,o.kt)("p",null,"To turn on the mic"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"meeting.self.enableAudio();\n")),(0,o.kt)("h3",{id:"camera-control"},"Camera control"),(0,o.kt)("p",null,"To turn off the camera"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"meeting.self.disableVideo();\n")),(0,o.kt)("p",null,"To turn on the camera"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"meeting.self.enableVideo();\n")),(0,o.kt)("h3",{id:"leave-meeting"},"Leave meeting"),(0,o.kt)("p",null,"To leave the meeting"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"meeting.leaveRoom();\n")),(0,o.kt)("h2",{id:"send-a-custom-message-to-other-participants-in-the-meeting-p2p-message--data-exchange"},"Send a custom message to other participants in the meeting (P2P message / data exchange)"),(0,o.kt)("p",null,"You can send custom messages relevant to your app, JSON data, or any really any other data that is serializable, to other participants in the meeting. Think of it as a parallel data channel in the same P2P manner as the media streams. While the pre-built chat function supports sending messages and files, you can do more using this feature. Since these messages do not appear in the chat box, you can send and receive data specific to your app and choose to take actions as well as display them on the UI as you want."),(0,o.kt)("p",null,"To send such a message to all participants in the meeting room"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"meeting.sendRoomMessage(message);\n")),(0,o.kt)("p",null,"where ",(0,o.kt)("inlineCode",{parentName:"p"},"message")," can be of any type."),(0,o.kt)("p",null,"To send a targeted message to specific participant in the meeting room"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"meeting.sendMessage(peerId, message);\n")),(0,o.kt)("p",null,"where ",(0,o.kt)("inlineCode",{parentName:"p"},"message")," can be of any type and ",(0,o.kt)("inlineCode",{parentName:"p"},"peerId")," is a string representing the unique ID of the participant as obtained from the participant list."),(0,o.kt)("h2",{id:"get-list-of-all-participants-in-the-meeting"},"Get list of all participants in the meeting"),(0,o.kt)("p",null,"You can get a list of all participants in the meeting using the ",(0,o.kt)("inlineCode",{parentName:"p"},"participants")," property of ",(0,o.kt)("inlineCode",{parentName:"p"},"meeting"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"let participantList = meeting.participants;\n")),(0,o.kt)("p",null,"sets the ",(0,o.kt)("inlineCode",{parentName:"p"},"participantList")," to an array whose elements are instances of type ",(0,o.kt)("inlineCode",{parentName:"p"},"DyteParticipant"),", whose prototype is defined below in the reference section and can be directly used as a type if you prefer using TypeScript bindings. There will be exactly one element of type ",(0,o.kt)("inlineCode",{parentName:"p"},"DyteSelfParticipant"),", which refers to the current participant."),(0,o.kt)("h2",{id:"controlling-individual-participants-and-actions"},"Controlling individual participants and actions"),(0,o.kt)("p",null,"Dyte client SDK provide methods and properties to help you control participant actions and certain UI elements. This could include actions that affect the participant themselves as well as other participants (like a host with privileged permissions may want to control the video of other participants). This section defines all the possible properties and actions that can be taken."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Remember that despite the functions being available to every participant via the client SDK, they will not take affect until coupled with the right permissions for the participant who intends to use these."))),(0,o.kt)("h3",{id:"get-participant-list"},"Get participant list"),(0,o.kt)("p",null,"To get a list of all participants, use ",(0,o.kt)("inlineCode",{parentName:"p"},"meeting.participants"),": it returns ",(0,o.kt)("inlineCode",{parentName:"p"},"Array[DyteParticipant|DyteSelfParticipant]")," where all meeting participants are ",(0,o.kt)("a",{parentName:"p",href:"./reference/participant"},(0,o.kt)("inlineCode",{parentName:"a"},"DyteParticipant"))," and the current participant is ",(0,o.kt)("a",{parentName:"p",href:"./reference/self-participant"},(0,o.kt)("inlineCode",{parentName:"a"},"DyteSelfParticipant")),"."),(0,o.kt)("h3",{id:"participant-info-and-actions"},"Participant info and actions"),(0,o.kt)("p",null,"Once you get the array of participants as mentioned above, you can iterate over that and get certain info about every participant."),(0,o.kt)("p",null,"We will consider the following iterator for the next section."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"meeting.participants.forEach((p) => {\n  // participant specific code goes here\n});\n")),(0,o.kt)("h4",{id:"peer-id"},"Peer ID"),(0,o.kt)("p",null,"Get unique ID for every participant. This ID is generated by Dyte when a participant joins the meeting. This ID is used for referring to a participant within Dyte, such as for ",(0,o.kt)("a",{parentName:"p",href:"#send-a-custom-message-to-other-participants-in-the-meeting-p2p-message--data-exchange"},"sending custom messages"),"."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Even if the same participant, using the same auth token, rejoins the meeting, for example by refreshing the page / app or due to connection drop, the peer ID would be refreshed in that case."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"let peerID = p.id;\n")),(0,o.kt)("p",null,"sets the value of ",(0,o.kt)("inlineCode",{parentName:"p"},"peerID")," to a UUID string."),(0,o.kt)("h4",{id:"client-specific-id"},"Client specific ID"),(0,o.kt)("p",null,"Get the client specific ID as you have specified in the add participant API call. You may want to decide exposing custom controls or build other business logic based on this identifier, which helps you find the participant info in your system."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"let clientSpecificID = p.clientSpecificId;\n")),(0,o.kt)("h4",{id:"participant-name"},"Participant name"),(0,o.kt)("p",null,"Get the participant name as you have specified in the add participant API call. The participant may have changed this name, if enabled."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"let name = p.name;\n")),(0,o.kt)("h4",{id:"participant-thumbnail-photo--avatar"},"Participant thumbnail photo / avatar"),(0,o.kt)("p",null,"Get the participant photo as you have specified in the add participant API call."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"let name = p.picture;\n")),(0,o.kt)("h4",{id:"check-if-participants-audio-is-on"},"Check if participant's audio is on"),(0,o.kt)("p",null,"To check whether a participant's audio is on (mic is turned on), you can use"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"let audio = p.audioEnabled;\n")),(0,o.kt)("p",null,"which sets the value of ",(0,o.kt)("inlineCode",{parentName:"p"},"audio")," to a boolean specifying if the mic is on or not."),(0,o.kt)("h4",{id:"get-participant-audio-stream"},"Get participant audio stream"),(0,o.kt)("p",null,"If the participant's audio is on, you can get the associated audio stream using"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"let audioStream = p.audioTrack;\n")),(0,o.kt)("p",null,"which sets the value of ",(0,o.kt)("inlineCode",{parentName:"p"},"audioStream")," to a ",(0,o.kt)("inlineCode",{parentName:"p"},"MediaStreamTrack")," that you can use elsewhere such as a custom recording."),(0,o.kt)("h4",{id:"disable-participants-audio-stream"},"Disable participant's audio stream"),(0,o.kt)("p",null,"To remotely turn the participant's mic off, you can do"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"p.disableAudio();\n")),(0,o.kt)("h4",{id:"check-if-participants-video-is-on"},"Check if participant's video is on"),(0,o.kt)("p",null,"To check whether a participant's video is on (camera is turned on), you can use"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"let video = p.videoEnabled;\n")),(0,o.kt)("p",null,"which sets the value of ",(0,o.kt)("inlineCode",{parentName:"p"},"video")," to a boolean specifying if the camera is on or not."),(0,o.kt)("h4",{id:"get-participant-video-stream"},"Get participant video stream"),(0,o.kt)("p",null,"If the participant's video is on, you can get the associated video stream using"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"let videoStream = p.videoTrack;\n")),(0,o.kt)("p",null,"which sets the value of ",(0,o.kt)("inlineCode",{parentName:"p"},"videoStream")," to a ",(0,o.kt)("inlineCode",{parentName:"p"},"MediaStreamTrack")," that you can use elsewhere such as a custom recording."),(0,o.kt)("h4",{id:"disable-participants-audio-stream-1"},"Disable participant's audio stream"),(0,o.kt)("p",null,"To remotely turn the participant's camera off, you can do"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"p.disableVideo();\n")),(0,o.kt)("h4",{id:"check-if-the-participant-is-pinned-to-the-grid"},"Check if the participant is pinned to the grid"),(0,o.kt)("p",null,"To check whether a participant's video is pinned to the meeting grid; by the host, by the user, by the preset, or by any other mechanism; you can use"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"let pinned = p.isPinned;\n")),(0,o.kt)("p",null,"which sets the value of ",(0,o.kt)("inlineCode",{parentName:"p"},"pinned")," to a boolean specifying whether the video is pinned or not."),(0,o.kt)("h4",{id:"pin-a-participant-video-to-the-grid"},"Pin a participant video to the grid"),(0,o.kt)("p",null,"You can pin a participant's video to the grid using"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"p.pin();\n")),(0,o.kt)("h4",{id:"unpin-a-participant-video-from-the-grid"},"Unpin a participant video from the grid"),(0,o.kt)("p",null,"You can unpin a participant's video from the grid using"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"p.unpin();\n")),(0,o.kt)("h4",{id:"zoom-a-participants-video-using-custom-logic"},"Zoom a participant's video using custom logic"),(0,o.kt)("p",null,"You can zoom on to a participant's video for everyone in the meeting. You would need to specify the ",(0,o.kt)("inlineCode",{parentName:"p"},"scale"),", which represents the scale of zoom, as well as ",(0,o.kt)("inlineCode",{parentName:"p"},"x")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"y")," offsets, which represent the offset from center to reposition the video inside the container in the grid."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"p.zoom({ scale: , x: , y: });\n")),(0,o.kt)("h4",{id:"send-a-custom-message-to-a-participant-p2p-message--data-exchange"},"Send a custom message to a participant (P2P message / data exchange)"),(0,o.kt)("p",null,"Just like ",(0,o.kt)("a",{parentName:"p",href:"#send-a-custom-message-to-other-participants-in-the-meeting-p2p-message--data-exchange"},"sending a custom message to the whole room"),", you can target a particular participant to send a message."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"p.sendMessage(message);\n")),(0,o.kt)("h4",{id:"check-if-the-participant-is-current-participant"},"Check if the participant is current participant"),(0,o.kt)("p",null,"You can check if the participant is the current participant by checking the ",(0,o.kt)("inlineCode",{parentName:"p"},"isMe")," boolean property of the participant. If found to be ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", you can treat that participant as an instance of type ",(0,o.kt)("inlineCode",{parentName:"p"},"DyteSelfParticipant"),", which is a subclass of type ",(0,o.kt)("inlineCode",{parentName:"p"},"DyteParticipant"),". This unlocks a few additional actions that you can take with that participant."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"let currentParticipant = meeting.participants.find((p) => p.isMe);\n")),(0,o.kt)("p",null,"Now all the methods that you can call on ",(0,o.kt)("inlineCode",{parentName:"p"},"meeting.self")," (as described under ",(0,o.kt)("a",{parentName:"p",href:"#replace-the-meeting-control-buttons-with-your-own-buttons"},"replace meeting control buttons"),") can be called on ",(0,o.kt)("inlineCode",{parentName:"p"},"currentParticipant"),"."),(0,o.kt)("h2",{id:"errors"},"Errors"),(0,o.kt)("p",null,"There are 3 types of errors emitted when a meeting cannot be initialized. Read more about these on the ",(0,o.kt)("a",{parentName:"p",href:"./reference/dyte-errors"},(0,o.kt)("inlineCode",{parentName:"a"},"DyteErrors"))," page in the reference section."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"enum DyteErrors {\n  CLIENTID_INVALID,\n  MEETING_UNAUTHORIZED,\n  MEETING_NOTFOUND,\n}\n")),(0,o.kt)("p",null,"An example of handling such errors:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { DyteMeeting, DyteErrors } from "@dyte/client";\n\n...\n...\n\n<DyteMeeting\n    onInit={(meeting) => { }}\n    clientId=`yourClientID`\n    meetingConfig={{\n        roomName: `roomName`,\n        authToken: `authToken`\n    }}\n    onError={(error) => {\n        if (error = DyteErrors.CLIENTID_INVALID) {\n            // take appropriate action\n        }\n    }}\n    >\n')))}d.isMDXComponent=!0}}]);
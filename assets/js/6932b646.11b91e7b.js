"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[29433],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,g=u["".concat(s,".").concat(m)]||u[m]||c[m]||i;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},70073:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return p},default:function(){return u}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],l={sidebar_position:1},s="Installation",d={unversionedId:"installation",id:"version-0.4.x/installation",isDocsHomePage:!1,title:"Installation",description:"Install the Flutter package from pub",source:"@site/flutter_versioned_docs/version-0.4.x/installation.mdx",sourceDirName:".",slug:"/installation",permalink:"/flutter/0.4.x/installation",editUrl:"https://github.com/dyte-in/docs/tree/main/flutter_versioned_docs/version-0.4.x/installation.mdx",tags:[],version:"0.4.x",lastUpdatedBy:"Vaibhav Shinde",lastUpdatedAt:1647414710,formattedLastUpdatedAt:"3/16/2022",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"version-0.4.x/mainSidebar",next:{title:"Quickstart",permalink:"/flutter/0.4.x/quickstart"}},p=[{value:"Android",id:"android",children:[]},{value:"iOS",id:"ios",children:[]}],c={toc:p};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"installation"},"Installation"),(0,i.kt)("p",null,"Install the Flutter package from pub"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"flutter pub add dyte_client\n")),(0,i.kt)("h2",{id:"android"},"Android"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Check ",(0,i.kt)("inlineCode",{parentName:"p"},"/android/app/build.gradle")," to ensure that the minimum SDK version of your Flutter Android project is ",(0,i.kt)("strong",{parentName:"p"},"21"),"."))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The below instructions are for the release builds, debug builds should work without any additional steps."))),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Edit your ",(0,i.kt)("inlineCode",{parentName:"li"},"android/gradle.properties")," and add the following line")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"android.enableDexingArtifactTransform.desugaring=false\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Create / append to the file ",(0,i.kt)("inlineCode",{parentName:"li"},"android/app/proguard-rules.pro"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"-keep class org.webrtc.** { *; }\n-dontwarn org.chromium.build.BuildHooksAndroid\n")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"In your ",(0,i.kt)("inlineCode",{parentName:"li"},"android/app/build.gradle")," edit the release configuration and add the following line importing the proguard configuration")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"buildTypes {\n        release {\n            ...\n            ...\n            ...\n            proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'\n        }\n    }\n")),(0,i.kt)("h2",{id:"ios"},"iOS"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Please make sure you are running Xcode using Rosetta on the newer Apple Silicon based Macs."))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"iOS minimum version 12.0")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"We support minimum OS version ",(0,i.kt)("inlineCode",{parentName:"p"},"12.0")," for our iOS SDK."))),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Open your podfile and make sure your platform is set to ios 12 ")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ruby"},"platform :ios, '12.0'\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Add the fonts and permission entries in ",(0,i.kt)("inlineCode",{parentName:"li"},"info.plist"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<key>UIAppFonts</key>\n<array>\n    <string>MaterialCommunityIcons.ttf</string>\n    <string>MaterialIcons.ttf</string>\n</array>\n<key>NSBluetoothPeripheralUsageDescription</key>\n<string>We will use your Bluetooth to access your Bluetooth headphones.</string>\n<key>NSBluetoothAlwaysUsageDescription</key>\n<string>We will use your Bluetooth to access your Bluetooth headphones.</string>\n<key>NSCameraUsageDescription</key>\n<string>For people to see you during meetings, we need access to your camera.</string>\n<key>NSMicrophoneUsageDescription</key>\n<string>For people to hear you during meetings, we need access to your microphone.</string>\n<key>NSPhotoLibraryUsageDescription</key>\n<string>For people to share, we need access to your photos.</string>\n<key>UIViewControllerBasedStatusBarAppearance</key>\n<false/>\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Ensure in your ",(0,i.kt)("inlineCode",{parentName:"li"},"Podfile")," you have an entry like below declaring platform of ",(0,i.kt)("strong",{parentName:"li"},"11.0")," or above and disable ",(0,i.kt)("inlineCode",{parentName:"li"},"BITCODE"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ruby"},"post_install do |installer|\n    installer.pods_project.targets.each do |target|\n        target.build_configurations.each do |config|\n            config.build_settings['ENABLE_BITCODE'] = 'NO'\n        end\n    end\nend\n")))}u.isMDXComponent=!0}}]);
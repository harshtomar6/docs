"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[44911],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=r.createContext({}),p=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(d.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=a,g=u["".concat(d,".").concat(m)]||u[m]||c[m]||o;return t?r.createElement(g,i(i({ref:n},s),{},{components:t})):r.createElement(g,i({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},48021:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return s},default:function(){return u}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),i=["components"],l={sidebar_position:1},d="Installation",p={unversionedId:"installation",id:"version-0.12.x/installation",isDocsHomePage:!1,title:"Installation",description:"1. In your project, add the Maven repository https://maven.dyte.in. The repository typically goes into the build.gradle file in the root of your project.",source:"@site/android_versioned_docs/version-0.12.x/installation.mdx",sourceDirName:".",slug:"/installation",permalink:"/android/0.12.x/installation",tags:[],version:"0.12.x",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"version-0.12.x/mainSidebar",next:{title:"Quickstart",permalink:"/android/0.12.x/quickstart"}},s=[],c={toc:s};function u(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"installation"},"Installation"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In your project, add the Maven repository ",(0,o.kt)("inlineCode",{parentName:"li"},"https://maven.dyte.in"),". The repository typically goes into the ",(0,o.kt)("inlineCode",{parentName:"li"},"build.gradle")," file in the root of your project.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-groovy"},'allprojects {\n    repositories {\n        google()\n        jcenter()\n        maven {\n            url "https://maven.dyte.in"\n        }\n    }\n}\n')),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Add the dependency ",(0,o.kt)("inlineCode",{parentName:"li"},"com.dyteclientmobile:sdk"),". Dependency definitions belong in the individual module ",(0,o.kt)("inlineCode",{parentName:"li"},"build.gradle")," files.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-groovy"},"dependencies {\n    // (other dependencies)\n        implementation \"com.dyteclientmobile:sdk:+\"\n    // optionally if you app does not have support libraries\n    implementation 'androidx.localbroadcastmanager:localbroadcastmanager:1.0.0'\n}\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"(optional) Register the activity in ",(0,o.kt)("inlineCode",{parentName:"li"},"AndroidManifest.xml"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<activity\n            android:name="com.dyteclientmobile.DyteMeetingActivity"\n            android:launchMode="singleTask"\n            android:configChanges="keyboard|keyboardHidden|orientation|screenSize|uiMode"\n            android:windowSoftInputMode="adjustResize">\n </activity>\n')),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The below instructions are for the release builds, debug builds should work without any additional steps."))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Edit your ",(0,o.kt)("inlineCode",{parentName:"li"},"android/gradle.properties")," and add the following line")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-groovy"},"android.enableDexingArtifactTransform.desugaring=false\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Create / append to the file ",(0,o.kt)("inlineCode",{parentName:"li"},"android/app/proguard-rules.pro"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-groovy"},"-keep class org.webrtc.** { *; }\n-dontwarn org.chromium.build.BuildHooksAndroid\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"In your ",(0,o.kt)("inlineCode",{parentName:"li"},"android/app/build.gradle")," edit the release configuration and add the following line importing the proguard configuration")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-groovy"},"buildTypes {\n        release {\n            ...\n            ...\n            ...\n            proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'\n        }\n    }\n")))}u.isMDXComponent=!0}}]);
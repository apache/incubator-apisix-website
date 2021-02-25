(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{117:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return l}));var r=t(3),a=t(7),i=(t(0),t(142)),o={},s={unversionedId:"usage",id:"usage",isDocsHomePage:!1,title:"usage",description:"\x3c!--",source:"@site/docs/apisix-ingress-controller/usage.md",slug:"/usage",permalink:"/docs/ingress-controller/usage",version:"current"},c=[{value:"Scenes",id:"scenes",children:[]},{value:"A simple example",id:"a-simple-example",children:[]}],p={toc:c};function l(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"usage-of-ingress-controller"},"Usage of Ingress controller"),Object(i.b)("p",null,"In this article, we will use ingress controller CRDs (CustomResourceDefinition) to define routing rules against the admin api of Apache APISIX."),Object(i.b)("h2",{id:"scenes"},"Scenes"),Object(i.b)("p",null,"Configure a simple routing rule through the ingress controller CRDs. After synchronizing to the gateway, the data traffic is accessed to the back-end service through Apache APISIX. Then, we gradually add or remove plug-ins to the routing to achieve functional expansion."),Object(i.b)("p",null,"As shown below."),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix-ingress-controller/master/docs/assets/images/scene.png",alt:"scene"})),Object(i.b)("h2",{id:"a-simple-example"},"A simple example"),Object(i.b)("p",null,"Define the simplest route to direct traffic to the back-end service, the back-end service is named ",Object(i.b)("inlineCode",{parentName:"p"},"httpserver"),"."),Object(i.b)("p",null,"As shown below.(The ip list in nodes is an example, no specific meaning)"),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix-ingress-controller/master/docs/assets/images/first.png",alt:"first"})),Object(i.b)("p",null,"Now we define with CRDs as follows."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Define Upstream with ",Object(i.b)("inlineCode",{parentName:"li"},"ApisixUpstream"))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apisix.apache.org/v1\nkind: ApisixUpstream\nmetadata:\n  name: foo\nspec:\n  ports:\n  - port: 8080\n    loadbalancer:\n      type: chash\n      hashOn: header\n      key: hello\n")),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},"Define Route with ",Object(i.b)("inlineCode",{parentName:"li"},"ApisixRoute"))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apisix.apache.org/v1\nkind: ApisixRoute\nmetadata:\n  name: foo-route\nspec:\n  rules:\n  - host: test.apisix.apache.org\n    http:\n      paths:\n      - backend:\n          serviceName: foo\n          servicePort: 8080\n        path: /hello*\n")),Object(i.b)("p",null,"Tips: When defining ",Object(i.b)("inlineCode",{parentName:"p"},"ApisixUpstream"),", there is no need to define a specific pod ip list, the ingress controller will do service discovery based on namespace/name/port composite index."),Object(i.b)("p",null,"List the way to define the above rules using ",Object(i.b)("inlineCode",{parentName:"p"},"Admin API")," to facilitate comparison and understanding."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},'# 1. Define upstream: foo-upstream id=1 (the ip list in nodes is an example, no specific meaning)\ncurl -XPUT http://127.0.0.1:9080/apisix/admin/upstreams/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -d \'\n{\n    "nodes": {\n        "10.244.143.48:8080": 100,\n        "10.244.102.43:8080": 100,\n        "10.244.102.63:8080": 100\n    },\n    "desc": "foo-upstream",\n    "type": "roundrobin"\n}\n\'\n# 2. Define service: foo-service, id=2, binding upstream: foo-upstream\ncurl -XPUT http://127.0.0.1:9080/apisix/admin/services/2 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -d \'\n{\n    "desc": "foo-service",\n    "upstream_id": 1\n}\n\'\n\n# 3. Define route: foo-route\uff0c id=3\uff0c binding service: foo-service\n\ncurl -XPUT http://127.0.0.1:9080/apisix/admin/routes/3 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -d \'\n{\n    "desc": "foo-route",\n    "uri": "/hello*",\n    "host": "test.apisix.apache.org",\n    "service_id": "2"\n}\'\n')))}l.isMDXComponent=!0},142:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return f}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),l=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=l(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(t),b=r,f=u["".concat(o,".").concat(b)]||u[b]||d[b]||i;return t?a.a.createElement(f,s(s({ref:n},p),{},{components:t})):a.a.createElement(f,s({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=b;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=t[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);
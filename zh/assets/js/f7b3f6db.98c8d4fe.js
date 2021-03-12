(window.webpackJsonp=window.webpackJsonp||[]).push([[169],{237:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return p})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return u}));var r=a(3),n=a(7),i=(a(0),a(250)),p={title:"Release Apache APISIX 2.4"},c={permalink:"/zh/events/2021/03/05/release-apache-apisix-2.4",source:"@site/events/2021-03-05-release-apache-apisix-2.4.md",description:"Change",date:"2021-03-05T00:00:00.000Z",tags:[],title:"Release Apache APISIX 2.4",readingTime:.77,truncated:!0,prevItem:{title:"Release Apache APISIX Ingress Controller 0.4.0",permalink:"/zh/events/2021/03/12/release-apache-apisix-ingress-controller-0.4.0"},nextItem:{title:"Release Apache APISIX Dashboard 2.4",permalink:"/zh/events/2021/02/12/release-apache-apisix-dashboard-2.4"}},l=[{value:"Change",id:"change",children:[]},{value:"Core",id:"core",children:[]},{value:"Plugin",id:"plugin",children:[]},{value:"Bugfix",id:"bugfix",children:[]}],o={toc:l};function u(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"change"},"Change"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"change: global rules should not be executed on the internal api by default ",Object(i.b)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3396"},"#3396")),Object(i.b)("li",{parentName:"ul"},"change: default to cache DNS record according to the TTL ",Object(i.b)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3530"},"#3530"))),Object(i.b)("h3",{id:"core"},"Core"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\ud83c\udf05 feat: support SRV record ",Object(i.b)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3686"},"#3686")),Object(i.b)("li",{parentName:"ul"},"\ud83c\udf05 feat: add dns discovery ",Object(i.b)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3629"},"#3629")),Object(i.b)("li",{parentName:"ul"},"\ud83c\udf05 feat: add consul kv discovery module ",Object(i.b)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3615"},"#3615")),Object(i.b)("li",{parentName:"ul"},"\ud83c\udf05 feat: support to bind plugin config by ",Object(i.b)("inlineCode",{parentName:"li"},"plugin_config_id")," ",Object(i.b)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3567"},"#3567")),Object(i.b)("li",{parentName:"ul"},"\ud83c\udf05 feat: support listen http2 with plaintext ",Object(i.b)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3547"},"#3547")),Object(i.b)("li",{parentName:"ul"},"\ud83c\udf05 feat: support DNS AAAA record ",Object(i.b)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3484"},"#3484"))),Object(i.b)("h3",{id:"plugin"},"Plugin"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\ud83c\udf05 feat: the traffic-split plugin supports ",Object(i.b)("inlineCode",{parentName:"li"},"upstream_id")," ",Object(i.b)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3512"},"#3512")),Object(i.b)("li",{parentName:"ul"},"\ud83c\udf05 feat(zipkin): support b3 req header ",Object(i.b)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3551"},"#3551"))),Object(i.b)("h3",{id:"bugfix"},"Bugfix"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"fix(chash): ensure retry can try every node ",Object(i.b)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3651"},"#3651")),Object(i.b)("li",{parentName:"ul"},"fix: script does not work when the route is bound to a service ",Object(i.b)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3678"},"#3678")),Object(i.b)("li",{parentName:"ul"},"fix: use openssl111 in openresty dir in precedence ",Object(i.b)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3603"},"#3603")),Object(i.b)("li",{parentName:"ul"},"fix(zipkin): don't cache the per-req sample ratio ",Object(i.b)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/3522"},"#3522"))),Object(i.b)("p",null,"For more changes, please refer to ",Object(i.b)("a",{parentName:"p",href:"https://github.com/apache/apisix/milestone/13"},"Milestone")))}u.isMDXComponent=!0},250:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=n.a.createContext({}),u=function(e){var t=n.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},b=function(e){var t=u(e.components);return n.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},h=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),b=u(a),h=r,m=b["".concat(p,".").concat(h)]||b[h]||s[h]||i;return a?n.a.createElement(m,c(c({ref:t},o),{},{components:a})):n.a.createElement(m,c({ref:t},o))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,p=new Array(i);p[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,p[1]=c;for(var o=2;o<i;o++)p[o]=a[o];return n.a.createElement.apply(null,p)}return n.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"}}]);
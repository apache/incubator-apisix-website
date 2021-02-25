(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{108:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),i=n(7),a=(n(0),n(142)),s={},o={unversionedId:"deployments/minikube",id:"deployments/minikube",isDocsHomePage:!1,title:"minikube",description:"\x3c!--",source:"@site/docs/apisix-ingress-controller/deployments/minikube.md",slug:"/deployments/minikube",permalink:"/zh/docs/ingress-controller/deployments/minikube",version:"current"},l=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Install APISIX",id:"install-apisix",children:[]},{value:"Install apisix-ingress-controller",id:"install-apisix-ingress-controller",children:[]}],c={toc:l};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"install-ingress-apisix-on-minikube"},"Install Ingress APISIX on Minikube"),Object(a.b)("p",null,"This document explains how to install Ingress APISIX on ",Object(a.b)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/"},"Minikube"),"."),Object(a.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Install ",Object(a.b)("a",{parentName:"li",href:"https://minikube.sigs.k8s.io/docs/start/"},"Minikube"),"."),Object(a.b)("li",{parentName:"ul"},"Install ",Object(a.b)("a",{parentName:"li",href:"https://helm.sh/"},"Helm"),"."),Object(a.b)("li",{parentName:"ul"},"Clone ",Object(a.b)("a",{parentName:"li",href:"https://github.com/apache/apisix-helm-chart"},"Apache APISIX Charts"),"."),Object(a.b)("li",{parentName:"ul"},"Make sure your target namespace exists, kubectl operations thorough this document will be executed in namespace ",Object(a.b)("inlineCode",{parentName:"li"},"ingress-apisix"),".")),Object(a.b)("h2",{id:"install-apisix"},"Install APISIX"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"http://apisix.apache.org/"},"Apache APISIX")," as the proxy plane of apisix-ingress-controller, should be deployed in advance."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-shell"},'cd /path/to/apisix-helm-chart\nhelm repo add bitnami https://charts.bitnami.com/bitnami\nhelm dependency update ./charts/apisix\nhelm install apisix ./charts/apisix \\\n  --set allow.ipList="{0.0.0.0/0}" \\\n  --namespace ingress-apisix\nkubectl get service --namespace ingress-apisix\n')),Object(a.b)("p",null,"Two Service resources were created, one is ",Object(a.b)("inlineCode",{parentName:"p"},"apisix-gateway"),", which processes the real traffic; another is ",Object(a.b)("inlineCode",{parentName:"p"},"apisix-admin"),", which acts as the control plane to process all the configuration changes."),Object(a.b)("p",null,"One thing should be concerned that the ",Object(a.b)("inlineCode",{parentName:"p"},"allow.ipList")," field should be customized according to the Pod CIRD configuration of Minikube, so that the apisix-ingress-controller instances can access the APISIX instances (resources pushing)."),Object(a.b)("h2",{id:"install-apisix-ingress-controller"},"Install apisix-ingress-controller"),Object(a.b)("p",null,"You can also install apisix-ingress-controller by Helm Charts, it's recommended to install it in the same namespace with Apache APISIX."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-shell"},"cd /path/to/apisix-helm-chart\n# install apisix-ingress-controller\nhelm install apisix-ingress-controller ./charts/apisix-ingress-controller \\\n  --set image.tag=dev \\\n  --set config.apisix.baseURL=http://apisix-admin:9180/apisix/admin \\\n  --set config.apisix.adminKey=edd1c9f034335f136f87ad84b625c8f1 \\\n  --namespace ingress-apisix\n")),Object(a.b)("p",null,"Change the ",Object(a.b)("inlineCode",{parentName:"p"},"image.tag")," to the apisix-ingress-controller version that you desire. You have to wait for while until the correspdoning pods are running."),Object(a.b)("p",null,"Now try to create some ",Object(a.b)("a",{parentName:"p",href:"/zh/docs/ingress-controller/CRD-specification"},"resources")," to verify the running of Ingress APISIX. As a minimalist example, see ",Object(a.b)("a",{parentName:"p",href:"/zh/docs/ingress-controller/samples/proxy-the-httpbin-service"},"proxy-the-httpbin-service")," to learn how to apply resources to drive the apisix-ingress-controller."))}p.isMDXComponent=!0},142:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),p=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,h=u["".concat(s,".").concat(m)]||u[m]||b[m]||a;return n?i.a.createElement(h,o(o({ref:t},c),{},{components:n})):i.a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var c=2;c<a;c++)s[c]=n[c];return i.a.createElement.apply(null,s)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);
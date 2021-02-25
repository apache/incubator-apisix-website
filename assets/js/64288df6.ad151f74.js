(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{142:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),h=r,d=u["".concat(s,".").concat(h)]||u[h]||b[h]||i;return n?a.a.createElement(d,o(o({ref:t},l),{},{components:n})):a.a.createElement(d,o({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=h;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},97:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),i=(n(0),n(142)),s={},o={unversionedId:"deployments/tke",id:"deployments/tke",isDocsHomePage:!1,title:"tke",description:"\x3c!--",source:"@site/docs/apisix-ingress-controller/deployments/tke.md",slug:"/deployments/tke",permalink:"/docs/ingress-controller/deployments/tke",version:"current"},c=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Install APISIX",id:"install-apisix",children:[]},{value:"Install apisix-ingress-controller",id:"install-apisix-ingress-controller",children:[]}],l={toc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"install-ingress-apisix-on-tencent-tke"},"Install Ingress APISIX on Tencent TKE"),Object(i.b)("p",null,"This document explains how to install Ingress APISIX on ",Object(i.b)("a",{parentName:"p",href:"https://cloud.tencent.com/product/tke"},"Tencent TKE"),"."),Object(i.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Create a TKE Service on Tencent Cloud and make sure the API Server is accessible from your workspace."),Object(i.b)("li",{parentName:"ul"},"Install ",Object(i.b)("a",{parentName:"li",href:"https://helm.sh/"},"Helm"),"."),Object(i.b)("li",{parentName:"ul"},"Download the kube config for your TKE Console."),Object(i.b)("li",{parentName:"ul"},"Clone ",Object(i.b)("a",{parentName:"li",href:"https://github.com/apache/apisix-helm-chart"},"Apache APISIX Charts"),"."),Object(i.b)("li",{parentName:"ul"},"Make sure your target namespace exists, kubectl operations thorough this document will be executed in namespace ",Object(i.b)("inlineCode",{parentName:"li"},"ingress-apisix"),".")),Object(i.b)("h2",{id:"install-apisix"},"Install APISIX"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"http://apisix.apache.org/"},"Apache APISIX")," as the proxy plane of apisix-ingress-controller, should be deployed in advance."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},'cd /path/to/apisix-helm-chart\nhelm repo add bitnami https://charts.bitnami.com/bitnami\nhelm dependency update ./charts/apisix\nhelm install apisix ./charts/apisix \\\n  --set gateway.type=LoadBalancer \\\n  --set allow.ipList="{0.0.0.0/0}" \\\n  --set etcd.persistence.size=10Gi \\\n  --namespace ingress-apisix \\\nkubectl get service --namespace ingress-apisix\n')),Object(i.b)("p",null,"Please be careful you must configure the ",Object(i.b)("inlineCode",{parentName:"p"},"etcd.persistence.size")," to multiplese of 10Gi (it's a limitation on TKE), otherwise the ",Object(i.b)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/storage/persistent-volumes/"},"PersistentVolumeClaim")," creation will fail."),Object(i.b)("p",null,"Two Service resources were created, one is ",Object(i.b)("inlineCode",{parentName:"p"},"apisix-gateway"),", which processes the real traffic; another is ",Object(i.b)("inlineCode",{parentName:"p"},"apisix-admin"),", which acts as the control plane to process all the configuration changes."),Object(i.b)("p",null,"The gateway service type is set to ",Object(i.b)("inlineCode",{parentName:"p"},"LoadBalancer")," (see ",Object(i.b)("a",{parentName:"p",href:"https://cloud.tencent.com/document/product/457/45487?from=10680"},"TKE Service Management")," for more details), so that clients can access Apache APISIX through a load balancer. You can find the load balancer ip by running:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"kubectl get service apisix-gateway --namespace ingress-apisix -o jsonpath='{.status.loadBalancer.ingress[].ip}'\n")),Object(i.b)("p",null,"Another thing should be concerned that the ",Object(i.b)("inlineCode",{parentName:"p"},"allow.ipList")," field should be customized according to the ",Object(i.b)("a",{parentName:"p",href:"https://cloud.tencent.com/document/product/457/50353"},"TKE Network Settings"),", so that the apisix-ingress-controller instances can access the APISIX instances (resources pushing)."),Object(i.b)("h2",{id:"install-apisix-ingress-controller"},"Install apisix-ingress-controller"),Object(i.b)("p",null,"You can also install apisix-ingress-controller by Helm Charts, it's recommended to install it in the same namespace with Apache APISIX."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"cd /path/to/apisix-helm-chart\n# install apisix-ingress-controller\nhelm install apisix-ingress-controller ./charts/apisix-ingress-controller \\\n  --set image.tag=dev \\\n  --set config.apisix.baseURL=http://apisix-admin:9180/apisix/admin \\\n  --set config.apisix.adminKey=edd1c9f034335f136f87ad84b625c8f1 \\\n  --namespace ingress-apisix\n")),Object(i.b)("p",null,"Change the ",Object(i.b)("inlineCode",{parentName:"p"},"image.tag")," to the apisix-ingress-controller version that you desire. You have to wait for while until the correspdoning pods are running."),Object(i.b)("p",null,"Now open your ",Object(i.b)("a",{parentName:"p",href:"https://console.cloud.tencent.com/tke2/overview"},"TKE console"),", choosing your cluster and clicking the Workloads tag, you'll see all pods of Apache APISIX, etcd and apisix-ingress-controller are ready."),Object(i.b)("p",null,"Try to create some ",Object(i.b)("a",{parentName:"p",href:"/docs/ingress-controller/CRD-specification"},"resources")," to verify the running status. As a minimalist example, see ",Object(i.b)("a",{parentName:"p",href:"/docs/ingress-controller/samples/proxy-the-httpbin-service"},"proxy-the-httpbin-service")," to learn how to apply resources to drive the apisix-ingress-controller."))}p.isMDXComponent=!0}}]);
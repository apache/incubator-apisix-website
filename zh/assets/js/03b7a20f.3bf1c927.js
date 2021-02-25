(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{142:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),o=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},d=function(e){var t=o(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=o(n),h=a,m=d["".concat(l,".").concat(h)]||d[h]||s[h]||i;return n?r.a.createElement(m,b(b({ref:t},p),{},{components:n})):r.a.createElement(m,b({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=h;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:a,l[1]=b;for(var p=2;p<i;p++)l[p]=n[p];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},71:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return o}));var a=n(3),r=n(7),i=(n(0),n(142)),l={},b={unversionedId:"CRD-specification",id:"CRD-specification",isDocsHomePage:!1,title:"CRD-specification",description:"\x3c!--",source:"@site/docs/apisix-ingress-controller/CRD-specification.md",slug:"/CRD-specification",permalink:"/zh/docs/ingress-controller/CRD-specification",version:"current"},c=[{value:"CRD Types",id:"crd-types",children:[]},{value:"ApisixRoute",id:"apisixroute",children:[]},{value:"ApisixUpstream",id:"apisixupstream",children:[{value:"Configuring Load Balancer",id:"configuring-load-balancer",children:[]},{value:"Configuring Health Check",id:"configuring-health-check",children:[]},{value:"Configuring Retry and Timeout",id:"configuring-retry-and-timeout",children:[]},{value:"Port Level Settings",id:"port-level-settings",children:[]},{value:"Configuration References",id:"configuration-references",children:[]}]},{value:"ApisixTls",id:"apisixtls",children:[]}],p={toc:c};function o(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"crd-specification"},"CRD specification"),Object(i.b)("p",null,"In order to control the behavior of the proxy (",Object(i.b)("a",{parentName:"p",href:"https://github.com/apache/apisix"},"Apache APISIX"),"), the following CRDs should be defined."),Object(i.b)("h2",{id:"crd-types"},"CRD Types"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#apisixroute"},"ApisixRoute")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#apisixupstream"},"ApisixUpstream"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#configuring-load-balancer"},"Configuring Load Balancer")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#configuring-load-balancer"},"Configuring Health Check")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#configuring-retry-and-timeout"},"Configuring Retry and Timeout")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#port-level-settings"},"Port Level Settings")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#configuration-references"},"Configuration References")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#apisixtls"},"ApisixTls"))),Object(i.b)("h2",{id:"apisixroute"},"ApisixRoute"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"ApisixRoute")," corresponds to the ",Object(i.b)("inlineCode",{parentName:"p"},"Route")," object in Apache APISIX. The ",Object(i.b)("inlineCode",{parentName:"p"},"Route")," matches the client's request by defining rules,\nthen loads and executes the corresponding plugin based on the matching result, and forwards the request to the specified Upstream.\nTo learn more, please check the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/apache/apisix/blob/master/doc/architecture-design.md#route"},"Apache APISIX architecture-design docs"),"."),Object(i.b)("p",null,"Structure example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apisix.apache.org/v1\nkind: ApisixRoute\nmetadata:\n  name: httpserverRoute\n  namespace: cloud\nspec:\n  rules:\n  - host: test.apisix.apache.org\n    http:\n      paths:\n      - backend:\n          serviceName: httpserver\n          servicePort: 8080\n        path: /hello*\n        plugins:\n          - name: limit-count\n            enable: true\n            config:\n              count: 2\n              time_window: 60\n              rejected_code: 503\n              key: remote_addr\n")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Field"),Object(i.b)("th",{parentName:"tr",align:null},"Type"),Object(i.b)("th",{parentName:"tr",align:null},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"rules"),Object(i.b)("td",{parentName:"tr",align:null},"array"),Object(i.b)("td",{parentName:"tr",align:null},"ApisixRoute's request matching rules.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"host"),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null},"The requested host.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"http"),Object(i.b)("td",{parentName:"tr",align:null},"object"),Object(i.b)("td",{parentName:"tr",align:null},"Route rules are applied to the scope of layer 7 traffic.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"paths"),Object(i.b)("td",{parentName:"tr",align:null},"array"),Object(i.b)("td",{parentName:"tr",align:null},"Path-based ",Object(i.b)("inlineCode",{parentName:"td"},"route")," rule matching.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"backend"),Object(i.b)("td",{parentName:"tr",align:null},"object"),Object(i.b)("td",{parentName:"tr",align:null},"Backend service information configuration.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"serviceName"),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null},"The name of backend service. ",Object(i.b)("inlineCode",{parentName:"td"},"namespace + serviceName + servicePort")," form an unique identifier to match the back-end service.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"servicePort"),Object(i.b)("td",{parentName:"tr",align:null},"int"),Object(i.b)("td",{parentName:"tr",align:null},"The port of backend service. ",Object(i.b)("inlineCode",{parentName:"td"},"namespace + serviceName + servicePort")," form an unique identifier to match the back-end service.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"path"),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null},"The URI matched by the route. Supports exact match and prefix match. Example\uff0cexact match: ",Object(i.b)("inlineCode",{parentName:"td"},"/hello"),", prefix match: ",Object(i.b)("inlineCode",{parentName:"td"},"/hello*"),".")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"plugins"),Object(i.b)("td",{parentName:"tr",align:null},"array"),Object(i.b)("td",{parentName:"tr",align:null},"Custom plugin collection (Plugins defined in the ",Object(i.b)("inlineCode",{parentName:"td"},"route")," level). For more plugin information, please refer to the ",Object(i.b)("a",{parentName:"td",href:"https://github.com/apache/apisix/tree/master/doc/plugins"},"Apache APISIX plugin docs"),".")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"name"),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null},"The name of the plugin. For more information about the example plugin, please check the ",Object(i.b)("a",{parentName:"td",href:"https://github.com/apache/apisix/blob/master/doc/plugins/limit-count.md#Attributes"},"limit-count docs"),".")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"enable"),Object(i.b)("td",{parentName:"tr",align:null},"boolean"),Object(i.b)("td",{parentName:"tr",align:null},"Whether to enable the plugin, ",Object(i.b)("inlineCode",{parentName:"td"},"true"),": means enable, ",Object(i.b)("inlineCode",{parentName:"td"},"false"),": means disable.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"config"),Object(i.b)("td",{parentName:"tr",align:null},"object"),Object(i.b)("td",{parentName:"tr",align:null},"Configuration of plugin information. Note: The check of configuration schema is missing now, so please be careful when editing.")))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Support partial ",Object(i.b)("inlineCode",{parentName:"strong"},"annotation"))),Object(i.b)("p",null,"Structure example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apisix.apache.org/v1\nkind: ApisixRoute\nmetadata:\n  annotations:\n    k8s.apisix.apache.org/ingress.class: apisix_group\n    k8s.apisix.apache.org/ssl-redirect: 'false'\n    k8s.apisix.apache.org/whitelist-source-range:\n      - 1.2.3.4/16\n      - 4.3.2.1/8\n  name: httpserverRoute\n  namespace: cloud\nspec:\n")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Field"),Object(i.b)("th",{parentName:"tr",align:null},"Type"),Object(i.b)("th",{parentName:"tr",align:null},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"k8s.apisix.apache.org/ssl-redirect")),Object(i.b)("td",{parentName:"tr",align:null},"boolean"),Object(i.b)("td",{parentName:"tr",align:null},"Whether to force http redirect to https. ",Object(i.b)("inlineCode",{parentName:"td"},"ture"),": means to force conversion to https, ",Object(i.b)("inlineCode",{parentName:"td"},"false"),": means not to convert.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"k8s.apisix.apache.org/ingress.class")),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null},"Grouping of ingress.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"k8s.apisix.apache.org/whitelist-source-range")),Object(i.b)("td",{parentName:"tr",align:null},"array"),Object(i.b)("td",{parentName:"tr",align:null},"Whitelist of IPs allowed to be accessed.")))),Object(i.b)("h2",{id:"apisixupstream"},"ApisixUpstream"),Object(i.b)("p",null,"ApisixUpstream is the decorator of Kubernetes Service. It's designed to have same name with its target Kubernetes Service, it makes the Kubernetes Service richer by adding\nload balancing, health check, retry, timeout parameters and etc."),Object(i.b)("p",null,"Resort to ",Object(i.b)("inlineCode",{parentName:"p"},"ApisixUpstream")," and the Kubernetes Service, apisix ingress controller will generates the APISIX Upstream(s).\nTo learn more, please check the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/apache/apisix/blob/master/doc/architecture-design.md#upstream"},"Apache APISIX architecture-design docs"),"."),Object(i.b)("h3",{id:"configuring-load-balancer"},"Configuring Load Balancer"),Object(i.b)("p",null,"A proper load balancing algorithm is required to scatter requests reasonably for a Kubernetes Service."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apisix.apache.org/v1\nkind: ApisixUpstream\nmetadata:\n  name: httpbin\nspec:\n  loadbalancer:\n    type: ewma\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: httpbin\nspec:\n  selector:\n    app: httpbin\n  ports:\n  - name: http\n    port: 80\n    targetPort: 8080\n")),Object(i.b)("p",null,"The above example shows that ",Object(i.b)("a",{parentName:"p",href:"https://linkerd.io/2016/03/16/beyond-round-robin-load-balancing-for-latency/"},"ewma")," is used as the load balancer for Service ",Object(i.b)("inlineCode",{parentName:"p"},"httpbin"),"."),Object(i.b)("p",null,"Sometimes the session sticky is desired, and you can use the ",Object(i.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Consistent_hashing"},"Consistent Hashing")," load balancing algorithm."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apisix.apache.org/v1\nkind: ApisixUpstream\nmetadata:\n  name: httpbin\nspec:\n  loadbalancer:\n    type: chash\n    hashOn: header\n    key: "user-agent"\n')),Object(i.b)("p",null,"With the above settings, Apache APISIX will distributes requests according to the User-Agent header."),Object(i.b)("h3",{id:"configuring-health-check"},"Configuring Health Check"),Object(i.b)("p",null,"Although Kubelet already provides ",Object(i.b)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/#:~:text=The%20kubelet%20uses%20readiness%20probes,removed%20from%20Service%20load%20balancers."},"probes")," to detect whether pods are healthy, you may still need more powerful health cheak mechanism,\nlike the passive feedback capability."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apisix.apache.org/v1\nkind: ApisixUpstream\nmetadata:\n  name: httpbin\nspec:\n  healthCheck:\n    passive:\n      unhealthy:\n        httpCodes:\n          - 500\n          - 502\n          - 503\n          - 504\n        httpFailures: 3\n        timeout: 5s\n    active:\n      type: http\n      httpPath: /healthz\n      timeout: 5s\n      host: www.foo.com\n      healthy:\n        successes: 3\n        interval: 2s\n        httpCodes:\n          - 200\n          - 206\n")),Object(i.b)("p",null,"The above YAML snippet defines a passive health checker to detech the unhealthy state for\nendpoints, once there are three consecutive requests with bad status code (one of ",Object(i.b)("inlineCode",{parentName:"p"},"500"),", ",Object(i.b)("inlineCode",{parentName:"p"},"502"),", ",Object(i.b)("inlineCode",{parentName:"p"},"503"),", ",Object(i.b)("inlineCode",{parentName:"p"},"504"),"), the endpoint\nwill be set to unhealthy and no requests can be routed there until it's healthy again."),Object(i.b)("p",null,"That's why the active health checker comes in, endpoints might be down for a short while and ready again, the active health checker detects these unhealthy endpoints continuously, and pull them\nup once the healthy conditions are met (three consecutive requests got good status codes, e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"200")," and ",Object(i.b)("inlineCode",{parentName:"p"},"206"),")."),Object(i.b)("p",null,"Note the active health checker is somewhat duplicated with the liveness/readiness probes but it's required if the passive feedback mechanism is in use. So once you use the health check feature in ApisixUpstream,\nthe active health checker is mandatory."),Object(i.b)("h3",{id:"configuring-retry-and-timeout"},"Configuring Retry and Timeout"),Object(i.b)("p",null,"You may want the proxy to retry when requests occur faults like transient network errors\nor service unavailable, by default the retry count is ",Object(i.b)("inlineCode",{parentName:"p"},"1"),". You can change it by specifying the ",Object(i.b)("inlineCode",{parentName:"p"},"retries")," field."),Object(i.b)("p",null,"The following configuration configures the ",Object(i.b)("inlineCode",{parentName:"p"},"retries")," to ",Object(i.b)("inlineCode",{parentName:"p"},"3"),", which indicates there'll be at most ",Object(i.b)("inlineCode",{parentName:"p"},"3")," requests sent to\nKubernetes service ",Object(i.b)("inlineCode",{parentName:"p"},"httpbin"),"'s endpoints."),Object(i.b)("p",null,"One should bear in mind that passing a request to the next endpoint is only possible\nif nothing has been sent to a client yet. That is, if an error or timeout occurs in the middle\nof the transferring of a response, fixing this is impossible."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apisix.apache.org/v1\nkind: ApisixUpstream\nmetadata:\n  name: httpbin\nspec:\n  retries: 3\n")),Object(i.b)("p",null,"The default connect, read and send timeout are ",Object(i.b)("inlineCode",{parentName:"p"},"60s"),", which might not proper for some applicartions,\njust change them in the ",Object(i.b)("inlineCode",{parentName:"p"},"timeout")," field."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apisix.apache.org/v1\nkind: ApisixUpstream\nmetadata:\n  name: httpbin\nspec:\n  timeout:\n    connect: 5s\n    read: 10s\n    send: 10s\n")),Object(i.b)("p",null,"The above examples sets the connect, read and timeout to ",Object(i.b)("inlineCode",{parentName:"p"},"5s"),", ",Object(i.b)("inlineCode",{parentName:"p"},"10s"),", ",Object(i.b)("inlineCode",{parentName:"p"},"10s")," respectively."),Object(i.b)("h3",{id:"port-level-settings"},"Port Level Settings"),Object(i.b)("p",null,"Once in a while a single Kubernetes Service might expose multiple ports which provides distinct functions and different Upstream configurations are required.\nIn that case, you can create configurations for individual port."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apisix.apache.org/v1\nkind: ApisixUpstream\nmetadata:\n  name: foo\nspec:\n  loadbalancer:\n    type: roundrobin\n  portLevelSettings:\n  - port: 7000\n    scheme: http\n  - port: 7001\n    scheme: grpc\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: foo\nspec:\n  selector:\n    app: foo\n  portLevelSettings:\n  - name: http\n    port: 7000\n    targetPort: 7000\n  - name: grpc\n    port: 7001\n    targetPort: 7001\n")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"foo")," service exposes two ports, one of them use HTTP protocol and the other uses grpc protocol.\nIn the meanwhile, the ApisixUpstream ",Object(i.b)("inlineCode",{parentName:"p"},"foo")," sets ",Object(i.b)("inlineCode",{parentName:"p"},"http")," scheme for port ",Object(i.b)("inlineCode",{parentName:"p"},"7000")," and ",Object(i.b)("inlineCode",{parentName:"p"},"grpc")," scheme for ",Object(i.b)("inlineCode",{parentName:"p"},"7001"),"\n(all ports are the service port). But both ports shares the load balancer configuration."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"PortLevelSettings")," is not mandatory if the service only exposes one port but is useful when multiple ports are defined."),Object(i.b)("h3",{id:"configuration-references"},"Configuration References"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Field"),Object(i.b)("th",{parentName:"tr",align:null},"Type"),Object(i.b)("th",{parentName:"tr",align:null},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"scheme"),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null},"The protocol used to talk to the Service, can be ",Object(i.b)("inlineCode",{parentName:"td"},"http"),", ",Object(i.b)("inlineCode",{parentName:"td"},"grpc"),", default is ",Object(i.b)("inlineCode",{parentName:"td"},"http"),".")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"loadbalancer"),Object(i.b)("td",{parentName:"tr",align:null},"object"),Object(i.b)("td",{parentName:"tr",align:null},"The load balancing algorithm of this upstream service")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"loadbalancer.type"),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null},"The load balancing type, can be ",Object(i.b)("inlineCode",{parentName:"td"},"roundrobin"),", ",Object(i.b)("inlineCode",{parentName:"td"},"ewma"),", ",Object(i.b)("inlineCode",{parentName:"td"},"least_conn"),", ",Object(i.b)("inlineCode",{parentName:"td"},"chash"),", default is ",Object(i.b)("inlineCode",{parentName:"td"},"roundrobin"),".")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"loadbalancer.hashOn"),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null},"The hash value source scope, only take effects if the ",Object(i.b)("inlineCode",{parentName:"td"},"chash")," algorithm is in use. Values can ",Object(i.b)("inlineCode",{parentName:"td"},"vars"),", ",Object(i.b)("inlineCode",{parentName:"td"},"header"),", ",Object(i.b)("inlineCode",{parentName:"td"},"vars_combinations"),", ",Object(i.b)("inlineCode",{parentName:"td"},"cookie")," and ",Object(i.b)("inlineCode",{parentName:"td"},"consumers"),", default is ",Object(i.b)("inlineCode",{parentName:"td"},"vars"),".")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"loadbalancer.key"),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null},"The hash key, only in valid if the ",Object(i.b)("inlineCode",{parentName:"td"},"chash")," algorithm is used.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"retries"),Object(i.b)("td",{parentName:"tr",align:null},"int"),Object(i.b)("td",{parentName:"tr",align:null},"The retry count.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"timeout"),Object(i.b)("td",{parentName:"tr",align:null},"object"),Object(i.b)("td",{parentName:"tr",align:null},"The timeout settings.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"timeout.connect"),Object(i.b)("td",{parentName:"tr",align:null},'time duration in the form "72h3m0.5s"'),Object(i.b)("td",{parentName:"tr",align:null},"The connect timeout.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"timeout.read"),Object(i.b)("td",{parentName:"tr",align:null},'time duration in the form "72h3m0.5s"'),Object(i.b)("td",{parentName:"tr",align:null},"The read timeout.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"timeout.send"),Object(i.b)("td",{parentName:"tr",align:null},'time duration in the form "72h3m0.5s"'),Object(i.b)("td",{parentName:"tr",align:null},"The send timeout.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"healthCheck"),Object(i.b)("td",{parentName:"tr",align:null},"object"),Object(i.b)("td",{parentName:"tr",align:null},"The health check parameters, see ",Object(i.b)("a",{parentName:"td",href:"https://github.com/apache/apisix/blob/master/doc/health-check.md"},"Health Check")," for more details.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"healthCheck.active"),Object(i.b)("td",{parentName:"tr",align:null},"object"),Object(i.b)("td",{parentName:"tr",align:null},"active health check configuration, which is a mandatory field.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"healthCheck.active.type"),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null},"health check type, can be ",Object(i.b)("inlineCode",{parentName:"td"},"http"),", ",Object(i.b)("inlineCode",{parentName:"td"},"https")," and ",Object(i.b)("inlineCode",{parentName:"td"},"tcp"),", default is ",Object(i.b)("inlineCode",{parentName:"td"},"http"),".")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"healthCheck.active.timeout"),Object(i.b)("td",{parentName:"tr",align:null},'time duration in the form "72h3m0.5s"'),Object(i.b)("td",{parentName:"tr",align:null},"the timeout settings for the probe, default is ",Object(i.b)("inlineCode",{parentName:"td"},"1s"),".")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"healthCheck.active.concurrency"),Object(i.b)("td",{parentName:"tr",align:null},"int"),Object(i.b)("td",{parentName:"tr",align:null},"how many probes can be sent simultaneously, default is ",Object(i.b)("inlineCode",{parentName:"td"},"10"),".")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"healthCheck.active.host"),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null},"host header in http probe request, only in valid if the active health check type is ",Object(i.b)("inlineCode",{parentName:"td"},"http")," or ",Object(i.b)("inlineCode",{parentName:"td"},"https"),".")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"healthCheck.active.port"),Object(i.b)("td",{parentName:"tr",align:null},"int"),Object(i.b)("td",{parentName:"tr",align:null},"target port to receive probes, it's necessary to specify this field if the health check service exposes by different port, note the port value here is the container port, not the service port.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"healthCheck.active.httpPath"),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null},"the HTTP URI path in http probe, only in valid if the active health check type is ",Object(i.b)("inlineCode",{parentName:"td"},"http")," or ",Object(i.b)("inlineCode",{parentName:"td"},"https"),".")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"healthCheck.active.strictTLS"),Object(i.b)("td",{parentName:"tr",align:null},"boolean"),Object(i.b)("td",{parentName:"tr",align:null},"whether to use the strict mode when use TLS, only in valid if the active health check type is ",Object(i.b)("inlineCode",{parentName:"td"},"https"),", default is ",Object(i.b)("inlineCode",{parentName:"td"},"true"),".")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"healthCheck.active.requestHeaders"),Object(i.b)("td",{parentName:"tr",align:null},"array of string"),Object(i.b)("td",{parentName:"tr",align:null},"Extra HTTP requests carried in the http probe, only in valid if the active health check type is ",Object(i.b)("inlineCode",{parentName:"td"},"http")," or ",Object(i.b)("inlineCode",{parentName:"td"},"https"),".")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"healthCheck.active.healthy"),Object(i.b)("td",{parentName:"tr",align:null},"object"),Object(i.b)("td",{parentName:"tr",align:null},"The conditions to judge an endpoint is healthy.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"healthCheck.active.healthy.successes"),Object(i.b)("td",{parentName:"tr",align:null},"int"),Object(i.b)("td",{parentName:"tr",align:null},"The number of consecutive requests needed to set an endpoint as healthy, default is ",Object(i.b)("inlineCode",{parentName:"td"},"2"),".")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"healthCheck.active.healthy.httpCodes"),Object(i.b)("td",{parentName:"tr",align:null},"array of integer"),Object(i.b)("td",{parentName:"tr",align:null},"Good status codes list to check whether a probe is successful, only in valid if the active health check type is ",Object(i.b)("inlineCode",{parentName:"td"},"http")," or ",Object(i.b)("inlineCode",{parentName:"td"},"https"),", default is ",Object(i.b)("inlineCode",{parentName:"td"},"[200, 302]"),".")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"healthCheck.active.healthy.interval"),Object(i.b)("td",{parentName:"tr",align:null},'time duration in the form "72h3m0.5s"'),Object(i.b)("td",{parentName:"tr",align:null},"The probes sent interval (for healthy endpoints).")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"healthCheck.active.unhealthy"),Object(i.b)("td",{parentName:"tr",align:null},"object"),Object(i.b)("td",{parentName:"tr",align:null},"The conditions to judge an endpoint is unhealthy.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"healthCheck.active.unhealthy.httpFailures"),Object(i.b)("td",{parentName:"tr",align:null},"int"),Object(i.b)("td",{parentName:"tr",align:null},"The number of consecutive http requests needed to set an endpoint as unhealthy, only in valid if the active health check type is ",Object(i.b)("inlineCode",{parentName:"td"},"http")," or ",Object(i.b)("inlineCode",{parentName:"td"},"https"),", default is ",Object(i.b)("inlineCode",{parentName:"td"},"5"),".")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"healthCheck.active.unhealthy.tcpFailures"),Object(i.b)("td",{parentName:"tr",align:null},"int"),Object(i.b)("td",{parentName:"tr",align:null},"The number of consecutive tcp connections needed to set an endpoint as unhealthy, only in valid if the active health check type is ",Object(i.b)("inlineCode",{parentName:"td"},"tcp"),", default is ",Object(i.b)("inlineCode",{parentName:"td"},"2"),".")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"healthCheck.active.unhealthy.httpCodes"),Object(i.b)("td",{parentName:"tr",align:null},"array of integer"),Object(i.b)("td",{parentName:"tr",align:null},"Bad status codes list to check whether a probe is failed, only in valid if the active health check type is ",Object(i.b)("inlineCode",{parentName:"td"},"http")," or ",Object(i.b)("inlineCode",{parentName:"td"},"https"),", default is ",Object(i.b)("inlineCode",{parentName:"td"},"[429, 404, 500, 501, 502, 503, 504, 505]"),".")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"healthCheck.active.unhealthy.interval"),Object(i.b)("td",{parentName:"tr",align:null},'time duration in the form "72h3m0.5s"'),Object(i.b)("td",{parentName:"tr",align:null},"The probes sent interval (for unhealthy endpoints).")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"healthCheck.passive"),Object(i.b)("td",{parentName:"tr",align:null},"object"),Object(i.b)("td",{parentName:"tr",align:null},"passive health check configuration, which is an optional field.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"healthCheck.passive.type"),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null},"health check type, can be ",Object(i.b)("inlineCode",{parentName:"td"},"http"),", ",Object(i.b)("inlineCode",{parentName:"td"},"https")," and ",Object(i.b)("inlineCode",{parentName:"td"},"tcp"),", default is ",Object(i.b)("inlineCode",{parentName:"td"},"http"),".")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"healthCheck.passive.healthy"),Object(i.b)("td",{parentName:"tr",align:null},"object"),Object(i.b)("td",{parentName:"tr",align:null},"The conditions to judge an endpoint is healthy.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"healthCheck.passive.healthy.successes"),Object(i.b)("td",{parentName:"tr",align:null},"int"),Object(i.b)("td",{parentName:"tr",align:null},"The number of consecutive requests needed to set an endpoint as healthy, default is ",Object(i.b)("inlineCode",{parentName:"td"},"5"),".")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"healthCheck.passive.healthy.httpCodes"),Object(i.b)("td",{parentName:"tr",align:null},"array of integer"),Object(i.b)("td",{parentName:"tr",align:null},"Good status codes list to check whether a probe is successful, only in valid if the active health check type is ",Object(i.b)("inlineCode",{parentName:"td"},"http")," or ",Object(i.b)("inlineCode",{parentName:"td"},"https"),", default is ",Object(i.b)("inlineCode",{parentName:"td"},"[200, 201, 202, 203, 204, 205, 206, 207, 208, 226, 300, 301, 302, 303, 304, 305, 306, 307, 308]"),".")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"healthCheck.passive.unhealthy"),Object(i.b)("td",{parentName:"tr",align:null},"object"),Object(i.b)("td",{parentName:"tr",align:null},"The conditions to judge an endpoint is unhealthy.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"healthCheck.passive.unhealthy.httpFailures"),Object(i.b)("td",{parentName:"tr",align:null},"int"),Object(i.b)("td",{parentName:"tr",align:null},"The number of consecutive http requests needed to set an endpoint as unhealthy, only in valid if the active health check type is ",Object(i.b)("inlineCode",{parentName:"td"},"http")," or ",Object(i.b)("inlineCode",{parentName:"td"},"https"),", default is ",Object(i.b)("inlineCode",{parentName:"td"},"5"),".")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"healthCheck.passive.unhealthy.tcpFailures"),Object(i.b)("td",{parentName:"tr",align:null},"int"),Object(i.b)("td",{parentName:"tr",align:null},"The number of consecutive tcp connections needed to set an endpoint as unhealthy, only in valid if the active health check type is ",Object(i.b)("inlineCode",{parentName:"td"},"tcp"),", default is ",Object(i.b)("inlineCode",{parentName:"td"},"2"),".")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"healthCheck.passive.unhealthy.httpCodes"),Object(i.b)("td",{parentName:"tr",align:null},"array of integer"),Object(i.b)("td",{parentName:"tr",align:null},"Bad status codes list to check whether a probe is failed, only in valid if the active health check type is ",Object(i.b)("inlineCode",{parentName:"td"},"http")," or ",Object(i.b)("inlineCode",{parentName:"td"},"https"),", default is ",Object(i.b)("inlineCode",{parentName:"td"},"[429, 404, 500, 501, 502, 503, 504, 505]"),".")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"portLevelSettings"),Object(i.b)("td",{parentName:"tr",align:null},"array"),Object(i.b)("td",{parentName:"tr",align:null},"Settings for each individual port.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"portLevelSettings.port"),Object(i.b)("td",{parentName:"tr",align:null},"int"),Object(i.b)("td",{parentName:"tr",align:null},"The port number defined in the Kubernetes Service, must be a valid port.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"portLevelSettings.scheme"),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null},"same as ",Object(i.b)("inlineCode",{parentName:"td"},"scheme")," but takes higher precedence.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"portLevelSettings.loadbalancer"),Object(i.b)("td",{parentName:"tr",align:null},"object"),Object(i.b)("td",{parentName:"tr",align:null},"same as ",Object(i.b)("inlineCode",{parentName:"td"},"loadbalancer")," but takes higher precedence.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"portLevelSettings.healthCheck"),Object(i.b)("td",{parentName:"tr",align:null},"object"),Object(i.b)("td",{parentName:"tr",align:null},"same as ",Object(i.b)("inlineCode",{parentName:"td"},"healthCheck")," but takes higher precedence.")))),Object(i.b)("h2",{id:"apisixtls"},"ApisixTls"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"ApisixTls")," corresponds to the SSL load matching route in Apache APISIX.\nTo learn more, please check the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/apache/apisix/blob/master/doc/architecture-design.md#router"},"Apache APISIX architecture-design docs"),"."),Object(i.b)("p",null,"Structure example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apisix.apache.org/v1\nkind: ApisixSSL\nmetadata:\n  name: duiopen\nspec\uff1a\n  hosts:\n  - asr.duiopen.com\n  - tts.duiopen.com\n  secret:\n    name: all.duiopen.com\n    namespace: cloud\n")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Field"),Object(i.b)("th",{parentName:"tr",align:null},"Type"),Object(i.b)("th",{parentName:"tr",align:null},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"hosts"),Object(i.b)("td",{parentName:"tr",align:null},"array"),Object(i.b)("td",{parentName:"tr",align:null},"The domain list to identify which hosts (matched with SNI) can use the TLS certificate stored in the Secret.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"secret"),Object(i.b)("td",{parentName:"tr",align:null},"object"),Object(i.b)("td",{parentName:"tr",align:null},"The definition of the related Secret object with current ApisixTls object.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"name"),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null},"The name of secret, the secret contains key and cert for ",Object(i.b)("inlineCode",{parentName:"td"},"TLS"),".")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"namespace"),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null},"The namespace of secret , the secret contains key and cert for ",Object(i.b)("inlineCode",{parentName:"td"},"TLS"),".")))),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"#crd-types"},"Back to top")))}o.isMDXComponent=!0}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{146:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),i=(n(0),n(250)),l={title:"wolf-rbac"},c={unversionedId:"plugins/wolf-rbac",id:"plugins/wolf-rbac",isDocsHomePage:!1,title:"wolf-rbac",description:"\x3c!--",source:"@site/docs/apisix/plugins/wolf-rbac.md",slug:"/plugins/wolf-rbac",permalink:"/docs/apisix/plugins/wolf-rbac",editUrl:"https://github.com/apache/apisix/edit/master/docs/en/latest/plugins/wolf-rbac.md",version:"current",sidebar:"docs",previous:{title:"authz-keycloak",permalink:"/docs/apisix/plugins/authz-keycloak"},next:{title:"openid-connect",permalink:"/docs/apisix/plugins/openid-connect"}},o=[{value:"Summary",id:"summary",children:[]},{value:"Name",id:"name",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"API",id:"api",children:[]},{value:"Dependencies",id:"dependencies",children:[{value:"Install wolf and start the service",id:"install-wolf-and-start-the-service",children:[]},{value:"Add <code>application</code>, <code>admin</code>, <code>normal user</code>, <code>permission</code>, <code>resource</code> and user authorize",id:"add-application-admin-normal-user-permission-resource-and-user-authorize",children:[]}]},{value:"How To Enable",id:"how-to-enable",children:[]},{value:"Test Plugin",id:"test-plugin",children:[]},{value:"Disable Plugin",id:"disable-plugin",children:[]}],b={toc:o};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"summary"},"Summary"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#name"},Object(i.b)("strong",{parentName:"a"},"Name"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#attributes"},Object(i.b)("strong",{parentName:"a"},"Attributes"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#dependencies"},Object(i.b)("strong",{parentName:"a"},"Dependencies"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#how-to-enable"},Object(i.b)("strong",{parentName:"a"},"How To Enable"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#test-plugin"},Object(i.b)("strong",{parentName:"a"},"Test Plugin"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#disable-plugin"},Object(i.b)("strong",{parentName:"a"},"Disable Plugin")))),Object(i.b)("h2",{id:"name"},"Name"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"wolf-rbac")," is an authentication and authorization (rbac) plugin. It needs to work with ",Object(i.b)("inlineCode",{parentName:"p"},"consumer"),". Also need to add ",Object(i.b)("inlineCode",{parentName:"p"},"wolf-rbac")," to a ",Object(i.b)("inlineCode",{parentName:"p"},"service")," or ",Object(i.b)("inlineCode",{parentName:"p"},"route"),".\nThe rbac feature is provided by ",Object(i.b)("a",{parentName:"p",href:"https://github.com/iGeeky/wolf"},"wolf"),". For more information about ",Object(i.b)("inlineCode",{parentName:"p"},"wolf"),", please refer to ",Object(i.b)("a",{parentName:"p",href:"https://github.com/iGeeky/wolf"},"wolf documentation"),"."),Object(i.b)("h2",{id:"attributes"},"Attributes"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Name"),Object(i.b)("th",{parentName:"tr",align:null},"Type"),Object(i.b)("th",{parentName:"tr",align:null},"Requirement"),Object(i.b)("th",{parentName:"tr",align:null},"Default"),Object(i.b)("th",{parentName:"tr",align:null},"Valid"),Object(i.b)("th",{parentName:"tr",align:null},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"server"),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null},"optional"),Object(i.b)("td",{parentName:"tr",align:null},'"',Object(i.b)("a",{parentName:"td",href:"http://127.0.0.1:10080%22"},'http://127.0.0.1:10080"')),Object(i.b)("td",{parentName:"tr",align:null}),Object(i.b)("td",{parentName:"tr",align:null},"Set the service address of ",Object(i.b)("inlineCode",{parentName:"td"},"wolf-server"),".")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"appid"),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null},"optional"),Object(i.b)("td",{parentName:"tr",align:null},'"unset"'),Object(i.b)("td",{parentName:"tr",align:null}),Object(i.b)("td",{parentName:"tr",align:null},"Set the app id. The app id must be added in wolf-console.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"header_prefix"),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null},"optional"),Object(i.b)("td",{parentName:"tr",align:null},'"X-"'),Object(i.b)("td",{parentName:"tr",align:null}),Object(i.b)("td",{parentName:"tr",align:null},"prefix of custom HTTP header. After authentication is successful, three headers will be added to the request header (for backend) and response header (for frontend): ",Object(i.b)("inlineCode",{parentName:"td"},"X-UserId"),", ",Object(i.b)("inlineCode",{parentName:"td"},"X-Username"),", ",Object(i.b)("inlineCode",{parentName:"td"},"X-Nickname"),".")))),Object(i.b)("h2",{id:"api"},"API"),Object(i.b)("p",null,"This plugin will add several API:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"/apisix/plugin/wolf-rbac/login"),Object(i.b)("li",{parentName:"ul"},"/apisix/plugin/wolf-rbac/change_pwd"),Object(i.b)("li",{parentName:"ul"},"/apisix/plugin/wolf-rbac/user_info")),Object(i.b)("p",null,"You may need to use ",Object(i.b)("a",{parentName:"p",href:"/docs/apisix/plugin-interceptors"},"interceptors")," to protect it."),Object(i.b)("h2",{id:"dependencies"},"Dependencies"),Object(i.b)("h3",{id:"install-wolf-and-start-the-service"},"Install wolf and start the service"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://github.com/iGeeky/wolf/blob/master/quick-start-with-docker/README.md"},"Wolf quick start")),Object(i.b)("h3",{id:"add-application-admin-normal-user-permission-resource-and-user-authorize"},"Add ",Object(i.b)("inlineCode",{parentName:"h3"},"application"),", ",Object(i.b)("inlineCode",{parentName:"h3"},"admin"),", ",Object(i.b)("inlineCode",{parentName:"h3"},"normal user"),", ",Object(i.b)("inlineCode",{parentName:"h3"},"permission"),", ",Object(i.b)("inlineCode",{parentName:"h3"},"resource")," and user authorize"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://github.com/iGeeky/wolf/blob/master/docs/usage.md"},"Wolf-console usage")),Object(i.b)("h2",{id:"how-to-enable"},"How To Enable"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"set a consumer and config the value of the ",Object(i.b)("inlineCode",{parentName:"li"},"wolf-rbac"),"\u3002")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/consumers  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n  "username":"wolf_rbac",\n  "plugins":{\n    "wolf-rbac":{\n      "server":"http://127.0.0.1:10080",\n      "appid":"restful"\n    }\n  },\n  "desc":"wolf-rbac"\n}\'\n')),Object(i.b)("p",null,"You can visit the dashboard: ",Object(i.b)("inlineCode",{parentName:"p"},"http://127.0.0.1:9080/apisix/dashboard/"),", to complete the above operations through the web interface, first add a consumer:\n",Object(i.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/plugin/wolf-rbac-1.png",alt:null})),Object(i.b)("p",null,"Then add the wolf-rbac plugin to the consumer page:\n",Object(i.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/plugin/wolf-rbac-2.png",alt:null})),Object(i.b)("p",null,"Notes: The ",Object(i.b)("inlineCode",{parentName:"p"},"appid")," filled in above needs to already exist in the wolf system."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Add a ",Object(i.b)("inlineCode",{parentName:"li"},"Route")," or ",Object(i.b)("inlineCode",{parentName:"li"},"Service")," and enable the wolf-rbac plugin.")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/*",\n    "plugins": {\n        "wolf-rbac": {}\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "www.baidu.com:80": 1\n        }\n    }\n}\'\n')),Object(i.b)("h2",{id:"test-plugin"},"Test Plugin"),Object(i.b)("h4",{id:"login-and-get-wolf-rbac-token"},"Login and get ",Object(i.b)("inlineCode",{parentName:"h4"},"wolf-rbac")," token:"),Object(i.b)("p",null,"The following ",Object(i.b)("inlineCode",{parentName:"p"},"appid"),", ",Object(i.b)("inlineCode",{parentName:"p"},"username"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"password")," must be real ones in the wolf system."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Login as ",Object(i.b)("inlineCode",{parentName:"li"},"POST application/json"))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/plugin/wolf-rbac/login -i \\\n-H "Content-Type: application/json" \\\n-d \'{"appid": "restful", "username":"test", "password":"user-password"}\'\n\nHTTP/1.1 200 OK\nDate: Wed, 24 Jul 2019 10:33:31 GMT\nContent-Type: text/plain\nTransfer-Encoding: chunked\nConnection: keep-alive\nServer: APISIX web server\n{"rbac_token":"V1#restful#eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzQ5LCJ1c2VybmFtZSI6InRlc3QiLCJtYW5hZ2VyIjoiIiwiYXBwaWQiOiJyZXN0ZnVsIiwiaWF0IjoxNTc5NDQ5ODQxLCJleHAiOjE1ODAwNTQ2NDF9.n2-830zbhrEh6OAxn4K_yYtg5pqfmjpZAjoQXgtcuts","user_info":{"nickname":"test","username":"test","id":"749"}}\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Login as ",Object(i.b)("inlineCode",{parentName:"li"},"POST x-www-form-urlencoded"))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9080/apisix/plugin/wolf-rbac/login -i \\\n-H \"Content-Type: application/x-www-form-urlencoded\" \\\n-d 'appid=restful&username=test&password=user-password'\n")),Object(i.b)("h4",{id:"try-request-with-token"},"try request with token"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"without token")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/ -H"Host: www.baidu.com" -i\n\nHTTP/1.1 401 Unauthorized\n...\n{"message":"Missing rbac token in request"}\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"request header(Authorization) with token:")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9080/ -H\"Host: www.baidu.com\" \\\n-H 'Authorization: V1#restful#eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzQ5LCJ1c2VybmFtZSI6InRlc3QiLCJtYW5hZ2VyIjoiIiwiYXBwaWQiOiJyZXN0ZnVsIiwiaWF0IjoxNTc5NDQ5ODQxLCJleHAiOjE1ODAwNTQ2NDF9.n2-830zbhrEh6OAxn4K_yYtg5pqfmjpZAjoQXgtcuts' -i\n\nHTTP/1.1 200 OK\n\n<!DOCTYPE html>\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"request header(x-rbac-token) with token:")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9080/ -H\"Host: www.baidu.com\" \\\n-H 'x-rbac-token: V1#restful#eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzQ5LCJ1c2VybmFtZSI6InRlc3QiLCJtYW5hZ2VyIjoiIiwiYXBwaWQiOiJyZXN0ZnVsIiwiaWF0IjoxNTc5NDQ5ODQxLCJleHAiOjE1ODAwNTQ2NDF9.n2-830zbhrEh6OAxn4K_yYtg5pqfmjpZAjoQXgtcuts' -i\n\n\nHTTP/1.1 200 OK\n\n<!DOCTYPE html>\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"request params with token:")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"curl 'http://127.0.0.1:9080?rbac_token=V1%23restful%23eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzQ5LCJ1c2VybmFtZSI6InRlc3QiLCJtYW5hZ2VyIjoiIiwiYXBwaWQiOiJyZXN0ZnVsIiwiaWF0IjoxNTc5NDQ5ODQxLCJleHAiOjE1ODAwNTQ2NDF9.n2-830zbhrEh6OAxn4K_yYtg5pqfmjpZAjoQXgtcuts' -H\"Host: www.baidu.com\" -i\n\n\nHTTP/1.1 200 OK\n\n<!DOCTYPE html>\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"request cookie with token:")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080 -H"Host: www.baidu.com" \\\n--cookie x-rbac-token=V1#restful#eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzQ5LCJ1c2VybmFtZSI6InRlc3QiLCJtYW5hZ2VyIjoiIiwiYXBwaWQiOiJyZXN0ZnVsIiwiaWF0IjoxNTc5NDQ5ODQxLCJleHAiOjE1ODAwNTQ2NDF9.n2-830zbhrEh6OAxn4K_yYtg5pqfmjpZAjoQXgtcuts -i\n\n\nHTTP/1.1 200 OK\n\n<!DOCTYPE html>\n')),Object(i.b)("h4",{id:"get-rbac-user-information"},"Get ",Object(i.b)("inlineCode",{parentName:"h4"},"RBAC")," user information"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/plugin/wolf-rbac/user_info \\\n--cookie x-rbac-token=V1#restful#eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzQ5LCJ1c2VybmFtZSI6InRlc3QiLCJtYW5hZ2VyIjoiIiwiYXBwaWQiOiJyZXN0ZnVsIiwiaWF0IjoxNTc5NDQ5ODQxLCJleHAiOjE1ODAwNTQ2NDF9.n2-830zbhrEh6OAxn4K_yYtg5pqfmjpZAjoQXgtcuts -i\n\n\nHTTP/1.1 200 OK\n{\n    "user_info":{\n        "nickname":"test",\n        "lastLogin":1582816780,\n        "id":749,\n        "username":"test",\n        "appIDs":["restful"],\n        "manager":"none",\n        "permissions":{"USER_LIST":true},\n        "profile":null,\n        "roles":{},\n        "createTime":1578820506,\n        "email":""\n    }\n}\n')),Object(i.b)("h4",{id:"change-rbac-user-password"},"Change 'RBAC' user password"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/plugin/wolf-rbac/change_pwd \\\n-H "Content-Type: application/json" \\\n--cookie x-rbac-token=V1#restful#eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzQ5LCJ1c2VybmFtZSI6InRlc3QiLCJtYW5hZ2VyIjoiIiwiYXBwaWQiOiJyZXN0ZnVsIiwiaWF0IjoxNTc5NDQ5ODQxLCJleHAiOjE1ODAwNTQ2NDF9.n2-830zbhrEh6OAxn4K_yYtg5pqfmjpZAjoQXgtcuts -i \\\n-X PUT -d \'{"oldPassword": "old password", "newPassword": "new password"}\'\n\n\nHTTP/1.1 200 OK\n{"message":"success to change password"}\n')),Object(i.b)("h2",{id:"disable-plugin"},"Disable Plugin"),Object(i.b)("p",null,"When you want to disable the ",Object(i.b)("inlineCode",{parentName:"p"},"wolf-rbac")," plugin, it is very simple,\nyou can delete the corresponding json configuration in the plugin configuration,\nno need to restart the service, it will take effect immediately:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/*",\n    "plugins": {\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "www.baidu.com:80": 1\n        }\n    }\n}\'\n')))}p.isMDXComponent=!0},250:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),s=p(n),d=a,m=s["".concat(l,".").concat(d)]||s[d]||u[d]||i;return n?r.a.createElement(m,c(c({ref:t},b),{},{components:n})):r.a.createElement(m,c({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var b=2;b<i;b++)l[b]=n[b];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);
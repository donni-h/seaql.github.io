"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[52918],{48859:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var a=r(76687);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),l=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(r),h=n,y=u["".concat(p,".").concat(h)]||u[h]||d[h]||o;return r?a.createElement(y,i(i({ref:t},c),{},{components:r})):a.createElement(y,i({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},35114:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=r(31308),n=(r(76687),r(48859));const o={},i="\ud83e\udded Seaography Intro",s={unversionedId:"seaography/seaography-intro",id:"version-0.12.x/seaography/seaography-intro",title:"\ud83e\udded Seaography Intro",description:"If you are building a full-stack application with a web GUI these days, it's likely you'd use GraphQL as the communication interface between frontend and backend. A GraphQL schema is strongly typed and self-documenting, so no doubt frontend developers love them!",source:"@site/versioned_docs/version-0.12.x/10-seaography/01-seaography-intro.md",sourceDirName:"10-seaography",slug:"/seaography/seaography-intro",permalink:"/preview/pr-118/SeaORM/docs/seaography/seaography-intro",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.12.x/10-seaography/01-seaography-intro.md",tags:[],version:"0.12.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1712549571,formattedLastUpdatedAt:"Apr 8, 2024",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Create Index",permalink:"/preview/pr-118/SeaORM/docs/schema-statement/create-index"},next:{title:"Getting Started",permalink:"/preview/pr-118/SeaORM/docs/seaography/getting-started"}},p={},l=[],c={toc:l};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"-seaography-intro"},"\ud83e\udded Seaography Intro"),(0,n.kt)("p",null,"If you are building a full-stack application with a web GUI these days, it's likely you'd use GraphQL as the communication interface between frontend and backend. A GraphQL schema is strongly typed and self-documenting, so no doubt frontend developers love them!"),(0,n.kt)("p",null,"However, building GraphQL resolvers is no easy task for backend developers. There is a huge impedance mismatch between GraphQL and SQL, even though they both deemed relational. Luckily, we've got your back!"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/seaography"},"Seaography")," is a GraphQL framework built on top of SeaORM and ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/async-graphql/async-graphql"},"async-graphql"),". Together with many other Rust libraries (e.g. ",(0,n.kt)("inlineCode",{parentName:"p"},"tokio"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"serde"),"), we argue, the Rust ecosystem provides the best technology for building GraphQL backends!"),(0,n.kt)("p",null,"SeaORM is dynamic by design. ",(0,n.kt)("inlineCode",{parentName:"p"},"async-graphql")," ",(0,n.kt)("inlineCode",{parentName:"p"},"v5.0")," introduced ",(0,n.kt)("a",{parentName:"p",href:"https://docs.rs/async-graphql/latest/async_graphql/dynamic/index.html"},"dynamic schema")," and is a perfect match with SeaORM, as we can take a SeaORM Entity and upgrade it into a GraphQL Entity."),(0,n.kt)("p",null,"Seaography started out as a ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/summer-of-code/blob/main/2022/README.md#1-a-graphql-framework-on-top-of-seaorm"},"Summer of Code 2022 project"),". It is still in an early stage, the current limitations are: 1) No mutation 2) No Data Loader, but nonetheless can be useful in prototyping and building internal-use admin panels."),(0,n.kt)("p",null,"With just a few commands, you can launch a GraphQL server from SeaORM entities!"))}d.isMDXComponent=!0}}]);
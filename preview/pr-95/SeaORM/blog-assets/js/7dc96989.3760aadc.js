"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[2267],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=u(a),d=r,h=p["".concat(l,".").concat(d)]||p[d]||c[d]||o;return a?n.createElement(h,i(i({ref:t},m),{},{components:a})):n.createElement(h,i({ref:t},m))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},74553:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const o={slug:"2021-10-01-whats-new-in-0.2.4",title:"What's new in SeaORM 0.2.4",author:"SeaQL Team",author_title:"Chris Tsang",author_url:"https://github.com/SeaQL",author_image_url:"https://www.sea-ql.org/SeaORM/img/SeaQL.png",tags:["news"]},i=void 0,s={permalink:"/SeaORM/blog/2021-10-01-whats-new-in-0.2.4",editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/blog/2021-10-01-whats-new-in-0.2.4.md",source:"@site/blog/2021-10-01-whats-new-in-0.2.4.md",title:"What's new in SeaORM 0.2.4",description:"\ud83c\udf89 We are pleased to release SeaORM 0.2.4 today! Some feature highlights:",date:"2021-10-01T00:00:00.000Z",formattedDate:"October 1, 2021",tags:[{label:"news",permalink:"/SeaORM/blog/tags/news"}],readingTime:1.76,hasTruncateMarker:!1,authors:[{name:"SeaQL Team",title:"Chris Tsang",url:"https://github.com/SeaQL",imageURL:"https://www.sea-ql.org/SeaORM/img/SeaQL.png"}],frontMatter:{slug:"2021-10-01-whats-new-in-0.2.4",title:"What's new in SeaORM 0.2.4",author:"SeaQL Team",author_title:"Chris Tsang",author_url:"https://github.com/SeaQL",author_image_url:"https://www.sea-ql.org/SeaORM/img/SeaQL.png",tags:["news"]},prevItem:{title:"What's new in SeaORM 0.3.0",permalink:"/SeaORM/blog/2021-10-15-whats-new-in-0.3.0"},nextItem:{title:"Introducing SeaORM",permalink:"/SeaORM/blog/2021-09-20-introducing-sea-orm"}},l={authorsImageUrls:[void 0]},u=[{value:"Better ergonomic when working with custom select list",id:"better-ergonomic-when-working-with-custom-select-list",level:2},{value:"Rename column name &amp; column enum variant",id:"rename-column-name--column-enum-variant",level:2},{value:"<code>not</code> on a condition tree",id:"not-on-a-condition-tree",level:2},{value:"Community",id:"community",level:2}],m={toc:u};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\ud83c\udf89 We are pleased to release SeaORM ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/releases/tag/0.2.4"},(0,r.kt)("inlineCode",{parentName:"a"},"0.2.4"))," today! Some feature highlights:"),(0,r.kt)("h2",{id:"better-ergonomic-when-working-with-custom-select-list"},"Better ergonomic when working with custom select list"),(0,r.kt)("p",null,"[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/pull/208"},"#208"),"] Use ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/0.2.4/sea_orm/entity/prelude/struct.Select.html#method.into_values"},"Select::into_values")," to quickly select a custom column list and destruct as tuple."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use sea_orm::{entity::*, query::*, tests_cfg::cake, DeriveColumn, EnumIter};\n\n#[derive(Copy, Clone, Debug, EnumIter, DeriveColumn)]\nenum QueryAs {\n    CakeName,\n    NumOfCakes,\n}\n\nlet res: Vec<(String, i64)> = cake::Entity::find()\n    .select_only()\n    .column_as(cake::Column::Name, QueryAs::CakeName)\n    .column_as(cake::Column::Id.count(), QueryAs::NumOfCakes)\n    .group_by(cake::Column::Name)\n    .into_values::<_, QueryAs>()\n    .all(&db)\n    .await?;\n\nassert_eq!(\n    res,\n    vec![("Chocolate Forest".to_owned(), 2i64)]\n);\n')),(0,r.kt)("p",null,"Contributed by:"),(0,r.kt)("div",{class:"col col--3 margin-bottom--md"},(0,r.kt)("div",{class:"avatar"},(0,r.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/MuhannadAlrusayni"},(0,r.kt)("img",{src:"https://avatars.githubusercontent.com/u/14802524?v=4"})),(0,r.kt)("div",{class:"avatar__intro"},(0,r.kt)("div",{class:"avatar__name"},"Muhannad")))),(0,r.kt)("h2",{id:"rename-column-name--column-enum-variant"},"Rename column name & column enum variant"),(0,r.kt)("p",null,"[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/pull/209"},"#209"),"] Rename the column name and enum variant of a model attribute, especially helpful when the column name is a Rust keyword."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'mod my_entity {\n    use sea_orm::entity::prelude::*;\n\n    #[derive(Clone, Debug, PartialEq, DeriveEntityModel)]\n    #[sea_orm(table_name = "my_entity")]\n    pub struct Model {\n        #[sea_orm(primary_key, enum_name = "IdentityColumn", column_name = "id")]\n        pub id: i32,\n        #[sea_orm(column_name = "type")]\n        pub type_: String,\n    }\n\n    //...\n}\n\nassert_eq!(my_entity::Column::IdentityColumn.to_string().as_str(), "id");\nassert_eq!(my_entity::Column::Type.to_string().as_str(), "type");\n')),(0,r.kt)("p",null,"Contributed by:"),(0,r.kt)("div",{class:"container"},(0,r.kt)("div",{class:"row"},(0,r.kt)("div",{class:"col col--3 margin-bottom--md"},(0,r.kt)("div",{class:"avatar"},(0,r.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/billy1624"},(0,r.kt)("img",{src:"https://avatars.githubusercontent.com/u/30400950?v=4"})),(0,r.kt)("div",{class:"avatar__intro"},(0,r.kt)("div",{class:"avatar__name"},"Billy Chan")))))),(0,r.kt)("h2",{id:"not-on-a-condition-tree"},(0,r.kt)("inlineCode",{parentName:"h2"},"not")," on a condition tree"),(0,r.kt)("p",null,"[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-query/pull/145"},"#145"),"] Build a complex condition tree with ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/sea-query/0.16.5/sea_query/query/struct.Condition.html"},"Condition"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use sea_orm::{entity::*, query::*, tests_cfg::cake, sea_query::Expr, DbBackend};\n\nassert_eq!(\n    cake::Entity::find()\n        .filter(\n            Condition::all()\n                .add(\n                    Condition::all()\n                        .not()\n                        .add(Expr::val(1).eq(1))\n                        .add(Expr::val(2).eq(2))\n                )\n                .add(\n                    Condition::any()\n                        .add(Expr::val(3).eq(3))\n                        .add(Expr::val(4).eq(4))\n                )\n        )\n        .build(DbBackend::Postgres)\n        .to_string(),\n    r#"SELECT "cake"."id", "cake"."name" FROM "cake" WHERE (NOT (1 = 1 AND 2 = 2)) AND (3 = 3 OR 4 = 4)"#\n);\n')),(0,r.kt)("p",null,"Contributed by:"),(0,r.kt)("div",{class:"container"},(0,r.kt)("div",{class:"row"},(0,r.kt)("div",{class:"col col--3 margin-bottom--md"},(0,r.kt)("div",{class:"avatar"},(0,r.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/nitnelave"},(0,r.kt)("img",{src:"https://avatars.githubusercontent.com/u/796633?v=4"})),(0,r.kt)("div",{class:"avatar__intro"},(0,r.kt)("div",{class:"avatar__name"},"nitnelave")))),(0,r.kt)("div",{class:"col col--3 margin-bottom--md"},(0,r.kt)("div",{class:"avatar"},(0,r.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/6xzo"},(0,r.kt)("img",{src:"https://avatars.githubusercontent.com/u/36180574?v=4"})),(0,r.kt)("div",{class:"avatar__intro"},(0,r.kt)("div",{class:"avatar__name"},"6xzo")))))),(0,r.kt)("h2",{id:"community"},"Community"),(0,r.kt)("p",null,"SeaQL is a community driven project. We welcome you to participate, contribute and together build for Rust's future."),(0,r.kt)("p",null,"Here is the roadmap for SeaORM ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/milestone/3"},(0,r.kt)("inlineCode",{parentName:"a"},"0.3.x")),"."))}c.isMDXComponent=!0}}]);
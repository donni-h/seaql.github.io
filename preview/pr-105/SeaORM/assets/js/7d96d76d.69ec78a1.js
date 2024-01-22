"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[39302],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),l=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):m(m({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,_=p["".concat(o,".").concat(d)]||p[d]||c[d]||s;return n?a.createElement(_,m(m({ref:t},u),{},{components:n})):a.createElement(_,m({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,m=new Array(s);m[0]=p;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,m[1]=i;for(var l=2;l<s;l++)m[l]=n[l];return a.createElement.apply(null,m)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},97265:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>m,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const s={},m="Create Enum",i={unversionedId:"schema-statement/create-enum",id:"version-0.11.x/schema-statement/create-enum",title:"Create Enum",description:"You can generate SQL statement to create database tables with enum columns via the Schema helper struct.",source:"@site/versioned_docs/version-0.11.x/09-schema-statement/02-create-enum.md",sourceDirName:"09-schema-statement",slug:"/schema-statement/create-enum",permalink:"/preview/pr-105/SeaORM/docs/0.11.x/schema-statement/create-enum",draft:!1,editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.11.x/09-schema-statement/02-create-enum.md",tags:[],version:"0.11.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1691629050,formattedLastUpdatedAt:"Aug 10, 2023",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Create Table",permalink:"/preview/pr-105/SeaORM/docs/0.11.x/schema-statement/create-table"},next:{title:"Create Index",permalink:"/preview/pr-105/SeaORM/docs/0.11.x/schema-statement/create-index"}},o={},l=[{value:"String &amp; Integer Enum",id:"string--integer-enum",level:2},{value:"Native Database Enum",id:"native-database-enum",level:2},{value:"PostgreSQL",id:"postgresql",level:3},{value:"MySQL",id:"mysql",level:3},{value:"SQLite",id:"sqlite",level:3}],u={toc:l};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"create-enum"},"Create Enum"),(0,r.kt)("p",null,"You can generate SQL statement to create database tables with enum columns via the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/schema/struct.Schema.html"},(0,r.kt)("inlineCode",{parentName:"a"},"Schema"))," helper struct."),(0,r.kt)("h2",{id:"string--integer-enum"},"String & Integer Enum"),(0,r.kt)("p",null,"This is just an ordinary string / integer column that maps to a Rust enum. Example entity definition:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="active_enum.rs"',title:'"active_enum.rs"'},'use sea_orm::entity::prelude::*;\n\n#[derive(Clone, Debug, PartialEq, Eq, DeriveEntityModel)]\n#[sea_orm(schema_name = "public", table_name = "active_enum")]\npub struct Model {\n    #[sea_orm(primary_key)]\n    pub id: i32,\n    pub category: Option<Category>,\n    pub color: Option<Color>,\n}\n\n#[derive(Debug, Clone, PartialEq, Eq, EnumIter, DeriveActiveEnum)]\n#[sea_orm(rs_type = "String", db_type = "String(Some(1))")]\npub enum Category {\n    #[sea_orm(string_value = "B")]\n    Big,\n    #[sea_orm(string_value = "S")]\n    Small,\n}\n\n#[derive(Debug, Clone, PartialEq, Eq, EnumIter, DeriveActiveEnum)]\n#[sea_orm(rs_type = "i32", db_type = "Integer")]\npub enum Color {\n    #[sea_orm(num_value = 0)]\n    Black,\n    #[sea_orm(num_value = 1)]\n    White,\n}\n')),(0,r.kt)("p",null,"As an illustration, the enums are just ordinary database columns."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"use sea_orm::{sea_query, Schema};\n\nlet builder = db.get_database_backend();\nlet schema = Schema::new(builder);\n\nassert_eq!(\n    builder.build(&schema.create_table_from_entity(active_enum::Entity)),\n    builder.build(\n        &sea_query::Table::create()\n            .table(active_enum::Entity.table_ref())\n            .col(\n                sea_query::ColumnDef::new(active_enum::Column::Id)\n                    .integer()\n                    .not_null()\n                    .auto_increment()\n                    .primary_key(),\n            )\n            .col(sea_query::ColumnDef::new(active_enum::Column::Category).string_len(1))\n            .col(sea_query::ColumnDef::new(active_enum::Column::Color).integer())\n            .to_owned()\n    )\n);\n")),(0,r.kt)("h2",{id:"native-database-enum"},"Native Database Enum"),(0,r.kt)("p",null,"Enum support is different across databases. Let's go through them one-by-one."),(0,r.kt)("p",null,"Consider the following entity:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="active_enum.rs"',title:'"active_enum.rs"'},'use sea_orm::entity::prelude::*;\n\n#[derive(Clone, Debug, PartialEq, Eq, DeriveEntityModel)]\n#[sea_orm(schema_name = "public", table_name = "active_enum")]\npub struct Model {\n    #[sea_orm(primary_key)]\n    pub id: i32,\n    pub tea: Option<Tea>,\n}\n\n#[derive(Debug, Clone, PartialEq, Eq, EnumIter, DeriveActiveEnum)]\n#[sea_orm(rs_type = "String", db_type = "Enum", enum_name = "tea")]\npub enum Tea {\n    #[sea_orm(string_value = "EverydayTea")]\n    EverydayTea,\n    #[sea_orm(string_value = "BreakfastTea")]\n    BreakfastTea,\n}\n')),(0,r.kt)("p",null,"Note the ",(0,r.kt)("inlineCode",{parentName:"p"},"db_type")," and extra ",(0,r.kt)("inlineCode",{parentName:"p"},"enum_name")," attributes."),(0,r.kt)("h3",{id:"postgresql"},"PostgreSQL"),(0,r.kt)("p",null,"Enums in PostgreSQL are defined by ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/sea-query/*/sea_query/extension/postgres/struct.TypeCreateStatement.html"},(0,r.kt)("inlineCode",{parentName:"a"},"TypeCreateStatement")),", which can be created from an ",(0,r.kt)("inlineCode",{parentName:"p"},"Entity")," with the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/schema/struct.Schema.html#method.create_enum_from_entity"},(0,r.kt)("inlineCode",{parentName:"a"},"Schema::create_enum_from_entity"))," method."),(0,r.kt)("p",null,"You can also create it from ",(0,r.kt)("inlineCode",{parentName:"p"},"ActiveEnum")," with the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/schema/struct.Schema.html#method.create_enum_from_active_enum"},(0,r.kt)("inlineCode",{parentName:"a"},"Schema::create_enum_from_active_enum"))," method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use sea_orm::{Schema, Statement};\n\nlet db_postgres = DbBackend::Postgres;\nlet schema = Schema::new(db_postgres);\n\nassert_eq!(\n    schema\n        .create_enum_from_entity(active_enum::Entity)\n        .iter()\n        .map(|stmt| db_postgres.build(stmt))\n        .collect::<Vec<_>>(),\n    [Statement::from_string(\n        db_postgres,\n        r#"CREATE TYPE "tea" AS ENUM (\'EverydayTea\', \'BreakfastTea\')"#.to_owned()\n    ),]\n);\n\nassert_eq!(\n    db_postgres.build(&schema.create_enum_from_active_enum::<Tea>()),\n    Statement::from_string(\n        db_postgres,\n        r#"CREATE TYPE "tea" AS ENUM (\'EverydayTea\', \'BreakfastTea\')"#.to_owned()\n    )\n);\n\nassert_eq!(\n    db_postgres.build(&schema.create_table_from_entity(active_enum::Entity)),\n    Statement::from_string(\n        db_postgres,\n        [\n            r#"CREATE TABLE "public"."active_enum" ("#,\n            r#""id" serial NOT NULL PRIMARY KEY,"#,\n            r#""tea" tea"#,\n            r#")"#,\n        ]\n        .join(" ")\n    ),\n);\n')),(0,r.kt)("h3",{id:"mysql"},"MySQL"),(0,r.kt)("p",null,"In MySQL, enum is defined on table creation so you only need to call ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/schema/struct.Schema.html#method.create_table_from_entity"},(0,r.kt)("inlineCode",{parentName:"a"},"Schema::create_table_from_entity"))," once."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use sea_orm::{Schema, Statement};\n\nlet db_mysql = DbBackend::MySql;\nlet schema = Schema::new(db_mysql);\n\nassert_eq!(\n    db_mysql.build(&schema.create_table_from_entity(active_enum::Entity)),\n    Statement::from_string(\n        db_mysql,\n        [\n            "CREATE TABLE `active_enum` (",\n            "`id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,",\n            "`tea` ENUM(\'EverydayTea\', \'BreakfastTea\')",\n            ")",\n        ]\n        .join(" ")\n    ),\n);\n')),(0,r.kt)("h3",{id:"sqlite"},"SQLite"),(0,r.kt)("p",null,"Enum is not supported in SQLite so it will be stored as ",(0,r.kt)("inlineCode",{parentName:"p"},"TEXT"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use sea_orm::{Schema, Statement};\n\nlet db_sqlite = DbBackend::Sqlite;\nlet schema = Schema::new(db_sqlite);\n\nassert_eq!(\n    db_sqlite.build(&schema.create_enum_from_entity(active_enum::Entity)),\n    Statement::from_string(\n        db_sqlite,\n        [\n            "CREATE TABLE `active_enum` (",\n            "`id` integer NOT NULL PRIMARY KEY AUTOINCREMENT,",\n            "`tea` text",\n            ")",\n        ]\n        .join(" ")\n    ),\n);\n')))}c.isMDXComponent=!0}}]);
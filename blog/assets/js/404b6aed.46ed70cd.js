"use strict";(self.webpackChunksea_ql_blog=self.webpackChunksea_ql_blog||[]).push([[8122],{8229:(e,t,a)=>{a.d(t,{$j:()=>A,$m:()=>w,AZ:()=>R,At:()=>g,F:()=>h,Hq:()=>T,Jl:()=>x,LM:()=>s,LO:()=>q,Ny:()=>I,O0:()=>C,PP:()=>y,PT:()=>W,Qe:()=>M,Qz:()=>Q,TV:()=>N,Ym:()=>j,db:()=>v,hD:()=>O,k9:()=>S,kX:()=>p,lm:()=>E,np:()=>P,o8:()=>B,oe:()=>d,oi:()=>m,pt:()=>k,rL:()=>f,rX:()=>L,vD:()=>b});var o=a(6687),n=a(7084),l=a(764),r=a(3404);async function i(e,t){new r.ZP(document.getElementById(e),{type:"pie",data:{labels:t.map((e=>e.label)),datasets:[{data:t.map((e=>e.count))}]},plugins:[l.Z,n.Z],options:{responsive:!0,plugins:{legend:{position:"left"},datalabels:{formatter:function(e,t){let a=0;t.chart.data.datasets[0].data.map((e=>{a+=e}));const o=(100*e/a).toFixed(0);return o<=2?null:o+"%"},font:{weight:"800"},color:"rgb(28, 30, 33)"}},aspectRatio:2.5}})}async function u(e,t){new r.ZP(document.getElementById(e),{type:"bar",data:{labels:t.map((e=>e.label)),datasets:[{data:t.map((e=>e.count))}]},plugins:[l.Z,n.Z],options:{responsive:!0,indexAxis:"y",plugins:{legend:{display:!1},datalabels:{formatter:function(e,t){let a=0;t.chart.data.datasets[0].data.map((e=>{a+=e}));const o=(100*e/a).toFixed(0);return o<=1?null:o+"%"},font:{weight:"800"},color:"rgb(28, 30, 33)"}}}})}function s(e){return e.items.map((e=>o.createElement("span",{class:"badge badge--secondary badge-dark-mode",style:{marginRight:"6px",marginBottom:"6px"}},e)))}function c(e){return o.createElement("div",{style:{marginBottom:"60px"}},o.createElement("canvas",{id:e.id,class:"chart-js",style:{width:"100%",margin:"auto auto",marginBottom:"10px"}}),e.children)}function d(e){const t="numUsingSeaQL",a=[{label:"Yes",count:492},{label:"No",count:32}];return(0,o.useEffect)((()=>{i(t,a)})),o.createElement(c,{id:t},e.children)}function h(e){const t="numUsingSeaQLLib",a=[{label:"SeaORM",count:489},{label:"SeaQuery",count:227},{label:"SeaSchema",count:70},{label:"Other",count:10}];return(0,o.useEffect)((()=>{u(t,a)})),o.createElement(c,{id:t},e.children)}function m(e){const t="numUsingContext",a=[{label:"Personal (Hobby)",count:297},{label:"Professional (Work)",count:188},{label:"Academic (School)",count:6}];return(0,o.useEffect)((()=>{i(t,a)})),o.createElement(c,{id:t},e.children)}function b(e){const t="numCountry",a=[{label:"Germany",count:86},{label:"United States of America",count:76},{label:"China",count:35},{label:"India",count:19},{label:"Canada",count:12},{label:"France",count:12},{label:"Russia",count:12},{label:"The Netherlands",count:12},{label:"Czech Republic",count:12},{label:"New Zealand",count:9},{label:"Switzerland",count:9},{label:"Brazil",count:9},{label:"United Kingdom",count:9},{label:"Other",count:108}];return(0,o.useEffect)((()=>{u(t,a)})),o.createElement(c,{id:t},e.children)}function p(e){const t="numTeamMember",a=[{label:"1",count:100},{label:"2",count:21},{label:"3",count:9},{label:"4",count:1},{label:"5",count:8},{label:"6",count:3},{label:"8",count:1},{label:"10",count:1},{label:"11",count:1}];return(0,o.useEffect)((()=>{u(t,a)})),o.createElement(c,{id:t},e.children)}function k(e){const t="projNature",a=[{label:"Server for a website",count:240},{label:"A micro-service in a complex system",count:64},{label:"Backend of a mobile application",count:48},{label:"Desktop application",count:28},{label:"Enterprise information system",count:22},{label:"Backend for a game",count:16},{label:"Content management system",count:16},{label:"Research project",count:12},{label:"E-commerce",count:12},{label:"Other",count:30}];return(0,o.useEffect)((()=>{u(t,a)})),o.createElement(c,{id:t},e.children)}function y(e){const t="devEnv",a=[{label:"Linux",count:256},{label:"Windows",count:178},{label:"MacOS",count:176}];return(0,o.useEffect)((()=>{u(t,a)})),o.createElement(c,{id:t},e.children)}function g(e){const t="devEnvLinux",a=[{label:"Ubuntu",count:112},{label:"Arch",count:83},{label:"Debian",count:51},{label:"Fedora",count:41},{label:"NixOS",count:28},{label:"Manjaro",count:9},{label:"openSUSE",count:6},{label:"RHEL",count:3},{label:"Mint",count:3}];return(0,o.useEffect)((()=>{i(t,a)})),o.createElement(c,{id:t},e.children)}function f(e){const t="devEnvWin",a=[{label:"Windows (Native)",count:102},{label:"Windows Subsystem for Linux",count:76}];return(0,o.useEffect)((()=>{i(t,a)})),o.createElement(c,{id:t},e.children)}function w(e){const t="devEnvMac",a=[{label:"MacOS (Apple Silicon) (M1, M2, etc)",count:160},{label:"MacOS (Intel)",count:16}];return(0,o.useEffect)((()=>{i(t,a)})),o.createElement(c,{id:t},e.children)}function v(e){const t=[{label:"Postgres",count:348},{label:"SQLite",count:172},{label:"MySQL",count:105},{label:"MariaDB",count:6},{label:"Other",count:21}];return(0,o.useEffect)((()=>{u("db",t)})),o.createElement(c,{id:"db"},e.children)}function q(e){const t="webFramework",a=[{label:"Axum",count:256},{label:"Actix",count:121},{label:"Rocket",count:38},{label:"Poem",count:16},{label:"Tonic",count:12},{label:"Salvo",count:6},{label:"Other",count:6}];return(0,o.useEffect)((()=>{u(t,a)})),o.createElement(c,{id:t},e.children)}function S(e){const t="deployEnv",a=[{label:"Open-source containers (e.g. Docker)",count:243},{label:"Standalone machine or virtual machine",count:166},{label:"Desktop distribution",count:35},{label:"Serverless (e.g. AWS Lambda)",count:12},{label:"Proprietary cloud containers (e.g. AWS Lightsail)",count:6},{label:"Kubernetes",count:6}];return(0,o.useEffect)((()=>{u(t,a)})),o.createElement(c,{id:t},e.children)}function Q(e){const t="useRust",a=[{label:"Yes",count:252},{label:"No",count:272}];return(0,o.useEffect)((()=>{i(t,a)})),o.createElement(c,{id:t},e.children)}function L(e){const t="industry",a=[{label:"Consulting",count:44},{label:"Finance",count:28},{label:"Education",count:19},{label:"Automotive",count:19},{label:"Healthcare",count:12},{label:"Manufacturing",count:9},{label:"SaaS",count:6},{label:"Media",count:5},{label:"Other",count:84}];return(0,o.useEffect)((()=>{u(t,a)})),o.createElement(c,{id:t},e.children)}function E(e){const t="engineer",a=[{label:"1",count:105},{label:"2-4",count:85},{label:"5-9",count:24},{label:"10 or more",count:18}];return(0,o.useEffect)((()=>{u(t,a)})),o.createElement(c,{id:t},e.children)}function R(e){const t="companySize",a=[{label:"1-10",count:121},{label:"10-100",count:76},{label:"100-1000",count:25},{label:"1000+",count:28}];return(0,o.useEffect)((()=>{i(t,a)})),o.createElement(c,{id:t},e.children)}function A(e){const t="techStack",a=[{label:"Backend / internal web services",count:230},{label:"Development / build tools",count:89},{label:"Public-facing web services",count:73},{label:"System infrastructure",count:70},{label:"Frontend",count:44},{label:"Libraries",count:3}];return(0,o.useEffect)((()=>{u(t,a)})),o.createElement(c,{id:t},e.children)}function M(e){const t="learningRust",a=[{label:"Yes",count:291},{label:"No",count:233}];return(0,o.useEffect)((()=>{i(t,a)})),o.createElement(c,{id:t},e.children)}function O(e){const t="familiarLanguage",a=[{label:"Javascript",count:176},{label:"Typescript",count:160},{label:"Python",count:118},{label:"Java",count:108},{label:"C / C++",count:76},{label:"C#",count:67},{label:"Go",count:54},{label:"PHP",count:44},{label:"Swift",count:22},{label:"Kotlin",count:19},{label:"Ruby",count:12},{label:"Other",count:30}];return(0,o.useEffect)((()=>{u(t,a)})),o.createElement(c,{id:t},e.children)}function T(e){const t="hardToLearn",a=[{label:"Okay: concepts are difficult to grasp, but manageable",count:220},{label:"Easy: I feel right at home",count:67},{label:"Hard: I struggle in getting Rust code to compile",count:3}];return(0,o.useEffect)((()=>{i(t,a)})),o.createElement(c,{id:t},e.children)}function N(e){const t="motivation",a=[{label:"The joy of programming",count:249},{label:"Rust is popular",count:131},{label:"Career advancement",count:102},{label:"Other",count:60}];return(0,o.useEffect)((()=>{i(t,a)})),o.createElement(c,{id:t},e.children)}function x(e){const t="learningResource",a=[{label:"Official documentation",count:272},{label:"Online tutorials / articles",count:249},{label:"GitHub projects",count:201},{label:"Books",count:112},{label:"Other",count:27}];return(0,o.useEffect)((()=>{i(t,a)})),o.createElement(c,{id:t},e.children)}function W(e){const t="firstProj",a=[{label:"Website",count:166},{label:"CLI Tool",count:34},{label:"Game",count:25},{label:"Backend API",count:19},{label:"Other",count:36}];return(0,o.useEffect)((()=>{i(t,a)})),o.createElement(c,{id:t},e.children)}function I(e){const t="whySeaQL",a=[{label:"Nice documentation",count:67},{label:"Easy to get started",count:46},{label:"A popular choice",count:31},{label:"Plentiful examples",count:28},{label:"Friendly community",count:16},{label:"Other",count:60}];return(0,o.useEffect)((()=>{u(t,a)})),o.createElement(c,{id:t},e.children)}function j(e){const t="familiarWithSql",a=[{label:"Intermediate: some experience",count:182},{label:"Expert: savvy SQL user",count:64},{label:"Beginner: basic knowledge",count:44}];return(0,o.useEffect)((()=>{i(t,a)})),o.createElement(c,{id:t},e.children)}function P(e){const t="quality",a=[{label:"Async and runtime-dynamic",count:416},{label:"Comprehensive type system",count:358},{label:"High-level abstraction",count:320},{label:"Modular and non-monolithic",count:224},{label:"Other",count:24}];return(0,o.useEffect)((()=>{u(t,a)})),o.createElement(c,{id:t},e.children)}function C(e){const t="advancement",a=[{label:"Greater Postgres feature coverage",count:300},{label:"Tighter SQLite integration",count:92},{label:"First-class GraphQL integration",count:89},{label:"NewSQL database support (e.g. TiDB, CockroachDB)",count:80},{label:"Event stream and SeaStreamer integration",count:67},{label:"Other",count:102}];return(0,o.useEffect)((()=>{u(t,a)})),o.createElement(c,{id:t},e.children)}function B(e){const t="firstPartySupport",a=[{label:"Schema management suite (like Flyway)",count:208},{label:"Data admin panel (like Django Admin)",count:182},{label:"Monitoring dashboard (like AppSignal)",count:169},{label:"Other",count:12}];return(0,o.useEffect)((()=>{i(t,a)})),o.createElement(c,{id:t},e.children)}},5348:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>u,toc:()=>c});var o=a(1308),n=(a(6687),a(9680)),l=a(8229);const r={slug:"2024-01-18-community-survey-2023",title:"SeaQL Community Survey 2023 Results",author:"SeaQL Team",author_title:"Billy Chan",author_url:"https://github.com/SeaQL",author_image_url:"https://www.sea-ql.org/SeaORM/img/SeaQL.png",tags:["news"],toc_max_heading_level:2},i=void 0,u={permalink:"/blog/2024-01-18-community-survey-2023",editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/Blog/blog/2024-01-18-community-survey-2023.mdx",source:"@site/blog/2024-01-18-community-survey-2023.mdx",title:"SeaQL Community Survey 2023 Results",description:"524 members of the SeaQL community from 41 countries kindly contributed their thoughts on using SeaQL libraries, learning Rust and employing Rust in their day to day development lives.",date:"2024-01-18T00:00:00.000Z",formattedDate:"January 18, 2024",tags:[{label:"news",permalink:"/blog/tags/news"}],readingTime:9.08,hasTruncateMarker:!1,authors:[{name:"SeaQL Team",title:"Billy Chan",url:"https://github.com/SeaQL",imageURL:"https://www.sea-ql.org/SeaORM/img/SeaQL.png"}],frontMatter:{slug:"2024-01-18-community-survey-2023",title:"SeaQL Community Survey 2023 Results",author:"SeaQL Team",author_title:"Billy Chan",author_url:"https://github.com/SeaQL",author_image_url:"https://www.sea-ql.org/SeaORM/img/SeaQL.png",tags:["news"],toc_max_heading_level:2},prevItem:{title:"What's new in SeaORM 0.12.x",permalink:"/blog/2024-01-23-whats-new-in-seaorm-0.12.x"},nextItem:{title:"OpenUK Award 2023 \ud83c\udfc6",permalink:"/blog/2023-11-25-openuk-award"}},s={authorsImageUrls:[void 0]},c=[{value:"Demographics",id:"demographics",level:2},{value:"Q. Where are you located in?",id:"q-where-are-you-located-in",level:3},{value:"Use of SeaQL Libraries",id:"use-of-seaql-libraries",level:2},{value:"Q. Are you using SeaQL libraries in building a project?",id:"q-are-you-using-seaql-libraries-in-building-a-project",level:3},{value:"Q. Which SeaQL libraries are you using in building a project?",id:"q-which-seaql-libraries-are-you-using-in-building-a-project",level:3},{value:"Q. Are you using SeaQL libraries in a personal, academic or professional context?",id:"q-are-you-using-seaql-libraries-in-a-personal-academic-or-professional-context",level:3},{value:"Q. Why did you choose SeaQL libraries?",id:"q-why-did-you-choose-seaql-libraries",level:3},{value:"Q. What qualities of SeaQL libraries do you think are important?",id:"q-what-qualities-of-seaql-libraries-do-you-think-are-important",level:3},{value:"Team &amp; Project Nature",id:"team--project-nature",level:2},{value:"Q. How many team members (including you) are working on the project?",id:"q-how-many-team-members-including-you-are-working-on-the-project",level:3},{value:"Q. Can you categorize the nature of the project?",id:"q-can-you-categorize-the-nature-of-the-project",level:3},{value:"Tech Stack",id:"tech-stack",level:2},{value:"Q. What is your development environment?",id:"q-what-is-your-development-environment",level:3},{value:"Linux Breakdown",id:"linux-breakdown",level:3},{value:"Windows Breakdown",id:"windows-breakdown",level:3},{value:"macOS Breakdown",id:"macos-breakdown",level:3},{value:"Q. Which database(s) do you use?",id:"q-which-databases-do-you-use",level:3},{value:"Q. Which web framework are you using?",id:"q-which-web-framework-are-you-using",level:3},{value:"Q. What is the deployment environment?",id:"q-what-is-the-deployment-environment",level:3},{value:"Rust at Work",id:"rust-at-work",level:2},{value:"Q. Are you using Rust at work?",id:"q-are-you-using-rust-at-work",level:3},{value:"Q. Which industry your company is in?",id:"q-which-industry-your-company-is-in",level:3},{value:"Vague description of the company",id:"vague-description-of-the-company",level:4},{value:"Q. What is the size of your company?",id:"q-what-is-the-size-of-your-company",level:3},{value:"Q. How many engineers in your company are dedicated to writing Rust?",id:"q-how-many-engineers-in-your-company-are-dedicated-to-writing-rust",level:3},{value:"Q. Which layer(s) of the technology stack are using Rust?",id:"q-which-layers-of-the-technology-stack-are-using-rust",level:3},{value:"Learning Rust",id:"learning-rust",level:2},{value:"Q. Are you learning / new to Rust?",id:"q-are-you-learning--new-to-rust",level:3},{value:"Q. Which language(s) are you most familiar with?",id:"q-which-languages-are-you-most-familiar-with",level:3},{value:"Q. Are you familiar with SQL?",id:"q-are-you-familiar-with-sql",level:3},{value:"Q. Do you find Rust easy or hard to learn?",id:"q-do-you-find-rust-easy-or-hard-to-learn",level:3},{value:"Q. What motivates you to learn Rust?",id:"q-what-motivates-you-to-learn-rust",level:3},{value:"Q. What learning resources do you rely on?",id:"q-what-learning-resources-do-you-rely-on",level:3},{value:"Q. What is your first project built using Rust?",id:"q-what-is-your-first-project-built-using-rust",level:3},{value:"What&#39;s Next",id:"whats-next",level:2},{value:"Q. Which aspects do you want to see advancement on SeaORM?",id:"q-which-aspects-do-you-want-to-see-advancement-on-seaorm",level:3},{value:"Q. What tools would you be interested in using, if developed first-party by SeaQL?",id:"q-what-tools-would-you-be-interested-in-using-if-developed-first-party-by-seaql",level:3},{value:"Share Your Thoughts",id:"share-your-thoughts",level:2},{value:"Q. Anything else you want to say?",id:"q-anything-else-you-want-to-say",level:3},{value:"Rustacean Sticker Pack \ud83e\udd80",id:"rustacean-sticker-pack-",level:2}],d={toc:c};function h(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"524 members of the SeaQL community from 41 countries kindly contributed their thoughts on using SeaQL libraries, learning Rust and employing Rust in their day to day development lives.\nFrom these responses we hope to get an understanding of where the SeaQL and Rust community stands in 2023."),(0,n.kt)("p",null,"This is our first community survey, we will conduct the survey annually to keep track of how the community evolves over time."),(0,n.kt)("h2",{id:"demographics"},"Demographics"),(0,n.kt)("h3",{id:"q-where-are-you-located-in"},"Q. Where are you located in?"),(0,n.kt)("p",null,"Participants are from 41 countries across the world!"),(0,n.kt)(l.vD,null,"Other: ",(0,n.kt)(l.LM,{items:["Argentina","Australia","Austria","Belarus","Belgium","Cyprus","Czechia","Denmark","Hungary","Iran","Ireland","Italy","Japan","Kazakstan","Korea","Mongolia","Nigeria","Norway","Peru","Poland","Slovakia","South Africa","Spain","Sweden","Taiwan ","Thailand","Turkey","Ukraine"]})),(0,n.kt)("h2",{id:"use-of-seaql-libraries"},"Use of SeaQL Libraries"),(0,n.kt)("h3",{id:"q-are-you-using-seaql-libraries-in-building-a-project"},"Q. Are you using SeaQL libraries in building a project?"),(0,n.kt)(l.oe,null),(0,n.kt)("h3",{id:"q-which-seaql-libraries-are-you-using-in-building-a-project"},"Q. Which SeaQL libraries are you using in building a project?"),(0,n.kt)(l.F,null,"Other: ",(0,n.kt)(l.LM,{items:["Seaography","SeaStreamer"]})),(0,n.kt)("h3",{id:"q-are-you-using-seaql-libraries-in-a-personal-academic-or-professional-context"},"Q. Are you using SeaQL libraries in a personal, academic or professional context?"),(0,n.kt)(l.oi,null),(0,n.kt)("h3",{id:"q-why-did-you-choose-seaql-libraries"},"Q. Why did you choose SeaQL libraries?"),(0,n.kt)(l.Ny,null,"Other: ",(0,n.kt)(l.LM,{items:["Async support, future proof and good documentation","Good Query Performance","It was recommended on websites and YouTube","Does not use SQL for migrations","Beginner-friendly and easy to get started","Easy to translate from Eloquent ORM knowledge","Can drop in to SeaQuery if necessary","I started with SQLx, then tried SeaQuery","I found good examples on YouTube"]})),(0,n.kt)("h3",{id:"q-what-qualities-of-seaql-libraries-do-you-think-are-important"},"Q. What qualities of SeaQL libraries do you think are important?"),(0,n.kt)(l.np,null,"Other: ",(0,n.kt)(l.LM,{items:["Simple Syntax","Being able to easily express what you would otherwise be able to write in pure SQL","Migration and entity generation","Clarify of the implementation and usage patterns","Efficient query building especially with relations and joins","Ergonomic API"]})),(0,n.kt)("h2",{id:"team--project-nature"},"Team & Project Nature"),(0,n.kt)("h3",{id:"q-how-many-team-members-including-you-are-working-on-the-project"},"Q. How many team members (including you) are working on the project?"),(0,n.kt)(l.kX,null),(0,n.kt)("h3",{id:"q-can-you-categorize-the-nature-of-the-project"},"Q. Can you categorize the nature of the project?"),(0,n.kt)(l.pt,null,"Other: ",(0,n.kt)(l.LM,{items:["Forecasting","Financial trading","Enterprise Resource Planning (ERP)","Fintech","Cloud infrstructure automation","Backend for desktop, mobile and web application"]})),(0,n.kt)("h2",{id:"tech-stack"},"Tech Stack"),(0,n.kt)("h3",{id:"q-what-is-your-development-environment"},"Q. What is your development environment?"),(0,n.kt)(l.PP,null),(0,n.kt)("h3",{id:"linux-breakdown"},"Linux Breakdown"),(0,n.kt)(l.At,null),(0,n.kt)("h3",{id:"windows-breakdown"},"Windows Breakdown"),(0,n.kt)(l.rL,null),(0,n.kt)("h3",{id:"macos-breakdown"},"macOS Breakdown"),(0,n.kt)(l.$m,null),(0,n.kt)("h3",{id:"q-which-databases-do-you-use"},"Q. Which database(s) do you use?"),(0,n.kt)(l.db,null),(0,n.kt)("h3",{id:"q-which-web-framework-are-you-using"},"Q. Which web framework are you using?"),(0,n.kt)(l.LO,null),(0,n.kt)("h3",{id:"q-what-is-the-deployment-environment"},"Q. What is the deployment environment?"),(0,n.kt)(l.k9,null),(0,n.kt)("h2",{id:"rust-at-work"},"Rust at Work"),(0,n.kt)("h3",{id:"q-are-you-using-rust-at-work"},"Q. Are you using Rust at work?"),(0,n.kt)(l.Qz,null),(0,n.kt)("h3",{id:"q-which-industry-your-company-is-in"},"Q. Which industry your company is in?"),(0,n.kt)(l.rX,null),(0,n.kt)("h4",{id:"vague-description-of-the-company"},"Vague description of the company"),(0,n.kt)(l.LM,{items:["A banking company","A business to business lending platform","A cloud Storage","A consulting company","A cybersecurity management platform","An IT solution company","An E-Commerce clothing store","A children entertainmets company","A factory construction management platform","A fintech startup","A geology technology company","A publicly traded health-tech company","A private restaurant chain","An industrial IoT for heating and water distributions","An internet provider","A nonprofit tech research organization","A payment service provider","A road intelligence company","A SaaS startup","A server hosting provider","A DevOps platform that helps our users scale their Kubernetes application","An Automotive company"]}),(0,n.kt)("h3",{id:"q-what-is-the-size-of-your-company"},"Q. What is the size of your company?"),(0,n.kt)(l.AZ,null),(0,n.kt)("h3",{id:"q-how-many-engineers-in-your-company-are-dedicated-to-writing-rust"},"Q. How many engineers in your company are dedicated to writing Rust?"),(0,n.kt)(l.lm,null),(0,n.kt)("h3",{id:"q-which-layers-of-the-technology-stack-are-using-rust"},"Q. Which layer(s) of the technology stack are using Rust?"),(0,n.kt)(l.$j,null),(0,n.kt)("h2",{id:"learning-rust"},"Learning Rust"),(0,n.kt)("h3",{id:"q-are-you-learning--new-to-rust"},"Q. Are you learning / new to Rust?"),(0,n.kt)(l.Qe,null),(0,n.kt)("h3",{id:"q-which-languages-are-you-most-familiar-with"},"Q. Which language(s) are you most familiar with?"),(0,n.kt)(l.hD,null),(0,n.kt)("h3",{id:"q-are-you-familiar-with-sql"},"Q. Are you familiar with SQL?"),(0,n.kt)(l.Ym,null),(0,n.kt)("h3",{id:"q-do-you-find-rust-easy-or-hard-to-learn"},"Q. Do you find Rust easy or hard to learn?"),(0,n.kt)(l.Hq,null),(0,n.kt)("h3",{id:"q-what-motivates-you-to-learn-rust"},"Q. What motivates you to learn Rust?"),(0,n.kt)(l.TV,null,"Other: ",(0,n.kt)(l.LM,{items:["Ability to develop fast, secure and standalone API driven tools","Efficiency, safety, low resource usage","Good design decisions from the start","Reliability and ease of development","School makes me to learn","Rust is too cool","The ecosystem of libraries + general competence of lib authors","It is the most loved language","The guarantees Rust provides","Learning something new","Type safety and speed","Want to get away from NULL","No boilerplate, if you do not want it","Performance"]})),(0,n.kt)("h3",{id:"q-what-learning-resources-do-you-rely-on"},"Q. What learning resources do you rely on?"),(0,n.kt)(l.Jl,null,"Other: ",(0,n.kt)(l.LM,{items:["YouTube","Online Courses","ChatGPT"]})),(0,n.kt)("h3",{id:"q-what-is-your-first-project-built-using-rust"},"Q. What is your first project built using Rust?"),(0,n.kt)(l.PT,null,"Other: ",(0,n.kt)(l.LM,{items:["Chatbot","Scraper","Rasterization of the mandelbrot set","IoT","Library"]})),(0,n.kt)("h2",{id:"whats-next"},"What's Next"),(0,n.kt)("h3",{id:"q-which-aspects-do-you-want-to-see-advancement-on-seaorm"},"Q. Which aspects do you want to see advancement on SeaORM?"),(0,n.kt)("p",null,"Thank you for all the suggestions, we will certainly take them into account!"),(0,n.kt)(l.O0,null,"Other: ",(0,n.kt)(l.LM,{items:["Full MySQL coverage","MS SQL Server support","Structured queries for complex joins","A stable release","Data seeding","Migrations based on Entity diffs","Type safety","Support tables without primary key","Turso integration","Fetching nested structures","Views"]})),(0,n.kt)("h3",{id:"q-what-tools-would-you-be-interested-in-using-if-developed-first-party-by-seaql"},"Q. What tools would you be interested in using, if developed first-party by SeaQL?"),(0,n.kt)(l.o8,null,"Other: ",(0,n.kt)(l.LM,{items:["An API integration testing utility","An oso-based authorization integration","A visual tool for managing migrations","Database layout editor (like dbdiagram.io)"]})),(0,n.kt)("h2",{id:"share-your-thoughts"},"Share Your Thoughts"),(0,n.kt)("h3",{id:"q-anything-else-you-want-to-say"},"Q. Anything else you want to say?"),(0,n.kt)("p",null,"Didn't expect this section to turn into a testimonial, thank you for all the kind words :)"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Good job yall")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Great projects, thanks for your hard work")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"I expect it to be an asynchronous type-safe library. Keep up the good work!")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"I'd like to see entity generation without a database")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The website, support from JetBrains, the documentation and the release cycle are very nice!")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"I'm very interested in how SeaORM will continue evolving and I would like to wish you the best of luck!")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"I've found SeaORM very useful and I'm very grateful to the development team for creating and maintaining it!")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"In TypeORM I can write entities and then generate migration from them. It's very handy. It helps to increase development speed. It would be nice to have this functionality in SeaORM.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"It needs to have better integration with SeaQuery, I sometimes need to get to it because not all features are available in SeaORM which makes it a pain.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Keep the good work!")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Keep going! Love SeaORM!")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Keep up the great work. Rust needs a fast, ergonomic and reliable ORM.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"SeaORM is very powerful, but the rust docs and tutorial examples could be more fleshed out.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"SeaORM is an awesome library. Most things are quite concise and therefore straightforward. Simply a few edge cases concerning DB specific types and values could be better.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The trait system is too complex and coding experience is not pretty well with that.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Automatic migration generation would make the library pretty much perfect in my opinion.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"SeaQL tutorials could be better. Much more detailed explanation and definitely it has to have best practices section for Design Patterns like and good best practices related with clean architecture.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"SeaQL are great products and it\u2019s very enjoyable using them")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Thank you <3")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Thank you for awesome library!")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Thank you for this wonderful project. I feel the documentation lacks examples for small functions and usage of some obscure features.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Thank you for your hard work!")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Thank you for your work on SeaQL, your efforts are appreciated ")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Thank you for your work, we are seeking actively to include SeaORM in our projects")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Thank you very much for your work!")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Thanks a lot for the amazing work you guys put into this set of libraries. This is an amazing development for the rust ecosystem.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Thanks and keep up the good work.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Thanks for a great tool!")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Thanks for all the amazing work.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Thanks for making SeaORM!")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The project I am doing for work is only a prototype, it's a new implementation of a current Python forecasting project which uses a pandas and a custom psycopg2 orm. My intent is to create a faster/dev friendly version with SeaORM and Polars. I am hoping to eventually get a prototype I can display to my team to get a go ahead to fully develop a new version, and to migrate 4-5 other forecasting apps using shared libraries for io and calculations.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"I have also been using SeaORM for a small API client for financial data, which I may make open source.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"I think one thing which could really improve SeaORM is some more advance examples in the documentation section. The docs are really detailed as far as rust documentation goes.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Very promising project, keep it up.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Thank you so much for taking it upon yourselves to selflessly give your free time. It probably doesn't matter much, but thank you so much for your work. SeaORM is a fantastic tool that I can see myself using for a long time to come. I hope to make contributions in any form when I am under better circumstances :3 Kudos to the team!")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u4f60\u4eec\u7684\u5e93\u975e\u5e38\u7684\u68d2\uff0c\u81f3\u5c11\u6211\u89c9\u5f97\u6bd4Diesel\u597d\u592a\u591a\u4e86\uff0c\u5165\u95e8\u7b80\u5355\uff0c\u5bf9\u65b0\u624b\u975e\u5e38\u53cb\u597d\uff0c\u8fd9\u662f\u6700\u5927\u7684\u4eae\u70b9\uff0c\u5176\u6b21\u662f\u5e93\u8c8c\u4f3c\u53ef\u4ee5\u5b9e\u73b0\u5f88\u590d\u6742\u7684Join SQL\u903b\u8f91\u800c\u4e0d\u7528\u5199\u539f\u751f\u7684SQL\uff0c\u8fd9\u70b9\u4e5f\u662f\u975e\u5e38\u503c\u5f97\u70b9\u8d5e\u7684\uff0c\u4f46\u662f\u5728\u8fd9\u5757\u7684\u6587\u6863\u8c8c\u4f3c\u5199\u7684\u6709\u70b9\u7b80\u7565\u4e86\uff0c\u5e0c\u671b\u53ef\u4ee5\u4e30\u5bcc\u4e00\u4e0b\u6587\u6863\u5185\u5bb9\uff0c\u5bf9\u4e8e\u590d\u6742\u67e5\u8be2\u7684\u8bf4\u660e\u53ef\u4ee5\u66f4\u52a0\u8be6\u7ec6\u4e00\u4e9b\uff0c\u8fd9\u6837\u5c31\u518d\u597d\u4e0d\u8fc7\u4e86\u3002\u8c22\u8c22\u4f60\u4eec\uff0c\u6211\u4f1a\u6301\u7eed\u5173\u6ce8\u4f60\u4eec\uff0c\u672a\u6765\u7684\u9879\u76ee\u5982\u679c\u6d89\u53caORM\uff0c\u90a3\u7edd\u5bf9\u975e\u4f60\u4eec\u83ab\u5c5e\u4e86\uff01")),(0,n.kt)("h2",{id:"rustacean-sticker-pack-"},"Rustacean Sticker Pack \ud83e\udd80"),(0,n.kt)("p",null,"The Rustacean Sticker Pack is the perfect way to express your passion for Rust.\nOur stickers are made with a premium water-resistant vinyl with a unique matte finish.\nStick them on your laptop, notebook, or any gadget to show off your love for Rust!"),(0,n.kt)("p",null,"Moreover, all proceeds contributes directly to the ongoing development of SeaQL projects."),(0,n.kt)("p",null,"Sticker Pack Contents:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Logo of SeaQL projects: SeaQL, SeaORM, SeaQuery, Seaography, FireDBG"),(0,n.kt)("li",{parentName:"ul"},"Mascot of SeaQL: Terres the Hermit Crab"),(0,n.kt)("li",{parentName:"ul"},"Mascot of Rust: Ferris the Crab"),(0,n.kt)("li",{parentName:"ul"},"The Rustacean word")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.sea-ql.org/sticker-pack/"},"Support SeaQL and get a Sticker Pack!")),(0,n.kt)("a",{href:"https://www.sea-ql.org/sticker-pack/"},(0,n.kt)("img",{style:{borderRadius:"25px"},alt:"Rustacean Sticker Pack by SeaQL",src:"https://www.sea-ql.org/static/sticker-pack-1s.jpg"})))}h.isMDXComponent=!0}}]);
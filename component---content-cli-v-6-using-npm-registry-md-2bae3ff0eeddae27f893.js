(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{O6H6:function(e,t,n){"use strict";var a=n("vOnD"),i=n("u9kb"),o=n("aOgs"),r=n("q1tI"),l=n.n(r),c=n("7ljp"),s=n("pD55"),p=n("8Aig"),m=n("ReZb"),b=n("GCVy"),u=n("+6vE");var h=function(e){var t=e.children;return l.a.createElement(i.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},l.a.createElement(i.s,{fontFamily:"mono",fontSize:1},t))};var d=function(e){var t=e.children;return l.a.createElement("strong",null,t)},g=n("gnlW"),f=n("mwnC"),y=n("/Rw0"),j=n("dVM4"),O=Object(a.f)(i.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none"});function w(e){var t=e.items,n=e.depth;return l.a.createElement(O,{key:t,as:"ul",m:0,p:0},t.map((function(e){return l.a.createElement(i.e,{as:"li",key:e.url,pl:n>0?3:0},l.a.createElement(i.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?l.a.createElement(w,{items:e.items,depth:n+1}):null)})))}w.defaultProps={depth:0};var v=w,N=n("MfeC");function k(e){var t=N.a.getPath(e.location.pathname),n=N.a.getVariantAndPage(e.root,t);if(!n)return null;var a=N.a.getVariantsForPage(e.root,n.page),o=[],r=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(r=e),o.push(l.a.createElement(i.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),l.a.createElement(i.i,{overlay:e.overlay},l.a.createElement(i.i.Button,null,r.variant.title),l.a.createElement(k.Menu,{direction:e.direction,width:e.menuWidth},o)))}k.Menu=Object(a.f)(i.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var C=k,E=Object(a.f)(i.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),I=Object(a.f)(i.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),x=Object(a.f)(i.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),_=Object(a.f)(i.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),S=Object(a.f)(i.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),D=Object(a.f)(i.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,r=n.frontmatter,O=r.title,w=r.description,k=r.status,T=r.source,P=r.additionalContributors,z=void 0===P?[]:P,B=N.a.getVariantRoot(a.pathname);return l.a.createElement(c.a,{components:{Index:m.a,Note:b.a,Prompt:h,PromptReply:d,Screenshot:g.a}},l.a.createElement(i.k,{flexDirection:"column",minHeight:"100vh"},l.a.createElement(s.a,{title:O,description:w}),l.a.createElement(p.b,{location:a}),l.a.createElement(E,{flex:"1 1 auto",flexDirection:"row"},l.a.createElement(i.e,{display:["none",null,null,"block"]},l.a.createElement(f.a,{location:a})),l.a.createElement(I,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},l.a.createElement(x,null,l.a.createElement(i.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},l.a.createElement(i.e,null,l.a.createElement(i.e,null,l.a.createElement(i.m,{as:"h1"},O),w))),null!=B?l.a.createElement(_,null,l.a.createElement(C,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:B,location:a})):null),n.tableOfContents.items?l.a.createElement(S,{display:["none",null,"block"],position:"sticky",top:p.a+24,mt:"6px",maxHeight:"calc(100vh - "+p.a+"px - 24px)"},l.a.createElement(i.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),l.a.createElement(v,{items:n.tableOfContents.items})):null,l.a.createElement(D,null,k||T?l.a.createElement(i.k,{mb:3,alignItems:"center"},k?l.a.createElement(j.a,{status:k}):null,l.a.createElement(i.e,{mx:"auto"}),T?l.a.createElement(y.a,{href:T}):null):null,n.tableOfContents.items?l.a.createElement(i.e,{display:["block",null,"none"],mb:3},l.a.createElement(i.h,null,(function(e){var t=e.open;return l.a.createElement(l.a.Fragment,null,l.a.createElement(i.s,{as:"summary",fontWeight:"bold"},t?l.a.createElement(i.r,{icon:o.b,mr:2}):l.a.createElement(i.r,{icon:o.c,mr:2}),"Table of contents"),l.a.createElement(i.e,{pt:1},l.a.createElement(v,{items:n.tableOfContents.items})))}))):null,t,l.a.createElement(u.a,{editUrl:n.editUrl,contributors:n.contributors.concat(z.map((function(e){return{login:e}})))}))))))}},wmNE:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return s}));var a=n("zLVn"),i=(n("q1tI"),n("7ljp")),o=n("O6H6"),r={},l={_frontmatter:r},c=o.a;function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)(c,Object.assign({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",null,"Description"),Object(i.b)("p",null,"To resolve packages by name and version, npm talks to a registry website\nthat implements the CommonJS Package Registry specification for reading\npackage info."),Object(i.b)("p",null,"npm is configured to use npm, Inc.'s public registry at\n",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://registry.npmjs.org"}),"https://registry.npmjs.org")," by default. Use of the npm public registry is\nsubject to terms of use available at ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://www.npmjs.com/policies/terms"}),"https://www.npmjs.com/policies/terms"),"."),Object(i.b)("p",null,"You can configure npm to use any compatible registry you like, and even run\nyour own registry. Use of someone else's registry may be governed by their\nterms of use."),Object(i.b)("p",null,"npm's package registry implementation supports several\nwrite APIs as well, to allow for publishing packages and managing user\naccount information."),Object(i.b)("p",null,"The npm public registry is powered by a CouchDB database,\nof which there is a public mirror at\n",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://skimdb.npmjs.com/registry"}),"https://skimdb.npmjs.com/registry"),".  The code for the couchapp is\navailable at ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/npm/npm-registry-couchapp"}),"https://github.com/npm/npm-registry-couchapp"),"."),Object(i.b)("p",null,"The registry URL used is determined by the scope of the package (see\n",Object(i.b)("a",Object.assign({parentName:"p"},{href:"/cli/v6/using-npm/scope"}),Object(i.b)("inlineCode",{parentName:"a"},"scope")),". If no scope is specified, the default registry is used, which is\nsupplied by the ",Object(i.b)("inlineCode",{parentName:"p"},"registry")," config parameter.  See ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"/cli/v6/commands/npm-config"}),Object(i.b)("inlineCode",{parentName:"a"},"npm config")),",\n",Object(i.b)("a",Object.assign({parentName:"p"},{href:"/cli/v6/configuring-npm/npmrc"}),Object(i.b)("inlineCode",{parentName:"a"},"npmrc")),", and ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"/cli/v6/using-npm/config"}),Object(i.b)("inlineCode",{parentName:"a"},"config"))," for more on managing npm's configuration."),Object(i.b)("h3",null,"Does npm send any information about me back to the registry?"),Object(i.b)("p",null,"Yes."),Object(i.b)("p",null,"When making requests of the registry npm adds two headers with information\nabout your environment:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Npm-Scope")," – If your project is scoped, this header will contain its\nscope. In the future npm hopes to build registry features that use this\ninformation to allow you to customize your experience for your\norganization."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Npm-In-CI"),' – Set to "true" if npm believes this install is running in a\ncontinuous integration environment, "false" otherwise. This is detected by\nlooking for the following environment variables: ',Object(i.b)("inlineCode",{parentName:"li"},"CI"),", ",Object(i.b)("inlineCode",{parentName:"li"},"TDDIUM"),",\n",Object(i.b)("inlineCode",{parentName:"li"},"JENKINS_URL"),", ",Object(i.b)("inlineCode",{parentName:"li"},"bamboo.buildKey"),". If you'd like to learn more you may find\nthe ",Object(i.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/npm/npm-registry-client/pull/129"}),"original PR"),"\ninteresting.\nThis is used to gather better metrics on how npm is used by humans, versus\nbuild farms.")),Object(i.b)("p",null,"The npm registry does not try to correlate the information in these headers\nwith any authenticated accounts that may be used in the same requests."),Object(i.b)("h3",null,"Can I run my own private registry?"),Object(i.b)("p",null,"Yes!"),Object(i.b)("p",null,"The easiest way is to replicate the couch database, and use the same (or\nsimilar) design doc to implement the APIs."),Object(i.b)("p",null,"If you set up continuous replication from the official CouchDB, and then\nset your internal CouchDB as the registry config, then you'll be able\nto read any published packages, in addition to your private ones, and by\ndefault will only publish internally. "),Object(i.b)("p",null,"If you then want to publish a package for the whole world to see, you can\nsimply override the ",Object(i.b)("inlineCode",{parentName:"p"},"--registry")," option for that ",Object(i.b)("inlineCode",{parentName:"p"},"publish")," command."),Object(i.b)("h3",null,"I don't want my package published in the official registry. It's private."),Object(i.b)("p",null,"Set ",Object(i.b)("inlineCode",{parentName:"p"},'"private": true')," in your package.json to prevent it from being\npublished at all, or\n",Object(i.b)("inlineCode",{parentName:"p"},'"publishConfig":{"registry":"http://my-internal-registry.local"}'),"\nto force it to be published only to your internal registry."),Object(i.b)("p",null,"See ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"/cli/v6/configuring-npm/package-json"}),Object(i.b)("inlineCode",{parentName:"a"},"package.json"))," for more info on what goes in the package.json file."),Object(i.b)("h3",null,"Will you replicate from my registry into the public one?"),Object(i.b)("p",null,"No.  If you want things to be public, then publish them into the public\nregistry using npm.  What little security there is would be for nought\notherwise."),Object(i.b)("h3",null,"Do I have to use couchdb to build a registry that npm can talk to?"),Object(i.b)("p",null,"No, but it's way easier.  Basically, yes, you do, or you have to\neffectively implement the entire CouchDB API anyway."),Object(i.b)("h3",null,"Is there a website or something to see package docs and such?"),Object(i.b)("p",null,"Yes, head over to ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://www.npmjs.com/"}),"https://www.npmjs.com/")),Object(i.b)("h3",null,"See also"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object.assign({parentName:"li"},{href:"/cli/v6/commands/npm-config"}),"npm config")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object.assign({parentName:"li"},{href:"/cli/v6/using-npm/config"}),"config")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object.assign({parentName:"li"},{href:"/cli/v6/configuring-npm/npmrc"}),"npmrc")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object.assign({parentName:"li"},{href:"/cli/v6/using-npm/developers"}),"npm developers")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object.assign({parentName:"li"},{href:"/cli/v6/using-npm/disputes"}),"npm disputes"))))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-cli-v-6-using-npm-registry-md-2bae3ff0eeddae27f893.js.map
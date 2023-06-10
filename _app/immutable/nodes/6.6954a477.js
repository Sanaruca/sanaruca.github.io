import{e as Le}from"../chunks/index.93323930.js";import{p as Oe,T as Ae}from"../chunks/projects.c85401d8.js";import{S as Me,i as Ne,s as xe,k as u,a as y,q as b,l as f,m as _,h as c,c as E,r as j,M as ne,n as e,b as w,C as t,g as F,f as De,d as ie,N as qe,I as Ge,y as Pe,z as Ve,A as we,B as ze,v as Be,D as Ue}from"../chunks/index.e5565f93.js";import{p as He}from"../chunks/stores.0d6b3187.js";const Re=function({params:h}){const s=Oe.find(l=>l.name==h.project);if(!s)throw Le(404,"project not found");return{project:s}},Ze=Object.freeze(Object.defineProperty({__proto__:null,load:Re},Symbol.toStringTag,{value:"Module"}));function ke(h,s,l){const i=h.slice();return i[2]=s[l],i}function Fe(h){let s,l=h[2]+"",i;return{c(){s=b("#"),i=b(l)},l(r){s=j(r,"#"),i=j(r,l)},m(r,m){w(r,s,m),w(r,i,m)},p:Ue,d(r){r&&c(s),r&&c(i)}}}function Te(h){let s,l,i;return l=new Ae({props:{$$slots:{default:[Fe]},$$scope:{ctx:h}}}),{c(){s=u("li"),Pe(l.$$.fragment),this.h()},l(r){s=f(r,"LI",{class:!0});var m=_(s);Ve(l.$$.fragment,m),m.forEach(c),this.h()},h(){e(s,"class","svelte-1n0y717")},m(r,m){w(r,s,m),we(l,s,null),i=!0},p(r,m){const N={};m&32&&(N.$$scope={dirty:m,ctx:r}),l.$set(N)},i(r){i||(F(l.$$.fragment,r),i=!0)},o(r){ie(l.$$.fragment,r),i=!1},d(r){r&&c(s),ze(l)}}}function Je(h){let s,l,i,r,m,N,S,$,ue,J,k,I,fe,K,v,x,T,Q,W,D,C,X,Y,q,L,Z,ee,p,z,_e=h[0].name+"",te,se,B,he=h[0].description+"",le,re,O,H,A,g,ae,G,R,M=h[0].usedSkills,n=[];for(let a=0;a<M.length;a+=1)n[a]=Te(ke(h,M,a));const Ce=a=>ie(n[a],1,1,()=>{n[a]=null});return{c(){s=u("section"),l=u("section"),i=u("div"),r=u("img"),N=y(),S=u("div"),$=u("img"),J=y(),k=u("div"),I=u("img"),K=y(),v=u("ul"),x=u("li"),T=u("a"),Q=b("1"),W=y(),D=u("li"),C=u("a"),X=b("2"),Y=y(),q=u("li"),L=u("a"),Z=b("3"),ee=y(),p=u("section"),z=u("h1"),te=b(_e),se=y(),B=u("p"),le=b(he),re=y(),O=u("ul");for(let a=0;a<n.length;a+=1)n[a].c();H=y(),A=u("section"),g=u("a"),ae=b("go to repository "),G=u("i"),this.h()},l(a){s=f(a,"SECTION",{class:!0});var d=_(s);l=f(d,"SECTION",{class:!0});var o=_(l);i=f(o,"DIV",{class:!0,id:!0});var U=_(i);r=f(U,"IMG",{src:!0,alt:!0,srcset:!0,class:!0}),U.forEach(c),N=E(o),S=f(o,"DIV",{class:!0,id:!0});var de=_(S);$=f(de,"IMG",{src:!0,alt:!0,srcset:!0,class:!0}),de.forEach(c),J=E(o),k=f(o,"DIV",{class:!0,id:!0});var me=_(k);I=f(me,"IMG",{src:!0,alt:!0,srcset:!0,class:!0}),me.forEach(c),K=E(o),v=f(o,"UL",{class:!0});var P=_(v);x=f(P,"LI",{class:!0});var ve=_(x);T=f(ve,"A",{href:!0,class:!0});var pe=_(T);Q=j(pe,"1"),pe.forEach(c),ve.forEach(c),W=E(P),D=f(P,"LI",{class:!0});var ge=_(D);C=f(ge,"A",{href:!0,class:!0});var ye=_(C);X=j(ye,"2"),ye.forEach(c),ge.forEach(c),Y=E(P),q=f(P,"LI",{class:!0});var Ee=_(q);L=f(Ee,"A",{href:!0,class:!0});var $e=_(L);Z=j($e,"3"),$e.forEach(c),Ee.forEach(c),P.forEach(c),o.forEach(c),ee=E(d),p=f(d,"SECTION",{});var V=_(p);z=f(V,"H1",{});var Ie=_(z);te=j(Ie,_e),Ie.forEach(c),se=E(V),B=f(V,"P",{});var be=_(B);le=j(be,he),be.forEach(c),re=E(V),O=f(V,"UL",{class:!0});var je=_(O);for(let ce=0;ce<n.length;ce+=1)n[ce].l(je);je.forEach(c),V.forEach(c),d.forEach(c),H=E(a),A=f(a,"SECTION",{class:!0});var Se=_(A);g=f(Se,"A",{href:!0,target:!0,class:!0});var oe=_(g);ae=j(oe,"go to repository "),G=f(oe,"I",{class:!0,"aria-hidden":!0}),_(G).forEach(c),oe.forEach(c),Se.forEach(c),this.h()},h(){ne(r.src,m=h[0].images[0])||e(r,"src",m),e(r,"alt","screenshot"),e(r,"srcset",""),e(r,"class","svelte-1n0y717"),e(i,"class","img-content svelte-1n0y717"),e(i,"id","slide-img1"),ne($.src,ue=h[0].images[2])||e($,"src",ue),e($,"alt","screenshot"),e($,"srcset",""),e($,"class","svelte-1n0y717"),e(S,"class","img-content svelte-1n0y717"),e(S,"id","slide-img3"),ne(I.src,fe=h[0].images[1])||e(I,"src",fe),e(I,"alt","screenshot"),e(I,"srcset",""),e(I,"class","svelte-1n0y717"),e(k,"class","img-content svelte-1n0y717"),e(k,"id","slide-img2"),e(T,"href","#slide-img2"),e(T,"class","svelte-1n0y717"),e(x,"class","svelte-1n0y717"),e(C,"href","#slide-img1"),e(C,"class","svelte-1n0y717"),e(D,"class","svelte-1n0y717"),e(L,"href","#slide-img3"),e(L,"class","svelte-1n0y717"),e(q,"class","svelte-1n0y717"),e(v,"class","img-selection-content flex-content svelte-1n0y717"),e(l,"class","img-slider flex-content svelte-1n0y717"),e(O,"class","tag-content flex-content svelte-1n0y717"),e(s,"class","main-project flex-content black-target svelte-1n0y717"),e(G,"class","fa fa-github"),e(G,"aria-hidden","true"),e(g,"href",h[0].githubRepo),e(g,"target","_blank"),e(g,"class","svelte-1n0y717"),e(A,"class","repo-content flex-content svelte-1n0y717")},m(a,d){w(a,s,d),t(s,l),t(l,i),t(i,r),t(l,N),t(l,S),t(S,$),t(l,J),t(l,k),t(k,I),t(l,K),t(l,v),t(v,x),t(x,T),t(T,Q),t(v,W),t(v,D),t(D,C),t(C,X),t(v,Y),t(v,q),t(q,L),t(L,Z),t(s,ee),t(s,p),t(p,z),t(z,te),t(p,se),t(p,B),t(B,le),t(p,re),t(p,O);for(let o=0;o<n.length;o+=1)n[o]&&n[o].m(O,null);w(a,H,d),w(a,A,d),t(A,g),t(g,ae),t(g,G),R=!0},p(a,[d]){if(d&1){M=a[0].usedSkills;let o;for(o=0;o<M.length;o+=1){const U=ke(a,M,o);n[o]?(n[o].p(U,d),F(n[o],1)):(n[o]=Te(U),n[o].c(),F(n[o],1),n[o].m(O,null))}for(Be(),o=M.length;o<n.length;o+=1)Ce(o);De()}},i(a){if(!R){for(let d=0;d<M.length;d+=1)F(n[d]);R=!0}},o(a){n=n.filter(Boolean);for(let d=0;d<n.length;d+=1)ie(n[d]);R=!1},d(a){a&&c(s),qe(n,a),a&&c(H),a&&c(A)}}}function Ke(h,s,l){let i;return Ge(h,He,m=>l(1,i=m)),[i.data.project]}class et extends Me{constructor(s){super(),Ne(this,s,Ke,Je,xe,{})}}export{et as component,Ze as universal};

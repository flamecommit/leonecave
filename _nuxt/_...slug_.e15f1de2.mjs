import{b as o,J as r,o as _,G as c,K as u,L as l,u as i}from"./entry.3ce320b9.mjs";import{u as p}from"./asyncData.1a7f9dcf.mjs";import{q as m}from"./query.a350cc90.mjs";import"./json.23b9ae8a.mjs";import"./utils.739ee5e5.mjs";const y={class:"page-artworks"},$={__name:"[...slug]",async setup(f){let t,e;const{params:a}=o(),s=a.slug[0],{data:n}=([t,e]=r(()=>p(`content-${s}`,()=>m().where({_path:`/${s}`}).only(["title"]).findOne(),"$ESWBR7Zr45")),t=await t,e(),t);return(g,d)=>(_(),c("main",y,[u("h1",null,l(i(n).title),1)]))}};export{$ as default};
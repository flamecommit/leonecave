import f from"./ContentQuery.56f99e98.mjs";import{a as m,e as y,h as u}from"./entry.3ce320b9.mjs";import"./asyncData.1a7f9dcf.mjs";import"./json.23b9ae8a.mjs";import"./query.a350cc90.mjs";import"./utils.739ee5e5.mjs";const C=m({props:{path:{type:String,required:!1,default:"/"},query:{type:Object,required:!1,default:void 0}},render(p){const e=y(),{path:a,query:d}=p,i=Object.assign(d||{},{path:a}),r=(t,n)=>u("pre",null,JSON.stringify({message:"You should use slots with <ContentList>",slot:t,data:n},null,2));return u(f,i,{default:e!=null&&e.default?({data:t,refresh:n,isPartial:o})=>e==null?void 0:e.default({list:t,refresh:n,isPartial:o,...this.$attrs}):({data:t})=>r("default",t),empty:t=>e!=null&&e.empty?e.empty(t):({data:n})=>r("default",n),"not-found":t=>{var n;return e!=null&&e["not-found"]?(n=e==null?void 0:e["not-found"])==null?void 0:n.call(e,t):({data:o})=>r("not-found",o)}})}});export{C as default};
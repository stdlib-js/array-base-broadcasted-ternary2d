// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import a from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-broadcast-array@v0.2.1-esm/index.mjs";function r(r,s,t){var d,e,i,o,f,n,m,b,c,j,l,p,v,h,u,x,y,g,k,q,w,z,A,B,C,D,E;if(m=(w=s[3])[1],b=w[0],!(m<=0||b<=0))for(B=(A=a(r[0],s[0],w)).data,d=(z=A.strides)[1],e=z[0],C=(A=a(r[1],s[1],w)).data,i=(z=A.strides)[1],o=z[0],D=(A=a(r[2],s[2],w)).data,f=(z=A.strides)[1],n=z[0],E=r[3],p=0,h=0,x=0,j=0;j<b;j++){for(l=0,v=0,u=0,y=B[p],g=C[h],k=D[x],q=E[j],c=0;c<m;c++)q[c]=t(y[l],g[v],k[u]),l+=d,v+=i,u+=f;p+=e,h+=o,x+=n}}export{r as default};
//# sourceMappingURL=index.mjs.map

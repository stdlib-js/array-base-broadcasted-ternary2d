"use strict";var I=function(t,r){return function(){try{return r||t((r={exports:{}}).exports,r),r.exports}catch(o){throw (r=0, o)}};};var H=I(function(M,G){
var y=require('@stdlib/array-base-broadcast-array/dist');function J(t,r,o){var b,j,k,q,w,S,s,u,i,e,x,n,c,f,z,m,A,g,l,B,d,a,v,C,D,E,F;if(d=r[3],s=d[1],u=d[0],!(s<=0||u<=0))for(v=y(t[0],r[0],d),C=v.data,a=v.strides,b=a[1],j=a[0],v=y(t[1],r[1],d),D=v.data,a=v.strides,k=a[1],q=a[0],v=y(t[2],r[2],d),E=v.data,a=v.strides,w=a[1],S=a[0],F=t[3],n=0,f=0,m=0,e=0;e<u;e++){for(x=0,c=0,z=0,A=C[n],g=D[f],l=E[m],B=F[e],i=0;i<s;i++)B[i]=o(A[x],g[c],l[z]),x+=b,c+=k,z+=w;n+=j,f+=q,m+=S}}G.exports=J
});var K=H();module.exports=K;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

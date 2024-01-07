"use strict";var I=function(t,r){return function(){return r||t((r={exports:{}}).exports,r),r.exports}};var G=I(function(M,F){
var m=require('@stdlib/array-base-broadcast-array/dist');function J(t,r,H){var y,b,j,k,q,w,o,s,i,e,u,x,n,c,f,z,S,A,g,l,d,a,v,B,C,D,E;if(d=r[3],o=d[1],s=d[0],!(o<=0||s<=0))for(v=m(t[0],r[0],d),B=v.data,a=v.strides,y=a[1],b=a[0],v=m(t[1],r[1],d),C=v.data,a=v.strides,j=a[1],k=a[0],v=m(t[2],r[2],d),D=v.data,a=v.strides,q=a[1],w=a[0],E=t[3],x=0,c=0,z=0,e=0;e<s;e++){for(u=0,n=0,f=0,S=B[x],A=C[c],g=D[z],l=E[e],i=0;i<o;i++)l[i]=H(S[u],A[n],g[f]),u+=y,n+=j,f+=q;x+=b,c+=k,z+=w}}F.exports=J
});var K=G();module.exports=K;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

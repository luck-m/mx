const l=Math.PI,v=2*l,e=1e-6,A=v-e;function p(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function E(){return new p}p.prototype=E.prototype={constructor:p,moveTo:function(i,h){this._+="M"+(this._x0=this._x1=+i)+","+(this._y0=this._y1=+h)},closePath:function(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(i,h){this._+="L"+(this._x1=+i)+","+(this._y1=+h)},quadraticCurveTo:function(i,h,t,s){this._+="Q"+ +i+","+ +h+","+(this._x1=+t)+","+(this._y1=+s)},bezierCurveTo:function(i,h,t,s,n,r){this._+="C"+ +i+","+ +h+","+ +t+","+ +s+","+(this._x1=+n)+","+(this._y1=+r)},arcTo:function(i,h,t,s,n){i=+i,h=+h,t=+t,s=+s,n=+n;var r=this._x1,y=this._y1,c=t-i,a=s-h,_=r-i,u=y-h,o=_*_+u*u;if(n<0)throw new Error("negative radius: "+n);if(this._x1===null)this._+="M"+(this._x1=i)+","+(this._y1=h);else if(o>e)if(!(Math.abs(u*c-a*_)>e)||!n)this._+="L"+(this._x1=i)+","+(this._y1=h);else{var f=t-r,x=s-y,w=c*c+a*a,g=f*f+x*x,b=Math.sqrt(w),q=Math.sqrt(o),C=n*Math.tan((l-Math.acos((w+o-g)/(2*b*q)))/2),M=C/q,T=C/b;Math.abs(M-1)>e&&(this._+="L"+(i+M*_)+","+(h+M*u)),this._+="A"+n+","+n+",0,0,"+ +(u*f>_*x)+","+(this._x1=i+T*c)+","+(this._y1=h+T*a)}},arc:function(i,h,t,s,n,r){i=+i,h=+h,t=+t,r=!!r;var y=t*Math.cos(s),c=t*Math.sin(s),a=i+y,_=h+c,u=1^r,o=r?s-n:n-s;if(t<0)throw new Error("negative radius: "+t);this._x1===null?this._+="M"+a+","+_:(Math.abs(this._x1-a)>e||Math.abs(this._y1-_)>e)&&(this._+="L"+a+","+_),t&&(o<0&&(o=o%v+v),o>A?this._+="A"+t+","+t+",0,1,"+u+","+(i-y)+","+(h-c)+"A"+t+","+t+",0,1,"+u+","+(this._x1=a)+","+(this._y1=_):o>e&&(this._+="A"+t+","+t+",0,"+ +(o>=l)+","+u+","+(this._x1=i+t*Math.cos(n))+","+(this._y1=h+t*Math.sin(n))))},rect:function(i,h,t,s){this._+="M"+(this._x0=this._x1=+i)+","+(this._y0=this._y1=+h)+"h"+ +t+"v"+ +s+"h"+-t+"Z"},toString:function(){return this._}};function L(i){return function(){return i}}export{E as C,L as E};

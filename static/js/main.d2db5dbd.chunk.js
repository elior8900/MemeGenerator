(this["webpackJsonpmeme-generator"]=this["webpackJsonpmeme-generator"]||[]).push([[0],{60:function(e,t,n){e.exports=n(94)},65:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){},90:function(e,t,n){},91:function(e,t,n){},94:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(22),c=n.n(i);n(65);var o=function(){return r.a.createElement("div",{className:"header box"},r.a.createElement("ul",{className:"nav"},r.a.createElement("li",{className:"nav"},r.a.createElement("a",{className:"active nav",href:"#home"},"Home")),r.a.createElement("li",{className:"nav"},r.a.createElement("a",{className:"nav",href:"#contact"},"Contact")),r.a.createElement("li",{className:"pushedRight nav"},r.a.createElement("a",{className:"nav",href:"#about"},"About"))))},l=n(7),s=n(11),u=n(47),m=n.n(u),d=n(58);n(84);var f=function(e){return r.a.createElement("li",{className:e.isChosen?"active":"",onClick:function(){return e.Click()}},r.a.createElement("div",{"data-tip":"tooltip","data-for":e.name},e.name),r.a.createElement(d.a,{id:e.name,place:"right",type:"dark",effect:"float"},r.a.createElement("img",{className:"toolTipImage",src:e.url,alt:e.name,height:Math.min(e.hight,150),width:Math.min(e.wid,150)})))},v=(n(85),n(23)),g=n(101),h="label",p=n(24),b=n(55),x=n(10);function E(){var e=Object(v.a)(["\n                        background-color : none;\n                        font-size: 40px;\n                        font-weight: bold;\n                        position:absolute;\n                        \n    "]);return E=function(){return e},e}var O=p.a.div(E());var y=function(e){var t=r.a.useRef(null),n=Object(a.useState)({value:"Type your caption here, and move it around",buttonVissible:!1,textBackGround:!1,cursorIsMove:!1,textBoxHight:"100px",textBoxWidth:"150px",canMove:!1}),i=Object(s.a)(n,2),c=i[0],o=i[1],u=Object(g.a)({item:{type:h,id:e.id,top:e.top,left:e.left,canMove:c.canMove},collect:function(e){return{isDragging:e.isDragging()}}}),m=Object(s.a)(u,2),d=m[0].isDragging,f=m[1];return d?r.a.createElement("div",{ref:f}):r.a.createElement(O,{ref:f,style:{left:e.left,top:e.top,backgroundColor:"none"},onClick:function(){return o(Object(l.a)({},c,{buttonVissible:!0,textBackGround:!0}))},onMouseLeave:function(){return o(Object(l.a)({},c,{buttonVissible:!1,textBackGround:!1}))}},r.a.createElement(x.a,{variant:"secondary",size:"sm",style:{position:"absolute",display:c.buttonVissible?"block":"none",cursor:c.cursorIsMove?"move":"auto"},onMouseEnter:function(){return o(Object(l.a)({},c,{cursorIsMove:!0,canMove:!1}))},onMouseLeave:function(){return o(Object(l.a)({},c,{cursorIsMove:!1,canMove:!1}))},onMouseDown:function(){return o(Object(l.a)({},c,{canMove:!0}))},onMouseUp:function(){return o(Object(l.a)({},c,{canMove:!1}))},onTouchEnd:function(t){return e.move(t.clientY,t.clientX)}},r.a.createElement("img",{src:"./move-button.png",alt:"",height:"30px",width:"25px"})),r.a.createElement(x.a,{variant:"danger",size:"sm",style:{position:"absolute",top:"0",right:"0",display:c.buttonVissible?"block":"none"},onClick:function(){return e.handleDelete()}},"X"),r.a.createElement(b.a.Control,{ref:t,as:"textarea",value:c.value,onChange:function(e){return o(Object(l.a)({},c,{value:e.target.value}))},onMouseUp:function(){if(t.current.getBoundingClientRect().hight!==c.textBoxHight||t.current.getBoundingClientRect().width!==c.textBoxwidth){var e=String(t.current.getBoundingClientRect().height)+"px",n=String(t.current.getBoundingClientRect().width)+"px";o(Object(l.a)({},c,{textBoxHight:e,textBoxWidth:n}))}},style:Object(l.a)({},e.styleForText,{backgroundColor:c.textBackGround?"white":"transparent",border:c.textBackGround?"black":"none",fontWeight:"900",color:"white",textShadow:"-1px 1px 2px #000,1px 1px 2px #000,1px -1px 0 #000,-1px -1px 0 #000",resize:"both",height:c.textBoxHight,width:c.textBoxWidth})}))},M=n(102);function j(){var e=Object(v.a)(["\n  padding: 4em;\n  position:relative;\n  height: 100%;\n  margin-left: auto;\n  margin-right: auto;\n"]);return j=function(){return e},e}var k=p.a.section(j());var C=function(e){var t=Object(a.useContext)(N).MoveToPosition,n=Object(M.a)({accept:h,drop:function(e,n){if(e.canMove){var a=n.getDifferenceFromInitialOffset(),r=Math.round(e.left+a.x),i=Math.round(e.top+a.y);t(e.id,i,r)}}}),i=Object(s.a)(n,2)[1];return r.a.createElement(k,{ref:i},e.children)},w=n(15),I=n(18),B=n(12),z=n(53),N=Object(a.createContext)({MoveToPosition:null});function P(e){var t=Object(a.useState)({style:{fontSize:"small",textAlign:"center"},data:[{id:1,top:20,left:20}]}),n=Object(s.a)(t,2),i=n[0],c=n[1],o=function(e,t,n){var a=i.data.filter((function(t){return t.id===e}));a[0].top=t,a[0].left=n,c(Object(l.a)({},i,{data:i.data.filter((function(t){return t.id!==e})).concat(a[0])}))};return r.a.createElement(N.Provider,{value:{MoveToPosition:o}},r.a.createElement("div",null,r.a.createElement(z.a,{style:{display:"flex",justifyContent:"center"}},r.a.createElement(x.a,{variant:"success",onClick:function(){if(0===i.data.length)c(Object(l.a)({},i,{data:[{id:1,top:20,left:20}]}));else{var e=i.data.sort((function(e,t){return e.id<t.id?-1:1}))[i.data.length-1].id;c(Object(l.a)({},i,{data:i.data.concat({id:e+1,top:0,left:0})}))}},size:"sm"},"Add Caption"),r.a.createElement(I.a,{as:w.a,variant:"success",title:"Text Align",id:"text-align-dropdown",size:"sm"},["left","right","center"].map((function(e,t){return r.a.createElement(B.a.Item,{variant:"success",key:t,eventKey:t,onClick:function(){return t=e,c(Object(l.a)({},i,{style:Object(l.a)({},i.style,{textAlign:t})}));var t},active:e===i.style.textAlign}," ",e)}))),r.a.createElement(I.a,{as:w.a,variant:"success",title:"Text Size",id:"text-size-dropdown",size:"sm"},["x-small","small","medium","large","xx-large"].map((function(e,t){return r.a.createElement(B.a.Item,{variant:"success",key:t,eventKey:t,style:{fontSize:e},onClick:function(){return t=e,c(Object(l.a)({},i,{style:Object(l.a)({},i.style,{fontSize:t})}));var t},active:e===i.style.fontSize}," ",e.toUpperCase())})))),r.a.createElement(C,null,r.a.createElement("img",{src:e.url,alt:"meme",style:{display:"block",maxHeight:"80%",maxWidth:"80%",marginLeft:"auto",marginRight:"auto"}})," ",i.data.map((function(e){return r.a.createElement(y,{key:e.id,id:e.id,top:e.top,left:e.left,handleDelete:function(){return t=e.id,c(Object(l.a)({},i,{data:i.data.filter((function(e){return e.id!==t}))}));var t},move:function(t,n){return o(e.id,t,n)},styleForText:i.style})})))))}n(90);var S=function(){var e=Object(a.useState)({memes:[{url:"",height:1,width:1}],chosen:0,allMemes:[],numberOfMemesInPage:10}),t=Object(s.a)(e,2),n=t[0],i=t[1];""===n.memes[0].url&&m.a.get("https://api.imgflip.com/get_memes").then((function(e){var t=e.data.data.memes;i(Object(l.a)({},n,{memes:t.slice(0,n.numberOfMemesInPage),allMemes:t}))}));var c=n.memes.map((function(e,t){return r.a.createElement(f,{key:e.id+n.numberOfMemesInPage,url:e.url,name:e.name,isChosen:t===n.chosen,hight:e.height,wid:e.width,Click:function(){return e=t,i(Object(l.a)({},n,{chosen:e}));var e}})})),o=Math.ceil(n.allMemes.length/n.numberOfMemesInPage),u=Array(o).fill().map((function(e,t){return r.a.createElement(x.a,{key:t,variant:"success",onClick:function(){return function(e){var t=e*n.numberOfMemesInPage,a=(e+1)*n.numberOfMemesInPage;a=a<n.allMemes.length?a:n.allMemes.length,i(Object(l.a)({},n,{memes:n.allMemes.slice(t,a),chosen:0}))}(t)}},t+1)}));return r.a.createElement("div",{className:"content box"},r.a.createElement("div",{className:"middle box"},r.a.createElement(P,{key:n.chosen,url:n.memes[n.chosen].url})),r.a.createElement("div",{className:"side box"},r.a.createElement(w.a,{size:"sm",style:{display:"flex",flexWrap:"wrap"}},u),r.a.createElement(I.a,{as:w.a,variant:"success",title:"Memes per page",id:"num-of-memes-dropdown",size:"sm"},[5,10,20].map((function(e,t){return r.a.createElement(B.a.Item,{variant:"success",key:t,eventKey:t,onClick:function(){return i(Object(l.a)({},n,{numberOfMemesInPage:e,chosen:0,memes:n.allMemes.slice(0,e)}))},active:e===n.numberOfMemesInPage},e)}))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("ul",null,c)))};n(91);var T=function(){return r.a.createElement("div",{className:"layoutWrapper"},r.a.createElement(o,null),r.a.createElement(S,null),r.a.createElement("div",{className:"footer box"},r.a.createElement("p",null," I am footer ")))},A=(n(92),n(100)),D=n(56),R=n(57),W=n(54).isMobile?R.a:D.a;c.a.render(r.a.createElement(A.a,{backend:W},r.a.createElement(T,null)),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.d2db5dbd.chunk.js.map
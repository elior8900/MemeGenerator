(this["webpackJsonpmeme-generator"]=this["webpackJsonpmeme-generator"]||[]).push([[0],{60:function(e,t,n){e.exports=n(94)},65:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){},90:function(e,t,n){},91:function(e,t,n){},94:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(22),o=n.n(c);n(65);var i=function(){return r.a.createElement("div",{className:"header box"},r.a.createElement("ul",{className:"nav"},r.a.createElement("li",{className:"nav"},r.a.createElement("a",{className:"active nav",href:"#home"},"Home")),r.a.createElement("li",{className:"nav"},r.a.createElement("a",{className:"nav",href:"#contact"},"Contact")),r.a.createElement("li",{className:"pushedRight nav"},r.a.createElement("a",{className:"nav",href:"#about"},"About"))))},l=n(7),s=n(11),u=n(47),m=n.n(u),f=n(58);n(84);var d=function(e){return r.a.createElement("li",{className:e.isChosen?"active":"",onClick:function(){return e.Click()}},r.a.createElement("div",{"data-tip":"tooltip","data-for":e.name},e.name),r.a.createElement(f.a,{id:e.name,place:"right",type:"dark",effect:"float"},r.a.createElement("img",{className:"toolTipImage",src:e.url,alt:e.name,height:Math.min(e.hight,150),width:Math.min(e.wid,150)})))},v=(n(85),n(23)),g=n(101),b="label",h=n(24),p=n(55),x=n(10);function E(){var e=Object(v.a)(["\n                        background-color : none;\n                        font-size: 40px;\n                        font-weight: bold;\n                        position:absolute;\n                        \n    "]);return E=function(){return e},e}var O=h.a.div(E());var M=function(e){var t=r.a.useRef(null),n=Object(a.useState)({value:"Type your caption here, and move it around",buttonVissible:!1,textBackGround:!1,cursorIsMove:!1,textBoxHight:"100px",textBoxWidth:"150px",canMove:!1}),c=Object(s.a)(n,2),o=c[0],i=c[1],u=Object(g.a)({item:{type:b,id:e.id,top:e.top,left:e.left,canMove:o.canMove},collect:function(e){return{isDragging:e.isDragging()}}}),m=Object(s.a)(u,2),f=m[0].isDragging,d=m[1];return f?r.a.createElement("div",{ref:d}):r.a.createElement(O,{ref:d,style:{left:e.left,top:e.top,backgroundColor:"none"},onClick:function(){return i(Object(l.a)({},o,{buttonVissible:!0,textBackGround:!0}))},onMouseLeave:function(){return i(Object(l.a)({},o,{buttonVissible:!1,textBackGround:!1}))}},r.a.createElement(x.a,{variant:"secondary",size:"sm",style:{position:"absolute",display:o.buttonVissible?"block":"none",cursor:o.cursorIsMove?"move":"auto"},onMouseEnter:function(){return i(Object(l.a)({},o,{cursorIsMove:!0,canMove:!1}))},onMouseLeave:function(){return i(Object(l.a)({},o,{cursorIsMove:!1,canMove:!1}))},onMouseDown:function(){return i(Object(l.a)({},o,{canMove:!0}))},onMouseUp:function(){return i(Object(l.a)({},o,{canMove:!1}))},onTouchStart:function(){return i(Object(l.a)({},o,{canMove:!0}))},onTouchEnd:function(){i(Object(l.a)({},o,{canMove:!1,buttonVissible:!1,textBackGround:!1})),e.ImgRef.focus()}},r.a.createElement("img",{src:"./move-button.png",alt:"",height:"30px",width:"25px"})),r.a.createElement(x.a,{variant:"danger",size:"sm",style:{position:"absolute",top:"0",right:"0",display:o.buttonVissible?"block":"none"},onClick:function(){return e.handleDelete()}},"X"),r.a.createElement(p.a.Control,{ref:t,as:"textarea",value:o.value,onChange:function(e){return i(Object(l.a)({},o,{value:e.target.value}))},onMouseUp:function(){if(t.current.getBoundingClientRect().hight!==o.textBoxHight||t.current.getBoundingClientRect().width!==o.textBoxwidth){var e=String(t.current.getBoundingClientRect().height)+"px",n=String(t.current.getBoundingClientRect().width)+"px";i(Object(l.a)({},o,{textBoxHight:e,textBoxWidth:n}))}},style:Object(l.a)({},e.styleForText,{backgroundColor:o.textBackGround?"white":"transparent",border:o.textBackGround?"black":"none",fontWeight:"900",color:"white",textShadow:"-1px 1px 2px #000,1px 1px 2px #000,1px -1px 0 #000,-1px -1px 0 #000",resize:"both",height:o.textBoxHight,width:o.textBoxWidth})}))},y=n(102);function j(){var e=Object(v.a)(["\n  padding: 4em;\n  position:relative;\n  height: 100%;\n  margin-left: auto;\n  margin-right: auto;\n"]);return j=function(){return e},e}var k=h.a.section(j());var C=function(e){var t=Object(a.useContext)(z).MoveToPosition,n=Object(y.a)({accept:b,drop:function(e,n){if(e.canMove){var a=n.getDifferenceFromInitialOffset(),r=Math.round(e.left+a.x),c=Math.round(e.top+a.y);t(e.id,c,r)}}}),c=Object(s.a)(n,2)[1];return r.a.createElement(k,{ref:c},e.children)},I=n(15),w=n(18),B=n(12),N=n(53),z=Object(a.createContext)({MoveToPosition:null});function P(e){var t=r.a.createRef(null),n=Object(a.useState)({style:{fontSize:"small",textAlign:"center"},data:[{id:1,top:20,left:20}]}),c=Object(s.a)(n,2),o=c[0],i=c[1],u=function(e,t,n){var a=o.data.filter((function(t){return t.id===e}));a[0].top=t,a[0].left=n,i(Object(l.a)({},o,{data:o.data.filter((function(t){return t.id!==e})).concat(a[0])}))};return r.a.createElement(z.Provider,{value:{MoveToPosition:u}},r.a.createElement("div",null,r.a.createElement(N.a,{style:{display:"flex",justifyContent:"center"}},r.a.createElement(x.a,{variant:"success",onClick:function(){if(0===o.data.length)i(Object(l.a)({},o,{data:[{id:1,top:20,left:20}]}));else{var e=o.data.sort((function(e,t){return e.id<t.id?-1:1}))[o.data.length-1].id;i(Object(l.a)({},o,{data:o.data.concat({id:e+1,top:0,left:0})}))}},size:"sm"},"Add Caption"),r.a.createElement(w.a,{as:I.a,variant:"success",title:"Text Align",id:"text-align-dropdown",size:"sm"},["left","right","center"].map((function(e,t){return r.a.createElement(B.a.Item,{variant:"success",key:t,eventKey:t,onClick:function(){return t=e,i(Object(l.a)({},o,{style:Object(l.a)({},o.style,{textAlign:t})}));var t},active:e===o.style.textAlign}," ",e)}))),r.a.createElement(w.a,{as:I.a,variant:"success",title:"Text Size",id:"text-size-dropdown",size:"sm"},["x-small","small","medium","large","xx-large"].map((function(e,t){return r.a.createElement(B.a.Item,{variant:"success",key:t,eventKey:t,style:{fontSize:e},onClick:function(){return t=e,i(Object(l.a)({},o,{style:Object(l.a)({},o.style,{fontSize:t})}));var t},active:e===o.style.fontSize}," ",e.toUpperCase())})))),r.a.createElement(C,null,r.a.createElement("img",{src:e.url,alt:"meme",className:"memeImage",ref:t}),o.data.map((function(e){return r.a.createElement(M,{key:e.id,id:e.id,top:e.top,left:e.left,handleDelete:function(){return t=e.id,i(Object(l.a)({},o,{data:o.data.filter((function(e){return e.id!==t}))}));var t},move:function(e,t,n){return u(e,t,n)},ImgRef:t,styleForText:o.style})})))))}n(90);var S=function(){var e=Object(a.useState)({memes:[{url:"",height:1,width:1}],chosen:0,allMemes:[],numberOfMemesInPage:10}),t=Object(s.a)(e,2),n=t[0],c=t[1];""===n.memes[0].url&&m.a.get("https://api.imgflip.com/get_memes").then((function(e){var t=e.data.data.memes;c(Object(l.a)({},n,{memes:t.slice(0,n.numberOfMemesInPage),allMemes:t}))}));var o=n.memes.map((function(e,t){return r.a.createElement(d,{key:e.id+n.numberOfMemesInPage,url:e.url,name:e.name,isChosen:t===n.chosen,hight:e.height,wid:e.width,Click:function(){return e=t,c(Object(l.a)({},n,{chosen:e}));var e}})})),i=Math.ceil(n.allMemes.length/n.numberOfMemesInPage),u=Array(i).fill().map((function(e,t){return r.a.createElement(x.a,{key:t,variant:"success",onClick:function(){return function(e){var t=e*n.numberOfMemesInPage,a=(e+1)*n.numberOfMemesInPage;a=a<n.allMemes.length?a:n.allMemes.length,c(Object(l.a)({},n,{memes:n.allMemes.slice(t,a),chosen:0}))}(t)}},t+1)}));return r.a.createElement("div",{className:"content box"},r.a.createElement("div",{className:"middle box"},r.a.createElement(P,{key:n.chosen,url:n.memes[n.chosen].url})),r.a.createElement("div",{className:"side box"},r.a.createElement(I.a,{size:"sm",style:{display:"flex",flexWrap:"wrap"}},u),r.a.createElement(w.a,{as:I.a,variant:"success",title:"Memes per page",id:"num-of-memes-dropdown",size:"sm"},[5,10,20].map((function(e,t){return r.a.createElement(B.a.Item,{variant:"success",key:t,eventKey:t,onClick:function(){return c(Object(l.a)({},n,{numberOfMemesInPage:e,chosen:0,memes:n.allMemes.slice(0,e)}))},active:e===n.numberOfMemesInPage},e)}))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("ul",null,o)))};n(91);var T=function(){return r.a.createElement("div",{className:"layoutWrapper"},r.a.createElement(i,null),r.a.createElement(S,null),r.a.createElement("div",{className:"footer box"},r.a.createElement("p",null," I am footer ")))},R=(n(92),n(100)),A=n(56),D=n(57),G=n(54).isMobile?D.a:A.a;o.a.render(r.a.createElement(R.a,{backend:G},r.a.createElement(T,null)),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.8313edf6.chunk.js.map
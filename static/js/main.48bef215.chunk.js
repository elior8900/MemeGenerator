(this["webpackJsonpmeme-generator"]=this["webpackJsonpmeme-generator"]||[]).push([[0],{58:function(e,t,a){e.exports=a(92)},63:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){},90:function(e,t,a){},92:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(21),i=a.n(c),l=a(10);a(63);var o=function(e){var t=Object(n.useState)("home"),a=Object(l.a)(t,2),c=a[0],i=a[1];return r.a.createElement("div",{className:"header box"},r.a.createElement("ul",{className:"nav"},r.a.createElement("li",{className:"nav"},r.a.createElement("button",{className:"".concat("home"===c?"active":""," nav"),onClick:function(){e.changePage("home"),i("home")},href:"/"},"Home")),r.a.createElement("li",{className:"pushedRight nav"},r.a.createElement("button",{className:"".concat("about"===c?"active":""," nav"),onClick:function(){e.changePage("about"),i("about")},href:"/about"},"About"))))},s=a(5),m=a(45),u=a.n(m),d=a(55);a(82);var f=function(e){return r.a.createElement("li",{className:e.isChosen?"active":"",onClick:function(){return e.Click()}},r.a.createElement("div",{"data-tip":"tooltip","data-for":e.name},e.name),r.a.createElement(d.a,{id:e.name,place:"right",type:"dark",effect:"float"},r.a.createElement("img",{className:"toolTipImage",src:e.url,alt:e.name,height:Math.min(e.hight,150),width:Math.min(e.wid,150)})))},h=(a(83),a(22)),v=a(100),g="label",b=a(23),p=a(12),E=a(56),y=a(18);function k(){var e=Object(h.a)(["\n                        background-color : none;\n                        font-size: 40px;\n                        font-weight: bold;\n                        position:absolute;\n                        \n    "]);return k=function(){return e},e}var x=b.a.div(k());var O=function(e){var t=Object(n.useState)({value:"Type your caption here, and move it around",buttonVissible:!1,textBackGround:!1,cursorIsMove:!1,canMove:y.isMobile}),a=Object(l.a)(t,2),c=a[0],i=a[1],o=Object(v.a)({item:{type:g,id:e.id,top:e.top,left:e.left,canMove:c.canMove},collect:function(e){return{isDragging:e.isDragging()}}}),m=Object(l.a)(o,2),u=m[0].isDragging,d=m[1];return u?r.a.createElement("div",{ref:d}):r.a.createElement(x,{ref:d,style:{left:e.left,top:e.top,backgroundColor:"none"},onClick:function(){return i(Object(s.a)({},c,{buttonVissible:!0,textBackGround:!0}))},onMouseLeave:function(){return i(Object(s.a)({},c,{buttonVissible:!1,textBackGround:!1}))}},r.a.createElement(p.a,{variant:"secondary",size:"sm",style:{position:"absolute",display:c.buttonVissible&&!y.isMobile?"block":"none",cursor:c.cursorIsMove?"move":"auto"},onMouseEnter:function(){return i(Object(s.a)({},c,{cursorIsMove:!0,canMove:!1}))},onMouseLeave:function(){return i(Object(s.a)({},c,{cursorIsMove:!1,canMove:!1}))},onMouseDown:function(){return i(Object(s.a)({},c,{canMove:!0}))},onMouseUp:function(){return i(Object(s.a)({},c,{canMove:!1}))},onTouchStart:function(){return i(Object(s.a)({},c,{canMove:!0,buttonVissible:!1,textBackGround:!1}))}},r.a.createElement("img",{src:"./move-button.png",alt:"",height:"30px",width:"25px"})),r.a.createElement(p.a,{variant:"danger",size:"sm",style:{position:"absolute",top:"0",right:"0",display:c.buttonVissible?"block":"none"},onClick:function(){return e.handleDelete()}},"X"),r.a.createElement(E.a,{value:c.value,onChange:function(e){return i(Object(s.a)({},c,{value:e.target.value}))},style:Object(s.a)({},e.styleForText,{fontFamily:"".concat(e.font.fontName,",").concat(e.font.fontAdd),backgroundColor:c.textBackGround?"white":"transparent",border:c.textBackGround?"black":"none",fontWeight:"900",color:"white",textShadow:"-1px 1px 2px #000,1px 1px 2px #000,1px -1px 0 #000,-1px -1px 0 #000",resize:"none"})}))},w=a(99);function M(){var e=Object(h.a)(["\n  padding: 4em;\n  position:relative;\n  height: 100%;\n  margin-left: auto;\n  margin-right: auto;\n"]);return M=function(){return e},e}var N=b.a.section(M());var j=function(e){var t=Object(n.useContext)(P).MoveToPosition,a=Object(w.a)({accept:g,drop:function(e,a){if(e.canMove){var n=a.getDifferenceFromInitialOffset(),r=Math.round(e.left+n.x),c=Math.round(e.top+n.y);t(e.id,c,r)}}}),c=Object(l.a)(a,2)[1];return r.a.createElement(N,{ref:c},e.children)},C=a(14),I=a(16),A=a(11),z=a(51),P=Object(n.createContext)({MoveToPosition:null});function S(e){var t=Object(n.useRef)(null),a=Object(n.useState)({style:{fontSize:"small",textAlign:"center"},font:{fontName:"Amatic SC",fontAdd:"cursive"},data:[{id:1,top:20,left:20}]}),c=Object(l.a)(a,2),i=c[0],o=c[1],m=function(e,t,a){var n=i.data.filter((function(t){return t.id===e}));n[0].top=t,n[0].left=a,o(Object(s.a)({},i,{data:i.data.filter((function(t){return t.id!==e})).concat(n[0])}))};return r.a.createElement(P.Provider,{value:{MoveToPosition:m}},r.a.createElement("div",null,r.a.createElement(z.a,{style:{display:"flex",justifyContent:"center"}},r.a.createElement(p.a,{ref:t,variant:"success",onClick:function(){if(0===i.data.length)o(Object(s.a)({},i,{data:[{id:1,top:20,left:20}]}));else{var e=i.data.sort((function(e,t){return e.id<t.id?-1:1}))[i.data.length-1].id;o(Object(s.a)({},i,{data:i.data.concat({id:e+1,top:0,left:0})}))}},size:"sm"},"Add Caption"),r.a.createElement(I.a,{as:C.a,variant:"success",title:"Text Align",id:"text-align-dropdown",size:"sm"},["left","right","center"].map((function(e,t){return r.a.createElement(A.a.Item,{variant:"success",key:t,eventKey:t,onClick:function(){return t=e,o(Object(s.a)({},i,{style:Object(s.a)({},i.style,{textAlign:t})}));var t},active:e===i.style.textAlign}," ",e)}))),r.a.createElement(I.a,{as:C.a,variant:"success",title:"Text Size",id:"text-size-dropdown",size:"sm"},["x-small","small","medium","large","xx-large"].map((function(e,t){return r.a.createElement(A.a.Item,{variant:"success",key:t,eventKey:t,style:{fontSize:e},onClick:function(){return t=e,o(Object(s.a)({},i,{style:Object(s.a)({},i.style,{fontSize:t})}));var t},active:e===i.style.fontSize}," ",e.toUpperCase())}))),r.a.createElement(I.a,{as:C.a,variant:"success",title:"Font",id:"Font-dropdown",size:"sm"},[{fontName:"Amatic SC",fontAdd:"cursive"},{fontName:"Secular One",fontAdd:"sans-serif"},{fontName:"Frank Ruhl Libre",fontAdd:"serif"}].map((function(e,t){return r.a.createElement(A.a.Item,{variant:"success",key:t,eventKey:t,style:{fontFamily:"".concat(e.fontName,",").concat(e.fontAdd)},onClick:function(){return function(e){return o(Object(s.a)({},i,{font:e}))}(e)},active:e.fontName===i.font.fontName}," ",e.fontName.toUpperCase())})))),r.a.createElement(j,null,r.a.createElement("img",{src:e.url,alt:"meme",className:"memeImage"}),i.data.map((function(e){return r.a.createElement(O,{key:e.id,id:e.id,top:e.top,left:e.left,handleDelete:function(){return t=e.id,o(Object(s.a)({},i,{data:i.data.filter((function(e){return e.id!==t}))}));var t},move:function(e,t,a){return m(e,t,a)},font:i.font,styleForText:i.style})})))))}a(88);var T=function(){var e=Object(n.useState)({memes:[{url:"",height:1,width:1}],chosen:0,allMemes:[],numberOfMemesInPage:10}),t=Object(l.a)(e,2),a=t[0],c=t[1];""===a.memes[0].url&&u.a.get("https://api.imgflip.com/get_memes").then((function(e){var t=e.data.data.memes;c(Object(s.a)({},a,{memes:t.slice(0,a.numberOfMemesInPage),allMemes:t}))}));var i=a.memes.map((function(e,t){return r.a.createElement(f,{key:e.id+a.numberOfMemesInPage,url:e.url,name:e.name,isChosen:t===a.chosen,hight:e.height,wid:e.width,Click:function(){return e=t,c(Object(s.a)({},a,{chosen:e}));var e}})})),o=Math.ceil(a.allMemes.length/a.numberOfMemesInPage),m=Array(o).fill().map((function(e,t){return r.a.createElement(p.a,{key:t,variant:"success",onClick:function(){return function(e){var t=e*a.numberOfMemesInPage,n=(e+1)*a.numberOfMemesInPage;n=n<a.allMemes.length?n:a.allMemes.length,c(Object(s.a)({},a,{memes:a.allMemes.slice(t,n),chosen:0}))}(t)}},t+1)}));return r.a.createElement("div",{className:"content box"},r.a.createElement("div",{className:"middle box"},r.a.createElement(S,{key:a.chosen,url:a.memes[a.chosen].url})),r.a.createElement("div",{className:"side box"},r.a.createElement(C.a,{size:"sm",style:{display:"flex",flexWrap:"wrap"}},m),r.a.createElement(I.a,{as:C.a,variant:"success",title:"Memes per page",id:"num-of-memes-dropdown",size:"sm"},[5,10,20].map((function(e,t){return r.a.createElement(A.a.Item,{variant:"success",key:t,eventKey:t,onClick:function(){return c(Object(s.a)({},a,{numberOfMemesInPage:e,chosen:0,memes:a.allMemes.slice(0,e)}))},active:e===a.numberOfMemesInPage},e)}))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("ul",null,i)))};a(89);var F=function(){return r.a.createElement("div",{className:"aboutContainer"},r.a.createElement("div",{className:"info"},r.a.createElement("div",{className:"all info-header"},"WHO AM I?"),r.a.createElement("div",{className:"detail-wrapper"},r.a.createElement("div",{className:"all info-detail"},"I am an enthusiastic fast learner dedicated and inquisitive programmer"),r.a.createElement("div",{className:"all info-detail"},"Love FrontEnd development"),r.a.createElement("div",{className:"all info-detail"},"Autodidact with a crave for new technologies"),r.a.createElement("div",{className:"all info-detail"},"Problem solver with can-do attitude"),r.a.createElement("div",{className:"all info-detail"},"Excellent grades"),r.a.createElement("div",{className:"all info-detail"},"Team worker"),r.a.createElement("div",{className:"all info-detail"},"Social and nice in general :-)"))),r.a.createElement("div",{className:"rest-container"},r.a.createElement("svg",{height:"50",width:"50",className:"fall"},r.a.createElement("circle",{cx:"25",cy:"25",r:"20",stroke:"gray","stroke-width":"1",fill:"white",opacity:"0.3"})),r.a.createElement("svg",{height:"30",width:"30",className:"fall"},r.a.createElement("circle",{cx:"15",cy:"15",r:"7",stroke:"gray","stroke-width":"1",fill:"white",opacity:"0.3"})),r.a.createElement("svg",{height:"50",width:"50",className:"fall second"},r.a.createElement("circle",{cx:"25",cy:"25",r:"20",stroke:"gray","stroke-width":"1",fill:"white",opacity:"0.3"})),r.a.createElement("svg",{height:"30",width:"30",className:"fall second"},r.a.createElement("circle",{cx:"15",cy:"15",r:"7",stroke:"gray","stroke-width":"1",fill:"white",opacity:"0.3"})),r.a.createElement("svg",{height:"50",width:"50",className:"fall third"},r.a.createElement("circle",{cx:"25",cy:"25",r:"20",stroke:"gray","stroke-width":"1",fill:"white",opacity:"0.3"})),r.a.createElement("svg",{height:"30",width:"30",className:"fall third"},r.a.createElement("circle",{cx:"15",cy:"15",r:"7",stroke:"gray","stroke-width":"1",fill:"white",opacity:"0.3"})),r.a.createElement("svg",{height:"50",width:"50",className:"fall forth"},r.a.createElement("circle",{cx:"25",cy:"25",r:"20",stroke:"gray","stroke-width":"1",fill:"white",opacity:"0.3"})),r.a.createElement("svg",{height:"30",width:"30",className:"fall forth"},r.a.createElement("circle",{cx:"15",cy:"15",r:"7",stroke:"gray","stroke-width":"1",fill:"white",opacity:"0.3"}))))};a(90);var B=function(){var e,t=Object(n.useState)("home"),a=Object(l.a)(t,2),c=a[0],i=a[1];switch(c){case"home":e=r.a.createElement(T,null);break;case"about":e=r.a.createElement(F,null)}return r.a.createElement("div",{className:"layoutWrapper"},r.a.createElement(o,{changePage:function(e){return i(e)}}),e,r.a.createElement("div",{className:"footer"},r.a.createElement("p",null," This App was coded by elior8900 on github  ")))},D=(a(91),a(98)),G=a(53),V=a(54),K=y.isMobile?V.a:G.a;i.a.render(r.a.createElement(D.a,{backend:K},r.a.createElement(B,null)),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.48bef215.chunk.js.map
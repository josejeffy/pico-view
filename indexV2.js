let n={},e=[],o=o=>{o&&e.push({id:o[0],component:o[1]}),e.forEach((({id:e,component:o})=>document.getElementById(e).innerHTML=o(n)))},t=(e,t)=>null==t&&n[e]||(n[e]=t)&&o(),d=(n,e)=>window[n]=e;export{o as render,t as state,d as action};
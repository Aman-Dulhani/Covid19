(this.webpackJsonpgui=this.webpackJsonpgui||[]).push([[0],{21:function(e,t,a){e.exports=a(57)},26:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(4),c=a.n(r),i=(a(26),a(15)),l=a(16),s=a(20),u=a(19),h=a(17),d=(a(38),a(39),a(18)),m=a.n(d),f=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={columnDefs:[{headerName:"State",field:"State"},{headerName:"Confirmed",field:NaN},{headerName:"Active",field:"Active"},{headerName:"Recovered",field:NaN},{headerName:"Death",field:NaN}],rowData:null},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;m.a.get("http://corona-ind-19-20.herokuapp.com/api/").then((function(e){return e.data})).then((function(t){return e.setState({rowData:t})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return o.a.createElement("div",{className:"ag-theme-alpine",style:{height:"1000px",width:"1200px"}},o.a.createElement(h.AgGridReact,{columnDefs:this.state.columnDefs,rowData:this.state.rowData}))}}]),a}(n.Component);var p=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.f62cf391.chunk.js.map
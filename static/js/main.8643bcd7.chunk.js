(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports={table_head:"ResidentialFleet_table_head__RTn5O",table_body:"ResidentialFleet_table_body__6fTOe",table_wrapper:"ResidentialFleet_table_wrapper__vQ_2C",list_table:"ResidentialFleet_list_table__3MjoZ",list_title:"ResidentialFleet_list_title__310Oi",list_performance_check:"ResidentialFleet_list_performance_check__2sJxp",list_star:"ResidentialFleet_list_star__3wYhI",device:"ResidentialFleet_device__1EfqD",alert:"ResidentialFleet_alert__2rnbp",last_activity:"ResidentialFleet_last_activity__3iSib",loading_spinner:"ResidentialFleet_loading_spinner__2H3Cu",pagination:"ResidentialFleet_pagination__1ijk-",pagination_nav:"ResidentialFleet_pagination_nav__5JgpF",items_per_page:"ResidentialFleet_items_per_page__2dXjM",page_info:"ResidentialFleet_page_info__30Xzt"}},101:function(e,t,a){},103:function(e,t,a){},105:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(16),c=a.n(r),i=(a(65),a(67),a(18)),s=a(17),m=a.n(s),o=function(){var e=function(e){return e<10?"0"+e:e},t=new Date,a=t.toLocaleString("default",{month:"long"}),n=e(t.getDate()),l=e(t.getHours()),r=l<=12?l:l-12,c=e(t.getMinutes()),i=l<=12?"am":"pm";return"".concat(r,":").concat(c," ").concat(i," ").concat(n," ").concat(a)};var u=function(){return l.a.createElement("nav",{className:m.a.container},l.a.createElement("div",{className:m.a.logo},l.a.createElement("img",{src:"https://edgeconnected.com/manage/assets/images/pages/edge-logo.png",width:"230px"})),l.a.createElement("div",{className:m.a.welcome},l.a.createElement("div",{className:m.a.item},l.a.createElement("div",{className:m.a.msg},"Welcome Edge Admin"),l.a.createElement("div",{className:m.a.date},o())),l.a.createElement("div",{className:m.a.icon},l.a.createElement("i",{class:"fa-solid fa-user"}))))},d=a(14),E=a.n(d),p=a(24),_=a(7),g=a(19),f=a.n(g),h=a(10),b=a.n(h),v=a(25),N=function(e){for(var t=e.listsPerPage,a=e.totalLists,n=e.pagenate,r=e.currentPage,c=[],i=1;i<=Math.ceil(a/t);i++)c.push(i);return l.a.createElement("div",{className:"narrows1"},1===r?l.a.createElement("span",{style:{color:"lightgray"}},l.a.createElement("span",{style:{padding:"0 10px"}},l.a.createElement("i",{class:"fa-solid fa-angles-left"})),l.a.createElement("span",{style:{padding:"0 10px"}},l.a.createElement("i",{class:"fa-solid fa-angle-left"}))):l.a.createElement("span",null,l.a.createElement("span",{style:{padding:"0 10px"}},l.a.createElement("a",{href:"#",onClick:function(){return n(1)}},l.a.createElement("i",{class:"fa-solid fa-angles-left"}))),l.a.createElement("span",{style:{padding:"0 10px"}},l.a.createElement("a",{href:"#",onClick:function(){return n(r-1)}},l.a.createElement("i",{class:"fa-solid fa-angle-left"})))),r===a/t?l.a.createElement("span",{style:{color:"lightgray"}},l.a.createElement("span",{style:{padding:"0 10px"}},l.a.createElement("i",{class:"fa-solid fa-angle-right"})),l.a.createElement("span",{style:{padding:"0 10px"}},l.a.createElement("i",{class:"fa-solid fa-angles-right"}))):l.a.createElement("span",null,l.a.createElement("span",{style:{padding:"0 10px"}},l.a.createElement("a",{href:"#",onClick:function(){return n(r+1)}},l.a.createElement("i",{class:"fa-solid fa-angle-right"}))),l.a.createElement("span",{style:{padding:"0 10px"}},l.a.createElement("a",{href:"#",onClick:function(){return n(a/t)}},l.a.createElement("i",{class:"fa-solid fa-angles-right"})))))},y=a(27),w={width:"100%",height:"400px"},x={lat:-3.745,lng:-38.523};var O=l.a.memo(function(){var e=Object(y.c)({id:"google-map-script",googleMapsApiKey:Object({NODE_ENV:"production",PUBLIC_URL:"/edgeconnected"}).GOOGLE_MAP_API_KEY}).isLoaded,t=l.a.useState(null),a=Object(_.a)(t,2),n=(a[0],a[1]),r=l.a.useCallback(function(e){var t=new window.google.maps.LatLngBounds;e.fitBounds(t),n(e)},[]),c=l.a.useCallback(function(e){n(null)},[]);return e?l.a.createElement(y.a,{mapContainerStyle:w,center:x,onLoad:r,onUnmount:c,defaultZoom:8,defaultCenter:{lat:-34.397,lng:150.644}},l.a.createElement(y.b,{position:{lat:-34.397,lng:150.644}}),l.a.createElement(l.a.Fragment,null)):l.a.createElement(l.a.Fragment,null)}),P=a(46),k=a.n(P),C=a(47),j=a.n(C),F=a(48),S=a.n(F),A=a(49),R=a.n(A),L=(a(94),a(50)),M=a.n(L),I=a(51),D=a.n(I),T=a(52),U=a.n(T),Q=a(53),B=a.n(Q),H=a(54),V=a.n(H),G=a(55),q=a.n(G),z="https://u8gmw4ohr6.execute-api.ap-southeast-2.amazonaws.com/test/get-residential-fleet";var K=function(e){var t=e.searchQuery,a=Object(n.useState)([]),r=Object(_.a)(a,2),c=r[0],i=r[1],s=Object(n.useState)(!1),m=Object(_.a)(s,2),o=m[0],u=m[1],d=Object(n.useState)(1),g=Object(_.a)(d,2),h=g[0],y=g[1],w=Object(n.useState)(10),x=Object(_.a)(w,1)[0];Object(n.useEffect)(function(){!function(){var e=Object(p.a)(E.a.mark(function e(){var t;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),e.next=3,f.a.get("".concat(z));case 3:t=e.sent,i(t.data),u(!1);case 6:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()()},[]);var P=h*x,C=P-x,F=function(e,t){return t?c.filter(function(e){return e.name.toLowerCase().includes(t)}):e}(c.slice(C,P),t),A=Math.round((new Date).getTime()/1e3),L=[["year",31536e3],["month",2628e3],["week",31536e3/52],["day",86400],["hour",3600],["minute",60]],I=function(e,t,a){if(null===t||isNaN(t))return e;for(var n=A-t,l="",r=0;r<L.length;r++)if(n>=L[r][1])return l=Math.floor(n/L[r][1])>1?"s ":" ",Math.floor(n/L[r][1])+" "+L[r][0]+l+a};return o?l.a.createElement("div",{className:b.a.loading_spinner},l.a.createElement(v.a,{height:"80",width:"80",color:"grey",ariaLabel:"loading"})):l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement(O,null)),l.a.createElement("div",{className:b.a.table_wrapper},l.a.createElement("table",{className:b.a.list_table},l.a.createElement("thead",{className:b.a.table_head},l.a.createElement("tr",null,l.a.createElement("th",{className:b.a.list_performance_check},"Performance Check"),l.a.createElement("th",{className:b.a.list_star}),l.a.createElement("th",null,"Customer"),l.a.createElement("th",null,"Site Address"),l.a.createElement("th",null,"Device"),l.a.createElement("th",null,"Alert"),l.a.createElement("th",null,"Last Activity"),l.a.createElement("th",null,"Partner"),l.a.createElement("th",null,"Installer"))),l.a.createElement("tbody",null,F.map(function(e,t){return l.a.createElement("tr",{key:t,className:b.a.table_body},l.a.createElement("td",{className:b.a.list_performance_check},l.a.createElement("input",{type:"checkbox",name:"performance-check"})),l.a.createElement("td",{className:b.a.list_star},l.a.createElement("i",{class:"fa-solid fa-star"})),l.a.createElement("td",null,e.customer),l.a.createElement("td",null,e.site_address),l.a.createElement("td",null,l.a.createElement("div",{className:b.a.device},l.a.createElement("img",{src:1===e.has_eiq?k.a:j.a,width:"25px",height:"25px"}),e.device,l.a.createElement("img",{src:1===e.has_energymonitor?B.a:U.a,width:"25px",height:"25px"}),l.a.createElement("img",{src:1===e.solar?V.a:q.a,width:"25px",height:"25px"}),l.a.createElement("img",{src:1===e.battery?S.a:R.a,width:"25px",height:"25px"}),l.a.createElement("img",{src:1===e.has_load?D.a:M.a,width:"25px",height:"25px"}))),l.a.createElement("td",null,e.devices.length>0&&e.devices.map(function(e){return l.a.createElement("div",{className:b.a.alert},e.serial_number," ",I("",e.last_received_packet,"offline"))})),l.a.createElement("td",null,l.a.createElement("div",{className:b.a.last_activity},l.a.createElement("div",null,"Desktop Login: ",I("Never",e.last_accessed_desktop,"ago")),l.a.createElement("div",null,"App Login: ",I("Never",e.last_accessed_app,"ago")))),l.a.createElement("td",null,e.partners),l.a.createElement("td",null,e.installers))})))),l.a.createElement("div",{className:b.a.pagination},l.a.createElement("div",{className:b.a.items_per_page},"Items per page: ",x),l.a.createElement("div",{className:b.a.page_info},"".concat(C+1," - ").concat(h*x," of ").concat(c.length)),l.a.createElement("div",{className:b.a.pagination_nav},l.a.createElement(N,{listsPerPage:x,totalLists:c.length,pagenate:function(e){return y(e)},currentPage:h}))))},J=a(56),W=a.n(J);a(96);var Y=function(e){var t=e.setSearchQuery,a=e.searchQuery;return l.a.createElement("div",null,l.a.createElement("form",null,l.a.createElement("input",{name:"filter",placeholder:"Filter *",type:"text",value:a,width:"100%",onChange:function(e){return t(e.target.value)}})))},Z=a(8),X=a.n(Z),$="https://u8gmw4ohr6.execute-api.ap-southeast-2.amazonaws.com/test/get-partner-management",ee="https://u8gmw4ohr6.execute-api.ap-southeast-2.amazonaws.com/test/get-device-type-list";function te(e){var t=e.setTotalPartnerCount,a=e.searchQuery,r=Object(n.useState)([]),c=Object(_.a)(r,2),i=c[0],s=c[1],m=Object(n.useState)([]),o=Object(_.a)(m,2),u=o[0],d=o[1],g=Object(n.useState)(!1),h=Object(_.a)(g,2),b=h[0],y=h[1],w=Object(n.useState)(1),x=Object(_.a)(w,2),O=x[0],P=x[1],k=Object(n.useState)(10),C=Object(_.a)(k,1)[0];Object(n.useEffect)(function(){(function(){var e=Object(p.a)(E.a.mark(function e(){var t,a;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return y(!0),e.next=3,f.a.get("".concat($));case 3:return t=e.sent,e.next=6,f.a.get("".concat(ee));case 6:a=e.sent,s(t.data),d(a.data),y(!1);case 10:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}})()()},[]);var j=O*C,F=j-C,S=function(e,t){return t?i.filter(function(e){return e.name.toLowerCase().includes(t)}):e}(i.slice(F,j),a);t(i.length);var A=[];u.forEach(function(e){A.push(e.short_name)}),console.log(A);return b?l.a.createElement("div",{className:X.a.loading_spinner},l.a.createElement(v.a,{height:"80",width:"80",color:"grey",ariaLabel:"loading"})):l.a.createElement("div",null,l.a.createElement("div",{className:X.a.table_wrapper},l.a.createElement("table",{className:X.a.list_table},l.a.createElement("thead",{className:X.a.table_head},l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"Name"),l.a.createElement("th",null,"Register Installer"),l.a.createElement("th",null,"Installer"),l.a.createElement("th",null,"User"),u.map(function(e){return l.a.createElement("td",null,l.a.createElement("th",null,e.short_name.toUpperCase()," Stock"),l.a.createElement("th",null,e.short_name.toUpperCase()," Installed"))}))),l.a.createElement("tbody",{className:X.a.table_body},S.map(function(e,t){return l.a.createElement("tr",{key:e.partnet_id,className:t%2===0?X.a.list_dark:X.a.list_light},l.a.createElement("td",{scope:"row",className:X.a.list_name},e.name),l.a.createElement("td",null,"_ _ _ _"),l.a.createElement("td",null,e.installers),l.a.createElement("td",null,e.users),A.map(function(t){return l.a.createElement("td",null,l.a.createElement("td",null,t in e.stock_devices?e.stock_devices[t]:"0"),l.a.createElement("td",null,t in e.installed_devices?e.installed_devices[t]:"0"))}))})))),l.a.createElement("div",{className:X.a.pagination},l.a.createElement("div",null,"\xa0"),l.a.createElement("div",{className:X.a.items_per_page},"Items per page: ",C),l.a.createElement("div",{className:X.a.page_info},"".concat(F+1," - ").concat(O*C," of ").concat(i.length)),l.a.createElement("div",{className:X.a.pagination_nav},l.a.createElement(N,{listsPerPage:C,totalLists:i.length,pagenate:function(e){return P(e)},currentPage:O}))))}var ae=a(29),ne=a(1);var le=function(e){var t=e.totalPartnerCount,a=Object(n.useState)(!1),r=Object(_.a)(a,2),c=r[0],i=r[1],s=function(){return i(!1)};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:X.a.menu},l.a.createElement("div",null,l.a.createElement("div",{className:X.a.title},"Partner Management"),l.a.createElement("div",{className:X.a.total_number},"Total Number of Partners : ",t)),l.a.createElement("div",{className:X.a.button},l.a.createElement("button",{className:X.a.button_business,onClick:function(){return i(!0)}},"Add New Business"),l.a.createElement("button",{className:X.a.button_user},"Add New User"))),l.a.createElement("div",null,l.a.createElement(ae.b,{isOpen:c,onDismiss:s,style:{display:"flex",position:"absolute",top:"50px",left:"50px",width:"400px",height:"400px",background:"hsla(0, 100%, 100%, 0.9)"}},l.a.createElement(ae.a,{style:{border:"solid 1px hsla(0, 0%, 0%, 0.5)",borderRadius:"10px",boxShadow:"0px 10px 50px hsla(0, 0%, 0%, 0.33)"}},l.a.createElement(ne.a,null),l.a.createElement("button",{onClick:s},"CLOSE")))))};function re(){var e=Object(n.useState)(0),t=Object(_.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),i=Object(_.a)(c,2),s=i[0],m=i[1];return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement(le,{totalPartnerCount:a})),l.a.createElement("div",null,l.a.createElement(Y,{searchQuery:s,setSearchQuery:m})),l.a.createElement("div",null,l.a.createElement(te,{setTotalPartnerCount:r,searchQuery:s})))}function ce(){return l.a.createElement("div",null,"Edge Electron Admin Home")}a(101);var ie=function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"container"},l.a.createElement("div",null,"Add New User"),l.a.createElement("div",null,l.a.createElement("select",null,"Partner")),l.a.createElement("div",null,l.a.createElement("select",null,"Role")),l.a.createElement("div",{className:"name"},l.a.createElement("div",null,l.a.createElement("input",{type:"text",placeholder:"First Name *"})),l.a.createElement("div",null,l.a.createElement("input",{type:"text",placeholder:"Last Name *"}))),l.a.createElement("div",null,l.a.createElement("input",{type:"email",placeholder:"E-mail Address *"})),l.a.createElement("div",null,l.a.createElement("input",{type:"number",placeholder:"Phone *"})),l.a.createElement("div",null,l.a.createElement("input",{type:"button",placeholder:"Save And New"}),l.a.createElement("input",{type:"button",placeholder:"Save And Close"}),l.a.createElement("input",{type:"button",placeholder:"Close"}))))};var se=function(){return l.a.createElement("div",{className:W.a.container},l.a.createElement(ne.d,null,l.a.createElement(ne.b,{path:"partner-management/*",element:l.a.createElement(re,null)},l.a.createElement(ne.b,{path:"add-new-user/*",element:l.a.createElement(ie,null)})),l.a.createElement(ne.b,{path:"residential-fleet/*",element:l.a.createElement(K,null)}),l.a.createElement(ne.b,{path:"/*",element:l.a.createElement(ce,null)})),l.a.createElement(ne.a,null))};a(103);function me(){return l.a.createElement("div",{className:"Drawer-nav"},l.a.createElement("input",{type:"checkbox",id:"drawer-toggle",name:"drawer-toggle"}),l.a.createElement("label",{for:"drawer-toggle",id:"drawer-toggle-label"}),l.a.createElement("nav",{id:"drawer"},l.a.createElement("ul",null,l.a.createElement("li",{id:"list-title"},"FLEET VIEW"),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Commercial Fleet")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Advanced Fleet")),l.a.createElement("li",null,l.a.createElement(i.b,{to:"/residential-fleet"},"Residential Fleet")),l.a.createElement("li",{id:"list-title"},"DEVICE MANAGEMENT"),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Register Device")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Unassigned Device")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Activate SIM")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Retired Device")),l.a.createElement("li",{id:"list-title"},"USER MANAGEMENT"),l.a.createElement("li",null,l.a.createElement(i.b,{to:"/partner-management"},"Partner Management")),l.a.createElement("li",{id:"list-title"},"NETWORK MANAGEMENT"),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Live Loading Map")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Network Aggregated")),l.a.createElement("li",{id:"list-title"},"ADMIN CONFIGURATION"),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Device Status")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Register New Business")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"High Voltage Dashboard")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"High Voltage Opportunities")))),l.a.createElement("div",{id:"page-content"},l.a.createElement(u,null),l.a.createElement(se,null)))}var oe=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(me,null))},ue=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,108)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),l(e),r(e),c(e)})};c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(i.a,{basename:"/edgeconnected"},l.a.createElement(oe,null))),document.getElementById("root")),ue()},17:function(e,t,a){e.exports={container:"Header_container__3qZlv",logo:"Header_logo__3M0Id",welcome:"Header_welcome__oUmgC",icon:"Header_icon__Lem8y"}},46:function(e,t,a){e.exports=a.p+"static/media/resi-edgeiq-blue.3566125d.svg"},47:function(e,t,a){e.exports=a.p+"static/media/resi-edgeiq-gray.3194231d.svg"},48:function(e,t,a){e.exports=a.p+"static/media/resi-battery-blue.b324c1ee.svg"},49:function(e,t,a){e.exports=a.p+"static/media/resi-battery-gray.0ce08b38.svg"},50:function(e,t,a){e.exports=a.p+"static/media/resi-load-gray.65e2d082.svg"},51:function(e,t,a){e.exports=a.p+"static/media/resi-load-blue.fde35cbe.svg"},52:function(e,t,a){e.exports=a.p+"static/media/resi-monitor-orange.f5b7a52b.svg"},53:function(e,t,a){e.exports=a.p+"static/media/resi-monitor-blue.6414c95a.svg"},54:function(e,t,a){e.exports=a.p+"static/media/resi-solar-blue.7d39c172.svg"},55:function(e,t,a){e.exports=a.p+"static/media/resi-solar-orange.93957c89.svg"},56:function(e,t,a){e.exports={body_container:"Body_body_container__2A_vy"}},60:function(e,t,a){e.exports=a(105)},65:function(e,t,a){},67:function(e,t,a){},8:function(e,t,a){e.exports={table_head:"Partner_table_head__23lsW",table_body:"Partner_table_body__1CYIB",table_wrapper:"Partner_table_wrapper__wSjK_",list_table:"Partner_list_table__3dbYz",menu:"Partner_menu__2lNlT",title:"Partner_title__36s--",total_number:"Partner_total_number__2aw1f",button:"Partner_button__3Qa8R",button_business:"Partner_button_business__2RbOu",button_user:"Partner_button_user__132Te",list_title:"Partner_list_title__3vgKD",list_name:"Partner_list_name__3kQpV",loading_spinner:"Partner_loading_spinner__1uvuF",list_dark:"Partner_list_dark__1AC0V",list_light:"Partner_list_light__2tFTQ",pagination:"Partner_pagination__o1Ssn"}},94:function(e,t,a){e.exports=a.p+"static/media/resi-battery-orange.550d15b1.svg"},96:function(e,t,a){e.exports={"filter-label":"Filter_filter-label__3U9hL"}}},[[60,3,2]]]);
//# sourceMappingURL=main.8643bcd7.chunk.js.map
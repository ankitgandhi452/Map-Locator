(window.webpackJsonpgmaps=window.webpackJsonpgmaps||[]).push([[0],{185:function(e,t,n){e.exports=n(393)},190:function(e,t,n){},393:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(34),i=n.n(r),c=(n(190),n(431)),l=n(430),s=n(436),u=n(423),p=n(178),h=n.n(p),m=n(429),d=n(28),f=n(8),g=n(17),b=n(9),y=n(18),v=n(19),E=n(22),O=n(20),w=n(36),j=n.n(w),C=n(110),k=function(e){var t=!1;return{cancel:function(){t=!0},setState:function(n){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};console.log(t),t||e.setState(n,a)}}},L=["atm","bank","pharmacy","hospital","airport","local_government_office","train_station","bus_station"],S=n(433),x=n(419),P=n(422),M=n(420),_=n(421),T=n(418),D=function(e){function t(){return Object(g.a)(this,t),Object(y.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return this.props.visible&&o.a.createElement(T.a,{color:"primary"})}}]),t}(a.Component);D.defaultProps={visible:!0};var I=function(e){function t(e){var n;return Object(g.a)(this,t),(n=Object(y.a)(this,Object(v.a)(t).call(this,e))).refresh=function(){window.location.reload()},n.renderComponent=function(){return!n.props.getLocation||n.props.isGeolocationAvailable&&n.props.isGeolocationEnabled?n.state.initialLocationSet?null:o.a.createElement(c.a,{position:"absolute",top:0,left:0,height:"100vh",width:"100vw",bgcolor:"rgba(0,0,0,1)",display:"flex",justifyContent:"center",alignItems:"center"},o.a.createElement(D,null)):o.a.createElement(c.a,{position:"absolute",top:0,left:0,height:"100vh",width:"100vw",bgcolor:"rgba(0,0,0,1)",display:"flex",justifyContent:"center",alignItems:"center",p:4},o.a.createElement(x.a,null,o.a.createElement(M.a,null,o.a.createElement(_.a,{variant:"h4",component:"h2",color:"error"},"Unable to fecth the location"),o.a.createElement(_.a,{variant:"h5"},o.a.createElement("br",null),"Possible problem would be:"),o.a.createElement(_.a,{color:"textSecondary"},o.a.createElement("br",null),"1. Please enable the location service on your browser. To enable it please refresh the page and allow the location service."),o.a.createElement(_.a,{color:"textSecondary"},o.a.createElement("br",null),"2. If you are running in development mode please run on chrome browser.")),o.a.createElement(P.a,null,o.a.createElement(S.a,{onClick:n.refresh,size:"small"},"Refresh"))))},n.state={initialLocationSet:!1},n.setter=k(Object(E.a)(n)),n}return Object(O.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(){var e=this;this.props.getLocation&&this.props.isGeolocationAvailable&&this.props.isGeolocationEnabled&&!this.state.initialLocationSet&&(console.log("!this.state.initialLocationSet",!this.state.initialLocationSet),this.props.coords?this.setter.setState({initialLocationSet:!0},(function(){console.log("calling if setCurrentLocation",e.props.coords),e.props.setCurrentLocation(e.props.coords)})):this.setter.setState({initialLocationSet:!0},(function(){console.log("calling else setCurrentLocation"),e.props.setCurrentLocation({latitude:18.9908177,longitude:72.8382547})})))}},{key:"componentWillUnmount",value:function(){this.setter.cancel()}},{key:"render",value:function(){return this.renderComponent()}}]),t}(a.Component);I.defaultProps={getLocation:!0};var B=Object(C.geolocated)()(I),R=n(424),U=n(435),W=n(425),F=n(180),A=n(176),G=n.n(A),H=n(177),q=n.n(H),z={base:"https://maps.googleapis.com/maps/api/js?key=".concat("AIzaSyA_DT8VwhcsOtXOOd_fvQ-KUqidTqVmcOc","&v=3.exp&libraries=geometry,drawing,places"),direction:"https://www.google.com/maps/dir/?api=1"},J=n(37),K=function(e){function t(e){var n;return Object(g.a)(this,t),(n=Object(y.a)(this,Object(v.a)(t).call(this,e))).toggleInfo=function(){n.setter.setState({infoShown:!n.state.infoShown})},n.getDirection=function(){var e=n.props.marker,t=encodeURIComponent(e.name+", "+e.vicinity);window.open("".concat(z.direction,"&destination_place_id=").concat(e.place_id,"&destination=").concat(t))},n.state={infoShown:!1},n.setter=k(Object(E.a)(n)),n}return Object(O.a)(t,e),Object(b.a)(t,[{key:"componentWillUnmount",value:function(){this.setter.cancel()}},{key:"render",value:function(){var e=this.props.marker;return o.a.createElement(J.Marker,{position:{lat:e.latitude,lng:e.longitude},onClick:this.toggleInfo},this.state.infoShown&&o.a.createElement(J.InfoWindow,{onCloseClick:this.toggleInfo,visible:this.state.infoShown},o.a.createElement("div",{style:{padding:16}},o.a.createElement("div",null,o.a.createElement(_.a,{variant:"body2"},"".concat(e.name,", ").concat(e.vicinity))),o.a.createElement("div",{style:{textAlign:"right"}},o.a.createElement(S.a,{color:"secondary",onClick:this.getDirection},"Get Directions")))))}}]),t}(a.Component),V=n(175),X=n.n(V),N=n(174),Q=n.n(N),Y=X.a[500],Z=function(e){function t(e){var n;return Object(g.a)(this,t),(n=Object(y.a)(this,Object(v.a)(t).call(this,e))).onPlaceSelected=function(e){if(e.geometry){var t={latitude:e.geometry.location.lat(),longitude:e.geometry.location.lng()};n.props.setCurrentLocation(t)}},n.focus=function(){n.setState({color:Y})},n.blur=function(){n.setState({color:"#fff"})},n.state={color:"#fff"},n}return Object(O.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return o.a.createElement(Q.a,{style:{width:"100%",height:"40px",paddingLeft:"16px",marginTop:"10px",marginBottom:"100px",outline:"none",color:"#fff",backgroundColor:"transparent",border:"0px",borderBottom:"1px solid ".concat(this.state.color)},placeholder:"Enter area to explore",onPlaceSelected:this.onPlaceSelected,types:["(regions)"],onFocus:this.focus,onBlur:this.blur})}}]),t}(a.Component),$=function(e){function t(){return Object(g.a)(this,t),Object(y.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return o.a.createElement(J.GoogleMap,{ref:this.props.onMapMounted,defaultZoom:12,center:{lat:this.props.latitude,lng:this.props.longitude}},this.props.isMarkerShown&&o.a.createElement(J.Marker,{position:{lat:this.props.latitude,lng:this.props.longitude}}),this.props.places.map((function(e){return o.a.createElement(K,{key:e.id,marker:e})})),o.a.createElement(Z,{setCurrentLocation:this.props.setCurrentLocation}))}}]),t}(a.Component);$.defaultProps={isMarkerShown:!0};var ee=Object(J.withScriptjs)(Object(J.withGoogleMap)($)),te=function(e){function t(){var e,n;Object(g.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(y.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).getCheckBox=function(e,t){var a=n.props.selectedTypes.includes(e),r=j.a.startCase(e);return a?o.a.createElement(U.a,{key:t,avatar:o.a.createElement(R.a,null,j.a.first(r)),label:r,clickable:!0,color:"primary",onClick:function(){n.props.filterChange(e,!a)},onDelete:function(){n.props.filterChange(e,!a)},deleteIcon:o.a.createElement(G.a,null),style:{margin:"5px"}}):o.a.createElement(U.a,{key:t,avatar:o.a.createElement(R.a,null,j.a.first(r)),label:r,clickable:!0,color:"default",onClick:function(){n.props.filterChange(e,!a)},style:{margin:"5px"}})},n}return Object(O.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this,t=window.innerWidth>window.innerHeight?"400px":"300px";return o.a.createElement(W.a,{key:1,container:!0,style:{overflow:"auto"}},o.a.createElement(W.a,{item:!0,xs:12,sm:8,md:8,lg:8,style:{marginBottom:40}},o.a.createElement(ee,{latitude:this.props.currentLocation.latitude,longitude:this.props.currentLocation.longitude,googleMapURL:z.base,loadingElement:o.a.createElement(D,null),containerElement:o.a.createElement("div",{style:{height:"".concat(window.innerWidth,"px"),maxHeight:"".concat(t)}}),mapElement:o.a.createElement("div",{style:{height:"100%"}}),setCurrentLocation:this.props.setCurrentLocation,onMapMounted:this.props.onMapMounted,places:this.props.places})),o.a.createElement(W.a,{item:!0,xs:12,sm:4,md:4,lg:4},o.a.createElement(c.a,{px:2,height:"100%"},o.a.createElement(F.a,{style:{display:"flex",justifyContent:"center",flexWrap:"wrap",height:"100%"}},o.a.createElement(c.a,{color:"text.primary",p:2},o.a.createElement(_.a,{variant:"h4",component:"h2",color:"textPrimary",gutterBottom:!0},o.a.createElement(q.a,null)," Filters ",this.props.selectedTypes.length>0&&o.a.createElement(U.a,{avatar:o.a.createElement(R.a,null,"X"),label:"clear",clickable:!0,variant:"outlined",style:{float:"right"},onClick:this.props.clearFilter})),this.props.types.map((function(t,n){return e.getCheckBox(t,n)})))))))}}]),t}(a.Component);function ne(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var ae=function(e){function t(e){var n;return Object(g.a)(this,t),(n=Object(y.a)(this,Object(v.a)(t).call(this,e))).setCurrentLocation=function(e){var t=e.latitude,a=e.longitude;console.log("setCurrentLocation called");var o=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ne(n,!0).forEach((function(t){Object(f.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ne(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n.state.currentLocation,{latitude:t,longitude:a});n.fetchPlaces(t,a,n.state.selectedTypes).then((function(e){console.log(e),n.setter.setState({currentLocation:o,places:e,loading:!1})}))},n.onMapMounted=function(e){n.mapRef=e},n.filterChange=function(e,t){console.log(e,t);var a=t,o=Object(d.a)(n.state.selectedTypes);if(a)o.push(e);else{var r=j.a.findIndex(o,(function(t){return t===e}));r>=0&&o.splice(r,1)}n.fetchPlaces(n.state.currentLocation.latitude,n.state.currentLocation.longitude,o).then((function(e){n.setter.setState({places:e,selectedTypes:o})}))},n.clearFilter=function(){var e=[];n.fetchPlaces(n.state.currentLocation.latitude,n.state.currentLocation.longitude,e).then((function(t){n.setter.setState({places:t,selectedTypes:e})}))},n.fetchPlaces=function(e,t,a){return new Promise((function(o,r){if(n.mapRef){var i=[],c=window.google,l=new c.maps.places.PlacesService(n.mapRef.context.__SECRET_MAP_DO_NOT_USE_OR_YOU_WILL_BE_FIRED),s={type:a||n.state.selectedTypes,location:{lat:e||n.state.currentLocation.latitude,lng:t||n.state.currentLocation.longitude},radius:5e3};l.nearbySearch(s,(function(e,t){console.log(e),t!==c.maps.places.PlacesServiceStatus.OK||j.a.isEmpty(a)||j.a.map(e,(function(e){var t={latitude:e.geometry.location.lat(),longitude:e.geometry.location.lng(),icon:e.icon,name:e.name,id:e.place_id,vicinity:e.vicinity};i.push(t)})),o(i)}))}else o([])}))},n.getComponent=function(){return n.state.loading?o.a.createElement(B,{key:0,getLocation:n.state.loading,setCurrentLocation:n.setCurrentLocation}):o.a.createElement(te,{key:1,loading:n.state.loading,currentLocation:n.state.currentLocation,setCurrentLocation:n.setCurrentLocation,onMapMounted:n.onMapMounted,fetchPlaces:n.fetchPlaces,places:n.state.places,types:n.state.types,selectedTypes:n.state.selectedTypes,filterChange:n.filterChange,clearFilter:n.clearFilter})},n.state={loading:!0,currentLocation:{},places:[],types:L,selectedTypes:[]},n.mapRef=null,n.google=null,n.setter=k(Object(E.a)(n)),n}return Object(O.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){this.google=window.google}},{key:"componentWillUnmount",value:function(){this.setter.cancel()}},{key:"render",value:function(){return this.getComponent()}}]),t}(a.Component),oe=n(179),re=n(434),ie=Object(oe.a)({palette:{type:"dark"}});ie=Object(re.a)(ie);var ce=n(427),le=n(428),se=n(426);function ue(e){var t=e.children,n=e.window,a=Object(se.a)({disableHysteresis:!0,threshold:0,target:n?n():void 0});return o.a.cloneElement(t,{elevation:a?4:0})}var pe=function(e){function t(){return Object(g.a)(this,t),Object(y.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(ue,null,o.a.createElement(ce.a,{position:"fixed",color:"primary"},o.a.createElement(le.a,null,this.props.icon,o.a.createElement(_.a,{variant:"h6",style:{marginLeft:"5px"}},this.props.heading)))),o.a.createElement(le.a,null))}}]),t}(a.Component);n(392);var he=function(){return o.a.createElement(u.a,{defer:!0},o.a.createElement(s.a,null),o.a.createElement(m.a,{theme:ie},o.a.createElement(c.a,{width:"100vw",bgcolor:"primary.main"},o.a.createElement(l.a,{fluid:"true",style:{minHeight:"100%",padding:0}},o.a.createElement(pe,{icon:o.a.createElement(h.a,null),heading:"Map Locator"}),o.a.createElement(c.a,{height:"95vh",width:"100%",display:"flex",boxShadow:3,bgcolor:"background.default",p:2,overflow:"visible"},o.a.createElement(ae,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(he,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[185,1,2]]]);
//# sourceMappingURL=main.eb24929b.chunk.js.map
(this["webpackJsonpvideo-task-test"]=this["webpackJsonpvideo-task-test"]||[]).push([[0],{169:function(e,t,c){},170:function(e,t,c){},171:function(e,t,c){},272:function(e,t,c){},282:function(e,t,c){},283:function(e,t,c){},284:function(e,t,c){},285:function(e,t,c){},286:function(e,t,c){},300:function(e,t,c){},313:function(e,t,c){"use strict";c.r(t);var n=c(6),a=c(0),s=c.n(a),i=c(22),l=c.n(i),r=c(62),o=(c(169),c(42)),j=(c(170),c(30)),u=s.a.createContext(),d=(c(171),c.p+"static/media/logo.9e07718b.svg"),b=c(319),m=c(323),h=c(66);var x=function(e){var t=e.onSubmitFormLogin;return Object(n.jsxs)(b.a,{layout:"vertical",name:"login",className:"login__form",onFinish:function(e){t(e)},children:[Object(n.jsx)("img",{className:"login__logo",src:d,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f"}),Object(n.jsx)("h1",{className:"login__title",children:"\u0412\u0445\u043e\u0434"}),Object(n.jsx)(b.a.Item,{label:"\u041b\u043e\u0433\u0438\u043d",name:"username",children:Object(n.jsx)(m.a,{className:"login__input"})}),Object(n.jsx)(b.a.Item,{label:"\u041f\u0430\u0440\u043e\u043b\u044c",name:"password",children:Object(n.jsx)(m.a.Password,{className:"login__input"})}),Object(n.jsx)(b.a.Item,{children:Object(n.jsx)(h.a,{className:"login__button",htmlType:"submit",type:"primary",children:"\u0412\u043e\u0439\u0442\u0438"})})]})},O=(c(272),c(321));var _=function(e){var t=e.onClickExit,c=Object(j.g)().path,a=s.a.useState(""),i=Object(o.a)(a,2),l=i[0],u=i[1];return s.a.useEffect((function(){u(c.slice(1))}),[c]),Object(n.jsx)("header",{className:"header",children:Object(n.jsxs)("div",{className:"header__menu",children:[Object(n.jsxs)(O.a,{mode:"horizontal",onClick:function(e){u(e.key)},selectedKeys:[l],children:[Object(n.jsx)("img",{className:"header__logo",src:d,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f"}),Object(n.jsx)(O.a.Item,{children:Object(n.jsx)(r.b,{to:"/search",children:"\u041f\u043e\u0438\u0441\u043a"})},"search"),Object(n.jsx)(O.a.Item,{children:Object(n.jsx)(r.b,{to:"/favourites",children:"\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435"})},"favourites")]}),Object(n.jsx)(O.a,{mode:"horizontal",onClick:t,children:Object(n.jsx)(O.a.Item,{children:"\u0412\u044b\u0439\u0442\u0438"},"exit")})]})})},p=(c(282),c(283),c(150));var v=function(e){var t=e.clip,c=e.layout;return Object(n.jsxs)("div",{className:"video ".concat("list"===c&&"video_layout_list"),children:[Object(n.jsx)(p.a,{className:"video__iframe ".concat("list"===c&&"video__iframe_layout_list"),url:"https://www.youtube.com/embed/".concat(t.id.videoId),allowFullScreen:!0}),Object(n.jsxs)("div",{className:"video__info ".concat("list"===c&&"video__info_layout_list"),children:[Object(n.jsx)("h2",{className:"video__title ".concat("list"===c&&"video__title_layout_list"),children:t.snippet.title}),Object(n.jsx)("p",{className:"video__subtitle ".concat("list"===c&&"video__subtitle_layout_list"),children:t.snippet.description})]})]})};c(284);var f=function(e){var t=e.clipsLength,c=e.onClickHeart;return Object(n.jsx)("button",{className:"heart ".concat(t&&"heart_video"),onClick:c,children:Object(n.jsx)("svg",{className:"heart__image",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(n.jsx)("path",{d:"M20.8401 4.60999C20.3294 4.099 19.7229 3.69364 19.0555 3.41708C18.388 3.14052 17.6726 2.99817 16.9501 2.99817C16.2276 2.99817 15.5122 3.14052 14.8448 3.41708C14.1773 3.69364 13.5709 4.099 13.0601 4.60999L12.0001 5.66999L10.9401 4.60999C9.90843 3.5783 8.50915 2.9987 7.05012 2.9987C5.59109 2.9987 4.19181 3.5783 3.16012 4.60999C2.12843 5.64169 1.54883 7.04096 1.54883 8.49999C1.54883 9.95903 2.12843 11.3583 3.16012 12.39L4.22012 13.45L12.0001 21.23L19.7801 13.45L20.8401 12.39C21.3511 11.8792 21.7565 11.2728 22.033 10.6053C22.3096 9.93789 22.4519 9.22248 22.4519 8.49999C22.4519 7.77751 22.3096 7.0621 22.033 6.39464C21.7565 5.72718 21.3511 5.12075 20.8401 4.60999V4.60999Z",stroke:"#1390E5","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})})})},g=m.a.Search;var y=function(e){var t=e.clips,c=e.onSearchVideo,a=e.onClickHeart,i=s.a.useState("grid"),l=Object(o.a)(i,2),r=l[0],j=l[1],d=s.a.useContext(u).query;function b(e){j(e.target.name)}return Object(n.jsxs)("main",{className:"seek ".concat(t.length&&"seek_video"),children:[Object(n.jsx)("h1",{className:"seek__title ".concat(t.length&&"seek__title_video"),children:"\u041f\u043e\u0438\u0441\u043a \u0432\u0438\u0434\u0435\u043e"}),Object(n.jsx)("div",{className:"seek__input ".concat(t.length&&"seek__input_video"),children:Object(n.jsx)(g,{placeholder:"\u0427\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c?",enterButton:"\u041d\u0430\u0439\u0442\u0438",size:"large",suffix:Object(n.jsx)(f,{clipsLength:t.length,onClickHeart:a}),onSearch:function(e){c({query:e,name:"",count:12})}})}),Object(n.jsxs)("div",{className:"seek__info ".concat(t.length&&"seek__info_video"),children:[Object(n.jsxs)("p",{className:"seek__query",children:["\u0412\u0438\u0434\u0435\u043e \u043f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443 \xab",d,"\xbb"]}),Object(n.jsxs)("div",{className:"seek__buttons",children:[Object(n.jsx)("button",{className:"seek__button seek__button-list ".concat("list"===r&&"seek__button_active"),type:"button",name:"list",onClick:b}),Object(n.jsx)("button",{className:"seek__button seek__button-grid ".concat("grid"===r&&"seek__button_active"),type:"button",name:"grid",onClick:b})]})]}),Object(n.jsx)("div",{className:"seek__clips ".concat("list"===r&&"seek__clips_layout_list"),children:t.map((function(e){return Object(n.jsx)(v,{clip:e,layout:r},e.id.videoId)}))})]})},k=(c(285),c(318));c(286);var C=function(e){var t=e.item,c=e.index,a=e.onClickQueryRun,s=e.onClickQueryEdit;return Object(n.jsxs)("div",{className:"query",children:[Object(n.jsx)("p",{className:"query__text",children:t.name}),Object(n.jsxs)("div",{children:[Object(n.jsx)(h.a,{type:"link",onClick:function(){a(t)},children:Object(n.jsx)(r.b,{to:"/search",children:"\u0412\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c"})}),Object(n.jsx)(h.a,{type:"link",onClick:function(){s(c)},children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"})]})]})};var N=function(e){var t=e.onClickQueryRun,c=e.onClickQueryEdit;return Object(n.jsx)("main",{className:"favourit",children:Object(n.jsxs)("div",{className:"favourit__container",children:[Object(n.jsx)("h1",{className:"favourit__title",children:"\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435"}),Object(n.jsx)(k.b,{className:"favourit__list",size:"large",bordered:!0,dataSource:localStorage.getItem("queries")?JSON.parse(localStorage.getItem("queries")):[],renderItem:function(e,a){return Object(n.jsx)(k.b.Item,{children:Object(n.jsx)(C,{item:e,index:a,onClickQueryRun:t,onClickQueryEdit:c})})}})]})})},S=(c(300),c(322)),I=c(316),w=c(317),q=c(320),L=c(324);var E=function(e){var t=e.isVisible,c=e.title,a=e.index,i=e.isDisabledQueryInput,l=e.onClosePopup,r=e.onEditQueryList,j=b.a.useForm(),d=Object(o.a)(j,1)[0],x=s.a.useState(0),O=Object(o.a)(x,2),_=O[0],p=O[1],v=s.a.useContext(u),f=v.query,g=v.name,y=v.count;function k(e){p(e)}return s.a.useEffect((function(){if(t)if(a<0)d.setFieldsValue({query:f,name:g}),p(y);else{var e=localStorage.getItem("queries"),c=JSON.parse(e)[a],n=c.query,s=c.name,i=c.count;d.setFieldsValue({query:n,name:s}),p(i)}}),[t,d,f,g,y,a]),Object(n.jsx)(S.a,{visible:t,title:c,onCancel:l,footer:[],children:Object(n.jsxs)(b.a,{form:d,layout:"vertical",name:"popup",onFinish:function(e){var t=e.query,c=e.name;r({query:t,name:c,count:_},a)},children:[Object(n.jsx)(b.a.Item,{label:"\u0417\u0430\u043f\u0440\u043e\u0441",name:"query",children:Object(n.jsx)(m.a,{disabled:i})}),Object(n.jsx)(b.a.Item,{label:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",name:"name",rules:[{required:!0,message:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u0430"}],children:Object(n.jsx)(m.a,{})}),Object(n.jsx)(b.a.Item,{label:"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e",name:"count",children:Object(n.jsxs)(I.a,{children:[Object(n.jsx)(w.a,{span:18,children:Object(n.jsx)(q.a,{min:1,max:50,defaultValue:12,value:_,onChange:k})}),Object(n.jsx)(w.a,{span:4,children:Object(n.jsx)(L.a,{min:1,max:50,defaultValue:12,style:{margin:"0 20px"},value:_,onChange:k})})]})}),Object(n.jsxs)(I.a,{children:[Object(n.jsx)(w.a,{children:Object(n.jsx)(b.a.Item,{children:Object(n.jsx)(h.a,{htmlType:"button",style:{margin:"0 5px",width:"226px"},onClick:l,children:"\u041d\u0435 \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0442\u044c"})})}),Object(n.jsx)(w.a,{children:Object(n.jsx)(b.a.Item,{children:Object(n.jsx)(h.a,{htmlType:"submit",type:"primary",style:{margin:"0 5px",width:"226px"},children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})})})]})]})})},F=c(93);var Q=function(){var e=s.a.useState(!localStorage.getItem(F.username)),t=Object(o.a)(e,2),c=t[0],a=t[1],i=s.a.useState(!1),l=Object(o.a)(i,2),r=l[0],d=l[1],b=s.a.useState(""),m=Object(o.a)(b,2),h=m[0],O=m[1],p=s.a.useState(!1),v=Object(o.a)(p,2),f=v[0],g=v[1],k=s.a.useState(0),C=Object(o.a)(k,2),S=C[0],I=C[1],w=s.a.useState({}),q=Object(o.a)(w,2),L=q[0],Q=q[1],V=s.a.useState([]),J=Object(o.a)(V,2),P=J[0],T=J[1];function z(){localStorage.removeItem(F.username),a(!0)}function B(e){fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&type=video"+"&q=".concat(e.query)+"&maxResults=".concat(e.count)+"&key=AIzaSyB_CL-jK3MdyAk4jltnf4zbvkmPTeteGM0",{method:"GET"}).then((function(e){return e.ok?e.json():Promise.reject(e)})).then((function(t){Q(e),T(t.items)})).catch((function(){alert("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a. \u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u0437\u0430\u043f\u0440\u043e\u0441.")}))}return Object(n.jsx)("div",{className:"app ".concat(c&&"app__guest"),children:Object(n.jsxs)(u.Provider,{value:L,children:[Object(n.jsxs)(j.d,{children:[Object(n.jsx)(j.b,{exact:!0,path:"/",children:c?Object(n.jsx)(x,{onSubmitFormLogin:function(e){var t=e.username,c=e.password;F.username===t&&F.password===c?(localStorage.setItem(t,t),a(!1)):alert("\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u043b\u043e\u0433\u0438\u043d \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c")}}):Object(n.jsx)(j.a,{to:"/search"})}),Object(n.jsx)(j.b,{path:"/search",children:c?Object(n.jsx)(j.a,{to:"/"}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(_,{onClickExit:z}),Object(n.jsx)(y,{clips:P,onSearchVideo:B,onClickHeart:function(){I(-1),O("\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441"),g(!0),d(!0)}})]})}),Object(n.jsx)(j.b,{path:"/favourites",children:c?Object(n.jsx)(j.a,{to:"/"}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(_,{onClickExit:z}),Object(n.jsx)(N,{onClickQueryRun:B,onClickQueryEdit:function(e){I(e),O("\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441"),g(!1),d(!0)}})]})})]}),Object(n.jsx)(E,{isVisible:r,title:h,index:S,isDisabledQueryInput:f,onClosePopup:function(){d(!1)},onEditQueryList:function(e,t){var c=localStorage.getItem("queries");if(c){var n=JSON.parse(c);t<0?n[n.length]=e:n[t]=e,localStorage.setItem("queries",JSON.stringify(n))}else localStorage.setItem("queries",JSON.stringify([e]));d(!1)}})]})})},V=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,325)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),s(e),i(e)}))};l.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(r.a,{children:Object(n.jsx)(Q,{})})}),document.getElementById("root")),V()},93:function(e){e.exports=JSON.parse('{"username":"valery","password":"qwerty"}')}},[[313,1,2]]]);
//# sourceMappingURL=main.637fcf60.chunk.js.map
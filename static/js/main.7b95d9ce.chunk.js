(this["webpackJsonpvideo-task-test"]=this["webpackJsonpvideo-task-test"]||[]).push([[0],{156:function(e,t,i){},160:function(e,t,i){},161:function(e,t,i){},262:function(e,t,i){},269:function(e,t,i){},270:function(e,t,i){},271:function(e,t,i){},272:function(e,t,i){},273:function(e,t,i){},287:function(e,t,i){},300:function(e,t,i){"use strict";i.r(t);var s=i(6),n=(i(156),i(0)),a=i.n(n),c=i(21),l=i.n(c),o=i(42),r=(i(160),a.a.createContext()),u=(i(161),i.p+"static/media/logo.9e07718b.svg"),j=i(306),d=i(310),b=i(60);var m=function(e){var t=e.isVisible,i=e.onSubmitFormLogin;return Object(s.jsxs)(j.a,{layout:"vertical",name:"login",className:"login__form ".concat(t&&"login__form_visible"),onFinish:i,children:[Object(s.jsx)("img",{className:"login__logo",src:u,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f"}),Object(s.jsx)("h1",{className:"login__title",children:"\u0412\u0445\u043e\u0434"}),Object(s.jsx)(j.a.Item,{label:"\u041b\u043e\u0433\u0438\u043d",name:"username",children:Object(s.jsx)(d.a,{className:"login__input"})}),Object(s.jsx)(j.a.Item,{label:"\u041f\u0430\u0440\u043e\u043b\u044c",name:"password",children:Object(s.jsx)(d.a.Password,{className:"login__input"})}),Object(s.jsx)(j.a.Item,{children:Object(s.jsx)(b.a,{className:"login__button",htmlType:"submit",type:"primary",children:"\u0412\u043e\u0439\u0442\u0438"})})]})},h=(i(262),i(308));var _=function(e){var t=e.isVisible,i=e.currentPage,n=e.onClickMenuItem,a=e.onClickExit;return Object(s.jsx)("header",{className:"header ".concat(t&&"header_visible"),children:Object(s.jsxs)("div",{className:"header__menu",children:[Object(s.jsxs)(h.a,{mode:"horizontal",selectedKeys:[i],onClick:n,children:[Object(s.jsx)("img",{className:"header__logo",src:u,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f"}),Object(s.jsx)(h.a.Item,{children:"\u041f\u043e\u0438\u0441\u043a"},"search"),Object(s.jsx)(h.a.Item,{children:"\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435"},"favourites")]}),Object(s.jsx)(h.a,{mode:"horizontal",selectedKeys:[],onClick:a,children:Object(s.jsx)(h.a.Item,{children:"\u0412\u044b\u0439\u0442\u0438"},"exit")})]})})},x=(i(269),i(270),i(140));var O=function(e){var t=e.clip,i=e.layout;return Object(s.jsxs)("div",{className:"video ".concat("list"===i&&"video_layout_list"),children:[Object(s.jsx)(x.a,{className:"video__iframe ".concat("list"===i&&"video__iframe_layout_list"),url:"https://www.youtube.com/embed/".concat(t.id.videoId),allowFullScreen:!0}),Object(s.jsxs)("div",{className:"video__info ".concat("list"===i&&"video__info_layout_list"),children:[Object(s.jsx)("h2",{className:"video__title ".concat("list"===i&&"video__title_layout_list"),children:t.snippet.title}),Object(s.jsx)("p",{className:"video__subtitle ".concat("list"===i&&"video__subtitle_layout_list"),children:t.snippet.description})]})]})};i(271);var v=function(e){var t=e.clipsLength,i=e.onClickHeart;return Object(s.jsx)("button",{className:"heart ".concat(t&&"heart_video"),onClick:i,children:Object(s.jsx)("svg",{className:"heart__image",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(s.jsx)("path",{d:"M20.8401 4.60999C20.3294 4.099 19.7229 3.69364 19.0555 3.41708C18.388 3.14052 17.6726 2.99817 16.9501 2.99817C16.2276 2.99817 15.5122 3.14052 14.8448 3.41708C14.1773 3.69364 13.5709 4.099 13.0601 4.60999L12.0001 5.66999L10.9401 4.60999C9.90843 3.5783 8.50915 2.9987 7.05012 2.9987C5.59109 2.9987 4.19181 3.5783 3.16012 4.60999C2.12843 5.64169 1.54883 7.04096 1.54883 8.49999C1.54883 9.95903 2.12843 11.3583 3.16012 12.39L4.22012 13.45L12.0001 21.23L19.7801 13.45L20.8401 12.39C21.3511 11.8792 21.7565 11.2728 22.033 10.6053C22.3096 9.93789 22.4519 9.22248 22.4519 8.49999C22.4519 7.77751 22.3096 7.0621 22.033 6.39464C21.7565 5.72718 21.3511 5.12075 20.8401 4.60999V4.60999Z",stroke:"#1390E5","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})})})},p=d.a.Search;var f=function(e){var t=e.isVisible,i=e.clips,n=e.onSearchVideo,c=e.onClickHeart,l=a.a.useState("grid"),u=Object(o.a)(l,2),j=u[0],d=u[1],b=a.a.useContext(r).query;function m(e){d(e.target.name)}return Object(s.jsxs)("main",{className:"seek ".concat(t&&"seek_visible"," ").concat(i.length&&"seek_video"),children:[Object(s.jsx)("h1",{className:"seek__title ".concat(i.length&&"seek__title_video"),children:"\u041f\u043e\u0438\u0441\u043a \u0432\u0438\u0434\u0435\u043e"}),Object(s.jsx)("div",{className:"seek__input ".concat(i.length&&"seek__input_video"),children:Object(s.jsx)(p,{placeholder:"\u0427\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c?",enterButton:"\u041d\u0430\u0439\u0442\u0438",size:"large",suffix:Object(s.jsx)(v,{clipsLength:i.length,onClickHeart:c}),onSearch:function(e){n({query:e,name:"",count:12})}})}),Object(s.jsxs)("div",{className:"seek__info ".concat(i.length&&"seek__info_video"),children:[Object(s.jsxs)("p",{className:"seek__query",children:["\u0412\u0438\u0434\u0435\u043e \u043f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443 \xab",b,"\xbb"]}),Object(s.jsxs)("div",{className:"seek__buttons",children:[Object(s.jsx)("button",{className:"seek__button seek__button-list ".concat("list"===j&&"seek__button_active"),type:"button",name:"list",onClick:m}),Object(s.jsx)("button",{className:"seek__button seek__button-grid ".concat("grid"===j&&"seek__button_active"),type:"button",name:"grid",onClick:m})]})]}),Object(s.jsx)("div",{className:"seek__clips ".concat("list"===j&&"seek__clips_layout_list"),children:i.map((function(e){return Object(s.jsx)(O,{clip:e,layout:j},e.id.videoId)}))})]})},g=(i(272),i(305));i(273);var y=function(e){var t=e.item,i=e.index,n=e.onClickQueryRun,a=e.onClickQueryEdit;return Object(s.jsxs)("div",{className:"query",children:[Object(s.jsx)("p",{className:"query__text",children:t.name}),Object(s.jsxs)("div",{children:[Object(s.jsx)(b.a,{type:"link",onClick:function(){n(t)},children:"\u0412\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c"}),Object(s.jsx)(b.a,{type:"link",onClick:function(){a(i)},children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"})]})]})};var k=function(e){var t=e.isVisible,i=e.onClickQueryRun,n=e.onClickQueryEdit;return Object(s.jsx)("main",{className:"favourit ".concat(t&&"favourit_visible"),children:Object(s.jsxs)("div",{className:"favourit__container",children:[Object(s.jsx)("h1",{className:"favourit__title",children:"\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435"}),Object(s.jsx)(g.b,{className:"favourit__list",size:"large",bordered:!0,dataSource:localStorage.getItem("queries")?JSON.parse(localStorage.getItem("queries")):[],renderItem:function(e,t){return Object(s.jsx)(g.b.Item,{children:Object(s.jsx)(y,{item:e,index:t,onClickQueryRun:i,onClickQueryEdit:n})})}})]})})},C=(i(287),i(309)),N=i(303),S=i(304),I=i(307),w=i(311);var q=function(e){var t=e.isVisible,i=e.title,n=e.index,c=e.isDisabledQueryInput,l=e.onClosePopup,u=e.onEditQueryList,m=j.a.useForm(),h=Object(o.a)(m,1)[0],_=a.a.useState(0),x=Object(o.a)(_,2),O=x[0],v=x[1],p=a.a.useContext(r),f=p.query,g=p.name,y=p.count;function k(e){v(e)}return a.a.useEffect((function(){if(t)if(n<0)h.setFieldsValue({query:f,name:g}),v(y);else{var e=localStorage.getItem("queries"),i=JSON.parse(e)[n],s=i.query,a=i.name,c=i.count;h.setFieldsValue({query:s,name:a}),v(c)}}),[t,h,f,g,y,n]),Object(s.jsx)(C.a,{visible:t,title:i,onCancel:l,footer:[],children:Object(s.jsxs)(j.a,{form:h,layout:"vertical",name:"popup",onFinish:function(e){var t=e.query,i=e.name;u({query:t,name:i,count:O},n)},children:[Object(s.jsx)(j.a.Item,{label:"\u0417\u0430\u043f\u0440\u043e\u0441",name:"query",children:Object(s.jsx)(d.a,{disabled:c})}),Object(s.jsx)(j.a.Item,{label:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",name:"name",rules:[{required:!0,message:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u0430"}],children:Object(s.jsx)(d.a,{})}),Object(s.jsx)(j.a.Item,{label:"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e",name:"count",children:Object(s.jsxs)(N.a,{children:[Object(s.jsx)(S.a,{span:18,children:Object(s.jsx)(I.a,{min:1,max:50,defaultValue:12,value:O,onChange:k})}),Object(s.jsx)(S.a,{span:4,children:Object(s.jsx)(w.a,{min:1,max:50,defaultValue:12,style:{margin:"0 20px"},value:O,onChange:k})})]})}),Object(s.jsxs)(N.a,{children:[Object(s.jsx)(S.a,{children:Object(s.jsx)(j.a.Item,{children:Object(s.jsx)(b.a,{htmlType:"button",style:{margin:"0 5px",width:"226px"},onClick:l,children:"\u041d\u0435 \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0442\u044c"})})}),Object(s.jsx)(S.a,{children:Object(s.jsx)(j.a.Item,{children:Object(s.jsx)(b.a,{htmlType:"submit",type:"primary",style:{margin:"0 5px",width:"226px"},children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})})})]})]})})},V=i(85);var L=function(){var e=a.a.useState(!localStorage.getItem(V.username)),t=Object(o.a)(e,2),i=t[0],n=t[1],c=a.a.useState("search"),l=Object(o.a)(c,2),u=l[0],j=l[1],d=a.a.useState(!1),b=Object(o.a)(d,2),h=b[0],x=b[1],O=a.a.useState(""),v=Object(o.a)(O,2),p=v[0],g=v[1],y=a.a.useState(!1),C=Object(o.a)(y,2),N=C[0],S=C[1],I=a.a.useState(0),w=Object(o.a)(I,2),L=w[0],E=w[1],Q=a.a.useState({}),F=Object(o.a)(Q,2),J=F[0],P=F[1],z=a.a.useState([]),M=Object(o.a)(z,2),R=M[0],T=M[1];function B(e){fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&type=video"+"&q=".concat(e.query)+"&maxResults=".concat(e.count)+"&key=AIzaSyB_CL-jK3MdyAk4jltnf4zbvkmPTeteGM0",{method:"GET"}).then((function(e){return e.ok?e.json():Promise.reject(e)})).then((function(t){P(e),T(t.items)})).catch((function(){alert("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a. \u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u0437\u0430\u043f\u0440\u043e\u0441.")}))}return Object(s.jsx)("div",{className:"app ".concat(i&&"app__guest"),children:Object(s.jsxs)(r.Provider,{value:J,children:[Object(s.jsx)(m,{isVisible:i,onSubmitFormLogin:function(e){var t=e.username,i=e.password;V.username===t&&V.password===i?(localStorage.setItem(t,t),n(!1)):alert("\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u043b\u043e\u0433\u0438\u043d \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c")}}),Object(s.jsx)(_,{isVisible:!i,currentPage:u,onClickMenuItem:function(e){j(e.key)},onClickExit:function(){localStorage.removeItem(V.username),n(!0)}}),Object(s.jsx)(f,{isVisible:!i&&"search"===u,clips:R,onSearchVideo:B,onClickHeart:function(){E(-1),g("\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441"),S(!0),x(!0)}}),Object(s.jsx)(k,{isVisible:!i&&"favourites"===u,onClickQueryRun:function(e){j("search"),B(e)},onClickQueryEdit:function(e){E(e),g("\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441"),S(!1),x(!0)}}),Object(s.jsx)(q,{isVisible:h,title:p,index:L,isDisabledQueryInput:N,onClosePopup:function(){x(!1)},onEditQueryList:function(e,t){var i=localStorage.getItem("queries");if(i){var s=JSON.parse(i);t<0?s[s.length]=e:s[t]=e,localStorage.setItem("queries",JSON.stringify(s))}else localStorage.setItem("queries",JSON.stringify([e]));x(!1)}})]})})};l.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(L,{})}),document.getElementById("root"))},85:function(e){e.exports=JSON.parse('{"username":"valery","password":"qwerty"}')}},[[300,1,2]]]);
//# sourceMappingURL=main.7b95d9ce.chunk.js.map
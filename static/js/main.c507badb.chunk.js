(this["webpackJsonplinkedin-clone-app"]=this["webpackJsonplinkedin-clone-app"]||[]).push([[0],{68:function(e,t,s){},69:function(e,t,s){},70:function(e,t,s){},71:function(e,t,s){},79:function(e,t,s){},80:function(e,t,s){},81:function(e,t,s){},82:function(e,t,s){},83:function(e,t,s){},84:function(e,t,s){},85:function(e,t,s){"use strict";s.r(t);var c=s(2),a=s.n(c),n=s(18),i=s.n(n),r=(s(68),s(69),s(70),s(45)),l=s.n(r),o=(s(71),s(99)),j=s(32),d=Object(j.b)({name:"user",initialState:{user:null},reducers:{login:function(e,t){e.user=t.payload},logout:function(e){e.user=null}}}),b=d.actions,u=b.login,h=b.logout,O=function(e){return e.user.user},p=d.reducer,m=s(14),x=s(3);var f=function(e){var t=e.avatar,s=e.Icon,c=e.title,a=e.onClick,n=Object(m.c)(O);return Object(x.jsxs)("div",{onClick:a,className:"headerOption",children:[s&&Object(x.jsx)(s,{className:"headerOption_icon"}),t&&Object(x.jsx)(o.a,{className:"headerOption_icon",children:null===n||void 0===n?void 0:n.email[0]}),Object(x.jsxs)("h3",{className:"headerOption_title",children:[" ",c," "]})]})},v=s(46),g=s.n(v),N=s(47),w=s.n(N),y=s(48),_=s.n(y),I=s(49),k=s.n(I),C=s(50),U=s.n(C),S=s(26),P=S.a.initializeApp({apiKey:"AIzaSyDYetJrRAPP5UDxR3FhcaKBuJFdbXfJ0RQ",authDomain:"linkedin-clone-a6eda.firebaseapp.com",projectId:"linkedin-clone-a6eda",storageBucket:"linkedin-clone-a6eda.appspot.com",messagingSenderId:"834145618412",appId:"1:834145618412:web:7ece056ba43467202958c9",measurementId:"G-LCBW5FVLB9"}).firestore(),R=S.a.auth();var A=function(){var e=Object(m.b)();return Object(x.jsxs)("div",{className:"header",children:[Object(x.jsxs)("div",{className:"header_left",children:[Object(x.jsx)("img",{src:"https://www.flaticon.com/svg/vstatic/svg/1384/1384046.svg?token=exp=1613470751~hmac=93e2ab872b6976b9a7b37202065b38b9",alt:""}),Object(x.jsxs)("div",{className:"header_search",children:[Object(x.jsx)(l.a,{}),Object(x.jsx)("input",{placeholder:"Search",type:"text"})]})]}),Object(x.jsxs)("div",{className:"header_right",children:[Object(x.jsx)(f,{Icon:g.a,title:"Home"}),Object(x.jsx)(f,{Icon:w.a,title:"My Network"}),Object(x.jsx)(f,{Icon:_.a,title:"Jobs"}),Object(x.jsx)(f,{Icon:k.a,title:"Messging"}),Object(x.jsx)(f,{Icon:U.a,title:"Notifications"}),Object(x.jsx)(f,{avatar:!0,title:"Me",onClick:function(){e(h()),R.signOut()}})]})]})},T=(s(79),s.p+"static/media/1875750.7f98515c.jpg");var E=function(){var e=Object(m.c)(O),t=function(e){return Object(x.jsxs)("div",{className:"sidebar_recentItems",children:[Object(x.jsx)("span",{className:"sidebar_hash",children:" # "}),Object(x.jsxs)("p",{children:[" ",e," "]})]})};return Object(x.jsxs)("div",{className:"sidebar",children:[Object(x.jsxs)("div",{className:"sidebar_top",children:[Object(x.jsx)("img",{src:T,alt:""}),Object(x.jsxs)(o.a,{src:e.photoUrl,className:"sidebar_avatar",children:[" ",e.email[0]," "]}),Object(x.jsxs)("h2",{children:[" ",e.displayName," "]}),Object(x.jsxs)("h4",{children:[" ",e.email," "]})]}),Object(x.jsxs)("div",{className:"sidebar_stats",children:[Object(x.jsxs)("div",{className:"sidebar_stat",children:[Object(x.jsx)("p",{children:" Who Viewed You "}),Object(x.jsx)("p",{className:"sidebar_statNumber",children:" 2,534 "})]}),Object(x.jsxs)("div",{className:"sidebar_stat",children:[Object(x.jsx)("p",{children:" Views On Posts "}),Object(x.jsx)("p",{className:"sidebar_statNumber",children:" 3,543 "})]})]}),Object(x.jsxs)("div",{className:"sidebar_bottom",children:[Object(x.jsx)("p",{children:" Recents "}),t("react.js"),t("Programming"),t("UI/UX"),t("Web Development"),t("design"),t("developer")]})]})},D=s(20),W=(s(80),s(55)),B=s.n(W);s(81);var F=function(e){var t=e.Icon,s=e.title,c=e.color;return Object(x.jsxs)("div",{className:"inputOption",children:[Object(x.jsx)(t,{style:{color:c}}),Object(x.jsx)("h4",{children:s})]})},J=s(56),V=s.n(J),L=s(57),M=s.n(L),K=s(58),z=s.n(K),H=s(59),X=s.n(H),Y=(s(82),s(51)),q=s.n(Y),G=s(52),Q=s.n(G),$=s(53),Z=s.n($),ee=s(54),te=s.n(ee),se=Object(c.forwardRef)((function(e,t){var s=e.name,c=e.description,a=e.message,n=e.photoUrl;return Object(x.jsxs)("div",{ref:t,className:"post",children:[Object(x.jsxs)("div",{className:"post_header",children:[Object(x.jsx)(o.a,{src:n,children:s[0]}),Object(x.jsxs)("div",{className:"post_info",children:[Object(x.jsx)("h2",{children:s}),Object(x.jsx)("p",{children:c})]})]}),Object(x.jsx)("div",{className:"post_body",children:Object(x.jsx)("p",{children:a})}),Object(x.jsxs)("div",{className:"post_buttons",children:[Object(x.jsx)(F,{Icon:q.a,title:"Like",color:"gray"}),Object(x.jsx)(F,{Icon:Q.a,title:"Comment",color:"gray"}),Object(x.jsx)(F,{Icon:Z.a,title:"Share",color:"gray"}),Object(x.jsx)(F,{Icon:te.a,title:"Send",color:"gray"})]})]})})),ce=s(60);var ae=function(){var e=Object(m.c)(O),t=Object(c.useState)(""),s=Object(D.a)(t,2),a=s[0],n=s[1],i=Object(c.useState)([]),r=Object(D.a)(i,2),l=r[0],o=r[1];return Object(c.useEffect)((function(){P.collection("posts").orderBy("timestamp","desc").onSnapshot((function(e){return o(e.docs.map((function(e){return{id:e.id,data:e.data()}})))}))}),[]),Object(x.jsxs)("div",{className:"feed",children:[Object(x.jsxs)("div",{className:"feed_inputContainer",children:[Object(x.jsxs)("div",{className:"feed_input",children:[Object(x.jsx)(B.a,{}),Object(x.jsxs)("form",{children:[Object(x.jsx)("input",{value:a,onChange:function(e){return n(e.target.value)},type:"text"}),Object(x.jsx)("button",{onClick:function(t){t.preventDefault(),P.collection("posts").add({name:e.displayName,description:e.email,message:a,photoUrl:"",timestamp:S.a.firestore.FieldValue.serverTimestamp()}),n("")},type:"submit",children:"Send"})]})]}),Object(x.jsxs)("div",{className:"feed_inputOptions",children:[Object(x.jsx)(F,{Icon:V.a,title:"Photo",color:"rgb(223, 107, 12)"}),Object(x.jsx)(F,{Icon:M.a,title:"Video",color:"green"}),Object(x.jsx)(F,{Icon:z.a,title:"Event",color:"skyblue"}),Object(x.jsx)(F,{Icon:X.a,title:"Write Artical",color:"purple"})]})]}),Object(x.jsx)(ce.a,{children:l.map((function(e){var t=e.id,s=e.data,c=s.name,a=s.description,n=s.message,i=s.photoUrl;return Object(x.jsx)(se,{name:c,description:a,message:n,photoUrl:i},t)}))})]})},ne=(s(83),s.p+"static/media/Come.5c1ca452.png");var ie=function(){var e=Object(c.useState)(""),t=Object(D.a)(e,2),s=t[0],a=t[1],n=Object(c.useState)(""),i=Object(D.a)(n,2),r=i[0],l=i[1],o=Object(c.useState)(""),j=Object(D.a)(o,2),d=j[0],b=j[1],h=Object(c.useState)(""),O=Object(D.a)(h,2),p=O[0],f=O[1],v=Object(m.b)();return Object(x.jsxs)("div",{className:"login",children:[Object(x.jsx)("img",{src:ne,alt:""}),Object(x.jsxs)("form",{children:[Object(x.jsx)("input",{value:d,onChange:function(e){return b(e.target.value)},placeholder:"Full name (Required if Registering)",type:"text"}),Object(x.jsx)("input",{value:p,onChange:function(e){return f(e.target.value)},placeholder:"Profile Pic Url (Optional)",type:"text"}),Object(x.jsx)("input",{value:s,onChange:function(e){return a(e.target.value)},placeholder:"Email",type:"email"}),Object(x.jsx)("input",{value:r,onChange:function(e){return l(e.target.value)},placeholder:"Password",type:"password"}),Object(x.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault(),R.signInWithEmailAndPassword(s,r).then((function(e){v(u({email:e.user.email,uid:e.user.uid,displayName:e.user.displayName,profileUrl:e.user.photoURL}))})).catch((function(e){return alert(e)}))},children:"Sign In"})]}),Object(x.jsxs)("p",{children:["Not a Member?"," ",Object(x.jsx)("span",{className:"login_register",onClick:function(){if(!d)return alert("Please enter the full Name!");R.createUserWithEmailAndPassword(s,r).then((function(e){e.user.updateProfile({displayName:d,photoURL:p}).then((function(){v(u({email:e.user.email,uid:e.user.uid,displayName:d,photoUrl:p}))}))})).catch((function(e){return alert(e)}))},children:"Register Now"})]})]})},re=(s(84),s(62)),le=s.n(re),oe=s(61),je=s.n(oe);var de=function(){var e=function(e,t){return Object(x.jsxs)("div",{className:"widgets_article",children:[Object(x.jsx)("div",{className:"widgets_article_left",children:Object(x.jsx)(je.a,{})}),Object(x.jsxs)("div",{className:"widgets_article_right",children:[Object(x.jsx)("h4",{children:e}),Object(x.jsx)("p",{children:t})]})]})};return Object(x.jsxs)("div",{className:"widgets",children:[Object(x.jsxs)("div",{className:"widgets_header",children:[Object(x.jsx)("h2",{children:"LinkedIn News"}),Object(x.jsx)(le.a,{})]}),e("Paru is learning REACT","Top News - 2003 readers"),e("COVID-19 Updates - UK","Top News - 10,003 readers"),e("Tesla Hits the Roads of INDIA","Top News - 12,003 readers"),e("Farmers Fight for Justice inVain","Top News - 1,22,003 readers"),e("Paru is learning REACT","Top News - 12003 readers"),e("Paru is learning REACT","Top News - 12003 readers")]})};var be=function(){var e=Object(m.c)(O),t=Object(m.b)();return Object(c.useEffect)((function(){R.onAuthStateChanged((function(e){t(e?u({email:e.email,uid:e.uid,displayName:e.displayName,photoUrl:e.photoUrl}):h())}))}),[]),Object(x.jsxs)("div",{className:"app",children:[Object(x.jsx)(A,{}),e?Object(x.jsxs)("div",{className:"app_body",children:[Object(x.jsx)(E,{}),Object(x.jsx)(ae,{}),Object(x.jsx)(de,{})]}):Object(x.jsx)(ie,{})]})},ue=Object(j.a)({reducer:{user:p}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(m.a,{store:ue,children:Object(x.jsx)(be,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[85,1,2]]]);
//# sourceMappingURL=main.c507badb.chunk.js.map
(this["webpackJsonpslack-clone"]=this["webpackJsonpslack-clone"]||[]).push([[0],{109:function(n,e,t){},110:function(n,e,t){},124:function(n,e,t){"use strict";t.r(e);var i,a,c,o,r,s=t(2),l=t.n(s),d=t(55),j=t.n(d),p=(t(109),t(7)),b=t(13),x=(t(110),t(100)),h=t(15),u=t(8),O=t(140),g=t(78),m=t.n(g),f=t(81),v=t.n(f),w=t(82),y=t.n(w),I=t(44),k=t(46),S=k.a.initializeApp({apiKey:"AIzaSyACVcO_mtht0hYcxsIpvJmnBE2OtonPEP0",authDomain:"slack-clone-6ee77.firebaseapp.com",projectId:"slack-clone-6ee77",storageBucket:"slack-clone-6ee77.appspot.com",messagingSenderId:"911257892018",appId:"1:911257892018:web:c602a0d91b5fb96cb645ab"}).firestore(),C=k.a.auth(),z=new k.a.auth.GoogleAuthProvider,M=t(3);var D,R,A=function(){var n=Object(I.a)(C),e=Object(b.a)(n,1)[0];return Object(M.jsxs)(N,{children:[Object(M.jsxs)(P,{children:[Object(M.jsx)(B,{src:null===e||void 0===e?void 0:e.photoURL,alt:null===e||void 0===e?void 0:e.displayName,onClick:function(){return C.signOut()}}),Object(M.jsx)(m.a,{})]}),Object(M.jsxs)(E,{children:[Object(M.jsx)(v.a,{}),Object(M.jsx)("input",{type:"text",placeholder:"Search channel"})]}),Object(M.jsx)(F,{children:Object(M.jsx)(y.a,{})})]})},N=u.a.div(i||(i=Object(p.a)(["\n    display: flex;\n    position: fixed;\n    width: 100%;\n    align-items: center;\n    justify-content: space-between;\n    padding: 10px 0;\n    background-color: var(--slack-color);\n    color: white;\n"]))),P=u.a.div(a||(a=Object(p.a)(["\n    flex: 0.3;\n    display: flex;\n    align-items: center;\n    margin-left: 20px;\n\n    > .MuiSvgIcon-root {\n        margin-left: auto;\n        margin-right: 30px;\n    }\n"]))),B=Object(u.a)(O.a)(c||(c=Object(p.a)(["\n    cursor: pointer;\n\n    :hover {\n        opacity: 0.8;\n    }\n"]))),E=u.a.div(o||(o=Object(p.a)(["\n    flex: 0.4;\n    opacity: 1;\n    border-radius: 6px;\n    background-color: #421f44;\n    text-align: center;\n    display: flex;\n    padding: 0 50px;\n    color: gray;\n    border: 1px gray solid;\n\n    > input {\n        background-color: transparent;\n        border: none;\n        text-align: center;\n        min-width: 30vw;\n        outline: none;\n        color: white;\n    }\n"]))),F=u.a.div(r||(r=Object(p.a)(["\n    flex: 0.3;\n    display: flex;\n    align-items: flex-end;\n\n    > .MuiSvgIcon-root {\n        margin-left: auto;\n        margin-right: 20px;\n    }\n\n"]))),G=t(86),T=t.n(G),U=t(87),V=t.n(U),J=t(72),W=t.n(J),L=t(85),K=t(45),Y=t(63),$=Object(Y.b)({name:"app",initialState:{roomId:null},reducers:{enterRoom:function(n,e){n.roomId=e.payload.id}}}),_=$.actions.enterRoom,q=function(n){return n.app.roomId},H=$.reducer;var Q,X,Z,nn=function(n){var e=n.Icon,t=n.title,i=n.addChannelOption,a=n.id,c=Object(K.b)(),o=function(){var n=Object(L.a)(W.a.mark((function n(){var e;return W.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:(e=prompt("Please enter the channel name"))&&S.collection("rooms").add({name:e}).then((function(n){c(_({id:n.id}))}));case 2:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(M.jsxs)(en,{onClick:i?o:function(){a&&c(_({id:a}))},children:[e&&Object(M.jsx)(e,{fontSize:"small",style:{padding:10}}),e?Object(M.jsx)("h3",{children:t}):Object(M.jsxs)(tn,{children:[Object(M.jsx)("span",{children:"#"})," ",t]})]})},en=u.a.div(D||(D=Object(p.a)(["\n    display: flex;\n    font-size: 12px;\n    align-items: center;\n    padding-left: 2px;\n    cursor: pointer;\n\n    :hover {\n        opacity: 0.9;\n        background-color: #340e36;\n    }\n\n    > h3 {\n        font-weight: 500;\n    }\n\n    > h3 > span {\n        padding: 15px;\n    }\n"]))),tn=u.a.h3(R||(R=Object(p.a)(["\n    padding: 5px 0;\n    font-weight: 300;\n"]))),an=t(88),cn=t.n(an),on=t(89),rn=t.n(on),sn=t(90),ln=t.n(sn),dn=t(91),jn=t.n(dn),pn=t(92),bn=t.n(pn),xn=t(93),hn=t.n(xn),un=t(94),On=t.n(un),gn=t(95),mn=t.n(gn),fn=t(96),vn=t.n(fn),wn=t(97),yn=t.n(wn),In=t(53);var kn,Sn=function(){var n=Object(In.a)(S.collection("rooms")),e=Object(b.a)(n,1)[0];return Object(M.jsxs)(Cn,{children:[Object(M.jsxs)(zn,{children:[Object(M.jsxs)(Mn,{children:[Object(M.jsx)("h2",{children:"My Organization"}),Object(M.jsxs)("h3",{children:[Object(M.jsx)(T.a,{}),"Gabriel Caixeta"]})]}),Object(M.jsx)(V.a,{})]}),Object(M.jsx)(nn,{Icon:cn.a,title:"Threads"}),Object(M.jsx)(nn,{Icon:rn.a,title:"Mentions & reactions"}),Object(M.jsx)(nn,{Icon:ln.a,title:"Saved items"}),Object(M.jsx)(nn,{Icon:jn.a,title:"Channel browser"}),Object(M.jsx)(nn,{Icon:bn.a,title:"People & user groups"}),Object(M.jsx)(nn,{Icon:hn.a,title:"Apps"}),Object(M.jsx)(nn,{Icon:On.a,title:"File browser"}),Object(M.jsx)(nn,{Icon:mn.a,title:"Show less"}),Object(M.jsx)("hr",{}),Object(M.jsx)(nn,{Icon:vn.a,title:"Channels"}),Object(M.jsx)("hr",{}),Object(M.jsx)(nn,{Icon:yn.a,addChannelOption:!0,title:"Add Channel"}),null===e||void 0===e?void 0:e.docs.map((function(n){return Object(M.jsx)(nn,{id:n.id,title:n.data().name},n.id)}))]})},Cn=u.a.div(Q||(Q=Object(p.a)(["\n    background-color: var(--slack-color);\n    color: white;\n    flex: 0.3;\n    border-bottom: 1px solid #49274b;\n    max-width: 260px;\n    margin-top: 60px;\n\n    > hr {\n        margin-top: 10px;\n        margin-bottom: 10px;\n        border: 1px solid #49274b\n    }\n"]))),zn=u.a.div(X||(X=Object(p.a)(["\n    display: flex;\n    border-bottom: 1px solid #49274b;\n    padding-bottom: 10px;\n    padding: 13px;\n\n    > .MuiSvgIcon-root {\n        padding: 8px;\n        color: #49274b;\n        font-size: 18px;\n        background-color: white;\n        border-radius: 999px;\n    }\n"]))),Mn=u.a.div(Z||(Z=Object(p.a)(["\n    flex: 1;\n    \n    > h2 {\n        font-size: 15px;\n        font-weight: 900;\n        margin-bottom: 5px;\n    }\n\n    > h3 {\n        display: flex;\n        font-size: 13px;\n        font-weight: 400;\n        align-items: center;\n    }\n\n    > h3 > .MuiSvgIcon-root {\n        font-size: 14px;\n        margin-top: 1px;\n        margin-right: 2px;\n        color: green;\n    }\n"]))),Dn=t(98),Rn=t.n(Dn),An=t(99),Nn=t.n(An),Pn=t(138);var Bn,En,Fn=function(n){var e=n.channelId,t=n.channelName,i=n.chatRef,a=Object(s.useState)(""),c=Object(b.a)(a,2),o=c[0],r=c[1],l=Object(I.a)(C),d=Object(b.a)(l,1)[0];return Object(M.jsx)(Gn,{children:Object(M.jsxs)("form",{action:"",children:[Object(M.jsx)("input",{value:o,onChange:function(n){return r(n.target.value)},placeholder:"Message #".concat(t)}),Object(M.jsx)(Pn.a,{hidden:!0,type:"submit",onClick:function(n){if(n.preventDefault(),!e||!o)return!1;S.collection("rooms").doc(e).collection("messages").add({message:o,timestamp:k.a.firestore.FieldValue.serverTimestamp(),user:null===d||void 0===d?void 0:d.displayName,userImage:null===d||void 0===d?void 0:d.photoURL}),i.current.scrollIntoView({behavior:"smooth"}),r("")},children:"SEND"})]})})},Gn=u.a.div(kn||(kn=Object(p.a)(["\n    border-radius: 20px;\n\n    > form {\n        position: relative;\n        display: flex;\n        justify-content: center;\n    }\n\n    > form > input {\n        position: fixed;\n        bottom: 30px;\n        width: 60%;\n        border: 1px solid gray;\n        border-radius: 3px;\n        padding: 20px;\n        outline: none;\n    }\n\n    > form > button {\n        display: none !important;\n    }\n"])));var Tn,Un,Vn,Jn,Wn,Ln,Kn=function(n){var e=n.message,t=n.timestamp,i=n.user,a=n.userImage;return Object(M.jsxs)(Yn,{children:[Object(M.jsx)("img",{src:a,alt:""}),Object(M.jsxs)($n,{children:[Object(M.jsxs)("h4",{children:[i," ",Object(M.jsx)("span",{children:new Date(null===t||void 0===t?void 0:t.toDate()).toUTCString()})]}),Object(M.jsx)("p",{children:e})]})]})},Yn=u.a.div(Bn||(Bn=Object(p.a)(["\n    display: flex;\n    align-items: center;\n    padding: 20px;\n\n    > img {\n        height: 50px;\n        border-radius: 8px;\n    }\n"]))),$n=u.a.div(En||(En=Object(p.a)(["\n    padding-left: 10px;\n\n    > h4 > span {\n        color: gray;\n        font-weight: 300;\n        margin-left: 4px;\n        font-size: 10px;\n    }\n"])));var _n,qn,Hn=function(){var n=Object(s.useRef)(null),e=Object(K.c)(q),t=Object(In.b)(e&&S.collection("rooms").doc(e)),i=Object(b.a)(t,1)[0],a=Object(In.a)(e&&S.collection("rooms").doc(e).collection("messages").orderBy("timestamp","asc")),c=Object(b.a)(a,2),o=c[0],r=c[1];return Object(s.useEffect)((function(){var e;null===n||void 0===n||null===(e=n.current)||void 0===e||e.scrollIntoView({behavior:"smooth"})}),[e,r]),Object(M.jsx)(Qn,{children:i&&o&&Object(M.jsxs)(M.Fragment,{children:[Object(M.jsxs)(Xn,{children:[Object(M.jsxs)(Zn,{children:[Object(M.jsx)("h4",{children:Object(M.jsxs)("strong",{children:["#",null===i||void 0===i?void 0:i.data().name]})}),Object(M.jsx)(Rn.a,{})]}),Object(M.jsx)(ne,{children:Object(M.jsxs)("p",{children:[Object(M.jsx)(Nn.a,{})," Details"]})})]}),Object(M.jsxs)(ee,{children:[null===o||void 0===o?void 0:o.docs.map((function(n){var e=n.data(),t=e.message,i=e.timestamp,a=e.user,c=e.userImage;return Object(M.jsx)(Kn,{message:t,timestamp:i,user:a,userImage:c},n.id)})),Object(M.jsx)(te,{ref:n})]}),Object(M.jsx)(Fn,{chatRef:n,channelName:null===i||void 0===i?void 0:i.data().name,channelId:e})]})})},Qn=u.a.div(Tn||(Tn=Object(p.a)(["\n    flex: 0.7;\n    flex-grow: 1;\n    overflow-y: scroll;\n    margin-top: 60px;\n"]))),Xn=u.a.div(Un||(Un=Object(p.a)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 20px;\n    border-bottom: 1px solid lightgray;\n"]))),Zn=u.a.div(Vn||(Vn=Object(p.a)(["\n    display: flex;\n    align-items: center;\n\n    > h4 {\n        display: flex;\n        text-transform: lowercase;\n        margin-right: 10px;\n    }\n\n    > h4 > .MuiSvgIcon-root {\n        margin-left: 20px;\n        font-size: 18px;\n    }\n"]))),ne=u.a.div(Jn||(Jn=Object(p.a)(["\n    > p {\n        display: flex;\n        align-items: center;\n        font-size: 14px;\n    }\n\n    > p > .MuiSvgIcon-root {\n        margin-right: 5px !important;\n        font-size: 16px;\n    }\n"]))),ee=u.a.div(Wn||(Wn=Object(p.a)(["\n\n"]))),te=u.a.div(Ln||(Ln=Object(p.a)(["\n    padding-bottom: 200px;\n"])));var ie,ae=function(){return Object(M.jsx)(ce,{children:Object(M.jsxs)(oe,{children:[Object(M.jsx)("img",{src:"https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg",alt:""}),Object(M.jsx)("h1",{children:"Sign in to Slack Clone"}),Object(M.jsx)("p",{children:"clone.slack.gabrielcaixeta.com"}),Object(M.jsx)(Pn.a,{onClick:function(n){n.preventDefault(),C.signInWithPopup(z).catch((function(n){return alert(n.message)}))},children:"Sign in with Google"})]})})},ce=u.a.div(_n||(_n=Object(p.a)(["\n    background-color: #f8f8f8;\n    height: 100vh;\n    display: grid;\n    place-items: center;\n"]))),oe=u.a.div(qn||(qn=Object(p.a)(["\n    padding: 100px;\n    text-align: center;\n    background-color: white;\n    border-radius: 10px;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n\n    > img {\n        object-fit: contain;\n        height: 100px;\n        margin-bottom: 40px;\n    }\n\n    > button {\n        margin-top: 50px;\n        text-transform: inherit !important;\n        background-color: #0a8d48 !important;\n        color: white;\n    }\n"])));var re=function(){var n=Object(I.a)(C),e=Object(b.a)(n,2),t=e[0];return e[1],Object(M.jsx)("div",{className:"app",children:Object(M.jsx)(x.a,{children:t?Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(A,{}),Object(M.jsxs)(se,{children:[Object(M.jsx)(Sn,{}),Object(M.jsx)(h.c,{children:Object(M.jsx)(h.a,{path:"/",children:Object(M.jsx)(Hn,{})})})]})]}):Object(M.jsx)(ae,{})})})},se=u.a.div(ie||(ie=Object(p.a)(["\n  display: flex;\n  height: 100vh;\n"]))),le=Object(Y.a)({reducer:{app:H}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));j.a.render(Object(M.jsx)(l.a.StrictMode,{children:Object(M.jsx)(K.a,{store:le,children:Object(M.jsx)(re,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}},[[124,1,2]]]);
//# sourceMappingURL=main.eb8d01f0.chunk.js.map
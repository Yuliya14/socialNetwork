(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{19:function(e,t,n){e.exports={Dialogs:"Dialogs_Dialogs__3R31f"}},21:function(e,t,n){e.exports={User:"User_User__Sdyjm",userBlock:"User_userBlock__1fkjB"}},22:function(e,t,n){e.exports={ProfileInfo:"ProfileInfo_ProfileInfo__3PU0K",info:"ProfileInfo_info__28-aN"}},40:function(e,t,n){e.exports={dialogs:"Dialog_dialogs__2_0RP",active:"Dialog_active__2XuKM"}},43:function(e,t,n){e.exports={currentPage:"People_currentPage__Z-zw6"}},44:function(e,t,n){e.exports={profile:"Profile_profile__e0KGN"}},45:function(e,t,n){e.exports={Posts:"Posts_Posts__32QPa"}},46:function(e,t,n){e.exports={item:"Post_item__2prg-"}},47:function(e,t,n){e.exports={header:"Header_header__33eUF"}},50:function(e,t,n){},51:function(e,t,n){},7:function(e,t,n){e.exports={navBar:"NavBar_navBar__2Ga15",item:"NavBar_item__2ApLd",active:"NavBar_active__2U95y"}},80:function(e,t,n){"use strict";n.r(t),n.d(t,"renderEntireTree",(function(){return Ve}));var s=n(1),i=n.n(s),a=(n(50),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,81)).then((function(t){var n=t.getCLS,s=t.getFID,i=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),s(e),i(e),a(e),r(e)}))}),r=(n(51),n(4)),c=n(7),o=n.n(c),l=n(0),u=function(){return Object(l.jsxs)("div",{className:o.a.navBar,children:[Object(l.jsx)("div",{className:o.a.item,children:Object(l.jsx)(r.b,{activeClassName:o.a.active,to:"/profile",children:"Profile"})}),Object(l.jsx)("div",{className:o.a.item,children:Object(l.jsx)(r.b,{activeClassName:o.a.active,to:"/people",children:"People"})}),Object(l.jsx)("div",{className:o.a.item,children:Object(l.jsx)(r.b,{activeClassName:o.a.active,to:"/dialogs",children:"Dialogs"})}),Object(l.jsx)("div",{className:o.a.item,children:Object(l.jsx)(r.b,{activeClassName:o.a.active,to:"/news",children:"News"})}),Object(l.jsx)("div",{className:o.a.item,children:Object(l.jsx)(r.b,{activeClassName:o.a.active,to:"/music",children:"Music"})}),Object(l.jsx)("div",{className:o.a.item,children:Object(l.jsx)(r.b,{activeClassName:o.a.active,to:"/settings",children:"Settings"})})]})},d=n(3),j=function(){return Object(l.jsx)("div",{children:"News"})},g=function(){return Object(l.jsx)("div",{children:"Music"})},f=function(){return Object(l.jsx)("div",{children:"Settings"})},b=n(12),O=n(2),h="ADD-MESSAGE",p="CHANGE-MESSAGE-TEXT",m={dialogs:[{id:1,name:"Lena"},{id:2,name:"Vika"},{id:3,name:"Natasha"},{id:4,name:"Sveta"},{id:5,name:"Yuliya"}],messages:[{id:1,message:"Hello!"},{id:2,message:"How are you?"},{id:3,message:"Yo-yo"}],newMessageText:""},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(O.a)(Object(O.a)({},e),{},{messages:[{id:1,message:e.newMessageText}].concat(Object(b.a)(e.messages)),newMessageText:""});case p:return Object(O.a)(Object(O.a)({},e),{},{newMessageText:t.newMessageText});default:return e}},x=n(19),A=n.n(x),w=n(40),P=n.n(w),U=function(e){return Object(l.jsx)("div",{className:P.a.active,children:Object(l.jsx)(r.b,{to:"/dialogs/"+e.id,children:e.name})})},k=function(e){return Object(l.jsx)("div",{className:A.a.message,children:e.message})},C=function(e){var t=i.a.createRef();return e.auth.isLogin?Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{children:Object(l.jsx)("textarea",{ref:t,placeholder:"Enter you message",value:e.dialogsPage.newMessageText,onChange:function(t){e.changeMessageTextCallBack(t.currentTarget.value)}})}),Object(l.jsx)("button",{onClick:function(){var n,s;(null===(n=t.current)||void 0===n?void 0:n.value)&&e.addMessageCallBack(null===(s=t.current)||void 0===s?void 0:s.value)},children:"Add message"}),Object(l.jsxs)("div",{className:A.a.Dialogs,children:[Object(l.jsx)("div",{className:A.a.dialogs,children:e.dialogsPage.dialogs.map((function(e){return Object(l.jsx)(U,{id:e.id,name:e.name},e.id)}))}),Object(l.jsx)("div",{className:A.a.messages,children:e.dialogsPage.messages.map((function(e){return Object(l.jsx)(k,{id:e.id,message:e.message},e.id)}))})]})]}):Object(l.jsx)(d.a,{to:"/login"})},T=n(11),N=Object(T.b)((function(e){return{dialogsPage:e.DialogsPage,auth:e.auth}}),(function(e){return{addMessageCallBack:function(t){return e(function(e){return{type:h,messageText:e}}(t))},changeMessageTextCallBack:function(t){return e(function(e){return{type:p,newMessageText:e}}(t))}}}))(C),L=n(15),B=n(16),y=n(18),S=n(17),E=n(42),D=n.n(E).a.create({withCredentials:!0,headers:{"API-KEY":"9f222034-5f06-46a4-85f2-2be1a3f3b7d1"},baseURL:"https://social-network.samuraijs.com/api/1.0/"}),F=function(e){return D.get("/profile/"+e).then((function(e){return e.data}))},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return D.get("/users?count=".concat(e,"&page=").concat(t)).then((function(e){return e.data}))},M=function(e){return D.delete("follow/".concat(e)).then((function(e){return e.data}))},Q=function(e){return D.post("follow/".concat(e)).then((function(e){return e.data}))},_=function(){return D.get("auth/me").then((function(e){return e.data}))},R="FOLLOW",H="UNFOLLOW",G="SET-USERS",Y="SET-COUNT-PAGES",J="SET-TOTAL-USERS-COUNT",z="TOGGLE-PRELOAD",K="TOGGLE-DISABLED-BUTTON",Z={users:[],usersTotalCount:0,countUsersOnPage:5,currentPage:1,isLoad:!1,followingUser:[]},q=function(e){return{type:z,isLoad:e}},V=function(e,t){return{type:K,isFollowing:e,userId:t}},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R:return Object(O.a)(Object(O.a)({},e),{},{users:Object(b.a)(e.users.map((function(e){return e.id===t.userId?Object(O.a)(Object(O.a)({},e),{},{followed:!0}):e})))});case H:return Object(O.a)(Object(O.a)({},e),{},{users:Object(b.a)(e.users.map((function(e){return e.id===t.userId?Object(O.a)(Object(O.a)({},e),{},{followed:!1}):e})))});case G:return Object(O.a)(Object(O.a)({},e),{},{users:Object(b.a)(t.users)});case Y:return Object(O.a)(Object(O.a)({},e),{},{currentPage:t.page});case J:return Object(O.a)(Object(O.a)({},e),{},{usersTotalCount:t.totalCount});case z:return Object(O.a)(Object(O.a)({},e),{},{isLoad:t.isLoad});case K:return Object(O.a)(Object(O.a)({},e),{},{followingUser:t.isFollowing?[].concat(Object(b.a)(e.followingUser),[t.userId]):e.followingUser.filter((function(e){return e!==t.userId}))});default:return e}},X=n(21),$=n.n(X),ee=n.p+"static/media/user.475a1c02.png",te=n(43),ne=n.n(te),se=function(e){return Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{children:[e.pages.map((function(t){return Object(l.jsxs)("span",{className:e.currentPage===t?ne.a.currentPage:"",onClick:function(){e.onPageChanged(t)},children:[" ",t," "]},t)})).splice(0,5),Object(l.jsx)("button",{onClick:function(){},children:"next"})]}),e.users.map((function(t){return Object(l.jsxs)("div",{className:$.a.User,children:[Object(l.jsxs)("div",{className:$.a.userBlock,children:[Object(l.jsx)(r.b,{to:"/profile/".concat(t.id),children:Object(l.jsx)("img",{style:{width:"100px",height:"100px"},src:null!==t.photos.small?t.photos.small:ee})}),Object(l.jsx)("div",{children:t.followed?Object(l.jsx)("button",{disabled:e.followingUser.some((function(e){return e===t.id})),onClick:function(){e.unFollow(t.id)},children:"UNFOLLOW"}):Object(l.jsx)("button",{disabled:e.followingUser.some((function(e){return e===t.id})),onClick:function(){e.follow(t.id)},children:"FOLLOW"})})]}),Object(l.jsxs)("div",{className:$.a.userBlock,children:[Object(l.jsx)("div",{children:t.name}),Object(l.jsx)("div",{children:"u.mail"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:$.a.userBlock,children:"u.professionSphere.professionalArea"}),Object(l.jsx)("div",{children:"u.professionSphere.position"})]})]},t.id)}))]})},ie=n.p+"static/media/preloader.67b2533e.svg",ae=function(e){return Object(l.jsx)("div",{children:e.isLoad?Object(l.jsx)("img",{src:ie}):null})},re=function(e){Object(y.a)(n,e);var t=Object(S.a)(n);function n(){var e;Object(L.a)(this,n);for(var s=arguments.length,i=new Array(s),a=0;a<s;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).onPageChanged=function(t){e.props.getUser(e.props.countUsersOnPage,t)},e}return Object(B.a)(n,[{key:"componentDidMount",value:function(){this.props.getUser(this.props.countUsersOnPage,this.props.currentPage)}},{key:"render",value:function(){if(!this.props.auth.isLogin)return Object(l.jsx)(d.a,{to:"/login"});for(var e=[],t=Math.ceil(this.props.usersTotalCount/this.props.countUsersOnPage),n=1;n<=t;n++)e.push(n);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(ae,{isLoad:this.props.isLoad}),Object(l.jsx)(se,{pages:e,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unFollow:this.props.unFollow,toggleDisabledButton:this.props.toggleDisabledButton,followingUser:this.props.followingUser})]})}}]),n}(i.a.Component),ce=Object(T.b)((function(e){return{users:e.UsersPage.users,usersTotalCount:e.UsersPage.usersTotalCount,countUsersOnPage:e.UsersPage.countUsersOnPage,currentPage:e.UsersPage.currentPage,isLoad:e.UsersPage.isLoad,followingUser:e.UsersPage.followingUser,auth:e.auth}}),{toggleDisabledButton:V,getUser:function(e,t){return function(n){n(q(!0)),n({type:Y,page:t}),I(e,t).then((function(e){var t,s;n(q(!1)),n((t=e.items,{type:G,users:t})),n((s=e.totalCount,{type:J,totalCount:s}))}))}},unFollow:function(e){return function(t){t(V(!0,e)),M(e).then((function(n){0===n.resultCode&&t(function(e){return{type:H,userId:e}}(e)),t(V(!1,e))}))}},follow:function(e){return function(t){t(V(!0,e)),Q(e).then((function(n){0===n.resultCode&&t(function(e){return{type:R,userId:e}}(e)),t(V(!1,e))}))}}})(re),oe=n.p+"static/media/ava_women_1.72ef8f65.png",le=n.p+"static/media/ava_men_1.e5117e8e.jpg",ue=n.p+"static/media/ava_women_2.49d85a96.png",de="ADD-POST",je="CHANGE-POST-TEXT",ge="GET-USER-PROFILE",fe={posts:[{id:1,imgUrl:oe,message:"Hello!",likesCount:15},{id:2,imgUrl:le,message:"How are you?",likesCount:8},{id:3,imgUrl:ue,message:"I learn IT and i like this!",likesCount:149}],newPostText:"",profile:null},be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case de:return Object(O.a)(Object(O.a)({},e),{},{posts:[{id:4,imgUrl:oe,message:e.newPostText,likesCount:0}].concat(Object(b.a)(e.posts)),newPostText:""});case je:return Object(O.a)(Object(O.a)({},e),{},{newPostText:t.newPostText});case ge:return Object(O.a)(Object(O.a)({},e),{},{profile:t.profile});default:return e}},Oe=n(44),he=n.n(Oe),pe=n(22),me=n.n(pe),ve=n.p+"static/media/profileImg.2445b47c.jpg",xe=function(e){return e.profile?Object(l.jsxs)("div",{className:me.a.ProfileInfo,children:[Object(l.jsx)("div",{children:Object(l.jsx)("img",{src:e.profile.photos.large})}),Object(l.jsxs)("div",{className:me.a.info,children:[Object(l.jsx)("h4",{children:e.profile.fullName}),Object(l.jsx)("div",{children:e.profile.lookingForAJob?"Looking for a job":"No Looking for a job"}),Object(l.jsxs)("div",{children:["Facebook: ",null!==e.profile.contacts.facebook?e.profile.contacts.facebook:"without"]}),Object(l.jsxs)("div",{children:["VK: ",null!==e.profile.contacts.vk?e.profile.contacts.vk:"without"]})]})]}):Object(l.jsxs)("div",{className:me.a.ProfileInfo,children:[Object(l.jsx)("div",{children:Object(l.jsx)("img",{src:ve})}),Object(l.jsxs)("div",{className:me.a.info,children:[Object(l.jsx)("h4",{children:"Yuliya dovgun"}),Object(l.jsx)("div",{children:"Date of Birth: 14 april"}),Object(l.jsx)("div",{children:"City: Minsk"}),Object(l.jsx)("div",{children:"Education: BSU'18"})]})]})},Ae=n(45),we=n.n(Ae),Pe=n(46),Ue=n.n(Pe),ke=function(e){return Object(l.jsxs)("div",{className:Ue.a.item,children:[Object(l.jsx)("img",{src:e.imgUrl}),Object(l.jsx)("div",{children:e.message}),Object(l.jsxs)("div",{children:[e.likesCount,Object(l.jsx)("img",{style:{width:"14px",height:"14px"},src:"data:image/png;base64,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"})]})]})},Ce=function(e){var t=i.a.createRef();return Object(l.jsxs)("div",{className:we.a.Posts,children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{children:Object(l.jsx)("textarea",{ref:t,placeholder:"Tell about you progress today",value:e.profilePage.newPostText,onChange:function(t){e.changePostText(t.currentTarget.value)}})}),Object(l.jsx)("button",{onClick:function(){var n,s;(null===(n=t.current)||void 0===n?void 0:n.value)&&e.addPost(null===(s=t.current)||void 0===s?void 0:s.value)},children:"Add post"})]}),e.profilePage.posts.map((function(e){return Object(l.jsx)(ke,{id:e.id,imgUrl:e.imgUrl,message:e.message,likesCount:e.likesCount},e.id)}))]})},Te=Object(T.b)((function(e){return{profilePage:e.ProfilePage}}),(function(e){return{addPost:function(t){return e(function(e){return{type:de,postText:e}}(t))},changePostText:function(t){return e(function(e){return{type:je,newPostText:e}}(t))}}}))(Ce),Ne=function(e){return Object(l.jsxs)("div",{className:he.a.profile,children:[Object(l.jsx)(xe,{profile:e.profile}),Object(l.jsx)(Te,{})]})},Le=function(e){Object(y.a)(n,e);var t=Object(S.a)(n);function n(){return Object(L.a)(this,n),t.apply(this,arguments)}return Object(B.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;this.props.getUser(e)}},{key:"render",value:function(){return this.props.auth.isLogin?Object(l.jsx)(Ne,Object(O.a)({},this.props)):Object(l.jsx)(d.a,{to:"/login"})}}]),n}(i.a.Component),Be=Object(d.f)(Le),ye=Object(T.b)((function(e){return{profile:e.ProfilePage.profile,auth:e.auth}}),{getUser:function(e){return function(t){F(e).then((function(e){return t({type:ge,profile:e})}))}}})(Be),Se="SET-AUTH-USER-DATA",Ee={id:null,email:null,login:null,isLogin:!1},De=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Se:return Object(O.a)(Object(O.a)(Object(O.a)({},e),t.userData),{},{isLogin:!0});default:return e}},Fe=n(47),Ie=n.n(Fe),Me=function(e){return Object(l.jsxs)("header",{className:Ie.a.header,children:[Object(l.jsx)("img",{src:"https://cdn.iconscout.com/icon/free/png-256/internet-network-2238581-1923035.png"}),e.isLogin?e.login:Object(l.jsx)(r.b,{to:"/login",children:"Login"})]})},Qe=function(e){Object(y.a)(n,e);var t=Object(S.a)(n);function n(){return Object(L.a)(this,n),t.apply(this,arguments)}return Object(B.a)(n,[{key:"componentDidMount",value:function(){this.props.setUserData()}},{key:"render",value:function(){return Object(l.jsx)(Me,Object(O.a)({},this.props))}}]),n}(i.a.Component),_e=Object(T.b)((function(e){return{login:e.auth.login,isLogin:e.auth.isLogin}}),{setUserData:function(){return function(e){_().then((function(t){if(0===t.resultCode){var n=t.data,s=n.id,i=n.email,a=n.login;e(function(e,t,n){return{type:Se,userData:{userId:e,email:t,login:n}}}(s,i,a))}}))}}})(Qe),Re=function(){return Object(l.jsx)("div",{children:"Login"})};var He=function(e){return Object(l.jsx)(r.a,{children:Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(_e,{}),Object(l.jsx)(u,{}),Object(l.jsxs)("div",{className:"appWrapper",children:[Object(l.jsx)(d.b,{path:"/profile/:userId?",render:function(){return Object(l.jsx)(ye,{})}}),Object(l.jsx)(d.b,{path:"/people",render:function(){return Object(l.jsx)(ce,{})}}),Object(l.jsx)(d.b,{path:"/dialogs",render:function(){return Object(l.jsx)(N,{})}}),Object(l.jsx)(d.b,{path:"/news",render:function(){return Object(l.jsx)(j,{})}}),Object(l.jsx)(d.b,{path:"/music",render:function(){return Object(l.jsx)(g,{})}}),Object(l.jsx)(d.b,{path:"/settings",render:function(){return Object(l.jsx)(f,{})}}),Object(l.jsx)(d.b,{path:"/login",render:function(){return Object(l.jsx)(Re,{})}})]})]})})},Ge=n(25),Ye=n.n(Ge),Je=n(26),ze=n(48),Ke=Object(Je.b)({ProfilePage:be,UsersPage:W,DialogsPage:v,auth:De}),Ze=Object(Je.c)(Ke,Object(Je.a)(ze.a)),qe=Ze;window.store=Ze;var Ve=function(){Ye.a.render(Object(l.jsx)(r.a,{children:Object(l.jsx)(T.a,{store:qe,children:Object(l.jsx)(He,{})})}),document.getElementById("root"))};Ve(),qe.subscribe((function(){Ve()})),a()}},[[80,1,2]]]);
//# sourceMappingURL=main.0a350ba8.chunk.js.map
(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{128:function(e,t,n){e.exports={currentPage:"People_currentPage__Z-zw6"}},129:function(e,t,n){e.exports={header:"Header_header__33eUF"}},131:function(e,t,n){e.exports={dialogs:"Dialog_dialogs__2_0RP",active:"Dialog_active__2XuKM"}},132:function(e,t,n){e.exports={profile:"Profile_profile__e0KGN"}},133:function(e,t,n){e.exports={Posts:"Posts_Posts__32QPa"}},134:function(e,t,n){e.exports={item:"Post_item__2prg-"}},16:function(e,t,n){e.exports={navBar:"NavBar_navBar__2Ga15",item:"NavBar_item__2ApLd",active:"NavBar_active__2U95y"}},163:function(e,t,n){},164:function(e,t,n){},292:function(e,t,n){"use strict";n.r(t);var r=n(1),s=n.n(r),a=(n(163),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,293)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),r(e),s(e),a(e),o(e)}))}),o=(n(164),n(11)),c=n(16),i=n.n(c),u=n(0),l=function(){return Object(u.jsxs)("div",{className:i.a.navBar,children:[Object(u.jsx)("div",{className:i.a.item,children:Object(u.jsx)(o.b,{activeClassName:i.a.active,to:"/profile",children:"Profile"})}),Object(u.jsx)("div",{className:i.a.item,children:Object(u.jsx)(o.b,{activeClassName:i.a.active,to:"/people",children:"People"})}),Object(u.jsx)("div",{className:i.a.item,children:Object(u.jsx)(o.b,{activeClassName:i.a.active,to:"/dialogs",children:"Dialogs"})}),Object(u.jsx)("div",{className:i.a.item,children:Object(u.jsx)(o.b,{activeClassName:i.a.active,to:"/news",children:"News"})}),Object(u.jsx)("div",{className:i.a.item,children:Object(u.jsx)(o.b,{activeClassName:i.a.active,to:"/music",children:"Music"})}),Object(u.jsx)("div",{className:i.a.item,children:Object(u.jsx)(o.b,{activeClassName:i.a.active,to:"/settings",children:"Settings"})})]})},j=n(9),d=n(5),f=n(54),b=n(10),O=function(e){return{isLogin:e.auth.isLogin}};function p(e){return Object(b.b)(O)((function(t){var n=t.isLogin,r=Object(f.a)(t,["isLogin"]);return n?Object(u.jsx)(e,Object(d.a)({},r)):Object(u.jsx)(j.a,{to:"/login"})}))}var g=p(s.a.memo((function(){return Object(u.jsx)("div",{children:"News"})}))),m=p(s.a.memo((function(){return Object(u.jsx)("div",{children:"Music"})}))),h=p(s.a.memo((function(){return Object(u.jsx)("div",{children:"Settings"})}))),v=n(36),x=n(37),w=n(42),A=n(41),P=n(14),U=n.n(P),k=n(24),C=n(23),L=n(88),N=n.n(L).a.create({withCredentials:!0,headers:{"API-KEY":"fc2c077f-4801-47ba-97bc-ed7e7877df93"},baseURL:"https://social-network.samuraijs.com/api/1.0/"}),S=function(e){return N.get("/profile/"+e).then((function(e){return e.data}))},y=function(e){return N.get("/profile/status/"+e).then((function(e){return e.data}))},B=function(e){return N.put("/profile/status/",{status:e}).then((function(e){return e.data}))},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return N.get("/users?count=".concat(e,"&page=").concat(t)).then((function(e){return e.data}))},T={unFollow:function(e){return N.delete("follow/".concat(e)).then((function(e){return e.data}))},follow:function(e){return N.post("follow/".concat(e)).then((function(e){return e.data}))}},E=function(){return N.get("auth/me").then((function(e){return e.data}))},_=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return N.post("auth/login",{email:e,password:t,rememberMe:n}).then((function(e){return e.data}))},D=function(){return N.delete("auth/login").then((function(e){return e.data}))},I="user/FOLLOW",M="user/UNFOLLOW",Q="user/SET-USERS",R="user/SET-COUNT-PAGES",H="user/SET-TOTAL-USERS-COUNT",G="user/TOGGLE-PRELOAD",Y="user/TOGGLE-DISABLED-BUTTON",J={users:[],usersTotalCount:0,countUsersOnPage:5,currentPage:1,isLoad:!1,followingUser:[]},K=function(e){return{type:I,userId:e}},z=function(e){return{type:M,userId:e}},Z=function(e){return{type:G,isLoad:e}},V=function(e,t){return{type:Y,isFollowing:e,userId:t}},q=function(){var e=Object(k.a)(U.a.mark((function e(t,n,r,s){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(V(!0,n)),e.next=3,r(n);case 3:0===e.sent.resultCode&&t(s(n)),t(V(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,s){return e.apply(this,arguments)}}(),W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:return Object(d.a)(Object(d.a)({},e),{},{users:Object(C.a)(e.users.map((function(e){return e.id===t.userId?Object(d.a)(Object(d.a)({},e),{},{followed:!0}):e})))});case M:return Object(d.a)(Object(d.a)({},e),{},{users:Object(C.a)(e.users.map((function(e){return e.id===t.userId?Object(d.a)(Object(d.a)({},e),{},{followed:!1}):e})))});case Q:return Object(d.a)(Object(d.a)({},e),{},{users:Object(C.a)(t.users)});case R:return Object(d.a)(Object(d.a)({},e),{},{currentPage:t.page});case H:return Object(d.a)(Object(d.a)({},e),{},{usersTotalCount:t.totalCount});case G:return Object(d.a)(Object(d.a)({},e),{},{isLoad:t.isLoad});case Y:return Object(d.a)(Object(d.a)({},e),{},{followingUser:t.isFollowing?[].concat(Object(C.a)(e.followingUser),[t.userId]):e.followingUser.filter((function(e){return e!==t.userId}))});default:return e}},X=n(33),$=n.n(X),ee=n(53),te=n(128),ne=n.n(te),re=function(e){for(var t=[],n=Math.ceil(e.totalItemsCount/e.countUsersOnPage),s=1;s<=n;s++)t.push(s);var a=Math.ceil(n/10),o=Object(r.useState)(1),c=Object(ee.a)(o,2),i=c[0],l=c[1],j=10*(i-1)+1,d=10*i;return Object(u.jsxs)("div",{children:[i>1&&Object(u.jsx)("button",{onClick:function(){l(i-1)},children:"PREV"}),t.filter((function(e){return e>=j&&e<=d})).map((function(t){return Object(u.jsxs)("span",{className:e.currentPage===t?ne.a.currentPage:"",onClick:function(){e.onPageChanged(t)},children:[" ",t," "]},t)})),a>i&&Object(u.jsx)("button",{onClick:function(){l(i+1)},children:"NEXT"})]})},se=n.p+"static/media/user.475a1c02.png",ae=function(e){return Object(u.jsx)("div",{children:e.users.map((function(t){return Object(u.jsxs)("div",{className:$.a.User,children:[Object(u.jsxs)("div",{className:$.a.userBlock,children:[Object(u.jsx)(o.b,{to:"/profile/".concat(t.id),children:Object(u.jsx)("img",{style:{width:"100px",height:"100px"},src:null!==t.photos.small?t.photos.small:se})}),Object(u.jsx)("div",{children:t.followed?Object(u.jsx)("button",{disabled:e.followingUser.some((function(e){return e===t.id})),onClick:function(){e.unFollow(t.id)},children:"UNFOLLOW"}):Object(u.jsx)("button",{disabled:e.followingUser.some((function(e){return e===t.id})),onClick:function(){e.follow(t.id)},children:"FOLLOW"})})]}),Object(u.jsxs)("div",{className:$.a.userBlock,children:[Object(u.jsx)("div",{children:t.name}),Object(u.jsx)("div",{children:"u.mail"})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:$.a.userBlock,children:"u.professionSphere.professionalArea"}),Object(u.jsx)("div",{children:"u.professionSphere.position"})]})]})}))})},oe=s.a.memo((function(e){return Object(u.jsxs)("div",{children:[Object(u.jsx)(re,{totalItemsCount:e.totalItemsCount,countUsersOnPage:e.countUsersOnPage,currentPage:e.currentPage,onPageChanged:e.onPageChanged}),e.users.map((function(t){return Object(u.jsx)("div",{className:$.a.User,children:Object(u.jsx)(ae,{users:e.users,followingUser:e.followingUser,follow:e.follow,unFollow:e.unFollow},t.id)})}))]})})),ce=n.p+"static/media/preloader.67b2533e.svg",ie=s.a.memo((function(e){return Object(u.jsx)("div",{children:e.isLoad?Object(u.jsx)("img",{src:ce}):null})})),ue=n(8),le=n(136),je=Object(le.a)((function(e){return e.UsersPage.users}),(function(e){return e.filter((function(e){return!0}))})),de=function(e){return e.UsersPage.usersTotalCount},fe=function(e){return e.UsersPage.countUsersOnPage},be=function(e){return e.UsersPage.currentPage},Oe=function(e){return e.UsersPage.isLoad},pe=function(e){return e.UsersPage.followingUser},ge=function(e){Object(w.a)(n,e);var t=Object(A.a)(n);function n(){var e;Object(v.a)(this,n);for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).onPageChanged=function(t){e.props.getUser(e.props.countUsersOnPage,t)},e}return Object(x.a)(n,[{key:"componentDidMount",value:function(){this.props.getUser(this.props.countUsersOnPage,this.props.currentPage)}},{key:"render",value:function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(ie,{isLoad:this.props.isLoad}),Object(u.jsx)(oe,{currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unFollow:this.props.unFollow,toggleDisabledButton:this.props.toggleDisabledButton,followingUser:this.props.followingUser,totalItemsCount:this.props.usersTotalCount,countUsersOnPage:this.props.countUsersOnPage})]})}}]),n}(s.a.Component),me=Object(ue.d)(Object(b.b)((function(e){return{users:je(e),usersTotalCount:de(e),countUsersOnPage:fe(e),currentPage:be(e),isLoad:Oe(e),followingUser:pe(e)}}),{toggleDisabledButton:V,getUser:function(e,t){return function(){var n=Object(k.a)(U.a.mark((function n(r){var s;return U.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(Z(!0)),r({type:R,page:t}),n.next=4,F(e,t);case 4:s=n.sent,r(Z(!1)),r((o=s.items,{type:Q,users:o})),r((a=s.totalCount,{type:H,totalCount:a}));case 8:case"end":return n.stop()}var a,o}),n)})));return function(e){return n.apply(this,arguments)}}()},unFollow:function(e){return function(){var t=Object(k.a)(U.a.mark((function t(n){return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:q(n,e,T.unFollow.bind(T),z);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},follow:function(e){return function(){var t=Object(k.a)(U.a.mark((function t(n){return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:q(n,e,T.follow.bind(T),K);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}),p)(ge),he=n(35),ve="auth/SET-AUTH-USER-DATA",xe={id:void 0,email:null,password:null,isLogin:!1},we=function(e,t,n,r){return{type:ve,payload:{userId:e,email:t,login:n,isLogin:r}}},Ae=function(){return function(e){E().then((function(t){if(0===t.resultCode){var n=t.data,r=n.id,s=n.email,a=n.password;e(we(r,s,a,!0))}}))}},Pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ve:return Object(d.a)(Object(d.a)({},e),t.payload);default:return e}},Ue=n(129),ke=n.n(Ue),Ce=function(e){return Object(u.jsxs)("header",{className:ke.a.header,children:[Object(u.jsx)("img",{src:"https://cdn.iconscout.com/icon/free/png-256/internet-network-2238581-1923035.png"}),e.isLogin?Object(u.jsxs)("div",{children:[e.login," ",Object(u.jsx)("button",{onClick:e.logout,children:"LogOut"})]}):Object(u.jsx)(o.b,{to:"/login",children:"Login"})]})},Le=function(e){Object(w.a)(n,e);var t=Object(A.a)(n);function n(){return Object(v.a)(this,n),t.apply(this,arguments)}return Object(x.a)(n,[{key:"componentDidMount",value:function(){this.props.setUserData()}},{key:"render",value:function(){return Object(u.jsx)(Ce,Object(d.a)({},this.props))}}]),n}(s.a.Component),Ne=Object(ue.d)(Object(b.b)((function(e){return{login:e.auth.password,isLogin:e.auth.isLogin}}),{setUserData:Ae,logout:function(){return function(e){D().then((function(t){0===t.resultCode&&e(we(void 0,null,null,!1))}))}}}))(Le),Se=n(90),ye=n.n(Se),Be=n(123),Fe=n(124),Te=n(55),Ee=n.n(Te),_e=function(e){var t=e.input,n=e.meta,r=Object(f.a)(e,["input","meta"]),s=n.touched&&n.error;return Object(u.jsxs)("div",{className:s?Ee.a.validatorForm+" "+Ee.a.error:" ",children:[Object(u.jsx)("textarea",Object(d.a)(Object(d.a)({},t),r)),s&&Object(u.jsx)("span",{children:n.error})]})},De=function(e){var t=e.input,n=e.meta,r=Object(f.a)(e,["input","meta"]),s=n.touched&&n.error;return Object(u.jsxs)("div",{className:s?Ee.a.validatorForm+" "+Ee.a.error:" ",children:[Object(u.jsx)("input",Object(d.a)(Object(d.a)({},t),r)),s&&Object(u.jsx)("span",{children:n.error})]})},Ie=function(e){if(!e)return"Field is required"},Me=function(e){return function(t){if(t.length>e)return"Error! Max count of symbol is ".concat(e)}},Qe=Me(30),Re=Me(20),He=Object(Fe.a)({form:"login"})((function(e){return Object(u.jsxs)("form",{className:ye.a.form,onSubmit:e.handleSubmit,children:[Object(u.jsx)(Be.a,{component:De,validate:[Ie,Qe],type:"text",placeholder:"email",name:"email"}),Object(u.jsx)(Be.a,{component:De,validate:[Ie,Re],type:"password",placeholder:"password",name:"password"}),Object(u.jsxs)("div",{children:[Object(u.jsx)(Be.a,{component:"input",type:"checkbox",name:"rememberMe"}),Object(u.jsx)("span",{children:"remember me"})]}),e.error&&Object(u.jsx)("div",{className:ye.a.error,children:e.error}),Object(u.jsx)("button",{children:"SignIn"})]})})),Ge=s.a.memo((function(e){return e.isLogin?Object(u.jsx)(j.a,{to:"/profile"}):Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{children:"Login"}),Object(u.jsx)(He,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}})]})})),Ye=Object(b.b)((function(e){return{isLogin:e.auth.isLogin}}),{login:function(e,t,n){return function(r){_(e,t,n).then((function(e){if(0===e.resultCode)r(Ae());else{var t=e.messages.length>1?e.messages[1]:"some error";r(Object(he.a)("login",{_error:t}))}}))}}})(Ge),Je="message/ADD-MESSAGE",Ke={dialogs:[{id:1,name:"Lena"},{id:2,name:"Vika"},{id:3,name:"Natasha"},{id:4,name:"Sveta"},{id:5,name:"Yuliya"}],messages:[{id:1,message:"Hello!"},{id:2,message:"How are you?"},{id:3,message:"Yo-yo"}]},ze=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Je:return Object(d.a)(Object(d.a)({},e),{},{messages:[{id:1,message:t.messageText}].concat(Object(C.a)(e.messages))});default:return e}},Ze=n(43),Ve=n.n(Ze),qe=n(131),We=n.n(qe),Xe=function(e){return Object(u.jsx)("div",{className:We.a.active,children:Object(u.jsx)(o.b,{to:"/dialogs/"+e.id,children:e.name})})},$e=function(e){return Object(u.jsx)("div",{className:Ve.a.message,children:e.message})},et=Me(300),tt=Object(Fe.a)({form:"message"})((function(e){return Object(u.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(u.jsx)(Be.a,{component:_e,validate:[Ie,et],placeholder:"Enter you message",name:"message"}),Object(u.jsx)("button",{children:"Add message"})]})})),nt=s.a.memo((function(e){return Object(u.jsxs)("div",{children:[Object(u.jsx)(tt,{onSubmit:function(t){t.message&&e.addMessageCallBack(t.message)}}),Object(u.jsxs)("div",{className:Ve.a.Dialogs,children:[Object(u.jsx)("div",{className:Ve.a.dialogs,children:e.dialogsPage.dialogs.map((function(e){return Object(u.jsx)(Xe,{id:e.id,name:e.name},e.id)}))}),Object(u.jsx)("div",{className:Ve.a.messages,children:e.dialogsPage.messages.map((function(e){return Object(u.jsx)($e,{id:e.id,message:e.message},e.id)}))})]})]})})),rt=Object(ue.d)(Object(b.b)((function(e){return{dialogsPage:e.DialogsPage}}),{addMessageCallBack:function(e){return{type:Je,messageText:e}}}),p)(nt),st=n.p+"static/media/ava_women_1.72ef8f65.png",at=n.p+"static/media/ava_men_1.e5117e8e.jpg",ot=n.p+"static/media/ava_women_2.49d85a96.png",ct="post/ADD-POST",it="post/GET-USER-PROFILE",ut="post/GET-STATUS",lt={posts:[{id:1,imgUrl:st,message:"Hello!",likesCount:15},{id:2,imgUrl:at,message:"How are you?",likesCount:8},{id:3,imgUrl:ot,message:"I learn IT and i like this!",likesCount:149}],profile:null,status:""},jt=function(e){return{type:ut,status:e}},dt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:lt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ct:return Object(d.a)(Object(d.a)({},e),{},{posts:[{id:4,imgUrl:st,message:t.postText,likesCount:0}].concat(Object(C.a)(e.posts))});case it:return Object(d.a)(Object(d.a)({},e),{},{profile:t.profile});case ut:return Object(d.a)(Object(d.a)({},e),{},{status:t.status});default:return e}},ft=n(132),bt=n.n(ft),Ot=n(93),pt=n.n(Ot),gt=function(e){Object(r.useEffect)((function(){l(e.status)}),[e.status]);var t=Object(r.useState)(!1),n=Object(ee.a)(t,2),s=n[0],a=n[1],o=Object(r.useState)(e.status),c=Object(ee.a)(o,2),i=c[0],l=c[1];return Object(u.jsxs)("div",{children:[!s&&Object(u.jsx)("span",{onDoubleClick:function(){a(!0)},children:i||"---"}),s&&Object(u.jsx)("input",{autoFocus:!0,onChange:function(e){l(e.currentTarget.value)},onBlur:function(){a(!1),e.updateStatus(i)},value:i})]})},mt=s.a.memo((function(e){return e.profile?Object(u.jsxs)("div",{className:pt.a.ProfileInfo,children:[Object(u.jsx)("div",{children:Object(u.jsx)("img",{src:e.profile.photos.large})}),Object(u.jsx)(gt,Object(d.a)({},e)),Object(u.jsxs)("div",{className:pt.a.info,children:[Object(u.jsx)("h4",{children:e.profile.fullName}),Object(u.jsx)("div",{children:e.profile.lookingForAJob?"Looking for a job":"No Looking for a job"}),Object(u.jsxs)("div",{children:["Facebook: ",null!==e.profile.contacts.facebook?e.profile.contacts.facebook:"without"]}),Object(u.jsxs)("div",{children:["VK: ",null!==e.profile.contacts.vk?e.profile.contacts.vk:"without"]})]})]}):Object(u.jsx)(ie,{isLoad:!0})})),ht=n(133),vt=n.n(ht),xt=n(134),wt=n.n(xt),At=function(e){return Object(u.jsxs)("div",{className:wt.a.item,children:[Object(u.jsx)("img",{src:e.imgUrl}),Object(u.jsx)("div",{children:e.message}),Object(u.jsxs)("div",{children:[e.likesCount,Object(u.jsx)("img",{style:{width:"14px",height:"14px"},src:"data:image/png;base64,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"})]})]})},Pt=Me(800),Ut=Object(Fe.a)({form:"posts"})((function(e){return Object(u.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(u.jsx)("div",{children:Object(u.jsx)(Be.a,{component:_e,validate:[Ie,Pt],placeholder:"Tell about you progress today",name:"post"})}),Object(u.jsx)("button",{children:"Add post"})]})})),kt=s.a.memo((function(e){return Object(u.jsxs)("div",{className:vt.a.Posts,children:[Object(u.jsx)(Ut,{onSubmit:function(t){t.post&&e.addPost(t.post)}}),e.profilePage.posts.map((function(e){return Object(u.jsx)(At,{id:e.id,imgUrl:e.imgUrl,message:e.message,likesCount:e.likesCount},e.id)}))]})})),Ct=Object(b.b)((function(e){return{profilePage:e.ProfilePage}}),(function(e){return{addPost:function(t){return e(function(e){return{type:ct,postText:e}}(t))}}}))(kt),Lt=function(e){return Object(u.jsxs)("div",{className:bt.a.profile,children:[Object(u.jsx)(mt,Object(d.a)({},e)),Object(u.jsx)(Ct,{})]})},Nt=function(e){Object(w.a)(n,e);var t=Object(A.a)(n);function n(){return Object(v.a)(this,n),t.apply(this,arguments)}return Object(x.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e="19471"),this.props.getUser(e),this.props.getStatus(e)}},{key:"render",value:function(){return Object(u.jsx)(Lt,Object(d.a)({},this.props))}}]),n}(s.a.Component),St=Object(ue.d)(Object(b.b)((function(e){return{profile:e.ProfilePage.profile,status:e.ProfilePage.status,isLogin:e.auth.isLogin,userId:e.auth.id}}),{getUser:function(e){return function(){var t=Object(k.a)(U.a.mark((function t(n){var r;return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S(e);case 2:r=t.sent,n({type:it,profile:r});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getStatus:function(e){return function(){var t=Object(k.a)(U.a.mark((function t(n){var r;return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y(e);case 2:r=t.sent,n(jt(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateStatus:function(e){return function(){var t=Object(k.a)(U.a.mark((function t(n){var r;return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,B(e);case 2:0===(r=t.sent).data.resultCode&&n(jt(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}),p,j.f)(Nt);var yt=function(){return Object(u.jsx)(o.a,{children:Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(Ne,{}),Object(u.jsx)(l,{}),Object(u.jsxs)("div",{className:"appWrapper",children:[Object(u.jsx)(j.b,{path:"/profile/:userId?",render:function(){return Object(u.jsx)(St,{})}}),Object(u.jsx)(j.b,{path:"/people",render:function(){return Object(u.jsx)(me,{})}}),Object(u.jsx)(j.b,{path:"/dialogs",render:function(){return Object(u.jsx)(rt,{})}}),Object(u.jsx)(j.b,{path:"/news",render:function(){return Object(u.jsx)(g,{})}}),Object(u.jsx)(j.b,{path:"/music",render:function(){return Object(u.jsx)(m,{})}}),Object(u.jsx)(j.b,{path:"/settings",render:function(){return Object(u.jsx)(h,{})}}),Object(u.jsx)(j.b,{path:"/login",render:function(){return Object(u.jsx)(Ye,{})}})]})]})})},Bt=n(67),Ft=n.n(Bt),Tt=n(135),Et=n(125),_t=Object(ue.c)({ProfilePage:dt,UsersPage:W,DialogsPage:ze,auth:Pe,form:Et.a}),Dt=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ue.d,It=Object(ue.e)(_t,Dt(Object(ue.a)(Tt.a))),Mt=It;window.store=It,Ft.a.render(Object(u.jsx)(o.a,{children:Object(u.jsx)(b.a,{store:Mt,children:Object(u.jsx)(yt,{})})}),document.getElementById("root")),a()},33:function(e,t,n){e.exports={User:"User_User__Sdyjm",userBlock:"User_userBlock__1fkjB"}},43:function(e,t,n){e.exports={Dialogs:"Dialogs_Dialogs__3R31f"}},55:function(e,t,n){e.exports={validatorForm:"Form_validatorForm__1KBmO",error:"Form_error__2cIC1"}},90:function(e,t,n){e.exports={form:"LoginForm_form__1Jm9m",error:"LoginForm_error__2sn3o"}},93:function(e,t,n){e.exports={ProfileInfo:"ProfileInfo_ProfileInfo__3PU0K",info:"ProfileInfo_info__28-aN"}}},[[292,1,2]]]);
//# sourceMappingURL=main.f1d2673b.chunk.js.map
(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{20:function(e,t,n){e.exports={Dialogs:"Dialogs_Dialogs__3R31f"}},22:function(e,t,n){e.exports={User:"User_User__Sdyjm",userBlock:"User_userBlock__1fkjB"}},23:function(e,t,n){e.exports={ProfileInfo:"ProfileInfo_ProfileInfo__3PU0K",info:"ProfileInfo_info__28-aN"}},42:function(e,t,n){e.exports={currentPage:"People_currentPage__Z-zw6"}},43:function(e,t,n){e.exports={header:"Header_header__33eUF"}},44:function(e,t,n){e.exports={dialogs:"Dialog_dialogs__2_0RP",active:"Dialog_active__2XuKM"}},45:function(e,t,n){e.exports={profile:"Profile_profile__e0KGN"}},46:function(e,t,n){e.exports={Posts:"Posts_Posts__32QPa"}},47:function(e,t,n){e.exports={item:"Post_item__2prg-"}},51:function(e,t,n){},52:function(e,t,n){},8:function(e,t,n){e.exports={navBar:"NavBar_navBar__2Ga15",item:"NavBar_item__2ApLd",active:"NavBar_active__2U95y"}},81:function(e,t,n){"use strict";n.r(t),n.d(t,"renderEntireTree",(function(){return $e}));var s=n(1),i=n.n(s),a=(n(51),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,82)).then((function(t){var n=t.getCLS,s=t.getFID,i=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),s(e),i(e),a(e),c(e)}))}),c=(n(52),n(4)),r=n(8),o=n.n(r),l=n(0),u=function(){return Object(l.jsxs)("div",{className:o.a.navBar,children:[Object(l.jsx)("div",{className:o.a.item,children:Object(l.jsx)(c.b,{activeClassName:o.a.active,to:"/profile",children:"Profile"})}),Object(l.jsx)("div",{className:o.a.item,children:Object(l.jsx)(c.b,{activeClassName:o.a.active,to:"/people",children:"People"})}),Object(l.jsx)("div",{className:o.a.item,children:Object(l.jsx)(c.b,{activeClassName:o.a.active,to:"/dialogs",children:"Dialogs"})}),Object(l.jsx)("div",{className:o.a.item,children:Object(l.jsx)(c.b,{activeClassName:o.a.active,to:"/news",children:"News"})}),Object(l.jsx)("div",{className:o.a.item,children:Object(l.jsx)(c.b,{activeClassName:o.a.active,to:"/music",children:"Music"})}),Object(l.jsx)("div",{className:o.a.item,children:Object(l.jsx)(c.b,{activeClassName:o.a.active,to:"/settings",children:"Settings"})})]})},d=n(3),j=n(2),b=n(49),f=n(6),g=function(e){return{isLogin:e.auth.isLogin}};function O(e){return Object(f.b)(g)((function(t){var n=t.isLogin,s=Object(b.a)(t,["isLogin"]);return n?Object(l.jsx)(e,Object(j.a)({},s)):Object(l.jsx)(d.a,{to:"/login"})}))}var h=O((function(){return Object(l.jsx)("div",{children:"News"})})),p=O((function(){return Object(l.jsx)("div",{children:"Music"})})),v=O((function(){return Object(l.jsx)("div",{children:"Settings"})})),m=n(14),x=n(15),A=n(17),w=n(16),P=n(13),U=n(41),k=n.n(U).a.create({withCredentials:!0,headers:{"API-KEY":"9f222034-5f06-46a4-85f2-2be1a3f3b7d1"},baseURL:"https://social-network.samuraijs.com/api/1.0/"}),C=function(e){return k.get("/profile/"+e).then((function(e){return e.data}))},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return k.get("/users?count=".concat(e,"&page=").concat(t)).then((function(e){return e.data}))},N=function(e){return k.delete("follow/".concat(e)).then((function(e){return e.data}))},L=function(e){return k.post("follow/".concat(e)).then((function(e){return e.data}))},B=function(){return k.get("auth/me").then((function(e){return e.data}))},y="FOLLOW",S="UNFOLLOW",E="SET-USERS",D="SET-COUNT-PAGES",M="SET-TOTAL-USERS-COUNT",F="TOGGLE-PRELOAD",I="TOGGLE-DISABLED-BUTTON",Q={users:[],usersTotalCount:0,countUsersOnPage:5,currentPage:1,isLoad:!1,followingUser:[]},_=function(e){return{type:F,isLoad:e}},R=function(e,t){return{type:I,isFollowing:e,userId:t}},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return Object(j.a)(Object(j.a)({},e),{},{users:Object(P.a)(e.users.map((function(e){return e.id===t.userId?Object(j.a)(Object(j.a)({},e),{},{followed:!0}):e})))});case S:return Object(j.a)(Object(j.a)({},e),{},{users:Object(P.a)(e.users.map((function(e){return e.id===t.userId?Object(j.a)(Object(j.a)({},e),{},{followed:!1}):e})))});case E:return Object(j.a)(Object(j.a)({},e),{},{users:Object(P.a)(t.users)});case D:return Object(j.a)(Object(j.a)({},e),{},{currentPage:t.page});case M:return Object(j.a)(Object(j.a)({},e),{},{usersTotalCount:t.totalCount});case F:return Object(j.a)(Object(j.a)({},e),{},{isLoad:t.isLoad});case I:return Object(j.a)(Object(j.a)({},e),{},{followingUser:t.isFollowing?[].concat(Object(P.a)(e.followingUser),[t.userId]):e.followingUser.filter((function(e){return e!==t.userId}))});default:return e}},G=n(22),Y=n.n(G),J=n.p+"static/media/user.475a1c02.png",z=n(42),K=n.n(z),Z=function(e){return Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{children:[e.pages.map((function(t){return Object(l.jsxs)("span",{className:e.currentPage===t?K.a.currentPage:"",onClick:function(){e.onPageChanged(t)},children:[" ",t," "]},t)})).splice(0,5),Object(l.jsx)("button",{onClick:function(){},children:"next"})]}),e.users.map((function(t){return Object(l.jsxs)("div",{className:Y.a.User,children:[Object(l.jsxs)("div",{className:Y.a.userBlock,children:[Object(l.jsx)(c.b,{to:"/profile/".concat(t.id),children:Object(l.jsx)("img",{style:{width:"100px",height:"100px"},src:null!==t.photos.small?t.photos.small:J})}),Object(l.jsx)("div",{children:t.followed?Object(l.jsx)("button",{disabled:e.followingUser.some((function(e){return e===t.id})),onClick:function(){e.unFollow(t.id)},children:"UNFOLLOW"}):Object(l.jsx)("button",{disabled:e.followingUser.some((function(e){return e===t.id})),onClick:function(){e.follow(t.id)},children:"FOLLOW"})})]}),Object(l.jsxs)("div",{className:Y.a.userBlock,children:[Object(l.jsx)("div",{children:t.name}),Object(l.jsx)("div",{children:"u.mail"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:Y.a.userBlock,children:"u.professionSphere.professionalArea"}),Object(l.jsx)("div",{children:"u.professionSphere.position"})]})]},t.id)}))]})},q=n.p+"static/media/preloader.67b2533e.svg",V=function(e){return Object(l.jsx)("div",{children:e.isLoad?Object(l.jsx)("img",{src:q}):null})},W=n(12),X=function(e){Object(A.a)(n,e);var t=Object(w.a)(n);function n(){var e;Object(m.a)(this,n);for(var s=arguments.length,i=new Array(s),a=0;a<s;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).onPageChanged=function(t){e.props.getUser(e.props.countUsersOnPage,t)},e}return Object(x.a)(n,[{key:"componentDidMount",value:function(){this.props.getUser(this.props.countUsersOnPage,this.props.currentPage)}},{key:"render",value:function(){for(var e=[],t=Math.ceil(this.props.usersTotalCount/this.props.countUsersOnPage),n=1;n<=t;n++)e.push(n);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(V,{isLoad:this.props.isLoad}),Object(l.jsx)(Z,{pages:e,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unFollow:this.props.unFollow,toggleDisabledButton:this.props.toggleDisabledButton,followingUser:this.props.followingUser})]})}}]),n}(i.a.Component),$=Object(W.c)(Object(f.b)((function(e){return{users:e.UsersPage.users,usersTotalCount:e.UsersPage.usersTotalCount,countUsersOnPage:e.UsersPage.countUsersOnPage,currentPage:e.UsersPage.currentPage,isLoad:e.UsersPage.isLoad,followingUser:e.UsersPage.followingUser}}),{toggleDisabledButton:R,getUser:function(e,t){return function(n){n(_(!0)),n({type:D,page:t}),T(e,t).then((function(e){var t,s;n(_(!1)),n((t=e.items,{type:E,users:t})),n((s=e.totalCount,{type:M,totalCount:s}))}))}},unFollow:function(e){return function(t){t(R(!0,e)),N(e).then((function(n){0===n.resultCode&&t(function(e){return{type:S,userId:e}}(e)),t(R(!1,e))}))}},follow:function(e){return function(t){t(R(!0,e)),L(e).then((function(n){0===n.resultCode&&t(function(e){return{type:y,userId:e}}(e)),t(R(!1,e))}))}}}),O)(X),ee="SET-AUTH-USER-DATA",te={id:null,email:null,login:null,isLogin:!1},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ee:return Object(j.a)(Object(j.a)(Object(j.a)({},e),t.userData),{},{isLogin:!0});default:return e}},se=n(43),ie=n.n(se),ae=function(e){return Object(l.jsxs)("header",{className:ie.a.header,children:[Object(l.jsx)("img",{src:"https://cdn.iconscout.com/icon/free/png-256/internet-network-2238581-1923035.png"}),e.isLogin?e.login:Object(l.jsx)(c.b,{to:"/login",children:"Login"})]})},ce=function(e){Object(A.a)(n,e);var t=Object(w.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(x.a)(n,[{key:"componentDidMount",value:function(){this.props.setUserData()}},{key:"render",value:function(){return Object(l.jsx)(ae,Object(j.a)({},this.props))}}]),n}(i.a.Component),re=Object(W.c)(Object(f.b)((function(e){return{login:e.auth.login,isLogin:e.auth.isLogin}}),{setUserData:function(){return function(e){B().then((function(t){if(0===t.resultCode){var n=t.data,s=n.id,i=n.email,a=n.login;e(function(e,t,n){return{type:ee,userData:{userId:e,email:t,login:n}}}(s,i,a))}}))}}}))(ce),oe=function(){return Object(l.jsx)("div",{children:"Login"})},le="ADD-MESSAGE",ue="CHANGE-MESSAGE-TEXT",de={dialogs:[{id:1,name:"Lena"},{id:2,name:"Vika"},{id:3,name:"Natasha"},{id:4,name:"Sveta"},{id:5,name:"Yuliya"}],messages:[{id:1,message:"Hello!"},{id:2,message:"How are you?"},{id:3,message:"Yo-yo"}],newMessageText:""},je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case le:return Object(j.a)(Object(j.a)({},e),{},{messages:[{id:1,message:e.newMessageText}].concat(Object(P.a)(e.messages)),newMessageText:""});case ue:return Object(j.a)(Object(j.a)({},e),{},{newMessageText:t.newMessageText});default:return e}},be=n(20),fe=n.n(be),ge=n(44),Oe=n.n(ge),he=function(e){return Object(l.jsx)("div",{className:Oe.a.active,children:Object(l.jsx)(c.b,{to:"/dialogs/"+e.id,children:e.name})})},pe=function(e){return Object(l.jsx)("div",{className:fe.a.message,children:e.message})},ve=function(e){var t=i.a.createRef();return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{children:Object(l.jsx)("textarea",{ref:t,placeholder:"Enter you message",value:e.dialogsPage.newMessageText,onChange:function(t){e.changeMessageTextCallBack(t.currentTarget.value)}})}),Object(l.jsx)("button",{onClick:function(){var n,s;(null===(n=t.current)||void 0===n?void 0:n.value)&&e.addMessageCallBack(null===(s=t.current)||void 0===s?void 0:s.value)},children:"Add message"}),Object(l.jsxs)("div",{className:fe.a.Dialogs,children:[Object(l.jsx)("div",{className:fe.a.dialogs,children:e.dialogsPage.dialogs.map((function(e){return Object(l.jsx)(he,{id:e.id,name:e.name},e.id)}))}),Object(l.jsx)("div",{className:fe.a.messages,children:e.dialogsPage.messages.map((function(e){return Object(l.jsx)(pe,{id:e.id,message:e.message},e.id)}))})]})]})},me=Object(W.c)(Object(f.b)((function(e){return{dialogsPage:e.DialogsPage}}),{addMessageCallBack:function(e){return{type:le,messageText:e}},changeMessageTextCallBack:function(e){return{type:ue,newMessageText:e}}}),O)(ve),xe=n.p+"static/media/ava_women_1.72ef8f65.png",Ae=n.p+"static/media/ava_men_1.e5117e8e.jpg",we=n.p+"static/media/ava_women_2.49d85a96.png",Pe="ADD-POST",Ue="CHANGE-POST-TEXT",ke="GET-USER-PROFILE",Ce={posts:[{id:1,imgUrl:xe,message:"Hello!",likesCount:15},{id:2,imgUrl:Ae,message:"How are you?",likesCount:8},{id:3,imgUrl:we,message:"I learn IT and i like this!",likesCount:149}],newPostText:"",profile:null},Te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Pe:return Object(j.a)(Object(j.a)({},e),{},{posts:[{id:4,imgUrl:xe,message:e.newPostText,likesCount:0}].concat(Object(P.a)(e.posts)),newPostText:""});case Ue:return Object(j.a)(Object(j.a)({},e),{},{newPostText:t.newPostText});case ke:return Object(j.a)(Object(j.a)({},e),{},{profile:t.profile});default:return e}},Ne=n(45),Le=n.n(Ne),Be=n(23),ye=n.n(Be),Se=n.p+"static/media/profileImg.2445b47c.jpg",Ee=function(e){Object(A.a)(n,e);var t=Object(w.a)(n);function n(){var e;Object(m.a)(this,n);for(var s=arguments.length,i=new Array(s),a=0;a<s;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).state={editMode:!1},e}return Object(x.a)(n,[{key:"activatedEditMode",value:function(){this.setState({editMode:!0})}},{key:"deActivatedEditMode",value:function(){this.setState({editMode:!1})}},{key:"render",value:function(){return Object(l.jsxs)("div",{children:[!this.state.editMode&&Object(l.jsx)("span",{onDoubleClick:this.activatedEditMode.bind(this),children:"SomeStatus"}),this.state.editMode&&Object(l.jsx)("input",{autoFocus:!0,onBlur:this.deActivatedEditMode.bind(this),value:"SomeStatus"})]})}}]),n}(i.a.Component),De=function(e){return e.profile?Object(l.jsxs)("div",{className:ye.a.ProfileInfo,children:[Object(l.jsx)("div",{children:Object(l.jsx)("img",{src:e.profile.photos.large})}),Object(l.jsx)(Ee,{}),Object(l.jsxs)("div",{className:ye.a.info,children:[Object(l.jsx)("h4",{children:e.profile.fullName}),Object(l.jsx)("div",{children:e.profile.lookingForAJob?"Looking for a job":"No Looking for a job"}),Object(l.jsxs)("div",{children:["Facebook: ",null!==e.profile.contacts.facebook?e.profile.contacts.facebook:"without"]}),Object(l.jsxs)("div",{children:["VK: ",null!==e.profile.contacts.vk?e.profile.contacts.vk:"without"]})]})]}):Object(l.jsxs)("div",{className:ye.a.ProfileInfo,children:[Object(l.jsx)("div",{children:Object(l.jsx)("img",{src:Se})}),Object(l.jsx)(Ee,{}),Object(l.jsxs)("div",{className:ye.a.info,children:[Object(l.jsx)("h4",{children:"Yuliya dovgun"}),Object(l.jsx)("div",{children:"Date of Birth: 14 april"}),Object(l.jsx)("div",{children:"City: Minsk"}),Object(l.jsx)("div",{children:"Education: BSU'18"})]})]})},Me=n(46),Fe=n.n(Me),Ie=n(47),Qe=n.n(Ie),_e=function(e){return Object(l.jsxs)("div",{className:Qe.a.item,children:[Object(l.jsx)("img",{src:e.imgUrl}),Object(l.jsx)("div",{children:e.message}),Object(l.jsxs)("div",{children:[e.likesCount,Object(l.jsx)("img",{style:{width:"14px",height:"14px"},src:"data:image/png;base64,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"})]})]})},Re=function(e){var t=i.a.createRef();return Object(l.jsxs)("div",{className:Fe.a.Posts,children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{children:Object(l.jsx)("textarea",{ref:t,placeholder:"Tell about you progress today",value:e.profilePage.newPostText,onChange:function(t){e.changePostText(t.currentTarget.value)}})}),Object(l.jsx)("button",{onClick:function(){var n,s;(null===(n=t.current)||void 0===n?void 0:n.value)&&e.addPost(null===(s=t.current)||void 0===s?void 0:s.value)},children:"Add post"})]}),e.profilePage.posts.map((function(e){return Object(l.jsx)(_e,{id:e.id,imgUrl:e.imgUrl,message:e.message,likesCount:e.likesCount},e.id)}))]})},He=Object(f.b)((function(e){return{profilePage:e.ProfilePage}}),(function(e){return{addPost:function(t){return e(function(e){return{type:Pe,postText:e}}(t))},changePostText:function(t){return e(function(e){return{type:Ue,newPostText:e}}(t))}}}))(Re),Ge=function(e){return Object(l.jsxs)("div",{className:Le.a.profile,children:[Object(l.jsx)(De,{profile:e.profile}),Object(l.jsx)(He,{})]})},Ye=function(e){Object(A.a)(n,e);var t=Object(w.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(x.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;this.props.getUser(e)}},{key:"render",value:function(){return Object(l.jsx)(Ge,Object(j.a)({},this.props))}}]),n}(i.a.Component),Je=Object(W.c)(Object(f.b)((function(e){return{profile:e.ProfilePage.profile}}),{getUser:function(e){return function(t){C(e).then((function(e){return t({type:ke,profile:e})}))}}}),O,d.f)(Ye);var ze=function(e){return Object(l.jsx)(c.a,{children:Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(re,{}),Object(l.jsx)(u,{}),Object(l.jsxs)("div",{className:"appWrapper",children:[Object(l.jsx)(d.b,{path:"/profile/:userId?",render:function(){return Object(l.jsx)(Je,{})}}),Object(l.jsx)(d.b,{path:"/people",render:function(){return Object(l.jsx)($,{})}}),Object(l.jsx)(d.b,{path:"/dialogs",render:function(){return Object(l.jsx)(me,{})}}),Object(l.jsx)(d.b,{path:"/news",render:function(){return Object(l.jsx)(h,{})}}),Object(l.jsx)(d.b,{path:"/music",render:function(){return Object(l.jsx)(p,{})}}),Object(l.jsx)(d.b,{path:"/settings",render:function(){return Object(l.jsx)(v,{})}}),Object(l.jsx)(d.b,{path:"/login",render:function(){return Object(l.jsx)(oe,{})}})]})]})})},Ke=n(26),Ze=n.n(Ke),qe=n(48),Ve=Object(W.b)({ProfilePage:Te,UsersPage:H,DialogsPage:je,auth:ne}),We=Object(W.d)(Ve,Object(W.a)(qe.a)),Xe=We;window.store=We;var $e=function(){Ze.a.render(Object(l.jsx)(c.a,{children:Object(l.jsx)(f.a,{store:Xe,children:Object(l.jsx)(ze,{})})}),document.getElementById("root"))};$e(),Xe.subscribe((function(){$e()})),a()}},[[81,1,2]]]);
//# sourceMappingURL=main.61d12bce.chunk.js.map
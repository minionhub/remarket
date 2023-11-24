"use strict";(self.webpackChunkassessment=self.webpackChunkassessment||[]).push([[6930],{97874:(e,s,a)=>{a.r(s),a.d(s,{default:()=>d});var t=a(47313),n=a(72231),i=a(81698),l=a(26168),o=a(84536),r=a(46417);class c extends t.Component{constructor(e){super(e),this.state={headerTitle:"Bewertungen",showModalWriteRating:!1,writeRatingToday:!1},this.handleBackFilter=this.handleBackFilter.bind(this),this.writeRating=this.writeRating.bind(this),this.closeShowModalWriteRating=this.closeShowModalWriteRating.bind(this)}writeRating(){i.t.getCookie("writeRating")?(this.setState({writeRatingToday:!0}),setTimeout((()=>this.setState({writeRatingToday:!1})),3e3)):this.setState({showModalWriteRating:!0})}closeShowModalWriteRating(){this.setState({showModalWriteRating:!1})}handleBackFilter(){n.mW.push("/")}render(){let{showModalWriteRating:e,writeRatingToday:s}=this.state;return(0,r.jsxs)("div",{children:[(0,r.jsx)(l.Z,{title:this.state.headerTitle,back:!0,handlerBack:this.handleBackFilter,handlerWrite:this.writeRating,btnWriteReview:!0}),s&&(0,r.jsx)("span",{className:"errorWriteRating",children:"Sie k\xf6nnen nur eine Bewertung pro Tag abgeben"}),(0,r.jsx)(o.default,{showModalWriteRating:e,closeShowModalWriteRating:this.closeShowModalWriteRating})]})}}c.defaultProps={};const d=c},84536:(e,s,a)=>{a.r(s),a.d(s,{RatingPage:()=>f,default:()=>y});var t=a(47313),n=a(39157),i=a(77262),l=a(81698),o=a(46417);const r=e=>{let{data:s,ratingId:a,loadData:t,currentPage:n,user:i}=e;return(0,o.jsxs)("div",{className:"itemComment clearfix",children:[(0,o.jsx)("div",{className:"col-sm-1 userInfo",children:(0,o.jsxs)("div",{className:"image",children:[1==s.anonym&&(0,o.jsx)("img",{loading:"lazy",src:"/images/design/anonymous.png",alt:""}),0==s.anonym&&(0,o.jsx)("span",{children:s.firstname.slice(0,1).toUpperCase()+s.lastname.slice(0,1).toUpperCase()})]})}),(0,o.jsxs)("div",{className:"col-sm-11",children:[(0,o.jsxs)("p",{className:"commentText",children:[0==s.anonym&&(0,o.jsxs)("span",{className:"name",children:[s.firstname," ",s.lastname]}),1==s.anonym&&(0,o.jsx)("span",{className:"name",children:"Anonym"}),(0,o.jsx)("span",{children:s.message})]}),(0,o.jsxs)("p",{className:"info",children:[(0,o.jsx)("span",{children:s.date}),(i.isLogin||s.comment)&&(0,o.jsxs)("span",{className:"comment",onClick:e=>$(e.target).closest(".itemComment").find(".wrapComments").first().toggle("slow"),children:[s.comment&&s.comment.length>0?"".concat(s.comment.length," "):null,"Kommentar",s.comment&&s.comment.length>1?"e":null]})]}),(0,o.jsx)(h,{ratingId:a,loadData:t,currentPage:n,comments:s.comment,user:i,previousId:s.id})]})]})};r.defaultProps={};const c=r,d=e=>{let{data:s,user:a}=e;return(0,o.jsxs)("div",{className:"itemComment clearfix",children:[(0,o.jsxs)("div",{className:"row",children:[(0,o.jsx)("div",{className:"col-xs-2 userInfo",children:(0,o.jsxs)("div",{className:"image",children:[1==s.anonym&&(0,o.jsx)("img",{loading:"lazy",src:"/images/design/anonymous.png",alt:""}),0==s.anonym&&(0,o.jsx)("span",{children:s.firstname.slice(0,1).toUpperCase()+s.lastname.slice(0,1).toUpperCase()})]})}),(0,o.jsxs)("div",{className:"col-xs-10",children:[0==s.anonym&&(0,o.jsxs)("span",{className:"name",children:[s.firstname," ",s.lastname]}),1==s.anonym&&(0,o.jsx)("span",{className:"name",children:"Anonym"}),(0,o.jsx)("p",{className:"info",children:(0,o.jsx)("span",{children:s.date})})]})]}),(0,o.jsx)("div",{className:"row",children:(0,o.jsx)("div",{className:"col-xs-12",children:(0,o.jsx)("span",{className:"messageText",children:s.message})})}),(0,o.jsx)("div",{className:"row",children:(0,o.jsx)("div",{className:"col-xs-12",children:(a.isLogin||s.comment)&&(0,o.jsxs)("span",{className:"comment",onClick:e=>$(e.target).closest(".wrapItemComment").find(".wrapComments").first().toggle("slow"),children:[s.comment&&s.comment.length>0?"".concat(s.comment.length," "):null,"Kommentar",s.comment&&s.comment.length>1?"e":null]})})})]})};d.defaultProps={};const m=d;class g extends t.Component{constructor(e){super(e),this.state={},this.sendComment=this.sendComment.bind(this),this.mapComments=this.mapComments.bind(this)}sendComment(e){let{ratingId:s,previousId:a}=this.props,t=$(e.target).closest(".writeCommentForm").find('textarea[name="commentText"]').val(),n=$(e.target).closest(".writeCommentForm").find('input[name="anonymous"]').prop("checked");if(t.trim()){let i={ratingId:s,message:t,anonym:n,commentId:a};$(e.target).closest(".writeCommentForm").find('textarea[name="commentText"]').val(null),document.getElementById("spinner-box-load").style.display="block",axios.post("/api/addRatingComment",i).then((e=>{document.getElementById("spinner-box-load").style.display="none",this.props.loadData(this.props.currentPage+1,!0)}))}}mapComments(e,s){return window.isMobile?(0,o.jsxs)("div",{className:"wrapItemComment",children:[(0,o.jsx)(m,{data:e,user:this.props.user}),(0,o.jsx)(g,{ratingId:this.props.ratingId,loadData:this.props.loadData,currentPage:this.props.currentPage,comments:e.comment,user:this.props.user,previousId:e.id})]},s):(0,o.jsx)(c,{data:e,ratingId:this.props.ratingId,loadData:this.props.loadData,currentPage:this.props.currentPage,user:this.props.user},s)}render(){let{user:e,comments:s}=this.props;return(0,o.jsxs)("div",{className:"wrapComments row",children:[s&&s.map(this.mapComments),e.isLogin&&(0,o.jsxs)("div",{className:"writeComment",children:[(0,o.jsx)("div",{className:"col-sm-1 col-xs-3 userInfo",children:(0,o.jsxs)("div",{className:"image",children:[!e.isLogin&&(0,o.jsx)("img",{loading:"lazy",src:"/images/design/anonymous.png",alt:""}),e.isLogin&&e.data&&(0,o.jsx)("span",{children:e.data.systemAddress.first_name.slice(0,1).toUpperCase()+e.data.systemAddress.last_name.slice(0,1).toUpperCase()})]})}),(0,o.jsx)("div",{className:"col-sm-11 col-xs-9",children:(0,o.jsxs)("form",{name:"writeComment",className:"writeCommentForm",children:[(0,o.jsx)("textarea",{name:"commentText",placeholder:"Schreibe einen Kommentar",required:!0}),(0,o.jsxs)("div",{className:"anonym",children:[(0,o.jsxs)("label",{children:[(0,o.jsx)("input",{type:"checkbox",name:"anonymous"}),(0,o.jsx)("span",{className:"check"}),"Anonym ver\xf6ffentlichen"]}),(0,o.jsx)("button",{className:"btn",type:"button",onClick:this.sendComment,children:"Ver\xf6ffentlichen"})]})]})})]})]})}}g.defaultProps={};const h=g,p=e=>{let{data:s,user:a,loadData:t,currentPage:n,clickHelpfulBtn:i}=e;return(0,o.jsxs)("div",{className:"itemRating clearfix",children:[(0,o.jsxs)("div",{className:"col-sm-1 userInfo",children:[!s.googleRating&&(0,o.jsxs)("div",{className:"image",children:[1==s.anonym&&(0,o.jsx)("img",{loading:"lazy",src:"/images/design/anonymous.png",alt:""}),0==s.anonym&&(0,o.jsx)("span",{children:s.firstname.slice(0,1).toUpperCase()+s.lastname.slice(0,1).toUpperCase()})]}),s.googleRating&&(0,o.jsx)("div",{className:"image google",children:(0,o.jsx)("img",{loading:"lazy",src:s.photo,alt:""})}),(0,o.jsx)("p",{className:"name",children:s.name})]}),(0,o.jsxs)("div",{className:"col-sm-11",children:[(0,o.jsx)("div",{className:"stars",children:function(e){let s=[];for(let a=0;a<e;++a)s.push((0,o.jsx)("img",{loading:"lazy",src:"/images/design/star.svg"},a));return s}(s.stars)}),(0,o.jsxs)("p",{className:"text",children:['"',s.message,'"']}),(0,o.jsxs)("div",{className:"buttons",children:[(0,o.jsxs)("div",{className:"left",children:[(0,o.jsx)("span",{children:s.date}),!s.googleRating&&(a.isLogin||s.comments.length>0)&&(0,o.jsxs)("span",{className:"comment",onClick:function(e){$(e.target).closest(".itemRating").find(".wrapComments").first().toggle("slow")},children:[s.comments.length>0?"".concat(s.comments.length," "):null,"Kommentar",s.comments.length>1?"e":null]})]}),(0,o.jsx)("div",{children:!s.googleRating&&a.isLogin&&(0,o.jsx)("span",{className:s.helpful?"helpfulBtn active":"helpfulBtn",onClick:()=>i(s.id,s.helpful),children:"Hilfreich"})})]}),(0,o.jsx)(h,{comments:s.comments,user:a,ratingId:s.id,loadData:t,currentPage:n,previousId:0})]})]})};p.defaultProps={};const u=p,x=e=>{let{data:s,user:a,loadData:t,currentPage:n,clickHelpfulBtn:i}=e;return(0,o.jsxs)("div",{className:"itemRating clearfix",children:[(0,o.jsxs)("div",{className:"row",children:[(0,o.jsxs)("div",{className:"col-xs-3 userInfo",children:[!s.googleRating&&(0,o.jsxs)("div",{className:"image",children:[1==s.anonym&&(0,o.jsx)("img",{loading:"lazy",src:"/images/design/anonymous.png",alt:""}),0==s.anonym&&(0,o.jsx)("span",{children:s.firstname.slice(0,1).toUpperCase()+s.lastname.slice(0,1).toUpperCase()})]}),s.googleRating&&(0,o.jsx)("div",{className:"image google",children:(0,o.jsx)("img",{loading:"lazy",src:s.photo,alt:""})})]}),(0,o.jsxs)("div",{className:"col-xs-6 wrapStars",children:[(0,o.jsx)("p",{className:"name",children:s.name}),(0,o.jsx)("div",{className:"stars",children:function(e){let s=[];for(let a=0;a<e;++a)s.push((0,o.jsx)("img",{loading:"lazy",src:"/images/design/star.svg"},a));return s}(s.stars)})]}),(0,o.jsx)("div",{className:"col-xs-3 date",children:(0,o.jsx)("span",{children:s.date})})]}),(0,o.jsx)("div",{className:"row",children:(0,o.jsx)("div",{className:"col-xs-12",children:(0,o.jsxs)("p",{className:"text",children:['"',s.message,'"']})})}),(0,o.jsxs)("div",{className:"row buttons",children:[(0,o.jsx)("div",{className:"col-xs-6 text-left",children:!s.googleRating&&(a.isLogin||s.comments.length>0)&&(0,o.jsxs)("span",{className:"comment",onClick:function(e){$(e.target).closest(".itemRating").find(".wrapComments").first().toggle("slow")},children:[s.comments.length>0?"".concat(s.comments.length," "):null,"Kommentar",s.comments.length>1?"e":null]})}),(0,o.jsx)("div",{className:"col-xs-6 text-right",children:!s.googleRating&&a.isLogin&&(0,o.jsx)("span",{className:s.helpful?"helpfulBtn active":"helpfulBtn",onClick:()=>i(s.id,s.helpful),children:"Hilfreich"})})]}),(0,o.jsx)(h,{comments:s.comments,user:a,ratingId:s.id,loadData:t,currentPage:n,previousId:0})]})};x.defaultProps={};const j=x;var v=a(3504),w=a(60973),N=a(78081);class f extends t.Component{constructor(e){super(e),this.state={pagination:{activePage:0,totalItemsCount:0,pageCount:0},sort:{options:[{label:"H\xf6chste",value:"highest"},{label:"Niedrigste",value:"lowest"},{label:"Neuste",value:"newest"}],currentValue:"highest"},data:{items:[],info:{total:0,average:0,statistics:[{stars:5,count:0},{stars:4,count:0},{stars:3,count:0},{stars:2,count:0},{stars:1,count:0}]}},showModalWriteRating:!1},this._loadRatingData=this._loadRatingData.bind(this),this.mapStatistics=this.mapStatistics.bind(this),this.mapRatings=this.mapRatings.bind(this),this.changeSortBy=this.changeSortBy.bind(this),this.handlePageChange=this.handlePageChange.bind(this),this.clickHelpfulBtn=this.clickHelpfulBtn.bind(this),this.closeShowModalWriteRating=this.closeShowModalWriteRating.bind(this),this.writeRating=this.writeRating.bind(this)}componentDidMount(){this._loadRatingData(1)}_loadRatingData(e,s){document.getElementById("spinner-box-load").style.display="block",axios.get("/api/getRatings?page=".concat(e,"&sort=").concat(this.state.sort.currentValue)).then((a=>{document.getElementById("spinner-box-load").style.display="none",s||window.scrollTo(0,0),this.setState({data:{...this.state.data,items:a.data.items,info:a.data.info},pagination:{...this.state.pagination,activePage:e-1,pageCount:Math.ceil(a.data.info.total/10),totalItemsCount:a.data.info.total}})}))}writeRating(){l.t.getCookie("writeRating")?(this.setState({writeRatingToday:!0}),setTimeout((()=>this.setState({writeRatingToday:!1})),3e3)):this.setState({showModalWriteRating:!0})}closeShowModalWriteRating(){this.setState({showModalWriteRating:!1})}handlePageChange(e){this._loadRatingData(e.selected+1),$(".wrapComments").css({display:"none"}),this.setState({pagination:{...this.state.pagination,activePage:e.selected}})}changeSortBy(e){let{value:s}=e;this.setState({sort:{...this.state.sort,currentValue:s}},(()=>this._loadRatingData(1)))}mapStatistics(e,s){let a=100==e.count?"ratingCount full":"ratingCount";return(0,o.jsxs)("div",{className:"itemStatistic",children:[(0,o.jsx)("span",{className:"name",children:["Ausgezeichnet","Sehr gut","Gut","Befriedigend","Ungen\xfcgend"][s]}),(0,o.jsx)("span",{className:"ratingLine",children:(0,o.jsx)("span",{className:a,style:{width:e.count+"%"}})}),(0,o.jsxs)("span",{className:"count",children:[e.count," %"]})]},s)}mapRatings(e,s){return window.isMobile?(0,o.jsx)(j,{clickHelpfulBtn:this.clickHelpfulBtn,currentPage:this.state.pagination.activePage,loadData:this._loadRatingData,user:this.props.user,data:e},s):(0,o.jsx)(u,{clickHelpfulBtn:this.clickHelpfulBtn,currentPage:this.state.pagination.activePage,loadData:this._loadRatingData,user:this.props.user,data:e},s)}clickHelpfulBtn(e,s){let a={ratingId:e,operation:s?"remove":"add"},{activePage:t}=this.state.pagination;document.getElementById("spinner-box-load").style.display="block",axios.post("/api/updateHelpfulCount",a).then((e=>{document.getElementById("spinner-box-load").style.display="none",this._loadRatingData(t+1,!0)}))}render(){let{data:{info:e,items:s},sort:a,pagination:t,writeRatingToday:l,showModalWriteRating:r}=this.state;return(0,o.jsxs)("div",{className:"ratingPage",children:[(0,o.jsx)("div",{className:"container",children:(0,o.jsx)("div",{className:"row",children:(0,o.jsxs)("div",{className:"col-md-12",children:[(0,o.jsxs)("div",{className:"row topInfo clearfix",children:[(0,o.jsxs)("div",{className:"col-md-3",children:[(0,o.jsxs)("p",{className:"average",children:["Durchschnitt (",e.total," Bewertungen)"]}),(0,o.jsxs)("div",{className:"star-rating",children:[(0,o.jsxs)("div",{className:"back-stars",children:[(0,o.jsx)("img",{loading:"lazy",src:"/images/design/star_unselected.svg",alt:""}),(0,o.jsx)("img",{loading:"lazy",src:"/images/design/star_unselected.svg",alt:""}),(0,o.jsx)("img",{loading:"lazy",src:"/images/design/star_unselected.svg",alt:""}),(0,o.jsx)("img",{loading:"lazy",src:"/images/design/star_unselected.svg",alt:""}),(0,o.jsx)("img",{loading:"lazy",src:"/images/design/star_unselected.svg",alt:""}),(0,o.jsxs)("div",{className:"front-stars",style:{width:e.average/5*100+"%"},children:[(0,o.jsx)("img",{loading:"lazy",src:"/images/design/star.svg",alt:""}),(0,o.jsx)("img",{loading:"lazy",src:"/images/design/star.svg",alt:""}),(0,o.jsx)("img",{loading:"lazy",src:"/images/design/star.svg",alt:""}),(0,o.jsx)("img",{loading:"lazy",src:"/images/design/star.svg",alt:""}),(0,o.jsx)("img",{loading:"lazy",src:"/images/design/star.svg",alt:""})]})]}),(0,o.jsx)("span",{children:e.average})]})]}),(0,o.jsx)("div",{className:"col-md-5",children:(0,o.jsx)("div",{className:"wrapStatistic",children:e.statistics.map(this.mapStatistics)})}),(0,o.jsx)("div",{className:"col-md-4",children:(0,o.jsxs)("div",{className:"buttons",children:[l&&(0,o.jsx)("span",{className:"errorWrite",children:"Sie k\xf6nnen nur eine Bewertung pro Tag abgeben"}),(0,o.jsx)("span",{className:"btn write",onClick:this.writeRating,children:"Bewertung abgeben"}),(0,o.jsx)(n.ZP,{placeholder:"Ausw\xe4hlen...",value:a.currentValue,name:"changeSortBy",options:a.options,searchable:!1,clearable:!1,onChange:this.changeSortBy})]})})]}),(0,o.jsxs)("div",{className:"row wrapRatings",children:[s.map(this.mapRatings),(0,o.jsx)("div",{className:"paginate",children:s.length>0&&(0,o.jsx)(i.Z,{previousLabel:"Vorherige",nextLabel:"N\xe4chste",breakLabel:(0,o.jsx)("a",{href:"",children:"..."}),breakClassName:"break-me",pageCount:t.pageCount,forcePage:t.activePage,marginPagesDisplayed:5,pageRangeDisplayed:5,onPageChange:this.handlePageChange,containerClassName:"pagination",subContainerClassName:"pages pagination",activeClassName:"active"})})]})]})})}),!window.isMobile&&(0,o.jsx)(v.Z,{showModalWriteRating:r,closeShowModalWriteRating:this.closeShowModalWriteRating,user:this.props.user}),window.isMobile&&(0,o.jsx)(w.Z,{user:this.props.user,showModalWriteRating:this.props.showModalWriteRating,closeShowModalWriteRating:this.props.closeShowModalWriteRating})]})}}f.defaultProps={};const y=(0,N.$j)((function(e){return{user:e.user}}))(f)}}]);
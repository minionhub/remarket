"use strict";(self.webpackChunkassessment=self.webpackChunkassessment||[]).push([[5030],{55030:(e,t,s)=>{s.r(t),s.d(t,{default:()=>w});var i={};s.r(i),s.d(i,{setLocation:()=>h});var a=s(31881),o=s.n(a),r=s(47313),c=s(53933),l=s(78081),d=s(72231),n=s(72905),m=s(16205);function h(e){return{type:m.y,pathname:e}}var u=s(51426),p=s(91066),g=s(69947),v=s(44021),x=s(73815),b=s(22667),f=s(98908),k=s(46897),j=s(44908),y=s(30441),I=s(97485),N=(s(5654),s(24511),s(37176)),C=s(46417);class B extends r.Component{constructor(e){super(e),this.goVariantProduct=e=>{let{variantProducts:t}=this.props,s=t.filter((t=>t.id===e));if(s.length>0){let{categoryName:e,model:t,shortcode:i}=s[0];d.mW.push("/kaufen/detail/zubehoer/".concat(e.replace(/ /g,"-").toLowerCase(),"/").concat(t.replace(/\s+|\//g,"-").toLowerCase(),"/").concat(i))}},this.mapVariantColor=(e,t)=>{let{currentModel:s,variantProducts:i}=this.props,a=s[0].criteriasValues&&s[0].criteriasValues.compatibility&&s[0].criteriasValues.compatibility.length>0?s[0].criteriasValues.compatibility[0].id:0,o=i.filter((t=>t.criteriasValues&&t.criteriasValues.color.length>0&&t.criteriasValues.color[0].id===e.id&&t.criteriasValues.compatibility.map((e=>{let{id:t}=e;return t})).includes(a))),r=o.length>0?"variant-color enable":"variant-color disable";return(0,C.jsxs)("span",{className:r,onClick:()=>o.length>0?this.goVariantProduct(o[0].id):null,style:t?{color:"#00C27E"}:null,children:[e.colorCode&&(0,C.jsx)("span",{className:"#ffffff"==e.colorCode.toLowerCase()?"colorPic whiteColor":"colorPic",style:{backgroundColor:e.colorCode,display:"inline-block"}}),e.name]},"mapColors-".concat(e.id))},this.mapVariantCompatibility=(e,t,s)=>{let{moreModel:i}=this.state,{currentModel:a,variantProducts:o}=this.props;if(!1===i&&t>=10)return null;let r=a[0].criteriasValues&&a[0].criteriasValues.color&&a[0].criteriasValues.color.length>0?a[0].criteriasValues.color[0].id:0,c=o.filter((t=>t.criteriasValues&&t.criteriasValues.color.length>0&&t.criteriasValues.compatibility.map((e=>{let{id:t}=e;return t})).includes(e.id)&&t.criteriasValues.color[0].id===r));0===c.length&&(c=o.filter((t=>t.criteriasValues&&t.criteriasValues.compatibility.map((e=>{let{id:t}=e;return t})).includes(e.id))));const l={cursor:"pointer"};return s&&(l.color="#00C27E"),(0,C.jsx)("span",{style:l,className:"name",onClick:()=>c.length>0?this.goVariantProduct(c[0].id):null,children:e.name},"mapCompatibility-".concat(e.id))},this.renderColors=e=>{let{variantColorList:t}=this.props;return(0,C.jsxs)("div",{children:[t.length>0&&t.map((s=>{const i=s.id===e.values[0].id;return this.mapVariantColor(s,i&&t.length>0)})),0==t.length&&e.values.length>0&&(0,C.jsxs)("span",{className:"name",style:{color:"#161616"},children:[e.values[0].colorCode&&(0,C.jsx)("span",{className:"#ffffff"==e.values[0].colorCode.toLowerCase()?"colorPic whiteColor":"colorPic",style:{backgroundColor:e.values[0].colorCode,display:"inline-block"}}),e.values[0].name]},"mapColors-".concat(e.values[0].id))]})},this.renderCompatibility=e=>{const t=this.props.variantCompatibilityList.length>0?this.props.variantCompatibilityList.sort((function(e,t){return e.orderBy-t.orderBy})):[];return(0,C.jsx)("div",{children:t.map(((s,i)=>{const a=e.values.map((e=>{let{id:t}=e;return t})).includes(s.id);return this.mapVariantCompatibility(s,i,a&&t.length>0)}))})},this.joinName=e=>e.map((e=>e.name)).join(", "),this.state={blockImage:{currentMainImage:"",isOpenLightBox:!1,currentImageLightBox:0},successAddToBasket:null,recommendProducts:null,productIsAddedToWishlist:!1,bottomActive:"buy",moreModel:!1},this.clickSmallImg=this.clickSmallImg.bind(this),this.openLightBox=this.openLightBox.bind(this),this.closeLightBox=this.closeLightBox.bind(this),this.addModelToBasket=this.addModelToBasket.bind(this),this.mapCriterias=this.mapCriterias.bind(this),this.mapColors=this.mapColors.bind(this),this.openSuccessAddToBasket=this.openSuccessAddToBasket.bind(this),this.closeSuccessAddToBasket=this.closeSuccessAddToBasket.bind(this),this.addModelToWishlist=this.addModelToWishlist.bind(this),this.clickBottomItem=this.clickBottomItem.bind(this),this.mapVariantCompatibility=this.mapVariantCompatibility.bind(this),this.mapVariantColor=this.mapVariantColor.bind(this),this.goVariantProduct=this.goVariantProduct.bind(this),this.renderColors=this.renderColors.bind(this),this.renderCompatibility=this.renderCompatibility.bind(this)}componentWillUnmount(){$("#intercom-container .intercom-launcher-frame").attr("style","bottom:20px !important"),$("#tidio-chat #tidio-chat-iframe").css({bottom:"-10px",right:"10px"}),$("body .fixedBtnDetail").remove()}componentDidMount(){window.isMobile&&($("#intercom-container").length>0&&($("#intercom-container .intercom-launcher-frame").removeAttr("style"),$("#intercom-container").before('<div class="fixedBtnDetail"></div>')),$("#tidio-chat").length>0?$("#tidio-chat").before('<div class="fixedBtnDetail"></div>'):$("body").append('<div class="fixedBtnDetail"></div>'))}componentWillMount(){this.props.currentModel.length>0&&this.setState({blockImage:{...this.state.blockImage,currentMainImage:this.props.currentModel[0].deviceImages.mainImg.src}})}componentWillReceiveProps(e){e.currentModel!==this.props.currentModel&&this.setState({blockImage:{...this.state.blockImage,currentMainImage:e.currentModel[0].deviceImages.mainImg.src}})}clickSmallImg(e){this.setState({blockImage:{...this.state.blockImage,currentMainImage:e.target.getAttribute("src")}})}openLightBox(){$(".zoomContainer").remove();let e=null;[].concat(this.props.currentModel[0].deviceImages.mainImg,this.props.currentModel[0].deviceImages.realImg).forEach(((t,s)=>{t.src===this.state.blockImage.currentMainImage&&(e=s)})),this.setState({blockImage:{...this.state.blockImage,isOpenLightBox:!0,currentImageLightBox:e}})}closeLightBox(){$("#zoom_01").elevateZoom({zoomType:"inner"}),this.setState({blockImage:{...this.state.blockImage,isOpenLightBox:!1}})}mapCriterias(e,t){if("color"!==e.id&&"material"!==e.id&&e.values.length>0)return(0,C.jsxs)("span",{className:"modelValues-small criteria-".concat(e.id," col-xs-6"),children:[(0,C.jsxs)("span",{children:[e.name,":"]}),(0,C.jsx)("br",{}),(0,C.jsx)("span",{children:e.values.map(((t,s)=>(0,C.jsxs)("b",{children:[t.name,s<e.values.length-1?", ":""]},"mapCriteriasValue-".concat(s))))})]},"mapCriterias-".concat(t))}mapColors(e,t){return(0,C.jsxs)("span",{style:{display:"flex",marginRight:"5px",marginBottom:"10px"},children:[e.colorCode&&(0,C.jsx)("span",{className:"#ffffff"==e.colorCode.toLowerCase()?"colorPic whiteColor":"colorPic",style:{backgroundColor:e.colorCode,display:"inline-block"}}),e.name]},"mapColors-".concat(t))}openSuccessAddToBasket(e,t){let{successAddToBasket:s}=this.state;new Promise(((s,i)=>{e.modelId?o().get("/api/loadRecommendProducts?modelId="+e.modelId).then((e=>{s(e.data.data.length?e.data.data:null)})):"gridPage"===t||"accessoryDetailPage"===t?o().get("/api/loadBestBuyProducts?shortcode="+e.shortcode+"&deviceName="+encodeURIComponent(e.deviceName)).then((e=>{s(e.data.data.length?e.data.data:null)})):s(null)})).then((i=>{i&&null==s&&i.length>0&&(this.setState({recommendProducts:i}),this.setState({successAddToBasket:(0,C.jsx)(k.Z,{addModelToBasket:this.addModelToBasket,basketData:this.props.basketData,source:t,model:e,recommendProducts:this.state.recommendProducts,closeSuccessAddToBasket:this.closeSuccessAddToBasket})}))}))}closeSuccessAddToBasket(e){if(e&&e.target.classList.contains("addToBasket"))return!1;this.setState({successAddToBasket:null})}addModelToBasket(e,t){let s=e.target.getAttribute("data-status"),i=e.target.getAttribute("data-source"),a=e.target.querySelector("input")?e.target.querySelector("input").value:1,{basketData:o}=this.props,{bottomActive:r}=this.state,c=null;if(s||(s="out"),i||(i="accessoryDetailPage"),"out-number"!==s){c=[...o];for(let e=0;e<a;e++)c=[...c,t];if(this.props.basketActions.changeBasketData(c),"out"===s){let s=t.criterias.find((e=>"manufacturer"===e.id)).values,a=s.length?s[0].name:"",o=t.categoryName;gtag("event","add_to_cart",{items:[{id:t.shortcode,list_name:"Kaufen",quantity:1,price:t.discountPrice||t.price,name:t.descriptionLong||t.model||"",brand:a,category:o}]}),window.isMobile?("buy"===r&&($("#buyAddBasket").addClass("sendtocart"),setTimeout((()=>{$("#buyAddBasket").removeClass("sendtocart")}),1500)),"installment"===r&&($("#installmentAddBasket").addClass("sendtocart"),setTimeout((()=>{$("#installmentAddBasket").removeClass("sendtocart")}),1500))):(this.props.basketActions.basketAddEffect((0,C.jsx)(b.Z,{startPosition:$(e.target).offset(),image:t.deviceImages.mainImg.src,basketType:"kaufen"})),setTimeout((()=>{"relevantProduct"!==i&&this.openSuccessAddToBasket(t,i),this.props.basketActions.basketAddEffect(null)}),2e3)),$(".add-Product-To-Basket").addClass("added"),setTimeout((()=>{$(".add-Product-To-Basket").removeClass("added")}),1800)}}}addModelToWishlist(e,t){e.stopPropagation(),e.preventDefault();let{wishlistData:s}=this.props,i=null,a="";s.every((e=>e.id!=t.id))?(i=[...s,t],a="add"):(i=s.filter((e=>e.shortcode!=t.shortcode)),a="remove"),this.props.basketActions.changeWishlisteData(i),this.setState({productIsAddedToWishlist:!this.state.productIsAddedToWishlist}),window.isMobile||"add"!==a||(this.props.basketActions.wishlistAddEffect((0,C.jsx)(f.Z,{startPosition:$(e.target).offset(),image:t.deviceImages.mainImg.src})),setTimeout((()=>{this.props.basketActions.wishlistAddEffect(null)}),2e3))}mapRealImg(e,t){let{currentModel:s}=this.props,i=this.state.blockImage.currentMainImage===e.src?"col-xs-3 modelInfoBlock-img-small active":"col-xs-3 modelInfoBlock-img-small";return(0,C.jsx)("div",{className:i,children:(0,C.jsx)("img",{loading:"lazy",src:e.src,alt:"".concat(s[0].model," - Teil ").concat(t+2),onClick:this.clickSmallImg})},"mapRealImg-".concat(t))}clickBottomItem(e){this.setState({bottomActive:e})}slideItem(e,t){return(0,C.jsxs)("span",{className:"priceRow",children:[(0,C.jsxs)("span",{className:"monthPrice",children:[Math.round(100*+e)/100," ",window.currencyValue]}),(0,C.jsxs)("span",{className:"monthDesc",children:["x ",t," Monate"]})]},"slideItem-".concat(t))}render(){let{currentModel:e,basketData:t,wishlistData:s,capacityName:i,deviceStatus:a,variantCompatibilityList:o,variantColorList:c,variantProducts:l}=this.props,d=window.domainName.name.split(".")[window.domainName.name.split(".").length-1],{blockImage:n,successAddToBasket:m,bottomActive:h,moreModel:u}=this.state;var p={dots:!0,arrows:!1,infinite:!0,slidesToShow:1,slidesToScroll:1,speed:1e3,autoplay:!0};let g=0,x=0,b=0;if(e[0]){s.map((t=>{t.shortcode!==e[0].shortcode||this.state.productIsAddedToWishlist||this.setState({productIsAddedToWishlist:!0})}));let t=e[0].price;e[0].discountPrice&&(t=e[0].discountPrice),g=(t/3).toFixed(2),x=(t/6).toFixed(2),b=(t/12).toFixed(2)}return(0,C.jsxs)("div",{children:[e.map(((e,s)=>(0,C.jsxs)("div",{className:e.discountPrice?"modelInfoBlock discount col-xs-12":"modelInfoBlock col-xs-12",children:[(0,C.jsxs)("div",{className:"col-xs-12 modelInfo for-mobile",children:[(0,C.jsxs)("p",{className:"modelName",children:[e.model," ",e.extendedTitle&&" (".concat(e.extendedTitle,")")]}),(0,C.jsxs)("p",{className:"shortcode",children:["ID: ",e.shortcode]}),(0,C.jsxs)("div",{className:"fixedRow mobileFixedBottom",children:[(0,C.jsxs)("div",{className:"tabs",children:[(0,C.jsx)("span",{className:"buy"===h?"tab-item active":"tab-item",onClick:()=>this.clickBottomItem("buy"),children:"Sofort-Kaufen"}),(0,C.jsx)("span",{className:"installment"===h?"tab-item active":"tab-item",onClick:()=>this.clickBottomItem("installment"),children:"Ratenzahlung"}),(0,C.jsx)("span",{className:"rent"===h?"tab-item hidden active":"tab-item hidden",onClick:()=>this.clickBottomItem("rent"),children:"Mieten"})]}),(0,C.jsxs)("div",{className:"bottomContent",children:["buy"===h&&(0,C.jsxs)("div",{className:"buyArea",children:[(0,C.jsxs)("div",{className:"priceRow",children:[e.discountPrice&&(0,C.jsxs)("p",{className:"price old-price",children:[Math.round(100*+e.price)/100," ",window.currencyValue]}),(0,C.jsxs)("p",{className:"price",children:[Math.round(100*(e.discountPrice?+e.discountPrice:+e.price))/100," ",window.currencyValue]})]}),(0,C.jsxs)("div",{className:"addAccessoryBasket",id:"buyAddBasket",children:[(0,C.jsx)("div",{className:"addToBasketEffectMobile",children:(0,C.jsx)("img",{loading:"lazy",src:e.deviceImages.mainImg.src,alt:""})}),1==a.statusId?(0,C.jsxs)("div",{"data-status":"out",className:"btn addToBasket pulsing add-to-cart-mobile add-Product-To-Basket",onClick:t=>this.addModelToBasket(t,e),children:[(0,C.jsx)("div",{className:"default",children:"Zum Warenkorb"}),(0,C.jsx)("div",{className:"success",children:"Zum Warenkorb"}),(0,C.jsx)("div",{className:"cart",children:(0,C.jsxs)("div",{children:[(0,C.jsx)("div",{}),(0,C.jsx)("div",{})]})}),(0,C.jsx)("div",{className:"dots"})]}):a.boughtCurrentUser&&1!=a.statusId?(0,C.jsxs)("p",{className:"boughtDevice",children:["Sie haben diesen Artikel am"," ",a.dateOfBought," erworben"]}):a.boughtCurrentUser||1==a.statusId?(0,C.jsx)("div",{}):(0,C.jsx)("p",{className:"boughtDevice",children:"Dieser Artikel ist leider nicht mehr verf\xfcgbar, da dieser schon verkauft wurde"})]})]}),"installment"===h&&(0,C.jsxs)("div",{className:"installmentArea",children:[(0,C.jsx)(r.Fragment,{children:(0,C.jsxs)(v.Z,{...p,children:[this.slideItem(g,3),this.slideItem(x,6),this.slideItem(b,12)]})}),(0,C.jsxs)("div",{className:"addAccessoryBasket",id:"installmentAddBasket",children:[(0,C.jsx)("div",{className:"addToBasketEffectMobile",children:(0,C.jsx)("img",{loading:"lazy",src:e.deviceImages.mainImg.src,alt:""})}),1==a.statusId?(0,C.jsx)("div",{"data-status":"out",className:"btn addToBasket pulsing",onClick:t=>this.addModelToBasket(t,e)}):a.boughtCurrentUser&&1!=a.statusId?(0,C.jsxs)("p",{className:"boughtDevice",children:["Sie haben diesen Artikel am"," ",a.dateOfBought," erworben"]}):a.boughtCurrentUser||1==a.statusId?(0,C.jsx)("div",{}):(0,C.jsx)("p",{className:"boughtDevice",children:"Dieser Artikel ist leider nicht mehr verf\xfcgbar, da dieser schon verkauft wurde"})]})]})]})]}),(0,C.jsx)("div",{children:(0,C.jsxs)("span",{className:"modelValues",children:[e.criterias.find((e=>"color"===e.id)).values.length>0&&(0,C.jsx)("span",{style:{display:"flex"},children:e.criterias.find((e=>"color"===e.id)).values.map(this.mapColors)}),(0,C.jsx)("span",{style:{display:"flex",borderRight:0===e.criterias.find((e=>"color"===e.id)).values.length?"none":"1px solid #e4e6e5"},children:e.quantity>0?"Auf Lager":"Nicht auf Lager"})]})})]}),(0,C.jsxs)("div",{className:"row",children:[(0,C.jsx)("div",{className:"col-md-9 left-part",children:(0,C.jsx)("div",{children:(0,C.jsxs)("div",{className:"row",children:[(0,C.jsxs)("div",{className:"col-md-12",children:[(0,C.jsx)(I.Z,{image:e.deviceImages,altTitle:e.model,showDescription:!0,descriptionProduct:e.description,blockImageState:n,openLightBox:this.openLightBox,clickThumbnailLightBox:this.clickThumbnailLightBox,closeLightBox:this.closeLightBox,nextLightBox:this.nextLightBox,prevLightBox:this.prevLightBox,quickPreview:this.props.quickPreview,clickSmallImg:this.clickSmallImg,productIsAddedToWishlist:this.state.productIsAddedToWishlist,addModelToWishlist:t=>this.addModelToWishlist(t,e)}),(0,C.jsxs)("div",{className:"col-md-6 modelInfo",style:{marginTop:"0"},children:[(0,C.jsxs)("h1",{className:"modelName",children:[e.model,e.extendedTitle&&" (".concat(e.extendedTitle,")")]}),(0,C.jsxs)("p",{className:"shortcode",children:["ID: ",e.shortcode]}),(0,C.jsx)("div",{className:"modelValues",children:e.criterias.map(((e,t)=>{if(e.values.length)return(0,C.jsxs)("div",{className:"value",children:[(0,C.jsx)("h4",{children:e.name}),(0,C.jsxs)("div",{children:["color"===e.id&&e.values.length>0&&this.renderColors(e),"compatibility"===e.id&&e.values.length>0&&this.renderCompatibility(e),"color"!==e.id&&"compatibility"!==e.id&&e.values.map((e=>(0,C.jsx)("span",{className:"name",children:e.name},"modelValues-".concat(e.id))))]}),"compatibility"===e.id&&o&&o.length>10&&(0,C.jsx)("div",{style:{display:"flex",flexWrap:"wrap",marginTop:"10px"},children:!1===u?(0,C.jsxs)("button",{className:"btn-more",onClick:()=>this.setState({moreModel:!0}),children:["Mehr anzeigen",(0,C.jsx)(N.ZXJ,{className:"ml-1"})]}):(0,C.jsxs)("button",{className:"btn-more",onClick:()=>this.setState({moreModel:!1}),children:["Weniger anzeigen",(0,C.jsx)(N.gcy,{className:"ml-1"})]})})]},"model-criterias-".concat(t))}))})]})]}),(0,C.jsx)("div",{className:"row",children:(0,C.jsxs)("div",{className:"col-md-12",children:[(0,C.jsxs)("div",{className:"offer-tab purchase description-block-purchase",children:[(0,C.jsxs)("div",{className:"item",children:[(0,C.jsx)("div",{className:"img",children:(0,C.jsx)("img",{loading:"lazy",src:"/images/offer5.svg",alt:""})}),(0,C.jsx)("p",{children:"Gepr\xfcfte Qualit\xe4t"})]}),(0,C.jsxs)("div",{className:"item",children:[(0,C.jsx)("div",{className:"img",children:(0,C.jsx)("img",{loading:"lazy",src:"/images/offer6.svg",alt:""})}),(0,C.jsx)("p",{children:"14 Tage Online-R\xfcckgaberecht"})]}),(0,C.jsxs)("div",{className:"item",children:[(0,C.jsx)("div",{className:"img",children:(0,C.jsx)("img",{loading:"lazy",src:"/images/offer7.svg",alt:""})}),(0,C.jsx)("p",{children:"Bequeme Ratenzahlung mit 0%-Zins m\xf6glich"})]}),(0,C.jsxs)("div",{className:"item",children:[(0,C.jsx)("div",{className:"img",children:(0,C.jsx)("img",{loading:"lazy",src:"/images/offer8.svg",alt:""})}),(0,C.jsx)("p",{children:"Kostenloser A-Post Versand"})]})]}),(0,C.jsxs)("div",{className:"description-block",children:[(0,C.jsx)("h5",{className:"description-block-title",children:"Beschreibung"}),(0,C.jsx)("div",{className:"value description-value",dangerouslySetInnerHTML:{__html:e.description}})]})]})})]})})}),a.boughtCurrentUser||1==a.statusId?(0,C.jsx)(j.Z,{model:e,warranty:"2 Jahre ",domain:d,basketData:t,addModelToBasket:this.addModelToBasket,deviceStatus:a,isAccessory:!0}):(0,C.jsx)(y.Z,{className:"mobile-none"})]}),(0,C.jsx)("div",{className:"msgAddToBasket"}),!1,!1]},"modelInfoBlock-".concat(s)))),m]})}}B.defaultProps={deviceStatus:{statusId:1,dateOfBought:null,boughtCurrentUser:!1}};const P=(0,l.$j)((function(e){return{basketData:e.basket.basketData,wishlistData:e.basket.wishlistData}}),(function(e){return{basketActions:(0,n.DE)(x,e)}}))(B);class A extends r.Component{constructor(e){super(e),this.state={model:[],similarItems:[],deviceStatus:{statusId:1,dateOfBought:null,boughtCurrentUser:!1},seoAccessoriesData:null,compatibilityList:[],colorList:[],variantProducts:[]},this.clickNavItem=this.clickNavItem.bind(this),this.mapAccessories=this.mapAccessories.bind(this),this._getModelData=this._getModelData.bind(this)}componentWillReceiveProps(e){if(e.params.currentModelId!==this.props.params.currentModelId){let{currentModelId:t,device:s}=e.params;s=s.split("-").join(" ");let i={deviceName:s,shortcode:t};this._getModelData(i)}}componentDidMount(){let{currentModelId:e,device:t}=this.props.params;t=t.split("-").join(" ");let s={deviceName:t,shortcode:e};this._getModelData(s)}_getModelData(e){document.getElementById("spinner-box-load").style.display="block",u.Z.getModels("/api/getShopCategoryProducts",e).then((e=>{let{data:t}=e,s=t;this.setState({model:s.data,capacityName:s.meta.capacityName,seoAccessoriesData:{...this.state.seoAccessoriesData,meta_description:t.meta.meta_description,title:t.meta.title}});let i=s.data[0].criterias.find((e=>"manufacturer"===e.id)).values;gtag("event","view_item",{items:[{id:s.data[0].shortcode,name:s.data[0].model,list_name:"Kaufen",quantity:1,category:s.data[0].categoryName,price:s.data[0].discountPrice||s.data[0].price,brand:i.length?i[0].name:""}]}),(0,p.mW)();var a={ProductName:s.data[0].model,ProductID:s.data[0].shortcode,Categories:[s.data[0].categoryName],ImageURL:s.data[0].deviceImages.mainImg.src,URL:window.location.href,Brand:i.length?i[0].name:"",Price:s.data[0].discountPrice||s.data[0].price,CompareAtPrice:s.data[0].price};_learnq.push(["track","Viewed Product",a]),_learnq.push(["trackViewedItem",{Title:a.ProductName,ItemId:a.ProductID,Categories:a.Categories,ImageUrl:a.ImageURL,Url:a.URL,Metadata:{Brand:a.Brand,Price:a.Price,CompareAtPrice:a.CompareAtPrice}}])})).catch((e=>{this.setState({seoAccessoriesData:null}),e&&e.response.data.errors.shortcode[0]&&(this.props.currentPath.setLocation(window.location.pathname),d.mW.push("/404"))})),o().post("/api/getShopCategoryProducts",{...e,similarProducts:!0}).then((e=>{let{data:t}=e;this.setState({similarItems:t.data})})).catch((e=>{})),o().post("/api/getShopCategoryCriteriasVariantList",e).then((e=>{let{data:t}=e;const s=t.meta.filter((e=>"compatibility"===e.id));this.setState({compatibilityList:s.length?s[0].values:[]});const i=t.meta.filter((e=>"color"===e.id));this.setState({colorList:i.length?i[0].values:[]}),this.setState({variantProducts:t.data.length?t.data:[]})})).catch((e=>{}))}clickNavItem(e){let t=e.currentTarget.getAttribute("data-type");this.setState({activeNavItem:t})}mapAccessories(e,t){return(0,C.jsxs)("li",{children:[(0,C.jsx)("i",{className:"fa fa-check-circle-o","aria-hidden":"true"}),e]},"mapAccessories-".concat(t))}render(){let{model:e,similarItems:t,deviceStatus:s,seoAccessoriesData:i,compatibilityList:a,colorList:o,variantProducts:r}=this.state,{device:l}=this.props.params,n=document.getElementById("spinner-box-load");n&&e[0]&&(n.style.display="none");let m="",h="",u="",p="",v={};if(e[0]){m=e[0].criterias.find((e=>"manufacturer"===e.id)).values,h=new Date(1e3*e[0].modified),h=h.toISOString(),u=e[0].deviceImages.mainImg.src;let t=e[0].criterias.find((e=>"compatibility"===e.id)).values;p=e[0].categoryName,t.length>0&&(p=p+" "+t.map(((e,t)=>e.name)).join(" "));let s=e[0],i=m.length?m[0].name:"",a={};a=!1===s.discountPrice?{"@type":"Offer",url:window.location.href,priceCurrency:"CHF",price:s.price}:{"@type":"AggregateOffer",url:window.location.href,priceCurrency:"CHF",lowPrice:s.discountPrice,highPrice:s.price};let o={};o=parseInt(s.quantity)>0?{availability:"https://schema.org/InStock"}:{availability:"https://schema.org/OutOfStock"},v={"@context":"http://schema.org/","@type":"Product",name:"".concat(s.categoryName),image:s.deviceImages.mainImg.src,description:""===s.descriptionShop?s.descriptionShopSeo:s.descriptionShop,brand:i,sku:s.shortcode,offers:a,itemCondition:"https://schema.org/NewCondition"},v={...v,...o}}let x=JSON.stringify(v);return(0,C.jsxs)("div",{children:[this.state.seoAccessoriesData&&e[0]&&(0,C.jsx)(c.ql,{title:i.title,meta:[{name:"description",content:i.meta_description},{name:"robots",content:"index, follow"},{property:"og:locale",content:"de_DE"},{property:"og:type",content:"product"},{property:"og:title",content:e[0].model},{property:"og:description",content:""!==e[0].descriptionShop?e[0].descriptionShop:e[0].description+". Auf Rechnung oder Ratenzahlung bestellen. A-Post Versand kostenlos."},{property:"og:category",content:p},{property:"og:brand",content:m.length?m[0].name:""},{property:"og:url",content:window.location.href},{property:"article:modified_time",content:h},{property:"og:image",content:u},{itemprop:"image",content:u}]}),(0,C.jsx)(c.ql,{children:(0,C.jsx)("script",{type:"application/ld+json",children:x})}),e[0]&&(0,C.jsxs)("div",{className:"detailPage",children:[(0,C.jsx)("div",{className:"infoBlock",children:(0,C.jsxs)("div",{className:"container-fluid",children:[(0,C.jsxs)("div",{className:"row",children:[(0,C.jsxs)("div",{className:"navigation-row col-xs-12",children:[(0,C.jsx)(d.rU,{to:"/",children:(0,C.jsx)("img",{loading:"lazy",src:"/images/design/house-icon.svg",alt:""})}),(0,C.jsx)(d.rU,{to:"/",children:"Startseite"}),(0,C.jsx)(d.rU,{to:"/kaufen/zubeh\xf6r",children:"Shop"}),(0,C.jsx)(d.rU,{to:"/kaufen/zubeh\xf6r/".concat(e[0].deviceName.replace(/ /g,"-"),"/filter"),children:e[0].categoryName}),(0,C.jsx)("span",{children:e[0]&&e[0].model})]}),(0,C.jsx)(P,{currentModel:e,deviceStatus:s,capacityName:"",variantCompatibilityList:a,variantColorList:o,variantProducts:r})]}),(0,C.jsx)("div",{className:"cb"})]})}),(0,C.jsx)("div",{className:"similar",children:(0,C.jsxs)("div",{className:"container",children:[(0,C.jsx)(g.Z,{similarItems:t,accessoriesDetailPage:!0,deviceName:l}),(0,C.jsx)("div",{className:"cb"})]})})]})]})}}A.defaultProps={};const w=(0,l.$j)((function(e){return{devices:e.shop.devices,loc:e.currentPath}}),(function(e){return{currentPath:(0,n.DE)(i,e)}}))(A)}}]);
"use strict";(self.webpackChunkassessment=self.webpackChunkassessment||[]).push([[9195],{23152:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var a=n(47313),o=n(68967),r=n(26168),i=n(46417);class s extends a.Component{constructor(e){super(e),this.state={titleForHead:"Warenkorb",basketStep:"paymentMethod"},this.handleBackBtn=this.handleBackBtn.bind(this),this._defineTitleHead=this._defineTitleHead.bind(this),this.goToCheckout=this.goToCheckout.bind(this),this.goToDelivery=this.goToDelivery.bind(this),this.goToPayment=this.goToPayment.bind(this),this.goToMethod=this.goToMethod.bind(this)}componentDidMount(){$("#intercom-container").length>0&&($("#intercom-container .intercom-launcher-frame").removeAttr("style"),$("#intercom-container").before('<div class="fixedBtnBasketKaufen"></div>')),$("#tidio-chat").length>0?$("#tidio-chat").before('<div class="fixedBtnBasketKaufen"></div>'):$("body").append('<div class="fixedBtnBasketKaufen"></div>'),window.localStorage.getItem("paymentFailedTryAgain")&&(window.localStorage.removeItem("paymentFailedTryAgain"),$(".productWrap, .personalData, .shippingMethod, .basketSubmit").hide(),$("#accordion, .paymentMethod, .paymentMethod .wrapperItemBasket, .shippingMethod .wrapperItemBasket, .basketSubmit").show(),this.setState({basketStep:"paymentMethod"}),this._defineTitleHead('<span class="count">3/3</span> checkout'))}componentWillUnmount(){$("#intercom-container .intercom-launcher-frame").attr("style","bottom:20px !important"),$("#tidio-chat #tidio-chat-iframe").css({bottom:"-10px",right:"10px"}),$("body .fixedBtnBasketKaufen").remove()}_defineTitleHead(e){this.setState({titleForHead:e})}handleBackBtn(){"paymentMethod"===this.state.basketStep?($(".productWrap").show(),$("#accordion").hide(),this.setState({basketStep:"paymentMethod"})):"personalData"===this.state.basketStep?($(".paymentMethod").show(),$(".shippingMethod, .personalData, .basketSubmit").hide(),this.setState({basketStep:"paymentMethod"})):"shippingMethod"===this.state.basketStep&&($(".personalData").show(),$(".shippingMethod, .paymentMethod, .basketSubmit").hide(),this.setState({basketStep:"personalData"}))}goToCheckout(){$(".productWrap, .shippingMethod, .personalData, .basketSubmit").hide(),$("#accordion").show(),this.setState({basketStep:"paymentMethod"}),$("html, body").animate({scrollTop:0},"fast")}goToMethod(){$(".paymentMethod").show(),$(".shippingMethod, .personalData, .basketSubmit").hide(),this.setState({basketStep:"paymentMethod"}),$("html, body").animate({scrollTop:0},"fast")}goToDelivery(){[...document.querySelectorAll('.paymentMethod input[type="radio"][required]')].some((e=>e.checked))&&($(".personalData, .personalData .wrapperItemBasket").show(),$(".shippingMethod, .paymentMethod, .basketSubmit").hide(),this.setState({basketStep:"personalData"}),$("html, body").animate({scrollTop:0},"fast"))}goToPayment(e){!0===e?($(".shippingMethod, .personalData").hide(),$(".paymentMethod, .paymentMethod .wrapperItemBasket").show(),this.setState({basketStep:"paymentMethod"}),$("html, body").animate({scrollTop:0},"fast")):document.querySelector('input[name="shippingAddress"]').checked?[...document.querySelectorAll('.personalData input:not([type="radio"])[required]')].every((e=>""!==e.value.trim()))&&[...document.querySelectorAll('.personalData .billingForm input[type="radio"][required]')].some((e=>e.checked))&&($(".paymentMethod, .personalData").hide(),$(".shippingMethod, .shippingMethod .wrapperItemBasket").show(),this.setState({basketStep:"shippingMethod"}),$("html, body").animate({scrollTop:0},"fast")):[...document.querySelectorAll('.personalData input:not([type="radio"])[required]')].every((e=>""!==e.value.trim()))&&[...document.querySelectorAll('.personalData .shippingForm input[type="radio"][required]')].some((e=>e.checked))&&[...document.querySelectorAll('.personalData .billingForm input[type="radio"][required]')].some((e=>e.checked))&&($(".paymentMethod, .personalData").hide(),$(".shippingMethod, .shippingMethod .wrapperItemBasket").show(),this.setState({basketStep:"shippingMethod"}),$("html, body").animate({scrollTop:0},"fast"))}render(){let{titleForHead:e}=this.state;return(0,i.jsxs)("div",{className:"basketKaufen",children:[(0,i.jsx)(r.Z,{menu:!0,title:'<img loading="lazy" alt="Logo" src="/images/design/logo_all_pages.svg"/>'}),(0,i.jsx)(o.default,{goToCheckout:this.goToCheckout,goToDelivery:this.goToDelivery,goToPayment:this.goToPayment,goToMethod:this.goToMethod,handlerBack:this.handleBackBtn,basketStep:this.state.basketStep,location:this.props.location})]})}}s.defaultProps={};const c=s},53454:(e,t,n)=>{n.d(t,{Z:()=>k});var a=n(4942),o=n(29439),r=n(45987),i=n(47313),s=n(10412);function c(){if(console&&console.warn){for(var e,t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];"string"===typeof n[0]&&(n[0]="react-i18next:: ".concat(n[0])),(e=console).warn.apply(e,n)}}var p={};function d(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];"string"===typeof t[0]&&p[t[0]]||("string"===typeof t[0]&&(p[t[0]]=new Date),c.apply(void 0,t))}function h(e,t,n){e.loadNamespaces(t,(function(){if(e.isInitialized)n();else{e.on("initialized",(function t(){setTimeout((function(){e.off("initialized",t)}),0),n()}))}}))}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f=function(e,t){var n=(0,i.useRef)();return(0,i.useEffect)((function(){n.current=t?n.current:e}),[e,t]),n.current};function g(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.i18n,a=(0,i.useContext)(s.OO)||{},r=a.i18n,c=a.defaultNS,p=n||r||(0,s.nI)();if(p&&!p.reportNamespaces&&(p.reportNamespaces=new s.zv),!p){d("You will need to pass in an i18next instance by using initReactI18next");var u=function(e){return Array.isArray(e)?e[e.length-1]:e},g=[u,{},!1];return g.t=u,g.i18n={},g.ready=!1,g}p.options.react&&void 0!==p.options.react.wait&&d("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var m=l(l(l({},(0,s.JP)()),p.options.react),t),y=m.useSuspense,b=m.keyPrefix,k=e||c||p.options&&p.options.defaultNS;k="string"===typeof k?[k]:k||["translation"],p.reportNamespaces.addUsedNamespaces&&p.reportNamespaces.addUsedNamespaces(k);var v=(p.isInitialized||p.initializedStoreOnce)&&k.every((function(e){return function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return t.languages&&t.languages.length?void 0!==t.options.ignoreJSONStructure?t.hasLoadedNamespace(e,{precheck:function(t,a){if(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!a(t.isLanguageChangingTo,e))return!1}}):function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=t.languages[0],o=!!t.options&&t.options.fallbackLng,r=t.languages[t.languages.length-1];if("cimode"===a.toLowerCase())return!0;var i=function(e,n){var a=t.services.backendConnector.state["".concat(e,"|").concat(n)];return-1===a||2===a};return!(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!i(t.isLanguageChangingTo,e))&&(!!t.hasResourceBundle(a,e)||!(t.services.backendConnector.backend&&(!t.options.resources||t.options.partialBundledLanguages))||!(!i(a,e)||o&&!i(r,e)))}(e,t,n):(d("i18n.languages were undefined or empty",t.languages),!0)}(e,p,m)}));function w(){return p.getFixedT(null,"fallback"===m.nsMode?k:k[0],b)}var S=(0,i.useState)(w),M=(0,o.Z)(S,2),O=M[0],T=M[1],$=k.join(),D=f($),j=(0,i.useRef)(!0);(0,i.useEffect)((function(){var e=m.bindI18n,t=m.bindI18nStore;function n(){j.current&&T(w)}return j.current=!0,v||y||h(p,k,(function(){j.current&&T(w)})),v&&D&&D!==$&&j.current&&T(w),e&&p&&p.on(e,n),t&&p&&p.store.on(t,n),function(){j.current=!1,e&&p&&e.split(" ").forEach((function(e){return p.off(e,n)})),t&&p&&t.split(" ").forEach((function(e){return p.store.off(e,n)}))}}),[p,$]);var P=(0,i.useRef)(!0);(0,i.useEffect)((function(){j.current&&!P.current&&T(w),P.current=!1}),[p,b]);var B=[O,p,v];if(B.t=O,B.i18n=p,B.ready=v,v)return B;if(!v&&!y)return B;throw new Promise((function(e){h(p,k,(function(){e()}))}))}var m=["forwardedRef"];function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function k(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(n){function a(a){var s=a.forwardedRef,c=(0,r.Z)(a,m),p=g(e,b(b({},c),{},{keyPrefix:t.keyPrefix})),d=(0,o.Z)(p,3),h=d[0],u=d[1],l=d[2],f=b(b({},c),{},{t:h,i18n:u,tReady:l});return t.withRef&&s?f.ref=s:!t.withRef&&s&&(f.forwardedRef=s),(0,i.createElement)(n,f)}var s;a.displayName="withI18nextTranslation(".concat((s=n).displayName||s.name||("string"===typeof s&&s.length>0?s:"Unknown"),")"),a.WrappedComponent=n;return t.withRef?(0,i.forwardRef)((function(e,t){return(0,i.createElement)(a,Object.assign({},e,{forwardedRef:t}))})):a}}}}]);
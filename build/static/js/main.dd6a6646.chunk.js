(this["webpackJsonpamazon-clone"]=this["webpackJsonpamazon-clone"]||[]).push([[0],{100:function(e,t,c){},102:function(e,t,c){"use strict";c.r(t);var a=c(3),n=c.n(a),s=c(28),i=c.n(s),r=(c(60),c(8)),o=(c(61),c(50)),l=c.n(o),d=c(51),j=c.n(d),u=(c(62),c(14)),m=c(2),b=Object(a.createContext)(),h=function(e){var t=e.reducer,c=e.initialState,n=e.children;return Object(m.jsx)(b.Provider,{value:Object(a.useReducer)(t,c),children:n})},O=function(){return Object(a.useContext)(b)},p=c(36),x=p.a.initializeApp({apiKey:"AIzaSyDu8hn5nmG0X883972VFkxGW0eyx0h0xq0",authDomain:"clone-7ceaa.firebaseapp.com",projectId:"clone-7ceaa",storageBucket:"clone-7ceaa.appspot.com",messagingSenderId:"1042824121802",appId:"1:1042824121802:web:3c358c5b0d432101555333",measurementId:"G-XWPHLZXW0H"}).firestore(),_=p.a.auth();var g=function(){var e=O(),t=Object(r.a)(e,2),c=t[0],a=c.basket,n=c.user;return t[1],Object(m.jsxs)("div",{className:"header",children:[Object(m.jsx)(u.b,{to:"/",children:Object(m.jsx)("img",{className:"header__logo",src:"http://pngimg.com/uploads/amazon/amazon_PNG11.png"})}),Object(m.jsxs)("div",{className:"header__search",children:[Object(m.jsx)("input",{className:"header__searchInput",type:"text"}),Object(m.jsx)(l.a,{className:"header__searchIcon"})]}),Object(m.jsxs)("div",{className:"header__nav",children:[Object(m.jsx)(u.b,{to:!n&&"/login",className:"header__clearlink",children:Object(m.jsxs)("div",{onClick:function(){n&&_.signOut()},className:"header__option",children:[Object(m.jsxs)("span",{className:"header__optionLineOne",children:["Hello ",n?null===n||void 0===n?void 0:n.email:"Guest"," "]}),Object(m.jsxs)("span",{className:"header__optionLineTwo",children:[n?"Sign Out":"Sign In"," "]})]})}),Object(m.jsx)(u.b,{to:"/orders",className:"header__clearlink",children:Object(m.jsxs)("div",{className:"header__option",children:[Object(m.jsx)("span",{className:"header__optionLineOne",children:"Returns"}),Object(m.jsx)("span",{className:"header__optionLineTwo",children:"& Orders"})]})}),Object(m.jsxs)("div",{className:"header__option",children:[Object(m.jsx)("span",{className:"header__optionLineOne",children:"Your"}),Object(m.jsx)("span",{className:"header__optionLineTwo",children:"Prime"})]}),Object(m.jsx)(u.b,{to:"/checkout",className:"header__clearlink",children:Object(m.jsxs)("div",{className:"header__optionBasket",children:[Object(m.jsx)(j.a,{}),Object(m.jsx)("span",{className:"header__optionLineTwo header__basketCount",children:a.length})]})})]})]})};c(72),c(73);var v=function(e){var t=e.id,c=e.title,a=e.image,n=e.price,s=e.rating,i=O(),o=Object(r.a)(i,2),l=(o[0].basket,o[1]);return Object(m.jsxs)("div",{className:"product",children:[Object(m.jsxs)("div",{className:"product__info",children:[Object(m.jsx)("p",{children:c}),Object(m.jsxs)("p",{className:"product__price",children:[Object(m.jsx)("small",{children:"$"}),Object(m.jsx)("strong",{children:n})]}),Object(m.jsx)("div",{className:"product__rating",children:Array(s).fill().map((function(e,t){return Object(m.jsx)("p",{children:"\ud83c\udf1f"})}))})]}),Object(m.jsx)("img",{src:a}),Object(m.jsx)("button",{onClick:function(){l({type:"ADD_TO_BASKET",item:{id:t,title:c,image:a,price:n,rating:s}})},children:"Add to basket"})]})};var f=function(){return Object(m.jsx)("div",{className:"home",children:Object(m.jsxs)("div",{className:"home__container",children:[Object(m.jsx)("img",{className:"home__image",src:"https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg",alt:""}),Object(m.jsxs)("div",{className:"home__row",children:[Object(m.jsx)(v,{id:"123123123123132",title:"Toaster",price:39.99,image:"https://images-na.ssl-images-amazon.com/images/I/81Mr8di8BmL._AC_SL1500_.jpg",rating:3}),Object(m.jsx)(v,{id:"12321353",title:"Alpino Natural Peanut Butter Crunch 1 KG (Unsweetened / Gluten Free / Non-GMO / Vegan)",image:"https://m.media-amazon.com/images/I/71n6gXQn79L._AC_UL480_FMwebp_QL65_.jpg",price:379,rating:4}),Object(m.jsx)(v,{id:"10003",title:"Mi Earphone Basic with Ultra deep bass and mic (Black)",price:399,rating:3,image:"https://images-na.ssl-images-amazon.com/images/I/71mQ9oKDMLL._SX522_.jpg"}),Object(m.jsx)(v,{id:"10005",title:"I Too Had a Love Story Paperback \u2013 6 November 2013",price:179,rating:5,image:"https://images-na.ssl-images-amazon.com/images/I/51JdOfIHZ9L._SX324_BO1,204,203,200_.jpg"})]}),Object(m.jsxs)("div",{className:"home__row",children:[Object(m.jsx)(v,{id:"1242342531",title:"Samsung Watch",price:159.99,image:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6360/6360444_sd.jpg",rating:1}),Object(m.jsx)(v,{id:"12321354",title:"OnePlus 8 Pro (Glacial Green 12GB RAM+256GB Storage)",image:"https://images-na.ssl-images-amazon.com/images/I/61n6Ovq6EdL._SL1500_.jpg",price:59999,rating:5}),Object(m.jsx)(v,{id:"12321355",title:"Sony WH-1000XM3 Industry Leading Wireless Noise Cancelling Headphones",image:"https://images-na.ssl-images-amazon.com/images/I/61D4Z3yKPAL._SL1500_.jpg",price:24990,rating:4}),Object(m.jsx)(v,{id:"445930",title:"Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric",price:98.99,rating:5,image:"https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"})]}),Object(m.jsxs)("div",{className:"home__row",children:[Object(m.jsx)(v,{id:"10006",title:"Sony Bravia 138.8 cm (55 inches) 4K Ultra HD Smart LED TV KD-55X7002G (Black)",price:63990,rating:5,image:"https://images-na.ssl-images-amazon.com/images/I/81Nw2ifyBzL._SX569_.jpg"}),Object(m.jsx)(v,{id:"10002",title:"Acer Aspire 3 A315-56 15.6-inch Laptop (Intel Core i5-1035G1/8GB/1TB HDD/Window 10, Home, 64Bit/Intel UHD Graphics), Black",price:46990,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/810mRHoIxML._SX466_.jpg"})]}),Object(m.jsxs)("div",{className:"home__row",children:[Object(m.jsx)(v,{id:"12321356",title:"Furny Castilla L Shape Sofa Set -RHS 6 Seater Sofa (Cream-Brown)",image:"https://images-na.ssl-images-amazon.com/images/I/61leoBbyn2L._SL1100_.jpg",price:24449,rating:4}),Object(m.jsx)(v,{id:"123123128",title:"1080P Webcam with Microphone, Wansview USB 2.0 Desktop Laptop Computer Web Camera with Auto Light Correction, Plug and Play, for Windows Mac OS, for Video Streaming, Conference, Gaming, Online Classes",price:23.29,image:"https://images-na.ssl-images-amazon.com/images/I/41QyeCl1kGL._AC_US160_.jpg",rating:3})]})]})})},N=c(10);c(74);var S=function(e){var t=e.id,c=e.title,a=e.image,n=e.price,s=e.rating,i=e.hideButton,o=O(),l=Object(r.a)(o,2),d=(l[0].basket,l[1]);return Object(m.jsxs)("div",{className:"checkoutProduct",children:[Object(m.jsx)("img",{className:"checkoutProduct__image",src:a}),Object(m.jsxs)("div",{className:"checkoutProduct__info",children:[Object(m.jsx)("p",{className:"checkoutProduct__title",children:c}),Object(m.jsxs)("p",{className:"checkoutProduct__price",children:[Object(m.jsx)("small",{children:"$"}),Object(m.jsx)("strong",{children:n})]}),Object(m.jsx)("div",{className:"checkoutProduct__rating",children:Array(s).fill().map((function(e,t){return Object(m.jsx)("p",{children:"\ud83c\udf1f"},t)}))}),!i&&Object(m.jsx)("button",{onClick:function(){d({type:"REMOVE_FROM_BASKET",id:t})},children:"Remove from Basket"})," "," "]})]})},y=(c(75),c(24)),k=c.n(y);var C=function(){var e=O(),t=Object(r.a)(e,2),c=t[0].basket,a=(t[1],Object(N.f)());return Object(m.jsxs)("div",{className:"subtotal",children:[Object(m.jsx)(k.a,{renderText:function(e){return Object(m.jsxs)("div",{children:[Object(m.jsxs)("p",{children:["Subtotal (",c.length," items): ",Object(m.jsx)("strong",{children:e})]}),Object(m.jsxs)("small",{className:"subtotal__gift",children:[Object(m.jsx)("input",{type:"checkbox"})," This order contains a gift"]})]})},decimalScale:2,value:function(e){return null===e||void 0===e?void 0:e.reduce((function(e,t){return t.price+e}),0)}(c),displayType:"text",thousandSeparator:!0,prefix:"$"}),Object(m.jsx)("button",{onClick:function(e){return a.push("./payment")},children:"Proceed to CheckOut"})]})};c(77);var A=function(){var e=O(),t=Object(r.a)(e,2),c=t[0].basket;return t[1],Object(m.jsxs)("div",{className:"checkout",children:[Object(m.jsxs)("div",{className:"checkout__left",children:[Object(m.jsx)("img",{className:"checkout__ad",src:"https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg",alt:""}),Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{children:"Hello"}),Object(m.jsx)("h2",{className:"checkout__title",children:"Your shopping Basket"}),c.map((function(e){return Object(m.jsx)(S,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})}))]})]}),Object(m.jsx)("div",{className:"checkout__right",children:Object(m.jsx)(C,{})})]})};c(78);var B=function(){var e=Object(N.f)(),t=Object(a.useState)(""),c=Object(r.a)(t,2),n=c[0],s=c[1],i=Object(a.useState)(""),o=Object(r.a)(i,2),l=o[0],d=o[1];return Object(m.jsxs)("div",{className:"login",children:[Object(m.jsx)(u.b,{to:"/",children:Object(m.jsx)("img",{className:"login__logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"})}),Object(m.jsxs)("div",{className:"login__container",children:[Object(m.jsx)("h1",{children:"Sign-in"}),Object(m.jsxs)("form",{children:[Object(m.jsx)("h5",{children:"E-mail"}),Object(m.jsx)("input",{type:"text",value:n,onChange:function(e){return s(e.target.value)}}),Object(m.jsx)("h5",{children:"Password"}),Object(m.jsx)("input",{type:"Password",value:l,onChange:function(e){return d(e.target.value)}}),Object(m.jsx)("button",{type:"submit",onClick:function(t){t.preventDefault(),_.signInWithEmailAndPassword(n,l).then((function(t){e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login__signInButoon",children:" Sign In"})]}),Object(m.jsx)("p",{children:"By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice."}),Object(m.jsx)("button",{onClick:function(t){t.preventDefault(),_.createUserWithEmailAndPassword(n,l).then((function(t){t&&e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login__registerButton",children:"Create your Amazon Account"})]})]})},E=c(26),L=c.n(E),T=c(35),w=(c(80),c(23)),P=c(52),I=c.n(P).a.create({baseURL:"https://us-central1-clone-7ceaa.cloudfunctions.net/api"});var M=function(){var e=O(),t=Object(r.a)(e,2),c=t[0],n=c.basket,s=c.user,i=t[1],o=Object(N.f)(),l=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,t){return t.price+e}),0)},d=Object(w.useStripe)(),j=Object(w.useElements)(),b=Object(a.useState)(null),h=Object(r.a)(b,2),p=h[0],_=h[1],g=Object(a.useState)(!0),v=Object(r.a)(g,2),f=v[0],y=v[1],C=Object(a.useState)(!1),A=Object(r.a)(C,2),B=A[0],E=A[1],P=Object(a.useState)(""),M=Object(r.a)(P,2),G=M[0],z=M[1],D=Object(a.useState)(!0),U=Object(r.a)(D,2),K=U[0],R=U[1];Object(a.useEffect)((function(){(function(){var e=Object(T.a)(L.a.mark((function e(){var t;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I({method:"post",url:"/payments/create?total=".concat(100*l(n))});case 2:t=e.sent,R(t.data.clientSecret);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[n]),console.log("THE SECRET IS >>>",K);var H=function(){var e=Object(T.a)(L.a.mark((function e(t){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),z(!0),e.next=4,d.confirmCardPayment(K,{payment_method:{card:j.getElement(w.CardElement)}}).then((function(e){var t=e.paymentIntent;x.collection("users").doc(null===s||void 0===s?void 0:s.uid).collection("orders").doc(t.id).set({basket:n,amount:t.amount,created:t.created}),E(!0),_(null),z(!1),i({type:"EMPTY_BASKET"}),o.replace("/orders")}));case 4:e.sent;case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsx)("div",{className:"payment",children:Object(m.jsxs)("div",{className:"payment__container",children:[Object(m.jsxs)("h1",{children:["Checkout (",Object(m.jsxs)(u.b,{to:"/checkout",children:[null===n||void 0===n?void 0:n.length," items"]}),")"]}),Object(m.jsxs)("div",{className:"payment__section",children:[Object(m.jsx)("div",{className:"payment__title",children:Object(m.jsx)("h3",{children:"Delivery Adress"})}),Object(m.jsxs)("div",{className:"payment__address",children:[Object(m.jsx)("p",{children:null===s||void 0===s?void 0:s.email}),Object(m.jsx)("p",{children:"861 React user"}),Object(m.jsx)("p",{children:"Las Vegas, nV"})]})]}),Object(m.jsxs)("div",{className:"payment__section",children:[Object(m.jsx)("div",{className:"payment__title",children:Object(m.jsx)("h3",{children:"Review items and delivery"})}),Object(m.jsx)("div",{className:"payment__items",children:n.map((function(e){return Object(m.jsx)(S,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})}))})]}),Object(m.jsxs)("div",{className:"payment__section",children:[Object(m.jsx)("div",{className:"payment__title",children:Object(m.jsx)("h3",{children:" Payment Method"})}),Object(m.jsx)("div",{className:"payment__details",children:Object(m.jsxs)("form",{onSubmit:H,children:[Object(m.jsx)(w.CardElement,{onChange:function(e){y(e.empty),_(e.error?e.error.message:"")}}),Object(m.jsxs)("div",{className:"payment__priceContainer",children:[Object(m.jsx)(k.a,{renderText:function(e){return Object(m.jsxs)("h3",{children:["Order Total: ",e]})},decimalScale:2,value:l(n),displayType:"text",thousandSeparator:!0,prefix:"$"}),Object(m.jsx)("button",{disabled:G||f||B,children:Object(m.jsx)("span",{children:G?Object(m.jsx)("p",{children:"Processing"}):"Buy Now"})})]}),p&&Object(m.jsx)("div",{children:p})]})})]})]})})},G=c(53),z=(c(98),c(54)),D=c.n(z);var U=function(e){var t,c=e.order;return Object(m.jsxs)("div",{className:"order",children:[Object(m.jsx)("h2",{children:"Order"}),Object(m.jsx)("p",{children:D.a.unix(c.data.created).format("MMMM Do YYYY, h:mma")}),Object(m.jsx)("p",{className:"order__id",children:Object(m.jsx)("small",{children:c.id})}),null===(t=c.data.basket)||void 0===t?void 0:t.map((function(e){return Object(m.jsx)(S,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating,hideButton:!0})})),Object(m.jsx)(k.a,{renderText:function(e){return Object(m.jsxs)("h3",{className:"order__total",children:["Order Total: ",e]})},decimalScale:2,value:c.data.amount/100,displayType:"text",thousandSeparator:!0,prefix:"$"})]})};c(100);var K=function(){var e=O(),t=Object(r.a)(e,2),c=t[0],n=(c.basket,c.user),s=(t[1],Object(a.useState)([])),i=Object(r.a)(s,2),o=i[0],l=i[1];return Object(a.useEffect)((function(){n?x.collection("users").doc(null===n||void 0===n?void 0:n.uid).collection("orders").orderBy("created","desc").onSnapshot((function(e){return l(e.docs.map((function(e){return{id:e.id,data:e.data()}})))})):l([])}),[n]),Object(m.jsxs)("div",{className:"orders",children:[Object(m.jsx)("h1",{children:"Your Orders"}),Object(m.jsx)("div",{className:"orders__order",children:null===o||void 0===o?void 0:o.map((function(e){return Object(m.jsx)(U,{order:e})}))})]})},R=Object(G.a)("pk_test_51ILWaRK6FJ4NvQJQAfitXtvoOesU79Mex29dVJK0y2CXbqoOdmeceakJ0NaCWwvKbUuKTtaSsOj4U2KQeBtfoNZA005UNamqdp");var H=function(){var e=O(),t=Object(r.a)(e,2),c=(t[0].user,t[1]);return Object(a.useEffect)((function(){_.onAuthStateChanged((function(e){c(e?{type:"SET_USER",user:e}:{type:"SET_USER",user:null})}))}),[]),Object(m.jsx)(u.a,{children:Object(m.jsx)("div",{className:"App",children:Object(m.jsxs)(N.c,{children:[Object(m.jsxs)(N.a,{path:"/orders",children:[Object(m.jsx)(g,{}),Object(m.jsx)(K,{})]}),Object(m.jsx)(N.a,{path:"/login",children:Object(m.jsx)(B,{})}),Object(m.jsx)(N.a,{path:"/payment",children:Object(m.jsx)(w.Elements,{stripe:R,children:Object(m.jsx)(M,{})})}),Object(m.jsxs)(N.a,{path:"/checkout",children:[Object(m.jsx)(g,{}),Object(m.jsx)(A,{})]}),Object(m.jsxs)(N.a,{path:"/",children:[Object(m.jsx)(g,{}),Object(m.jsx)(f,{})]})]})})})},W=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,114)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),a(e),n(e),s(e),i(e)}))},F=c(37),X=c(21),V=function(e,t){switch(t.type){case"ADD_TO_BASKET":return Object(X.a)(Object(X.a)({},e),{},{basket:[].concat(Object(F.a)(e.basket),[t.item])});case"EMPTY_BASKET":return Object(X.a)(Object(X.a)({},e),{},{basket:[]});case"REMOVE_FROM_BASKET":var c=e.basket.findIndex((function(e){return e.id===t.id})),a=Object(F.a)(e.basket);return c>=0?a.splice(c,1):console.warn("Cant remove product (id: ".concat(t.id,") as its not in basket!")),Object(X.a)(Object(X.a)({},e),{},{basket:a});case"SET_USER":return Object(X.a)(Object(X.a)({},e),{},{user:t.user});default:return e}};i.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(h,{initialState:{basket:[],user:null},reducer:V,children:Object(m.jsx)(H,{})})}),document.getElementById("root")),W()},60:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){},72:function(e,t,c){},73:function(e,t,c){},74:function(e,t,c){},75:function(e,t,c){},77:function(e,t,c){},78:function(e,t,c){},80:function(e,t,c){},98:function(e,t,c){}},[[102,1,2]]]);
//# sourceMappingURL=main.dd6a6646.chunk.js.map
"use strict";(self.webpackChunkFreshcart=self.webpackChunkFreshcart||[]).push([[290],{5290:(b,d,s)=>{s.r(d),s.d(d,{CartComponent:()=>f});var l=s(6814),m=s(1120),p=s(460),t=s(4769),_=s(6286);function v(i,h){if(1&i){const e=t.EpF();t.TgZ(0,"div",9)(1,"div",10),t._UZ(2,"img",11),t.qZA(),t.TgZ(3,"div",12)(4,"div")(5,"h3",13),t._uU(6),t.ALo(7,"cuttext"),t.qZA(),t.TgZ(8,"p",14),t._uU(9),t.ALo(10,"currency"),t.qZA(),t.TgZ(11,"button",15),t.NdJ("click",function(){const n=t.CHM(e).$implicit,a=t.oxw(2);return t.KtG(a.removeItem(n.product._id))}),t._UZ(12,"i",16),t._uU(13," Remove"),t.qZA()(),t.TgZ(14,"div")(15,"button",17,18),t.NdJ("click",function(){const n=t.CHM(e).$implicit,a=t.MAs(16),C=t.MAs(21),g=t.oxw(2);return t.KtG(g.changeQuantity(n.count+1,n.product._id,a,C))}),t._uU(17,"+"),t.qZA(),t.TgZ(18,"span"),t._uU(19),t.qZA(),t.TgZ(20,"button",17,19),t.NdJ("click",function(){const n=t.CHM(e).$implicit,a=t.MAs(16),C=t.MAs(21),g=t.oxw(2);return t.KtG(g.changeQuantity(n.count-1,n.product._id,a,C))}),t._uU(22,"-"),t.qZA()()()()}if(2&i){const e=h.$implicit;t.xp6(2),t.Q6J("src",e.product.imageCover,t.LSH)("alt",e.product.title),t.xp6(4),t.Oqu(t.xi3(7,5,e.product.title,10)),t.xp6(3),t.hij("Price: ",t.xi3(10,8,e.price," ")," EGP"),t.xp6(10),t.hij(" ",e.count," ")}}const c=function(i){return["/payment",i]};function u(i,h){if(1&i){const e=t.EpF();t.TgZ(0,"section",2)(1,"div",3)(2,"h2"),t._uU(3,"Shop Cart"),t.qZA(),t.TgZ(4,"button",4),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.clearAll())}),t._uU(5,"Clear Cart"),t.qZA()(),t.TgZ(6,"p",5),t._uU(7),t.ALo(8,"currency"),t.qZA(),t.YNc(9,v,23,11,"div",6),t.TgZ(10,"button",7),t._uU(11,"Online Payment "),t._UZ(12,"img",8),t.qZA()()}if(2&i){const e=t.oxw();t.xp6(7),t.hij("Total Price: ",t.xi3(8,3,e.cartProductDetails.totalCartPrice," ")," EGP"),t.xp6(2),t.Q6J("ngForOf",e.cartProductDetails.products),t.xp6(1),t.Q6J("routerLink",t.VKq(6,c,e.cartProductDetails._id))}}function x(i,h){1&i&&(t.TgZ(0,"h3",20),t._uU(1,"Your Cart is Empty...."),t.qZA())}let f=(()=>{class i{constructor(e,r){this._CartService=e,this._Renderer2=r,this.cartProductDetails=null}ngOnInit(){this._CartService.getUserCart().subscribe({next:e=>{this.cartProductDetails=e.data},error:e=>{console.log(e)}})}removeItem(e){this._CartService.removeProductCart(e).subscribe({next:r=>{this.cartProductDetails=r.data,this._CartService.cartNumber.next(r.numOfCartItems)},error:r=>{console.log(r)}})}changeQuantity(e,r,o,n){e>=1?(this._Renderer2.setAttribute(o,"disabled","true"),this._Renderer2.setAttribute(n,"disabled","true"),this._CartService.updateQuantity(e,r).subscribe({next:a=>{this._Renderer2.removeAttribute(o,"disabled"),this._Renderer2.removeAttribute(n,"disabled"),this.cartProductDetails=a.data},error:a=>{this._Renderer2.removeAttribute(o,"disabled"),this._Renderer2.removeAttribute(n,"disabled")}})):this.removeItem(r)}clearAll(){this._CartService.clearCart().subscribe({next:e=>{"success"===e.message&&(this.cartProductDetails=null,this._CartService.cartNumber.next(0))},error:e=>{console.log(e)}})}static#t=this.\u0275fac=function(r){return new(r||i)(t.Y36(_.N),t.Y36(t.Qsj))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-cart"]],standalone:!0,features:[t.jDz],decls:3,vars:2,consts:[["class","w-75 mx-auto rounded shadow bg-main-light p-3 my-5",4,"ngIf","ngIfElse"],["info",""],[1,"w-75","mx-auto","rounded","shadow","bg-main-light","p-3","my-5"],[1,"d-flex","justify-content-between","align-items-center"],[1,"btn","btn-sm","btn-outline-danger",3,"click"],[1,"text-main"],["class","row border-bottom py-2",4,"ngFor","ngForOf"],[1,"main-btn","mt-3","d-block","ms-auto",3,"routerLink"],["src","./assets/images/visa-1.svg","alt","visa logo"],[1,"row","border-bottom","py-2"],[1,"col-md-1"],[1,"w-100",3,"src","alt"],[1,"col-md-11","d-flex","justify-content-between","align-items-center"],[1,"h6"],[1,"text-main","small","m-0"],[1,"text-main","btn","m-0","p-0","small",3,"click"],[1,"fa-solid","fa-trash-can"],[1,"btn","btn-sm","border-success","fw-bold",3,"click"],["plus",""],["Subtract",""],[1,"text-main","text-center","py-5"]],template:function(r,o){if(1&r&&(t.YNc(0,u,13,8,"section",0),t.YNc(1,x,2,0,"ng-template",null,1,t.W1O)),2&r){const n=t.MAs(2);t.Q6J("ngIf",o.cartProductDetails)("ngIfElse",n)}},dependencies:[l.ez,l.sg,l.O5,l.H9,m.rH,p.r]})}return i})()},6286:(b,d,s)=>{s.d(d,{N:()=>t});var l=s(5619),m=s(4769),p=s(9862);let t=(()=>{class _{constructor(c){this._HttpClient=c,this.baseUrl="https://ecommerce.routemisr.com",this.cartNumber=new l.X(0)}addToCart(c){return this._HttpClient.post(this.baseUrl+"/api/v1/cart",{productId:c})}getUserCart(){return this._HttpClient.get(this.baseUrl+"/api/v1/cart")}removeProductCart(c){return this._HttpClient.delete(this.baseUrl+`/api/v1/cart/${c}`)}updateQuantity(c,u){return this._HttpClient.put(this.baseUrl+`/api/v1/cart/${u}`,{count:c})}clearCart(){return this._HttpClient.delete(this.baseUrl+"/api/v1/cart")}checkOut(c,u){return this._HttpClient.post(this.baseUrl+`/api/v1/orders/checkout-session/${c}?url=https://github.com/AhmedElsoudy/Fresh-Cart.git`,{shippingAddress:u})}static#t=this.\u0275fac=function(u){return new(u||_)(m.LFG(p.eN))};static#e=this.\u0275prov=m.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"})}return _})()}}]);
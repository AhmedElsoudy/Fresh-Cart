"use strict";(self.webpackChunkFreshcart=self.webpackChunkFreshcart||[]).push([[80],{5080:(m,d,c)=>{c.r(d),c.d(d,{WishlistComponent:()=>E});var a=c(6814),u=c(1120),p=c(460),t=c(4769),_=c(9196),g=c(2425),n=c(6286);function l(r,h){if(1&r){const i=t.EpF();t.TgZ(0,"i",20),t.NdJ("click",function(){t.CHM(i);const e=t.oxw().$implicit,o=t.oxw(2);return t.KtG(o.removeItemFromWishList(e._id))}),t.qZA()}}function v(r,h){if(1&r){const i=t.EpF();t.TgZ(0,"i",21),t.NdJ("click",function(){t.CHM(i);const e=t.oxw().$implicit,o=t.oxw(2);return t.KtG(o.goWish(e._id))}),t.qZA()}}function f(r,h){if(1&r&&t._UZ(0,"i",22),2&r){const i=h.$implicit,s=t.oxw().$implicit;t.ekj("rating-color",s.ratingsAverage>=i)}}const C=function(r){return["/details",r]},x=function(){return[1,2,3,4,5]};function W(r,h){if(1&r){const i=t.EpF();t.TgZ(0,"div",5)(1,"div",6),t.YNc(2,l,1,0,"i",7),t.YNc(3,v,1,0,"i",8),t.TgZ(4,"div",9)(5,"div"),t._UZ(6,"img",10),t.TgZ(7,"h3",11),t._uU(8),t.ALo(9,"cuttext"),t.qZA(),t.TgZ(10,"h4",12),t._uU(11),t.qZA(),t.TgZ(12,"div",13)(13,"span"),t._uU(14),t.ALo(15,"currency"),t.qZA(),t.TgZ(16,"div"),t.YNc(17,f,1,2,"i",14),t.qZA()()()(),t.TgZ(18,"div",15),t.NdJ("click",function(){const o=t.CHM(i).$implicit,O=t.MAs(20),D=t.MAs(22),L=t.oxw(2);return t.KtG(L.goCart(o._id,O,D))}),t._UZ(19,"i",16,17)(21,"i",18,19),t.qZA()()()}if(2&r){const i=h.$implicit,s=t.oxw(2);t.xp6(2),t.Q6J("ngIf",s.wishListDetails.includes(i._id)),t.xp6(1),t.Q6J("ngIf",!s.wishListDetails.includes(i._id)),t.xp6(1),t.Q6J("routerLink",t.VKq(16,C,i._id)),t.xp6(2),t.Q6J("src",i.imageCover,t.LSH)("title",i.title)("alt",i.title),t.xp6(2),t.Oqu(t.xi3(9,10,i.title,2)),t.xp6(3),t.Oqu(i.category.name),t.xp6(3),t.Oqu(t.xi3(15,13,i.price,"EGP ")),t.xp6(3),t.Q6J("ngForOf",t.DdM(18,x))}}function T(r,h){if(1&r&&(t.TgZ(0,"section",1)(1,"h2",2),t._uU(2,"Shop Popular Products"),t.qZA(),t.TgZ(3,"div",3),t.YNc(4,W,23,19,"div",4),t.ALo(5,"slice"),t.qZA()()),2&r){const i=t.oxw();t.xp6(4),t.Q6J("ngForOf",t.Dn7(5,1,i.products,0,18))}}let E=(()=>{class r{constructor(i,s,e,o){this._WishlistService=i,this._ToastrService=s,this._Renderer2=e,this._CartService=o,this.products=[],this.wishListDetails=[]}ngOnInit(){this._WishlistService.getWishList().subscribe({next:i=>{console.log(i),this.products=i.data;const s=i.data.map(e=>e._id);this.wishListDetails=s,this._WishlistService.wishNumber.next(i.count)},error:i=>{console.log(i)}})}goWish(i){this._WishlistService.addToWishList(i).subscribe({next:s=>{console.log(s),this._ToastrService.success(s.message),this._WishlistService.getWishList().subscribe({next:e=>{this._WishlistService.wishNumber.next(e.count)},error:e=>{console.log(e)}})},error:s=>{console.log(s)}})}goCart(i,s,e){this._Renderer2.addClass(s,"d-none"),this._Renderer2.removeClass(e,"d-none"),this._CartService.addToCart(i).subscribe({next:o=>{this._ToastrService.success(o.message),this._Renderer2.addClass(e,"d-none"),this._Renderer2.removeClass(s,"d-none"),this._CartService.cartNumber.next(o.numOfCartItems)},error:o=>{console.log(o),this._Renderer2.addClass(e,"d-none"),this._Renderer2.removeClass(s,"d-none")}})}removeItemFromWishList(i){this._WishlistService.removeItem(i).subscribe({next:s=>{console.log(s),this._ToastrService.success(s.message),this._WishlistService.wishNumber.next(s.count),this.wishListDetails=s.data;const e=this.products.filter(o=>this.wishListDetails.includes(o._id));this.products=e,this._WishlistService.getWishList().subscribe({next:o=>{this._WishlistService.wishNumber.next(o.count)},error:o=>{console.log(o)}})},error:s=>{console.log(s)}})}static#t=this.\u0275fac=function(s){return new(s||r)(t.Y36(_.M),t.Y36(g._W),t.Y36(t.Qsj),t.Y36(n.N))};static#i=this.\u0275cmp=t.Xpm({type:r,selectors:[["app-wishlist"]],standalone:!0,features:[t.jDz],decls:1,vars:1,consts:[["class","mt-2 mb-4",4,"ngIf"],[1,"mt-2","mb-4"],[1,"h4","pt-4","fw-bold"],[1,"row","g-4"],["class","col-sm-6 col-md-4 col-lg-3 col-xl-2",4,"ngFor","ngForOf"],[1,"col-sm-6","col-md-4","col-lg-3","col-xl-2"],[1,"product","p-2","position-relative"],["class","fa-solid fa-heart cursor-pointer text-danger heart",3,"click",4,"ngIf"],["class","fa-regular fa-heart heart text-danger cursor-pointer",3,"click",4,"ngIf"],[1,"cursor-pointer",3,"routerLink"],[1,"w-100",3,"src","title","alt"],[1,"h6","fw-bold","pt-1"],[1,"h6","text-main","py-0"],[1,"small"],["class","fa-solid fa-star",3,"rating-color",4,"ngFor","ngForOf"],[1,"position-absolute","cart-shopping","cursor-pointer",3,"click"],[1,"fa-solid","fa-cart-shopping","text-main","fs-3"],["shopping",""],[1,"fa-solid","fa-check","text-main","fs-3","d-none"],["correct",""],[1,"fa-solid","fa-heart","cursor-pointer","text-danger","heart",3,"click"],[1,"fa-regular","fa-heart","heart","text-danger","cursor-pointer",3,"click"],[1,"fa-solid","fa-star"]],template:function(s,e){1&s&&t.YNc(0,T,6,5,"section",0),2&s&&t.Q6J("ngIf",e.products.length>0)},dependencies:[a.ez,a.sg,a.O5,a.OU,a.H9,u.rH,p.r]})}return r})()},6286:(m,d,c)=>{c.d(d,{N:()=>t});var a=c(5619),u=c(4769),p=c(9862);let t=(()=>{class _{constructor(n){this._HttpClient=n,this.baseUrl="https://ecommerce.routemisr.com",this.cartNumber=new a.X(0)}addToCart(n){return this._HttpClient.post(this.baseUrl+"/api/v1/cart",{productId:n})}getUserCart(){return this._HttpClient.get(this.baseUrl+"/api/v1/cart")}removeProductCart(n){return this._HttpClient.delete(this.baseUrl+`/api/v1/cart/${n}`)}updateQuantity(n,l){return this._HttpClient.put(this.baseUrl+`/api/v1/cart/${l}`,{count:n})}clearCart(){return this._HttpClient.delete(this.baseUrl+"/api/v1/cart")}checkOut(n,l){return this._HttpClient.post(this.baseUrl+`/api/v1/orders/checkout-session/${n}?url=https://github.com/AhmedElsoudy/Fresh-Cart.git`,{shippingAddress:l})}static#t=this.\u0275fac=function(l){return new(l||_)(u.LFG(p.eN))};static#i=this.\u0275prov=u.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"})}return _})()}}]);
const h="https://fakestoreapi.com/products",a=document.querySelector(".js_products-list"),l=document.querySelector(".js_shopping-cart"),g=document.querySelector(".js_findFormInput"),S=document.querySelector(".js_findFormButton");let d=[],e=[];const f=localStorage.getItem("cart");f&&(e=JSON.parse(f),i(e,l,"hidden"));const I=t=>{t.preventDefault();const r=g.value,n=d.filter(o=>o.title.toLowerCase().includes(r.toLowerCase()));i(n,a)};S.addEventListener("click",I);function b(){fetch(h).then(t=>t.json()).then(t=>{d=t,i(d,a)})}function i(t,r,n){let o="",c="Buy",s="";for(const u of t){let p=u.image;p===void 0&&(p="https://placehold.co/600x400"),e.find(m=>u.id===m.id)&&(c="Delete",s="on-cart"),o+=`<li class="product-card ${s}">
    <div class="product-img-title"> 
    <img class="product-img"src="${p}"/>
    <h2 class="product-title ${s}">${u.title}</h2>
    </div>
    <div class="product-price-button">
    <p class="product-price ${s}">${u.price}€</p>
    <button class="product-button ${n} ${s}" data-id="${u.id}">${c}</button>
    </div>
    </li>`,c="Buy",s=""}r.innerHTML=o}b();a.addEventListener("click",t=>{t.preventDefault();const r=t.target.dataset.id,n=d.find(c=>Number(c.id)===Number(r));if(n===void 0)return;const o=e.findIndex(c=>Number(c.id)===Number(r));o===-1?e.push(n):e.splice(o,1),i(e,l,"hidden"),i(d,a),localStorage.setItem("cart",JSON.stringify(e))});l.addEventListener("click",t=>{t.preventDefault();const r=t.target.dataset.id;if(!r)return;const n=e.findIndex(o=>Number(o.id)===Number(r));n!==-1&&e.splice(n,1),i(e,l,"hidden"),i(d,a),localStorage.setItem("cart",JSON.stringify(e))});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOltdLCJzb3VyY2VzQ29udGVudCI6W10sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OzsifQ==

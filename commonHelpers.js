import{a as f,S as P,i as d}from"./assets/vendor-09d7c26e.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function i(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(t){if(t.ep)return;t.ep=!0;const s=i(t);fetch(t.href,s)}})();const E="43948978-860dfecfaa788bc4b5c828749",S="https://pixabay.com/api/",w=15;f.defaults.baseURL=S;const y=async(o,e=1)=>(await f.get("",{params:{key:E,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:w,page:e}})).data,g=o=>o.map(({webformatURL:e,largeImageURL:i,tags:r,likes:t,views:s,comments:n,downloads:b})=>`
            <li class="item-list gallery__item">
        <a href="${i}" class="item-list-link">
            <img class="item-list-img"  height="152"
            width="300" src="${e}" alt="${r}">
        </a>
        <div class='markup-info'>
            <div class="item-list-info-text">
                <h3 class="item-list-title">Likes</h3>
                    <p class="item-list-text">${t}</p>
            </div>
            <div class="item-list-info-text">
                <h3 class="item-list-title">Views</h3>
                    <p class="item-list-text">${s}</p>
            </div>
            <div class="item-list-info-text">
                <h3 class="item-list-title">Comments</h3>
                    <p class="item-list-text">${n}</p>
            </div>
            <div class="item-list-info-text">
                <h3 class="item-list-title">Downloads</h3>
                <p class="item-list-text">${b}</p>
            </div>
            </div>
            </li>
            `).join(""),x=document.querySelector(".js-search-form"),p=document.querySelector(".js-gallery"),c=document.querySelector(".s-submit-btn"),a=document.querySelector(".js-loader"),l=document.querySelector(".js-load-more-btn");let h="",m=1,u=0;const L=new P("ul.list a",{captionsData:"alt",captionDelay:250,overlayOpacity:.8}),R=async o=>{o.preventDefault(),p.innerHTML="",m=1,l.classList.add("is-hidden");const e=o.currentTarget;if(h=e.elements.searchKeyword.value.trim(),h===""){d.error({message:"Input field can not be empty",position:"topRight",timeout:2e3,color:"red"}),e.reset();return}try{c.classList.remove("is-disabled"),a.classList.remove("is-hidden");const{hits:i,totalHits:r}=await y(h,m);if(r===0){c.classList.add("is-disabled"),d.error({message:"Sorry, there are no images for this query",position:"topRight",timeout:2e3,color:"red"}),e.reset(),a.classList.add("is-hidden");return}p.insertAdjacentHTML("beforeend",g(i)),L.refresh(),a.classList.add("is-hidden"),c.classList.add("is-disabled"),u=Math.ceil(r/PER_PAGE),u>1&&l.classList.remove("is-hidden")}catch{c.classList.add("is-disabled"),a.classList.add("is-hidden"),d.error({message:"Search params is not valid!",position:"topRight"}),e.reset();return}e.reset()};x.addEventListener("submit",R);const _=()=>{const i=document.querySelector(".gallery__item:last-child").getBoundingClientRect().height*2;window.scrollBy({top:i,left:0,behavior:"smooth"})},v=async o=>{try{l.classList.add("is-hidden"),a.classList.remove("is-hidden"),m+=1;const{hits:e,totalHits:i}=await y(h,m);if(p.insertAdjacentHTML("beforeend",g(e)),L.refresh(),_(),a.classList.add("is-hidden"),u=Math.ceil(i/PER_PAGE),m<u)l.classList.remove("is-hidden");else{l.removeEventListener("click",v),d.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"});return}}catch{c.classList.remove("is-disabled"),a.classList.add("is-hidden"),d.error({message:"Search params is not valid!",position:"topRight"}),form.reset();return}};l.addEventListener("click",v);
//# sourceMappingURL=commonHelpers.js.map

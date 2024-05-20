(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const o of e.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function s(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function l(t){if(t.ep)return;t.ep=!0;const e=s(t);fetch(t.href,e)}})();const m="43948978-860dfecfaa788bc4b5c828749",u="https://pixabay.com/api/",d=(r="pug")=>{const i=new URLSearchParams({key:m,query:r,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${u}?${i}`).then(s=>{if(!s.ok)throw new Error(s.statusText);return s.json()})},h=r=>r.map(({webformatURL:i,largeImageURL:s,tags:l,likes:t,views:e,comments:o,downloads:n})=>`
           <li class="item-list">
       <a href="${s}" class="item-list-link">
           <img class="item-list-img"  height="152"
           width="300" src="${i}" alt="${l}">
       </a>
       <div class='markup-info'>
           <div class="item-list-info-text">
               <h3 class="item-list-title">Likes</h3>
                   <p class="item-list-text">${t}</p>
           </div>
           <div class="item-list-info-text">
               <h3 class="item-list-title">Views</h3>
                   <p class="item-list-text">${e}</p>
           </div>
           <div class="item-list-info-text">
               <h3 class="item-list-title">Comments</h3>
                   <p class="item-list-text">${o}</p>
           </div>
           <div class="item-list-info-text">
               <h3 class="item-list-title">Downloads</h3>
               <p class="item-list-text">${n}</p>
           </div>
           </div>
           </li>
           `).join(""),f=document.querySelector(".js-search-form"),c=document.querySelector(".js-gallery"),a=document.querySelector(".js-loader"),p=new SimpleLightbox("ul.list a",{captionsData:"alt",captionDelay:250,overlayOpacity:.8});function y(r){r.preventDefault();const i=r.target.elements.searchKeyword.value.trim();if(i===""){c.innerHTML="",r.target.reset(),iziToast.show({message:"Input field can not be empty",position:"topRight",timeout:2e3,color:"red"});return}c.innerHTML="",a.classList.remove("is-hidden"),d(i).then(s=>{s.total===0&&iziToast.show({message:"Sorry, there are no images for this query",position:"topRight",timeout:2e3,color:"red"}),c.innerHTML=h(s.hits),p.refresh()}).catch(s=>console.log(s)).finally(()=>{r.target.reset(),a.classList.add("is-hidden")})}f.addEventListener("submit",y);
//# sourceMappingURL=commonHelpers.js.map

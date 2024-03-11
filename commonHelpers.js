import{i as a}from"./assets/vendor-ad859c2f.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerPolicy&&(t.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?t.credentials="include":o.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(o){if(o.ep)return;o.ep=!0;const t=n(o);fetch(o.href,t)}})();const c="42772780-849d5e67a8b9b0ab7e6b7483b",l=`https://pixabay.com/api/?key=${c}&image_type=photo&orientation=horizontal&safesearch=true`,d={async fetchImages(e){try{const r=await fetch(`${l}&q=${encodeURIComponent(e)}`);if(!r.ok)throw new Error("Failed to fetch images");return(await r.json()).hits}catch(r){throw console.error("Error fetching images:",r),handleError(r),r}}};function u(e){const r=document.querySelector(".gallery");if(!r){console.error("Gallery list not found");return}if(r.innerHTML="",e.length===0){a.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!"});return}const n=e.map(s=>`
      <li class="gallery-item">
        <a href="${s.largeImageURL}" class="gallery-link">
          <img src="${s.webformatURL}" alt="${s.tags}" class="gallery-image" />
        </a>
        <div class="gallery-item-info">
          <div class="info-item">Likes: ${s.likes}</div>
          <div class="info-item">Views: ${s.views}</div>
          <div class="info-item">Comments: ${s.comments}</div>
          <div class="info-item">Downloads: ${s.downloads}</div>
        </div>
      </li>
    `).join("");r.innerHTML=n}function f(){const e=document.querySelector(".loader");e?e.classList.add("visible"):console.error("Loader not found")}function m(){const e=document.querySelector(".loader");e?e.classList.remove("visible"):console.error("Loader not found")}function y(e){console.error("Error:",e),h("An error occurred. Please try again later.")}function h(e){a.error({title:"Error",message:e})}function g(e){a.warning({title:"Warning",message:e})}const p=document.querySelector(".search-form"),v=document.querySelector(".search-input");p.addEventListener("submit",async e=>{e.preventDefault();const r=v.value.trim();if(r===""){g("Please enter a search query!");return}f();try{const n=await d.fetchImages(r);u(n)}catch(n){y(n)}finally{m()}});
//# sourceMappingURL=commonHelpers.js.map

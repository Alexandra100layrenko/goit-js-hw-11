import{i as a,S as c}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const l="42772780-849d5e67a8b9b0ab7e6b7483b",d=`https://pixabay.com/api/?key=${l}&image_type=photo&orientation=horizontal&safesearch=true`,f={async fetchImages(r){try{const o=await fetch(`${d}&q=${encodeURIComponent(r)}`);if(!o.ok)throw new Error("Failed to fetch images");return(await o.json()).hits}catch(o){throw console.error("Error fetching images:",o),handleError(o),o}}};function u(r){const o=document.querySelector(".gallery");if(!o){console.error("Gallery list not found");return}if(o.innerHTML="",r.length===0){a.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!"});return}const s=r.map(e=>`
      <li class="gallery-item">
        <a href="${e.largeImageURL}" class="gallery-link">
          <img src="${e.webformatURL}" alt="${e.tags}" class="gallery-image" />
        </a>
        <div class="gallery-item-info">
          <div class="info-item">Likes: ${e.likes}</div>
          <div class="info-item">Views: ${e.views}</div>
          <div class="info-item">Comments: ${e.comments}</div>
          <div class="info-item">Downloads: ${e.downloads}</div>
        </div>
      </li>
    `).join("");o.innerHTML=s,new c(".gallery a").refresh()}function m(){const r=document.querySelector(".loader");r?r.classList.add("visible"):console.error("Loader not found")}function y(){const r=document.querySelector(".loader");r?r.classList.remove("visible"):console.error("Loader not found")}function h(r){console.error("Error:",r),g("An error occurred. Please try again later.")}function g(r){a.error({title:"Error",message:r})}function p(r){a.warning({title:"Warning",message:r})}const L=document.querySelector(".search-form"),v=document.querySelector(".search-input");L.addEventListener("submit",async r=>{r.preventDefault();const o=v.value.trim();if(o===""){p("Please enter a search query!");return}m();try{const s=await f.fetchImages(o);u(s)}catch(s){h(s)}finally{y()}});
//# sourceMappingURL=commonHelpers.js.map

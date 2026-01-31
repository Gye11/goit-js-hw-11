/* empty css                      */import{S as u,i as a,a as d}from"./assets/vendor-Z6SuAarM.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const f=document.querySelector(".search-form"),c=document.querySelector(".gallery"),l=document.querySelector(".loader"),m="BURAYA_PIXABAY_API_KEY_YAZ",p="https://pixabay.com/api/",h=new u(".gallery a");f.addEventListener("submit",y);function y(s){s.preventDefault();const o=s.target.elements.query.value.trim();if(!o){a.warning({message:"Please enter a search term!"});return}w(),A(),g(o).then(r=>{if(r.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}L(r),h.refresh()}).catch(()=>{a.error({message:"Something went wrong. Please try again later."})}).finally(()=>{P()})}async function g(s){return(await d.get(p,{params:{key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}function L(s){const o=s.map(r=>`
      <li class="gallery-item">
        <a href="${r.largeImageURL}">
          <img src="${r.webformatURL}" alt="${r.tags}" />
        </a>
        <div class="info">
          <p>❤️ ${r.likes}</p>
          <p>👁 ${r.views}</p>
          <p>💬 ${r.comments}</p>
          <p>⬇️ ${r.downloads}</p>
        </div>
      </li>
    `).join("");c.insertAdjacentHTML("beforeend",o)}function w(){c.innerHTML=""}function A(){l.classList.remove("is-hidden")}function P(){l.classList.add("is-hidden")}
//# sourceMappingURL=index.js.map

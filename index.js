import{a as m,S as p,i as a}from"./assets/vendor-CrlV4O_2.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const y="50358243-9944b3624f9c71a45bbdf1549",g="https://pixabay.com/api/";async function h(s){const r={key:y,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await m.get(g,{params:r})).data}const l=document.querySelector(".gallery"),u=document.querySelector(".loader"),L=new p(".gallery a");function b(s){const r=s.map(({webformatURL:o,largeImageURL:i,tags:e,likes:t,views:n,comments:f,downloads:d})=>`
        <li>
          <a href="${i}">
            <img src="${o}" alt="${e}" />
            <div>
              <p>Likes: ${t}</p>
              <p>Views: ${n}</p>
              <p>Comments: ${f}</p>
              <p>Downloads: ${d}</p>
            </div>
          </a>
        </li>`).join("");l.insertAdjacentHTML("beforeend",r),L.refresh()}function v(){l.innerHTML=""}function S(){u.classList.add("visible")}function c(){u.classList.remove("visible")}const w=document.querySelector(".form");w.addEventListener("submit",async s=>{s.preventDefault();const r=s.target.elements["search-text"].value.trim();if(!r){a.error({message:"Search field cannot be empty!"});return}v(),S();try{const o=await h(r);if(c(),o.hits.length===0){a.info({message:"Sorry, there are no images matching your search query. Please try again!"});return}b(o.hits)}catch{c(),a.error({message:"Something went wrong. Please try again later."})}});
//# sourceMappingURL=index.js.map

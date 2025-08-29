import { quickLinks } from "../../src/quickLinksDoc.js";

const cardAlgo = document.querySelector("#card-algo");

quickLinks.forEach((item) => {
  cardAlgo.innerHTML += `
    <div class="cards-elem w-80 min-h-62 bg-darkBackground p-7 rounded-xl ring-black ring-2 shadow-[10px_10px_0px_0px_#000]">
        <h4 class="font-fira text-[24px] font-semibold">${item.name}</h4>
        <p class="text-sm leading-snug text-justify">${item.description}</p>
        <div class="flex justify-between items-center mt-2">
            <div>
                <p class="font-semibold">${item.t_c}</p>
                <p class="font-semibold">${item.s_c}</p>
            </div>
            <a href="${item.url}">
                <button class="px-4 py-2 bg-siteTheme rounded-full text-lightText text-[min(3.5vw,16px)] font-semibold mr-2 leading-none" >Start</button> 
            </a>
        </div>
    </div>
    `;
});

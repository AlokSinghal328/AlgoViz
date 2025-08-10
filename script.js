import { quickLinks } from "./src/quickLinksDoc.js";
import { typingEffect } from "./src/typingEffect.js";

const quickLinkDiv = document.querySelector("#quicklinkBlock");

let wordList = ["Bubble Sort", "Selection Sort", "Merge Sort", "Binary Search"];

quickLinks.forEach((links) => {
  quickLinkDiv.innerHTML += `
    <a href="${
      links.url
    }" class="quick-card border-darkBackground2 border-2  aspect-square flex flex-col justify-center gap-3 p-[2.5vw] xl:p-[1.5vw] ">
        <i class="${links.icon} text-[min(5.5vw,50px)] text-siteTheme"></i>
        <div class="flex items-end justify-between relative">
            <h4 class="text-[min(4.5vw,40px)] leading-none 4xl:text-[min(2vw,60px)]">${links.name
              .split(" ")
              .join("<br>")}</h4>
            <i class="ri-arrow-right-up-line absolute right-0 bottom-0 text-xl xs:text-2xl sm:text-3xl md:text-4xl 3xl:text-5xl "></i>
        </div>
    </a>`;
});

const typingElement = document.querySelector("#typingTag");
typingEffect({ element: typingElement, wordList });

import { typingEffect } from "/src/typingEffect.js";
import { articlesDocs } from "/src/articles_Doc.js";

const articlesByOther = document.querySelector("#articlesSectionOthers");
const typingElement = document.querySelector("#typingTag");
const articlesByAlgoViz = document.querySelector("#articlesSectionAlgoViz");

function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-us", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

let wordList = [
  "#Sorting",
  "#Searching",
  "#Recursion",
  "#DryRun",
  "#TimeComplexity",
  "#SpaceComplexity",
  "#InterviewTips",
  "#DataStructures",
];

typingEffect({ element: typingElement, wordList });

// Section for articles by algoViz
const articleAlgoViz = articlesDocs.filter(
  (items) => items.author === "AlgoViz"
);

articleAlgoViz.forEach((item) => {
  articlesByAlgoViz.innerHTML += `
    <a class="ArticlesElems w-11/12 flex flex-col gap-3 h-full"
    href="${item.url}" target="_blank">
      <img src="${item.img}"
                alt="Thumbnails"
                class="w-full h-auto ring-1 aspect-2/1 object-cover rounded shadow-[5px_5px_0px_0px_#000]"
              />
              <div class="flex flex-col h-full gap-2 justify-between">
              <h4
                class="font-fira font-semibold text-[20px] lg:text-[26px] leading-tight mt-2"
              >
                ${item.title}
              </h4>

              <p
                class="leading-tight text-[16px] lg:text-[20px] text-semiDarkText"
              >
                ${item.description}
              </p>

              <p class="text-sm font-medium lg:text-[16px]">
                By ${item.author} · ${formatDate(item.date)}
              </p>
              </div>
            </a>
  `;
});

// Section for articles by other

const articleOther = articlesDocs.filter((items) => items.author !== "AlgoViz");

articleOther.forEach((item) => {
  articlesByOther.innerHTML += `
    <a class="ArticlesElems w-11/12 flex flex-col gap-3 h-full"
    href="${item.url}" target="_blank">
      <img src="${item.img}"
                alt="Thumbnails"
                class="w-full h-auto ring-1 aspect-2/1 object-cover rounded shadow-[5px_5px_0px_0px_#000]"
              />
              <div class="flex flex-col h-full gap-2 justify-between">
              <h4
                class="font-fira font-semibold text-[20px] lg:text-[26px] leading-tight mt-2"
              >
                ${item.title}
              </h4>

              <p
                class="leading-tight text-[16px] lg:text-[20px] text-semiDarkText"
              >
                ${item.description}
              </p>

              <p class="text-sm font-medium lg:text-[16px]">
                By ${item.author} · ${formatDate(item.date)}
              </p>
              </div>
            </a>
  `;
});

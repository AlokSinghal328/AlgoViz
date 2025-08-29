import { articlesDocs } from "./articles_Doc.js";

const articlesFeatured = document.querySelector("#articlesSectionFeatured");
const articlesRecent = document.querySelector("#articlesSectionRecent");

function formatDate(dateStr) {
  const date = new Date(dateStr);

  return date.toLocaleDateString("en-us", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Articles that are featured
const featuredArticles = articlesDocs
  .filter((item) => item.featured)
  .sort((a, b) => new Date(b.date) - new Date(a.date))
  .slice(0, 4);

featuredArticles.forEach((item) => {
  articlesFeatured.innerHTML += `
    <a href="${item.url}" target="_blank"
              class="ArticlesElems w-11/12 flex flex-col gap-3 md:flex-row md:items-center md:gap-x-5 xl:col-span-2"
            >
              <img
                src="${item.img}"
                alt=""
                class="w-full h-auto aspect-2/1 object-cover ring-1 rounded shadow-[5px_5px_0px_0px_#000] md:w-1/2 md:h-fit"
              />
              <div class="flex flex-col gap-2 3xl:w-5/12">
                <h4
                  class="font-fira font-semibold text-[26px] lg:text-[32px] leading-tight mt-2 md:m-0 md:leading-none xl:text-[min(2vw,36px)]"
                >
                  ${item.title}
                </h4>

                <p
                  class="leading-tight text-[16px] lg:text-[20px] xl:text-[min(1vw,20px)] text-semiDarkText md:leading-none"
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

// 3 recent articles

const recentArticles = articlesDocs
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0,3);

recentArticles.forEach( item => {
    articlesRecent.innerHTML += `
    <a href="${item.url}" target="_blank"
              class="ArticlesElems w-9/12 flex flex-col gap-5 md:items-center xl:w-11/12"
            >
              <img
                src="${item.img}"
                alt=""
                class="w-full h-auto ring-1 aspect-2/1 object-cover rounded shadow-[5px_5px_0px_0px_#000]"
              />
              <div class="flex flex-col gap-4">
                <h4
                  class="font-fira font-semibold text-[min(3.5vw,48px)] leading-tight mt-2 md:m-0 md:leading-none xl:text-[min(2vw,36px)]"
                >
                  ${item.title}
                </h4>

                <p
                  class="text-sm font-medium text-[min(3vw,18px)] xl:text-[20px]"
                >
                  By ${item.author} · ${formatDate(item.date)}
                </p>
              </div>
            </a>
    `
})


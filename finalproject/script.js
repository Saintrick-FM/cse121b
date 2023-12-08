const loading = document.getElementById("loading");
const quoteContainer = document.querySelector(".container");

var requestOptions = {
  method: "GET",
  redirect: "follow",
};
const authors = [
  { id: 0, name: "all", slug: "all" },
  { id: 1, name: "Thomas Edison", slug: "thomas-edison" },
  { id: 2, name: "Charles Dickens", slug: "charles-dickens" },
  { id: 3, name: "Albert Einstein", slug: "albert-einstein" },
];

const sortQuotes = async () => {
  loading.style.display = "flex";
  loading.style.justifyContent = "center";

  const filter = document.querySelector("#standard-select").value;
  console.log("filter choosed = ", filter);
  let author = authors.find((author) => author.slug === filter);
  if (filter !== "all") {
    const filteredQuotes = await getQuotesFromApi(author.name);
    quoteContainer.innerHTML = ""; // Clear previous filteredQuotes
    filteredQuotes.forEach((quote) => {
      const quoteDiv = createQuoteDiv(quote);
      quoteContainer.appendChild(quoteDiv);
    });
    loading.style.display = "none";
  } else {
    const quotes = await getQuotesFromApi(null);
    quoteContainer.innerHTML = ""; // Clear previous quotes
    quotes.forEach((quote) => {
      const quoteDiv = createQuoteDiv(quote);
      quoteContainer.appendChild(quoteDiv);
    });
    loading.style.display = "none";
  }
};

const getQuotesFromApi = async (filteredValue) => {
  let complexeUrl = `https://api.quotable.io/quotes/?author=${filteredValue}`;
  let simpleUrl = "https://api.quotable.io/quotes/?page=1";

  try {
    if (filteredValue) {
      const response = await fetch(complexeUrl, requestOptions);
      const data = await response.json();
      return data.results;
    } else {
      const response = await fetch(simpleUrl, requestOptions);
      const data = await response.json();
      return data.results;
    }
  } catch (error) {
    console.error("Error fetching quote:", error);
    return null;
  }
};

const createQuoteDiv = (quote) => {
  const divWrapper = document.createElement("div");
  divWrapper.className = "blockquote-wrapper";

  const divBlockquote = document.createElement("div");
  divBlockquote.className = "blockquote";

  const h1Title = document.createElement("h1");
  h1Title.className = "card-title";
  h1Title.textContent = quote.content;
  const h4Author = document.createElement("h4");
  h4Author.innerHTML = `&mdash;${quote.author}<br /><em>Added on: ${quote.dateAdded}</em>`;

  divBlockquote.appendChild(h1Title);
  divBlockquote.appendChild(h4Author);
  divWrapper.appendChild(divBlockquote);

  return divWrapper;
};

document.querySelector("#standard-select").addEventListener("change", () => {
  sortQuotes();
});

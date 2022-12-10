// scripts/index.js
function fetchArticles() {
  const articlesReq = new Request("http://localhost:1337/api/articles");

  fetch(articlesReq)
    .then((response) => response.json())
    .then((articles) => {
      let articleList = document.getElementById("article-list");
      articles.data.reverse().forEach((article) => {
        articleList.appendChild(createArticleCard(article));
      });
    });
}

function createArticleCard(article) {
  let card = document.createElement("div");
  card.classList.add("card");
  card.onclick = () => {
    window.location.assign(
      `http://localhost:5501/frontend/pages/article.html?id=${article.id}`
    );
  };

  let cardBody = document.createElement("div");

  let articleTitle = document.createElement("h3");
  articleTitle.innerHTML = article.attributes.title;

  let articleContent = document.createElement("p");
  const showdown = window.showdown;
  const converter = new showdown.Converter();
  articleContent.innerHTML = converter.makeHtml(
    article.attributes.content.split(" ").slice(0, 20).join(" ") + " ..."
  );

  const images = articleContent.getElementsByTagName("img");
  while (images.length > 0) {
    images[0].parentNode.removeChild(images[0]);
  }

  cardBody.append(articleTitle, articleContent);

  card.append(cardBody);

  return card;
}

fetchArticles();

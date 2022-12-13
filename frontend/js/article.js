function checkForArticle() {
  const urlParams = new URLSearchParams(window.location.search);
  const articleId = urlParams.get("id");

  if (articleId) {
    getArticle(articleId);
  } else {
    console.log("An article can't be retrieved without an ID.");
  }
}

function getArticle(id) {
  const articleReq = new Request(`http://localhost:1337/api/articles/${id}`);

  fetch(articleReq)
    .then((resp) => {
      if (resp.ok) {
        return resp.json();
      } else {
        throw new Error(resp.statusText);
      }
    })
    .then(displayArticle)
    .catch();
}

function displayArticle(article) {
  document.getElementById("article-title").innerHTML =
    article.data.attributes.title;

  const showdown = window.showdown;
  const converter = new showdown.Converter();
  document.getElementById("article-content").innerHTML = converter.makeHtml(
    article.data.attributes.content
  );
}

checkForArticle();

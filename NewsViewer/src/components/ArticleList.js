export default function ArticleList({ $target, initialState }) {
  this.state = initialState;
  this.$target = document.createElement("div");
  $target.appendChild(this.$target);

  this.template = () => {
    return `
      <div class="articlesContainer">
      ${this.state.articles
        .map(
          (article) => `
        <div class="articleContainer">
          <div class="articleThumbnail">
            ${
              article.urlToImage === null
                ? `<div class="articleImg emptyArticleImg">
                  <p>이미지가 제공되지 않습니다</p>
                </div>`
                : `<img class="articleImg" src="${article.urlToImage}">`
            }
            <a class="showArticleBtn" href="${
              article.url
            }" target="_blank">기사 보러가기</a>
          </div>
          <div class="articleInfo">
            <p class="articleTitle">${article.title}</p>
            ${
              article.description !== null
                ? `<p class="articleDescription">${article.description}</p>`
                : ""
            }
          </div>
        </div>
      `
        )
        .join(" ")}
      </div>
    `;
  };

  this.render = () => {
    this.$target.innerHTML = this.template();
    console.log(this.state.articles);
  };

  this.setState = (newState) => {
    this.state = newState;
    this.render();
  };

  this.render();
}

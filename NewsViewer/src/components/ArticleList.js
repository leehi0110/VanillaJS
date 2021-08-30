export default function ArticleList({ $target, initialState }) {
  this.state = initialState;
  this.$target = document.createElement("div");
  $target.appendChild(this.$target);

  this.template = () => {
    return `
      ${this.state.articles
        .map(
          (article) => `
        <div class="articleContainer">
          <p class="articleTitle">${article.title}</p>
          <p class="articleDescription">${article.description}</p>
        </div>
      `
        )
        .join(" ")}
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

export default function Navbar({ $target, initialState, changeCategory }) {
  this.state = initialState;
  this.changeCategory = changeCategory;

  this.$target = document.createElement("div");
  this.$target.className = "navbar";
  $target.appendChild(this.$target);

  this.template = () => {
    return `
        <div class="navTitle"><p class="title">News</p></div>
        <ul class="navItems">
          ${this.state.categorys
            .map(
              (item) =>
                `<li class="navItem ${
                  this.state.selectCategory === item.category ? "active" : ""
                }" data-category="${item.category}">${item.title}</li>`
            )
            .join(" ")}
        </ul>
    `;
  };

  this.render = () => {
    this.$target.innerHTML = this.template();
  };

  this.setState = (newState) => {
    this.state = newState;
    this.render();
  };

  this.$target.addEventListener("click", (e) => {
    const $navBtn = e.target.closest(".navItem");
    if ($navBtn) {
      const { category } = $navBtn.dataset;

      this.changeCategory(category);
    }
  });

  this.render();
}

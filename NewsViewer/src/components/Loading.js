export default function Loading({ $target, initialState }) {
  this.state = initialState;
  this.$target = document.createElement("div");
  this.$target.className = "loading";
  $target.appendChild(this.$target);

  this.template = () => {
    return `
      <div class="outLoader">
        <div class="inLoader">
          <p class="loadingTitle>로딩 중</p>
        </div>
      </div>
    `;
  };

  this.setState = (newState) => {
    this.state = newState;
    this.render();
  };

  this.render = () => {
    this.$target.innerHTML = this.template();

    this.$target.style.display = this.state ? "flex" : "none";
  };

  this.render();
}

export default function TodoList({ $app, initialState }) {
  // 부모 컴포넌트로 부터 받은 state
  this.state = initialState;
  this.$target = document.createElement("div");
  $app.appendChild(this.$target);

  // 템플릿 반환 함수
  this.template = () => {
    return `
      ${this.state
        .map(
          (item) => `
        <div data-idx="${item.idx}" class="todoItem">
          <p>${item.title}</p>
          <button data-delete="${item.idx}">X</button>
        </div>
      `
        )
        .join("")}
    `;
  };

  // 렌더 함수
  this.render = () => {
    this.$target.innerHTML = this.template();
  };

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render();
}

export default function TodoList({ $app, initialState, deleteItem }) {
  // 부모 컴포넌트로 부터 받은 state
  this.state = initialState;
  this.deleteItem = deleteItem;
  this.$target = document.createElement("div");
  this.$target.classList.add("todoList");
  $app.appendChild(this.$target);

  // 템플릿 반환 함수
  this.template = () => {
    return `
      ${this.state
        .map(
          (item) => `
        <div data-item-idx="${item.idx}" class="todoItem">
          <p>${item.title}</p>
          <button class="deleteBtn">-</button>
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

  this.$target.addEventListener("click", (e) => {
    const $item = e.target.closest(".todoItem");

    if ($item) {
      const { itemIdx } = $item.dataset;
      this.deleteItem(parseInt(itemIdx));
    }
  });

  this.render();
}

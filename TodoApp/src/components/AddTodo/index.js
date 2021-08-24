export default function AddTodo({ $app, addItem }) {
  this.$target = document.createElement("div");
  $app.appendChild(this.$target);
  this.addItem = addItem;
  this.template = () => {
    return `
      <input type="text" placeholder="What do you do?"/>
      <button class="addBtn">+</button>
    `;
  };

  this.render = () => {
    this.$target.innerHTML = this.template();

    const $addBtn = document.querySelector(".addBtn");
    $addBtn.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
      }
    });
  };

  this.addEvent = () => {
    const $input = document.querySelector("input");
    if ($input.value !== "") {
      this.addItem($input.value);
      $input.value = "";
    }
  };

  // click과 이벤트 위임을 이용한 할일 추가
  this.$target.addEventListener("click", (e) => {
    const $addBtn = e.target.closest(".addBtn");
    this.addEvent();
  });

  // enter를 이용한 할일 추가
  this.$target.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      this.addEvent();
    }
  });

  this.render();
}

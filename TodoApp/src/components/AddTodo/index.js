export default function AddTodo({ $app, addItem }) {
  this.addItem = addItem;

  this.$target = document.createElement("div");
  this.$target.className = "inputContainer";
  $app.appendChild(this.$target);

  this.template = () => {
    return `
      <div class="inputBox">
        <input type="text" placeholder="What do you do?"/>
        <button class="addBtn">+</button>
      </div>
    `;
  };

  this.render = () => {
    this.$target.innerHTML = this.template();
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
    console.log("1");
    if (e.target === $addBtn) this.addEvent();
  });

  // enter를 이용한 할일 추가
  this.$target.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      this.addEvent();
    }
  });

  this.render();
}

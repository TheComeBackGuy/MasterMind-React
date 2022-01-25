export function handleButtonRollover(e) {
  e.target.style.border = "1px solid red";
}

export function handleButton(button) {
  const colors = ["black", "red", "yellow", "green", "blue", "purple"];
  console.log(button.target);
  if (button.target.style.backgroundColor === colors[0]) {
    document.querySelector(`#${button.target.id}`).style.backgroundColor =
      colors[1];
  }
}

export function handleButtonRollover(e, activeRowNow, currentRow) {
  if (currentRow === activeRowNow) {
    e.target.style.border = "1px solid red";
    e.target.style.cursor = "pointer";
  }
}

export function handleButton(button, activeRowNow, currentRow) {
  if (currentRow === activeRowNow) {
    console.log(currentRow + " and " + activeRowNow);
  }

  // const colors = ["black", "red", "yellow", "green", "blue", "purple"];
  // if (button.target.style.backgroundColor === colors[0]) {
  //   document.querySelector(`#${button.target.id}`).style.backgroundColor =
  //     colors[1];
  // }
}

export function handleButtonRollout(e, activeRowNow, currentRow) {
  if (currentRow === activeRowNow) {
    e.target.style.border = "1px solid var(--darkGrey)";
  }
}

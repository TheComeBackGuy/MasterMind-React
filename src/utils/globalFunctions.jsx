export function generateDefaultRow(cols, activeRowNumber) {
  // console.log("The active row in default row is : " + activeRowNumber);
  for (let i = 0; i < cols; i++) {
    document
      .getElementById(`r${activeRowNumber}c${i}`)
      .classList.replace("black", `yellow`);
    // console.log(`r${activeRowNumber}c${i}`);
  }
}

let inputTag = document.getElementsByClassName("form-control")[0];
let shoppingListTag = document.getElementsByClassName(
  "shoppingListContainer"
)[0];
let productId = 1;
let handleChange = (event) => {
  let inputValue = event.target.value;
  let productContainer = document.createElement("div");
  productContainer.classList.add("productContainer");
  let parentDiv = document.createElement("div");
  parentDiv.classList.add("productName");
  parentDiv.addEventListener("click", () => {
    let classExit = parentDiv.classList.contains("purchased"); //true
    if (classExit) {
      //false
      parentDiv.classList.remove("purchased");
    } else {
      parentDiv.classList.add("purchased");
    }
  });
  let spanTag = document.createElement("span");
  let trashIcon = document.createElement("i");
  trashIcon.addEventListener("click", () => {
    productContainer.remove();
  });
  trashIcon.classList.add("fa-solid", "fa-trash-can");
  let product = productId.toString() + ". " + inputValue;
  spanTag.append(product);
  parentDiv.append(spanTag);
  productContainer.append(parentDiv, trashIcon);
  shoppingListTag.append(productContainer);
  inputTag.value = "";
  productId += 1;
};
inputTag.addEventListener("change", handleChange);

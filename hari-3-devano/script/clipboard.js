function copyText(target) {
  // get lement by id with target
  let element = document.getElementById("html-code-" + target);
  element.select();
  document.execCommand("Copy");
  console.log(element);
}

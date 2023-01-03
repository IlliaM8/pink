export function getNodes() {
  return document.querySelector(".wrapper").children;
}
export function removeMainPageNodes(nodes) {
  for (let i = 0; i < nodes.length; i++) {
    if (i !== 0 && i !== nodes.length - 1) {
      nodes[i].remove();
    }
  }
}
export function returnMainPageNodes(nodes) {
  const header = document.querySelector(".header");
  for (let i = 0; i < nodes.length; i++) {
    if (i !== 0 && i !== nodes.length - 1) {
      header.after(nodes[i]);
    }
  }
}
export function removePhotoPageNodes(photoNodes) {
  for (let i = 0; i < photoNodes.length; i++) {
    if (i !== 0 && i !== photoNodes.length - 1) {
      photoNodes[i].remove();
    }
  }
}
export function removeRegPageNodes(regNodes) {
  for (let i = 0; i < regNodes.length; i++) {
    if (i !== 0 && i !== regNodes.length - 1) {
      regNodes[i].remove();
    }
  }
}
export function addActiveClassToPage(target) {
  document.querySelector(".menu-active").classList.remove("menu-active");
  target.classList.add("menu-active");
}

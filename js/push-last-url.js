// 在目标页面设置返回对象的className为local-trkey

let goBack = document.getElementsByClassName("local-trkey")[0];

document.addEventListener("DOMContentLoaded", pushURL, false);

function pushURL() {
  goBack.href = localStorage.getItem("trkey");
  console.log("lastURL:" + goBack.href);
}

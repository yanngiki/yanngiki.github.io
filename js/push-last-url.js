let goBack = document.getElementsByClassName("local-trkey")[0];

document.addEventListener("DOMContentLoaded", pushURL, false);

function pushURL() {
  goBack.href = localStorage.getItem("trkey");
  console.log("lastURL:" + goBack.href);
}

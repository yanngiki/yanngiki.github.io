let postTitle = document.getElementsByClassName('post-title');
let postIMG = document.getElementsByClassName('post-imgwrap');
let goBack = document.getElementsByClassName('local-trkey')[0];


//把当前点击页面的URL存放到localstorage
function getlastURL() {
    var lastURL = window.location.href;
    localStorage.setItem ('trkey', lastURL);
    console.log (lastURL)
}

//文章列表可交互元素绑定点击元素，并执行函数
for( i= 0; i < postTitle.length; i++ ) {
    postTitle[i].onclick = getlastURL;
}

for( i= 0; i < postIMG.length; i++ ) {
    postIMG[i].addEventListener ('click', getlastURL, false)
}

//在目标页面加载时，把localstorage的值赋给目标对象（该段放在目标页面 post.ejs 上执行）
// document.addEventListener("DOMContentLoaded", pushURL, false);
// function pushURL() {
//     goBack.href = localStorage.getItem('trkey');
//     console.log ("lastURL:" + goBack.href)
// }
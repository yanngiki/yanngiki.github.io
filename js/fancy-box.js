// 该文档为自定义fancybox的使用

// 遍历post-md里所有的图片，并加上‘data-fancybox’属性
function imgsetAttPost() {
    let Paper = document.getElementById('post-detail');
    let fancyimg = Paper.getElementsByTagName('img');
    for (let i = 0; i < fancyimg.length; i++) {
        fancyimg[i].setAttribute('data-fancybox', '');
        fancyimg[i].style.setProperty('cursor', 'zoom-in');
    }  
}
document.addEventListener('DOMContentLoaded', imgsetAttPost, false)

//遍历portf-showcase里所有的图片，并加上‘data-fancybox=”port”’属性
function imgsetAttPortf() {
    let PaperPortf = document.getElementById('portf_detail');
    let fancyimg = PaperPortf.getElementsByTagName('img');
    for (let i = 0; i < fancyimg.length; i++) {
        fancyimg[i].setAttribute('data-fancybox', 'portf');
        fancyimg[i].style.setProperty('cursor', 'zoom-in');
    }  
}
document.addEventListener('DOMContentLoaded', imgsetAttPortf, false)


// Fancybox 普通图片事件   
// "close" "slideshow", "thumbs", 
// "prev", "infobar","next",
// "zoomIn","zoomOut","toggle1to1","rotateCCW","rotateCW","flipX","flipY",


//案例文章图片
Fancybox.bind('[data-fancybox]', {
    Thumbs : {
        type: "classic"
      },
    Toolbar: {
        display: {
            left: ["toggle1to1", "thumbs"],
            middle: [
            // "zoomIn",
            // "zoomOut",
            "infobar",
            // "rotateCCW",
            // "rotateCW",
            // "flipX",
            // "flipY",
            ],
            right: ["close"],
        },
    },
});

//protf-showcase图片事件
Fancybox.bind('[data-fancybox="portf" ]', {
    Thumbs : {
        type: "classic"
      },
    Toolbar: {
        display: {
            left: ["toggle1to1", "thumbs"],
            middle: [
            // "zoomIn",
            // "zoomOut",
            "infobar",
            // "rotateCCW",
            // "rotateCW",
            // "flipX",
            // "flipY",
            ],
            right: ["close"],
        },
    },
});
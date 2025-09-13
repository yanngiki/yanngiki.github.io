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

//遍历post里类名为 image-item 的图片，并加上‘data-fancybox=”img-question”’属性
function imgsetAttimgQuestion() {
    let Paper = document.getElementById('post-detail');
    let ImgContainer = Paper.getElementsByClassName('image-container')[0];
    let fancyimg = ImgContainer.getElementsByTagName('img');
    for (let i = 0; i < fancyimg.length; i++) {
        fancyimg[i].setAttribute('data-fancybox', 'img-question');
        fancyimg[i].style.setProperty('cursor', 'zoom-in');
    }  
}
document.addEventListener('DOMContentLoaded', imgsetAttimgQuestion, false)

Fancybox.bind('[data-fancybox="img-question" ]', {
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


//遍历about里类名为 image-item 的图片，并加上‘data-fancybox=”img-about”’属性
function imgsetAttimgSlider() {
    let Paper = document.getElementsByClassName('content-container')[0];
    let ImgSlider = Paper.getElementsByClassName('img-slider')[0];
    let fancyimg = ImgSlider.getElementsByTagName('img');
    for (let i = 0; i < fancyimg.length; i++) {
        fancyimg[i].setAttribute('data-fancybox', 'img-slider');
        fancyimg[i].style.setProperty('cursor', 'pointer');
    }  
    console.log('about图片fancybox属性已添加');
}
document.addEventListener('DOMContentLoaded', imgsetAttimgSlider(), false)

Fancybox.bind('[data-fancybox="img-slider" ]', {
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






// Fancybox 普通图片事件   
// "close" "slideshow", "thumbs", 
// "prev", "infobar","next",
// "zoomIn","zoomOut","toggle1to1","rotateCCW","rotateCW","flipX","flipY",










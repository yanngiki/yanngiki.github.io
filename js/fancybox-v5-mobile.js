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

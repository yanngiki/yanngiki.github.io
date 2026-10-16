/* Fancybox v6 灯箱初始化：文章页与作品详情页
   给正文图片补 data-fancybox 分组，再用统一的 v6 配置绑定。 */
(function () {
    'use strict';

    if (typeof Fancybox === 'undefined') return;

    // 文章页：不要缩略图条
    var postOptions = {
        Carousel: {
            Thumbs: false,
            Toolbar: {
                display: {
                    left: ['toggle1to1'],
                    middle: ['infobar'],
                    right: ['close']
                }
            }
        }
    };

    // 设计详情页：保留缩略图条
    var portfOptions = {
        Carousel: {
            Thumbs: { type: 'classic' },
            Toolbar: {
                display: {
                    left: ['toggle1to1', 'thumbs'],
                    middle: ['infobar'],
                    right: ['close']
                }
            }
        }
    };

    function tagImages(containerId, group) {
        var container = document.getElementById(containerId);
        if (!container) return;
        var images = container.getElementsByTagName('img');
        for (var i = 0; i < images.length; i++) {
            images[i].setAttribute('data-fancybox', group);
            images[i].style.cursor = 'zoom-in';
        }
    }

    function init() {
        tagImages('post-detail', 'post');
        tagImages('portf_detail', 'portf');

        // 正文里的 .image-container 保持独立分组
        var question = document.querySelector('#post-detail .image-container');
        if (question) {
            var images = question.getElementsByTagName('img');
            for (var i = 0; i < images.length; i++) {
                images[i].setAttribute('data-fancybox', 'img-question');
            }
        }

        Fancybox.bind('[data-fancybox="post"]', postOptions);
        Fancybox.bind('[data-fancybox="img-question"]', postOptions);
        Fancybox.bind('[data-fancybox="portf"]', portfOptions);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
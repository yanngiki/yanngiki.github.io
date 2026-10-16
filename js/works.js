/* 作品集页：Fancybox v6
   桌面端（>=680px）：页面内 Carousel 轮播 + 灯箱。
   移动端（<680px）：只显示封面，点击后用全屏查看器左右翻阅（支持双指缩放）。
   图片清单在 _partial/works-gallery.ejs，这里只负责交互。 */
(function () {
    'use strict';

    if (typeof Fancybox === 'undefined') return;

    /* 桌面端灯箱：保留左右箭头 */
    var desktopLightboxOptions = {
        Carousel: {
            Thumbs: { type: 'modern' },
            Toolbar: {
                display: {
                    left: ['counter'],
                    middle: ['toggle1to1', 'thumbs'],
                    right: ['close']
                }
            }
        }
    };

    /* 移动端全屏翻阅：隐藏左右箭头，靠滑动翻页 */
    var mobileViewerOptions = {
        Carousel: {
            Arrows: false,
            Thumbs: { type: 'modern' },
            Toolbar: {
                display: {
                    left: ['counter'],
                    middle: ['toggle1to1', 'thumbs'],
                    right: ['close']
                }
            }
        }
    };

    /* ---------- 移动端：封面 → 全屏翻阅 ---------- */
    var cover = document.querySelector('.works-cover');
    var dataEl = document.querySelector('.works-images-data');
    var images = [];

    if (dataEl) {
        try {
            images = JSON.parse(dataEl.textContent) || [];
        } catch (e) {
            images = [];
        }
    }

    function openViewer() {
        if (!images.length) return;
        var slides = images.map(function (src) {
            return { src: src, type: 'image' };
        });
        Fancybox.show(slides, mobileViewerOptions);
    }

    if (cover) {
        cover.addEventListener('click', openViewer);
    }

    /* ---------- 桌面端：页面内轮播 ---------- */
    var carouselEl = document.getElementById('myCarousel');
    var carousel = null;
    var desktopQuery = window.matchMedia('(min-width: 680px)');

    function bindLightbox() {
        if (typeof Fancybox.unbind === 'function') {
            Fancybox.unbind('[data-fancybox]');
        }
        Fancybox.bind('[data-fancybox]', desktopLightboxOptions);
    }

    function enableCarousel() {
        if (carousel || !carouselEl || typeof Carousel === 'undefined') return;

        var plugins = {};
        if (typeof Lazyload !== 'undefined') plugins.Lazyload = Lazyload;
        if (typeof Arrows !== 'undefined') plugins.Arrows = Arrows;
        if (typeof Thumbs !== 'undefined') plugins.Thumbs = Thumbs;

        carousel = Carousel(carouselEl, {
            Thumbs: { type: 'modern' }
        }, plugins);
        carousel.init();
        bindLightbox();
    }

    function disableCarousel() {
        if (!carousel) return;
        carousel.destroy();
        carousel = null;
    }

    function syncLayout() {
        if (desktopQuery.matches) {
            enableCarousel();
        } else {
            disableCarousel();
        }
    }

    if (typeof desktopQuery.addEventListener === 'function') {
        desktopQuery.addEventListener('change', syncLayout);
    } else {
        desktopQuery.addListener(syncLayout);
    }

    syncLayout();
})();

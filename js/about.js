
// <!---------------------------------------- 定义展示示内容（HTML变量） ------------------------------------------>

const mobileHtml = `
    <section class="mobile-slider" id="slider-group">
        <div class="content">       
            <div class="img-slider">
                <img src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_2.png" />
                <img src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_3.png" />
                <img src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_4.png" />
                <img src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_5.png" />
                <img src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_6.png" />
                <img src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_7.png" />
                <img src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_8.png" />
                <img src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_9.png" />
                <img src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_10.png" />

                <img src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_11.png" />
                <img src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_12.png" />
                <img src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_13.png" />
                <img src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_14.png" />
                <img src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_15.png" />
                <img src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_16.png" />
                <img src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_17.png" />
                <img src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_18.png" />
                <img src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_19.png" />
                <img src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_20.png" />

                <img src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_21.png" />
                <img src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_22.png" />
                <img src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_23.png" />
                <img src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_24.png" />
                <img src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_25.png" />
                <img src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_26.png" />
                <img src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_27.png" />
                <img src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_28.png" />
                <img src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_29.png" />
                <img src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_30.png" />

                <img src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_31.png" />
                <img src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_32.png" />
                <img src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_33.png" />
                <img src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_34.png" />
                <img src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_35.png" />
                <img src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_36.png" />
                <img src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_37.png" />
                <img src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_38.png" />
                <img src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_39.png" />
                <img src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_40.png" />

                <img src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_41.png" />
                <img src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_42.png" />
                <img src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_43.png" />
                <img src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_44.png" />
                <img src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_45.png" />
                <img src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_46.png" />
                <img src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_47.png" />
                <img src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_48.png" />
                <img src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_49.png" />
                <img src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_50.png" />

                <img src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_51.png" />
                <img src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_52.png" />
                <img src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_53.png" />
                <img src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_54.png" />
                <img src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_55.png" />
            </div>
        </div>
    </section>
    `;

const desktopHtml = `
    <section class="desktop-slider">
        <div class="f-carousel" id="myCarousel">
            
            <div class="f-carousel__slide" 
                data-fancybox="gallery"
                data-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_2.png"
                data-thumb-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_2.png"
                >
            <img data-lazy-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_2.png"/>
            </div>

            <div class="f-carousel__slide" 
                data-fancybox="gallery"
                data-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_3.png"
                data-thumb-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_3.png"
                >
            <img data-lazy-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_3.png"/>
            </div>

            <div class="f-carousel__slide" 
                data-fancybox="gallery"
                data-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_4.png"
                data-thumb-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_4.png"
                >
            <img data-lazy-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_4.png"/>
            </div>

                <div class="f-carousel__slide" 
                data-fancybox="gallery"
                data-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_5.png"
                data-thumb-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_5.png"
                >
            <img data-lazy-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_5.png"/>
            </div>

                <div class="f-carousel__slide" 
                data-fancybox="gallery"
                data-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_6.png"
                data-thumb-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_6.png"
                >
            <img data-lazy-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_6.png"/>
            </div>

                <div class="f-carousel__slide" 
                data-fancybox="gallery"
                data-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_7.png"
                data-thumb-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_7.png"
                >
            <img data-lazy-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_7.png"/>
            </div>

                <div class="f-carousel__slide" 
                data-fancybox="gallery"
                data-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_8.png"
                data-thumb-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_8.png"
                >
            <img data-lazy-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_8.png"/>
            </div>

                <div class="f-carousel__slide" 
                data-fancybox="gallery"
                data-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_9.png"
                data-thumb-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_9.png"
                >
            <img data-lazy-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_9.png"/>
            </div>

                <div class="f-carousel__slide" 
                data-fancybox="gallery"
                data-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_10.png"
                data-thumb-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_10.png"
                >
            <img data-lazy-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_10.png"/>
            </div>

                <div class="f-carousel__slide" 
                data-fancybox="gallery"
                data-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_11.png"
                data-thumb-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_11.png"
                >
            <img data-lazy-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_11.png"/>
            </div>

                <div class="f-carousel__slide" 
                data-fancybox="gallery"
                data-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_12.png"
                data-thumb-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_12.png"
                >
            <img data-lazy-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_12.png"/>
            </div>

                <div class="f-carousel__slide" 
                data-fancybox="gallery"
                data-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_13.png"
                data-thumb-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_13.png"
                >
            <img data-lazy-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_13.png"/>
            </div>

                <div class="f-carousel__slide" 
                data-fancybox="gallery"
                data-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_14.png"
                data-thumb-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_14.png"
                >
            <img data-lazy-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_14.png"/>
            </div>

                <div class="f-carousel__slide" 
                data-fancybox="gallery"
                data-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_15.png"
                data-thumb-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_15.png"
                >
            <img data-lazy-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_15.png"/>
            </div>

                <div class="f-carousel__slide" 
                data-fancybox="gallery"
                data-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_16.png"
                data-thumb-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_16.png"
                >
            <img data-lazy-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_16.png"/>
            </div>


                <div class="f-carousel__slide" 
                data-fancybox="gallery"
                data-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_17.png"
                data-thumb-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_17.png"
                >
            <img data-lazy-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_17.png"/>
            </div>

                <div class="f-carousel__slide" 
                data-fancybox="gallery"
                data-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_18.png"
                data-thumb-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_18.png"
                >
            <img data-lazy-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_18.png"/>
            </div>

                <div class="f-carousel__slide" 
                data-fancybox="gallery"
                data-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_19.png"
                data-thumb-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_19.png"
                >
            <img data-lazy-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_19.png"/>
            </div>

                <div class="f-carousel__slide" 
                data-fancybox="gallery"
                data-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_20.png"
                data-thumb-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_20.png"
                >
            <img data-lazy-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_20.png"/>
            </div>

                <div class="f-carousel__slide" 
                data-fancybox="gallery"
                data-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_21.png"
                data-thumb-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_21.png"
                >
            <img data-lazy-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_21.png"/>
            </div>

                <div class="f-carousel__slide" 
                data-fancybox="gallery"
                data-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_22.png"
                data-thumb-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_22.png"
                >
            <img data-lazy-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_22.png"/>
            </div>

                <div class="f-carousel__slide" 
                data-fancybox="gallery"
                data-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_23.png"
                data-thumb-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_23.png"
                >
            <img data-lazy-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_23.png"/>
            </div>

                <div class="f-carousel__slide" 
                data-fancybox="gallery"
                data-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_24.png"
                data-thumb-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_24.png"
                >
            <img data-lazy-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_24.png"/>
            </div>

                <div class="f-carousel__slide" 
                data-fancybox="gallery"
                data-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_25.png"
                data-thumb-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_25.png"
                >
            <img data-lazy-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_25.png"/>
            </div>

                <div class="f-carousel__slide" 
                data-fancybox="gallery"
                data-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_26.png"
                data-thumb-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_26.png"
                >
            <img data-lazy-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_26.png"/>
            </div>

                <div class="f-carousel__slide" 
                data-fancybox="gallery"
                data-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_27.png"
                data-thumb-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_27.png"
                >
            <img data-lazy-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_27.png"/>
            </div>

                <div class="f-carousel__slide" 
                data-fancybox="gallery"
                data-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_28.png"
                data-thumb-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_28.png"
                >
            <img data-lazy-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_28.png"/>
            </div>

                <div class="f-carousel__slide" 
                data-fancybox="gallery"
                data-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_29.png"
                data-thumb-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_29.png"
                >
            <img data-lazy-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_29.png"/>
            </div>

                <div class="f-carousel__slide" 
                data-fancybox="gallery"
                data-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_30.png"
                data-thumb-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_30.png"
                >
            <img data-lazy-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_30.png"/>
            </div>

                <div class="f-carousel__slide" 
                data-fancybox="gallery"
                data-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_31.png"
                data-thumb-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_31.png"
                >
            <img data-lazy-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_31.png"/>
            </div>

                <div class="f-carousel__slide" 
                data-fancybox="gallery"
                data-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_32.png"
                data-thumb-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_32.png"
                >
            <img data-lazy-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_32.png"/>
            </div>

                <div class="f-carousel__slide" 
                data-fancybox="gallery"
                data-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_33.png"
                data-thumb-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_33.png"
                >
            <img data-lazy-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_33.png"/>
            </div>

                <div class="f-carousel__slide" 
                data-fancybox="gallery"
                data-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_34.png"
                data-thumb-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_34.png"
                >
            <img data-lazy-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_34.png"/>
            </div>

                <div class="f-carousel__slide" 
                data-fancybox="gallery"
                data-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_35.png"
                data-thumb-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_35.png"
                >
            <img data-lazy-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_35.png"/>
            </div>

                <div class="f-carousel__slide" 
                data-fancybox="gallery"
                data-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_36.png"
                data-thumb-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_36.png"
                >
            <img data-lazy-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_36.png"/>
            </div>

                <div class="f-carousel__slide" 
                data-fancybox="gallery"
                data-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_37.png"
                data-thumb-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_37.png"
                >
            <img data-lazy-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_37.png"/>
            </div>

                <div class="f-carousel__slide" 
                data-fancybox="gallery"
                data-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_38.png"
                data-thumb-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_38.png"
                >
            <img data-lazy-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_38.png"/>
            </div>

                <div class="f-carousel__slide" 
                data-fancybox="gallery"
                data-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_39.png"
                data-thumb-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_39.png"
                >
            <img data-lazy-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_39.png"/>
            </div>

                <div class="f-carousel__slide" 
                data-fancybox="gallery"
                data-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_40.png"
                data-thumb-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_40.png"
                >
            <img data-lazy-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_40.png"/>
            </div>

                <div class="f-carousel__slide" 
                data-fancybox="gallery"
                data-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_41.png"
                data-thumb-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_41.png"
                >
            <img data-lazy-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_41.png"/>
            </div>

                <div class="f-carousel__slide" 
                data-fancybox="gallery"
                data-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_42.png"
                data-thumb-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_42.png"
                >
            <img data-lazy-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_42.png"/>
            </div>

                <div class="f-carousel__slide" 
                data-fancybox="gallery"
                data-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_43.png"
                data-thumb-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_43.png"
                >
            <img data-lazy-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_43.png"/>
            </div>

                <div class="f-carousel__slide" 
                data-fancybox="gallery"
                data-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_44.png"
                data-thumb-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_44.png"
                >
            <img data-lazy-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_44.png"/>
            </div>

                <div class="f-carousel__slide" 
                data-fancybox="gallery"
                data-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_45.png"
                data-thumb-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_45.png"
                >
            <img data-lazy-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_45.png"/>
            </div>

                <div class="f-carousel__slide" 
                data-fancybox="gallery"
                data-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_46.png"
                data-thumb-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_46.png"
                >
            <img data-lazy-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_46.png"/>
            </div>

                <div class="f-carousel__slide" 
                data-fancybox="gallery"
                data-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_47.png"
                data-thumb-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_47.png"
                >
            <img data-lazy-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_47.png"/>
            </div>

                <div class="f-carousel__slide" 
                data-fancybox="gallery"
                data-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_48.png"
                data-thumb-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_48.png"
                >
            <img data-lazy-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_48.png"/>
            </div>

            <div class="f-carousel__slide" 
                data-fancybox="gallery"
                data-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_49.png"
                data-thumb-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_49.png"
                >
            <img data-lazy-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_49.png"/>
            </div>
            
            <div class="f-carousel__slide" 
                data-fancybox="gallery"
                data-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_50.png"
                data-thumb-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_50.png"
                >
            <img data-lazy-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_50.png"/>
            </div>
            
            <div class="f-carousel__slide" 
                data-fancybox="gallery"
                data-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_51.png"
                data-thumb-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_51.png"
                >
            <img data-lazy-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_51.png"/>
            </div>
            
            <div class="f-carousel__slide" 
                data-fancybox="gallery"
                data-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_52.png"
                data-thumb-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_52.png"
                >
            <img data-lazy-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_52.png"/>
            </div>
            
            <div class="f-carousel__slide" 
                data-fancybox="gallery"
                data-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_53.png"
                data-thumb-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_53.png"
                >
            <img data-lazy-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_53.png"/>
            </div>
            
            <div class="f-carousel__slide" 
                data-fancybox="gallery"
                data-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_54.png"
                data-thumb-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_54.png"
                >
            <img data-lazy-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_54.png"/>
            </div>
            
            <div class="f-carousel__slide" 
                data-fancybox="gallery"
                data-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_55.png"
                data-thumb-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_55.png"
                >
            <img data-lazy-src="https://gitee.com/yanngiki/resource/raw/master/img/about/page_55.png"/>
            </div>
            
    </div>

</section>
`;




// <!-------------------------------------------- 动态加载HTML内容 ------------------------------------->

// 状态管理
    const state = {
        desktopLoaded: false,    // 桌面内容加载状态
        mobileLoaded: false,     // 移动内容加载状态
    };

// 分辨率断点（768px）
const breakpoint = 720;

// 4. 内容创建函数
function createDesktopContent() {
    const div = document.createElement('div');
    div.className = 'desktop-content';
    div.innerHTML = desktopHtml;
    return div;
}

function createMobileContent() {
    const div = document.createElement('div');
    div.className = 'mobile-content';
    div.innerHTML = mobileHtml;
    return div;
}
// 5. 终端切换核心逻辑（内容+脚本）
async function loadDesktop() {
    const container = document.getElementById('dynamicContent');
    if (state.desktopLoaded) return;

    // 移除移动端内容
    if (state.mobileLoaded) {
        const mobileEl = document.querySelector('.mobile-content');
        if (mobileEl) container.removeChild(mobileEl);
        state.mobileLoaded = false;
    }

    // 加载桌面内容
    const desktopEl = createDesktopContent();
    container.appendChild(desktopEl);
    state.desktopLoaded = true;

}

async function loadMobile() {
    const container = document.getElementById('dynamicContent');
    if (state.mobileLoaded) return;

    // 移除桌面端内容
    if (state.desktopLoaded) {
        const desktopEl = document.querySelector('.desktop-content');
        if (desktopEl) container.removeChild(desktopEl);
        state.desktopLoaded = false;
    }

    // 加载移动端内容
    const mobileEl = createMobileContent();
    container.appendChild(mobileEl);
    state.mobileLoaded = true;
}
// 防抖函数：优化resize事件性能
function debounce(func, delay = 100) {
    let timer;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(this, args), delay);
    };
}
// 根据当前分辨率决定加载内容
function checkResolution() {
    const currentWidth = window.innerWidth;
    
    if (currentWidth > breakpoint) {
        loadDesktop();
    } else {
        loadMobile();
    }
}
// 初始化：页面加载时检查一次
checkResolution();
// 监听窗口大小变化，使用防抖避免频繁触发
window.addEventListener('resize', debounce(checkResolution));





// <-------------------------------------------- 动态加载CSS ------------------------------------------>
// 配置参数 - 根据实际需求修改
const cssConfig = {
  breakPoint: 720, // 分辨率断点(px)
  mobile: [
    // 移动端CSS列表（支持CDN和本地文件）
    'https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.css',
  ],
  desktop: [
    // 桌面端CSS列表
    'https://cdn.jsdelivr.net/npm/@fancyapps/ui@6.0/dist/fancybox/fancybox.css',
    'https://cdn.jsdelivr.net/npm/@fancyapps/ui@6.0/dist/carousel/carousel.css',
    // 'https://cdn.jsdelivr.net/npm/@fancyapps/ui@6.0/dist/carousel/carousel.lazyload.css',
    'https://cdn.jsdelivr.net/npm/@fancyapps/ui@6.0/dist/carousel/carousel.arrows.css',
    'https://cdn.jsdelivr.net/npm/@fancyapps/ui@6.0/dist/carousel/carousel.thumbs.css',
  ],
  linkPrefix: 'responsive-css-' // 动态link标签ID前缀
};

// 存储当前加载的CSS信息
let loadedStyles = {
  type: null, // 'mobile' 或 'desktop'
  elements: [] // 已加载的link元素数组
};

// 清理当前已加载的所有CSS
function cleanStyles() {
  if (!loadedStyles.type) return;

  // 移除DOM中所有已加载的link标签
  loadedStyles.elements.forEach(link => {
    if (link && link.parentNode) {
      link.parentNode.removeChild(link);
      console.log(`已移除样式: ${link.href}`);
    }
  });

  // 重置加载状态
  loadedStyles = {
    type: null,
    elements: []
  };
}

// 加载指定类型的CSS文件
// @param {string} type - 'mobile' 或 'desktop'
 
function loadStyles(type) {
  // 避免重复加载
  if (loadedStyles.type === type) {
    console.log(`${type}样式已加载，无需重复操作`);
    return;
  }

  // 清理旧样式
  cleanStyles();

  // 获取目标样式列表
  const stylesToLoad = cssConfig[type];
  if (!stylesToLoad || !stylesToLoad.length) {
    console.warn(`未配置${type}类型的样式文件`);
    return;
  }

  console.log(`开始加载${type}样式，共${stylesToLoad.length}个文件`);
  loadedStyles.type = type;

  // 依次加载所有CSS
  stylesToLoad.forEach((cssUrl, index) => {
    const link = document.createElement('link');
    link.id = `${cssConfig.linkPrefix}${type}-${index}`;
    link.rel = 'stylesheet';
    link.href = cssUrl;
    link.media = 'all'; // 应用于所有媒体类型

    // 加载状态监听
    link.onload = () => {
      console.log(`样式加载成功: ${cssUrl}`);
    };
    link.onerror = () => {
      console.error(`样式加载失败: ${cssUrl}`);
    };

    // 添加到head中（CSS通常放在head里）
    document.head.appendChild(link);
    loadedStyles.elements.push(link);
  });
}

/**
 * 根据当前分辨率加载合适的样式
 */
function loadAppropriateStyles() {
  const isMobile = window.innerWidth < cssConfig.breakPoint;
  loadStyles(isMobile ? 'mobile' : 'desktop');
}

// 初始化加载
window.addEventListener('load', loadAppropriateStyles);

// 监听窗口大小变化（带防抖）
let resizeTimer = null;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    loadAppropriateStyles();
  }, 100); // 300ms防抖延迟
});



// <!------------------------------------------- 动态加载js文件 ------------------------------------------------>
// 配置参数 - 根据实际需求修改
const scriptConfig = {
breakPoint: 720, // 分辨率断点(px)
mobile: [
    // 移动端需要加载的脚本列表
    'https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.umd.js', 
    '/js/fancybox-v5-mobile.js'
],
desktop: [
    // 桌面端需要加载的脚本列表
    'https://cdn.jsdelivr.net/npm/@fancyapps/ui@6.0/dist/fancybox/fancybox.umd.js', 
    'https://cdn.jsdelivr.net/npm/@fancyapps/ui@6.0/dist/carousel/carousel.umd.js',
    'https://cdn.jsdelivr.net/npm/@fancyapps/ui@6.0/dist/carousel/carousel.lazyload.umd.js',
    'https://cdn.jsdelivr.net/npm/@fancyapps/ui@6.0/dist/carousel/carousel.arrows.umd.js',
    'https://cdn.jsdelivr.net/npm/@fancyapps/ui@6.0/dist/carousel/carousel.thumbs.umd.js',
    '/js/fancybox-v6.js'
],
scriptPrefix: 'dynamic-script-' // 动态脚本ID前缀
};



// 存储当前已加载的脚本信息
let loadedScripts = {
type: null, // 'mobile' 或 'desktop'
elements: [] // 已加载的script元素数组
};


//  * 清理指定类型的所有脚本
//  * @param {string} type - 要清理的类型 'mobile' 或 'desktop'

function cleanScripts(type) {
// 1. 移除DOM中的脚本元素
loadedScripts.elements.forEach(script => {
    if (script && script.parentNode) {
    script.parentNode.removeChild(script);
    console.log(`已移除脚本: ${script.src}`);
    }
});

// 2. 清理脚本可能留下的全局变量和事件监听
// 这里可以根据实际脚本添加清理逻辑
// 建议每个脚本提供一个清理函数，如：
if (type === 'mobile') {
    if (window.mobileUtil && typeof window.mobileUtil.cleanup === 'function') {
    window.mobileUtil.cleanup();
    }
    // 清理其他移动端全局变量
    delete window.mobilePlugin;
} else if (type === 'desktop') {
    if (window.desktopCore && typeof window.desktopCore.destroy === 'function') {
    window.desktopCore.destroy();
    }
    // 清理其他桌面端全局变量
    delete window.chartRenderer;
}

// 3. 重置已加载脚本信息
loadedScripts = {
    type: null,
    elements: []
};
}


//  * 加载指定类型的所有脚本
//  * @param {string} type - 要加载的类型 'mobile' 或 'desktop'

function loadScripts(type) {
// 如果要加载的类型与当前已加载的相同，则不执行任何操作
if (loadedScripts.type === type) {
    console.log(`${type}脚本已加载，无需重复加载`);
    return;
}

// 清理当前已加载的脚本
if (loadedScripts.type) {
    cleanScripts(loadedScripts.type);
}

// 获取要加载的脚本列表
const scriptsToLoad = scriptConfig[type];
if (!scriptsToLoad || !scriptsToLoad.length) {
    console.warn(`没有配置${type}类型的脚本`);
    return;
}

console.log(`开始加载${type}类型脚本，共${scriptsToLoad.length}个`);

// 记录当前加载的类型
loadedScripts.type = type;

// 依次加载所有脚本
scriptsToLoad.forEach((scriptUrl, index) => {
    const script = document.createElement('script');
    script.id = `${scriptConfig.scriptPrefix}${type}-${index}`;
    script.src = scriptUrl;
    script.type = 'text/javascript';
    script.async = false; // 按顺序加载执行

    // 加载成功回调
    script.onload = () => {
    console.log(`脚本加载成功: ${scriptUrl}`);
    };

    // 加载失败回调
    script.onerror = () => {
    console.error(`脚本加载失败: ${scriptUrl}`);
    };

    // 将脚本添加到body末尾
    document.body.appendChild(script);
    // const paperMain = document.getElementsByClassName('paper-main')[0];
    // paperMain.appendChild(script);

    // 记录已加载的脚本元素
    loadedScripts.elements.push(script);
});
}

/**
 * 根据当前窗口宽度判断应该加载哪种类型的脚本
 */
function loadAppropriateScripts() {
const isMobile = window.innerWidth < scriptConfig.breakPoint;
loadScripts(isMobile ? 'mobile' : 'desktop');
}

// 页面加载完成后初始化
window.addEventListener('load', loadAppropriateScripts);

// 监听窗口大小变化，添加防抖处理
let resizeDebounceTimer = null;
window.addEventListener('resize', () => {
clearTimeout(resizeDebounceTimer);
// 窗口大小稳定300ms后再执行
resizeDebounceTimer = setTimeout(() => {
    loadAppropriateScripts();
}, 100);
});
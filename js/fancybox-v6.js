Carousel(document.getElementById("myCarousel"), {
      Thumbs: {
            type: "modern"
          },
    }, {
      Lazyload,
      Arrows,
      Thumbs
    }).init();

    Fancybox.bind("[data-fancybox]", {
      theme: "dark",
      Carousel: {
        Toolbar: {
          display: {
            left: ["counter"],
            middle: [
              // "zoomIn",
              // "zoomOut",
              "toggle1to1",
              "thumbs",
            ],
            right: ["close"],
          },
        },
        // Thumbs: false,
        // Thumbs: {
        //     type: "modern"
        //   },
        Thumbs: {
          showOnStart: false,
        }, 
    },
    });
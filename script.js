$('.slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 3,
    dots:2,
    arrows:false,
    autoplay: false,
    autoplaySpeed: 1000,

   
    responsive: [
      
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite:true
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          
        }
      },
    ]

  });

  
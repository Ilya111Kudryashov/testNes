
$(document).ready(function(){
  $('#menu-btn').click(function(){
    $(this).toggleClass('fa-times');
    $('.navbar').toggleClass('active')
  })


  $(window).on('scroll',function(){
    if($(window).scrollTop()>0){
      $('.header').addClass('active')
    }else{
      
      $('.header').removeClass('active')
    }
  })


  let typed=new Typed(('.typing-text'),{
    strings:['Web Developer',
      'Photographer',
      'Web Disigner',
      'Marketer',
      'YouTuber',
      'Gamer'
    ],
    typeSpeed:120,
    loop:true,
  })


  $('.button').click(function(){
    let filter=$(this).attr('data-filter');
    if(filter=='all'){
      $('.gallery-container .img').show(400)
    }else{
      $('.gallery-container .img').not('.'+filter).hide(200);
      $('.gallery-container .img').filter('.'+filter).show(400)
    }
  })

  $('.gallery-container').magnificPopup({
    delegate:'a',
    type:'image',
    gallery:{
      enabled:true,
    },
  })


  let swiper=new Swiper('.review-slider',{
    spaceBetween:20,
    loop:true,
    autoplay:{
      delay:3000,
      disableOnInteraction:false,
    },
    breakpoints:{
      0:{
        slidesPerView:1,
      },
      768:{
        slidesPerView:2,
      },
      1024:{
        slidesPerView:3,
      },
    }
  })



  let swiper1=new Swiper('.blog-slider',{
    spaceBetween:20,
    loop:true,
    autoplay:{
      delay:3000,
      disableOnInteraction:false,
    },
    breakpoints:{
      0:{
        slidesPerView:1,
      },
      768:{
        slidesPerView:2,
      },
      1024:{
        slidesPerView:3,
      },
    }
  })



  $(window).on('scroll',function(){
    $('.scroll-top').toggleClass('show',$(window).scrollTop()>=100)
  })


  $('.scroll-top').on('click',function(){
    $('html,body').stop().animate({scrollTop:0},1500)
  })


  let path=document.querySelector('.scroll-top path');
  let lengthPath=path.getTotalLength();
  path.style.strokeDasharray=lengthPath+' '+lengthPath;
  path.style.strokeDashoffset=lengthPath;
  path.getBoundingClientRect();
  path.style.transition=path.style.WebkitTransition='stroke-dashoffset 10ms linear';

  function updateScrolltop(){
    let offset=$(document).height()-$(window).height();
    path.style.strokeDashoffset=lengthPath-($(window).scrollTop()*lengthPath)/offset
  }

  updateScrolltop()
  $(window).scroll(updateScrolltop);



  let sections=$('section');
  $(window).on('scroll',function(){
    sections.each(function(){
      let top=$(window).scrollTop();
      let offset=$(this).offset().top-200;
      let id=$(this).attr('id');
      let height=$(this).height();
      if(top>=offset && top<offset+height){
        $('.navbar a').removeClass('active');
        $('.navbar').find(`[href="#${id}"]`).addClass('active')
      }
    })
  })


})
//header scroll nav 
let lastScroll = 0;

$(window).scroll(function () { 
  curr = $(this).scrollTop();

  if(curr == 0){
    $('#header').removeClass('white');
  }
  if(curr >= 50){
    $('#header').addClass('white');
    if (curr > lastScroll) {
      $('#header').addClass('hide');
      $('.sc-benefitprice .group-tabmenu').removeClass('up');
      $('.sc-category .group-tabmenu').removeClass('up');
    } else {
      $('#header').removeClass('hide');
      $('.sc-benefitprice .group-tabmenu').addClass('up');
      $('.sc-category .group-tabmenu').addClass('up');
    }
  }
  
  lastScroll = curr;
});
//header nav swiper slide
const headerNav = new Swiper('#header .nav-area .swiper',{
  slidesPerView : 'auto',
  spaceBetween: 8,
  freeMode: true,
});

// sc-visual swiper slide
const visualSlide = new Swiper('.sc-visual .swiper',{
  loop:true,
  initialSlide: 3,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },		
  pagination:{
    el:".sc-visual .swiper-control .swiper-pagination",
    dynamicBullets: true,
  },
});

// sc-nav swiper slide
const navSlide = new Swiper('.sc-nav .swiper',{
  slidesPerView: 'auto',
  grid: {
    rows: 2, 
    fill: 'row',
  },
  spaceBetween: 12,
});

// sc-benefit swiper slide
const benefitSlide = new Swiper('.sc-benefit .swiper',{
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },		
  slidesPerView : 'auto',  
  pagination: {
    el: ".sc-benefit .swiper-control .scrollY",
    type: "progressbar",
  },
  on:{
    "init":function(){
      $('.sc-benefit .swiper .total').text(this.slides.length);
      desc = $(this.slides[this.activeIndex]).find('img').attr('alt');
      $('.sc-benefit .swiper .curr').text(desc);
    },
    "slideChange":function(){
      desc = $(this.slides[this.activeIndex]).find('img').attr('alt');
      $('.sc-benefit .swiper .curr').text(this.realIndex+1);
      $('.sc-benefit .swiper .desc').text(desc);
    }
  }
})
// sc-benefit swiper pause btn
$('.sc-benefit .swiper .btn').on('click',function(){
  $(this).toggleClass('pause');

  if($(this).hasClass('pause')){
    benefitSlide.autoplay.stop();
  } else {
    benefitSlide.autoplay.start();
  }
})

// sc-rightnow swiper slide
const rightnowSlide = new Swiper('.sc-rightnow .swiper',{
  slidesPerView : 'auto'
});
// sc-rightnow text swiper-slide
const rnTextSlide = new Swiper('.sc-rightnow .txt-view.swiper-container',{
  direction: 'vertical',
  loop: true, 
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  }
});

// sc-liveshow swiper slide
const liveshowSlide = new Swiper('.sc-liveshow .swiper',{
  slidesPerView : 'auto'
});

// sc-record swiper slide
const recordSlide = new Swiper('.sc-record .swiper',{
  slidesPerView : 'auto',
  spaceBetween: 12,
  grid: {
    rows: 2,
  }
});

// sc-specialprice text swiper-slide
const spTextSlide = new Swiper('.sc-specialprice .txt-view.swiper-container',{
  direction: 'vertical',
  loop: true, 
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  }
});

// sc-livebest swiper slide
const livebestSlide = new Swiper('.sc-livebest .swiper',{
  slidesPerView : 'auto'
});

// sc-ad 
$(window).on('scroll', function () {
  const scrollPosition = $(window).scrollTop(); 
  const scAd = $('.sc-ad');

  if (scAd.length) { 
    const scAdTop = scAd.offset().top;
    const windowHeight = $(window).height();

    if (scrollPosition + windowHeight >= scAdTop) {
      $('.sc-ad .group-ad').addClass('on'); 
    }
  }
});

// sc-card swiper slide
const cardSlide = new Swiper('.sc-card .swiper',{
  slidesPerView : 'auto'
});

// sc-relate tab menu
$('.sc-relate .group-tabmenu .tabmenu').click(function (e) { 
  e.preventDefault();
  tabName = $(this).data('tab');
 
  $('.sc-relate .group-tabmenu .tabmenu').removeClass('active');
  $(this).addClass('active');
  
  $('.sc-relate .group-tabcontent .con').removeClass('active');
  $(tabName).addClass('active');
});
// sc-relate swiper slide
const relateSlide = new Swiper('.sc-relate .group-tabmenu .swiper',{
  slidesPerView : 'auto',
  loop: false,
  loopAdditionalSlides :1
});
// sc-relate swiper slide
const relateConSlide = new Swiper('.sc-relate .group-tabcontent .swiper',{
  slidesPerView : 'auto',
  spaceBetween: 12,
  grid: {
    rows: 2,
  }
});

// sc-livenotice swiper slide
const livenoticeSlide = new Swiper('.sc-livenotice .swiper',{
  slidesPerView : 'auto',  
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },		
  pagination: {
    el: ".sc-livenotice .swiper-control .scrollY",
    type: "progressbar",
  },
  on:{
    "init":function(){
      $('.sc-livenotice .swiper .total').text(this.slides.length);
      desc = $(this.slides[this.activeIndex]).find('img').attr('alt');
      $('.sc-livenotice .swiper .curr').text(desc);
    },
    "slideChange":function(){
      desc = $(this.slides[this.activeIndex]).find('img').attr('alt');
      $('.sc-livenotice .swiper .curr').text(this.realIndex+1);
      $('.sc-livenotice .swiper .desc').text(desc);
    }
  }
})
// sc-livenotice swiper slide pause btn
$('.sc-livenotice .swiper .btn').on('click',function(){
  $(this).toggleClass('pause');

  if($(this).hasClass('pause')){
    livenotice.autoplay.stop();
  } else {
    livenotice.autoplay.start();
  }
})

// sc-program tabmenu
$('.sc-program .group-tabmenu .tabmenu').click(function (e) { 
  e.preventDefault();

  tabName = $(this).data('tab');

  $('.sc-program .group-tabcontent .con').removeClass('active');
  $(tabName).addClass('active');

  $('.sc-program .group-tabmenu .tabmenu').removeClass('active');
  $(this).addClass('active');
});
// sc-program swiper slide
const programSlide = new Swiper('.sc-program .swiper',{
  slidesPerView : 'auto'
});

// sc-shoppingoffer tabmenu
$('.sc-shoppingoffer .group-tabmenu .tabmenu').click(function (e) { 
  e.preventDefault();

  tabName = $(this).data('tab');

  $('.sc-shoppingoffer .group-tabcontent .con').removeClass('active');
  $(tabName).addClass('active');

  $('.sc-shoppingoffer .group-tabmenu .tabmenu').removeClass('active');
  $(this).addClass('active');
});
// sc-shoppingoffer swiper slide
const shoppingofferSlide = new Swiper('.sc-shoppingoffer .swiper',{
  slidesPerView : 'auto',
});

// sc-benefitprice tabmenu click active
$('.sc-benefitprice .group-tabmenu .tabmenu').click(function () { 

  $('.sc-benefitprice .group-tabmenu .tabmenu').removeClass('active');
  $(this).addClass('active');
});
// sc-benefitprice tabmenu scroll active
const tabMenus = $('.sc-benefitprice .group-tabmenu .tabmenu'); 
const tabContents = $('.sc-benefitprice .group-tabcontent .con'); 

$(window).on('scroll', function () {
  const scrollPosition = $(window).scrollTop(); 
  
  tabContents.each(function () {
    const sectionTop = $(this).offset().top; 
    const sectionHeight = $(this).outerHeight(); 

    if (scrollPosition >= sectionTop - 50 && scrollPosition < sectionTop + sectionHeight - 50) {
      const targetId = $(this).attr('id'); 
      const targetMenu = $(`.sc-benefitprice .group-tabmenu .tabmenu[href="#${targetId}"]`);

      tabMenus.removeClass('active');
      targetMenu.addClass('active');
    }
  });
});

// sc-bestproduct tabmenu
$('.sc-bestproduct .group-tabmenu .tabmenu').click(function (e) { 
  e.preventDefault();

  tabName = $(this).data('tab');

  $('.sc-bestproduct .group-tabcontent .con').removeClass('active');
  $(tabName).addClass('active');

  $('.sc-bestproduct .group-tabmenu .tabmenu').removeClass('active');
  $(this).addClass('active');
});
// sc-bestproduct swiper slide
const bestproductSlide = new Swiper('.sc-bestproduct .group-tabmenu .swiper',{
  slidesPerView : 'auto',
});
const bpConSlide = new Swiper('.sc-bestproduct .group-tabcontent .swiper',{
  slidesPerView : 'auto',
  spaceBetween: 12,
  grid: {
    rows: 2,
  },
});

// sc-lifestyle tabmenu
$('.sc-lifestyle .group-tabmenu .tabmenu').click(function (e) { 
  e.preventDefault();

  tabName = $(this).data('tab');

  $('.sc-lifestyle .group-tabcontent .con').removeClass('active');
  $(tabName).addClass('active');

  $('.sc-lifestyle .group-tabmenu .tabmenu').removeClass('active');
  $(this).addClass('active');
});
// sc-lifestyle swiper slide
const lifestyleSlide = new Swiper('.sc-lifestyle .swiper',{
  slidesPerView : 'auto',
});

// sc-category swiper slide
const categorySlide = new Swiper('.sc-category .swiper',{
  slidesPerView : 'auto',
  spaceBetween: 12,
});
// sc-category tabmenu click active
$('.sc-category .group-tabmenu .tabmenu').click(function () { 

  $('.sc-category .group-tabmenu .tabmenu').removeClass('active');
  $(this).addClass('active');
});
// sc-category tabmenu scroll active
const tabMenus2 = $('.sc-category .group-tabmenu .tabmenu'); 
const tabContents2 = $('.sc-category .group-tabcontent .con'); 

$(window).on('scroll', function () {
  const scrollPosition = $(window).scrollTop(); 
  
  tabContents2.each(function () {
    const sectionTop = $(this).offset().top; 
    const sectionHeight = $(this).outerHeight(); 

    if (scrollPosition >= sectionTop - 50 && scrollPosition < sectionTop + sectionHeight - 50) {
      const targetId = $(this).attr('id'); 
      const targetMenu = $(`.sc-category .group-tabmenu .tabmenu[href="#${targetId}"]`);

      tabMenus2.removeClass('active');
      targetMenu.addClass('active');
    }
  });
});

// aside btntop scroll
$('.btntop-inner').click(function () { 
  window.scrollTo({top:0,behavior:"smooth"}) 
});

// popup swiper slide
const popupSlide = new Swiper('.popupSlide-wrap .popupSlide .swiper',{
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },		
  on:{
    "init":function(){
      $('.popupSlide .swiper .total').text(this.slides.length);
      desc = $(this.slides[this.activeIndex]).find('img').attr('alt');
      $('.popupSlide .swiper .curr').text(desc);
    },
    "slideChange":function(){
      desc = $(this.slides[this.activeIndex]).find('img').attr('alt');
      $('.popupSlide .swiper .curr').text(this.realIndex+1);
      $('.popupSlide .swiper .desc').text(desc);
    }
  }
});
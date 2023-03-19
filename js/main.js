//연결확인용
//alert('a');

$(function(){
  //alert('a');


/////////////////////변수모음////////////////////
  //고정gnb
  var $window = $(window);
  var $gnb = $('#gnb');
  var $hot = $gnb.offset().top;

  //헤드배너
  var $headBanner = $('.headBanner');
  var $headBannerImage = $headBanner.find('>.wrapper>div');
  var $headBannerClose = $headBannerImage.find('>div:nth-child(2)');

  //검색창
  var $search = $('.search');
  var $defaultTextSrh = $search.val();

  //어사이드
  var $aside = $('#aside');
  var $asideBtn = $('#header').find('>#gnb>.wrapper>div:nth-child(1)');
  var $asideClose = $aside.find('>div:nth-child(1)');

  //따르릉뉴스 색차오르는 기능
  var $newsBox = $('#content1').find('>.wrapper>div>div');

  //탭기능
  var $tabList = $('#tabs-nav');
  var $tabAnchor = $tabList.find('a');

  //로그인
  var $id = $('.uid');
  var $defaultTextId = $id.val();
  //alert($defaultTextId);
  var $pw = $('.upw');
  var $defaultTextPw = $pw.val();
  //alert($defaultTextPw);

  var $submit = $('input[type="button"]');


  //탑버튼
  var $topBtn = $('.topBtn');

  /////////////////////////////////////////////////////

  $window.on('scroll',function(){
    //alert('a');
    if($window.scrollTop() >= $hot){
      $gnb.addClass('sticky');
    }else{
      $gnb.removeClass('sticky');
    }
  });


  //대여소 검색창 input
  $search.addClass('grayText');

  $search.on('focus',function(){
    //alert('a');
    if($search.val() == $defaultTextSrh){
      $search.val('');
      $search.removeClass('grayText');
    }
  }).on('blur',function(){
    //alert('a');
    if($search.val() == ''){
      $search.val($defaultTextSrh);
      $search.addClass('grayText');
    }else{
    $search.removeClass('grayText');
    }
  });



  //어사이드
  var $aside = $('#aside');
  var $gnbBtn = $('#header').find('>#gnb>.wrapper>div:nth-child(1)');
  var $asideClose = $aside.find('>div:nth-child(1)');


  //햄버거버튼 클릭시 어사이드가 나오는기능
  $aside.addClass('open');

  $gnbBtn.on('click',function(){
    //alert('a');
    if($aside.hasClass('open')){
      $aside.stop().animate({
      'right':'0'
    },500,'easeOutCubic');
      $gnbBtn.find('i').attr('class','fa fa-times');
      $aside.removeClass('open');
    }else{
      $aside.stop().animate({
        'right':'-500px'
      },500,'easeInOutQuad');
      $gnbBtn.find('i').attr('class','fa fa-bars');
      $aside.addClass('open');
    }
  });

//어사이드 내 x버튼 클릭시 닫히는기능
  $asideClose.on('click',function(){
    //alert('a');
    $aside.stop().animate({
      'right':'-500px'
    },500,'easeInOutQuad');
    $gnbBtn.find('i').attr('class','fa fa-bars');
    $aside.addClass('open');

    $gnbMenu.next('ul').css({'padding-top':'0px'}).stop().animate({
      height:0
    },200,'linear');
    $gnbMenu.next('ul').find('>li').css({'display':'none'});

  });


//헤드배너 내 x버튼 클릭시 닫히는기능
 $headBannerClose.on('click',function(){
   //alert('a');
   $headBannerImage.stop().animate({
     'top':'-50px'
   },200,'linear');
   $headBanner.stop().animate({
     'height':'0px'
   },200,'linear');
 });

 //어사이드
  var $aside = $('#aside');
  var $gnbMenu = $aside.find('div>ul>li>a');
  var $gnbMenu1 = $aside.find('div>ul>li').eq(0).find('>a');
  var $gnbMenu2 = $aside.find('div>ul>li').eq(1).find('>a');


 //aside 네비에 메뉴 클릭시 하위메뉴 나타남

 $gnbMenu.addClass('gnbOpen');//초기값

 $gnbMenu.on('click',function(){
   //alert('a');
   if($(this).hasClass('gnbOpen')){
   $(this).next('ul').css({'padding-top':'20px'}).stop().animate({
     height:100
   },200,'linear');
   $(this).next('ul').find('>li').css({'display':'block'});

   $(this).removeClass('gnbOpen'); //클래스제거해줌
 }else{
   $(this).next('ul').css({'padding-top':'0px'}).stop().animate({
     height:0
   },200,'linear');
   $(this).next('ul').find('>li').css({'display':'none'});
   $(this).addClass('gnbOpen');
 }

 $gnbMenu.not($(this)).next('ul').css({'padding-top':'0px'}).stop().animate({
   height:0
 },200,'linear');
 $gnbMenu.not($(this)).next('ul').find('>li').css({'display':'none'});

  });

 // var $aside = $('#aside');
 // var $gnbMenu = $aside.find('div>ul>li>a');
 // var $gnbMenu1 = $aside.find('div>ul>li').eq(0).find('>a');
 // var $gnbMenu2 = $aside.find('div>ul>li').eq(1).find('>a');
 //
 //
 // $gnbMenu1.on('click',function(){
 //   //alert('a');
 //   if($gnbMenu2.next('ul').height() == 100){
 //     $gnbMenu2.next('ul').css({'padding-top':'0px'}).stop().animate({
 //       height:0
 //     },200,'linear');
 //     $gnbMenu2.next('ul').find('>li').css({'display':'none'});
 //   }
 // });
 //
 // $gnbMenu2.on('click',function(){
 //   //alert('a');
 //   if($gnbMenu1.next('ul').height() == 100){
 //     $gnbMenu1.next('ul').css({'padding-top':'0px'}).stop().animate({
 //       height:0
 //     },200,'linear');
 //     $gnbMenu1.next('ul').find('>li').css({'display':'none'});
 //   }
 // });
 //





 //아이디입력박스
 //초기값
 $id.addClass('grayText'); //일단 클래스 넣고 시작

   $id.on('focus',function(){ //포커스 하면
     //alert('아이디a');
   if($id.val() == $defaultTextId){ //아디입력하세요 없앰
     $id.val('');
   }
   $id.removeClass('grayText'); //회색글씨x 검은글씨
   $id.addClass('border'); //검은색 테두리 줌
 }).on('blur',function(){
   //alert('아이디b');
   if($id.val() == ''){ //블러인상태에서 빈문자열이면
     $id.val($defaultTextId); //아디입력하세요 추가
     $id.addClass('grayText');
   }
   $id.removeClass('border');
 });


//비밀번호입력박스
//초기값
$pw.addClass('grayText');
$pw.attr('type','text'); //입력전 텍스트로 속성 바꿔놓음

$pw.on('focus',function(){
 //alert('비번1');
 if($pw.val() == $defaultTextPw){
   $pw.val('');
 }
 $pw.attr('type','password'); //포커스하면 비번 암호로 바꾸고
 $pw.removeClass('grayText');
 $pw.addClass('border');
}).on('blur',function(){ //블러했을때
 //alert('비번2');
 if($pw.val() == ''){ //비번창에 아무것도 없으면
   $pw.val($defaultTextPw);
   $pw.attr('type','text'); //다시 비번입력하세요 텍스트로 바꿈
   $pw.addClass('grayText');
 }else if(!$pw.val() == $defaultTextPw){
   $pw.removeClass('grayText');
 }
 $pw.removeClass('border');
});



$submit.on('click',function(){
 //alert('a');
 if($id.val() == $defaultTextId){
   alert('아이디를 입력해주세요 :)');
   $id.focus();
 }else if($pw.val() == $defaultTextPw){
   alert('비밀번호를 입력해주세요 :)');
   $pw.focus();
 }else{
   alert('로그인이 완료되었습니다.\n환영합니다 :)');
   $id.val($defaultTextId);
   $id.addClass('grayText');
   $pw.val($defaultTextPw);
   $pw.addClass('grayText');
   $pw.attr('type','text');
 }
});




//따르릉뉴스 마우스오버시 색 차오르는 기능
$newsBox.on('mouseover',function(){
  //alert('a');
  $(this).find('.bg').stop().animate({
    'width':'600px',
    'height':'600px'
  },200,'linear');
}).on('mouseout',function(){
  //alert('a');
  $(this).find('.bg').stop().animate({
    'width':'0',
    'height':'0'
  },200,'linear');
});


//탑버튼+스크롤바
var $topBtn = $('.topBtn');

$topBtn.on('click',function(){
  //alert('a');
  $('html,body').stop().animate({
    scrollTop:'0'
  },300,'linear');
});


var $scrollBar = $('.scroll_bar');
var $doc_ht = $(document).height(); //100%
var $con5ot = $('#content5').offset().top;
var $fot = $('#footer').offset().top; //23213
var $per = 250/parseInt($fot); //0.0107...
var $scrollTxt = $topBtn.find('div:nth-child(1)');
var $topbar = $('#top').find('.wrapper>div>div').eq(0);
var $topbar_ht = $topbar.height();
var $move = parseInt($topbar_ht)/parseInt($doc_ht);


//alert($doc_ht);

//alert($topbar_ht/$doc_ht);

//alert($scrollTxt);

//alert($fot);
//alert(250/parseInt($fot)); //0.0107...



$(window).on('ready',function(){


  $topBtn.css({
    'top':$scroll*($move*3.4)
    //0.035
  });
  $scrollBar.css({
    'height':$topBtn.position().top
  });

});





$(window).on('scroll',function(){
  //alert('a');
  var $scroll = $window.scrollTop();

  //alert($scroll);

  $topBtn.css({
    'top':$scroll*($move*3.4)
    //0.035
  });

//텍스트 변경
  if($scroll > $con5ot){
    $scrollTxt.text('go top');
  }else{
    $scrollTxt.text('scroll');
  }

//스크롤바 차오르는 기능
  $scrollBar.css({
    'height':$topBtn.position().top
  });

});


$(window).on('resize',function(){

var $doc_ht_now = $(document).height(); //100%
var $move2 = $topbar_ht/$doc_ht_now;

  $topBtn.css({
    'top':$scroll*($move2*3.4)
    //0.035
  });
  $scrollBar.css({
    'height':$topBtn.position().top
  });


});









//탭기능
$tabList.on('click','a',function(e){ //탭버튼에 클릭했을때
  //alert('a');

  //a태그 초기화
  e.preventDefault();

  if($(this).hasClass('active')){
    return; //한번 눌리면 또 안되게 반환해줌
  }

  $tabAnchor.removeClass('active'); //a태그에 active클래스 삭제
  $(this).addClass('active'); //탭버튼에는 active클래스 추가

  $('.tabs-panel').hide(); //콘텐츠는 안보여

  var $work = $(this).attr('href');
  //alert($work);
  $($work).fadeIn(300);
});














//팝업창 닫히는거

var $popup = $('#popup');
var $popupClose = $popup.find('div:nth-child(3)>');


$popupClose.on('click',function(){
  //alert('a');
  $popup.css({'display':'none'});
});




//슬라이더 플러그인 bxSlider
$mainSlider = $('.bxslider').bxSlider({
  mode:'horizontal',
  auto:true,
  speed:1000,
  pause:4000,
  // nextText:'',
  // prevText:'',
  nextText: '<i class="fa fa-angle-right"></i>',
  prevText: '<i class="fa fa-angle-left"></i>'
});

$('#slider').on('mouseover',function(){
  $mainSlider.stopAuto();
}).on('mouseout',function(){
  $mainSlider.startAuto();
});


//bxSlider에 pager버튼 i 태그로 변경하기

// var $pagerPrev = $('<div><i class="fa fa-angle-left"></i></div>');//<
// var $pagerNext = $('<div><i class="fa fa-angle-right"></i></div>'); //>
//
// var $bxPrev = $('.bx-prev');
// var $bxNext = $('.bx-next');
//
//
// //A.append(B) a에 b를 삽입
// $bxPrev.append($pagerPrev);
// $bxNext.append($pagerNext);

// 2021-01-06 i태그 삽입하려는 흔적
//근데 그냥 bxSlider옵션에다가 바로 넣으면 됨..



//인스타 슬라이드
$('.insta_bxslider').bxSlider({
  ticker:true,
  slideWidth:2000,
  minSlides:8,
  maxSlides:8,
  speed:20000,
  tickerHover:true,
  useCSS:false
});




//움직이는 자전거
// var $con1ot = parseInt($('#content1').offset().top);
// //alert($con1ot); //4576
// var $con1ht = $('#content1').height();
// //alert($con1ht); //400
// var $start = $con1ot+$con1ht;
// //alert($start); //4976
//
// var $con6ot = parseInt($('#content6').offset().top);
// //alert($con6ot); //5426
// var $con6ht = $('#content6').height();
// //alert($con6ht); //700

// $window.on('scroll',function(){
//   var $scroll = $window.scrollTop(); //계속 변함
//   var $ht = $window.height(); //윈도우창의 높이
//   //alert($ht); //937
//   var $nowScroll = $scroll-$ht; //현재 스크롤의 위치
//   //alert($nowScroll); //4977=> 계속 바뀜
//
//
//   //콘텐츠1의 맨 끝이 offsettop일때로 할거임
//   if($scroll >= 5200){
//     //alert('go');
//     $('.bicycle').stop().animate({//오른쪽으로 900px이동할거임
//       right:900
//     },3000,'linear');
//   }else {
//     $('.bicycle').stop().animate({
//       right:0
//     },3000,'linear');
//   }
//   //$go = $updateGo;
// }); 2021-01-06 실패 -> 마우스휠로 성공1/7




//////////////////
//마우스 휠 움직일때 움직이는 자전거

// //var $bot = parseInt($('.bicycle').offset().top);
// //alert($bot); //6030
// var $bicycle = $('.bicycle');
// var $currentPosition = 0;
//
// $('#content6').on('mousewheel',function(event,delta){
//   //alert('a');
//
//   //alert(delta);
//   if(delta < 0){ //밑으로 내릴때 -
//   //  alert('a');
//     $bicycle.stop().animate({
//       right:$currentPosition+150
//     },300,'linear');
//     $currentPosition = $currentPosition+150;
//
//   }else if(delta > 0){//위로 올릴때 +
//     $bicycle.stop().animate({
//       right:$currentPosition-150
//     },300,'linear');
//     $currentPosition = $currentPosition-150;
//   }
//
// });//mousewheel닫기

//자전거 애니메이션
var $bicycle = $('.bicycle');

$('#content6').on('click',function(){
  //alert('a');
  $bicycle.stop().animate({
    top:180,
    right:-150
  },300,'linear',function(){
    $bicycle.stop().animate({
      top:200,
      right:-90
    },300,'linear',function(){
    $bicycle.stop().animate({
      top:250,
      right:-50
    },300,'linear',function(){
      $bicycle.stop().animate({
        top:320,
        right:50
      },300,'linear',function(){
        $bicycle.stop().animate({
          top:370,
          right:80
    },300,'linear',function(){
      $bicycle.stop().animate({
        top:400,
        right:100
    },300,'linear',function(){
      $bicycle.stop().animate({
        top:480,
        right:150
      },300,'linear',function(){
        $bicycle.stop().animate({
          top:450,
          right:180
    },300,'linear',function(){
      $bicycle.stop().animate({
        top:400,
        right:200
    },300,'linear',function(){
      $bicycle.stop().animate({
        top:320,
        right:250
    },300,'linear',function(){
      $bicycle.stop().animate({
        top:250,
        right:300
      },300,'linear',function(){
        $bicycle.stop().animate({
          top:200,
          right:330
    },300,'linear',function(){
      $bicycle.stop().animate({
        top:180,
        right:350
    },300,'linear',function(){
      $bicycle.stop().animate({
        top:250,
        right:400
    },300,'linear',function(){
      $bicycle.stop().animate({
        top:320,
        right:450
    },300,'linear',function(){
      $bicycle.stop().animate({
        top:400,
        right:500
    },300,'linear',function(){
      $bicycle.stop().animate({
        top:480,
        right:550
      },300,'linear',function(){
        $bicycle.stop().animate({
          top:450,
          right:580
    },300,'linear',function(){
      $bicycle.stop().animate({
        top:400,
        right:600
    },300,'linear',function(){
      $bicycle.stop().animate({
        top:320,
        right:680
    },300,'linear',function(){
      $bicycle.stop().animate({
        top:250,
        right:750
    },300,'linear',function(){
      $bicycle.stop().animate({
        top:180,
        right:820
      },300,'linear',function(){
        $bicycle.stop().animate({
          top:200,
          right:870
    },300,'linear',function(){
      $bicycle.stop().animate({
        top:250,
        right:900
    },300,'linear',function(){
      $bicycle.stop().animate({
        top:320,
        right:950
    },300,'linear',function(){
      $bicycle.stop().animate({
        top:400,
        right:1000
    },300,'linear');
  });
  });
  });
  });
  });
  });
  });
  });
  });
  });
  });
  });
  });
  });
  });
  });
  });
  });
  });
  });
  });
  });
  });
});
});
});































pop('#popup');






function pop(selector) {
$(selector).on('mousedown touchstart',function(e){
  e.preventDefault();
  if(e.clientX === undefined){
    e = e.originalEvent.touches[0];
    //처음에 닿았던 위치값으로 계속 간다! (터치시 중복방지)
  }
  //기존에 마우스가 가지고있는 성질 초기화
  //alert('a');

  //마우스 포인터의 좌표
  var startX = e.clientX; //x좌표
  var startY = e.clientY; //y좌표
  var offsetX = $(selector).position().left;
  var offsetY = $(selector).position().top;
  //alert(offsetX); //0
  //client: 창(window)에서의 포인터위치
  //pageX,Y : 문서(document)에서의 포인터위치

  //$('.cx').text(startX);
  //$('.cy').text(startY);
  //이동 mousemove
  $(document).on('mousemove touchmove',function(e){
    if(e.clientX === undefined){
      e = e.originalEvent.touches[0];
      //처음에 닿았던 위치값으로 계속 간다! (터치시 중복방지)
    }
    //$('.cx').text(e.clientX);
    //$('.cy').text(e.clientY);
    delX = e.clientX - startX; //포인터의 X축이동거리
    delY = e.clientY - startY; //포인터의 Y축이동거리
    $('.cx').text(delX);
    $('.cy').text(delY);

    //#popup 움직여야함
    $(selector).css({
      'left':offsetX+delX,  //현재 (눌렀을때)#popup의 X위치+포인터의 이동거리
      'top':offsetY+delY
    });
  }); //mousemove닫기

  $(document).on('mouseup touchend',function(){
    //alert('a');
    //mousemove랑 mouseup 해제!
    //이벤트 발생 on
    //이벤트 해제 off
    $(document).off('mousemove mouseup');
  }); //mouseup 닫기



}); //mousedown닫기
}







});//jquery닫기

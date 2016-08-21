
$(document).ready(function(){
 $('.navbar a')
    .on('click', function(){
    $('.navbar a').attr('id',"");
    $(this).attr('id',"active");
    var thisData=$(this).attr('class');
    var offset=$('#'+ thisData).offset();
    console.log(offset);
    $('html,body').animate({scrollTop: offset.top-3},1000);
    return false;
    })
// on background
   $("#onBackground").fadeIn(2000);

//logo slide down 
      $(".logo1").slideDown(500);
      $(".logo2").slideDown(800);

      $(".logo3").slideDown(1200);
      $(".logo4").slideDown(1500);
      $(".logo5").slideDown(1800);
  });

//behind the scenes slide  
  
    $(document).ready(function(){
    $("#team-member").hover(function(){
    $(".text-container").css("display","block");
    }, function(){
    $(".text-container").css("display","none");
    })
    $(".team-member1").hover(function(){
    $(".text-container1").css("display","block");
    }, function(){
    $(".text-container1").css("display","none");
    })
    $(".team-member2").hover(function(){
    $(".text-container2").css("display","block");
    }, function(){
    $(".text-container2").css("display","none");
    })
    $(".team-member3").hover(function(){
    $(".text-container3").css("display","block");
    }, function(){
    $(".text-container3").css("display","none");
    })
    });

//behind the scenes slide  ends

// team members starts
// $(document).ready(function(){
//     $("#team-member").animate({
//     bottom: '10px'
    
//     })
//     $("#team-member").animate({
//     top: '10px'
//     })
//     $("#team-member").animate({
//     bottom: '10px'
    
//     })
//     });
    
    
//     $(document).ready(function(){
//     $(".team-member1").animate({
//     bottom: '10px'
    
//     })
//     $(".team-member1").animate({
//     top: '10px'
//     })
//     $(".team-member1").animate({
//     bottom: '10px'
    
//     })
//     });
   
  
    
//     $(document).ready(function(){
//     $(".team-member2").animate({
//     bottom: '10px'
    
//     })
//     $(".team-member2").animate({
//     top: '10px'
//     })
//     $(".team-member2").animate({
//     bottom: '10px'
    
//     })
//     });

    
//     $(document).ready(function(){
//     $(".team-member3").animate({
//     bottom: '10px'
    
//     })
//     $(".team-member3").animate({
//     top: '10px'
//     })
//     $(".team-member3").animate({
//     bottom: '10px'
//    }) 
//     });
// // team members ends

            jQuery("document").ready(function($){
            
            var nav = $('.navigationBar');
            
            $(window).scroll(function () {
            if ($(this).scrollTop() > 136) {
            nav.addClass("f-nav");
            } else {
            nav.removeClass("f-nav");
            }
            });
            
            });
            // nav bar navigate ends
// scroll slides
$(document).scroll(function(){
    var my_scroll = $(document).scrollTop();

    if(my_scroll > 700){
        $('.people-first').css({
            animationPlayState : 'running'
        })
    }

    console.log(my_scroll);

});

$(document).scroll(function(){
    var my_scroll2 = $(document).scrollTop();

    if(my_scroll2 > 700){
        $('.people-second').css({
            animationPlayState : 'running'
        })
    }

    console.log(my_scroll2);

});
// -------------------------------------
$(document).scroll(function(){
    var my_scroll3 = $(document).scrollTop();

    if(my_scroll3 > 800){
        $('.left-anim').css({
            animationPlayState : 'running'
        })
    }

    console.log(my_scroll3);

});

$(document).scroll(function(){
    var my_scroll4 = $(document).scrollTop();

    if(my_scroll4 > 800){
        $('.right-anim').css({
            animationPlayState : 'running'
        })
    }

    console.log(my_scroll4);

});
// --------------------------------
$(document).scroll(function(){
    var my_scroll5 = $(document).scrollTop();

    if(my_scroll5 > 900){
        $('.helmet-left').css({
            animationPlayState : 'running'
        })
    }

    console.log(my_scroll5);

});

$(document).scroll(function(){
    var my_scroll5 = $(document).scrollTop();

    if(my_scroll5 > 900){
        $('.helmet-right').css({
            animationPlayState : 'running'
        })
    }

    console.log(my_scroll5);

});
// laptop--------------------------
$(document).scroll(function(){
    var my_scroll6 = $(document).scrollTop();

    if(my_scroll6 > 1400){
        $('.laptop').css({
            animationPlayState : 'running'
        })
    }

    console.log(my_scroll6);

});
// features--------------------------
$(document).scroll(function(){
    var my_scroll7 = $(document).scrollTop();

    if(my_scroll7 > 1500){
        $('#featuresLeft').css({
            animationPlayState : 'running'
        })
    }

    console.log(my_scroll7);

});

$(document).scroll(function(){
    var my_scroll8 = $(document).scrollTop();

    if(my_scroll8 > 1500){
        $('.featuresRight').css({
            animationPlayState : 'running'
        })
    }

    console.log(my_scroll8);

});

// get live updates-------------------
$(document).scroll(function(){
    var my_scroll9 = $(document).scrollTop();

    if(my_scroll9 > 1700){
        $('#getLeft').css({
            animationPlayState : 'running'
        })
    }

    console.log(my_scroll9);

});

$(document).scroll(function(){
    var my_scroll10 = $(document).scrollTop();

    if(my_scroll10 > 1700){
        $('.getRight').css({
            animationPlayState : 'running'
        })
    }

    console.log(my_scroll10);

});
// product top scroll
$(document).scroll(function(){
    var my_scroll11 = $(document).scrollTop();

    if(my_scroll11 > 1900){
        $('.productsTop').css({
            animationPlayState : 'running'
        })
    }

    console.log(my_scroll11);

});
// our awards
$(document).scroll(function(){
    var my_scroll12 = $(document).scrollTop();

    if(my_scroll12 > 2500){
        $('.ourAwards').css({
            animationPlayState : 'running'
        })
    }

    console.log(my_scroll12);

});
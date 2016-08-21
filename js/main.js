
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
$(document).ready(function(){
    $("#team-member").animate({
    bottom: '10px'
    
    })
    $("#team-member").animate({
    top: '10px'
    })
    $("#team-member").animate({
    bottom: '10px'
    
    })
    });
    
    
    $(document).ready(function(){
    $(".team-member1").animate({
    bottom: '10px'
    
    })
    $(".team-member1").animate({
    top: '10px'
    })
    $(".team-member1").animate({
    bottom: '10px'
    
    })
    });
   
  
    
    $(document).ready(function(){
    $(".team-member2").animate({
    bottom: '10px'
    
    })
    $(".team-member2").animate({
    top: '10px'
    })
    $(".team-member2").animate({
    bottom: '10px'
    
    })
    });

    
    $(document).ready(function(){
    $(".team-member3").animate({
    bottom: '10px'
    
    })
    $(".team-member3").animate({
    top: '10px'
    })
    $(".team-member3").animate({
    bottom: '10px'
    
    })
    });
// team members ends
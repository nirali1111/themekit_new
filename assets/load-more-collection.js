var product_per_page = $('.product-per-page');
var next_link =$('.product-per-page').data('next-link');
var loadmore_button=$('.btn_loadmore');
var product_count_per_page=$('.product-per-page').attr('show-product');
var total_prod=$('.product-per-page').attr('total-product');

function loadmorecollection(){ 
  $.ajax({
    url:next_link,
    type:'GET',
    dataType:'html',
     beforeSend:function(){
       loadmore_button.hide();  
    }
    
    }).done(function(data){
      
      var new_collection = $(data).find('.product-per-page'); 
      console.log(new_collection);
     
      var new_url= new_collection.data('next-link'); 
      console.log(new_url);
    
      var new_count= new_collection.attr('show-product');
      var upd_count=parseInt(new_count)+parseInt(product_count_per_page);
      console.log(upd_count);
      product_count_per_page=upd_count;
      if(new_url)
      {
         loadmore_button.show();
      }   
      next_link = new_url;
      if(total_prod < product_count_per_page)
      {
           $('.product-count').html('<b>' + total_prod + '</b>');
           console.log("total = "+ total_prod);
      
      }
      else
      {
           $('.product-count').html('<b>' + product_count_per_page + '</b>');
           console.log("updated = "+ product_count_per_page);
      }
        
      var progress_count = product_count_per_page;
      console.log(progress_count);
      $('.upd_progress').val(progress_count);
    
      product_per_page.append(new_collection.html());
      
  })
}

$(document).ready(function(){
    var char_limit = 450;
    var dot = "...."
   
   $(".addviewmore").each(function() {     
        var allPart = $(this).text();
        if (allPart.length > char_limit)
        {
            var firstPart = allPart.substring(0, char_limit);
            var secdPart = allPart.substring(char_limit, allPart.length);
            var newPart = firstPart + "<span class='dots'>" + dot  + "</span>" + "<span class='SecSec'>" + secdPart + "</span>";
            $(this).html(newPart);
        }
    });
 
  
    $(document).on("click", ".viewBtn", function() {
        $(".addviewmore").toggleClass("showlesscontent showmorecontent");
        $(".addviewmore").toggleClass("content_style");
      
        if(!$(".viewBtn").hasClass('new')){
           $(this).addClass('new').html('READ LESS');
        }
        else{
           $(this).removeClass('new').html('READ MORE');
        }
    });
  
   
});

 $('.autoplay').slick({

  slidesToShow: 5,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 2000,
});

//  $('.slider-for').slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   arrows: false,
//   fade: true,
//   asNavFor: '.slider-nav'
// });
// $('.slider-nav').slick({
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   asNavFor: '.slider-for',
//   dots: true,
//   centerMode: true,
//   focusOnSelect: true
// });
		
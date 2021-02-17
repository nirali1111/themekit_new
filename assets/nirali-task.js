var product_per_page = $('.product-per-page');
var next_link =$('.product-per-page').data('next-link');
var loadmore_button=$('.btn_loadmore');
var product_count_per_page=$('.product-per-page').attr('show-product');

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
      $('.product-count').html(product_count_per_page);
    
      var progress_count = product_count_per_page;
      console.log(progress_count);
      $('.upd_progress').val(progress_count);
    
      product_per_page.append(new_collection.html());
      
  })
}
function viewmore(){
    var char_limit = 300;   
    var readMoreTxt = " ... Read More";  
    var readLessTxt = " Read Less";
 
   $(".addviewmore").each(function() {     
        var allPart = $(this).text();
        if (allPart.length > char_limit)
        {
            var firstPart = allPart.substring(0, char_limit);
            var secdPart = allPart.substring(char_limit, allPart.length);
            var newPart = firstPart + "<span class='SecSec'>" + secdPart + "</span><span class='readMore'>" + readMoreTxt + "</span><span class='readLess'>" + readLessTxt + "</span>";
            $(this).html(newPart);
        }
    });
 
    $(document).on("click", ".readMore,.readLess", function() {
        $(this).closest(".addviewmore").toggleClass("showlesscontent showmorecontent");
    });
}
$(document).ready(function(){
   viewmore();
});

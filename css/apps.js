$(function() {
   let navBer =  $(`.navv`)
    console.log(navBer)


$(window) .scroll(function(){
   let scrTop   =  $(window) .scrollTop()
  if(scrTop > 200){
    navBer.addClass(`navvv`)
  
  }else{
    navBer.removeClass(`navvv`)
  }
  
})





})
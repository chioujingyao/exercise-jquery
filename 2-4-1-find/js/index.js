 

$('#LessonLs .lesson-title').click(function(){
   $(this).next().stop(true,false).slideToggle(); 
   $(this).parent().siblings().find('.lesson-desc').slideUp();
})
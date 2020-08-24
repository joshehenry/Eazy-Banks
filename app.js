// $(document).ready(function(){

//     function showWindow(){

//         var stopAutohide;

//         $('#main').show();
//         //stop scroll
//         $('html body').css('overflow', 'hidden');
//         //autohide after 5s
//         stopAutohide = setTimeout(hideWindow,5000);
//     }

//     showWindow()

//     function hideWindow(){

//         $('#main').hide();
//         //in scroll
//         $('html body').css('overflow', 'scroll');
//     }

//     setTimeout(showWindow,2000);

//     //close after click

//     $('#close-btn').click(function(){

//         hideWindow();
//         clearTimeout(stopAutohide);
//     })
// })

$(window).on('load', function(){
    setTimeout(function(){
        $('#myModal').modal('show')
    }, 500);  // 3000 = 3 second // 500 = 0.5 second
});
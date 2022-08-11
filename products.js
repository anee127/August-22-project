$(document).ready(function() {
    // Back to top button functionality
    $("#back-to-top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 });
        return false;
    });
});

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    if($(window).width() < 993 && $( "#multiCollapse" ).hasClass( "show" )) {
        $( "#multiCollapse" ).removeClass( "show" )
    }
} else {
    if($(window).width() < 993 && $( "#multiCollapse" ).hasClass( "show" )) {
        $( "#multiCollapse" ).removeClass( "show" )
    }

    if($(window).width() > 993 && !$( "#multiCollapse" ).hasClass( "show" )) {
        $( "#multiCollapse" ).addClass( "show" )
    }

    $( window ).resize(function() {
        if($(window).width() < 993 && $(window).width() > 576 && $( "#multiCollapse" ).hasClass( "show" )) {
            $( "#multiCollapse" ).removeClass( "show" )
        }

        if($(window).width() > 993 && $(window).width() > 576 && !$( "#multiCollapse" ).hasClass( "show" )) {
            $( "#multiCollapse" ).addClass( "show" )
        }
    });
}

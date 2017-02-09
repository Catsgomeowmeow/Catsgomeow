<html>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script>
        $(document).ready(function(){
            $('#sidebar-btn').click(function(){
                $('#sidebar').toggleClass("visible");
            });
        });
            
</script>
<script>
//Says after how much scrolling the arrow should show up
var amountScrolled = 300;
$(window).scroll(function() {
	if ( $(window).scrollTop() > amountScrolled ) {
		$('a.back-to-top').fadeIn('slow');
	} else {
		$('a.back-to-top').fadeOut('slow');
	}
});
 $('a.back-to-top').click(function() {
	$('html, body').animate({
		scrollTop: 0
	}, 700);
	return false;
});
</script>
         </html>
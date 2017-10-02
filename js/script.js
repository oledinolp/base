/*$(function() {*/
  // jQuery goes here...

  /*Query use css elements such as ID Class to to make function we want 
i.e. $(‘.class’).fadeOut(2000); -which is 2 second, by default is 4sec.(4000), (slow)*/

  // Uncomment this line to fade out the red box on page load
   /*$(".red-box").fadeOut(2000);
   $(".green-box").fadeOut(2000);
   $(".blue-box").fadeOut(2000);
*/
   /*$(".red-box").fadIn(2000);
   $(".green-box").fadeIn(2000);
   $(".blue-box").fadeIn(2000;*/
   
   /*$(".red-box").fadeTo(3000, 0.2);
   $(".green-box").fadeTo(2000, 0.5);
   $(".blue-box").fadeTo(2000, 0.8);

   $(".green-box").fadeTogggle(); //fadein and fadeout
   $(".green-box").fadeTogggle();

});*/

/*$(function() {
	$(".green-box").fadeOut(1000);
	$$(".green-box").fadeTo(1000, 0.5); //because css display: none, so have to change css property
	$(".blue-box").togggle(); //togggle will show the element hidden and vceverse
});*/


//Sliding Elements up and down
/*$(function() {*/
	/*$(".blue-box").slideUp(2000);
	$(".blue-box").slideDown(2000);
	$('p').hide();
	$('p').slideDown(3000);*/

/*	$(".blue-box").slideToggle(2000);*///which show the element if there are show or hidden
	/*$(".blue-box").slideDown(2000);*/
	/*$('p').hide();
	$('p').slideDown(3000);

});*/

//Moving Elements
/*$(function() {*/
	/*$(".blue-box").animate({
		"margin-left": "+=200px"
	}, 1000, "linear");*/

	/*$(".blue-box").animate({
		"margin-rigght": "-=200px"
	}, 1000, "linear");

});*/

//get Creative:Custom Animations
/*$(function() {
	$(".blue-box").animate({
		"margin-left": "200px",
		"opacity" : "0",
		"height" :"50px",
		"width": "50px",
		"margin-top": "25px"
	}, 1000);*/
//if dont use "", you can marginleft, marginTop
	/*$("p").animate({
		fontSize: "20px",
	}, 1000);

});*/

//Delaying and Chaining Animations
/*$(function() {
	$(".red-box").fadeTo(3000, 0.2);
   	$(".green-box").delay(1000).fadeTo(1000, 0.5);
   	$(".blue-box").delay(2000).fadeTo(1000, 0.8).fadeUut().delay(500).fadeIn();*/

//chain function first then and then
/*different from fadout and fadto, fadeout in css is display none, once fadeout itremove from th screen*/

/*});*/


/*14.timing Animations using callback function*/
/*$(function() {
	$(".red-box").fadeTo(1000,  0, function (){
		$(".green-box").fadeTo(1000, function () {
			$(".blue-box").fadeTo(1000, 0);
		});
	});

});*/

/*callback function using one after one excuction finish*/

$(function() {
	$(".lightbox").delay(500).fadeIn(1000);

});





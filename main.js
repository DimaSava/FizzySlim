
// $('.select').click(function() {
// 	console.log('click');
// });

// price for product
var pr_apple = "6.50";
$('#price_apple').text(pr_apple);
var d_price_apple = (pr_apple*2).toFixed(2);
$('#d_price_apple').text(d_price_apple);

var pr_graipfruit = "7.50";
$('#price_graipfruit').text(pr_graipfruit);
var d_price_graipfruit = (pr_graipfruit*2).toFixed(2);
$('#d_price_graipfruit').text(d_price_graipfruit);

var pr_berries = "8.25";
$('#price_berries').text(pr_berries);
var d_price_berries = (pr_berries*2).toFixed(2);
$('#d_price_berries').text(d_price_berries);

var pr_pineapple = "8.50";
$('#price_pineapple').text(pr_pineapple);
var d_price_pineapple = (pr_pineapple*2).toFixed(2);
$('#d_price_pineapple').text(d_price_pineapple);

// slide count for product
	$('.select').click(function(event) {
		console.log('click');
		$('.product_count').slideUp();
		var name_product = $(this).attr('id').split('_')[1];
		$('.corp_orange_bg').removeClass('corp_orange_bg');
		if ($('#slide_' + name_product).hasClass('sliding')) {
			// console.log($('#slide_' + name_product)); big?????????????????/
			// console.log($(this));
			$('#slide_' + name_product).slideUp();
			$('#slide_' + name_product).removeClass('sliding');
			$('#buy_' + name_product).removeClass('corp_orange_bg'); 
		}
		else {
			$('#slide_' + name_product).addClass('sliding');
			$('#slide_' + name_product).slideDown();
			$('#buy_' + name_product).addClass('corp_orange_bg');
		}
		event.stopPropagation();
	});
// hide count for product
	// коряво работает(боди не боди :) )
	$('body:not(.select)').click(function() {  
		$('.product_count').slideUp();
		$('.corp_orange_bg').removeClass('corp_orange_bg');
	});
// choose count for product
	$('li').click(function() {
		console.log($(this).attr('class'));
		var input_id = 'number_' + $(this).attr('class').split('_')[1];
		console.log(input_id);
		$('#' + input_id).val(+$(this).text());
		$('.product_count').slideUp();
	});

// visible carello
	$('.buy_button').click(function(event) {
		if ($('#carello').hasClass('visible')) {
			$('#carello').hide();
			$('#carello').removeClass('visible');
		}
		else {
			$('#carello').show('slow');
			$('#carello').addClass('visible');
		}
		event.stopPropagation();
	});
// hide carello
	$('#close_carello').click(function() {
		$('#carello').hide('slow');
		$('#carello').removeClass('visible');
	});
	// click body (hide carello)
	$('body:not(#carello)').click(function() {
		if($('#carello').hasClass('visible')) {
			$('#carello').hide('slow');
			$('#carello').removeClass('visible');
		}
		// $('.corp_orange_bg').removeClass('corp_orange_bg');
	});

// add count in carello
	function add_to_carello(product, count_product) {
		
	}
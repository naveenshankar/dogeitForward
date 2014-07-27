var myJSONAppMain = function()
{	
	var callBack = function(user){
		console.log("inside callback");
	 };

	$('.proceed').click(function(){
		var publicAddress = $('.address').val();
		console.log(publicAddress);

		$.ajax({
		  data:publicAddress,
		  url: "getTransferConfirmation",
		  type: "GET",
		  error: function (xhr, ajaxOptions, thrownError) {
	        //callBack(table.get('mockDataTables'));
	      }
		}).done(callBack);
	})
	
}

$( document ).ready(function() {
    var newApp = new myJSONAppMain();
});

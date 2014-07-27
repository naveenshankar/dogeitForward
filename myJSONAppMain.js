var myJSONAppMain = function()
{	
	

	$.ajax({
		  url: "getMyTables",
		  type: "GET",
		  error: function (xhr, ajaxOptions, thrownError) {
	        callBack(table.get('mockDataTables'));
	      }
		}).done(callBack);
}

$( document ).ready(function() {
    var newApp = new myJSONAppMain();
});

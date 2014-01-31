
$(function() {
	var xbian = new XBian("http://192.168.2.200:8080");

	//verticalTabs();
	$("#menu").tabs();
	$("button").button();
	$("table#playlist tbody").sortable().disableSelection();
	$("div#time").slider({
		value: 0,
		orientation: "horizontal",
		range: "min",
		animate: true
	});
	$("div#volume").slider({
		value: 100,
		orientation: "horizontal",
		range: "min",
		animate: true,
		slide: function(event, ui){
			xbian.setVolume(ui.value);		
		}
    });
	if(xbian.ping()!="pong"){		
		$("div#overlay").toggle();
		//TODO Meldung: xbmc off	
	}
	console.log(xbian.ping());
	//EventListener
});
var testConnection = function(){
	//TODO
};
var play = function(url){
	//TODO
};
var addTo = function(url, playlist, name){
	//TODO
};
var saveIP = function(){
	//TODO save in Googleaccount
};
var loadConfig = function(){
	//TODO
};
var loadPlaylist = function(name){
	//TODO
};

Number.prototype.addZero = function(){
	if(this.valueOf()<10){
		return "0"+this.valueOf();	
	}
	return this.valueOf();
}

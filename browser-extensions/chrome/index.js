	var xbian = new XBian("http://192.168.2.200:8080");

$(function() {
	//verticalTabs();
	xbian.getTimeInSeconds();
	$("#menu").tabs();
	$("button").button();
	$("table#playlist tbody").sortable().disableSelection();
	$("div#time").slider({
		value: 100,
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

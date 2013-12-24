$(function() {
	//verticalTabs();
	$("#menu").tabs();
	$("button#play").button();
 $( "#rerun" )
                        .button()
                        .click(function() {
                                alert( "Running the last action" );
                        })
                        .next()
                                .button({
                                        text: false,
                                        icons: {
                                                primary: "ui-icon-triangle-1-s"
                                        }
                                })
                                .click(function() {
                                        var menu = $( this ).parent().next().show().position({
                                                my: "left top",
                                                at: "left bottom",
                                                of: this
                                        });
                                        $( document ).one( "click", function() {
                                                menu.hide();
                                        });
                                        return false;
                                })
                                .parent()
                                        .buttonset()
                                        .next()
                                                .hide()
                                                .menu();
	$("#sort tbody").sortable().disableSelection();
});

verticalTabs = function(){
	$("#menu").tabs().addClass('ui-tabs-vertical ui-helper-clearfix');
    $("#menu li").removeClass('ui-corner-top').addClass('ui-corner-left');
};

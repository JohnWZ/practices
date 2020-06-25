// Check Off Specific Todos By Clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//Click on X to delete Todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		// this this is this.parent()
		$(this).remove();
	});
	// stop triger its parent's event
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	// event.which records the key pressed, 13 means enter key
	if(event.which === 13){
		//grabbing new todo text from input
		var todoText = $(this).val();
		// clear the input field
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
	}
});

$("#toggle-form").click(function(){
	$("input[type='text']").fadeToggle();
});
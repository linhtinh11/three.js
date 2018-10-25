LeftSidebar.Case = function(editor) {
	var container = new UI.Div();
	container.setId('cases');

	var button = new UI.Image( 'images/ip6case.png' );
	button.onClick(function(){
		editor.loader.loadFileURL('files/ip6case.stl');
	});
	container.add(button);
	
	return container;
};

LeftSidebar.Object = function(editor) {
	var container = new UI.Div();
	container.setId('objects');
	
	var button = new UI.Image( 'images/dragon.jpg' );
	button.onClick(function(){
		editor.loader.loadFileURL('files/dragon.stl');
	});
	container.add(button);
	
	return container;
};

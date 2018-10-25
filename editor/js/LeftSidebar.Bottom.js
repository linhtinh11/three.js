LeftSidebar.Bottom = function(editor) {
	var container = new UI.Span();
	var objectsTab = new UI.Text( 'OBJECTS' ).onClick( onClick );
	
	var tabs = new UI.Div();
	tabs.setId( 'tabs' );
	tabs.add( objectsTab );
	container.add( tabs );

	function onClick( event ) {

		select( event.target.textContent );

	}

	//

	var objects = new UI.Span().add(
		new LeftSidebar.Object( editor )
	);
	container.add( objects );

	function select( section ) {

		objectsTab.setClass( '' );

		objects.setDisplay( 'none' );

		switch ( section ) {
		case 'OBJECTS':
			objectsTab.setClass( 'selected' );
			objects.setDisplay( '' );
			break;
		}

	}

	select( 'OBJECTS' );

	return container;
};

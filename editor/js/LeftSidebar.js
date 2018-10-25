/**
 * @author trung
 */

var LeftSidebar = function ( editor ) {

	var container = new UI.Panel();
	container.setId( 'left-sidebar' );

	//

	var caseTab = new UI.Text( 'CASES' ).onClick( onClick );

	var tabs = new UI.Div();
	tabs.setId( 'tabs' );
	tabs.add( caseTab );
	container.add( tabs );

	function onClick( event ) {

		select( event.target.textContent );

	}

	//

	var cases = new UI.Span().add(
		new LeftSidebar.Case( editor ),
		new LeftSidebar.Bottom( editor )
	);
	container.add( cases );

	function select( section ) {

		caseTab.setClass( '' );

		cases.setDisplay( 'none' );

		switch ( section ) {
			case 'CASES':
				caseTab.setClass( 'selected' );
				cases.setDisplay( '' );
				break;
		}

	}

	select( 'CASES' );

	return container;

};

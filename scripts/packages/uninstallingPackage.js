module.exports = ( function ( printMessage , theme , _ ) {

	return function uninstallingPackage ( package , service , note ) {

		printMessage(	theme.positive( 'Uninstalling' ),
						_.isArray( package ) ?
							{	title : 'The packages below are being uninstalled from ' + theme.service(  ' ' + service + ' '  ),
								message : _.map( package , function ( value ) { return theme.package( value ); } ) } :
							'The package ' + theme.package( package ) + ' is being uninstalled from ' + theme.service( ' ' + service + ' ' ),
						note );

	};

} ) (	require( './../util/printMessage.js' ),
		require( './../util/theme.js' ),
		require( 'underscore' ) );
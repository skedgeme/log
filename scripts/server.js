'use strict';

const
	printMessage = require( './util/printMessage.js' ),
	theme			   = require( './util/theme.js' ),
	titles			 = require( './util/titles.js' ),
	_				     = require( 'lodash' );

function startingServer ( address , port , service ) {

	printMessage(	titles.startingServer,
					'Running Server at ' + address + ' on port ' + port + ' using ' + theme.package( service ) );

};

function route ( method , servedPath , servingPath ) {

  servedPath = relativePath( servedPath );
  servingPath = relativePath( servingPath );

	printMessage(	titles.route,
					`Serving ${theme.srcPath( servingPath )} on the route ${theme.destPath( servedPath )}` );

};

function response ( method , path , responseDesc ) {

  path = relativePath( path );

	printMessage(	titles.response,
					_.isUndefined( responseDesc ) ?
						`Server responded to ${theme.packageTask( method )} request at ${theme.destPath( path )}` :
						{ title : message , message : responseDesc  } );

};

module.exports = { startingServer , route , response };
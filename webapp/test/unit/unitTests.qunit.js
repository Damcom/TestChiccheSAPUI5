/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"prova_fcl/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});

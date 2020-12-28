/*global QUnit*/

sap.ui.define([
	"com/axyt/Chapter3Unit3/controller/FirstPage.controller"
], function (Controller) {
	"use strict";

	QUnit.module("FirstPage Controller");

	QUnit.test("I should test the FirstPage controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});

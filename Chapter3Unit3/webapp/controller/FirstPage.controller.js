// @ts-nocheck
// @ts-ignore
sap.ui.define([
		"sap/ui/core/mvc/Controller"
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
	function (Controller) {
		"use strict";

		return Controller.extend("com.axyt.Chapter3Unit3.controller.FirstPage", {
			onInit: function () {

            },
            
            buttonClick: function(evt){
                var newName = this.byId("inputName").getValue();
                var nameInsert = {"firstName" : newName};
                this.getView().getModel().getProperty("/People").push(nameInsert);
                this.getView().getModel().refresh();
            }
		});
	});

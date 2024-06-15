sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("provafcl.controller.Home", {
            onInit: function () {

            },
            onNavTo: function (oEvent) {
                const oComponent = this.getOwnerComponent()
                const oRouter = oComponent.getRouter()
                oRouter.navTo("ProductFCL")
            }
        });
    });

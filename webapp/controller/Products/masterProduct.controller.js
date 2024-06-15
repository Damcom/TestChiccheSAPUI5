sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("provafcl.controller.Products.masterProduct", {
            onInit: function () {
                this.getOwnerComponent().getRouter().getRoute("ProductFCL").attachPatternMatched(this._onRouteMatched, this)
            },
            _onRouteMatched: function (oEvent) {
                this.getView().byId("ListProduct").getModel().refresh()
            },
            onProductsRequested: function (oEvent) {
            },
            onProductsReceived: function (oEvent) {
            },
            onProductsChange: function (oEvent) {
            },
            onProductPress: function (oEvent) {
                const oRouter = this.getOwnerComponent().getRouter()
                oRouter.navTo("DetailProduct",{
                    product: oEvent.getSource().getTitle()
                })
            }
        });
    });

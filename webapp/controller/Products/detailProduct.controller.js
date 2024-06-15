sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("provafcl.controller.Products.detailProduct", {
            onInit: function () {
                const oRouter = sap.ui.core.UIComponent.getRouterFor(this)
                oRouter.getTarget("detailProduct").attachDisplay(jQuery.proxy(this.handleRouteMatched, this));
            },
            handleRouteMatched: function (oEvent) {
                const {product} = oEvent.getParameter("data")
                this.getOwnerComponent().getModel().read(`/Products(${product})`, {
                    urlParameters: {
                        '$expand': 'Category,Order_Details,Supplier'
                    },
                    success: (data) => {
                        this.getView().setModel(new sap.ui.model.json.JSONModel({data}), "detailProduct")
                    },
                    error: (err) => {
                        
                    }
                })
            }
        });
    });

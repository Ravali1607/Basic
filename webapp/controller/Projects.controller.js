sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment"
],
function (Controller, Fragment) {
    "use strict";

    return Controller.extend("project1.controller.Projects", {
        onInit: function () {
            
        //     var oModel = new sap.ui.model.json.JSONModel();

        //     oModel.setData({
        //         EmpId : "SBP007",
        //         Name : "Ravali"
            },

        //     var oJSONData = 
        //             [
        //             {
        //                 EmpId : "SBP001",
        //                 Name : "Ravali"
        //             },
        //             {
        //                 EmpId : "SBP002",
        //                 Name : "Shanmukhi"
        //             }
        //         ]
        //         oModel.setData({
        //             items : oJSONData
        //         });
        //         this.getView().setModel(oModel);
        

        // resultBtn: function(){
        //     var name = this.getView().byId("nameId").getValue();
        //     sap.m.MessageToast.show("Name : "+name);
        //}
       onOpenDialog: function(){
            var oView = this.getView();
            if(!this.byId("dialogId")){
                Fragment.load({
                    id: oView.getId(),
                    name: "project1.fragments.dialogFragment",
                    controller:this
                }).then(function(oDialog){
                    oView.addDependent(oDialog);
                    oDialog.open();
                });

            }else{
                this.byId("dialogId").open();
            }
       },
       onCloseDialog: function(){
        this.byId("dialogId").close();
       }

    // onOpenDialog: function(){
    //     if(!this.Dialog){
    //         this.Dialog = sap.ui.xmlfragment("project1.fragments.dialogFragment", this);
    //         this.getView().addDependent(this.Dialog);
    //     }
    //     this.Dialog.open();
    // },
    //    onCloseDialog: function(){
    //         this.Dialog.close();
    //    }
        });
    });
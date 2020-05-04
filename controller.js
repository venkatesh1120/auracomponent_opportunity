({
    doinit : function(component, event, helper) {
        //getting the data from wrap class
        var action = component.get("c.getOppurtunity");
        var column=[
            {label: 'Opputunity name', fieldName: 'oppName', type: 'text'},
            {label: 'Opputunity amount', fieldName: 'oppAmount', type: 'number'},
            {label: 'Opputunity date', fieldName: 'oppCloseDate', type: 'text'},
            {label: 'Opputunity type', fieldName: 'oppDeliveryInstall', type: 'text'} ];
           action.setCallback(this,function(response){
           var state = response.getState();
            if(state == 'SUCCESS'){
                var result = response.getReturnValue();
                component.set("v.Data",result);
                component.set("v.columns1",column);
            }
        });     
        $A.enqueueAction(action);        
    }
})
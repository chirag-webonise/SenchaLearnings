Ext.define('i4cast.store.MainStore', {
    extend: 'Ext.data.Store',
    requires: [
        'i4cast.model.MainModel',
        'Ext.data.proxy.LocalStorage'
    ],

    config: {
        model : 'i4cast.model.MainModel',
        proxy:{

            type: 'ajax',
            method : 'GET',
            timeout:60000,
            pageParam: false, //to remove param "page"
            startParam: false, //to remove param "start"
            limitParam: false, //to remove param "limit"

            reader:{
                type:'json',
                record: 'currently'
            }
        }
    }
});
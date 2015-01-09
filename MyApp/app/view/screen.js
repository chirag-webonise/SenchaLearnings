Ext.define('MyApp.view.screen', {
    extend: 'Ext.Container',
    xtype: 'screen',
    alias: 'widget.screen',
    config: {
        items: [
            {
                xtype: 'textfield',
                label: 'Name',
                name: 'name',
                id:'name',
                maxWidth: '20%',
                margin: '20 auto'
            },
            {
                xtype: 'button',
                text: 'Go!!',
                type: 'myButton',
                maxWidth: '20%',
                margin: '20 auto'
                /*handler: function(){
                    //var values = this.up('screen').down('textfield').getValue();
                    //console.log(values);
                    //Ext.Viewport.down('main').push(Ext.create('MyApp.view.Second',{
                    //    content: values
                    //}));
                }*/
            }
        ]
    }
});

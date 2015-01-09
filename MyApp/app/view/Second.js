Ext.define('MyApp.view.Second', {
    extend: 'Ext.form.Panel',
    xtype:'Second',
    alias: 'widget.Second',
    name: 'Second',
    requires:['Ext.Label'],
    config: {
        //content: 'null',
        items: [
            {
                xtype: 'label',
                html: '',
                maxWidth: '50%',
                margin: '20 auto',
                style: 'text-align: center; color: gray'
            },
            {
                xtype: 'button',
                maxWidth: '50%',
                margin: '20 auto',
                type:'backButton',
                text:'Go Back!'
            }
        ]
    },
    initialize : function(){
        //var me = this.callParent();
        console.log('Second this : '+this.name);
        var val = this.config.content;
        this.down('label').setHtml('welcome '+val+'!');
    }
});

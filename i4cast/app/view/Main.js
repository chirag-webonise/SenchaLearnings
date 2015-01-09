Ext.define('i4cast.view.Main', {
    extend: 'Ext.Container',
    xtype: 'Main',
    requires: [],
    config: {
        items: [
            {
                xtype: 'label',
                type: 'locationName',
                html: 'Location',
                maxWidth: '70%',
                style: 'text-align: center; color: gray; margin: 5% auto'
            },
            {
                xtype: 'label',
                type: 'weatherSummary',
                html: '<div class="myDiv">Weather Summary</div>',
                maxWidth: '90%',
                style: 'text-align: center; color: gray; margin: 5% auto'
            },
            {
                xtype: 'container',
                layout: 'hbox',
                width: '100%',
                height: '100%',
                style: 'backgroundColor: grey',
                items: [
                    {
                        xtype: 'label',
                        type: 'temperature',
                        html: '32.00',
                        width: '55%',
                        height: 50,
                        style: 'text-align: right; color: black; margin: 5px 0px'
                    },
                    {
                        xtype: 'button',
                        type: 'temperatureUnit',
                        text: '°F',
                        width: '30px',
                        height: 30,
                        style: 'padding: 0px; background: transparent; border: none'
                    }
                ]
            }
        ]
    }
});

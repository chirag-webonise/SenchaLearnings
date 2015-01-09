Ext.define('i4cast.model.MainModel', {
    extend: 'Ext.data.Model',
    config: {
        identifier:'uuid',
        fields: [
            { name: 'temperature', type: 'float' },
            { name: 'windSpeed', type: 'int'},
            { name: 'summary', type: 'string' }
        ]
    }
});
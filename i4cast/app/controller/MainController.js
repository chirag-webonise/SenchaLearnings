Ext.define('i4cast.controller.MainController', {
    extend: 'Ext.app.Controller',
    config: {
        view: ['i4cast.view.Main'],
        refs: {
            main: 'Main',
            temperatureLabel: 'Main container label[type="temperature"]',
            temperatureUnitBtn: 'Main container button[type="temperatureUnit"]'
        },
        control: {
            main: {
                initialize: 'initializeView'
            },
            temperatureUnitBtn: {
                tap: 'changeTempUnit'
            }
        }
    },

    initializeView: function () {
        var me = this;
        var geo = Ext.create('Ext.util.Geolocation', {
            autoUpdate: true,
            allowHighAccuracy: false,
            listeners: {
                locationupdate: function(geo) {
                    console.log('accuracy',geo.getAllowHighAccuracy());
                    var currentLat = parseFloat(geo.getLatitude());
                    var currentLng =  parseFloat(geo.getLongitude());
                    me.getTemperature(currentLat, currentLng);
                },

                locationerror: function(geo, bTimeout, bPermissionDenied, bLocationUnavailable, message) {
                    if(bTimeout)
                        Ext.Msg.alert('Timeout occurred',"Could not get current position");
                    else
                        alert('Error occurred.');
                    }
                }
        });

        geo.updateLocation();
    },

    getTemperature: function(lat, long){
        console.log(lat,long);
        var _this = this;
        var mainStore = Ext.getStore('MainStore');
        mainStore.getProxy().setUrl('https://api.forecast.io/forecast/0fd1887541c31a159d0dbd29528ea8e9/'+lat+','+long);
        mainStore.load({
            callback: function (data) {
                var temperatureValue = data[0].get('temperature');
                if (temperatureValue !== null || temperatureValue != "") {
                    temperatureValue = (_this.getTemperatureUnitBtn().getText() == '°F') ? temperatureValue.toFixed(2) : _this.toCelsius(temperatureValue).toFixed(2);
                    _this.getTemperatureLabel().setHtml(temperatureValue)
                }
            }

        });
    },

    changeTempUnit: function () {
        var me = this;
        if (this.getTemperatureUnitBtn().getText() == '°F') {
            var tempInFahrenheit = parseFloat(this.getTemperatureLabel().getHtml().valueOf());
            this.getTemperatureLabel().setHtml(this.toCelsius(tempInFahrenheit).toFixed(2));
            this.getTemperatureUnitBtn().setText('°C');
        }
        else {
            var tempInCelsius = parseFloat(this.getTemperatureLabel().getHtml().valueOf());
            this.getTemperatureLabel().setHtml(this.toFahrenheit(tempInCelsius).toFixed(2));
            this.getTemperatureUnitBtn().setText('°F');
        }

    },

    toFahrenheit : function(tempInCelsius){
        return parseFloat((tempInCelsius*1.8)+32.0);
    },

    toCelsius : function(tempInFahrenheit){
        return parseFloat((tempInFahrenheit-32.0)/1.8);
    }

});
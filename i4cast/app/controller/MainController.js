Ext.define('i4cast.controller.MainController', {
        extend: 'Ext.app.Controller',
        config: {
            view: ['i4cast.view.Main'],
            refs: {
                main: 'Main',
                temperatureLabel: 'Main container label[type="temperature"]',
                temperatureUnitBtn: 'Main container button[type="temperatureUnit"]',
                summaryLabel: 'Main label[type="weatherSummary"]'
            },
            control: {
                main: {
                    initialize: 'initializeView'
                },
                temperatureUnitBtn: {
                    tap: 'changeTempUnit'
                }
            },
            AUTO_UPDATE_INTERVAL: 1000,
            URL:'https://api.forecast.io/forecast/0fd1887541c31a159d0dbd29528ea8e9/'
        },

        initializeView: function () {
            this.startAutoReloading();
        },

        getCurrentWeatherInfo: function (lat, long) {
            console.log(lat, long);
            var _this = this;
            var mainStore = Ext.getStore('MainStore');
            mainStore.getProxy().setUrl(_this.getURL() + lat + ',' + long);
            mainStore.load({
                callback: function (data) {
                    var temperatureValue = data[0].get('temperature');
                    var weatherSummary = data[0].get('summary');
                    _this.getSummaryLabel().setHtml('<div class="myDiv">'+[weatherSummary]+'</div>');
                    if (temperatureValue !== null || temperatureValue != "") {
                        temperatureValue = (_this.getTemperatureUnitBtn().getText() == '°F') ? temperatureValue.toFixed(0) : _this.toCelsius(temperatureValue).toFixed(0);
                        _this.getTemperatureLabel().setHtml(temperatureValue)
                    }
                }

            });
        },

        changeTempUnit: function () {
            var me = this;
            if (this.getTemperatureUnitBtn().getText() == '°F') {
                var tempInFahrenheit = parseFloat(this.getTemperatureLabel().getHtml().valueOf());
                this.getTemperatureLabel().setHtml(this.toCelsius(tempInFahrenheit).toFixed(0));
                this.getTemperatureUnitBtn().setText('°C');
            }
            else {
                var tempInCelsius = parseFloat(this.getTemperatureLabel().getHtml().valueOf());
                this.getTemperatureLabel().setHtml(this.toFahrenheit(tempInCelsius).toFixed(0));
                this.getTemperatureUnitBtn().setText('°F');
            }

        },

        toFahrenheit: function (tempInCelsius) {
            return parseFloat((tempInCelsius * 1.8) + 32.0);
        },

        toCelsius: function (tempInFahrenheit) {
            return parseFloat((tempInFahrenheit - 32.0) / 1.8);
        },


        //Function is to start Auto Update on on desired intervals.
        startAutoReloading: function() {
            var _this = this;

            if (window.weatherIntervalId !== undefined) {
                window.clearInterval(window.weatherIntervalId);
            }

            window.weatherIntervalId = window.setInterval(function () {
                var geo = Ext.create('Ext.util.Geolocation', {
                    autoUpdate: false,
                    allowHighAccuracy: false,
                    listeners: {
                        locationupdate: function (geo) {
                            var currentLat = parseFloat(geo.getLatitude());
                            var currentLng = parseFloat(geo.getLongitude());
                            _this.getCurrentWeatherInfo(currentLat, currentLng);
                        },

                        locationerror: function (geo, bTimeout, bPermissionDenied, bLocationUnavailable, message) {
                            if (bTimeout)
                                Ext.Msg.alert('Timeout occurred', "Could not get current position");
                            else
                                alert('Error occurred.');
                        }
                    }
                });
                geo.updateLocation();
            },_this.getAUTO_UPDATE_INTERVAL());
        },

        //function is to stop the AutoUpdate from the Callee View
        stopAutoReloading :function() {
            window.clearInterval(window.weatherIntervalId);
        }
})
;
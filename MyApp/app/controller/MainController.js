Ext.define('MyApp.controller.MainController', {
    extend: 'Ext.app.Controller',
    name: 'MainController',
    config: {
        refs: {
            screen: 'screen',
            mainNav: 'main',
            second: 'Second',
            theButton: 'screen button[type="myButton"]',
            backButton: 'Second button[type="backButton"]'
        },
        control : {
            theButton: {
                tap: 'buttonClicked'
            },
            backButton: {
                tap: 'backButtonClicked'
            }
        }
    },

    buttonClicked: function(button) {
        console.log('MainController this : '+this.name);
        var myName = this.getScreen().down('textfield').getValue();
        console.log(myName);
        Ext.Viewport.down('main').push(Ext.create('MyApp.view.Second',{
            content: myName}));
    },

    backButtonClicked: function (button) {
        this.getMainNav().pop();
    }
});
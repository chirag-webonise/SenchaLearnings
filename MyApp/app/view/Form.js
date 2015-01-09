Ext.define('MyApp.view.Form', {
    extend: 'Ext.form.Panel',
    config: {
        url: 'postUser.php',
        items: [
            {
                xtype: 'fieldset',
                defaults: {
                    required: true,
                    labelAlign: 'left',
                    labelWidth: '40%'
                },
                instructions: 'Please enter the information above.',
                title: 'Personal Info',
                items: [
                    {
                        xtype: 'textfield',
                        label: 'Name',
                        name: 'name'
                    },
                    {
                        xtype: 'passwordfield',
                        clearIcon: false,
                        label: 'Password',
                        name: 'password'
                    },
                    {
                        xtype: 'textfield',
                        disabled: true,
                        label: 'Disabled',
                        name: 'disabled'
                    },
                    {
                        xtype: 'emailfield',
                        label: 'Email',
                        name: 'email',
                        placeHolder: 'email@example.com'
                    },
                    {
                        xtype: 'urlfield',
                        label: 'Url',
                        name: 'url',
                        placeHolder: 'http://example.com'
                    },
                    {
                        xtype: 'checkboxfield',
                        label: 'Cool',
                        name: 'cool'
                    },
                    {
                        xtype: 'spinnerfield',
                        id: 'spinner',
                        label: 'Spinner',
                        name: 'spinner'
                    },
                    {
                        xtype: 'selectfield',
                        label: 'Rank',
                        name: 'rank',
                        displayField: 'title',
                        store: 'RankStore',
                        valueField: 'rank'
                    },
                    {
                        xtype: 'datepickerfield',
                        label: 'Field',
                        name: 'date',
                        placeHolder: 'mm/dd/yyyy'
                    },
                    {
                        xtype: 'hiddenfield',
                        name: 'hidden'
                    },
                    {
                        xtype: 'textareafield',
                        label: 'Bio',
                        name: 'bio',
                        maxLength: 60,
                        maxRows: 10
                    },
                    {
                        xtype: 'sliderfield',
                        label: 'Height',
                        name: 'height'
                    },
                    {
                        xtype: 'togglefield',
                        label: 'Security Mode',
                        name: 'enable'
                    },
                    {
                        xtype: 'radiofield',
                        label: 'Red Team',
                        name: 'team',
                        value: 'redteam'
                    },
                    {
                        xtype: 'radiofield',
                        label: 'Blue Team',
                        name: 'team',
                        value: 'blueteam'
                    }
                ]
            },
            {
                xtype: 'fieldset',
                title: 'Favorite color',
                items: [
                    {
                        xtype: 'radiofield',
                        label: 'Red',
                        name: 'color',
                        value: 'red'
                    },
                    {
                        xtype: 'radiofield',
                        label: 'Green',
                        name: 'color',
                        value: 'green',
                        checked: true
                    }
                ]
            },
            {
                xtype: 'fieldset',
                title: 'HTML5',
                items: [
                    {
                        xtype: 'numberfield',
                        label: 'Field',
                        name: 'number'
                    },
                    {
                        xtype: 'emailfield',
                        label: 'Field',
                        name: 'email2',
                        placeHolder: 'email@example.com'
                    },
                    {
                        xtype: 'urlfield',
                        label: 'Field',
                        name: 'url2',
                        placeHolder: 'http://example.com'
                    }
                ]
            },
            {
                xtype: 'fieldset',
                title: 'Single Select',
                items: [
                    {
                        xtype: 'selectfield',
                        name: 'options',
                        options: [
                            {
                                text: 'This is just a big select with text that is overflowing',
                                value: '1'
                            },
                            {
                                text: 'Another item',
                                value: '2'
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'fieldset',
                title: 'Single Text',
                items: [
                    {
                        xtype: 'textfield',
                        name: 'single_text'
                    }
                ]
            },
            {
                xtype: 'fieldset',
                title: 'Single Toggle',
                items: [
                    {
                        xtype: 'togglefield',
                        value: 1
                    }
                ]
            },
            {
                xtype: 'fieldset',
                title: 'Single Slider',
                items: [
                    {
                        xtype: 'sliderfield',
                        name: 'single_slider',
                        value: [
                            60
                        ]
                    }
                ]
            },
            {
                xtype: 'fieldset',
                title: 'Multiple Slider Thumbs',
                items: [
                    {
                        xtype: 'sliderfield',
                        name: 'multiple_slider',
                        value: [
                            40,
                            90
                        ]
                    }
                ]
            },
            {
                xtype: 'toolbar',
                docked: 'bottom',
                items: [
                    {
                        xtype: 'button',
                        itemId: 'loadModelBtn',
                        ui: 'round',
                        text: 'Load Model'
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'button',
                        itemId: 'resetBtn',
                        text: 'Reset'
                    },
                    {
                        xtype: 'button',
                        itemId: 'saveBtn',
                        ui: 'confirm',
                        text: 'Save'
                    }
                ]
            }
        ],
        listeners: [
            {
                fn: 'onLoadModelBtnTap',
                event: 'tap',
                delegate: '#loadModelBtn'
            },
            {
                fn: 'onResetBtnTap',
                event: 'tap',
                delegate: '#resetBtn'
            },
            {
                fn: 'onSaveBtnTap',
                event: 'tap',
                delegate: '#saveBtn'
            },
            {
                fn: 'onMyformpanelSubmit',
                event: 'submit'
            },
            {
                fn: 'onMyformpanelException',
                event: 'exception'
            }
        ]
    },

    onLoadModelBtnTap: function(button, e, eOpts) {
        if (!Info.user) {
            var date = new Date();
            date.setMonth(4);
            date.setYear(1989);
            date.setDate(1);

            Info.user = Ext.ModelMgr.create({
                'name': 'Akura',
                'password': 'secret',
                'email': 'saru@sencha.com',
                'disabled': 'disabled',
                'url': 'http://sencha.com',
                'single_slider': 10,
                'multiple_slider': [20, 40],
                'number': 20,
                'height': 20,
                'spinner': 5,
                'enable': 1,
                'cool': true,
                'date': date,
                'team': 'redteam',
                'color': 'blue',
                'rank': 'padawan',
                'secret': true,
                'bio': 'Learned the hard way !'
            }, 'Info.model.User');
        }

        this.setRecord(Info.user);
    },

    onResetBtnTap: function(button, e, eOpts) {
                this.reset();
    },

    onSaveBtnTap: function(button, e, eOpts) {
        if (Info.user) {
            this.updateRecord(Info.user, true);
        }
        this.submit({
            waitMsg: {
                message: 'Submitting',
                cls: 'demos-loading'
            }
        });
    },

    onMyformpanelSubmit: function(formpanel, result, e, eOpts) {
                console.log('success', Ext.toArray(arguments));
    },

    onMyformpanelException: function(formpanel, result, eOpts) {
                console.log('failure', Ext.toArray(arguments));
    }

});
/**
 * @class Oskari.paikkatietoikkuna.Main
 *
 * Launcher class for a paikkatietoikkuna.fi map window
 */
Oskari.clazz.define('Oskari.paikkatietoikkuna.Main', function() {

    this.args = null;
    this.styleBndl = null;
}, {

    /**
     * @method processArgs
     *
     * applies page args to this instance
     */
    processArgs : function(args) {
        this.args = args;
        this.styleBndl = args.style;
    },
    /**
     * @method start
     *
     * starts the application with bundle definitions declared
     * in property appSetup.startupSequence
     */
    start : function() {

        var me = this;

        var appSetup = this.appSetup;
        var appConfig = this.appConfig;
        var app = Oskari.app;

        /* me.applyStyle(appSetup,'ui'); */

        app.setApplicationSetup(appSetup);
        app.setConfiguration(appConfig);
        app.startApplication(function(startupInfos) {
            me.instance = startupInfos.bundlesInstanceInfos.mapfull.bundleInstance;
            // var ugStartup =
            //     {
            //         'instanceProps': {},
            //         'title': 'Guided Tour',
            //         'bundleinstancename': 'guidedtour',
            //         'fi': 'guidedtour',
            //         'sv': 'guidedtour',
            //         'en': 'guidedtour',
            //         'bundlename': 'guidedtour',
            //         'metadata': {
            //             'Import-Bundle': {
            //                 'guidedtour': {
            //                     'bundlePath':
            // '/Oskari/packages/sample/bundle/'
            //                 }
            //             },
            //             'Require-Bundle-Instance': [ ]
            //         }
            //     };
            // Oskari.bundle_facade.playBundle(ugStartup, function() {});
        });
    },
    /**
     * @static
     * @property appConfig
     */
    appConfig : {
        // bundle id
        'mapfull' : {
            // properties that will be made available before bundle start()
            // 'key' : 'value'
            // can be accessed in mapfull.start() like:
            // alert('This should return "value" :' + this.key);
        }
    },

    /**
     * @static
     * @property appSetup.startupSequence
     */
    appSetup : {

        startupSequence : [
        // openlayers
        {
            // style selection may be done with CSS Links also - just for demo
            title : 'OpenLayers',
            fi : 'OpenLayers',
            sv : '?',
            en : 'OpenLayers',
            bundlename : 'openlayers-default-theme',
            bundleinstancename : 'openlayers-default-theme',
            metadata : {
                "Import-Bundle" : {
                    "openlayers-single-full" : {
                        bundlePath : '/Oskari/packages/openlayers/bundle/'
                    },
                    "openlayers-default-theme" : {
                        bundlePath : '/Oskari/packages/openlayers/bundle/'
                    }
                },
                "Require-Bundle-Instance" : []
            },
            instanceProps : {}
        },

        // main app
        {
            title : 'Map',
            fi : 'Map',
            sv : '?',
            en : 'Map',
            bundlename : 'mapfull',
            bundleinstancename : 'mapfull',
            metadata : {
                "Import-Bundle" : {
                    "core-base" : {
                        bundlePath : '/Oskari/packages/framework/bundle/'
                    },
                    "core-map" : {
                        bundlePath : '/Oskari/packages/framework/bundle/'
                    },
                    "sandbox-base" : {
                        bundlePath : '/Oskari/packages/framework/bundle/'
                    },
                    "sandbox-map" : {
                        bundlePath : '/Oskari/packages/framework/bundle/'
                    },
                    "event-base" : {
                        bundlePath : '/Oskari/packages/framework/bundle/'
                    },
                    "event-map" : {
                        bundlePath : '/Oskari/packages/framework/bundle/'
                    },
                    "event-map-layer" : {
                        bundlePath : '/Oskari/packages/framework/bundle/'
                    },
                    "request-base" : {
                        bundlePath : '/Oskari/packages/framework/bundle/'
                    },
                    "request-map" : {
                        bundlePath : '/Oskari/packages/framework/bundle/'
                    },
                    "request-map-layer" : {
                        bundlePath : '/Oskari/packages/framework/bundle/'
                    },
                    "service-base" : {
                        bundlePath : '/Oskari/packages/framework/bundle/'
                    },
                    "service-map" : {
                        bundlePath : '/Oskari/packages/framework/bundle/'
                    },
                    "common" : {
                        bundlePath : '/Oskari/packages/framework/bundle/'
                    },
                    "domain" : {
                        bundlePath : '/Oskari/packages/framework/bundle/'
                    },
                    "runtime" : {
                        bundlePath : '/Oskari/packages/framework/bundle/'
                    },
                    "mapmodule-plugin" : {
                        bundlePath : '/Oskari/packages/framework/bundle/'
                    },
                    "mapwfs" : {
                        bundlePath : '/Oskari/packages/framework/bundle/'
                    },
                    "mapwmts" : {
                        bundlePath : '/Oskari/packages/framework/bundle/'
                    },
                    "mapfull" : {
                        bundlePath : '/Oskari/packages/framework/bundle/'
                    }
                },
                "Require-Bundle-Instance" : []

            },
            instanceProps : {}
        },
        // Oskari DIV Manazer
        {
            title : 'Oskari DIV Manazer',
            fi : 'Oskari DIV Manazer',
            sv : '?',
            en : 'Oskari DIV Manazer',
            bundlename : 'divmanazer',
            bundleinstancename : 'divmanazer',
            metadata : {
                "Import-Bundle" : {
                    "divmanazer" : {
                        bundlePath : '/Oskari/packages/framework/bundle/'
                    }
                },
                "Require-Bundle-Instance" : []
            },
            instanceProps : {}
        }, {
            title : 'Toolbar',
            fi : 'toolbar',
            sv : '?',
            en : '?',
            bundlename : 'toolbar',
            bundleinstancename : 'toolbar',
            metadata : {
                "Import-Bundle" : {
                    "toolbar" : {
                        bundlePath : '/Oskari/packages/framework/bundle/'
                    }
                },
                "Require-Bundle-Instance" : []
            },
            instanceProps : {}
        }, {
            title : 'StateHandler',
            fi : 'jquery',
            sv : '?',
            en : '?',
            bundlename : 'statehandler',
            bundleinstancename : 'statehandler',
            metadata : {
                "Import-Bundle" : {
                    "statehandler" : {
                        bundlePath : '/Oskari/packages/framework/bundle/'
                    }
                },
                "Require-Bundle-Instance" : []
            },
            instanceProps : {}
        },

        // functionality utilizing div manazer below
        {
            title : 'Koordinaattinäyttö',
            fi : 'coordinatedisplay',
            sv : '?',
            en : '?',
            bundlename : 'coordinatedisplay',
            bundleinstancename : 'coordinatedisplay',
            metadata : {
                "Import-Bundle" : {
                    "coordinatedisplay" : {
                        bundlePath : '/Oskari/packages/framework/bundle/'
                    }
                },
                "Require-Bundle-Instance" : []
            },
            instanceProps : {}
        }, {
            title : 'Omat tiedot',
            fi : 'personaldata',
            sv : '?',
            en : '?',
            bundlename : 'personaldata',
            bundleinstancename : 'personaldata',
            metadata : {
                "Import-Bundle" : {
                    "personaldata" : {
                        bundlePath : '/Oskari/packages/framework/bundle/'
                    }
                },
                "Require-Bundle-Instance" : []
            },
            instanceProps : {}
        }, {
            title : 'Haku',
            fi : 'search',
            sv : '?',
            en : '?',
            bundlename : 'search',
            bundleinstancename : 'search',
            metadata : {
                "Import-Bundle" : {
                    "search" : {
                        bundlePath : '/Oskari/packages/framework/bundle/'
                    }
                },
                "Require-Bundle-Instance" : []
            },
            instanceProps : {}
        }, {
            title : 'Valitut karttatasot',
            fi : 'layerselection',
            sv : '?',
            en : '?',
            bundlename : 'layerselection2',
            bundleinstancename : 'layerselection2',
            metadata : {
                "Import-Bundle" : {
                    "layerselection2" : {
                        bundlePath : '/Oskari/packages/framework/bundle/'
                    }
                },
                "Require-Bundle-Instance" : []
            },
            instanceProps : {}
        }, {
            title : 'Karttatasot',
            fi : 'layerselector',
            sv : '?',
            en : '?',
            bundlename : 'layerselector2',
            bundleinstancename : 'layerselector2',
            metadata : {
                "Import-Bundle" : {
                    "layerselector2" : {
                        bundlePath : '/Oskari/packages/framework/bundle/'
                    }
                },
                "Require-Bundle-Instance" : []
            },
            instanceProps : {}
        }, {
            title : 'Karttajulkaisu',
            fi : 'jquery',
            sv : '?',
            en : '?',
            bundlename : 'publisher',
            bundleinstancename : 'publisher',
            metadata : {
                "Import-Bundle" : {
                    "publisher" : {
                        bundlePath : '/Oskari/packages/framework/bundle/'
                    }
                },
                "Require-Bundle-Instance" : []
            },
            instanceProps : {}

        }, {
            title : 'Info Box',
            fi : 'infobox',
            sv : '?',
            en : '?',
            bundlename : 'infobox',
            bundleinstancename : 'infobox',
            metadata : {
                "Import-Bundle" : {
                    "infobox" : {
                        bundlePath : '/Oskari/packages/framework/bundle/'
                    }
                },
                "Require-Bundle-Instance" : []
            },
            instanceProps : {}
        }, {
            title : 'Kohdetiedot',
            fi : 'Kohdetiedot',
            sv : '?',
            en : '?',
            bundlename : 'featuredata',
            bundleinstancename : 'featuredata',
            metadata : {
                "Import-Bundle" : {
                    "featuredata" : {
                        bundlePath : '/Oskari/packages/framework/bundle/'
                    }
                },
                "Require-Bundle-Instance" : []
            },
            instanceProps : {}
        }, {
            title : 'HelpBubble',
            fi : 'HelpBubble',
            sv : '?',
            en : '?',
            bundlename : 'userguide',
            bundleinstancename : 'userguide',
            metadata : {
                "Import-Bundle" : {
                    "userguide" : {
                        bundlePath : '/Oskari/packages/framework/bundle/'
                    }
                },
                "Require-Bundle-Instance" : []
            },
            instanceProps : {}
        }, {
            title : 'Metadata Flyout',
            fi : 'Metadata Flyout',
            sv : '?',
            en : '?',
            bundlename : 'metadataflyout',
            bundleinstancename : 'metadataflyout',
            metadata : {
                "Import-Bundle" : {
                    "metadataflyout" : {
                        bundlePath : '/Oskari/packages/catalogue/bundle/'
                    }
                },
                "Require-Bundle-Instance" : []
            },
            instanceProps : {}
        }, {
            title : 'Places',
            fi : 'Paikat',
            sv : 'Platsar',
            en : 'Places',
            bundlename : 'myplaces2',
            bundleinstancename : 'myplaces2',
            metadata : {
                "Import-Bundle" : {
                    "myplaces2" : {
                        bundlePath : '/Oskari/packages/framework/bundle/'
                    }
                },
                "Require-Bundle-Instance" : []
            },
            instanceProps : {}
        }, {
            'title' : 'GuidedTour',
            'bundleinstancename' : 'GuidedTour',
            'fi' : 'guidedtour',
            'sv' : 'guidedtour',
            'en' : 'guidedtour',
            'bundlename' : 'GuidedTour',
            'metadata' : {
                'Import-Bundle' : {
                    'guidedtour' : {
                        'bundlePath' : '/Oskari/packages/framework/bundle/'
                    }
                },
                'Require-Bundle-Instance' : []
            },
            'instanceProps' : {}
        }, {
            title : 'Legends',
            fi : 'Karttaselitteet',
            sv : 'Förklaringar',
            en : 'Legends',
            bundlename : 'maplegend',
            bundleinstancename : 'maplegend',
            metadata : {
                "Import-Bundle" : {
                    "maplegend" : {
                        bundlePath : '/Oskari/packages/framework/bundle/'
                    }
                },
                "Require-Bundle-Instance" : []
            },
            instanceProps : {}
        }, {
            title : 'BackendStatus',
            fi : 'Taustajärjestelmien saatavuustiedot',
            sv : '???',
            en : 'Backend Status',
            bundlename : 'backendstatus',
            bundleinstancename : 'backendstatus',
            metadata : {
                "Import-Bundle" : {
                    "backendstatus" : {
                        bundlePath : '/Oskari/packages/framework/bundle/'
                    }
                },
                "Require-Bundle-Instance" : []
            },
            instanceProps : {}
        }, {
            title : 'PostProcessor',
            fi : 'PostProcessor',
            sv : 'PostProcessor',
            en : 'PostProcessor',
            bundlename : 'postprocessor',
            bundleinstancename : 'postprocessor',
            metadata : {
                "Import-Bundle" : {
                    "postprocessor" : {
                        bundlePath : '/Oskari/packages/framework/bundle/'
                    }
                },
                "Require-Bundle-Instance" : []
            },
            instanceProps : {}
        }]
    }
});

/**
 * Start when dom ready
 */
jQuery(document).ready(function() {
    var args = {
        oskariLoaderMode : 'dev',
        style : 'style1'
    };

    if (!ajaxUrl) {
        alert('Ajax URL not set - cannot proceed');
        return;
    }

    function getURLParameter(name) {
        var re = name + '=' + '([^&]*)(&|$)';
        var value = RegExp(re).exec(location.search);
        if (value && value.length && value.length > 1) {
            value = value[1];
        }
        if (value) {
            return decodeURI(value);
        }
        return null;
    }

    // returns empty string if parameter doesn't exist
    // otherwise returns '<param>=<param value>&'

    function getAdditionalParam(param) {
        var value = getURLParameter(param);
        if (value) {
            return param + '=' + value + '&';
        }
        return '';
    }

    var args = {
        oskariLoaderMode : 'yui',
        style : 'style1'
    };
    if (!ajaxUrl) {
        alert('Ajax URL not set - cannot proceed');
        return;
    }

    // populate url with possible control parameters
    ajaxUrl += getAdditionalParam('zoomLevel');
    ajaxUrl += getAdditionalParam('coord');
    ajaxUrl += getAdditionalParam('mapLayers');
    ajaxUrl += getAdditionalParam('oldId');
    ajaxUrl += getAdditionalParam('viewId');

    ajaxUrl += getAdditionalParam('isCenterMarker');
    ajaxUrl += getAdditionalParam('address')
    ajaxUrl += getAdditionalParam('showGetFeatureInfo');
    ajaxUrl += getAdditionalParam('nationalCadastralReference');

    ajaxUrl += getAdditionalParam('nationalCadastralReferenceHighlight');
    ajaxUrl += getAdditionalParam('wfsFeature');
    ajaxUrl += getAdditionalParam('wfsHighlightLayer');

    if (!language) {
        // default to finnish
        language = 'fi';
    }
    Oskari.setLang(language);

    // if (location.search && location.search.length > 1) {
    //     ajaxUrl +=
    //         location.search.substr(1, location.search.length) + '&';
    // }

    Oskari.setLoaderMode('dev');
    Oskari.setPreloaded(false);

    if (args.oskariLoaderAsync && args.oskariLoaderAsync == 'on') {
        Oskari.setSupportBundleAsync(true);
    }
    var main = Oskari.clazz.create('Oskari.paikkatietoikkuna.Main');
    main.processArgs(args);

    if (ajaxUrl.indexOf('http') == 0) {
        var hostIdx = ajaxUrl.indexOf('://') + 3;
        var pathIdx = ajaxUrl.indexOf('/', hostIdx);
        ajaxUrl = ajaxUrl.substring(pathIdx);
    }

    jQuery.ajax({
        type : 'POST',
        dataType : 'json',
        beforeSend : function(x) {
            if (x && x.overrideMimeType) {
                x.overrideMimeType("application/j-son;charset=UTF-8");
            }
        },
        url : ajaxUrl + 'action_route=GetAppSetup',
        success : function(appSetup) {
            if (appSetup.startupSequence && appSetup.configuration) {
                main.appSetup.startupSequence = appSetup.startupSequence;
                main.appConfig = appSetup.configuration;
                main.start(function(instance) {
                    var sb = instance.getSandbox();
                    //sandbox.disableDebug();
                    //sandbox._core.disableDebug();
                });
            } else {
                jQuery('#mapdiv').append('Unable to start');
            }
        },
        error : function(jqXHR, textStatus) {
            if (jqXHR.status != 0) {
                jQuery('#mapdiv').append('Unable to start');
            }
        }
    });
});

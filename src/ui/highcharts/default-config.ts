

export const defaultConfig : HighchartsOptions = {
    chart         : {
        borderWidth     : 0,
        borderColor     : '#322f8f',
        events          : {},
        resetZoomButton : {
            theme : {
                fill : "#F0F6F8"
            }
        }
    },
    // colors : chartUtils.getGraphColors(),
    title         : {
        text : null
    },
    subtitle      : {
        text : null
    },
    xAxis         : {
        alternateGridColor : 'rgba(109,176,194,0.1)'
    },
    yAxis         : {
        title : {
            text : null
        }
    },
    tooltip       : {
        crosshairs : true
    },
    legend        : {
        margin : 8
    },
    plotOptions   : {
        series : {
            marker : {
                enabled : false
            }
        },
        area   : {
            fillColor : "rgba(170, 180, 220, 0.3)",
            marker    : {
                enabled : false,
                symbol  : 'circle',
                radius  : 2,
                states  : {
                    hover : {
                        enabled : true
                    }
                }
            }
        }
    },
    series        : null,
    scrollbar     : {
        barBackgroundColor    : '#DADADA',
        buttonBackgroundColor : '#DADADA',
        trackBackgroundColor  : '#F5F5F5'
    },
    navigation    : {
        buttonOptions : {
            theme : {
                fill : "#F5F5F5"
            }
        }
    },
    rangeSelector : {
        buttonSpacing : 5,
        inputEnabled  : false,
        buttons       : [
            { type : 'month', count : 1, text : '1m' },
            { type : 'month', count : 3, text : '3m' },
            { type : 'month', count : 6, text : '6m' },
            { type : 'year', count : 1, text : '1an' },
            { type : 'all', text : 'Tout' }
        ],
        buttonTheme   : {
            r      : 8,
            width  : 35,
            fill   : "#f2f2f7",
            style  : {
                color  : "#3F3F3F",
                cursor : "pointer"
            },
            states : {
                hover  : {
                    fill  : "#DADADA",
                    style : {
                        color : "#3F3F3F"
                    }
                },
                select : {
                    fill  : "#bfd7ff",
                    style : {
                        color : "#3F3F3F"
                    }
                }
            }
        }
    },
    navigator     : {
        enabled : false,
        handles : {
            backgroundColor : '#FFFFFF',
            borderColor     : '#000000'
        },
        series  : {
            id : "highcharts-navigator-series"
        }
    },
    exporting     : {
        enabled : true,
        // url     : exportUrl,
        buttons : {
            contextButton : {
                align         : "right",
                menuClassName : 'highcharts-contextmenu',
                symbol        : 'menu',
                _titleKey     : 'contextButtonTitle',
                menuItems     : []
            }
        }
    },
    credits       : {
        enabled : false
    }
};
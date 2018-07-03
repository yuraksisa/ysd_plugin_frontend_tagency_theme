requirejs.config({
		
    paths: {
        "jquery"                  : "jquery", 
        "jquery.migrate"          : "jquery.migrate",
        "jquery.ui"               : "jquery.ui", 
        "jquery.ui.datepicker-es" : "jquery.ui.datepicker-es",
        "jquery.ui.datepicker-en" : "jquery.ui.datepicker-en",
        "jquery.ui.datepicker-ca" : "jquery.ui.datepicker-ca",
        "jquery.ui.datepicker-it" : "jquery.ui.datepicker-it",
        "jquery.ui.datepicker.validation" : "jquery.ui.datepicker.validation",        
        "jquery.validate"         : "jquery.validate",
        "jquery.form"             : "jquery.form",
        "jquery.formparams"       : "jquery.formparams",
        "bootstrap"               : "bootstrap",
        "bootstrap.select"        : "bootstrap.select",
        "jquery.prettyPhoto"      : "jquery.prettyPhoto",
        "jquery.easing"           : "jquery.easing",
        "jquery.smoothscroll"     : "jquery.smoothscroll",
        "superfish"               : "superfish",
        "jquery.sticky"           : "jquery.sticky",
        "swiper.jquery"           : "swiper.jquery",
        "json2"                   : "json2",
        "datejs"                  : "datejs",
        "ysdtemplate"             : "ysdtemplate",
        "async"                   : "async",
        "jquery.toast"            : "jquery.toast",
        "select2"                 : "select2",
        // Travel agency theme - start
        "jquery.parallax.resize"  : "jquery.parallax.resize",
        "SmoothScroll"            : "SmoothScroll",
        "jquery.appear"           : "jquery.appear",
        "jquery.caroufredsel"     : "jquery.caroufredsel",
        "jquery.touchSwipe"       : "jquery.touchSwipe",
        "jquery.ui.totop"         : "jquery.ui.totop"
        // Travel agency theme - end
    },

    shim: {
        "jquery.migrate": ['jquery'],
        "jquery.ui"    : ['jquery'],
        "jquery.ui.datepicker-es" : ['jquery', 'jquery.ui'],
        "jquery.ui.datepicker.validation" : ["jquery.ui.datepicker-es"],
        "jquery.validate" : ['jquery'],
        "jquery.formparams" : ['jquery'],
        "jquery.form" : ['jquery'],
        "bootstrap" : ['jquery'],
        "superfish": ['jquery'],
        "jquery.prettyPhoto": ['jquery'],
        "jquery.sticky": ['jquery'],
        "jquery.easing": ['jquery'],
        "jquery.smoothscroll" : ['jquery'],
        "jquery.toast": ['jquery'],
        "swiper.jquery": ['jquery'],
        "select2" : ['jquery'],
        // Travel Agency theme - start
        "jquery.parallax.resize" : ['jquery'],
        "SmoothScroll" : {},
        "jquery.appear" : ['jquery'],
        "jquery.caroufredsel" : ['jquery'],
        "jquery.touchSwipe" : ['jquery'],
        "jquery.ui.totop" : ['jquery'],
        // Travel agency theme - end
        "bootstrap.select": ['bootstrap'],
        "json2" : { 
          "exports": 'JSON'
        },
        "datejs" : {},
        "modernizr" : {
          "exports": 'Modernizr'
        },      
        "ysdtemplate": {},
        "async": {}
    }
	
});
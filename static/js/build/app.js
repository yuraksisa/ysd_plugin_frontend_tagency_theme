//
// Built using the following
// node r.js -o mainConfigFile=app.build.config.js name=app.js out=../built.js baseUrl=.
//
requirejs(['jquery',
           'jquery.migrate',
           'jquery.ui',
           'jquery.ui.datepicker-es',
           'jquery.ui.datepicker-ca',
           'jquery.ui.datepicker-it',
           'jquery.ui.datepicker-en',
           'jquery.validate', 
           'jquery.ui.datepicker.validation',
           'jquery.formparams',
           'jquery.form',
           'bootstrap',
           'superfish',
           'jquery.prettyPhoto',
           'jquery.sticky',
           'jquery.easing',
           'jquery.smoothscroll',
           'jquery.toast',
           'swiper.jquery',     
           'bootstrap.select',
           'select2',
           // Travel Agency theme - start
           "jquery.parallax.resize",
           "SmoothScroll",
           "jquery.appear",
           "jquery.caroufredsel",
           "jquery.touchSwipe",
           "jquery.ui.totop",
           "jquery.isotope",
           // Travel Agency theme - stop
           'json2', 
           'datejs',
           'YSDAbstractDataSource',         // DataSource
           'YSDMemoryDataSource',           // DataSource           
           'YSDRemoteDataSource',           // DataSource
           'YSDDataAdapter',                // Data adapter
           'YSDListSelectorModel',          // Select an element from a list (checkboxes)
           'YSDSelectSelector',             // Select an element from a select
           'YSDEventTarget', 
           'ysdtemplate',
           'async'
        ],
        function() {
          // none	
        });

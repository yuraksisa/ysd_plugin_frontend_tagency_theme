module YsdPluginFrontendTagencyTheme
  module SinatraAdmin

    def self.registered(app)


      #
      # Setup the theme
      #
      app.get '/admin/booking/config/front-end-theme/tagency', :allowed_usergroups => ['booking_manager', 'staff'] do
        
        load_page :tagency_theme_setup

      end

    end

  end
end
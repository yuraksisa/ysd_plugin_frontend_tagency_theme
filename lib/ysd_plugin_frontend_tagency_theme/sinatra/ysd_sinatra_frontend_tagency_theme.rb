module YsdPluginFrontendTagencyTheme
  module Sinatra

    def self.registered(app)

      # Add the local folders to the views and translations
      app.settings.views = Array(app.settings.views).push(File.expand_path(File.join(File.dirname(__FILE__), '..', '..', '..', 'views')))

      app.get '/tagency/slider/slide-1' do
        if (background_slide_1 = SystemConfiguration::Variable.get_value('frontend.skin.tagency.slider1_img_bg', '.')) != '.'
          redirect background_slide_1
        else
          redirect "http://eazzy.me/html/rentit-onepage/assets/img/preview/slider/slide-1.jpg"
        end
      end

      #
      # Serves static content
      #
      app.get '/tagency/*' do

        serve_static_resource(request.path_info.gsub(/^\/tagency/,''), File.join(File.dirname(__FILE__), '..', '..', '..', 'static'), 'tagency')

      end

    end

  end
end

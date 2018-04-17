require 'ysd-plugins' unless defined?Plugins::Plugin

Plugins::SinatraAppPlugin.register :frontend_tagency_theme do

  name=        'frontend_tagency_theme'
  author=      'yurak sisa'
  description= 'tryton'
  version=     '0.1'
  sinatra_extension YsdPluginFrontendTagencyTheme::Sinatra
  hooker YsdPluginFrontendTagencyTheme::FrontendTagencyThemeExtension

end

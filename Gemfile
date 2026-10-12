source "https://rubygems.org"
# Hello! This is where you manage which Jekyll version is used to run.
# When you want to use a different version, change it below, save the
# file and run `bundle install`. Run Jekyll with `bundle exec`, like so:
#
#     bundle exec jekyll serve
#
# This will help ensure the proper Jekyll version is running.
# Happy Jekylling!
# GitHub Pages builds this site with Jekyll 3.10, so stay on that line.
gem "jekyll", "~> 3.10"
# This is the default theme for new Jekyll sites. You may change this to anything you like.
gem "minima", "~> 2.5"
# The github-pages gem is deliberately not used: its last release (232) pins
# jekyll-remote-theme 0.4.3, which caps rubyzip below 3.0 and blocks the fix
# for GHSA-47m2-wp7j-p9vc. The plugins the site relies on are listed instead.
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
  gem "jekyll-github-metadata"
  gem "jekyll-remote-theme"
end
gem "rubyzip", ">= 3.4.0"

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1", :platforms => [:mingw, :x64_mingw, :mswin]

# Lock `http_parser.rb` gem to `v0.6.x` on JRuby builds since newer versions of the gem
# do not have a Java counterpart.
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]

gem "webrick", "~> 1.9"

gem "jekyll-include-cache", group: :jekyll_plugins

# Ruby 3.4+ no longer bundles these, and Jekyll 3.10 does not declare them.
gem "base64"
gem "bigdecimal"

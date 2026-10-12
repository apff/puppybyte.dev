# PuppyByte Dev Site

Static Jekyll site for PuppyByte apps (Xpenses, A Lista) deployed to GitHub Pages at puppybyte.dev.

## Key Commands
```bash
bundle install            # Install dependencies
bundle exec jekyll serve   # Local dev with live reload
bundle exec jekyll build   # Build for production (_site/)
```

## High-Signal Context
- **Content Data**: Site data is managed in `_data/projects.yml`, `_data/blog_posts.yml`, and `_data/about_us.yml`.
- **App Pages**: Xpenses-specific pages and blog posts are located in the `xpenses/` directory.
- **Custom Config**: `xpenses_app_store_url` in `_config.yml` is used across the site for app store links.
- **Build Artifacts**: `_site/`, `.jekyll-cache/`, and `.jekyll-metadata` are ignored by git.

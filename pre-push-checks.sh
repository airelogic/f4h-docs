echo
echo ________________________
echo Ensuring gems up to date
bundle install

echo
echo ___________________________________
echo Building production version of site
bundle exec jekyll build -t --config _config.yml,_config-no-url.yml

echo
echo ____________________________________
echo Running checks on the generated HTML
bundle exec htmlproofer ./_site --url-ignore "/#.*/,/http://.*/,/https://.*/"

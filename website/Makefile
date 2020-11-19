help:           ## Show this help.
	@fgrep -h "##" $(MAKEFILE_LIST) | fgrep -v fgrep | sed -e 's/\\$$//' | sed -e 's/##//'

start-development: ## start dev server
	yarn start

build: ## build static files
	yarn build

release: ## release to github pages
	USE_SSH=true ORGANIZATION_NAME=Coopreneurs CURRENT_BRANCH=master yarn publish-gh-pages

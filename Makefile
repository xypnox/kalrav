.DEFAULT_GOAL := heroku

init:
		pip install -r requirements.txt

build:
		rm -rf client/build
		cd client && yarn build

switch:
		git checkout deploy-heroku
		git merge master --no-edit

freeze:
		rm -f requirements.txt
		pip freeze | grep -v "pkg-resources" > requirements.txt

commit:
		git add --all
		git commit -m --allow-empty "BUILD $(date +"%D %T")"

deploy: client/build/*
		make freeze
		git push heroku deploy-heroku:master

heroku: switch build freeze commit deploy
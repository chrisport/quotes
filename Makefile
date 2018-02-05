.PHONY: all build

all: build

build:
	npm run-script build

deploy:

deploy:
	npm run-script build
	rm -rf docs
	mkdir docs
	echo "quotes.chrisport.ch" > docs/CNAME
	cp -r dist/* docs
	git add docs
	git commit -m "Automatic deploy commit. Updated Github Pages/docs folder"
	git push origin master


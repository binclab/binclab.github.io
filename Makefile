all:
	bundle exec jekyll serve

push:
	git add --all
	git commit -am "Update"
	git push

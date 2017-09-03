modules_dir = ./node_modules/.bin


.PHONY: all
all: install build


.PHONY: install
install:
	npm update


.PHONY: clean
clean:
	rm -rf built_for_tester_app built_for_publishing


.PHONY: build 
build: clean
	$(modules_dir)/webpack
	$(modules_dir)/tsc
# Even when using the `exclude` option in `tsconfig.json`,
# the compiler was generating a type declaration file for
# `_TesterApp.ts`.
	find built_for_publishing -name "_TesterApp.*" -exec rm {} \;
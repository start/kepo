modules_dir = ./node_modules/.bin
built_dir = built


.PHONY: all
all: install build


.PHONY: install
install:
	npm update


.PHONY: clean
clean:
	rm -rf $(built_dir)


.PHONY: build 
build: clean
	$(modules_dir)/webpack

all: wrapping.js wrapping2.js memory.js malloc.js callback.js pointer.js

wrapping.js:	wrapping.c makefile
	emcc -s EXPORTED_FUNCTIONS=["_addNum"] -s EXPORTED_RUNTIME_METHODS="ccall","cwrap" $< -o $@

%.js: %.c
	emcc -s ERROR_ON_UNDEFINED_SYMBOLS=0 $< -o $@

callback.js: callback.c
	emcc --js-library progress.js $< -o $@

pointer.js: pointer.cc
	em++ -s ALLOW_TABLE_GROWTH -s EXPORTED_RUNTIME_METHODS="addFunction" $< -o $@

clean:
	rm wrapping.js wrapping2.js memory.js malloc.js callback.js pointer.js

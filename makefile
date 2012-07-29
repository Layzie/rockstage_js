all: compress

compress:
	uglifyjs --output ./rockstage.min.js lib/rockstage.js; cp lib/rockstage.js ./rockstage.js

clean:
	rm ./rockstage.js ./rockstage.min.js

.PHONY: Rockstage.js is compressed.


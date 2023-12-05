version=1.0.0

generate:
	$(MAKE) -C ./modules/js-client-generator/ generate-js-client service=product-configurator version=${version}
push:
	bash git_push.sh
publish:
	#GOPROXY=proxy.golang.org go list -m github.com/Gemini-Commerce/js-client-product-confgiurator@v${version}
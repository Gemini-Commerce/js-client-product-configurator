version=1.0.0

generate:
	$(MAKE) -C ./modules/js-client-generator/ generate-js-client service=product-configurator version=${version}
push:
	bash git_push.sh
publish:
	npm publish --access public
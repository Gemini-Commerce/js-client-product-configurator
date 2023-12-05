/**
 * Product Configurator Service
 * ## Introduction  This comprehensive guide will equip you with the knowledge to integrate and leverage our Product Configurator Service in your applications.  ## Quick Start  Get up and running in no time! Follow these steps to kickstart your integration:  1. **Authentication:** Obtain your integration JWT to authenticate your requests. 2. **Client Libraries:** Explore our GitHub repositories to grab client libraries in your preferred programming language. 3. **API Overview:** Familiarize yourself with our RESTful API using the OpenAPI specification.  ## Integration  ### API Overview  Our RESTful API is the gateway to unlocking the full potential of Product Configurator. Check out the detailed [API Reference](/docs/category/configurator) for a granular understanding of each endpoint and request/response format.  ### Client Libraries  To expedite your integration process, we provide client libraries for various programming languages. Find the one that suits your stack in our [GitHub repositories](https://github.com/Gemini-Commerce).  ### Authentication  Security is paramount. Learn how to authenticate your requests using JWT. This ensures a secure and reliable connection between your application and Product Configurator.  ## Configuration Management  ### Configurator Lifecycle  Understand the lifecycle of configurators, from draft to active and deleted. This flexibility allows you to manage configurations at your own pace.  ### Steps and Options  Configure product steps with ease and define options effortlessly. Explore the power of dependencies to create dynamic and intuitive configurations.  ### Matrices  Delve into matrices—your secret weapon. Explore price and weight matrices, and learn how configured steps influence properties and pricing.  ### Price Management  Unleash dynamic pricing with our versatile price matrices. From fixed prices to incremental structures, adapt to diverse pricing models effortlessly.  ## Security  Your data is in safe hands. Discover how Product Configurator ensures security through JWT authentication, safeguarding your sensitive information.  ## Backward Compatibility  Stay ahead of the curve. Learn about our versioning strategy, providing backward compatibility while allowing our service to evolve seamlessly.  ## Developer Support  Have questions? Need assistance? Write to us at [info@gemini-commerce.com](mailto:info@gemini-commerce.com) and we will get back to you.
 *
 * The version of the OpenAPI document: v1
 * Contact: info@gemini-commerce.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/gemini-commerce/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/gemini-commerce/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ProductConfiguratorService);
  }
}(this, function(expect, ProductConfiguratorService) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new ProductConfiguratorService.ProductconfiguratorstepBulkCreateRequestCreateEntity();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ProductconfiguratorstepBulkCreateRequestCreateEntity', function() {
    it('should create an instance of ProductconfiguratorstepBulkCreateRequestCreateEntity', function() {
      // uncomment below and update the code to test ProductconfiguratorstepBulkCreateRequestCreateEntity
      //var instance = new ProductConfiguratorService.ProductconfiguratorstepBulkCreateRequestCreateEntity();
      //expect(instance).to.be.a(ProductConfiguratorService.ProductconfiguratorstepBulkCreateRequestCreateEntity);
    });

    it('should have the property label (base name: "label")', function() {
      // uncomment below and update the code to test the property label
      //var instance = new ProductConfiguratorService.ProductconfiguratorstepBulkCreateRequestCreateEntity();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new ProductConfiguratorService.ProductconfiguratorstepBulkCreateRequestCreateEntity();
      //expect(instance).to.be();
    });

    it('should have the property isRequired (base name: "isRequired")', function() {
      // uncomment below and update the code to test the property isRequired
      //var instance = new ProductConfiguratorService.ProductconfiguratorstepBulkCreateRequestCreateEntity();
      //expect(instance).to.be();
    });

    it('should have the property subjectToStepId (base name: "subjectToStepId")', function() {
      // uncomment below and update the code to test the property subjectToStepId
      //var instance = new ProductConfiguratorService.ProductconfiguratorstepBulkCreateRequestCreateEntity();
      //expect(instance).to.be();
    });

    it('should have the property hasMultipleSelection (base name: "hasMultipleSelection")', function() {
      // uncomment below and update the code to test the property hasMultipleSelection
      //var instance = new ProductConfiguratorService.ProductconfiguratorstepBulkCreateRequestCreateEntity();
      //expect(instance).to.be();
    });

    it('should have the property optionsHaveQuantity (base name: "optionsHaveQuantity")', function() {
      // uncomment below and update the code to test the property optionsHaveQuantity
      //var instance = new ProductConfiguratorService.ProductconfiguratorstepBulkCreateRequestCreateEntity();
      //expect(instance).to.be();
    });

  });

}));

/**
 * Product Configurator Service
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
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
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ProductConfiguratorService);
  }
}(this, function(expect, ProductConfiguratorService) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new ProductConfiguratorService.ProductconfiguratorstepBulkCreateResponse();
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

  describe('ProductconfiguratorstepBulkCreateResponse', function() {
    it('should create an instance of ProductconfiguratorstepBulkCreateResponse', function() {
      // uncomment below and update the code to test ProductconfiguratorstepBulkCreateResponse
      //var instance = new ProductConfiguratorService.ProductconfiguratorstepBulkCreateResponse();
      //expect(instance).to.be.a(ProductConfiguratorService.ProductconfiguratorstepBulkCreateResponse);
    });

    it('should have the property steps (base name: "steps")', function() {
      // uncomment below and update the code to test the property steps
      //var instance = new ProductConfiguratorService.ProductconfiguratorstepBulkCreateResponse();
      //expect(instance).to.be();
    });

  });

}));
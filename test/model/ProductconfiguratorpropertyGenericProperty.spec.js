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
    instance = new ProductConfiguratorService.ProductconfiguratorpropertyGenericProperty();
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

  describe('ProductconfiguratorpropertyGenericProperty', function() {
    it('should create an instance of ProductconfiguratorpropertyGenericProperty', function() {
      // uncomment below and update the code to test ProductconfiguratorpropertyGenericProperty
      //var instance = new ProductConfiguratorService.ProductconfiguratorpropertyGenericProperty();
      //expect(instance).to.be.a(ProductConfiguratorService.ProductconfiguratorpropertyGenericProperty);
    });

    it('should have the property propertyKey (base name: "propertyKey")', function() {
      // uncomment below and update the code to test the property propertyKey
      //var instance = new ProductConfiguratorService.ProductconfiguratorpropertyGenericProperty();
      //expect(instance).to.be();
    });

    it('should have the property propertyValue (base name: "propertyValue")', function() {
      // uncomment below and update the code to test the property propertyValue
      //var instance = new ProductConfiguratorService.ProductconfiguratorpropertyGenericProperty();
      //expect(instance).to.be();
    });

  });

}));

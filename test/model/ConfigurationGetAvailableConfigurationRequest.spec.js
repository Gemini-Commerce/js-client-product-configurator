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
    instance = new ProductConfiguratorService.ConfigurationGetAvailableConfigurationRequest();
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

  describe('ConfigurationGetAvailableConfigurationRequest', function() {
    it('should create an instance of ConfigurationGetAvailableConfigurationRequest', function() {
      // uncomment below and update the code to test ConfigurationGetAvailableConfigurationRequest
      //var instance = new ProductConfiguratorService.ConfigurationGetAvailableConfigurationRequest();
      //expect(instance).to.be.a(ProductConfiguratorService.ConfigurationGetAvailableConfigurationRequest);
    });

    it('should have the property tenantId (base name: "tenantId")', function() {
      // uncomment below and update the code to test the property tenantId
      //var instance = new ProductConfiguratorService.ConfigurationGetAvailableConfigurationRequest();
      //expect(instance).to.be();
    });

    it('should have the property productId (base name: "productId")', function() {
      // uncomment below and update the code to test the property productId
      //var instance = new ProductConfiguratorService.ConfigurationGetAvailableConfigurationRequest();
      //expect(instance).to.be();
    });

    it('should have the property selections (base name: "selections")', function() {
      // uncomment below and update the code to test the property selections
      //var instance = new ProductConfiguratorService.ConfigurationGetAvailableConfigurationRequest();
      //expect(instance).to.be();
    });

    it('should have the property propertyFilters (base name: "propertyFilters")', function() {
      // uncomment below and update the code to test the property propertyFilters
      //var instance = new ProductConfiguratorService.ConfigurationGetAvailableConfigurationRequest();
      //expect(instance).to.be();
    });

    it('should have the property configuratorId (base name: "configuratorId")', function() {
      // uncomment below and update the code to test the property configuratorId
      //var instance = new ProductConfiguratorService.ConfigurationGetAvailableConfigurationRequest();
      //expect(instance).to.be();
    });

  });

}));
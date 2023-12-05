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
    instance = new ProductConfiguratorService.DependencyListDependenciesRequest();
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

  describe('DependencyListDependenciesRequest', function() {
    it('should create an instance of DependencyListDependenciesRequest', function() {
      // uncomment below and update the code to test DependencyListDependenciesRequest
      //var instance = new ProductConfiguratorService.DependencyListDependenciesRequest();
      //expect(instance).to.be.a(ProductConfiguratorService.DependencyListDependenciesRequest);
    });

    it('should have the property tenantId (base name: "tenantId")', function() {
      // uncomment below and update the code to test the property tenantId
      //var instance = new ProductConfiguratorService.DependencyListDependenciesRequest();
      //expect(instance).to.be();
    });

    it('should have the property stepIds (base name: "stepIds")', function() {
      // uncomment below and update the code to test the property stepIds
      //var instance = new ProductConfiguratorService.DependencyListDependenciesRequest();
      //expect(instance).to.be();
    });

    it('should have the property pageSize (base name: "pageSize")', function() {
      // uncomment below and update the code to test the property pageSize
      //var instance = new ProductConfiguratorService.DependencyListDependenciesRequest();
      //expect(instance).to.be();
    });

    it('should have the property pageToken (base name: "pageToken")', function() {
      // uncomment below and update the code to test the property pageToken
      //var instance = new ProductConfiguratorService.DependencyListDependenciesRequest();
      //expect(instance).to.be();
    });

  });

}));
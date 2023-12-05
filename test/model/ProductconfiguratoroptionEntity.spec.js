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
    instance = new ProductConfiguratorService.ProductconfiguratoroptionEntity();
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

  describe('ProductconfiguratoroptionEntity', function() {
    it('should create an instance of ProductconfiguratoroptionEntity', function() {
      // uncomment below and update the code to test ProductconfiguratoroptionEntity
      //var instance = new ProductConfiguratorService.ProductconfiguratoroptionEntity();
      //expect(instance).to.be.a(ProductConfiguratorService.ProductconfiguratoroptionEntity);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new ProductConfiguratorService.ProductconfiguratoroptionEntity();
      //expect(instance).to.be();
    });

    it('should have the property grn (base name: "grn")', function() {
      // uncomment below and update the code to test the property grn
      //var instance = new ProductConfiguratorService.ProductconfiguratoroptionEntity();
      //expect(instance).to.be();
    });

    it('should have the property label (base name: "label")', function() {
      // uncomment below and update the code to test the property label
      //var instance = new ProductConfiguratorService.ProductconfiguratoroptionEntity();
      //expect(instance).to.be();
    });

    it('should have the property position (base name: "position")', function() {
      // uncomment below and update the code to test the property position
      //var instance = new ProductConfiguratorService.ProductconfiguratoroptionEntity();
      //expect(instance).to.be();
    });

    it('should have the property swatch (base name: "swatch")', function() {
      // uncomment below and update the code to test the property swatch
      //var instance = new ProductConfiguratorService.ProductconfiguratoroptionEntity();
      //expect(instance).to.be();
    });

    it('should have the property externalReferenceId (base name: "externalReferenceId")', function() {
      // uncomment below and update the code to test the property externalReferenceId
      //var instance = new ProductConfiguratorService.ProductconfiguratoroptionEntity();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "createdAt")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instance = new ProductConfiguratorService.ProductconfiguratoroptionEntity();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updatedAt")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instance = new ProductConfiguratorService.ProductconfiguratoroptionEntity();
      //expect(instance).to.be();
    });

  });

}));
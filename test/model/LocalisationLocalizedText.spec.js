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
    instance = new ProductConfiguratorService.LocalisationLocalizedText();
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

  describe('LocalisationLocalizedText', function() {
    it('should create an instance of LocalisationLocalizedText', function() {
      // uncomment below and update the code to test LocalisationLocalizedText
      //var instance = new ProductConfiguratorService.LocalisationLocalizedText();
      //expect(instance).to.be.a(ProductConfiguratorService.LocalisationLocalizedText);
    });

    it('should have the property value (base name: "value")', function() {
      // uncomment below and update the code to test the property value
      //var instance = new ProductConfiguratorService.LocalisationLocalizedText();
      //expect(instance).to.be();
    });

  });

}));

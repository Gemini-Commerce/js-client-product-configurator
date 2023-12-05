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

import ApiClient from '../ApiClient';
import LocalisationLocalizedText from './LocalisationLocalizedText';
import ProductconfiguratoroptionEntity from './ProductconfiguratoroptionEntity';

/**
 * The ProductconfiguratorstepEntity model module.
 * @module GeminiCommerce\ProductConfigurator/model/ProductconfiguratorstepEntity
 * @version v1
 */
class ProductconfiguratorstepEntity {
    /**
     * Constructs a new <code>ProductconfiguratorstepEntity</code>.
     * @alias module:GeminiCommerce\ProductConfigurator/model/ProductconfiguratorstepEntity
     */
    constructor() { 
        
        ProductconfiguratorstepEntity.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProductconfiguratorstepEntity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:GeminiCommerce\ProductConfigurator/model/ProductconfiguratorstepEntity} obj Optional instance to populate.
     * @return {module:GeminiCommerce\ProductConfigurator/model/ProductconfiguratorstepEntity} The populated <code>ProductconfiguratorstepEntity</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductconfiguratorstepEntity();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('grn')) {
                obj['grn'] = ApiClient.convertToType(data['grn'], 'String');
            }
            if (data.hasOwnProperty('label')) {
                obj['label'] = LocalisationLocalizedText.constructFromObject(data['label']);
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = LocalisationLocalizedText.constructFromObject(data['description']);
            }
            if (data.hasOwnProperty('subjectToStepId')) {
                obj['subjectToStepId'] = ApiClient.convertToType(data['subjectToStepId'], 'String');
            }
            if (data.hasOwnProperty('position')) {
                obj['position'] = ApiClient.convertToType(data['position'], 'String');
            }
            if (data.hasOwnProperty('isRequired')) {
                obj['isRequired'] = ApiClient.convertToType(data['isRequired'], 'Boolean');
            }
            if (data.hasOwnProperty('options')) {
                obj['options'] = ApiClient.convertToType(data['options'], [ProductconfiguratoroptionEntity]);
            }
            if (data.hasOwnProperty('hasMultipleSelection')) {
                obj['hasMultipleSelection'] = ApiClient.convertToType(data['hasMultipleSelection'], 'Boolean');
            }
            if (data.hasOwnProperty('optionsHaveQuantity')) {
                obj['optionsHaveQuantity'] = ApiClient.convertToType(data['optionsHaveQuantity'], 'Boolean');
            }
            if (data.hasOwnProperty('createdAt')) {
                obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'Date');
            }
            if (data.hasOwnProperty('updatedAt')) {
                obj['updatedAt'] = ApiClient.convertToType(data['updatedAt'], 'Date');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ProductconfiguratorstepEntity</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProductconfiguratorstepEntity</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['grn'] && !(typeof data['grn'] === 'string' || data['grn'] instanceof String)) {
            throw new Error("Expected the field `grn` to be a primitive type in the JSON string but got " + data['grn']);
        }
        // validate the optional field `label`
        if (data['label']) { // data not null
          LocalisationLocalizedText.validateJSON(data['label']);
        }
        // validate the optional field `description`
        if (data['description']) { // data not null
          LocalisationLocalizedText.validateJSON(data['description']);
        }
        // ensure the json data is a string
        if (data['subjectToStepId'] && !(typeof data['subjectToStepId'] === 'string' || data['subjectToStepId'] instanceof String)) {
            throw new Error("Expected the field `subjectToStepId` to be a primitive type in the JSON string but got " + data['subjectToStepId']);
        }
        // ensure the json data is a string
        if (data['position'] && !(typeof data['position'] === 'string' || data['position'] instanceof String)) {
            throw new Error("Expected the field `position` to be a primitive type in the JSON string but got " + data['position']);
        }
        if (data['options']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['options'])) {
                throw new Error("Expected the field `options` to be an array in the JSON data but got " + data['options']);
            }
            // validate the optional field `options` (array)
            for (const item of data['options']) {
                ProductconfiguratoroptionEntity.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {String} id
 */
ProductconfiguratorstepEntity.prototype['id'] = undefined;

/**
 * @member {String} grn
 */
ProductconfiguratorstepEntity.prototype['grn'] = undefined;

/**
 * @member {module:GeminiCommerce\ProductConfigurator/model/LocalisationLocalizedText} label
 */
ProductconfiguratorstepEntity.prototype['label'] = undefined;

/**
 * @member {module:GeminiCommerce\ProductConfigurator/model/LocalisationLocalizedText} description
 */
ProductconfiguratorstepEntity.prototype['description'] = undefined;

/**
 * @member {String} subjectToStepId
 */
ProductconfiguratorstepEntity.prototype['subjectToStepId'] = undefined;

/**
 * @member {String} position
 */
ProductconfiguratorstepEntity.prototype['position'] = undefined;

/**
 * @member {Boolean} isRequired
 */
ProductconfiguratorstepEntity.prototype['isRequired'] = undefined;

/**
 * @member {Array.<module:GeminiCommerce\ProductConfigurator/model/ProductconfiguratoroptionEntity>} options
 */
ProductconfiguratorstepEntity.prototype['options'] = undefined;

/**
 * @member {Boolean} hasMultipleSelection
 */
ProductconfiguratorstepEntity.prototype['hasMultipleSelection'] = undefined;

/**
 * @member {Boolean} optionsHaveQuantity
 */
ProductconfiguratorstepEntity.prototype['optionsHaveQuantity'] = undefined;

/**
 * @member {Date} createdAt
 */
ProductconfiguratorstepEntity.prototype['createdAt'] = undefined;

/**
 * @member {Date} updatedAt
 */
ProductconfiguratorstepEntity.prototype['updatedAt'] = undefined;






export default ProductconfiguratorstepEntity;


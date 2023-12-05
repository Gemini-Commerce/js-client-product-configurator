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
import ProductconfiguratorPropertyType from './ProductconfiguratorPropertyType';

/**
 * The ProductconfiguratorpropertyEntity model module.
 * @module GeminiCommerce\ProductConfigurator/model/ProductconfiguratorpropertyEntity
 * @version v1
 */
class ProductconfiguratorpropertyEntity {
    /**
     * Constructs a new <code>ProductconfiguratorpropertyEntity</code>.
     * @alias module:GeminiCommerce\ProductConfigurator/model/ProductconfiguratorpropertyEntity
     */
    constructor() { 
        
        ProductconfiguratorpropertyEntity.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProductconfiguratorpropertyEntity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:GeminiCommerce\ProductConfigurator/model/ProductconfiguratorpropertyEntity} obj Optional instance to populate.
     * @return {module:GeminiCommerce\ProductConfigurator/model/ProductconfiguratorpropertyEntity} The populated <code>ProductconfiguratorpropertyEntity</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductconfiguratorpropertyEntity();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('grn')) {
                obj['grn'] = ApiClient.convertToType(data['grn'], 'String');
            }
            if (data.hasOwnProperty('stepIdToOptionId')) {
                obj['stepIdToOptionId'] = ApiClient.convertToType(data['stepIdToOptionId'], {'String': 'String'});
            }
            if (data.hasOwnProperty('propertyKey')) {
                obj['propertyKey'] = ApiClient.convertToType(data['propertyKey'], 'String');
            }
            if (data.hasOwnProperty('propertyValue')) {
                obj['propertyValue'] = ApiClient.convertToType(data['propertyValue'], 'String');
            }
            if (data.hasOwnProperty('propertyType')) {
                obj['propertyType'] = ProductconfiguratorPropertyType.constructFromObject(data['propertyType']);
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
     * Validates the JSON data with respect to <code>ProductconfiguratorpropertyEntity</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProductconfiguratorpropertyEntity</code>.
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
        // ensure the json data is a string
        if (data['propertyKey'] && !(typeof data['propertyKey'] === 'string' || data['propertyKey'] instanceof String)) {
            throw new Error("Expected the field `propertyKey` to be a primitive type in the JSON string but got " + data['propertyKey']);
        }
        // ensure the json data is a string
        if (data['propertyValue'] && !(typeof data['propertyValue'] === 'string' || data['propertyValue'] instanceof String)) {
            throw new Error("Expected the field `propertyValue` to be a primitive type in the JSON string but got " + data['propertyValue']);
        }

        return true;
    }


}



/**
 * @member {String} id
 */
ProductconfiguratorpropertyEntity.prototype['id'] = undefined;

/**
 * @member {String} grn
 */
ProductconfiguratorpropertyEntity.prototype['grn'] = undefined;

/**
 * @member {Object.<String, String>} stepIdToOptionId
 */
ProductconfiguratorpropertyEntity.prototype['stepIdToOptionId'] = undefined;

/**
 * @member {String} propertyKey
 */
ProductconfiguratorpropertyEntity.prototype['propertyKey'] = undefined;

/**
 * @member {String} propertyValue
 */
ProductconfiguratorpropertyEntity.prototype['propertyValue'] = undefined;

/**
 * @member {module:GeminiCommerce\ProductConfigurator/model/ProductconfiguratorPropertyType} propertyType
 */
ProductconfiguratorpropertyEntity.prototype['propertyType'] = undefined;

/**
 * @member {Date} createdAt
 */
ProductconfiguratorpropertyEntity.prototype['createdAt'] = undefined;

/**
 * @member {Date} updatedAt
 */
ProductconfiguratorpropertyEntity.prototype['updatedAt'] = undefined;






export default ProductconfiguratorpropertyEntity;


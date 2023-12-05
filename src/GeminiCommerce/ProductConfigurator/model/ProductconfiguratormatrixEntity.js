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
import MatrixGenericType from './MatrixGenericType';
import MatrixPriceType from './MatrixPriceType';
import MatrixWeightType from './MatrixWeightType';
import ProductconfiguratorPropertyMode from './ProductconfiguratorPropertyMode';
import ProductconfiguratormatrixStep from './ProductconfiguratormatrixStep';

/**
 * The ProductconfiguratormatrixEntity model module.
 * @module GeminiCommerce\ProductConfigurator/model/ProductconfiguratormatrixEntity
 * @version v1
 */
class ProductconfiguratormatrixEntity {
    /**
     * Constructs a new <code>ProductconfiguratormatrixEntity</code>.
     * @alias module:GeminiCommerce\ProductConfigurator/model/ProductconfiguratormatrixEntity
     */
    constructor() { 
        
        ProductconfiguratormatrixEntity.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProductconfiguratormatrixEntity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:GeminiCommerce\ProductConfigurator/model/ProductconfiguratormatrixEntity} obj Optional instance to populate.
     * @return {module:GeminiCommerce\ProductConfigurator/model/ProductconfiguratormatrixEntity} The populated <code>ProductconfiguratormatrixEntity</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductconfiguratormatrixEntity();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('grn')) {
                obj['grn'] = ApiClient.convertToType(data['grn'], 'String');
            }
            if (data.hasOwnProperty('configuratorId')) {
                obj['configuratorId'] = ApiClient.convertToType(data['configuratorId'], 'String');
            }
            if (data.hasOwnProperty('label')) {
                obj['label'] = ApiClient.convertToType(data['label'], 'String');
            }
            if (data.hasOwnProperty('defaultPropertyId')) {
                obj['defaultPropertyId'] = ApiClient.convertToType(data['defaultPropertyId'], 'String');
            }
            if (data.hasOwnProperty('propertiesMode')) {
                obj['propertiesMode'] = ProductconfiguratorPropertyMode.constructFromObject(data['propertiesMode']);
            }
            if (data.hasOwnProperty('genericType')) {
                obj['genericType'] = MatrixGenericType.constructFromObject(data['genericType']);
            }
            if (data.hasOwnProperty('priceType')) {
                obj['priceType'] = MatrixPriceType.constructFromObject(data['priceType']);
            }
            if (data.hasOwnProperty('weightType')) {
                obj['weightType'] = MatrixWeightType.constructFromObject(data['weightType']);
            }
            if (data.hasOwnProperty('steps')) {
                obj['steps'] = ApiClient.convertToType(data['steps'], [ProductconfiguratormatrixStep]);
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
     * Validates the JSON data with respect to <code>ProductconfiguratormatrixEntity</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProductconfiguratormatrixEntity</code>.
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
        if (data['configuratorId'] && !(typeof data['configuratorId'] === 'string' || data['configuratorId'] instanceof String)) {
            throw new Error("Expected the field `configuratorId` to be a primitive type in the JSON string but got " + data['configuratorId']);
        }
        // ensure the json data is a string
        if (data['label'] && !(typeof data['label'] === 'string' || data['label'] instanceof String)) {
            throw new Error("Expected the field `label` to be a primitive type in the JSON string but got " + data['label']);
        }
        // ensure the json data is a string
        if (data['defaultPropertyId'] && !(typeof data['defaultPropertyId'] === 'string' || data['defaultPropertyId'] instanceof String)) {
            throw new Error("Expected the field `defaultPropertyId` to be a primitive type in the JSON string but got " + data['defaultPropertyId']);
        }
        // validate the optional field `genericType`
        if (data['genericType']) { // data not null
          MatrixGenericType.validateJSON(data['genericType']);
        }
        // validate the optional field `priceType`
        if (data['priceType']) { // data not null
          MatrixPriceType.validateJSON(data['priceType']);
        }
        // validate the optional field `weightType`
        if (data['weightType']) { // data not null
          MatrixWeightType.validateJSON(data['weightType']);
        }
        if (data['steps']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['steps'])) {
                throw new Error("Expected the field `steps` to be an array in the JSON data but got " + data['steps']);
            }
            // validate the optional field `steps` (array)
            for (const item of data['steps']) {
                ProductconfiguratormatrixStep.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {String} id
 */
ProductconfiguratormatrixEntity.prototype['id'] = undefined;

/**
 * @member {String} grn
 */
ProductconfiguratormatrixEntity.prototype['grn'] = undefined;

/**
 * @member {String} configuratorId
 */
ProductconfiguratormatrixEntity.prototype['configuratorId'] = undefined;

/**
 * @member {String} label
 */
ProductconfiguratormatrixEntity.prototype['label'] = undefined;

/**
 * @member {String} defaultPropertyId
 */
ProductconfiguratormatrixEntity.prototype['defaultPropertyId'] = undefined;

/**
 * @member {module:GeminiCommerce\ProductConfigurator/model/ProductconfiguratorPropertyMode} propertiesMode
 */
ProductconfiguratormatrixEntity.prototype['propertiesMode'] = undefined;

/**
 * @member {module:GeminiCommerce\ProductConfigurator/model/MatrixGenericType} genericType
 */
ProductconfiguratormatrixEntity.prototype['genericType'] = undefined;

/**
 * @member {module:GeminiCommerce\ProductConfigurator/model/MatrixPriceType} priceType
 */
ProductconfiguratormatrixEntity.prototype['priceType'] = undefined;

/**
 * @member {module:GeminiCommerce\ProductConfigurator/model/MatrixWeightType} weightType
 */
ProductconfiguratormatrixEntity.prototype['weightType'] = undefined;

/**
 * @member {Array.<module:GeminiCommerce\ProductConfigurator/model/ProductconfiguratormatrixStep>} steps
 */
ProductconfiguratormatrixEntity.prototype['steps'] = undefined;

/**
 * @member {Date} createdAt
 */
ProductconfiguratormatrixEntity.prototype['createdAt'] = undefined;

/**
 * @member {Date} updatedAt
 */
ProductconfiguratormatrixEntity.prototype['updatedAt'] = undefined;






export default ProductconfiguratormatrixEntity;

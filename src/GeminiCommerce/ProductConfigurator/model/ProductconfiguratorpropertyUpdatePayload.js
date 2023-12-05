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
import PropertyUpdatePayloadGenericProperty from './PropertyUpdatePayloadGenericProperty';
import PropertyUpdatePayloadPriceProperty from './PropertyUpdatePayloadPriceProperty';
import PropertyUpdatePayloadWeightProperty from './PropertyUpdatePayloadWeightProperty';

/**
 * The ProductconfiguratorpropertyUpdatePayload model module.
 * @module GeminiCommerce\ProductConfigurator/model/ProductconfiguratorpropertyUpdatePayload
 * @version v1
 */
class ProductconfiguratorpropertyUpdatePayload {
    /**
     * Constructs a new <code>ProductconfiguratorpropertyUpdatePayload</code>.
     * @alias module:GeminiCommerce\ProductConfigurator/model/ProductconfiguratorpropertyUpdatePayload
     */
    constructor() { 
        
        ProductconfiguratorpropertyUpdatePayload.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProductconfiguratorpropertyUpdatePayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:GeminiCommerce\ProductConfigurator/model/ProductconfiguratorpropertyUpdatePayload} obj Optional instance to populate.
     * @return {module:GeminiCommerce\ProductConfigurator/model/ProductconfiguratorpropertyUpdatePayload} The populated <code>ProductconfiguratorpropertyUpdatePayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductconfiguratorpropertyUpdatePayload();

            if (data.hasOwnProperty('genericProperty')) {
                obj['genericProperty'] = PropertyUpdatePayloadGenericProperty.constructFromObject(data['genericProperty']);
            }
            if (data.hasOwnProperty('weightProperty')) {
                obj['weightProperty'] = PropertyUpdatePayloadWeightProperty.constructFromObject(data['weightProperty']);
            }
            if (data.hasOwnProperty('priceProperty')) {
                obj['priceProperty'] = PropertyUpdatePayloadPriceProperty.constructFromObject(data['priceProperty']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ProductconfiguratorpropertyUpdatePayload</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProductconfiguratorpropertyUpdatePayload</code>.
     */
    static validateJSON(data) {
        // validate the optional field `genericProperty`
        if (data['genericProperty']) { // data not null
          PropertyUpdatePayloadGenericProperty.validateJSON(data['genericProperty']);
        }
        // validate the optional field `weightProperty`
        if (data['weightProperty']) { // data not null
          PropertyUpdatePayloadWeightProperty.validateJSON(data['weightProperty']);
        }
        // validate the optional field `priceProperty`
        if (data['priceProperty']) { // data not null
          PropertyUpdatePayloadPriceProperty.validateJSON(data['priceProperty']);
        }

        return true;
    }


}



/**
 * @member {module:GeminiCommerce\ProductConfigurator/model/PropertyUpdatePayloadGenericProperty} genericProperty
 */
ProductconfiguratorpropertyUpdatePayload.prototype['genericProperty'] = undefined;

/**
 * @member {module:GeminiCommerce\ProductConfigurator/model/PropertyUpdatePayloadWeightProperty} weightProperty
 */
ProductconfiguratorpropertyUpdatePayload.prototype['weightProperty'] = undefined;

/**
 * @member {module:GeminiCommerce\ProductConfigurator/model/PropertyUpdatePayloadPriceProperty} priceProperty
 */
ProductconfiguratorpropertyUpdatePayload.prototype['priceProperty'] = undefined;






export default ProductconfiguratorpropertyUpdatePayload;


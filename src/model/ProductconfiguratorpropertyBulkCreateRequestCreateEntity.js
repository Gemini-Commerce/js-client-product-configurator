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

import ApiClient from '../ApiClient';
import ProductconfiguratorpropertyGenericProperty from './ProductconfiguratorpropertyGenericProperty';
import ProductconfiguratorpropertyPriceProperty from './ProductconfiguratorpropertyPriceProperty';
import ProductconfiguratorpropertyWeightProperty from './ProductconfiguratorpropertyWeightProperty';

/**
 * The ProductconfiguratorpropertyBulkCreateRequestCreateEntity model module.
 * @module model/ProductconfiguratorpropertyBulkCreateRequestCreateEntity
 * @version v1
 */
class ProductconfiguratorpropertyBulkCreateRequestCreateEntity {
    /**
     * Constructs a new <code>ProductconfiguratorpropertyBulkCreateRequestCreateEntity</code>.
     * @alias module:model/ProductconfiguratorpropertyBulkCreateRequestCreateEntity
     */
    constructor() { 
        
        ProductconfiguratorpropertyBulkCreateRequestCreateEntity.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProductconfiguratorpropertyBulkCreateRequestCreateEntity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductconfiguratorpropertyBulkCreateRequestCreateEntity} obj Optional instance to populate.
     * @return {module:model/ProductconfiguratorpropertyBulkCreateRequestCreateEntity} The populated <code>ProductconfiguratorpropertyBulkCreateRequestCreateEntity</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductconfiguratorpropertyBulkCreateRequestCreateEntity();

            if (data.hasOwnProperty('stepIdToOptionId')) {
                obj['stepIdToOptionId'] = ApiClient.convertToType(data['stepIdToOptionId'], {'String': 'String'});
            }
            if (data.hasOwnProperty('genericProperty')) {
                obj['genericProperty'] = ProductconfiguratorpropertyGenericProperty.constructFromObject(data['genericProperty']);
            }
            if (data.hasOwnProperty('priceProperty')) {
                obj['priceProperty'] = ProductconfiguratorpropertyPriceProperty.constructFromObject(data['priceProperty']);
            }
            if (data.hasOwnProperty('weightProperty')) {
                obj['weightProperty'] = ProductconfiguratorpropertyWeightProperty.constructFromObject(data['weightProperty']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ProductconfiguratorpropertyBulkCreateRequestCreateEntity</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProductconfiguratorpropertyBulkCreateRequestCreateEntity</code>.
     */
    static validateJSON(data) {
        // validate the optional field `genericProperty`
        if (data['genericProperty']) { // data not null
          ProductconfiguratorpropertyGenericProperty.validateJSON(data['genericProperty']);
        }
        // validate the optional field `priceProperty`
        if (data['priceProperty']) { // data not null
          ProductconfiguratorpropertyPriceProperty.validateJSON(data['priceProperty']);
        }
        // validate the optional field `weightProperty`
        if (data['weightProperty']) { // data not null
          ProductconfiguratorpropertyWeightProperty.validateJSON(data['weightProperty']);
        }

        return true;
    }


}



/**
 * @member {Object.<String, String>} stepIdToOptionId
 */
ProductconfiguratorpropertyBulkCreateRequestCreateEntity.prototype['stepIdToOptionId'] = undefined;

/**
 * @member {module:model/ProductconfiguratorpropertyGenericProperty} genericProperty
 */
ProductconfiguratorpropertyBulkCreateRequestCreateEntity.prototype['genericProperty'] = undefined;

/**
 * @member {module:model/ProductconfiguratorpropertyPriceProperty} priceProperty
 */
ProductconfiguratorpropertyBulkCreateRequestCreateEntity.prototype['priceProperty'] = undefined;

/**
 * @member {module:model/ProductconfiguratorpropertyWeightProperty} weightProperty
 */
ProductconfiguratorpropertyBulkCreateRequestCreateEntity.prototype['weightProperty'] = undefined;






export default ProductconfiguratorpropertyBulkCreateRequestCreateEntity;


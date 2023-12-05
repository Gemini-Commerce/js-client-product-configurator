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
import ProductconfiguratorWeightUnit from './ProductconfiguratorWeightUnit';

/**
 * The ProductconfiguratorpropertyWeightProperty model module.
 * @module model/ProductconfiguratorpropertyWeightProperty
 * @version v1
 */
class ProductconfiguratorpropertyWeightProperty {
    /**
     * Constructs a new <code>ProductconfiguratorpropertyWeightProperty</code>.
     * @alias module:model/ProductconfiguratorpropertyWeightProperty
     */
    constructor() { 
        
        ProductconfiguratorpropertyWeightProperty.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProductconfiguratorpropertyWeightProperty</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductconfiguratorpropertyWeightProperty} obj Optional instance to populate.
     * @return {module:model/ProductconfiguratorpropertyWeightProperty} The populated <code>ProductconfiguratorpropertyWeightProperty</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductconfiguratorpropertyWeightProperty();

            if (data.hasOwnProperty('weight')) {
                obj['weight'] = ApiClient.convertToType(data['weight'], 'Number');
            }
            if (data.hasOwnProperty('weightUnit')) {
                obj['weightUnit'] = ProductconfiguratorWeightUnit.constructFromObject(data['weightUnit']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ProductconfiguratorpropertyWeightProperty</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProductconfiguratorpropertyWeightProperty</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * @member {Number} weight
 */
ProductconfiguratorpropertyWeightProperty.prototype['weight'] = undefined;

/**
 * @member {module:model/ProductconfiguratorWeightUnit} weightUnit
 */
ProductconfiguratorpropertyWeightProperty.prototype['weightUnit'] = undefined;






export default ProductconfiguratorpropertyWeightProperty;

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
import ProductconfiguratorMoney from './ProductconfiguratorMoney';

/**
 * The ProductconfiguratorpropertyPriceProperty model module.
 * @module model/ProductconfiguratorpropertyPriceProperty
 * @version v1
 */
class ProductconfiguratorpropertyPriceProperty {
    /**
     * Constructs a new <code>ProductconfiguratorpropertyPriceProperty</code>.
     * @alias module:model/ProductconfiguratorpropertyPriceProperty
     */
    constructor() { 
        
        ProductconfiguratorpropertyPriceProperty.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProductconfiguratorpropertyPriceProperty</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductconfiguratorpropertyPriceProperty} obj Optional instance to populate.
     * @return {module:model/ProductconfiguratorpropertyPriceProperty} The populated <code>ProductconfiguratorpropertyPriceProperty</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductconfiguratorpropertyPriceProperty();

            if (data.hasOwnProperty('price')) {
                obj['price'] = ProductconfiguratorMoney.constructFromObject(data['price']);
            }
            if (data.hasOwnProperty('pricelistGrn')) {
                obj['pricelistGrn'] = ApiClient.convertToType(data['pricelistGrn'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ProductconfiguratorpropertyPriceProperty</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProductconfiguratorpropertyPriceProperty</code>.
     */
    static validateJSON(data) {
        // validate the optional field `price`
        if (data['price']) { // data not null
          ProductconfiguratorMoney.validateJSON(data['price']);
        }
        // ensure the json data is a string
        if (data['pricelistGrn'] && !(typeof data['pricelistGrn'] === 'string' || data['pricelistGrn'] instanceof String)) {
            throw new Error("Expected the field `pricelistGrn` to be a primitive type in the JSON string but got " + data['pricelistGrn']);
        }

        return true;
    }


}



/**
 * @member {module:model/ProductconfiguratorMoney} price
 */
ProductconfiguratorpropertyPriceProperty.prototype['price'] = undefined;

/**
 * @member {String} pricelistGrn
 */
ProductconfiguratorpropertyPriceProperty.prototype['pricelistGrn'] = undefined;






export default ProductconfiguratorpropertyPriceProperty;


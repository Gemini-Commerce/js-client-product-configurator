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
import ProductconfiguratordependencyEntity from './ProductconfiguratordependencyEntity';

/**
 * The DependencyListDependenciesResponse model module.
 * @module model/DependencyListDependenciesResponse
 * @version v1
 */
class DependencyListDependenciesResponse {
    /**
     * Constructs a new <code>DependencyListDependenciesResponse</code>.
     * @alias module:model/DependencyListDependenciesResponse
     */
    constructor() { 
        
        DependencyListDependenciesResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DependencyListDependenciesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DependencyListDependenciesResponse} obj Optional instance to populate.
     * @return {module:model/DependencyListDependenciesResponse} The populated <code>DependencyListDependenciesResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DependencyListDependenciesResponse();

            if (data.hasOwnProperty('dependencies')) {
                obj['dependencies'] = ApiClient.convertToType(data['dependencies'], [ProductconfiguratordependencyEntity]);
            }
            if (data.hasOwnProperty('nextPageToken')) {
                obj['nextPageToken'] = ApiClient.convertToType(data['nextPageToken'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DependencyListDependenciesResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DependencyListDependenciesResponse</code>.
     */
    static validateJSON(data) {
        if (data['dependencies']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['dependencies'])) {
                throw new Error("Expected the field `dependencies` to be an array in the JSON data but got " + data['dependencies']);
            }
            // validate the optional field `dependencies` (array)
            for (const item of data['dependencies']) {
                ProductconfiguratordependencyEntity.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['nextPageToken'] && !(typeof data['nextPageToken'] === 'string' || data['nextPageToken'] instanceof String)) {
            throw new Error("Expected the field `nextPageToken` to be a primitive type in the JSON string but got " + data['nextPageToken']);
        }

        return true;
    }


}



/**
 * @member {Array.<module:model/ProductconfiguratordependencyEntity>} dependencies
 */
DependencyListDependenciesResponse.prototype['dependencies'] = undefined;

/**
 * @member {String} nextPageToken
 */
DependencyListDependenciesResponse.prototype['nextPageToken'] = undefined;






export default DependencyListDependenciesResponse;


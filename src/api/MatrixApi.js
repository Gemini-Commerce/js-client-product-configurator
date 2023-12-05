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


import ApiClient from "../ApiClient";
import GooglerpcStatus from '../model/GooglerpcStatus';
import MatrixListMatricesRequest from '../model/MatrixListMatricesRequest';
import MatrixListMatricesResponse from '../model/MatrixListMatricesResponse';
import ProductconfiguratormatrixCreateRequest from '../model/ProductconfiguratormatrixCreateRequest';
import ProductconfiguratormatrixEntity from '../model/ProductconfiguratormatrixEntity';
import ProductconfiguratormatrixUpdateRequest from '../model/ProductconfiguratormatrixUpdateRequest';

/**
* Matrix service.
* @module api/MatrixApi
* @version v1
*/
export default class MatrixApi {

    /**
    * Constructs a new MatrixApi. 
    * @alias module:api/MatrixApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the productConfiguratorCreateMatrix operation.
     * @callback module:api/MatrixApi~productConfiguratorCreateMatrixCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProductconfiguratormatrixEntity} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Matrix
     * Establish a new matrix by specifying the tenant ID. Utilize a POST request with the required matrix details in the body for seamless customization and expansion of matrix configurations.
     * @param {String} tenantId 
     * @param {module:model/ProductconfiguratormatrixCreateRequest} body 
     * @param {module:api/MatrixApi~productConfiguratorCreateMatrixCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProductconfiguratormatrixEntity}
     */
    productConfiguratorCreateMatrix(tenantId, body, callback) {
      let postBody = body;
      // verify the required parameter 'tenantId' is set
      if (tenantId === undefined || tenantId === null) {
        throw new Error("Missing the required parameter 'tenantId' when calling productConfiguratorCreateMatrix");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling productConfiguratorCreateMatrix");
      }

      let pathParams = {
        'tenantId': tenantId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['standardAuthorization'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ProductconfiguratormatrixEntity;
      return this.apiClient.callApi(
        '/v1/{tenantId}/matrix/create', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the productConfiguratorDeleteMatrix operation.
     * @callback module:api/MatrixApi~productConfiguratorDeleteMatrixCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Matrix
     * Remove a specific matrix by specifying the tenant and matrix IDs. Ensure precision in matrix management with a straightforward DELETE request, simplifying the elimination of unwanted matrix configurations.
     * @param {String} tenantId 
     * @param {String} matrixId 
     * @param {module:api/MatrixApi~productConfiguratorDeleteMatrixCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    productConfiguratorDeleteMatrix(tenantId, matrixId, callback) {
      let postBody = null;
      // verify the required parameter 'tenantId' is set
      if (tenantId === undefined || tenantId === null) {
        throw new Error("Missing the required parameter 'tenantId' when calling productConfiguratorDeleteMatrix");
      }
      // verify the required parameter 'matrixId' is set
      if (matrixId === undefined || matrixId === null) {
        throw new Error("Missing the required parameter 'matrixId' when calling productConfiguratorDeleteMatrix");
      }

      let pathParams = {
        'tenantId': tenantId,
        'matrixId': matrixId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['standardAuthorization'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/v1/{tenantId}/matrix/{matrixId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the productConfiguratorGetMatrix operation.
     * @callback module:api/MatrixApi~productConfiguratorGetMatrixCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProductconfiguratormatrixEntity} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Matrix
     * Retrieve matrix details by specifying the tenant and matrix IDs. Utilize a GET request for a comprehensive view of matrix configurations within your product configurator service.
     * @param {String} tenantId 
     * @param {String} matrixId 
     * @param {module:api/MatrixApi~productConfiguratorGetMatrixCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProductconfiguratormatrixEntity}
     */
    productConfiguratorGetMatrix(tenantId, matrixId, callback) {
      let postBody = null;
      // verify the required parameter 'tenantId' is set
      if (tenantId === undefined || tenantId === null) {
        throw new Error("Missing the required parameter 'tenantId' when calling productConfiguratorGetMatrix");
      }
      // verify the required parameter 'matrixId' is set
      if (matrixId === undefined || matrixId === null) {
        throw new Error("Missing the required parameter 'matrixId' when calling productConfiguratorGetMatrix");
      }

      let pathParams = {
        'tenantId': tenantId,
        'matrixId': matrixId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['standardAuthorization'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ProductconfiguratormatrixEntity;
      return this.apiClient.callApi(
        '/v1/{tenantId}/matrix/{matrixId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the productConfiguratorListMatrices operation.
     * @callback module:api/MatrixApi~productConfiguratorListMatricesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MatrixListMatricesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Matrices
     * Retrieve a list of matrices for a specific configurator based on tenant and configurator IDs. Customize results by specifying page size for efficient pagination. Submit an empty body to get all matrices associated with the configurator. Streamline matrix management effortlessly.
     * @param {String} tenantId 
     * @param {String} configuratorId 
     * @param {String} pageSize 
     * @param {module:model/MatrixListMatricesRequest} body 
     * @param {module:api/MatrixApi~productConfiguratorListMatricesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MatrixListMatricesResponse}
     */
    productConfiguratorListMatrices(tenantId, configuratorId, pageSize, body, callback) {
      let postBody = body;
      // verify the required parameter 'tenantId' is set
      if (tenantId === undefined || tenantId === null) {
        throw new Error("Missing the required parameter 'tenantId' when calling productConfiguratorListMatrices");
      }
      // verify the required parameter 'configuratorId' is set
      if (configuratorId === undefined || configuratorId === null) {
        throw new Error("Missing the required parameter 'configuratorId' when calling productConfiguratorListMatrices");
      }
      // verify the required parameter 'pageSize' is set
      if (pageSize === undefined || pageSize === null) {
        throw new Error("Missing the required parameter 'pageSize' when calling productConfiguratorListMatrices");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling productConfiguratorListMatrices");
      }

      let pathParams = {
        'tenantId': tenantId,
        'configuratorId': configuratorId,
        'pageSize': pageSize
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['standardAuthorization'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = MatrixListMatricesResponse;
      return this.apiClient.callApi(
        '/v1/{tenantId}/configurator/{configuratorId}/page-size/{pageSize}/matrices', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the productConfiguratorRemovePricelistFromMatrix operation.
     * @callback module:api/MatrixApi~productConfiguratorRemovePricelistFromMatrixCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProductconfiguratormatrixEntity} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove Pricelist from Matrix
     * Remove a specific pricelist from a matrix by specifying the tenant, matrix, and pricelist IDs. Use a DELETE request for precise management of pricelist configurations within your product configurator service.
     * @param {String} tenantId 
     * @param {String} matrixId 
     * @param {String} pricelistGrn 
     * @param {module:api/MatrixApi~productConfiguratorRemovePricelistFromMatrixCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProductconfiguratormatrixEntity}
     */
    productConfiguratorRemovePricelistFromMatrix(tenantId, matrixId, pricelistGrn, callback) {
      let postBody = null;
      // verify the required parameter 'tenantId' is set
      if (tenantId === undefined || tenantId === null) {
        throw new Error("Missing the required parameter 'tenantId' when calling productConfiguratorRemovePricelistFromMatrix");
      }
      // verify the required parameter 'matrixId' is set
      if (matrixId === undefined || matrixId === null) {
        throw new Error("Missing the required parameter 'matrixId' when calling productConfiguratorRemovePricelistFromMatrix");
      }
      // verify the required parameter 'pricelistGrn' is set
      if (pricelistGrn === undefined || pricelistGrn === null) {
        throw new Error("Missing the required parameter 'pricelistGrn' when calling productConfiguratorRemovePricelistFromMatrix");
      }

      let pathParams = {
        'tenantId': tenantId,
        'matrixId': matrixId,
        'pricelistGrn': pricelistGrn
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['standardAuthorization'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ProductconfiguratormatrixEntity;
      return this.apiClient.callApi(
        '/v1/{tenantId}/matrix/{matrixId}/pricelist/{pricelistGrn}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the productConfiguratorUpdateMatrix operation.
     * @callback module:api/MatrixApi~productConfiguratorUpdateMatrixCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProductconfiguratormatrixEntity} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Matrix
     * Modify an existing matrix by specifying the tenant and matrix IDs. Utilize a PUT request with updated matrix details in the body for seamless customization and fine-tuning of your product configurations. Keep your matrices in sync effortlessly.
     * @param {String} tenantId 
     * @param {String} matrixId 
     * @param {module:model/ProductconfiguratormatrixUpdateRequest} body 
     * @param {module:api/MatrixApi~productConfiguratorUpdateMatrixCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProductconfiguratormatrixEntity}
     */
    productConfiguratorUpdateMatrix(tenantId, matrixId, body, callback) {
      let postBody = body;
      // verify the required parameter 'tenantId' is set
      if (tenantId === undefined || tenantId === null) {
        throw new Error("Missing the required parameter 'tenantId' when calling productConfiguratorUpdateMatrix");
      }
      // verify the required parameter 'matrixId' is set
      if (matrixId === undefined || matrixId === null) {
        throw new Error("Missing the required parameter 'matrixId' when calling productConfiguratorUpdateMatrix");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling productConfiguratorUpdateMatrix");
      }

      let pathParams = {
        'tenantId': tenantId,
        'matrixId': matrixId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['standardAuthorization'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ProductconfiguratormatrixEntity;
      return this.apiClient.callApi(
        '/v1/{tenantId}/matrix/{matrixId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}

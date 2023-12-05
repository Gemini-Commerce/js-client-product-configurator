# GeminiCommerceJsClientProductConfigurator.MatrixApi

All URIs are relative to *https://product-configurator.api.gogemini.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**productConfiguratorCreateMatrix**](MatrixApi.md#productConfiguratorCreateMatrix) | **POST** /v1/{tenantId}/matrix/create | Create Matrix
[**productConfiguratorDeleteMatrix**](MatrixApi.md#productConfiguratorDeleteMatrix) | **DELETE** /v1/{tenantId}/matrix/{matrixId} | Delete Matrix
[**productConfiguratorGetMatrix**](MatrixApi.md#productConfiguratorGetMatrix) | **GET** /v1/{tenantId}/matrix/{matrixId} | Get Matrix
[**productConfiguratorListMatrices**](MatrixApi.md#productConfiguratorListMatrices) | **POST** /v1/{tenantId}/configurator/{configuratorId}/page-size/{pageSize}/matrices | List Matrices
[**productConfiguratorRemovePricelistFromMatrix**](MatrixApi.md#productConfiguratorRemovePricelistFromMatrix) | **DELETE** /v1/{tenantId}/matrix/{matrixId}/pricelist/{pricelistGrn} | Remove Pricelist from Matrix
[**productConfiguratorUpdateMatrix**](MatrixApi.md#productConfiguratorUpdateMatrix) | **PUT** /v1/{tenantId}/matrix/{matrixId} | Update Matrix



## productConfiguratorCreateMatrix

> ProductconfiguratormatrixEntity productConfiguratorCreateMatrix(tenantId, body)

Create Matrix

Establish a new matrix by specifying the tenant ID. Utilize a POST request with the required matrix details in the body for seamless customization and expansion of matrix configurations.

### Example

```javascript
import GeminiCommerceJsClientProductConfigurator from '@gemini-commerce/js-client-product-configurator';
let defaultClient = GeminiCommerceJsClientProductConfigurator.ApiClient.instance;
// Configure OAuth2 access token for authorization: standardAuthorization
let standardAuthorization = defaultClient.authentications['standardAuthorization'];
standardAuthorization.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GeminiCommerceJsClientProductConfigurator.MatrixApi();
let tenantId = "tenantId_example"; // String | 
let body = new GeminiCommerceJsClientProductConfigurator.ProductconfiguratormatrixCreateRequest(); // ProductconfiguratormatrixCreateRequest | 
apiInstance.productConfiguratorCreateMatrix(tenantId, body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **body** | [**ProductconfiguratormatrixCreateRequest**](ProductconfiguratormatrixCreateRequest.md)|  | 

### Return type

[**ProductconfiguratormatrixEntity**](ProductconfiguratormatrixEntity.md)

### Authorization

[standardAuthorization](../README.md#standardAuthorization)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## productConfiguratorDeleteMatrix

> Object productConfiguratorDeleteMatrix(tenantId, matrixId)

Delete Matrix

Remove a specific matrix by specifying the tenant and matrix IDs. Ensure precision in matrix management with a straightforward DELETE request, simplifying the elimination of unwanted matrix configurations.

### Example

```javascript
import GeminiCommerceJsClientProductConfigurator from '@gemini-commerce/js-client-product-configurator';
let defaultClient = GeminiCommerceJsClientProductConfigurator.ApiClient.instance;
// Configure OAuth2 access token for authorization: standardAuthorization
let standardAuthorization = defaultClient.authentications['standardAuthorization'];
standardAuthorization.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GeminiCommerceJsClientProductConfigurator.MatrixApi();
let tenantId = "tenantId_example"; // String | 
let matrixId = "matrixId_example"; // String | 
apiInstance.productConfiguratorDeleteMatrix(tenantId, matrixId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **matrixId** | **String**|  | 

### Return type

**Object**

### Authorization

[standardAuthorization](../README.md#standardAuthorization)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## productConfiguratorGetMatrix

> ProductconfiguratormatrixEntity productConfiguratorGetMatrix(tenantId, matrixId)

Get Matrix

Retrieve matrix details by specifying the tenant and matrix IDs. Utilize a GET request for a comprehensive view of matrix configurations within your product configurator service.

### Example

```javascript
import GeminiCommerceJsClientProductConfigurator from '@gemini-commerce/js-client-product-configurator';
let defaultClient = GeminiCommerceJsClientProductConfigurator.ApiClient.instance;
// Configure OAuth2 access token for authorization: standardAuthorization
let standardAuthorization = defaultClient.authentications['standardAuthorization'];
standardAuthorization.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GeminiCommerceJsClientProductConfigurator.MatrixApi();
let tenantId = "tenantId_example"; // String | 
let matrixId = "matrixId_example"; // String | 
apiInstance.productConfiguratorGetMatrix(tenantId, matrixId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **matrixId** | **String**|  | 

### Return type

[**ProductconfiguratormatrixEntity**](ProductconfiguratormatrixEntity.md)

### Authorization

[standardAuthorization](../README.md#standardAuthorization)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## productConfiguratorListMatrices

> MatrixListMatricesResponse productConfiguratorListMatrices(tenantId, configuratorId, pageSize, body)

List Matrices

Retrieve a list of matrices for a specific configurator based on tenant and configurator IDs. Customize results by specifying page size for efficient pagination. Submit an empty body to get all matrices associated with the configurator. Streamline matrix management effortlessly.

### Example

```javascript
import GeminiCommerceJsClientProductConfigurator from '@gemini-commerce/js-client-product-configurator';
let defaultClient = GeminiCommerceJsClientProductConfigurator.ApiClient.instance;
// Configure OAuth2 access token for authorization: standardAuthorization
let standardAuthorization = defaultClient.authentications['standardAuthorization'];
standardAuthorization.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GeminiCommerceJsClientProductConfigurator.MatrixApi();
let tenantId = "tenantId_example"; // String | 
let configuratorId = "configuratorId_example"; // String | 
let pageSize = "pageSize_example"; // String | 
let body = new GeminiCommerceJsClientProductConfigurator.MatrixListMatricesRequest(); // MatrixListMatricesRequest | 
apiInstance.productConfiguratorListMatrices(tenantId, configuratorId, pageSize, body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **configuratorId** | **String**|  | 
 **pageSize** | **String**|  | 
 **body** | [**MatrixListMatricesRequest**](MatrixListMatricesRequest.md)|  | 

### Return type

[**MatrixListMatricesResponse**](MatrixListMatricesResponse.md)

### Authorization

[standardAuthorization](../README.md#standardAuthorization)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## productConfiguratorRemovePricelistFromMatrix

> ProductconfiguratormatrixEntity productConfiguratorRemovePricelistFromMatrix(tenantId, matrixId, pricelistGrn)

Remove Pricelist from Matrix

Remove a specific pricelist from a matrix by specifying the tenant, matrix, and pricelist IDs. Use a DELETE request for precise management of pricelist configurations within your product configurator service.

### Example

```javascript
import GeminiCommerceJsClientProductConfigurator from '@gemini-commerce/js-client-product-configurator';
let defaultClient = GeminiCommerceJsClientProductConfigurator.ApiClient.instance;
// Configure OAuth2 access token for authorization: standardAuthorization
let standardAuthorization = defaultClient.authentications['standardAuthorization'];
standardAuthorization.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GeminiCommerceJsClientProductConfigurator.MatrixApi();
let tenantId = "tenantId_example"; // String | 
let matrixId = "matrixId_example"; // String | 
let pricelistGrn = "pricelistGrn_example"; // String | 
apiInstance.productConfiguratorRemovePricelistFromMatrix(tenantId, matrixId, pricelistGrn, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **matrixId** | **String**|  | 
 **pricelistGrn** | **String**|  | 

### Return type

[**ProductconfiguratormatrixEntity**](ProductconfiguratormatrixEntity.md)

### Authorization

[standardAuthorization](../README.md#standardAuthorization)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## productConfiguratorUpdateMatrix

> ProductconfiguratormatrixEntity productConfiguratorUpdateMatrix(tenantId, matrixId, body)

Update Matrix

Modify an existing matrix by specifying the tenant and matrix IDs. Utilize a PUT request with updated matrix details in the body for seamless customization and fine-tuning of your product configurations. Keep your matrices in sync effortlessly.

### Example

```javascript
import GeminiCommerceJsClientProductConfigurator from '@gemini-commerce/js-client-product-configurator';
let defaultClient = GeminiCommerceJsClientProductConfigurator.ApiClient.instance;
// Configure OAuth2 access token for authorization: standardAuthorization
let standardAuthorization = defaultClient.authentications['standardAuthorization'];
standardAuthorization.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GeminiCommerceJsClientProductConfigurator.MatrixApi();
let tenantId = "tenantId_example"; // String | 
let matrixId = "matrixId_example"; // String | 
let body = new GeminiCommerceJsClientProductConfigurator.ProductconfiguratormatrixUpdateRequest(); // ProductconfiguratormatrixUpdateRequest | 
apiInstance.productConfiguratorUpdateMatrix(tenantId, matrixId, body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **String**|  | 
 **matrixId** | **String**|  | 
 **body** | [**ProductconfiguratormatrixUpdateRequest**](ProductconfiguratormatrixUpdateRequest.md)|  | 

### Return type

[**ProductconfiguratormatrixEntity**](ProductconfiguratormatrixEntity.md)

### Authorization

[standardAuthorization](../README.md#standardAuthorization)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


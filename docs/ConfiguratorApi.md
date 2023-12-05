# ProductConfiguratorService.ConfiguratorApi

All URIs are relative to *https://product-configurator.api.gogemini.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**productConfiguratorCopyConfigurator**](ConfiguratorApi.md#productConfiguratorCopyConfigurator) | **POST** /v1/{tenantId}/product/{sourceConfiguratorId}/copy | Copy Configurator
[**productConfiguratorCreateConfigurator**](ConfiguratorApi.md#productConfiguratorCreateConfigurator) | **POST** /v1/{tenantId}/product/{productId}/create | Create Configurator
[**productConfiguratorDeleteConfigurator**](ConfiguratorApi.md#productConfiguratorDeleteConfigurator) | **DELETE** /v1/{tenantId}/configurator/{configuratorId} | Delete Configurator
[**productConfiguratorGetConfiguratorByProductId**](ConfiguratorApi.md#productConfiguratorGetConfiguratorByProductId) | **GET** /v1/{tenantId}/product/{productId} | Get Product Configurator by Product ID
[**productConfiguratorGetConfiguratorByProductId2**](ConfiguratorApi.md#productConfiguratorGetConfiguratorByProductId2) | **GET** /v1/{tenantId}/product/{productId}/status/{status} | Get Product Configurator by Product ID
[**productConfiguratorListConfigurators**](ConfiguratorApi.md#productConfiguratorListConfigurators) | **POST** /v1/{tenantId}/product/{productId}/page-size/{pageSize}/configurators | List Product Configurators
[**productConfiguratorUpdateConfigurator**](ConfiguratorApi.md#productConfiguratorUpdateConfigurator) | **PUT** /v1/{tenantId}/configurator/{configuratorId} | Update Configurator



## productConfiguratorCopyConfigurator

> ProductconfiguratorconfiguratorEntity productConfiguratorCopyConfigurator(tenantId, sourceConfiguratorId, body)

Copy Configurator

Duplicate an existing product configurator from the source to the specified tenant and product. Submit an empty body to initiate the copy process, creating a new configuration based on the source.

### Example

```javascript
import ProductConfiguratorService from 'product_configurator_service';
let defaultClient = ProductConfiguratorService.ApiClient.instance;
// Configure OAuth2 access token for authorization: standardAuthorization
let standardAuthorization = defaultClient.authentications['standardAuthorization'];
standardAuthorization.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ProductConfiguratorService.ConfiguratorApi();
let tenantId = "tenantId_example"; // String | 
let sourceConfiguratorId = "sourceConfiguratorId_example"; // String | 
let body = new ProductConfiguratorService.ProductconfiguratorconfiguratorCopyRequest(); // ProductconfiguratorconfiguratorCopyRequest | 
apiInstance.productConfiguratorCopyConfigurator(tenantId, sourceConfiguratorId, body, (error, data, response) => {
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
 **sourceConfiguratorId** | **String**|  | 
 **body** | [**ProductconfiguratorconfiguratorCopyRequest**](ProductconfiguratorconfiguratorCopyRequest.md)|  | 

### Return type

[**ProductconfiguratorconfiguratorEntity**](ProductconfiguratorconfiguratorEntity.md)

### Authorization

[standardAuthorization](../README.md#standardAuthorization)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## productConfiguratorCreateConfigurator

> ProductconfiguratorconfiguratorCreateRequest productConfiguratorCreateConfigurator(tenantId, productId, body)

Create Configurator

Create a new product configurator for a specified tenant and product. Submit the desired configuration details in the request body to initiate the creation process.

### Example

```javascript
import ProductConfiguratorService from 'product_configurator_service';
let defaultClient = ProductConfiguratorService.ApiClient.instance;
// Configure OAuth2 access token for authorization: standardAuthorization
let standardAuthorization = defaultClient.authentications['standardAuthorization'];
standardAuthorization.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ProductConfiguratorService.ConfiguratorApi();
let tenantId = "tenantId_example"; // String | 
let productId = "productId_example"; // String | 
let body = new ProductConfiguratorService.ProductconfiguratorconfiguratorCreateRequest(); // ProductconfiguratorconfiguratorCreateRequest | 
apiInstance.productConfiguratorCreateConfigurator(tenantId, productId, body, (error, data, response) => {
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
 **productId** | **String**|  | 
 **body** | [**ProductconfiguratorconfiguratorCreateRequest**](ProductconfiguratorconfiguratorCreateRequest.md)|  | 

### Return type

[**ProductconfiguratorconfiguratorCreateRequest**](ProductconfiguratorconfiguratorCreateRequest.md)

### Authorization

[standardAuthorization](../README.md#standardAuthorization)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## productConfiguratorDeleteConfigurator

> Object productConfiguratorDeleteConfigurator(tenantId, configuratorId)

Delete Configurator

Delete a product configurator by specifying the tenant and configurator IDs. Ensure precise removal of unwanted configurations with a straightforward DELETE request.

### Example

```javascript
import ProductConfiguratorService from 'product_configurator_service';
let defaultClient = ProductConfiguratorService.ApiClient.instance;
// Configure OAuth2 access token for authorization: standardAuthorization
let standardAuthorization = defaultClient.authentications['standardAuthorization'];
standardAuthorization.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ProductConfiguratorService.ConfiguratorApi();
let tenantId = "tenantId_example"; // String | 
let configuratorId = "configuratorId_example"; // String | 
apiInstance.productConfiguratorDeleteConfigurator(tenantId, configuratorId, (error, data, response) => {
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

### Return type

**Object**

### Authorization

[standardAuthorization](../README.md#standardAuthorization)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## productConfiguratorGetConfiguratorByProductId

> ProductconfiguratorconfiguratorEntity productConfiguratorGetConfiguratorByProductId(tenantId, productId, opts)

Get Product Configurator by Product ID

Get a product configurator by product ID.

### Example

```javascript
import ProductConfiguratorService from 'product_configurator_service';
let defaultClient = ProductConfiguratorService.ApiClient.instance;
// Configure OAuth2 access token for authorization: standardAuthorization
let standardAuthorization = defaultClient.authentications['standardAuthorization'];
standardAuthorization.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ProductConfiguratorService.ConfiguratorApi();
let tenantId = "tenantId_example"; // String | 
let productId = "productId_example"; // String | 
let opts = {
  'status': "'UNKNOWN'" // String | 
};
apiInstance.productConfiguratorGetConfiguratorByProductId(tenantId, productId, opts, (error, data, response) => {
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
 **productId** | **String**|  | 
 **status** | **String**|  | [optional] [default to &#39;UNKNOWN&#39;]

### Return type

[**ProductconfiguratorconfiguratorEntity**](ProductconfiguratorconfiguratorEntity.md)

### Authorization

[standardAuthorization](../README.md#standardAuthorization)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## productConfiguratorGetConfiguratorByProductId2

> ProductconfiguratorconfiguratorEntity productConfiguratorGetConfiguratorByProductId2(tenantId, productId, status)

Get Product Configurator by Product ID

Get a product configurator by product ID.

### Example

```javascript
import ProductConfiguratorService from 'product_configurator_service';
let defaultClient = ProductConfiguratorService.ApiClient.instance;
// Configure OAuth2 access token for authorization: standardAuthorization
let standardAuthorization = defaultClient.authentications['standardAuthorization'];
standardAuthorization.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ProductConfiguratorService.ConfiguratorApi();
let tenantId = "tenantId_example"; // String | 
let productId = "productId_example"; // String | 
let status = "status_example"; // String | 
apiInstance.productConfiguratorGetConfiguratorByProductId2(tenantId, productId, status, (error, data, response) => {
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
 **productId** | **String**|  | 
 **status** | **String**|  | 

### Return type

[**ProductconfiguratorconfiguratorEntity**](ProductconfiguratorconfiguratorEntity.md)

### Authorization

[standardAuthorization](../README.md#standardAuthorization)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## productConfiguratorListConfigurators

> ConfiguratorListResponse productConfiguratorListConfigurators(tenantId, productId, pageSize, body)

List Product Configurators

List all product configurators.

### Example

```javascript
import ProductConfiguratorService from 'product_configurator_service';
let defaultClient = ProductConfiguratorService.ApiClient.instance;
// Configure OAuth2 access token for authorization: standardAuthorization
let standardAuthorization = defaultClient.authentications['standardAuthorization'];
standardAuthorization.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ProductConfiguratorService.ConfiguratorApi();
let tenantId = "tenantId_example"; // String | 
let productId = "productId_example"; // String | 
let pageSize = 789; // Number | 
let body = new ProductConfiguratorService.ConfiguratorListRequest(); // ConfiguratorListRequest | 
apiInstance.productConfiguratorListConfigurators(tenantId, productId, pageSize, body, (error, data, response) => {
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
 **productId** | **String**|  | 
 **pageSize** | **Number**|  | 
 **body** | [**ConfiguratorListRequest**](ConfiguratorListRequest.md)|  | 

### Return type

[**ConfiguratorListResponse**](ConfiguratorListResponse.md)

### Authorization

[standardAuthorization](../README.md#standardAuthorization)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## productConfiguratorUpdateConfigurator

> ProductconfiguratorconfiguratorEntity productConfiguratorUpdateConfigurator(tenantId, configuratorId, body)

Update Configurator

Modify an existing product configurator by specifying the tenant and configurator IDs. Use a PUT request with the updated configuration details in the body to seamlessly update and manage product configurations

### Example

```javascript
import ProductConfiguratorService from 'product_configurator_service';
let defaultClient = ProductConfiguratorService.ApiClient.instance;
// Configure OAuth2 access token for authorization: standardAuthorization
let standardAuthorization = defaultClient.authentications['standardAuthorization'];
standardAuthorization.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ProductConfiguratorService.ConfiguratorApi();
let tenantId = "tenantId_example"; // String | 
let configuratorId = "configuratorId_example"; // String | 
let body = new ProductConfiguratorService.ProductconfiguratorconfiguratorUpdateRequest(); // ProductconfiguratorconfiguratorUpdateRequest | 
apiInstance.productConfiguratorUpdateConfigurator(tenantId, configuratorId, body, (error, data, response) => {
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
 **body** | [**ProductconfiguratorconfiguratorUpdateRequest**](ProductconfiguratorconfiguratorUpdateRequest.md)|  | 

### Return type

[**ProductconfiguratorconfiguratorEntity**](ProductconfiguratorconfiguratorEntity.md)

### Authorization

[standardAuthorization](../README.md#standardAuthorization)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


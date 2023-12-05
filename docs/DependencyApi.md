# GeminiCommerceJsClientProductConfigurator.DependencyApi

All URIs are relative to *https://product-configurator.api.gogemini.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**productConfiguratorCreateDependency**](DependencyApi.md#productConfiguratorCreateDependency) | **POST** /v1/{tenantId}/step/{stepId}/dependency/create | Create Dependency
[**productConfiguratorDeleteDependency**](DependencyApi.md#productConfiguratorDeleteDependency) | **DELETE** /v1/{tenantId}/dependency/{dependencyId} | Delete Dependency
[**productConfiguratorListDependencies**](DependencyApi.md#productConfiguratorListDependencies) | **POST** /v1/{tenantId}/page-size/{pageSize}/dependencies | List Dependencies
[**productConfiguratorUpdateDependency**](DependencyApi.md#productConfiguratorUpdateDependency) | **PUT** /v1/{tenantId}/dependency/{dependencyId} | Update Dependency



## productConfiguratorCreateDependency

> ProductconfiguratordependencyEntity productConfiguratorCreateDependency(tenantId, stepId, body)

Create Dependency

Establish a new dependency for an existing step by specifying the tenant and step IDs. Utilize a POST request with the required dependency details in the body to seamlessly enhance the configuration logic of your product.

### Example

```javascript
import GeminiCommerceJsClientProductConfigurator from '@gemini-commerce/js-client-product-configurator';
let defaultClient = GeminiCommerceJsClientProductConfigurator.ApiClient.instance;
// Configure OAuth2 access token for authorization: standardAuthorization
let standardAuthorization = defaultClient.authentications['standardAuthorization'];
standardAuthorization.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GeminiCommerceJsClientProductConfigurator.DependencyApi();
let tenantId = "tenantId_example"; // String | 
let stepId = "stepId_example"; // String | 
let body = new GeminiCommerceJsClientProductConfigurator.ProductconfiguratordependencyCreateRequest(); // ProductconfiguratordependencyCreateRequest | 
apiInstance.productConfiguratorCreateDependency(tenantId, stepId, body, (error, data, response) => {
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
 **stepId** | **String**|  | 
 **body** | [**ProductconfiguratordependencyCreateRequest**](ProductconfiguratordependencyCreateRequest.md)|  | 

### Return type

[**ProductconfiguratordependencyEntity**](ProductconfiguratordependencyEntity.md)

### Authorization

[standardAuthorization](../README.md#standardAuthorization)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## productConfiguratorDeleteDependency

> Object productConfiguratorDeleteDependency(tenantId, dependencyId)

Delete Dependency

Remove a specific dependency by specifying the tenant and dependency IDs. Ensure precision in dependency management with a straightforward DELETE request, simplifying the elimination of unwanted configuration logic.

### Example

```javascript
import GeminiCommerceJsClientProductConfigurator from '@gemini-commerce/js-client-product-configurator';
let defaultClient = GeminiCommerceJsClientProductConfigurator.ApiClient.instance;
// Configure OAuth2 access token for authorization: standardAuthorization
let standardAuthorization = defaultClient.authentications['standardAuthorization'];
standardAuthorization.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GeminiCommerceJsClientProductConfigurator.DependencyApi();
let tenantId = "tenantId_example"; // String | 
let dependencyId = "dependencyId_example"; // String | 
apiInstance.productConfiguratorDeleteDependency(tenantId, dependencyId, (error, data, response) => {
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
 **dependencyId** | **String**|  | 

### Return type

**Object**

### Authorization

[standardAuthorization](../README.md#standardAuthorization)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## productConfiguratorListDependencies

> DependencyListDependenciesResponse productConfiguratorListDependencies(tenantId, pageSize, body)

List Dependencies

Retrieve a list of dependencies based on the specified tenant ID. Customize results by specifying page size for efficient pagination. Submit an empty body to get all dependencies associated with the configurations.

### Example

```javascript
import GeminiCommerceJsClientProductConfigurator from '@gemini-commerce/js-client-product-configurator';
let defaultClient = GeminiCommerceJsClientProductConfigurator.ApiClient.instance;
// Configure OAuth2 access token for authorization: standardAuthorization
let standardAuthorization = defaultClient.authentications['standardAuthorization'];
standardAuthorization.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GeminiCommerceJsClientProductConfigurator.DependencyApi();
let tenantId = "tenantId_example"; // String | 
let pageSize = 789; // Number | 
let body = new GeminiCommerceJsClientProductConfigurator.DependencyListDependenciesRequest(); // DependencyListDependenciesRequest | 
apiInstance.productConfiguratorListDependencies(tenantId, pageSize, body, (error, data, response) => {
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
 **pageSize** | **Number**|  | 
 **body** | [**DependencyListDependenciesRequest**](DependencyListDependenciesRequest.md)|  | 

### Return type

[**DependencyListDependenciesResponse**](DependencyListDependenciesResponse.md)

### Authorization

[standardAuthorization](../README.md#standardAuthorization)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## productConfiguratorUpdateDependency

> ProductconfiguratordependencyEntity productConfiguratorUpdateDependency(tenantId, dependencyId, body)

Update Dependency

Modify an existing dependency by specifying the tenant and dependency IDs. Utilize a PUT request with updated dependency details in the body for seamless customization and fine-tuning of your product configurations.

### Example

```javascript
import GeminiCommerceJsClientProductConfigurator from '@gemini-commerce/js-client-product-configurator';
let defaultClient = GeminiCommerceJsClientProductConfigurator.ApiClient.instance;
// Configure OAuth2 access token for authorization: standardAuthorization
let standardAuthorization = defaultClient.authentications['standardAuthorization'];
standardAuthorization.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GeminiCommerceJsClientProductConfigurator.DependencyApi();
let tenantId = "tenantId_example"; // String | 
let dependencyId = "dependencyId_example"; // String | 
let body = new GeminiCommerceJsClientProductConfigurator.ProductconfiguratordependencyUpdateRequest(); // ProductconfiguratordependencyUpdateRequest | 
apiInstance.productConfiguratorUpdateDependency(tenantId, dependencyId, body, (error, data, response) => {
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
 **dependencyId** | **String**|  | 
 **body** | [**ProductconfiguratordependencyUpdateRequest**](ProductconfiguratordependencyUpdateRequest.md)|  | 

### Return type

[**ProductconfiguratordependencyEntity**](ProductconfiguratordependencyEntity.md)

### Authorization

[standardAuthorization](../README.md#standardAuthorization)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


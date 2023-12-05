# GeminiCommerceJsClientProductConfigurator.StepApi

All URIs are relative to *https://product-configurator.api.gogemini.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**productConfiguratorBulkCreateSteps**](StepApi.md#productConfiguratorBulkCreateSteps) | **POST** /v1/{tenantId}/configurator/{configuratorId}/step/create/bulk | Bulk Create Steps
[**productConfiguratorBulkDeleteSteps**](StepApi.md#productConfiguratorBulkDeleteSteps) | **POST** /v1/{tenantId}/step/delete/bulk | Bulk Delete Steps
[**productConfiguratorCopyStep**](StepApi.md#productConfiguratorCopyStep) | **POST** /v1/{tenantId}/step/{sourceStepId}/copy | Copy Step
[**productConfiguratorCreateStep**](StepApi.md#productConfiguratorCreateStep) | **POST** /v1/{tenantId}/configurator/{configuratorId}/step/create | Create Step
[**productConfiguratorDeleteStep**](StepApi.md#productConfiguratorDeleteStep) | **DELETE** /v1/{tenantId}/step/{stepId} | Delete Step
[**productConfiguratorUpdateStep**](StepApi.md#productConfiguratorUpdateStep) | **PUT** /v1/{tenantId}/step/{stepId} | Update Step



## productConfiguratorBulkCreateSteps

> ProductconfiguratorstepBulkCreateResponse productConfiguratorBulkCreateSteps(tenantId, configuratorId, body)

Bulk Create Steps

Add multiple steps to an existing product configurator simultaneously. Submit a POST request with the necessary step details in the body to efficiently extend the configuration process in bulk. Simplify large-scale configuration management effortlessly.

### Example

```javascript
import GeminiCommerceJsClientProductConfigurator from '@gemini-commerce/js-client-product-configurator';
let defaultClient = GeminiCommerceJsClientProductConfigurator.ApiClient.instance;
// Configure OAuth2 access token for authorization: standardAuthorization
let standardAuthorization = defaultClient.authentications['standardAuthorization'];
standardAuthorization.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GeminiCommerceJsClientProductConfigurator.StepApi();
let tenantId = "tenantId_example"; // String | 
let configuratorId = "configuratorId_example"; // String | 
let body = new GeminiCommerceJsClientProductConfigurator.ProductconfiguratorstepBulkCreateRequest(); // ProductconfiguratorstepBulkCreateRequest | 
apiInstance.productConfiguratorBulkCreateSteps(tenantId, configuratorId, body, (error, data, response) => {
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
 **body** | [**ProductconfiguratorstepBulkCreateRequest**](ProductconfiguratorstepBulkCreateRequest.md)|  | 

### Return type

[**ProductconfiguratorstepBulkCreateResponse**](ProductconfiguratorstepBulkCreateResponse.md)

### Authorization

[standardAuthorization](../README.md#standardAuthorization)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## productConfiguratorBulkDeleteSteps

> Object productConfiguratorBulkDeleteSteps(tenantId, body)

Bulk Delete Steps

Efficiently remove multiple steps from a product configurator using a bulk delete operation. Specify the tenant ID and submit a POST request with the list of step IDs in the body for streamlined configuration management.

### Example

```javascript
import GeminiCommerceJsClientProductConfigurator from '@gemini-commerce/js-client-product-configurator';
let defaultClient = GeminiCommerceJsClientProductConfigurator.ApiClient.instance;
// Configure OAuth2 access token for authorization: standardAuthorization
let standardAuthorization = defaultClient.authentications['standardAuthorization'];
standardAuthorization.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GeminiCommerceJsClientProductConfigurator.StepApi();
let tenantId = "tenantId_example"; // String | 
let body = new GeminiCommerceJsClientProductConfigurator.ProductconfiguratorstepBulkDeleteRequest(); // ProductconfiguratorstepBulkDeleteRequest | 
apiInstance.productConfiguratorBulkDeleteSteps(tenantId, body, (error, data, response) => {
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
 **body** | [**ProductconfiguratorstepBulkDeleteRequest**](ProductconfiguratorstepBulkDeleteRequest.md)|  | 

### Return type

**Object**

### Authorization

[standardAuthorization](../README.md#standardAuthorization)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## productConfiguratorCopyStep

> ProductconfiguratorstepEntity productConfiguratorCopyStep(tenantId, sourceStepId, body)

Copy Step

Duplicate an existing step from the source to a specified tenant. Utilize a POST request with an empty body to initiate the copy process, creating a new step based on the source configuration. Streamline step replication effortlessly.

### Example

```javascript
import GeminiCommerceJsClientProductConfigurator from '@gemini-commerce/js-client-product-configurator';
let defaultClient = GeminiCommerceJsClientProductConfigurator.ApiClient.instance;
// Configure OAuth2 access token for authorization: standardAuthorization
let standardAuthorization = defaultClient.authentications['standardAuthorization'];
standardAuthorization.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GeminiCommerceJsClientProductConfigurator.StepApi();
let tenantId = "tenantId_example"; // String | 
let sourceStepId = "sourceStepId_example"; // String | 
let body = new GeminiCommerceJsClientProductConfigurator.ProductconfiguratorstepCopyRequest(); // ProductconfiguratorstepCopyRequest | 
apiInstance.productConfiguratorCopyStep(tenantId, sourceStepId, body, (error, data, response) => {
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
 **sourceStepId** | **String**|  | 
 **body** | [**ProductconfiguratorstepCopyRequest**](ProductconfiguratorstepCopyRequest.md)|  | 

### Return type

[**ProductconfiguratorstepEntity**](ProductconfiguratorstepEntity.md)

### Authorization

[standardAuthorization](../README.md#standardAuthorization)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## productConfiguratorCreateStep

> ProductconfiguratorstepEntity productConfiguratorCreateStep(tenantId, configuratorId, body)

Create Step

Add a new step to an existing product configurator by specifying the tenant and configurator IDs. Utilize a POST request with the required step details in the body to seamlessly extend the configuration process.

### Example

```javascript
import GeminiCommerceJsClientProductConfigurator from '@gemini-commerce/js-client-product-configurator';
let defaultClient = GeminiCommerceJsClientProductConfigurator.ApiClient.instance;
// Configure OAuth2 access token for authorization: standardAuthorization
let standardAuthorization = defaultClient.authentications['standardAuthorization'];
standardAuthorization.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GeminiCommerceJsClientProductConfigurator.StepApi();
let tenantId = "tenantId_example"; // String | 
let configuratorId = "configuratorId_example"; // String | 
let body = new GeminiCommerceJsClientProductConfigurator.ProductconfiguratorstepCreateRequest(); // ProductconfiguratorstepCreateRequest | 
apiInstance.productConfiguratorCreateStep(tenantId, configuratorId, body, (error, data, response) => {
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
 **body** | [**ProductconfiguratorstepCreateRequest**](ProductconfiguratorstepCreateRequest.md)|  | 

### Return type

[**ProductconfiguratorstepEntity**](ProductconfiguratorstepEntity.md)

### Authorization

[standardAuthorization](../README.md#standardAuthorization)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## productConfiguratorDeleteStep

> GooglerpcStatus productConfiguratorDeleteStep(tenantId, stepId)

Delete Step

Remove a step from a product configurator by specifying the tenant and step IDs. Ensure precision in configuration management with a straightforward DELETE request, simplifying the elimination of unwanted steps.

### Example

```javascript
import GeminiCommerceJsClientProductConfigurator from '@gemini-commerce/js-client-product-configurator';
let defaultClient = GeminiCommerceJsClientProductConfigurator.ApiClient.instance;
// Configure OAuth2 access token for authorization: standardAuthorization
let standardAuthorization = defaultClient.authentications['standardAuthorization'];
standardAuthorization.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GeminiCommerceJsClientProductConfigurator.StepApi();
let tenantId = "tenantId_example"; // String | 
let stepId = "stepId_example"; // String | 
apiInstance.productConfiguratorDeleteStep(tenantId, stepId, (error, data, response) => {
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

### Return type

[**GooglerpcStatus**](GooglerpcStatus.md)

### Authorization

[standardAuthorization](../README.md#standardAuthorization)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## productConfiguratorUpdateStep

> ProductconfiguratorstepEntity productConfiguratorUpdateStep(tenantId, stepId, body)

Update Step

Modify an existing step within a product configurator by specifying the tenant and step IDs. Utilize a PUT request with updated step details in the body for seamless customization and fine-tuning of your product configurations.

### Example

```javascript
import GeminiCommerceJsClientProductConfigurator from '@gemini-commerce/js-client-product-configurator';
let defaultClient = GeminiCommerceJsClientProductConfigurator.ApiClient.instance;
// Configure OAuth2 access token for authorization: standardAuthorization
let standardAuthorization = defaultClient.authentications['standardAuthorization'];
standardAuthorization.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new GeminiCommerceJsClientProductConfigurator.StepApi();
let tenantId = "tenantId_example"; // String | 
let stepId = "stepId_example"; // String | 
let body = new GeminiCommerceJsClientProductConfigurator.ProductconfiguratorstepUpdateRequest(); // ProductconfiguratorstepUpdateRequest | 
apiInstance.productConfiguratorUpdateStep(tenantId, stepId, body, (error, data, response) => {
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
 **body** | [**ProductconfiguratorstepUpdateRequest**](ProductconfiguratorstepUpdateRequest.md)|  | 

### Return type

[**ProductconfiguratorstepEntity**](ProductconfiguratorstepEntity.md)

### Authorization

[standardAuthorization](../README.md#standardAuthorization)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


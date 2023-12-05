# ProductConfiguratorService.ConfigurationApi

All URIs are relative to *https://product-configurator.api.gogemini.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**productConfiguratorGetAvailableConfiguration**](ConfigurationApi.md#productConfiguratorGetAvailableConfiguration) | **GET** /v1/{tenantId}/product/{productId}/configuration | Get Available Configuration
[**productConfiguratorGetAvailableConfiguration2**](ConfigurationApi.md#productConfiguratorGetAvailableConfiguration2) | **POST** /v1/{tenantId}/product/{productId}/configuration | Get Available Configuration
[**productConfiguratorGetConfigurationFromSelections**](ConfigurationApi.md#productConfiguratorGetConfigurationFromSelections) | **POST** /v1/{tenantId}/product/{productId}/configuration-from-selections | Get Configuration from Selections



## productConfiguratorGetAvailableConfiguration

> ConfigurationGetAvailableConfigurationResponse productConfiguratorGetAvailableConfiguration(tenantId, productId, opts)

Get Available Configuration

Retrieve available configurations for a specific product and tenant. Use a GET request for read-only access or submit additional criteria in the body of a POST request for tailored configuration results. Streamline the retrieval of configurations effortlessly.

### Example

```javascript
import ProductConfiguratorService from 'product_configurator_service';
let defaultClient = ProductConfiguratorService.ApiClient.instance;
// Configure OAuth2 access token for authorization: standardAuthorization
let standardAuthorization = defaultClient.authentications['standardAuthorization'];
standardAuthorization.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ProductConfiguratorService.ConfigurationApi();
let tenantId = "tenantId_example"; // String | 
let productId = "productId_example"; // String | 
let opts = {
  'configuratorId': "configuratorId_example" // String | 
};
apiInstance.productConfiguratorGetAvailableConfiguration(tenantId, productId, opts, (error, data, response) => {
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
 **configuratorId** | **String**|  | [optional] 

### Return type

[**ConfigurationGetAvailableConfigurationResponse**](ConfigurationGetAvailableConfigurationResponse.md)

### Authorization

[standardAuthorization](../README.md#standardAuthorization)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## productConfiguratorGetAvailableConfiguration2

> ConfigurationGetAvailableConfigurationResponse productConfiguratorGetAvailableConfiguration2(tenantId, productId, body)

Get Available Configuration

Retrieve available configurations for a specific product and tenant. Use a GET request for read-only access or submit additional criteria in the body of a POST request for tailored configuration results. Streamline the retrieval of configurations effortlessly.

### Example

```javascript
import ProductConfiguratorService from 'product_configurator_service';
let defaultClient = ProductConfiguratorService.ApiClient.instance;
// Configure OAuth2 access token for authorization: standardAuthorization
let standardAuthorization = defaultClient.authentications['standardAuthorization'];
standardAuthorization.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ProductConfiguratorService.ConfigurationApi();
let tenantId = "tenantId_example"; // String | 
let productId = "productId_example"; // String | 
let body = new ProductConfiguratorService.ConfigurationGetAvailableConfigurationRequest(); // ConfigurationGetAvailableConfigurationRequest | 
apiInstance.productConfiguratorGetAvailableConfiguration2(tenantId, productId, body, (error, data, response) => {
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
 **body** | [**ConfigurationGetAvailableConfigurationRequest**](ConfigurationGetAvailableConfigurationRequest.md)|  | 

### Return type

[**ConfigurationGetAvailableConfigurationResponse**](ConfigurationGetAvailableConfigurationResponse.md)

### Authorization

[standardAuthorization](../README.md#standardAuthorization)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## productConfiguratorGetConfigurationFromSelections

> ConfigurationGetConfigurationFromSelectionsResponse productConfiguratorGetConfigurationFromSelections(tenantId, productId, body)

Get Configuration from Selections

Retrieve a configuration based on user selections for a specific product and tenant. Submit a POST request with user selections in the body to receive a tailored configuration. Enhance the user experience by dynamically generating configurations based on user input.

### Example

```javascript
import ProductConfiguratorService from 'product_configurator_service';
let defaultClient = ProductConfiguratorService.ApiClient.instance;
// Configure OAuth2 access token for authorization: standardAuthorization
let standardAuthorization = defaultClient.authentications['standardAuthorization'];
standardAuthorization.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ProductConfiguratorService.ConfigurationApi();
let tenantId = "tenantId_example"; // String | 
let productId = "productId_example"; // String | 
let body = new ProductConfiguratorService.ConfigurationGetConfigurationFromSelectionsRequest(); // ConfigurationGetConfigurationFromSelectionsRequest | 
apiInstance.productConfiguratorGetConfigurationFromSelections(tenantId, productId, body, (error, data, response) => {
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
 **body** | [**ConfigurationGetConfigurationFromSelectionsRequest**](ConfigurationGetConfigurationFromSelectionsRequest.md)|  | 

### Return type

[**ConfigurationGetConfigurationFromSelectionsResponse**](ConfigurationGetConfigurationFromSelectionsResponse.md)

### Authorization

[standardAuthorization](../README.md#standardAuthorization)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


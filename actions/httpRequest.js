export const HTTP_REQUEST_REQUEST = HTTP_REQUEST_REQUEST;
export const HTTP_REQUEST_FAILURE = HTTP_REQUEST_FAILURE;

export const initiateHTTPRequest = () => {
  return {
    type: HTTP_REQUEST_REQUEST
  };
};

export const processHTTPError = error => {
  return {
    type: HTTP_REQUEST_FAILURE
  };
};

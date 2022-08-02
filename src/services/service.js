import $ from "jquery";

export const getToken = function (successFunc) {
  const header = {
    GUID: "0739-E657-C4F4-98B4",
    Accept: "application/json",
    "Content-Type": "application/json",
  };
  const url = "https://api.akilliticaretim.com/api/Auth/Login";
  return $.ajax({
    type: "POST",
    headers: header,
    url: url,
    data: JSON.stringify({ userName: "user", password: "123456" }),
    dataType: "json",
    success: successFunc,
  });
};

export const getCategories = function (page, token, successFunc) {
  const header = {
    GUID: "0739-E657-C4F4-98B4",
    Authorization: token,
    Accept: "application/json",
    "Content-Type": "application/json",
  };
  const url = "https://api.akilliticaretim.com/api/Product/ListProducts/";
  return $.ajax({
    type: "GET",
    headers: header,
    url: url + page,
    dataType: "json",
    success: successFunc,
    error: successFunc,
  });
};

export const getProducts = function (page, token, successFunc) {
  const header = {
    GUID: "0739-E657-C4F4-98B4",
    Authorization: `Bearer ${token}`,
    Accept: "application/json",
    "Content-Type": "application/json",
  };
  const url = "https://api.akilliticaretim.com/api/Product/ListProducts/";
  return $.ajax({
    type: "GET",
    headers: header,
    url: url + page,
    dataType: "json",
    success: successFunc,
    error: successFunc,
  });
};

export const getProductDetail = function (id, token, successFunc) {
  const header = {
    GUID: "0739-E657-C4F4-98B4",
    Authorization: `Bearer ${token}`,
    Accept: "application/json",
    "Content-Type": "application/json",
  };
  const url = "https://api.akilliticaretim.com/api/Product/ListProducts/";
  return $.ajax({
    type: "GET",
    headers: header,
    url: url + id,
    dataType: "json",
    success: successFunc,
    error: successFunc,
  });
};

import axios from "./customize-axios.js";
// import axios from "axios";
// MODULE HANG_HOA
const create_HANG_HOA = async (rawData) => {
  return axios.post("/api/v1/product/create", rawData);
};

const update_HANG_HOA = async (rawData) => {
  return axios.put("/api/v1/product/update", rawData);
};

const delete_HANG_HOA = async (rawData) => {
  return axios.delete("/api/v1/product/delete", { data: rawData });
};

const readPanigate_HANG_HOA = async (rawData = "") => {
  return axios.get(`/api/v1/product/readPanigate${rawData}`);
};

const read_HANG_HOA = async (rawData) => {
  return axios.get(`/api/v1/product/read?idProduct=${rawData.idProduct}`);
};

// MODULE NHAN_VIEN
// MODULE KHACH_HANG
const readPanigation_KHACH_HANG = async (rawData) => {
  return axios.get(`/api/v1/customer/readPanigation${rawData}`);
};

// MODULE VO_HANG
const readPanigation_VO_HANG = async (rawData) => {
  return axios.get(`/api/v1/cart/readPanigation${rawData}`);
};

const updateNumBer_VO_HANG = async (rawData) => {
  return axios.patch(`/api/v1/cart/update`, rawData);
};

const deleteItem_VO_HANG = async (rawData) => {
  return axios.delete(`/api/v1/cart/delete`, { data: rawData });
};

const create_VO_HANG = async (rawData) => {
  return axios.post(`/api/v1/cart/create`, rawData);
};
// MODULE DAT_HANG
const create_DAT_HANG = async (rawData) => {
  return axios.post(`/api/v1/order/create`, rawData);
};

const update_DAT_HANG = async (rawData) => {
  return axios.put(`/api/v1/order/update`, rawData);
};

const readPanigation_DAT_HANG = async (rawData) => {
  return axios.get(`/api/v1/order/readPanigation${rawData}`);
};

const read_DAT_HANG = async (rawData) => {
  return axios.get(`/api/v1/order/read?${rawData}`);
};

const delete_DAT_HANG = async (rawData) => {
  return axios.delete(`/api/v1/order/delete`, { data: rawData });
};

const dashboard_DAT_HANG = async () => {
  return axios.get(`/api/v1/order/dashboard`);
};

const revenue_DAT_HANG = async () => {
  return axios.get(`/api/v1/order/revenue`);
};
// MODULE DAT_HANG_CHI_TIET
// MODULE HANG_HOA
// MODULE AUTHENTICATION
const register_AUTHENTICATION = async (rawData) => {
  return axios.post("/api/v1/authentication/register", rawData);
};
const login_AUTHENTICATION = async (rawData) => {
  return axios.post("/api/v1/authentication/login", rawData);
};
const logout_AUTHENTICATION = async (rawData) => {
  return axios.get("/api/v1/authentication/logout");
};
const fetchProflie_AUTHENTICATION = async (rawData) => {
  return axios.get("/api/v1/authentication/getProfile");
};

export default {
  // MODULE HANG_HOA
  create_HANG_HOA,
  readPanigate_HANG_HOA,
  read_HANG_HOA,
  update_HANG_HOA,
  delete_HANG_HOA,

  // MODULE DAT_HANG
  create_DAT_HANG,
  readPanigation_DAT_HANG,
  update_DAT_HANG,
  read_DAT_HANG,
  delete_DAT_HANG,
  dashboard_DAT_HANG,
  revenue_DAT_HANG,

  // MODULE VO_HANG
  readPanigation_VO_HANG,
  updateNumBer_VO_HANG,
  deleteItem_VO_HANG,
  create_VO_HANG,
  // MODULE KHACH_HANG
  readPanigation_KHACH_HANG,

  // MODULE AUTHENTICATION
  login_AUTHENTICATION,
  logout_AUTHENTICATION,
  fetchProflie_AUTHENTICATION,
  register_AUTHENTICATION,
};

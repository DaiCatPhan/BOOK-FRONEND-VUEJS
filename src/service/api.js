import axios from "./customize-axios.js";
// import axios from "axios";
// MODULE HANG_HOA
const create_HANG_HOA = async (rawData) => {
  return axios.post("/api/v1/product/create", rawData);
};

const readPanigate_HANG_HOA = async (rawData = "") => {
  return axios.get(`/api/v1/product/readPanigate${rawData}`);
};

const read_HANG_HOA = async (rawData) => {
  return axios.get(`/api/v1/product/read?idProduct=${rawData.idProduct}`);
};

// MODULE NHAN_VIEN
// MODULE KHACH_HANG
// MODULE DAT_HANG
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

  // MODULE AUTHENTICATION
  login_AUTHENTICATION,
  logout_AUTHENTICATION,
  fetchProflie_AUTHENTICATION,
  register_AUTHENTICATION,
};

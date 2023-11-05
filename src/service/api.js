// import axios from "./customize-axios.js";
import axios from "axios";

// MODULE HANG_HOA
const create_HANG_HOA = async (rawData) => {
  return axios.post("http://localhost:3000/api/v1/product/create", rawData);
};

const readPanigate_HANG_HOA = async (rawData='') => {
  return axios.get(
    `http://localhost:3000/api/v1/product/readPanigate${rawData}`
  );
};

// MODULE NHAN_VIEN
// MODULE KHACH_HANG
// MODULE DAT_HANG
// MODULE DAT_HANG_CHI_TIET
// MODULE HANG_HOA

export default {
  create_HANG_HOA,
  readPanigate_HANG_HOA,
};

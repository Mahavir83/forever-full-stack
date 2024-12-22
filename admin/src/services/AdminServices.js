import axios from "axios";
import { backendUrl } from "../App";

const token = localStorage.getItem("token");

export const login = async (email, password) => {
  try {
    const response = await axios.post(backendUrl + "/api/user/admin", {
      email,
      password,
    });
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

export const addProduct = async (formData) => {
  try {
    const response = await axios.post(
      backendUrl + "/api/product/add",
      formData,
      { headers: { token } }
    );
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

export const getProduct = async () => {
  try {
    const response = await axios.get(backendUrl + "/api/product/list", {
      headers: { token },
    });
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

export const removeProduct = async (id) => {
  try {
    const response = await axios.post(
      backendUrl + "/api/product/remove",
      { id },
      { headers: { token } }
    );
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

export const getOrders = async () => {
  try {
    const response = await axios.post(
      backendUrl + "/api/order/list",
      {},
      { headers: { token } }
    );
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

export const getOrderStatus = async (orderId, status) => {
  try {
    const response = await axios.post(
      backendUrl + "/api/order/status",
      { orderId, status },
      { headers: { token } }
    );
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

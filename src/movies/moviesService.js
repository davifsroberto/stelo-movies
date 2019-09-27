import api from "../api";

export const getPopulares = () => {
  return api.get("/5d4a06b03200005e00600f5c").then(r => r.data);
};

export const getAvaliados = () => {
  return api.get("/5d4a0703320000e37d600f5d").then(r => r.data);
};

export const getEstreias = () => {
  return api.get("/5d4a07203200008942600f5e").then(r => r.data);
};

export const getEmCartaz = () => {
  return api.get("/5d4a07363200009d84600f5f").then(r => r.data);
};

import { API_SERVER } from "../constants";

export const getControllers = () => {
  return fetch(API_SERVER + "/controller").then(response => response.json());
};

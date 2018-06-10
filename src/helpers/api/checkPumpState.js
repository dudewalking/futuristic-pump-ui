import { API_SERVER } from "../constants";

export const checkPumpState = data => {
  return fetch(API_SERVER + "/pump/state", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(response => response.json());
};

export const getWrongStates = data => {
  return fetch(API_SERVER + "/pump").then(response => response.json());
};

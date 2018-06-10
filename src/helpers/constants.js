import config from "../config.json";

export const GITHUB_URL = config.githubUrl;
export const WS_SERVER = config.wsServer;
export const API_SERVER = config.apiServer;

export const START_COMMAND = "start";
export const STOP_COMMAND = "stop";
export const DRAIN_COMMAND = "drain";

export const MAX_WATER_LEVEL = config.maxWaterLevel;

export const MIN_TEMPERATURE_LEVEL = config.temperatureInterval.min;
export const MAX_TEMPERATURE_LEVEL = config.temperatureInterval.max;
export const TEMPERATURE_MEASURE = `${String.fromCharCode(248)}C`;

export const MIN_PRESSURE_LEVEL = config.pressureInterval.min;
export const MAX_PRESSURE_LEVEL = config.pressureInterval.max;
export const PRESSURE_MEASURE = "Pa";

export const MIN_VOLUME_LEVEL = config.volumeInterval.min;
export const MAX_VOLUME_LEVEL = config.volumeInterval.max;
export const VOLUME_MEASURE = "m3";

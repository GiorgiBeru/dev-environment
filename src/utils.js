import * as Logger from "./logger.js";
export function currentDate() {
  Logger.log(`Current date is: ${new Date()}`);
}

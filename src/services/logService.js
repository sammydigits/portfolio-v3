//my custom log service to allow me to easily switch to rollbar or some other provider
import Raven from "raven-js";

//init function called in index.js
function init() {
  Raven.config("https://27f1edb97f614753ab690a895916b880@sentry.io/1389478", {
    release: "1-0-0",
    environment: "development-test"
  }).install();
}

//my log function that passes the error to Raven
function log(error) {
  Raven.captureException(error);
}

//export the methods
export default {
  init,
  log
};

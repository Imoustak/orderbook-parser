var Lynx = require("lynx");
var metrics = new Lynx("telegraf", 8080);

module.exports = {
  counter(measurement1, measurement2, tag1, tag2, tag3) {
    metrics.increment(
      `${measurement1}.${measurement2}.${tag1}.${tag2}.${tag3}`
    );
  },
  gauge(measurement1, measurement2, tag1, tag2, tag3, value) {
    metrics.gauge(
      `${measurement1}.${measurement2}.${tag1}.${tag2}.${tag3}`,
      value
    );
  },
};

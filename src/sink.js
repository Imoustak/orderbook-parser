const metrics = require("./metrics");

// Each how many microseconds it will calculate and display the speed
const FREQUENCY = 10000;

const updates = [];

module.exports = {
  send(...params) {
    updates.push(Date.now());
    // This is where all the orderbooks updates go to be processed by an external system.

    metrics.counter(
      "orderbook",
      "received",
      "orderbook-collector",
      "bitfinex",
      "ethbtc"
    );
    metrics.gauge(
      "orderbook",
      "parse_time",
      "orderbook-collector",
      "bitfinex",
      "ethbtc",
      Math.random()
    );
  },
};

setInterval(() => {
  const updatesPerMinute =
    (updates.filter((u) => u > Date.now() - FREQUENCY).length * 60000) /
    FREQUENCY;

  console.log(`[sink] Speed: ${updatesPerMinute} orderbooks per minute`);
}, FREQUENCY);

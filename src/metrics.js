
const http = require('http')

module.exports = {
  counter(...params) {

    const postData = `orderbook_received,host=test_host value=1`;

    const options = {
    hostname: 'telegraf',
      port: 8080,
      path: "/metrics",
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    };

    const req = http.request(options, (res) => {
      console.log(`STATUS: ${res.statusCode}`);
      console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
      res.setEncoding("utf8");
      res.on("data", (chunk) => {
        console.log(`BODY: ${chunk}`);
      });
      res.on("end", () => {
        console.log("No more data in response.");
      });
    });

    req.on("error", (e) => {
      console.error(`problem with request: ${e.message}`);
    });

    req.write(postData);
    req.end();
  },
};

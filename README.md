# `orderbook-parser + metrics stack`

Example project that obtains orderbook snapshots from Kraken and pushes metrics related to received orderbooks in influxdb via telegraf with grafana on top.

## How to test

First you need to build the docker image for orderbook-parser app:
`docker build -t imoustak/orderbook-parser:1.0.0 .`

Then to start the app and the setup run: 
`docker-compose up`  

Navigate to `localhost:3000` in order to access grafana and use default password: `admin`
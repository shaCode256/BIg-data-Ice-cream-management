// https://www.cloudkarafka.com/ הפעלת קפקא במסגרת ספק זה

const uuid = require("uuid");
const Kafka = require("node-rdkafka");

const kafkaConf = {
  "group.id": "sales_simulator",
  "metadata.broker.list": "dory-01.srvs.cloudkafka.com:9094,dory-02.srvs.cloudkafka.com:9094,dory-03.srvs.cloudkafka.com:9094".split(","),
  "socket.keepalive.enable": true,
  "security.protocol": "SASL_SSL",
  "sasl.mechanisms": "SCRAM-SHA-256",
  "sasl.username": "hgb4fnaz",
  "sasl.password": "Oxr0HbiA7QpKW1zAtq-W6lSJ04IwfTaW",
  "debug": "generic,broker,security"
};
const producer = new Kafka.Producer(kafkaConf);
const prefix = "hgb4fnaz-";
const topic = `${prefix}default`;

const genMessage = m => new Buffer.alloc(m.length,m);

producer.on("ready", function(arg) {
  console.log(`producer Ariel is ready.`);
});
producer.connect();

module.exports.sendToKafka= function(msg)
{   
  m=JSON.stringify(msg);
  console.log("Sending the msg:", msg);
  producer.produce(topic, -1, genMessage(m), uuid.v4());  
  //producer.disconnect();   
}
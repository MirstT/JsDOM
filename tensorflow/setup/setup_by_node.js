/*
 * @Description  :
 * @version      :
 * @Author       : Mirst
 * @Date         : 2021-12-06 23:59:04
 * @LastEditors  : Mirst
 * @LastEditTime : 2021-12-13 04:26:53
 */
const tf = require("@tensorflow/tfjs");

// Optional Load the binding:
// Use '@tensorflow/tfjs-node-gpu' if running with GPU.
require("@tensorflow/tfjs-node");

// Train a simple model:
const model = tf.sequential();
model.add(
  tf.layers.dense({ units: 100, activation: "relu", inputShape: [10] })
);
model.add(tf.layers.dense({ units: 1, activation: "linear" }));
model.compile({ optimizer: "sgd", loss: "meanSquaredError" });

const xs = tf.randomNormal([100, 10]);
const ys = tf.randomNormal([100, 1]);

model.fit(xs, ys, {
  epochs: 100,
  callbacks: {
    onEpochEnd: (epoch, log) =>
      console.log(`Epoch ${epoch}: loss = ${log.loss}`),
  },
});

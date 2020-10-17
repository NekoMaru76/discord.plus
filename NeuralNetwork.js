/* Copyright (c) EvoDev Team, Inc - All Rights Reserved.
 * This work is licensed under the Recex Shared Source License Version 1.0. 
 * To view a copy of this license, visit https://raw.githubusercontent.com/Recex/Licenses/master/SharedSourceLicense/LICENSE.txt.
 * Written by Gaia <careday17@gmail.com>, October 2020.
 */

let Neuron = require(__dirname + "/neural.js");

class Main {
	constructor() {
		let inputs  = [new Neuron(), new Neuron()]; // Input Layer w/ 2 neurons
		let hiddens = [new Neuron(), new Neuron()]; // Hiddent Layer w/ 2 neurons
		let outputs = [new Neuron()]; // Output Layer w/ 1 neuron
		// Connect Input Layer to Hidden Layer
		inputs[0].connect(hiddens[0]);
		inputs[0].connect(hiddens[1]);
		inputs[1].connect(hiddens[0]);
		inputs[1].connect(hiddens[1]);

		// Connect Hidden Layer to Output Layer
		hiddens[0].connect(outputs[0]);
		hiddens[1].connect(outputs[0]);
		
		this.activate = (input) => {
			inputs.forEach((neuron, i) => neuron.activate(input[i]));
			hiddens.forEach(neuron => neuron.activate());
			return outputs.map(neuron => neuron.activate());
		};
		
		this.propagate = (target) => {
			outputs.forEach((neuron, t) => neuron.propagate(target[t]));
			hiddens.forEach(neuron => neuron.propagate());
			return inputs.forEach(neuron => neuron.propagate());
		};
		
		this.train = (iterations=1, dataset) => {
			while(iterations > 0) {
				dataset.map(datum => {
					this.activate(datum.inputs);
					this.propagate(datum.outputs);
				});
				iterations--;
			}
		};
		
		this.inputs  = inputs;
		this.hiddens = hiddens;
		this.outputs = outputs;
	}
};

module.exports = Main;

/* Copyright (c) EvoDev Team, Inc - All Rights Reserved.
 * This work is licensed under the Recex Shared Source License Version 1.0. 
 * To view a copy of this license, visit https://raw.githubusercontent.com/Recex/Licenses/master/SharedSourceLicense/LICENSE.txt.
 * Written by Gaia <careday17@gmail.com>, October 2020.
 */
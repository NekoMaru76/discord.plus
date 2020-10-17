/* Copyright (c) EvoDev Team, Inc - All Rights Reserved.
 * This work is licensed under the Recex Shared Source License Version 1.0. 
 * To view a copy of this license, visit https://raw.githubusercontent.com/Recex/Licenses/master/SharedSourceLicense/LICENSE.txt.
 * Written by Gaia <careday17@gmail.com>, October 2020.
 */

const { compareTwoStrings, findBestMatch } = require("string-similarity");

class Chatbot {
    trainData(data) {
        if (!Array.isArray(data)) throw new Error("System needs 2 or more input to process and predict the output, as such, data needs to be a type of Array.");
        this.data = data;
    }
    getPrediction(input) {
        let dataInput  = this.data.map(d => d.input);
        let dataOutput = this.data.map(d => d.output);
        return dataOutput[dataInput.indexOf(findBestMatch(input, dataInput).bestMatch.target)];
    }
    getResult(input) {
        let dataInput   = this.data;
        let finalResult = [];
        for (let data of dataInput) {
            finalResult.push({ prediction: data.input, score: compareTwoStrings(data.input, input) });
        }
        return finalResult;
    }
}

module.exports = Chatbot;

/* Copyright (c) EvoDev Team, Inc - All Rights Reserved.
 * This work is licensed under the Recex Shared Source License Version 1.0. 
 * To view a copy of this license, visit https://raw.githubusercontent.com/Recex/Licenses/master/SharedSourceLicense/LICENSE.txt.
 * Written by Gaia <careday17@gmail.com>, October 2020.
 */
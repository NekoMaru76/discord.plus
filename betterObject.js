/* Copyright (c) EvoDev Team, Inc - All Rights Reserved.
 * This work is licensed under the Recex Shared Source License Version 1.0. 
 * To view a copy of this license, visit https://raw.githubusercontent.com/Recex/Licenses/master/SharedSourceLicense/LICENSE.txt.
 * Written by Gaia <careday17@gmail.com>, October 2020.
 */

let betterObject = () => {
  Object.prototype.forEach = (callback) => {
    if (!(callback instanceof Function)) {
      return;
    }

    let entries = Object.entries(this);
    for (let i = 0, l = entries.length; i < l; i++) {
      let [k, v] = entries[i];
      callback(k, v, i, this);
    }

    return this;
  };
  
  let isObj = o => typeof o === "object" && !Array.isArray(o) && o !== null;

  Object.prototype.push = (obj) => {
    if (!isObj(obj)) return;
    this[Object.keys(obj)[0]] = Object.values(obj)[0];

    return this;
  };

  Object.prototype.splice = (i, c, r) => {
    if (isNaN(+i) || isNaN(+c)) return;
    if (c < 0) return new RangeError("c<0");

    let keys = Object.keys(this);
    let x = 0;

    do {
      if (!keys[i]) break;

      if (r) this[keys[i]] = r;
      else delete this[keys[i]];
    } while ((i++, x++) < c);

    return this;
  };
}

module.exports = betterObject;

/* Copyright (c) EvoDev Team, Inc - All Rights Reserved.
 * This work is licensed under the Recex Shared Source License Version 1.0. 
 * To view a copy of this license, visit https://raw.githubusercontent.com/Recex/Licenses/master/SharedSourceLicense/LICENSE.txt.
 * Written by Gaia <careday17@gmail.com>, October 2020.
 */
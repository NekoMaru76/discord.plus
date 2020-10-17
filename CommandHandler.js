/* Copyright (c) EvoDev Team, Inc - All Rights Reserved.
 * This work is licensed under the Recex Shared Source License Version 1.0. 
 * To view a copy of this license, visit https://raw.githubusercontent.com/Recex/Licenses/master/SharedSourceLicense/LICENSE.txt.
 * Written by Gaia <careday17@gmail.com>, October 2020.
 */

let CommandHandler = () => {
  if (!(this instanceof CommandHandler)) {
    throw new TypeError(`Class constructor ${CommandHandler.name} cannot be invoked without 'new'`)
  }
  
  this.commands = new Map();
  let cmds = this.commands;

  this.set = this.commands.set.bind(cmds);
  this.has = this.commands.has.bind(cmds);
  this.get = this.commands.get.bind(cmds);

  this.getAllNames = () => {
    return [...this.commands.keys()];
  };

  this.getAllValues = () => {
    return [...this.commands.values()];
  };

  this.getAll = () => {
    return this.commands;
  };
}

module.exports = CommandHandler;

/* Copyright (c) EvoDev Team, Inc - All Rights Reserved.
 * This work is licensed under the Recex Shared Source License Version 1.0. 
 * To view a copy of this license, visit https://raw.githubusercontent.com/Recex/Licenses/master/SharedSourceLicense/LICENSE.txt.
 * Written by Gaia <careday17@gmail.com>, October 2020.
 */
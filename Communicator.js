/* Copyright (c) EvoDev Team, Inc - All Rights Reserved.
 * This work is licensed under the Recex Shared Source License Version 1.0. 
 * To view a copy of this license, visit https://raw.githubusercontent.com/Recex/Licenses/master/SharedSourceLicense/LICENSE.txt.
 * Written by Gaia <careday17@gmail.com>, October 2020.
 */

const Discord = require("discord.js");
const io      = require("socket.io-client");
const uid     = require("cuid");

const [CONN_AWAIT] = [0];
const [
  // enum
  RES_CONN,
  RES_SENT,
  RES_ALR_CONN,
  RES_MUST_CONN,
  RES_NOT_FOUND,
  RES_FAILSEND
] = [101, 102, 501, 502, 503, 504];
const [ERR_SUCCESS, ERR_ALR_BLOCKED, ERR_NOT_BLOCKED] = [0, 1, 2];

let emitEvent = (event, arg) => {
  if (this.events[event]) {
    this.events[event].forEach(ev => {
      ev(arg);
    });
  }
}

let Communicator = (client) => {
  if (!(this instanceof Communicator)) {
    throw new TypeError(`Class constructor ${Communicator.name} cannot be invoked without 'new'`)
  }
  
  switch (typeof client) {
    case "string":
      this.client = new Discord.Client();
      this.client.login(client);
      break;

    case "object":
      this.client = client;
      break;

    default:
      throw new TypeError(
        "the `client` parameter must be a string or an object"
      );
      break;
  }

  this.events = {};
  this.blockedUsers = [];

  this.client.on("ready", () => {
    this.socket = io("http://5.9.253.193");
    this.socket.connectionStatus = CONN_AWAIT;

    this.socket.on("bd.res", res => {
      let code = res.code;

      switch (code) {
        case RES_CONN:
          emitEvent.bind(this)("ready");
          break;
        case RES_FAILSEND:
          break;
         case RES_SENT:
          break;
        default:
          throw new Error(code);
          break;
      }
    });

    this.socket.on("bd.message", msg => {
      if (this.blockedUsers.includes(msg.user.id)) return;
      emitEvent.bind(this)("message", msg);
    });

    this.socket.on("disconnect", () => {
      this.connectionStatus = CONN_AWAIT;
    });

    this.socket.on("connect", () => {
      this.socket.emit("bd.connected", this.client.user.id);
    });
  });

  this.on = (ev, cb) => {
    if (!this.events[ev]) this.events[ev] = [];
    this.events[ev].push(cb);
  };

  this.block = (id) => {
    if (this.blockedUsers.includes(id)) {
      return ERR_ALR_BLOCKED;
    } else {
      this.blockedUsers.push(id);
      return ERR_SUCCESS;
    }
  };

  this.unblock = (id) => {
    if (!this.blockedUsers.includes(id)) {
      return ERR_NOT_BLOCKED;
    } else {
      this.blockedUsers.push(id);
      return ERR_SUCCESS;
    }
  };

  this.sendMessage = (config) => {
    let _id = uid();
    
    this.socket.emit(
      "bd.msgUser",
      {
        id     : config.id     ,
        message: config.message,
        _id    : _id
      }
    );
    
    let socket = this.socket;

    return new Promise((resolve, reject) => {
      let resfunc = (res) => {
        let code = res.code;
        switch(code) {
          case RES_SENT:
            resolve(res.content);
            break;
          case RES_FAILSEND:
            resolve(res.content);
            break;
          default:
            break;
        }
      }
      socket.on("bd.res.msg." + _id, resfunc);
    });
  }
}

module.exports = Communicator;

/* Copyright (c) EvoDev Team, Inc - All Rights Reserved.
 * This work is licensed under the Recex Shared Source License Version 1.0. 
 * To view a copy of this
 
 license, visit https://raw.githubusercontent.com/Recex/Licenses/master/SharedSourceLicense/LICENSE.txt.
 * Written by Gaia <careday17@gmail.com>, October 2020.
 */
!function(e){var o={};function a(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=e,a.c=o,a.d=function(e,o,n){a.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:n})},a.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},a.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(o,"a",o),o},a.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},a.p="",a(a.s=0)}([function(e,o,a){"use strict";a.r(o);Global.SystemVars.Modules.Home=async function(e){Global.SystemVars.CurrentOrigin="Home";const o={Node:document.createElement("module"),Load:async function(){console.log("start of homepage.js"),console.log("Parent is:",e);var o=document.createElement("h1"),a=document.createElement("input");a.onkeydown=(async e=>{"Enter"==e.key&&(o.innerHTML=await Server("Hello",e.target.value))}),o.innerHTML="Hello World",e.add(o),e.add("hello"),e.add(a)}};o.Node.id="Home";Global.Eval.bind(o);Global.SystemVars.Loading.push(o),await o.Load(),e.add(o.Node),Global.SystemVars.Loading.pop(),Global.SystemVars.CurrentOrigin=void 0},Global.SystemVars.Modules.HomeᐟHome=async function(e){Global.SystemVars.CurrentOrigin="Home";const o={Node:document.createElement("module"),Load:async function(){alert("Yo this is a nested home page"),e.add("blah")}};o.Node.id="Home";Global.Eval.bind(o);Global.SystemVars.Loading.push(o),await o.Load(),e.add(o.Node),Global.SystemVars.Loading.pop(),Global.SystemVars.CurrentOrigin=void 0},Global.SystemVars.Modules.Homeᐟblah=async function(e){Global.SystemVars.CurrentOrigin="blah";const o={Node:document.createElement("module"),Load:async function(){var o=document.createElement("div");o.innerHTML="BLAHHHHHHHHHH",e.add(o)}};o.Node.id="blah";Global.Eval.bind(o);Global.SystemVars.Loading.push(o),await o.Load(),e.add(o.Node),Global.SystemVars.Loading.pop(),Global.SystemVars.CurrentOrigin=void 0},Global.SystemVars.Modules.Homeᐟblah2=async function(e){Global.SystemVars.CurrentOrigin="blah2";const o={Node:document.createElement("module"),Load:async function(){var o=document.createElement("div");o.innerHTML="BLAHHHHHHHHHH",e.add(o)}};o.Node.id="blah2";Global.Eval.bind(o);Global.SystemVars.Loading.push(o),await o.Load(),e.add(o.Node),Global.SystemVars.Loading.pop(),Global.SystemVars.CurrentOrigin=void 0},Global.SystemVars.Modules.hello=async function(e){Global.SystemVars.CurrentOrigin="hello";const o={Node:document.createElement("module"),Load:async function(){var o=document.createElement("button");o.innerHTML="click me",o.onclick=(async()=>{LoadPage("Home/Home")}),e.add(o)}};o.Node.id="hello";Global.Eval.bind(o);Global.SystemVars.Loading.push(o),await o.Load(),e.add(o.Node),Global.SystemVars.Loading.pop(),Global.SystemVars.CurrentOrigin=void 0}}]);
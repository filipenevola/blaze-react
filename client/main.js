import { Template } from "meteor/templating";
import { ReactiveVar } from "meteor/reactive-var";
import { Router } from "meteor/iron:router";

import "../ui/defaultLayout.html";
import "../ui/defaultLayout";

import "./main.html";
import "../ui/page.html";
import "../ui/page";

Router.configure({
  layoutTemplate: "defaultLayout",
});

Router.map(function () {
  this.route("/", {
    name: "hello",
    path: "/",
  });
  this.route("/info", {
    name: "info",
    path: "/info",
  });
  this.route("/page", {
    name: "page",
    path: "/page",
  });
});

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  "click button"(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
  "click .go-info"(event, instance) {
    Router.go('/info')
  },
  "click .go-page"(event, instance) {
    Router.go('/page')
  },
});

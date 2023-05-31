import { Template } from "meteor/templating";
import { Router } from "meteor/iron:router";

Template.defaultLayout.events({
  "click .go-home"(event, instance) {
    console.log(`go-home`);

    Router.go("/");
  },
  "click .go-info"(event, instance) {
    console.log(`go-info`);
    Router.go("/info");
  },
  "click .go-page"(event, instance) {
    console.log(`go-page`);
    Router.go("/page");
  },
});

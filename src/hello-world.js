import React from "react";
import HelloWorldButton from "./components/hello-world-button/hello-world-button";
import Heading from "./components/heading/heading";

const heading = new Heading();
heading.render("The hello world page");

const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();

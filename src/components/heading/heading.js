import "./heading.scss";

class Heading {
  render() {
    const body = document.querySelector("body");
    const h1 = document.createElement("h1");
    h1.text = "I'm a silly heading";

    body.appendChild(h1);
  }
}

export default Heading;

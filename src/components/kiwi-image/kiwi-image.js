import Kiwi from "../../images/kiwi.jpg";
import "./kiwi-image.scss";

class KiwiImage {
  render() {
    const img = document.createElement("img");
    img.src = Kiwi;
    img.alt = "Picture of a kiwi";
    img.classList.add("kiwi-image");

    const body = document.querySelector("body");
    body.appendChild(img);
  }
}

export default KiwiImage;

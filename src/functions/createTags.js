import { displayTags } from "./domElements";

export default function createTags(tags) {
  if (tags === "") {
    // do nothing
  } else {
    const tag = document.createElement("div");
    const tagName = document.createElement("div");

    tag.classList.add("tag1");
    tagName.classList.add("tag-name");

    displayTags.appendChild(tag);
    tag.appendChild(tagName);

    tagName.textContent = tags;
  }
}

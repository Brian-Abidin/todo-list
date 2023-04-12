import { displayTags } from "./domElements";

export default function createTags(tags) {
  if (tags === "") {
    // do nothing
  } else {
    const tag = document.createElement("div");
    const tagName = document.createElement("div");
    const removeTag = document.createElement("button");

    tag.classList.add("tag1");
    tagName.classList.add("tag-name");
    removeTag.classList.add("remove-tag");

    displayTags.appendChild(tag);
    tag.appendChild(tagName);
    tag.appendChild(removeTag);

    tagName.textContent = tags;
    removeTag.textContent = "-";
  }
}

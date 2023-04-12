import { displayTags } from "./domElements";

export default function createTags(tags) {
  for (let i = 0; i < tags.length; i += 1) {
    if (tags[0] === "") {
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

      tagName.textContent = tags[i];
      removeTag.textContent = "-";
    }
  }
}

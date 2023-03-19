function textComponent(unique_identifier, placeholder = "Text...") {
  const text = document.createElement("input");
  text.classList.add("ui_definition_text_component"); //to style
  text.setAttribute("type", "text");
  text.setAttribute("Placeholder", placeholder);

  return _wrap(text, [unique_identifier, "text_inputs"]);
}

function imageComponent(
  unique_identifier,
  image_path = "",
  alter_text = "",
  width = 150,
  height = 150
) {
  const img = document.createElement("img");
  img.setAttribute("src", image_path);
  img.setAttribute("alt", alter_text);
  img.setAttribute("width", width);
  img.setAttribute("height", height);
  img.classList.add("ui_def_img"); //to style

  return _wrap(img, [unique_identifier, "image"]);
}

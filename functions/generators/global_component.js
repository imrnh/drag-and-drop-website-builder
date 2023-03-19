function menubar_button(cls, event_listener) {
  const mbar_button = document.createElement("button");
  mbar_button.setAttribute("type", "button");

  let _btn_icon = document.createElement("i");
  cls.forEach((_cl) => _btn_icon.classList.add(_cl));

  mbar_button.appendChild(_btn_icon);
  mbar_button.addEventListener("click", event_listener);

  return mbar_button;
}

function menubar(__local_wrapper) {
  const menubar = document.createElement("div");

  menubar.classList.add("ui_def_menubar");

  const _edit_button = menubar_button(["fa-solid", "fa-pen"], () => {});
  const _delete_button = menubar_button(["fa-solid", "fa-trash"], () => {
    console.log(__local_wrapper.parentElement.removeChild(__local_wrapper));
  });

  menubar.appendChild(_edit_button);
  menubar.appendChild(_delete_button);

  return menubar;
}

export function _wrap(__component__, classes) {
  const local_wrapper = document.createElement("div");
  local_wrapper.classList.add("ui_def_local_wrapper");

  local_wrapper.appendChild(menubar(local_wrapper));
  local_wrapper.appendChild(__component__);

  classes.forEach((element) => {
    local_wrapper.classList.add(element);
  });

  return local_wrapper;
}

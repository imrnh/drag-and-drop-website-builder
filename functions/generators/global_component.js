function menubar_button(cl_1, cl_2) {
  const mbar_button = document.createElement("button");
  mbar_button.setAttribute("type", "button");

  //edit icon
  _btn_icon = document.createElement("i");
  _btn_icon.classList.add(cl_1); //fa-solid
  _btn_icon.classList.add(cl_2); //fa-pen

  mbar_button.appendChild(_btn_icon);

  return mbar_button;
}

function menubar() {
  const menubar = document.createElement("div");

  menubar.classList.add("ui_def_menubar");

  const _edit_button = menubar_button("fa-solid", "fa-pen");
  const _delete_button = menubar_button("fa-solid", "fa-trash");

  menubar.appendChild(_edit_button);
  menubar.appendChild(_delete_button);

  return menubar;
}

function _wrap(__component__, classes) {
  const local_wrapper = document.createElement("div");
  local_wrapper.classList.add("ui_def_local_wrapper");

  local_wrapper.appendChild(menubar());
  local_wrapper.appendChild(__component__);

  classes.forEach(element => {
    local_wrapper.classList.add(element);
  });

  return local_wrapper;
}

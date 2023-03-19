function menubar_button(cl_1, cl_2){
    const mbar_button = document.createElement('button');
    mbar_button.setAttribute('type', 'button');

    //edit icon
    _btn_icon = document.createElement('i');
    _btn_icon.classList.add(cl_1); //fa-solid 
    _btn_icon.classList.add(cl_2); //fa-pen

    mbar_button.appendChild(_btn_icon);

    return mbar_button;
}

function menubar(){
    const menubar = document.createElement('div');

    menubar.classList.add('ui_def_menubar');

    const _edit_button = menubar_button('fa-solid', 'fa-pen');
    const _delete_button = menubar_button('fa-solid', 'fa-trash');


    menubar.appendChild(_edit_button);
    menubar.appendChild(_delete_button);

    return menubar;
}

function _wrap(__component__){
    const local_wrapper = document.createElement('div');
    local_wrapper.classList.add('ui_def_local_wrapper');


    local_wrapper.appendChild(menubar());
    local_wrapper.appendChild(__component__);

    return local_wrapper;
}

function textComponent(placeholder = "Text..."){
    


    const text = document.createElement('input');

    text.classList.add('ui_definition_text_component');
    text.setAttribute('type', 'text');
    text.setAttribute('Placeholder', placeholder);
    text.classList.add('text_inputs');


    return _wrap(text);
}


function imageComponent(image_path = "", alter_text = "", width = 150, height = 150){
    const img = document.createElement('img');
    img.setAttribute('src', image_path);
    img.setAttribute('alt', alter_text);
    img.setAttribute('width', width);
    img.setAttribute('height', height);

    return _wrap(img);
}
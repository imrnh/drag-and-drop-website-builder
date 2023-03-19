const component_bar = document.querySelector('.component_bar');

component_bar.append(component_builder("Text", "../assets/icons/text.png"));
component_bar.append(component_builder('Image', "../assets/icons/image.png"));



function component_builder(name, icon_path){
    const _component = document.createElement('div');
    _component.setAttribute('draggable', 'true'); //making the component draggable.

    _component.classList.add(name.toLowerCase() + '_component'); //identifying the compnent used, to generate ui.
    _component.classList.add('_generated_component'); //styling


    const _name = document.createElement('p');
    const _nameNode = document.createTextNode(name);
    _name.append(_nameNode);

    const _icon = document.createElement('img');
    _icon.setAttribute('src', icon_path);
    

    _component.append(_name);
    _component.append(_icon);

    return _component;
}
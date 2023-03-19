const _component_bar = document.querySelector(".component_bar");
const _canvas = document.querySelector(".canvas");
const _attribute_bar = document.getElementsByClassName(".attribute_bar");

let element_to_attach = null;

new Sortable(_canvas, {
  animation: 150,
});

const _cmpbar_components = document.querySelectorAll("._generated_component");

_cmpbar_components.forEach((cmpnt) => {
  cmpnt.addEventListener("dragstart", handle_dragstart);
});

_canvas.addEventListener('drop', handle_drop);

function handle_dragstart(evnt) {
    generator_identity = evnt.target.className.split(" ")[0];
    element_to_attach = class_map[generator_identity]();
}

function handle_drop(evnt){
    console.log(evnt.target.className.split(" "));
    if(evnt.target.className.split(" ").includes('canvas')){
        evnt.target.append(element_to_attach);
    }
}
const _component_bar = document.querySelector(".component_bar");
const _canvas = document.querySelector(".canvas");
const _attribute_bar = document.getElementsByClassName(".attribute_bar");

let dragged_element = null;
let element_to_attach = null;

new Sortable(_canvas, {
  animation: 150,
  onUpdate: (evnt)=>{
    console.log(evnt)
  }
});

const _cmpbar_components = document.querySelectorAll("._generated_component");

_cmpbar_components.forEach((cmpnt) => {
  cmpnt.addEventListener("dragstart", handle_dragstart);
});


//adding drop event to canvas
_canvas.addEventListener("dragover", (e) => e.preventDefault());
_canvas.addEventListener('drop', handle_drop);



/*  Utilities  */
function handle_dragstart(evnt) {
    dragged_element = evnt.srcElement;
    generator_identity = evnt.srcElement.className.split(" ")[0];

    let random_class_name = generate_random_class_name();
    element_to_attach = class_map[generator_identity](random_class_name);
}

function handle_drop(evnt){
    if(evnt.target.className.split(" ").includes('canvas')){
        console.log(evnt.target.childNodes)
        evnt.target.append(element_to_attach);
    }
}
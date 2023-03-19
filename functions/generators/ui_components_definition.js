function textComponent(placeholder = "Text...", value = null){
    const text = document.createElement('input');

    text.setAttribute('type', 'text');
    text.setAttribute('Placeholder', placeholder);
    text.setAttribute('value', value);
    text.classList.add('text_inputs');
    return text;
}


function imageComponent(image_path = "", alter_text = "", width = 150, height = 150){
    const img = document.createElement('img');
    img.setAttribute('src', image_path);
    img.setAttribute('alt', alter_text);
    img.setAttribute('width', width);
    img.setAttribute('height', height);

    return img;
}


function helloWorld(text){
    console.log("Given text: " + text);
}
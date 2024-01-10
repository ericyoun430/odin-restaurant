const mainElement = (function Document(document) {
    const doc = document.querySelector('#content');
    return {doc};
})(document);

function CreateElement(element, content='', className='') {
    const newElement = document.createElement(element);
    if (content != '') {
        newElement.innerHTML = content;
    }
    if (className != '') {
        newElement.classList.add(className);
    }
    return {newElement};
}

export {mainElement, CreateElement};
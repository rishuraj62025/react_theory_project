function customRender(reactElement, container){

    // 1st method, it is good but we have to set all the attributes one by one
    // const domElement = document.createElement(reactElement.type);
    // domElement.innerHTML = reactElement.children;
    // domElement.setAttribute('href', reactElement.props.href);
    // domElement.setAttribute('target', reactElement.props.target);
    // container.appendChild(domElement);


    // 2nd method, better one, we can set all the attributes at once
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;

    for (const prop in reactElement.props) {
        if(prop == 'children') continue;

        domElement.setAttribute(prop, reactElement.props[prop]);
    }

    container.appendChild(domElement);
};



const mainContainer = document.querySelector('#root');

const reactElement = {
    type : 'a',

    props : {
        href : 'https://www.google.com',
        target : '_blank',
    },

    children : "Click me to visit google"
};


customRender(reactElement, mainContainer);

// yahan customRender function ko call karna hai jahan hume render karna hai,
// isme do arguments pass karne hai, pehla reactElement aur doosra container jahan hume render karna hai.
// reactElement ka matlab hai kaun sa element render krna hai aur  mainConatainer ka matlab hai 
// kahan render karna hai.
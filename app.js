// <!-- Below code written in React -->
// const heading = React.createElement("h1",{id:"heading",xyz:"abc"},"Hello world from React ...")

// console.log(heading) /// its an object not a tag

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading)

const heading = React.createElement("div",{id:"parent"},[
        React.createElement("h1",{id:"h1tag"},"I'm heading 1 from parent root div"),
        React.createElement("h1",{id:"h1tag"},"I'm heading 2 from parent root div")
    ], 
    React.createElement("div",{id:"child"},[
        React.createElement("h1",{},"I'm heading 1 from child root div"),
        React.createElement("h1",{},"I'm heading 2 from child root div")
    ])
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);
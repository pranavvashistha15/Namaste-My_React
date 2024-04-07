
/* <div id="parent">
   <div id = "child">
   <h1>i am h1 tag</h1>
   <h2>i am h2 tag</>
   </div>

   <div id = "child2">
   <h1>i am h1 tag</h1>
   <h2>i am h2 tag</>
   </div>
   </div>*/

   const parent = React.createElement("div", {id: "parent"}, [  
        
        React.createElement("div", { id: "child"},
        
        [React.createElement("h1", {}, "I'm an h1 tag"), 
        React.createElement("h2", {}, "I'm an h2 tag"),
   ]),
   
   React.createElement("div", { id: "child2"},
        
   [React.createElement("h1", {}, "I'm an h1 tag"), 
   React.createElement("h2", {}, "I'm an h2 tag"),]),
]);
console.log(parent); //object
/*const heading = React.createElement("h1", {}, "hello world from react");*/
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(parent);
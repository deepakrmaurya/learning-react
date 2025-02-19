//Normal createElement
// const heading = React.createElement(
//   "h1",
//   { id: "headingText" },
//   "Hello World From React...!"
// );
// console.log(heading);

//Nested createElement
// const nestedHeading = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", {}, "This is the Nested createElement.")
//   )
// );
// console.log(nestedHeading);

//2 Sibling in the createElement
// const siblingHeading = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "I am the Heading Tag H1"),
//     React.createElement("h2", {}, "I am the Heading Tag H2"),
//   ])
// );

//Super Nested createElement
const superNestedHeading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "Child 1, Heading 1"),
    React.createElement("h2", {}, "Child 1, Heading 2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Child 2, Heading 1"),
    React.createElement("h2", {}, "Child 2, Heading 2"),
  ]),
]);
console.log(superNestedHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
// root.render(nestedHeading);
// root.render(siblingHeading);
root.render(superNestedHeading);

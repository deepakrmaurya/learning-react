import React from "react";
import ReactDOM from "react-dom/client";
//Previous Episodes Practice
// import { createRoot } from "react-dom/client";

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

// //Super Nested createElement
// const superNestedHeading = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child1" }, [
//     React.createElement("h1", {}, "Child 1, Heading 1"),
//     React.createElement("h2", {}, "Child 1, Heading 2"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "Child 2, Heading 1"),
//     React.createElement("h2", {}, "Child 2, Heading 2"),
//   ]),
// ]);
// console.log(superNestedHeading);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// // root.render(heading);
// // root.render(nestedHeading);
// // root.render(siblingHeading);
// root.render(superNestedHeading);

//React.createElement => JS Object => HTMLElement(render)
// createElement through core react
// const heading = React.createElement(
//   "h1",
//   { id: "headingText" },
//   "Hello this is Namaste React"
// );

//JSX
//JSX Code is transpiled by Babel to => React.createElement => JS Object => HTMLElement(render)

// const title = <h1>This is title element</h1>;
// const JsxHeading = () => <h1 id="headingText"> Namaste React from JSX </h1>;

// // React Components
// const HeadingComponent = () => (
//   <div>
//     {title}
//     {/* ways we can call Components */}
//     <JsxHeading />
//     <JsxHeading></JsxHeading>
//     {JsxHeading()}
//     {123 + 456}
//     {console.log(
//       "This is printing from console log using curly brackets in React"
//     )}
//     <h1 className="headingText">
//       This text is coming from the react heading component
//     </h1>
//   </div>
// );

const Header = () => (
  <div className="header">
    <div className="logo-container">
      <img
        className="logo"
        src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=snacks&sf=&txt_keyword=All"
      ></img>
      {/* <h1>Header</h1> */}
    </div>
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);

const Body = () => (
  <div className="body">
    <h1>Body</h1>
    <div className="search">Search</div>
  </div>
);

const Footer = () => (
  <div>
    <h1>Footer</h1>
  </div>
);

const AppLayout = () => (
  <div>
    <Header />
    <h1 className="app" id="headingText">
      Hello this is react
    </h1>
    <Body />
    <Footer />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(<AppLayout />); // this is how we render functional component

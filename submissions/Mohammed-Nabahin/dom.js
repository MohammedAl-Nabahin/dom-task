/* Task 1 */

//The tag name of the last element child of {body} , using only navigation properties (no query selectors).
console.log(document.body.lastElementChild.tagName);

//The number of element children in {body} (not text nodes).
const elementsCount = document.body.children.length;
console.log(elementsCount);

//The difference in length between childNodes and children of {body}. Explain why they differ.
const childNodesLength = document.body.childNodes.length;
const childrenLength = document.body.children.length;
const difference = childNodesLength - childrenLength;

console.log(
  `childNodes (${childNodesLength}) - children (${childrenLength}) = ${difference}`
);

// They differ because the childNodes includes text nodes like whitespaces or newlines,
// while children includes only element nodes.

//Determine: What is the nodeType and nodeName of the first node in document.body.childNodes?
const firstNode = document.body.childNodes[0];
console.log(firstNode.nodeType); // 3 means textNode
console.log(firstNode.nodeName); // #text

//Is the first paragraph a sibling of the second, or a descendant?
const section = document.body.children[1].children[0];
const firstP = section.children[0];
const isSibling =
  firstP.parentElement === firstP.nextElementSibling.parentElement;

console.log(isSibling); // true

//Twist: Can you find any unexpected text nodes in the DOM structure? Log them and explain their origin.
function logTextNodes(element) {
  if (
    element.nodeType === element.TEXT_NODE &&
    element.textContent.trim() === ""
  ) {
    console.log(element);
    console.log("The parent node:", element.parentElement);
    // Text nodes can be the content of the html elements, the white spaces and new lines in the html page.
  }
  element.childNodes.forEach(logTextNodes); // Gets all the nested text nodes
}
const elements = document.body;
logTextNodes(elements);

/* Task 2 */

//Create then append
const div = document.createElement("div");
const h2 = document.createElement("h2");
const p = document.createElement("p");

div.className = "card";
div.dataset.role = "admin";

h2.textContent = "Access Panel";
p.textContent = "Authenticated";

div.append(h2, p);
document.body.appendChild(div);

//Log the value of the data-role as a JS property, not via .getAttribute.
console.log(div.dataset.role);

//Change the paragraph text to "Welcome back, Admin" using a property, not a method.
p.textContent = "Welcome back, Admin";

//Add two classes to the div: "authenticated" and "highlight" using classList.
div.classList.add("authenticated", "highlight");

//Challenge: Use classList.contains() to verify that "card" still exists, and remove it while keeping the others.
if (div.classList.contains("card")) {
  div.classList.remove("card");
}

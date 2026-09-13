# Dev Stack App React Project
## Name
Dev Stack App
## Description
Dev Stack App is a simple React website that helps developers explore different technologies and build their own development stack. Users can browse technologies by category, add their preferred technologies to their stack, and easily manage their selections.

## Technologies that i used
React,
Typescript,
Tailwind CSS,
DaisyUI,
React Toastify,
JSON,
Vite

## Features
1.Browse technologies with their category, description, rating, and difficulty.

2.Add your favorite technologies and create your own development stack.

3.View each technology’s description, rating, difficulty level, and badge to help choose the right tools for your stack.

## React Questions and Answer
React Questions & Answers

## i. What is JSX, and why is it used in React?

JSX is a syntax that lets us write html -like code inside JavaScript. It makes React components easier to write and understand.

## ii. What is the difference between props and state?

Props are data passed from a parent component to a child component. State is data managed inside a component that can change over time.

## iii. What does the useState hook do, and where did you use it in this project?

it is  used to create and manage changing data in a component. I used it to store and manage the technologies added to the user's stack.

## iv. What does the useEffect hook do, and why did you need it to load the JSON data?

it is used to run code after a component renders, usually for side effects like fetching data. I did not use it in this project because I used React's  use() with a Promise to load the JSON data.

## v. Why does every item in a .map() list need a unique key prop?

A unique key helps React identify each item in a list. It allows React to update the correct item when the list changes.

## vi. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different content depending on a condition. I used it to hide the empty stack message when technologies have been added.

<p className={`${stack.length > 0 ? "hidden" : ""}`}>
    Your Stack is empty
</p>

## vii. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent sends data to a child through props. A child can send something back by calling a function that the parent passes to it as a prop.
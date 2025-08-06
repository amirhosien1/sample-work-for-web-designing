<<<<<<< HEAD
# Sample Work for Web Designing

This repository contains my sample projects showcasing my skills in web designing and development.  
I specialize in React.js and use JavaScript libraries such as GSAP, along with CSS frameworks like Bootstrap and Tailwind to build responsive and interactive user interfaces.

Currently, this repository features two main projects built with React:  
- A Todo List application  
- A Calculator application  

These projects demonstrate my proficiency in React, JavaScript, HTML, and CSS.  

To try out these projects, follow the instructions below to run the app locally or use [this link](https://amirhosien1.github.io/sample-work-for-web-designing) to see the project online.


=======

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

# Releases

## Release 1
a project with the todo-list at the homepage and a fixed header at the top of the page with a logo, a menu button and another part that is not developed yet. The menu button open a bootstrap offcanvas that has two link to shift between todo-list and calculator pages.
Header part is not responsive yet

### `To do app`
First you see a big title: Todo list. then you see a search box with a button. You can write your tasks in the search box and then click the button to add them to your list, Although you can use enter instead.
at the list, items are sorted vertically and by their date modifying. items have been made of three parts:a checkbox, title, a delete button.
you can put a done mark on your task by clicking on the checkbox
and of course you have understood that you can remove a task from your list by clicking on the delete button.

bellow the list you see a fixed part that contains the filter.
Its on "All" mode by default that shows all of your tasks.

"Active" ones are the tasks that you haven't done yet and has the checkbox unmarked

"Done" ones as the name says are tasks that are done and has the checkbox marked.

Your tasks and your last-used filter will save in your localStorage and it means that the next time you enter the site you can see your tasks that is added last time.

This part is approximately responsive.

### `Calculator`
There is a medium-sized with a blue background calculator in the middle of the page that has the numbers, basic operations and one delete button for delete one by one.
A button with a trash can icon is next to the display screen that delete all character.

The calculator has a 63 chars limit and in the desktop size it would shrink if the char exceed the certain amounts(30, 41) but after 63 it doesn't allow you to enter anymore and gives you an alert.

This page isn't responsive yet
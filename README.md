# Front-end Design Chicks Challenge by Leandro Perez

## Description

This is a design challenge so it may lack a bit of logic, I still did my best to replicate the CG design with its responsive design and transitions `(some of 'em transitions are not on the original)` when hover, focus, etc. I think It turned out good enough.

It was build with react and pure css, you can find the components and their respective styles in two folders, src/components for all page components and a /components folder inside each page for page-only components.

I used GraphQl for request, services and their types are on the /service folder 

The useScreen hook works by passing a resolution (in number) so you can render things just in the resolution of your wish.

You also have some utils for formatting text and currency.

The search component only works in the desktop navbar dropdown for now, in the other parts of the app is just for show

At the moment only the homepage and items page are available, you can access the items page by clicking the category on the nav on desktop or clicking the items card in homepage

## Functionalities and improvements to be added later on

- Range dropdown
- Items filtering
- Items by game;
- Cart
- Add react-query
- Create a base service and a requestHandler
- Refactor code repetition
- Pagination functionality
- Remove a couple of any that may have slipped somewhere
- Add loaders or skeleton
- 404 page
- Add the @ for imports

## Installation

Follow these steps to install and set up the project:

1. Clone this repository: git clone `https://github.com/leandroperez19/chicksgold-clone`
2. Navigate to the project directory: cd `CG-REACT-CLONE`
3. Install the dependencies: `npm install`
4. Do `npm start` to run the project

## Dependencies

1. `GraphQL`
2. `React Helmet`
1. `React Router Dom`

## Utilities

1. Github repository: `https://github.com/leandroperez19/chicksgold-clone`
2. Demo: `https://chicksgold-clone.netlify.app/`

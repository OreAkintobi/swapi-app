# SWAPI App

This is a React + TypeScript + Vite project that uses the Star Wars API (SWAPI) to display information about the Star Wars universe. Check it out [here](https://swapi-app-kohl.vercel.app/) or [here](https://swapi-62986omym-oreakintobis-projects.vercel.app/).

## Running the Project

To run the project, you need to have Node.js and npm installed on your machine. Once you have these, you can install the project dependencies from the root folder by running:

```
yarn
```

After the dependencies are installed, you can start the development server by running:

```
yarn start
```

## My Feedback on the Project

This was extremely fun (so much fun, I kinda got carried away; please see improvements and Pitfalls sections)! I enjoyed working on this project. I am a fan of the old Star Wars, so working with the SWAPI again was a great experience. I also enjoyed working with React and TypeScript. I have been using React for a while now, but this was my first time using Vite as well as the latest version of React Router, and RTKQuery (I have been using just Redux/Redux Toolkit in previous projects).

Vite says that they exist to solve issues like slow server start-up times and updates, and I feel like it lives up to its promise. I started the project with just normal React, but I switched to Vite because I wanted to try it out. It is sooo fast! It was also easy to set up and make changes compared to my last experience with NextJS (which is also great). I think it's dope that the developers made Vite available with templates for various frameworks and it can come with type safety out of the box.

React Router is awesome as well. I have some experience building mobile apps with React Native, and I use React Navigation for navigation in mobile apps. React Router is very similar to React Navigation now; it has become a lot more platform-agnostic, I dig it very much. It has introduced some very helpful components, hooks and paradigms to make it feel a lot more straightforward to build complex navigation systems. It worked very, very well with Vite too.

## Improving the Project

There are several ways you can improve on this project:

- **Expand the ESLint configuration:** The project uses a very basic ESLint configuration. This can be expanded to include type-aware lint rules. This will help catch more potential issues during development.
- **Add more features:** The application currently displays basic information from the SWAPI. More features such as search functionality, pagination, or user authentication can be added.

- **Improve the UI:** The application uses basic CSS for styling. CSS frameworks like Bootstrap or a UI library like Material-UI would improve upon what currently exists.

- **Write tests:** The project currently does not have any tests. This can be added to improve the reliability of the code via unit tests, integration tests, and end-to-end tests.

## Possible Pitfalls

- **API Limitations:** The SWAPI has some limitations such as rate limiting and lack of authentication. These limitations can affect the functionality of the application.

- **Lack of error handling:** The application does not have robust error handling. This can lead to unhandled exceptions and poor user experience.

- **Non-responsive design:** The application is not fully responsive and may not display correctly on all screen sizes. This can lead to a poor user experience on mobile devices. I would use Material-UI or Tailwind CSS to correct this.

- **Lack of accessibility:** The application has not been tested for accessibility. Some users may have difficulty using the application.

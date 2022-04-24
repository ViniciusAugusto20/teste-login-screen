# teste-login-screen

## :mag: Who is

This project is a simple login form. More details see the following gif.

![](/public/demonstrationGif.gif)

## :building_construction: Stack
This project was developed with the following technologies:

- [React](https://pt-br.reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Styled-Components](https://styled-components.com/)

In the development of the project, in addition to the technologies already mentioned, it was also used [Context Api](https://pt-br.reactjs.org/docs/context.html) and [Husky](https://github.com/typicode/husky). This project is also a [PWA](https://web.dev/progressive-web-apps/) where you can install it. The code organization and sctruction is basead on the Atomic Design :atom_symbol:.

## :rocket: Startup

__Backend__

For the backend of this project it is necessary to have [Json-server](https://www.npmjs.com/package/json-server) installed globally. So after having the same installed, to run the project it is necessary to go to the mock folder (`src/assets/mock`) and execute the command below:

```
json-server --watch db.json --port 5555
```

__Frontend__


```js
  yarn install
```

Later

```js
  yarn start
```

## :test_tube: Tests

The application has 4 tests developed in Cypress.

  * `try to login` - This test evaluates whether it is possible to log into the system.
  * `try to login with wrong password` - This test evaluates whether an error is returned when logging in with the wrong password.
  * `try to login with wrong e-mail and no password` - This test evaluates if an error is returned when entering an invalid email and not informing a password.
  * `try to login with blocked user` - This test evaluates whether an error is returned when trying to log in with a blocked user..


To run the tests, use the command:

```js
  npm test
```

## How works the application

The application consists of a simple login page in which there is the possibility of saving the user's email (if he manages to login successfully) in addition to some validations in the login flow being carried out in the backend to return success or error. The application was developed following the following order of priorities (ordered from highest to lowest):

- Responsive design: Because it is extremely important in the development of an application, it is of paramount importance to have responsivity to the greatest number of devices.
- Form with validations: This being a way to have control and inform the user what is mandatory and what is missing or wrong.
- Report success or error on login: We need to tell the user whether or not he was able to access the application and eventually help him to understand the reasons that may lead to non-access.
- Backend validation: It is important that the application validates that the information passed is valid and responds accordingly if it is valid (or not) or does not exist.
- Accounting for errors and blocking the account: Important in view of possible brute force attacks. In addition to having as a good practice to lock the account and ask the user to change the password also as a form of security and rotation in the password of the same.
- Form Accessibility: A point also with lower priority in view of the simplicity that application.
- PWA: Allow the user to want faster access to the system. In this case, it is treated with the lowest priority because it does not impact the user experience so much.
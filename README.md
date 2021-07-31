# Github Finder

A application to find Github related things like as repositories, users e.t.c by using beautiful github api. This application is built with the following technologies:

- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Firebase](https://firebase.google.com/)

### Application Features

- Users can signup and then signin with correct credentials.
- Users can search github repositories(For now users must signin to search, later it will be changed).

### Upcoming Features To Implement

- Users can search github users.
- Users have his/her own profile page.
- Users have the capability of wish listing.

### Registration Page

![Registration Page](./docs/registration-page.png)

### Repositories Search Page

![Repositories Search Page](./docs/repo-search-page.png)

# Getting Started with Github Finder

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). There are couple of branches are availabe following the branch name convention like this `01_xxxx_xxx`.

## Run on your machine

Please make sure you have following software installed in your system:

- Node.js
- NPM / Yarn

First you need to clone the repository:

```
$ git clone https://github.com/robin3317/github-repo.git
```

Then you have to install the necessary dependencies using either NPM or Yarn:

```
$ npm i
```

Or

```
$ yarn
```

Since the app currently uses firebase and firebase authentication, you need to create a firebase project and configure that project to this application. In the firebase folder, you will find a `firebase.js` (src/firebase/firebase.js) file. Change the every values of `firebaseConfig` object with your own. I recommend to set sensative credentials using `.env` file, although for some reasons I expose my credentials here :)

For more: [Firebase Official Documentation](https://firebase.google.com/docs/web/setup?authuser=0)

Now you are ready to run the application. In the project directory, you can run:

```
$ npm start
```

This will run the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## User Credentials for Testing

- email: test@gmail.com
- password: test123

> I appreciate to create your own profile

### Created & Maintained with :heart: by Abdur Rahman Robin

- [Facebook : Abdur Rahman Robin](https://www.facebook.com/robin4java)
- [Twitter : @robin4java](https://twitter.com/robin4java)
- [Linkedin : Abdur Rahman Robin](https://www.linkedin.com/in/robin4java/)
- [Instagram : imr.robin](https://www.instagram.com/imr.robin/)

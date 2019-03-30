# Simple TODO app built in ReactJS (hosted on AWS S3) communicating with GoLang app hosted on Openshift.

---

Great starting point for a project that has Redux and React Router: https://github.com/notrab/create-react-app-redux

---

## About This Application:

1. ReactJS application is hosted in **AWS S3** bucket.
2. The application has been built to be the front end of the GoLang app that can be found here: https://github.com/karolispx/golang-rh-todo/

---

## Features:

- Ability to register, login and logout.
- Create/update/delete/watch/unwatch tasks - not finished.

---

## Local Environment Set Up:

1. Clone this repository
2. run `npm install`

**Compiles and hot-reloads for development:**
- `npm start`

**Run your tests:**
- `npm run test`

**Compiles and minifies for production:**
- `npm run build`

---

## Deployment To AWS S3 Bucket:

This article provides everything that's needed to setup VueJS/ReactJS application on AWS S3 bucket: https://developer.okta.com/blog/2018/07/03/deploy-vue-app-aws, once that's done:
1. Run `npm run build`
2. Run `npm run deploy`

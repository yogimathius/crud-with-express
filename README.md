# Lighthouse Labs | CRUD with Express

- [ ] Express
- [ ] Routes
- [ ] CRUD
- [ ] EJS Templates

## Express! What is it good for!?

It is a node.js framework for building HTTP web servers, easily accepting requests and sending responses.

- Create
- Read
- Update
- Delete
- Edit
- Save

```
const movies = {
  ClockworkOrange: {
    title: "Clockwork Orange", year: 1971
  },
  ScottPilgrim: {
    title: "Scot Pilgrim", year: 2010
  },
  PulpFiction: {
   title: "pulp fiction", year: 1994
  },
  BlackPanther: {
    title: "Black Panther", year: 2018
  },
  MadMax: {
    title: "Mad Max Fury Road", year: 2015
  },
  TheBatman: {
    title: “The Batman“, year: 2022
  },
  CitizenKane: {
    title: "Citizen Kane", year: 1941
  }
}
```

BREAD

- Browse
- Read
- Edit
- Add
- Delete

@localhost:8080/movies

```
CRUDES        | Method     | Path                | Purpose
======================================================================

CREATE        | GET        | /movies/new         | Redirect to create movie page
SAVE          | POST       | /movies             | Save new movie to database

INDEX         | GET        | /movies             | Get all movies
READ          | GET        | /movies/:key        | Get individual movie

UPDATE        | POST       | /movies/:key        | Update movie in the database
EDIT          | GET        | /movies/:key/edit   | Get edit movie page

DELETE        | POST       | /movies/:key/delete | Deletes a movie
```

## EJS (Embedded JavaScript)

- Helps us format HTML strings
- You can sprinkle bits of JS logic in EJS files
- EJS is back-end, and helps us format a string BEFORE it is sent to the browser
- EJS does NOT run in a browser, and must be run in a back-end only
- Separation of concerns

## GET vs. POST Forms

### GET

- Is able to send a request with query parameters (right in the URL / address bar)
- Easy to share / reproduce
- Great for searches and reaching resources consistently

`myblog.com?id=3`

OR

```HTML
<form method="GET" action="https://google.com/search">
    <input name="q">
```

`https://google.com/search?q=query+parameter+strings`

### POST

- Not easily bookmarkable / reproducable
- Does not show submission values in address bar / URL
- Great for sign-ins, edits, etc. -> actions you don't want as easily repeated or visible

```HTML
<form method="POST" action="https://site.com/sign-in">
    <input name="user">
    <input name="pass">
```

## Resources

- [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete)
- [Express](https://expressjs.com/)
- [EJS](https://ejs.co/#install)
- [`body-parser`](https://www.npmjs.com/package/body-parser)
- [Morgan](https://expressjs.com/en/resources/middleware/morgan.html)
- [Nodemon](https://github.com/remy/nodemon#nodemon)

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

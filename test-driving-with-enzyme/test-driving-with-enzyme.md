The car of the future is here! It boasts an infinite acceleration rate, so it can instantaneously change its speed!
You have been charged with developing an application that will track the total distance traveled by the car.
Additionally, the distance traveled will be updated every second based on the car's current speed.
You will test drive the development of this application using Airbnb's [Enzyme][airbnb-enzyme] testing library.
Lucky for you, Emmett Lathrop "Doc" Brown, Ph.D. has already written all the tests needed for a working application.
All you have to do now is get the tests to pass!

## Setup
From your challenges directory, run the following:

```sh
$ et get test-driving-with-enzyme
$ cd test-driving-with-enzyme
$ npm install
$ npm test
```

This will have the Karma test runner run the test suite which contains pending tests.
Once all the tests are passing, you can run:

```sh
$ npm start
```

and visit [localhost:8080][localhost-8080] to see the application in action!

## Deliverables
1. Remove the pending status from all the tests and get the tests to pass.

## Pro Tips
* If you do not understand the code in the tests, be sure to look over the [Jasmine][jasmine] and [Airbnb][airbnb-api] API docs for guidance.

[airbnb-enzyme]: http://airbnb.io/enzyme/index.html
[airbnb-api]: http://airbnb.io/enzyme/docs/api/index.html
[jasmine]: http://jasmine.github.io/2.4/introduction.html
[localhost-8080]: http://localhost:8080

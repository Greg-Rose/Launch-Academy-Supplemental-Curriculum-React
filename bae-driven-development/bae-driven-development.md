For their final project, one of the students at Launch Academy developed [BAE][bae-repository].
This is an application where users can create a personalized bot, called a BAE, that maintains a conversation with the user over the phone.
Regardless of what you think of this specific project, the idea of a bot that responds to messages is fascinating.
In this challenge, we will write some code that analyzes a message and returns an appropriate response (Our "analysis" performed here will be naive, but nevertheless it's good enough for a first crack at the problem).
Lucky for you, tests have already been written in Jasmine that will help you drive the development of the code.
You have also been supplied with some code that is already working but is untested.
All you have to do now is simply write the code to get the tests to pass and write tests for the supplied code.

Get Ready! Because it is time for some BAE-Driven Development!

## Setup
From your challenges directory, run the following:

```sh
$ et get bae-driven-development
$ cd bae-driven-development
$ npm install
$ npm test
```

This will start the Karma test runner. To view code coverage, open another terminal tab and run:

```sh
$ open coverage/index.html
```

Once you have completed the challenge, you can uncomment the code in `src/main.js` and run you Webpack Dev Server in another terminal tab with:

```sh
$ npm start
```

If you go to [localhost:8080][localhost-8080] and open your Developer Tools, you will see your code outputting message to the console.

## Deliverables

1. Remove pending status from all the tests and get all tests to pass.
2. Write additional tests for code that was given to you to achieve 100% code coverage.

## Pro Tips
* We recommend completing the challenge in the following order:

1. write `negativeResponses` constant.
2. write `negativeWords` constant.
3. write a test for the `positiveResponses` constant.
4. write `positiveWords` constant.
5. write `random` function.
6. write a test for the `sample` function.
7. write `words` function.
8. write `countBy` function.
9. write `User.constructor` method.
10. write `User.fullName` method.
11. write `Bot.constructor` method.
12. write a test for the `PredeterminedResponse.constructor` method.
13. write `Bot.initialGreeting` method.
14. write `Bot.registerPredeterminedResponse` method.
15. write `Bot.respondToMessage` method.

* You might find it easier to implement the `Bot.respondToMessage` method if you use the `words`, `countBy`, and `sample` functions within it.

[bae-repository]: https://github.com/ledes/BAE
[localhost-8080]: http://localhost:8080

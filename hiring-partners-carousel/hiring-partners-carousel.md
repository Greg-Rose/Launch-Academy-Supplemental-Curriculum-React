Launch Academy needs you to rebuild our hiring partner carousel in React:

![Hiring Partner Carousel 1][hiring-partners-carousel-1]

## Setup
From your challenges directory, run the following:

```sh
$ et get hiring-partners-carousel
$ cd hiring-partners-carousel
$ npm install
$ npm start
```

If you go to [localhost:8080][localhost-8080], there will be nothing displayed
on the page and there should be no errors in your console. The URLs for the
hiring partner images are found in `src/constants/data.js`.

## Deliverables

1. When the application initially loads. You should see the logo of the first
   hiring partner:

   ![Hiring Partner Carousel 1][hiring-partners-carousel-1]

   After two seconds elapse, the next hiring partner logo should be shown.

   ![Hiring Partner Carousel 2][hiring-partners-carousel-2]

   The application should go through all the hiring partner logos, and then
   go back to the first hiring partner logo.

2. We love our hiring partners. Make sure you style the carousel, so their
   logos are featured in a good-looking application.

## Pro Tips
* The [`setInterval`][mdn-setinterval] method will be useful. Make sure you
  also clear any timers that you set to prevent memory leaks.

[hiring-partners-carousel-1]: https://s3.amazonaws.com/horizon-production/images/hiring-partners-carousel-1.png
[hiring-partners-carousel-2]: https://s3.amazonaws.com/horizon-production/images/hiring-partners-carousel-2.png
[localhost-8080]: http://localhost:8080
[mdn-setinterval]: https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setInterval

$(document).ready(function () {
  $(".js--wp-3").waypoint(
    function () {
      $(".js--wp-3").css({
        animation: "zoomIn .5s",
        opacity: "1",
      });
    },
    { offset: "100%" }
  );

  $(".js--wp-4").waypoint(
    function () {
      $(".js--wp-4").css({
        animation: "zoomIn 1s",
        opacity: "1",
      });
    },
    { offset: "100%" }
  );

  $(".js--wp-5").waypoint(
    function () {
      $(".js--wp-5").css({
        animation: "zoomIn 1.5s",
        opacity: "1",
      });
    },
    { offset: "100%" }
  );

  $(".js--wp-1").waypoint(
    function () {
      $(".js--wp-1").css({
        animation: "slideInLeft 1.5s",
        opacity: "1",
      });
    },
    { offset: "75%" }
  );

  $(".js--wp-2").waypoint(
    function () {
      $(".js--wp-2").css({
        animation: "slideInRight 1.5s",
        opacity: "1",
      });
    },
    { offset: "75%" }
  );

  /* cards */

  $(".js--wp-6").waypoint(
    function () {
      $(".js--wp-6").css({
        animation: "fadeInUp 1.5s",
        opacity: "1",
      });
    },
    { offset: "75%" }
  );

  $(".js--wp-7").waypoint(
    function () {
      $(".js--wp-7").css({
        animation: "fadeInUp 2s",
        opacity: "1",
      });
    },
    { offset: "75%" }
  );

  $(".js--wp-8").waypoint(
    function () {
      $(".js--wp-8").css({
        animation: "fadeInUp 2.5s",
        opacity: "1",
      });
    },
    { offset: "75%" }
  );

  /* counter */
  $(".counter").waypoint(
    function () {
      $(".counter").counterUp({
        delay: 10,
        time: 1200,
      });
    },
    { offset: "75%" }
  );

  // $(".counter").counterUp({
  //   delay: 10,
  //   time: 1200,
  // });
  // $(".counter").waypoint(
  //   function () {
  //     $(".counter").counterUp({
  //       delay: 10,
  //       time: 1000,
  //     });
  //   },
  //   { offset: "75%" }
  // );

  // $(".js--wp-counter").counterUp({
  //   delay: 10,
  //   time: 1000,
  // });
});

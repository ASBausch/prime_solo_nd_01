$(document).ready(function() {
  //index
  var currentMood;

  var mood;

  //this is length of the array
  var manyMoods;
  /*
  *turns this block of html into a usable handlebars template,source
  *must be declared with the html id before it can be compiled by handlebars
  *the template has to be drawn before getdata because we need placeholders
  *for the data to go
  */
  var moodSource = $('#currentMood').html();
  var moodTemplate = Handlebars.compile(moodSource);
  var leftSource = $('#leftButton').html();
  var leftButtonTemplate = Handlebars.compile(leftSource);
  var rightSource = $('#rightButton').html();
  var rightButtonTemplate = Handlebars.compile(rightSource);

  //calls the ajax function to pull data from the server
  getData();

  function getData() {
    $.ajax({url:'/data/amanda.json'}).done(function(data) {
      moods = data;

      manyMoods = moods.amanda.length - 1;

      currentMood = randomNumber(0, manyMoods);

      drawMood(currentMood);
    });
  }

  //standard  random number generator
  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // writes data to the dom
  function drawMood(currentMood) {

    // bind json data to template
    var html = moodTemplate(moods.amanda[currentMood]);
  }

  function drawLeftButton(currentMood) {

    var html = leftButtonTemplate(moods.amanda[currentMood - 1]);
  }

  function drawRightButton(currentMood) {

    var html = rightButtonTemplate(moods.amanda[currentMood + 1]);
  }

  $('.nextBtn').on('click', function() {
    currentMood = (currentMood + 1);

    // reset to index 0 if reach the end
    if (currentMood > manyMoods) {
      currentMood = 0;
    }

    drawMood(currentMood);
  });

  $('.prevBtn').on('click', function() {
    currentMood = (currentMood - 1);

    //reset to index 0 if reach the end
    if (currentMood < 0) {
      currentMood = manyMoods;
    }

    drawMood(currentMood);
  });

  //in order to populate the names of the next and previous students
  //we would nee to create another template for each button see branch.

});

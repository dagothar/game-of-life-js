$(document).ready(function() {
  
  var conway = new Conway(64, 48);
  conway.randomize($('.conway-density').val());
  
  var canvas = $('.board').get(0);
  conway.render(canvas);
  
  function step() {
    conway.step();
    conway.render(canvas);
  };
  
  $('.conway-step').click(function() {
    step();
  });
  
  $('.conway-reset').click(function() {
    conway.randomize($('.conway-density').val());
    conway.render(canvas);
  });
  
  var stepTimer = undefined;
  
  $('.conway-run').click(function() {
    stepTimer = setInterval(step, 100);
  });
  
  $('.conway-stop').click(function() {
    clearInterval(stepTimer);
  });
  
});

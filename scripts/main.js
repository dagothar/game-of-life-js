$(document).ready(function() {
  
  var conway = new Conway(64, 48);
  conway.randomize($('.conway-density').val());
  
  var canvas = $('.board').get(0);
  conway.render(canvas);
  
  var stepTimer = undefined;
  var running = false;
  
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
  
  $('.conway-start-stop').click(function() {
    if (!running) {
      stepTimer = setInterval(step, 100);
      running = true;
    } else {
      clearInterval(stepTimer);
      running = false;
    }
  });
  
  function getMousePos(e, client) {
    var rect = client.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  };
  
  var paint = true;
  var drag = false;
  $('.board').mousedown(function(e) {
    var pos = conway.getCellPos(canvas, getMousePos(e, canvas));
    paint = !conway.getCell(pos);
    conway.setCell(pos, paint);
    conway.render(canvas);
    
    $(this).bind('mousemove', function(e) {
      var pos = conway.getCellPos(canvas, getMousePos(e, canvas));
      conway.setCell(pos, paint);
      conway.render(canvas);
    });
  });
  
  $('.board').mouseup(function(e) {
    $(this).unbind('mousemove');
  });
  
  $('.board').mouseout(function(e) {
    $(this).unbind('mousemove');
  });
  
});

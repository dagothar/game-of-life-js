$(document).ready(function() {
  
  var conway = new Conway(64, 48);
  conway.randomize($('.conway-density').val());
  
  var canvas = $('.board').get(0);
  conway.render(canvas);
  
  var stepTimer = undefined;
  
  function step() {
    var changed = conway.step();
    conway.render(canvas);
    
    if (!changed) clearInterval(stepTimer);
  };
  
  $('.conway-step').click(function() {
    step();
  });
  
  $('.conway-reset').click(function() {
    conway.randomize($('.conway-density').val());
    conway.render(canvas);
  });
  
  $('.conway-run').click(function() {
    stepTimer = setInterval(step, 100);
  });
  
  $('.conway-stop').click(function() {
    clearInterval(stepTimer);
  });
  
  function getMousePos(e, client) {
    var rect = client.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  };
  
  $('.board').click(function(e) {
    conway.toggleCell(conway.getCellPos(canvas, getMousePos(e, canvas)));
    conway.render(canvas);
  });
  
});

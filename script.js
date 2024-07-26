function updateClock(clockId) {
  var now = new Date();

  var secondAngle = (now.getSeconds() / 60) * 360;
  var minuteAngle = (now.getMinutes() / 60) * 360 + (now.getSeconds() / 60) * 6;
  var hourAngle = (now.getHours() % 12 / 12) * 360 + (now.getMinutes() / 60) * 30;

  document.querySelector(`#second-hand-${clockId}`).setAttribute('rotation', `0 0 ${-secondAngle}`);
  document.querySelector(`#minute-hand-${clockId}`).setAttribute('rotation', `0 0 ${-minuteAngle}`);
  document.querySelector(`#hour-hand-${clockId}`).setAttribute('rotation', `0 0 ${-hourAngle}`);
}

function updateClocks() {
  updateClock(1);
  updateClock(2);
  updateClock(3);
  updateClock(4);
}

setInterval(updateClocks, 1000);
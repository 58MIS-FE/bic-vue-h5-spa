let lastTime = 0
let vendors = ['webkit', 'moz']
for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
  window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame']
  window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] ||    // name has changed in Webkit
                                window[vendors[x] + 'CancelRequestAnimationFrame']
}

if (!window.requestAnimationFrame) {
  window.requestAnimationFrame = (callback, element) => {
    var currTime = new Date().getTime()
    var timeToCall = Math.max(0, 16.7 - (currTime - lastTime))
    var id = window.setTimeout(function() {
      callback(currTime + timeToCall)
    }, timeToCall)
    lastTime = currTime + timeToCall
    return id
  }
}
if (!window.cancelAnimationFrame) {
  window.cancelAnimationFrame = function(id) {
    clearTimeout(id)
  }
}

export default {
  requestAnimationFrame: window.requestAnimationFrame,
  cancelAnimationFrame: window.cancelAnimationFrame
}

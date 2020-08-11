function getDistance(p1, p2) {
  let x = p2.pageX - p1.pageX
  let y = p2.pageY - p1.pageY
  return Math.sqrt((x * x) + (y * y))
}

function getScale (oldScale, now, start) {
  let newScale = +getDistance(now[0], now[1]) / getDistance(start[0], start[1]) //得到缩放比例，getDistance是勾股定理的一个方法
  newScale = +(newScale * oldScale).toFixed(2)
  return newScale
}

export default (el, binding) => {
  let option = binding.value || {
    min: 0.1, 
    max: 5
  }
  let isTouch = false
  let oldScale = 1
  let start = []
  el.addEventListener('touchstart', (e) => {
    if (e.touches.length > 1) {
      isTouch = true
      start = e.touches
    }
  }, false)

  el.addEventListener('touchmove', (e) => {
    if (e.touches.length > 1 && isTouch) {
      e.preventDefault()
      let now = e.touches
      let scale = getScale(oldScale, now, start)
      if (+scale >= option.min && +scale <= option.max) {
        el.style.transform = `scale(${scale})`
      }
    }
  }, false)

  el.addEventListener('touchend', () => {
    if (isTouch) {
      isTouch = false
      let transform = el.style.transform || ''
      oldScale = transform.match(/scale\(([\d|.]+)/)
      oldScale = oldScale && +oldScale[1] || 1
    }
  }, false)
}
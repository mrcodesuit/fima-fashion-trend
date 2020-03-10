function elementInViewport(el, callback, callbackBoolean) {
  var myElement = document.getElementById(el)
  var bounding = myElement.getBoundingClientRect()
  var myElementHeight = myElement.offsetHeight
  var myElementWidth = myElement.offsetWidth
  console.log(bounding.top)
  console.log(myElementHeight)

  if (
    bounding.top >= -myElementHeight &&
    bounding.left >= -myElementWidth &&
    bounding.right <=
      (window.innerWidth || document.documentElement.clientWidth) +
        myElementWidth &&
    bounding.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) +
        myElementHeight
  ) {
    callbackBoolean(true)
    setTimeout(() => {
      callback()
    }, 800)
  } else {
    callbackBoolean(false)
  }
}

export { elementInViewport }

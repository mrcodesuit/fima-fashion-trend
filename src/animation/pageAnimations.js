import anime from "animejs"

// pink Area
function pinkAreaAnimation() {
  var tl = anime.timeline({
    easing: "easeOutExpo",
    duration: 1500,
  })
  tl.add({
    targets: ".pinkArea .square-small",
    opacity: [0, 1],
  })
    .add(
      {
        targets: ".pinkArea .square-medium",
        opacity: [0, 1],
      },
      "-=1200"
    )
    .add(
      {
        targets: ".pinkArea .square-small .gatsby-image-wrapper",
        opacity: [0, 1],
        translateX: [50, 0],
      },
      "-=1300"
    )
    .add(
      {
        targets: ".pinkArea .square-medium .gatsby-image-wrapper",
        opacity: [0, 1],
        translateX: [50, 0],
      },
      "-=1200"
    )
}
// Yellow Area
function yellowAreaAnimation() {
  var tl = anime.timeline({
    easing: "easeOutExpo",
    duration: 1500,
  })

  tl.add({
    targets: ".yellowArea .square-small",
    opacity: [0, 1],
  })
    .add(
      {
        targets: ".yellowArea .square-medium",
        opacity: [0, 1],
      },
      "-=1200"
    )
    .add(
      {
        targets: ".yellowArea .square-small .gatsby-image-wrapper",
        opacity: [0, 1],
        translateX: [50, 0],
      },
      "-=1300"
    )
    .add(
      {
        targets: ".yellowArea .square-medium .gatsby-image-wrapper",
        opacity: [0, 1],
        translateX: [50, 0],
      },
      "-=1200"
    )
}

// grayArea
function grayAreaAnimation() {
  var tl = anime.timeline({
    easing: "easeOutExpo",
    duration: 1000,
  })

  tl.add({
    targets: ".grayArea .main-heading",
    opacity: [0, 1],
    translateX: [-50, 0],
  })
    .add(
      {
        targets: ".grayArea .text",
        opacity: [0, 1],
        translateX: [-50, 0],
      },
      "-=800"
    )
    .add(
      {
        targets: ".grayArea .btn-row",
        opacity: [0, 1],
        translateX: [-50, 0],
      },
      "-=600"
    )
}

// blue Area
function blueAreaAnimation() {
  var tl = anime.timeline({
    easing: "easeOutExpo",
    duration: 1000,
  })

  tl.add({
    targets: ".blueArea .main-heading",
    opacity: [0, 1],
    translateX: [-50, 0],
  })
    .add(
      {
        targets: ".blueArea .text",
        opacity: [0, 1],
        translateX: [-50, 0],
      },
      "-=800"
    )
    .add(
      {
        targets: ".blueArea .btn-row",
        opacity: [0, 1],
        translateX: [-50, 0],
      },
      "-=600"
    )
}

export {
  pinkAreaAnimation,
  yellowAreaAnimation,
  grayAreaAnimation,
  blueAreaAnimation,
}

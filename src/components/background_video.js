/* eslint-disable */

setTimeout(() => {
  // loads the IFrame Player API code asynchronously.
  //var tag = document.createElement("script")
  //tag.src = "https://www.youtube.com/player_api"

  //var firstScriptTag = document.getElementsByTagName("script")[0]
  //firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

  //const playerElementId = "player"
  //let player

  //function onYouTubePlayerAPIReady() {
  //player = new YT.Player(playerElementId, {
  //height: "1690",
  //videoId: "dimqEPg0NpE",
  //playerVars: {
  //autoplay: 0,
  //autohide: 1,
  //loop: 1,
  //modestbranding: 1,
  //rel: 0,
  //showinfo: 0,
  //controls: 0,
  //disablekb: 1,
  //enablejsapi: 1,
  //iv_load_policy: 3,
  //},
  //events: {
  //onReady: onPlayerReady,
  //},
  //})
  //}

  //function onPlayerReady(event) {
  //event.target.playVideo()
  //event.target.mute()
  //}

  //window.onYouTubePlayerAPIReady = onYouTubePlayerAPIReady
  console.log("YT.Player run")

  parallex()
}, 500)

const parallex = () => {
  const containers = document.querySelectorAll(".parallex")
  containers.forEach(_parallex)
}

const _parallex = container => {
  const background = document.querySelector(".parallex_background")
  const backgroundRect = background.getBoundingClientRect()
  let containerRect = container.getBoundingClientRect()

  const hiddenLength = backgroundRect.height - containerRect.height
  const totalScrollLength = window.innerHeight + containerRect.height

  document.onscroll = function() {
    containerRect = container.getBoundingClientRect()

    // when not visible to the view yet
    if (containerRect.bottom < 0 || containerRect.top > window.innerHeight) {
      return
    }

    const scrollProgress =
      (containerRect.top + containerRect.height) / totalScrollLength

    const delta = (1 - scrollProgress) * hiddenLength
    background.style.top = -1 * delta + "px"
  }
}

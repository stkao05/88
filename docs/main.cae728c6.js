parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"epB2":[function(require,module,exports) {
!function(){var e=700;function t(e){var t=e.querySelector(".parallex_background");document.onscroll=function(){var n=t.getBoundingClientRect(),o=e.getBoundingClientRect(),i=n.height-o.height,a=window.innerHeight+o.height;if(!(o.bottom<0||o.top>window.innerHeight)){var l=(1-(o.top+o.height)/a)*i;t.style.top=-1*l+"px"}}}!function(){var e="youtube_player",t=1e3,n=677;function o(e){e.target.playVideo(),e.target.mute()}function i(e){e.data==YT.PlayerState.PLAYING&&document.querySelector(".video.parallex").classList.add("playing")}window.onYouTubePlayerAPIReady=function(){new YT.Player(e,{width:window.innerWidth,height:window.innerWidth/(t/n),videoId:"dimqEPg0NpE",playerVars:{autoplay:0,autohide:1,loop:1,modestbranding:1,rel:0,showinfo:1,controls:1,disablekb:1,enablejsapi:1,playsinline:1,iv_load_policy:3},events:{onReady:o,onStateChange:i}})}}(),document.querySelectorAll(".parallex").forEach(t),function(){var t,n=document.querySelector(".menu"),o=document.querySelector(".expansion_header");function i(){var e;return o.style.zIndex=-1,o.style.height="auto",e=o.clientHeight,o.style.zIndex="",o.style.height="",e}function a(){o.classList.remove("on"),o.style.height="0px"}window.addEventListener("resize",function(){window.innerWidth<=e?t=i():o.style.height=""}),window.innerWidth<=e&&(t=i()),n.addEventListener("click",function(){o.classList.contains("on")?a():(o.classList.add("on"),o.style.height=t+"px")}),document.querySelectorAll(".site_header nav a").forEach(function(e){e.addEventListener("click",function(){o.classList.contains("on")&&a()})})}(),document.querySelectorAll(".back_to_top_btn").forEach(function(e){e.addEventListener("click",function(){window.scrollTo({top:0,left:0,behavior:"smooth"})})})}();
},{}]},{},["epB2"], null)
//# sourceMappingURL=/main.cae728c6.js.map
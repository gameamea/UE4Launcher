"use strict";

var main = document.getElementById("main");

var libraryTab = document.getElementById("libraryTab");
var libraryPane = document.getElementById("libraryPane");

var projectsTab = document.getElementById("projectsTab");
var projectsPane = document.getElementById("projectsPane");

var enginesTab = document.getElementById("enginesTab");
var enginesPane = document.getElementById("enginesPane");

var localAssetsTab = document.getElementById("localAssetsTab");
var localAssetsPane = document.getElementById("localAssetsPane");

var learnTab = document.getElementById("learnTab");
var learnPane = document.getElementById("learnPane");

var iframe;

function watchIframeSize(e) {
  if (iframe) {
    console.log(
      window.innerHeight,
      iframe.offsetTop,
      window.innerHeight - iframe.offsetTop
    );
    iframe.style.height = window.innerHeight - iframe.offsetTop + "px";
    iframe.style.width = window.innerWidth - iframe.offsetLeft + "px";
  }
}

function addIframe() {
  main.classList.add("noScroll");
  iframe = document.createElement("iframe");
  iframe.src = "https://launcher-website-prod07.ol.epicgames.com/ue/learn/";
  window.addEventListener("resize", watchIframeSize);
  learnPane.appendChild(iframe);
  watchIframeSize();
}

function clearlearnPane() {
  main.classList.remove("noScroll");
  if (iframe) {
    try {
      iframe.parentNode.removeChild(iframe);
    } catch (e) {}
    iframe = undefined;
  }
  learnPane.innerHTML = "";
  window.removeEventListener("resize", watchIframeSize);
}

function showPane(name) {
  var Tab = document.getElementById(name + "Tab");
  var Pane = document.getElementById(name + "Pane");
  Tab.classList.add("selected");
  Pane.classList.remove("hiddenPane");
  if (name == "learn") {
    addIframe();
  }
}

function hidePane(name) {
  var Tab = document.getElementById(name + "Tab");
  var Pane = document.getElementById(name + "Pane");
  Tab.classList.remove("selected");
  Pane.classList.add("hiddenPane");
  if (name == "learn") {
    clearlearnPane();
  }
}

function implementLibraryTab() {
  libraryTab.onclick = function click() {
    showPane("library");

    hidePane("projects");
    hidePane("engines");
    hidePane("localAssets");
    hidePane("learn");
  };
}

function implementprojectsTab() {
  projectsTab.onclick = function click() {
    showPane("projects");

    hidePane("library");
    hidePane("engines");
    hidePane("localAssets");
    hidePane("learn");
  };
}

function implementenginesTab() {
  enginesTab.onclick = function click() {
    showPane("engines");

    hidePane("library");
    hidePane("projects");
    hidePane("localAssets");
    hidePane("learn");
  };
}

function implementlocalAssetsTab() {
  localAssetsTab.onclick = function click() {
    showPane("localAssets");

    hidePane("library");
    hidePane("projects");
    hidePane("engines");
    hidePane("learn");
  };
}

function implementLearnTab() {
  learnTab.onclick = function click() {
    showPane("learn");

    hidePane("library");
    hidePane("projects");
    hidePane("engines");
    hidePane("localAssets");
  };
}

implementLibraryTab();
implementprojectsTab();
implementenginesTab();
implementlocalAssetsTab();
implementLearnTab();

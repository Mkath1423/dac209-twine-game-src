
$(function(){
    console.log("attempted the nest")
    $("body").append($("tw-passagedata[name='story-wrapper']").text())
    $("tw-passagedata[name='story-wrapper'] > #wrapper-outter").appendTo("body");
    $("tw-story").appendTo("#wrapper-inner");

6});
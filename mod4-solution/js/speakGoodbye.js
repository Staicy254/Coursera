(function (window) {
    var speakWord = "Good Bye";
    
    var byeSpeaker = {};
    byeSpeaker.name = "Good Bye";
    byeSpeaker.speak = function speak(name) {
      console.log(speakWord + " " + byeSpeaker.name);
    }
    window.byeSpeaker = byeSpeaker;
    })(window);
    
    byeSpeaker.speak();
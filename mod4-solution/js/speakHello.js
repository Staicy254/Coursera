(function (window) {
    var speakWord = "Hello";
    
    var helloSpeaker = {};
    helloSpeaker.name= "Hello";
    helloSpeaker.speak = function speak(name) {
      console.log(speakWord + " " + helloSpeaker.name);
    }
    window.helloSpeaker = helloSpeaker;
    })(window);

    helloSpeaker.speak();


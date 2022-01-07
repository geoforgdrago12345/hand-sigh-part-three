Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera= document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="capture_image" src="'+data_uri+'">';
    });
}
console.log('ml5 version:', ml5.version);

lassifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/6-vW4eE-6/model.json',modelLoaded);

 function modelLoaded() {
     console.log('model Loaded!');
 }

 function speak(){
     var synth = window.speechSynthesis;
     speak_data_1="The first prediction is " + perdiction_1;
     speak_data_2="And the second prediction is " + perdiction_2;
     var utterThis = new SpeachSynthesisUtterance(speak_data_1+speak_data_2);
     synth.speak(utterThis);
 }

 function modelLoaded(){
    console.log('Model Loaded!');
}

function check(){
    img = document.getElementById('captured_image');
    classifier.classify( img,gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
        
    } else {
      console.log(results);
      document.getElementById("result_handsign_name").innerHTML = results[0].label; 
      document.getElementById("result_handsign_name2").innerHTML = results[1].label;
      prediction_1 = results[0].label;
      prediction_2 = results[1].label;
      speak();
      if(prediction_1 =="ok"){
          document.getElementById("update_handsign").innerHTML = "&#128076;";
      }
      if (prediction_1 =="sort of") {
          document.getElementById("update_handsign").innerHTML = "&#128075;";
      }
      if (prediction_1 =="great") {
          document.getElementById("update_handsign").innerHTML =" &#128077;";   
      }
      if (prediction_1 =="sad") {
          document.getElementById("update_handsign").innerHTML =" &#128078;";
      }
      if(prediction_2 =="ok"){
          document.getElementById("update_handsign").innerHTML = "&#128076;";
      }
       if (prediction_2 =="sort of"){
           document.getElementById("update_handsign").innerHTML = "&#128075;";
       }
       if (prediction_2 =="great"){
           document.getElementById("update_handsign").innerHTML =" &#128077;";   
       }
       if (prediction_2 =="sad"){
           document.getElementById("update_handsign").innerHTML =" &#128078;";
       }

    }
}
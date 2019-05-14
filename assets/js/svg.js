let eyeBall = document.querySelector(".eyeball"),
    pupil = document.querySelector(".pupil"),
    eyeArea = eyeBall.getBoundingClientRect(),
    pupilArea = pupil.getBoundingClientRect(),
    R = eyeArea.width/2,
    r = pupilArea.width/2,
    centerX = eyeArea.left + R,
    centerY = eyeArea.top + R;

document.addEventListener("mousemove", (e)=>{
  let x = e.clientX - centerX,
      y = e.clientY - centerY,
      theta = Math.atan2(y,x),
      angle = theta*180/Math.PI + 360;
  
  

});

let eyeBall2 = document.querySelector(".eyeball2"),
    pupil2 = document.querySelector(".pupil2"),
    eyeArea2 = eyeBall2.getBoundingClientRect(),
    pupilArea2 = pupil2.getBoundingClientRect(),
    R2 = eyeArea2.width/2,
    r2 = pupilArea2.width/2,
    centerX2 = eyeArea2.left + R2,
    centerY2 = eyeArea2.top + R2;

document.addEventListener("mousemove", (e)=>{
  let x = e.clientX - centerX,
      y = e.clientY - centerY,
      theta = Math.atan2(y,x),
      angle = theta*180/Math.PI + 360;
  
    pupil.style.transform = `translateX(${R - r +"px"}) rotate(${angle + "deg"})`;
    pupil.style.transformOrigin = `${r +"px"} center`;
    pupil2.style.transform = `translateX(${R - r +"px"}) rotate(${angle + "deg"})`;
    pupil2.style.transformOrigin = `${r +"px"} center`;

});



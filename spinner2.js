let animations = ['\r|   ','\r/   ','\r-   ','\r\\   ', '\r\\   ', '\r|   ']
let iterations = 5;
let time = 0;

for (let y = 0; y < iterations; y ++){
  for (let x = 0; x < animations.length; x ++){
    time = time + 200;
    setTimeout(() => {
      process.stdout.write(animations[x])
    }, time) 
  }
}

const alarm = setInterval(() => {
  const noise = "Beep Beep!\n";
  let args = process.argv.slice(2);
  args.forEach(function (val) {
    val = val * 1000;
    setTimeout(() => {
      process.stdout.write(noise);  //Removing the space padding at the end of the strings will mean that the cursor will sit on top of the animation, making it harder to see
      // process.stdout.write('\007');
    }, val);
  });

  setTimeout(() => { 
    clearInterval(alarm); 
  }, 5000);
  
  }, 700);
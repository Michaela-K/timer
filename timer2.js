const stdin = process.stdin;
stdin.setRawMode(true);  
stdin.setEncoding('utf8');

stdin.resume(); 


const noise = "Beep!\n";

stdin.on('data', data => {
  if (data === '\u0003') {   //to kill the program
    process.exit();
  }
  if (data === '\u0062'){
    process.stdout.write(noise);
    process.exit();
  }else{
  console.log(`Setting timer for ${data.toString()} seconds`);
  let time = `${data.toString()}`
  setTimeout(() => {
    process.stdout.write(noise);
    process.exit();
  }, time *1000);
}
});






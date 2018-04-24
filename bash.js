const commands = {
  pwd: "./pwd.js",
  ls: "./ls.js",
  cat: "./cat.js",
  dir: "./ls.js",
  curl: "./curl.js",
  date: "./date.js",
  echo: "./echo.js"
}

const done = (output) => {
  process.stdout.write(output);
  process.stdout.write("\nprompt > ");
}

process.stdout.write('bagu > ');
process.stdin.on('data', (data) => {
  const cmdArray = data.toString().trim().split(" ");
  let cmd = cmdArray[0];
  process.stdout.write(cmdArray.join(" "));

  if (Object.keys(commands).includes(cmd)) require(commands[cmd])(done, ...cmdArray.slice(1));
  else {
    process.stdout.write('\nCommand not recognized. :(');
    process.stdout.write("\nprompt > ");
  }
});



let arr = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|"];
let time = 100;
for (let item of arr) {
  setTimeout(() => {
    process.stdout.write(`\r${item}   `);
  }, time);
  time += 200;
}
setTimeout(() => {console.log();}, 1800);
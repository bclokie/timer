const args = process.argv.slice(2);
if (args.length === 0) {
  console.log("No numbers entered, don't be silly");
  return;
}
args.forEach((time) => {
  if (time < 0 || isNaN(time)) {
    return;
  }
  setTimeout(() => {
    process.stdout.write('\x07');
  }, time * 1000);
});
const animations = [
  "\r|   ",
  "\r/   ",
  "\r-   ",
  "\r\\   ",
  "\r|   ",
  "\r/   ",
  "\r-   ",
  "\r\\   ",
  "\r|   ",
];

let delay = 0;

for (const animation of animations) {
  setTimeout(() => {
    process.stdout.write(animation);
  }, delay);
  delay += 200;
}

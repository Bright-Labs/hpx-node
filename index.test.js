const hpx = require('./index');

test("grabs a pixel", async () => {
  expect.assertions(1);
  const data = await hpx('https://d23p8u3jzpe4yr.cloudfront.net/1x1.gif', 1, 2, 3, 4, true);
  expect(data).toBeTruthy();
})

test("fails to grab a pixel", async () => {
  expect.assertions(1);
  try {
    await hpx('http://example.com/1x1.gif', 1, 2, 3, 4, true);
  } catch (e) {
    expect(e).toBeDefined();
  }
})

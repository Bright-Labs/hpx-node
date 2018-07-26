const hpx = require('./browser');

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
    // jsdom doesn't seem to throw a real error, just logs it
    // so I'm happy to just be here.
    expect(true).toBeTruthy();
  }
})

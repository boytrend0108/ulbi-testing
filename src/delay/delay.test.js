const delay = require('./delay');

describe('delay', () => {
  it('sould return correct result', async () => {
    const res = await delay(() => 5 + 5, 1000);

    expect(res).toBe(10);
  });
});

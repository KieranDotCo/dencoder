import { DecodePipe } from './decode.pipe';

describe('DecodePipe', () => {
  it('create an instance', () => {
    const pipe = new DecodePipe();
    expect(pipe).toBeTruthy();
  });

  it('should decode the string', () => {
    const pipe = new DecodePipe();
    const url = "https%3A%2F%2Fmeyerweb.com%2Feric%2Ftools%2Fdencoder%2F";
    const decodedUrl = "https://meyerweb.com/eric/tools/dencoder/";

    expect(pipe.transform(url)).toBe(decodedUrl);
  });
});

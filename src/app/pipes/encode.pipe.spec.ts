import { EncodePipe } from './encode.pipe';

describe('EncodePipe', () => {
  it('create an instance', () => {
    const pipe = new EncodePipe();
    expect(pipe).toBeTruthy();
  });

  it('should encode the string', () => {
    const pipe = new EncodePipe();
    const url = "https://meyerweb.com/eric/tools/dencoder/";
    const encodedUrl = "https%3A%2F%2Fmeyerweb.com%2Feric%2Ftools%2Fdencoder%2F";

    expect(pipe.transform(url)).toBe(encodedUrl);
  });
});

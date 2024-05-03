import { MonthsToYearsPipe } from './months-to-years.pipe';

describe('MonthsToYearsPipe', () => {
  it('create an instance', () => {
    const pipe = new MonthsToYearsPipe();
    expect(pipe).toBeTruthy();
  });
});

import CalculatorService from '@/calculator/service.ts';

describe('CalculatorService.ts', () => {
  it('Given param is 10, When CalculatorService.calc(), Then result to be 21', () => {
    const param = 10;
    const result = CalculatorService.calc(param);
    expect(result).toBe(21);
  });
});

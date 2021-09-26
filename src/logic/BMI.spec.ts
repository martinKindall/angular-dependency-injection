import {AbstractMath} from "./AbstractMath";
import {BMI} from "./BMI";

describe('BMI logic tests', () => {
  let bmiService: BMI;

  it('BMI behaves as expected', () => {
    const mathServiceSpy = jasmine.createSpyObj(
      'AbstractMath',
      ['divide', 'square']
    );
    bmiService = new BMI(mathServiceSpy);

    const heightSquared = 2.9929;
    const bmi = 22.2222;
    const weight = 68;
    mathServiceSpy.square.and.returnValue(heightSquared);
    mathServiceSpy.divide.and.returnValue(bmi);

    expect(bmiService.calculate({weight: weight, height: 173}))
      .toEqual({bmiResult: bmi});
    expect(mathServiceSpy.divide).toHaveBeenCalledWith(weight as any, heightSquared as any);
  });
});

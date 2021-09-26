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

    mathServiceSpy.square.and.returnValue(2.9929);
    mathServiceSpy.divide.and.returnValue(22.2222);

    expect(bmiService.calculate({weight: 68, height: 173}))
      .toEqual({bmiResult: 22.2222});
  });
});

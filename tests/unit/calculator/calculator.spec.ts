import { shallowMount } from '@vue/test-utils';
import Calculator from '@/calculator/calculator.vue';

describe('calculator.vue', () => {
  it('renders props.msg when passed', () => {
    const expectResult = '20';
    const wrapper = shallowMount(Calculator);
    wrapper.find('input.param').setValue(10);
    wrapper.find('button.submit').trigger('click');
    const result = wrapper.find('.result').text();
    expect(result).toMatch(expectResult);
  });
});

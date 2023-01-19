import Magician from '../magician';

const instance = {
  name: 'Magician',
  health: 100,
  level: 1,
  attack: 10,
  defence: 40,
  type: 'Magician',
};

test('creating an instance', () => {
  const magician = new Magician('Magician');
  magician.getCharacter();

  const result = magician;
  expect(result).toEqual(instance);
});

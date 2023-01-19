import Swordsman from '../swordsman';

const instance = {
  name: 'Swordsman',
  health: 100,
  level: 1,
  attack: 40,
  defence: 10,
  type: 'Swordsman',
};

test('creating an instance', () => {
  const swordsman = new Swordsman('Swordsman');
  swordsman.getCharacter();

  const result = swordsman;
  expect(result).toEqual(instance);
});

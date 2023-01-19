import Undead from '../undead';

const instance = {
  name: 'Undead',
  health: 100,
  level: 1,
  attack: 25,
  defence: 25,
  type: 'Undead',
};

test('creating an instance', () => {
  const undead = new Undead('Undead');
  undead.getCharacter();

  const result = undead;
  expect(result).toEqual(instance);
});

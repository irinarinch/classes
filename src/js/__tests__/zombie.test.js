import Zombie from '../zombie';

const instance = {
  name: 'Zombie',
  health: 100,
  level: 1,
  attack: 40,
  defence: 10,
  type: 'Zombie',
};

test('creating an instance', () => {
  const zombie = new Zombie('Zombie');
  zombie.getCharacter();

  const result = zombie;
  expect(result).toEqual(instance);
});

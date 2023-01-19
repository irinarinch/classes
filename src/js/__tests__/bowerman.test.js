import Bowerman from '../bowerman';

const instance = {
  name: 'Bowerman',
  health: 100,
  level: 1,
  attack: 25,
  defence: 25,
  type: 'Bowerman',
};

test('creating an instance', () => {
  const bowerman = new Bowerman('Bowerman');
  bowerman.getCharacter();

  const result = bowerman;
  expect(result).toEqual(instance);
});

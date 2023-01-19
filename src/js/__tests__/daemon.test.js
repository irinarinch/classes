import Daemon from '../daemon';

const instance = {
  name: 'Daemon',
  health: 100,
  level: 1,
  attack: 10,
  defence: 40,
  type: 'Daemon',
};

test('creating an instance', () => {
  const daemon = new Daemon('Daemon');
  daemon.getCharacter();

  const result = daemon;
  expect(result).toEqual(instance);
});

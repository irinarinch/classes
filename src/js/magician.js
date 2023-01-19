import Character from './character';

export default class Magician extends Character {
  constructor(name) {
    super();
    this.name = name;
    this.type = 'Magician';
  }
}

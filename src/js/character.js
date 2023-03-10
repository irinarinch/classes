export default class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  getCharacter() {
    Character.types = [
      'Bowerman',
      'Swordsman',
      'Magician',
      'Daemon',
      'Undead',
      'Zombie',
    ];

    if ((typeof this.name !== 'string') || (this.name.length > 10 || this.name.length < 2)) {
      throw new Error('Invalid name');
    }

    if (Character.types.includes(this.type)) {
      this.health = 100;
      this.level = 1;
    } else {
      throw new Error('Incorrect type');
    }

    if (this.type === 'Bowerman' || this.type === 'Undead') {
      this.attack = 25;
      this.defence = 25;
    }

    if (this.type === 'Swordsman' || this.type === 'Zombie') {
      this.attack = 40;
      this.defence = 10;
    }

    if (this.type === 'Magician' || this.type === 'Daemon') {
      this.attack = 10;
      this.defence = 40;
    }
  }
}

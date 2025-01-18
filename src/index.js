import Team from './team';

const team = new Team();

const char1 = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10,
};

const char2 = {
  name: 'Мечник',
  type: 'Swordsman',
  health: 60,
  level: 1,
  attack: 50,
  defence: 15,
};

team.addCharacter(char1);
team.addCharacter(char2);

for (const character of team) {
  console.log(character);
}
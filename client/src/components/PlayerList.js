import React from 'react';
import Player from './Player';
import './PlayerList.scss';

const playerData = [
  {
    name: 'Lezana Carlucci',
    race: 'human',
    dnd_class: 'paladin',
    stats: {
      strength: 14,
      dexterity: 10,
      constitution: 16,
      intelligence: 10,
      wisdom: 12,
      charisma: 18,
      hp: 81
    },
    condition_id: 1,
    level: 8
  },
  {
    name: 'Rorin Grimleeper',
    race: 'dwarf',
    dnd_class: 'fighter',
    stats: {
      strength: 16,
      dexterity: 12,
      constitution: 14,
      intelligence: 16,
      wisdom: 18,
      charisma: 12,
      hp: 90
    },
    condition_id: 2,
    level: 9
  },
  {
    name: 'Halyassa Diltheth',
    race: 'dragonborn',
    dnd_class: 'barbarian',
    stats: {
      strength: 15,
      dexterity: 13,
      constitution: 14,
      intelligence: 14,
      wisdom: 14,
      charisma: 14,
      hp: 53
    },
    condition_id: 3,
    level: 5
  },
  {
    name: 'Nym Silveroak',
    race: 'elf',
    dnd_class: 'ranger',
    stats: {
      strength: 14,
      dexterity: 16,
      constitution: 14,
      intelligence: 14,
      wisdom: 15,
      charisma: 16,
      hp: 58
    },
    condition_id: 4,
    level: 5
  },
  {
    name: 'Flambard Kaese',
    race: 'halfling',
    dnd_class: 'wizard',
    stats: {
      strength: 12,
      dexterity: 12,
      constitution: 16,
      intelligence: 18,
      wisdom: 18,
      charisma: 13,
      hp: 61
    },
    condition_id: 5,
    level: 6
  },
  {
    name: 'Marlypsis Grantham',
    race: 'tiefling',
    dnd_class: 'druid',
    stats: {
      strength: 14,
      dexterity: 13,
      constitution: 14,
      intelligence: 15,
      wisdom: 16,
      charisma: 14,
      hp: 75
    },
    condition_id: 6,
    level: 7
  }
];

const parsedPlayers = playerData.map(player => <Player key={player.name} {...player}/>)

const PlayerList = () => {
  return (
    <div class="PlayerList">
      { parsedPlayers }
    </div>
  )
}

export default PlayerList
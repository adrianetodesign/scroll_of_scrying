const { default: axios } = require("axios");
const { addPlayerCondition } = require("../db/insertions/condition_insertion");
const { addPartyItem } = require("../db/insertions/item_insertion");

const indexFormatter = function (index) {
  return index.trim().replace(/\s+/g, '-').toLowerCase();
};

const playerConditionHelper = function (db, id, index) {
  axios.get(`https://www.dnd5eapi.co/api/conditions/${index}`)
      .then((response) => {
        const description = response.data.desc.join(' ');
        const values = [
          id,
          response.data.index,
          response.data.name,
          description
        ];
        addPlayerCondition(values, db)
          .then((res) => console.log(res))
          .catch((err) => console.log(err))
      })
      .catch((err) => console.log(err.message))
};

const itemHelper = function (db, index) {
  axios.get(`https://www.dnd5eapi.co/api/magic-items/${index}`)
      .then((response) => {
        const description = response.data.desc.join(' ');
        const values = [
          response.data.index,
          response.data.name,
          description
        ];
        addPartyItem(values, db)
          .then((res) => console.log(res))
          .catch((err) => console.log(err))
      })
      .catch((err) => console.log(err.message))
};

module.exports = {
  playerConditionHelper,
  itemHelper,
  indexFormatter
};
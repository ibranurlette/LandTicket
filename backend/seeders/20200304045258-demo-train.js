"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "trains",
      [
        {
          nameTrain: "agro wilis",
          user_id: 1,
          typeTrain_id: 1,
          dateStart: "2020-03-03",
          startStation: "stasiun manggarai",
          startTime: " 07:00:00",
          destination: "Stasiun Surabaya Pasarturi",
          arrivalTime: "19:00:00",
          price: "300000",
          qty: "100",
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("trains", null, {});
  },
};

"use strict";
let car = [{
        company: "Toyota",
        isused: "Used",
        year: 2018
    },
    {
        company: "Honda",
        isused: "New",
        year: 2020
    },
    {
        company: "Ford",
        isused: "used",
        year: 2015
    }];
for (let i = 0; i <= car.length - 1; i++) {
    console.log(`Company name = ${car[i].company}, And the year of assembly = ${car[i].year}.`);
}

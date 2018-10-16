"use strict";
export const filterCheapest = (arr) => {
  arr.sort((a, b) => {
    return parseInt(a.cost) - parseInt(b.cost);
  });
  return arr;
}
export const filterByObjProps = (arr) => {
  return arr.sort((a, b) => {
    return parseInt(a.duration.h) - parseInt(b.duration.h);
  });
}
//deleting the repeated key-names
export const deleteRepeatingKeys = (arr) => {
  let mediator = new Set(arr);
  return arr = [...mediator];
}
//Calculate total duration & cost
export const calculateTripTotals = (arr) => {
  console.log('total input',arr);
  let tripTotals = {};
  tripTotals.totalDuration = 0;
  tripTotals.totalCost = 0;
  arr.forEach(key => {
    tripTotals.totalDuration +=
    parseInt(key.duration.h) + parseInt(key.duration.m)/60;
    tripTotals.totalCost += (key.cost);
  });
  arr.push(tripTotals.totalDuration, tripTotals.totalCost);
  return arr;
}

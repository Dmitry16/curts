'use strict';

import { filterCheapest, filterByObjProps, deleteRepeatingKeys, calculateTripTotals }
  from './filterLib/filters';

const tripsFilter = (data, ...searchParams) => {

  let [val1, val2, from, to, travelMode] = [...searchParams];
  console.log('[from, to',from, to);
  let directTransport = [];
  let transPointsFrom = [];
  let transitTrips = [];
  let transitTransport = [];
  let complexTrip = [];
  let composeTripCounter = 0;
  let isRecursion = false;

  //find direct transport
  const directTrips = (data, from, to) => {
    for (let i=0; i<data.deals.length; i++) {
      if ((data.deals[i].departure===from) && (data.deals[i].arrival===to)) {
          directTransport.push(data.deals[i]);
      }
    }
    return directTransport;
  }
  // const deleteRepeatingKeys = (arr) => {
  //   let mediator = new Set(arr);
  //   return arr = [...mediator];
  // }
  //if there is no direct transport then make an array of all direct (transitional) routes
  const findTransitionPoints = (data, from) => {
    for (let i=0; i<data.deals.length; i++) {
      if (directTransport.length===0 && data.deals[i].departure===from) {
        if (transPointsFrom.length!==0) {
          let counter = 0;
          transPointsFrom.forEach(point=>{
             if (point===data.deals[i].arrival) {
               counter++;
             }
          });
          if (counter===0) {
            transPointsFrom.push(data.deals[i].arrival);
            transitTransport.push(data.deals[i]);
          }
        }
        else {
          transPointsFrom.push(data.deals[i].arrival);
          transitTransport.push(data.deals[i]);
        }
      }
    }
    return transPointsFrom;
  }
//check up if there is a direct transport from the transitional points
  const transitionalTrips = (data, arr, to) => {
    let counter = 0;
    for (let i=0; i<data.deals.length; i++) {
      for (let j=0; j<arr.length; j++) {
        if ((data.deals[i].departure===arr[j]) && (data.deals[i].arrival===to)) {
          transitTrips.push(data.deals[i]);
          counter++;
        }
      }
    }
    //if there is no direct transport from transitional points
    //find other posibble transitional points for each points
    if (counter===0) {
      arr.forEach(point=>{
        findTransitionPoints(data, point, to);
      });
      isRecursion = true;
      transitionalTrips(data, transPointsFrom, to);
    }
    return deleteRepeatingKeys(transitTrips);
  }

const composeTrip = (inputArray, outputArray, to) => {

  for (let i=0; i<inputArray.length; i++)
    if (inputArray[i].arrival===to)
      for (let n=0; n<inputArray.length; n++)
        if (inputArray[i].departure===inputArray[n].arrival)
            outputArray.push(inputArray[n]);
  //check up if the initial departure route is included

  //include the middle route
    if (isRecursion)
      outputArray.forEach(keyOuter=>{
        if(keyOuter.departure===from) {
            outputArray.forEach(key=>{
              if(composeTripCounter === 0)
                if(key.departure!==from && keyOuter.arrival!==to) {
                  composeTripCounter++;
                  composeTrip(inputArray, outputArray, key.departure);
                }
            });
        }
      });

  if (composeTripCounter !== 0) {
    return outputArray;
  } else if (isRecursion) {
    composeTrip(inputArray, outputArray, from);
  }
  return outputArray;
}
//filter array by the object's props
// const filterByObjProps = (arr) => {
//   return arr.sort((a, b) => {
//     return parseInt(a.duration.h) - parseInt(b.duration.h);
//   });
// }

const composeFinalRoute = (arr) => {
  let outputArr = [];
  outputArr.push(arr[0]);
  for (let j=1; j<arr.length; j++) {
    if (arr[0].arrival === arr[j].departure && outputArr.length < 2)
      outputArr.push(arr[j]);
//find the middle part of the route
    if (arr[0].departure === arr[j].arrival && outputArr.length < 2)
      outputArr.push(arr[j]);
    else if (arr[j].departure === from && isRecursion) {
      outputArr.push(arr[j]);
      outputArr.forEach(key=>{
        if (arr[j].arrival !== key.departure) {
          arr.forEach(arrKey=>{
            if(arr[j].arrival === arrKey.departure)
              outputArr.push(arrKey);
          });
        }
      });
    }
  }
  return deleteRepeatingKeys(outputArr);
}

//find the cheapest option
// const filterCheapest = (arr) => {
//   arr.sort((a, b) => {
//     return parseInt(a.cost) - parseInt(b.cost);
//   });
//   return arr;
// }
//Calculate total duration & cost
// const calculateTripTotals = (arr) => {
//   console.log('total input',arr);
//   let tripTotals = {};
//   tripTotals.totalDuration = 0;
//   tripTotals.totalCost = 0;
//   arr.forEach(key => {
//     tripTotals.totalDuration +=
//     parseInt(key.duration.h) * 60 + parseInt(key.duration.m)/60;
//     tripTotals.totalCost += (key.cost);
//   });
//   arr.push(tripTotals.totalDuration, tripTotals.totalCost);
//   return arr;
// }

//find the cheapest trips
const findCheapest = (arr) => {
  // console.log('findCheapest input:',arr);
  let mapped = [];
  return calculateTripTotals(composeFinalRoute(filterCheapest(arr)));
}

const findFastest = (arr) => {
  // console.log('findFastest input:',arr);
  return calculateTripTotals(composeFinalRoute(filterByObjProps(arr)));
}

  const startEngine = (data, from, to) => {

    directTrips(data, from)
    if (directTransport.length!==0 && travelMode==='cheapest') {
      directTransport = findCheapest(directTransport);
      return directTransport;
    }
    else if (directTransport.length!==0 && travelMode==='fastest') {
      directTransport = findFastest(directTransport);
      return directTransport;
    }
    else if ( directTransport.length === 0 ) {
      deleteRepeatingKeys(findTransitionPoints(data, from));
      transitionalTrips(data, transPointsFrom, to);
      if ( transitTrips.length !== 0 ) {
        let complexTrip = [...transitTransport,...transitTrips];
        transitTrips = composeTrip(complexTrip, transitTrips, to);

        if(travelMode==='cheapest') {
          transitTrips = findCheapest(transitTrips);
          console.log('final output:', transitTrips);
          return transitTrips;
        }
        else {
          transitTrips = findFastest(transitTrips);
          console.log('final output:', transitTrips);
          return console.log('transitTrips', transitTrips);
        }
      }
    }
  }

return startEngine(data, from, to);
}

export default tripsFilter;



// WEBPACK FOOTER //
// src/helpers/dataFilters.jsx

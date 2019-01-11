
const dataFilter = (data, ...searchParams) => {

  let [from, to, travelMode] = [...searchParams];
  console.log(travelMode);
  let directTransport = [];
  let transPointsFrom = [];
  let transitTrips = [];
  let transitTransport = [];
  let complexTrip = [];

  //finding direct transport
  const directTrips = (data, from, to) => {
    for (let i=0; i<data.deals.length; i++) {
      if ((data.deals[i].departure===from) && (data.deals[i].arrival===to)) {
          directTransport.push(data.deals[i]);
      }
    }
    return directTransport;
  }

  //if there is no direct transport then make an array of all direct (transitional) routes
  const findTransitionPoints = (data, from) => {
    for (let i=0; i<data.deals.length; i++) {
      if (directTransport.length===0 && data.deals[i].departure===from) {
          transPointsFrom.push(data.deals[i].arrival);
          transitTransport.push(data.deals[i]);
      }
    }
    return transPointsFrom;
  }

//deleting the repeating keys
  const deleteRepeatingKeys = (arr) => {
    for (let j=0; j<arr.length; j++)
      for (let i=1; i<arr.length; i++)
        if (arr[j] === arr[i])
          arr.splice(i,1);
    return arr;
  }
  //deleting the repeating keys
  const deleteRepeatingKeys2 = (arr) => {
    let mediator = new Set(arr);
    return arr = [...mediator];
  }

//check up if there is a direct transport from the transitional points
  const transitionalTrips = (data, arr, to) => {
    for (let i=0; i<data.deals.length; i++) {
      for (let j=0; j<arr.length; j++) {
        if ((data.deals[i].departure===arr[j]) && (data.deals[i].arrival===to)) {
          transitTrips.push(data.deals[i]);
        }
      }
    }
    return transitTrips;
  }
//filter out the cheapest trip
const findCheapest = (arr) => {
  return arr.filter((key)=>{
    if (key.cost <= 40)
      return key;
  });
}
//find the fastest trip
const findFastest = (arr) => {
  let outputArray = [];

  const filterArr = (arr) => {
    console.log('passed in arr', arr);
    for (let i=0; i<arr.length; i++)
      for (let j=0; j<arr.length; j++) {
        if ((arr[i].departure === arr[j].departure)) {
          // console.log('qq');
          if (parseInt(arr[i].duration.h) < parseInt(arr[j].duration.h))
          // console.log('ww');
            outputArray.push(arr[i]);
          else if (parseInt(arr[i].duration.h) > parseInt(arr[j].duration.h))
          // console.log('ee');
            outputArray.push(arr[j]);
          else if (parseInt(arr[i].duration.h) === parseInt(arr[j].duration.h)
              && (parseInt(arr[i].duration.m) < parseInt(arr[j].duration.m)))
            // console.log('rr');
            outputArray.push(arr[i]);
          else if (parseInt(arr[i].duration.h) === parseInt(arr[j].duration.h)
              && (parseInt(arr[i].duration.m) > parseInt(arr[j].duration.m)))
              // console.log('tt');
            outputArray.push(arr[j])
          }//the first if end
      }
console.log('--');

            let pastKey='';
            outputArray = deleteRepeatingKeys2(outputArray);
            outputArray.forEach(rec => {
              // console.log('rec.departure', rec.departure);
              if (pastKey === rec.departure) {
                // filterArr(outputArray);
               console.log('rec.departure',rec.departure);
              } else {
                pastKey = rec.departure;
                console.log(pastKey);
              }
            });

      console.log('outputArray in filterArr',outputArray);
      return outputArray;
    }

    filterArr(arr);
  // return filterArr();
}

//compose a final route
const composeTrip = (inputArray, outputArray, to) => {
  for (let i=0; i<inputArray.length; i++)
    if (inputArray[i].arrival===to)
      for (let n=1; n<inputArray.length; n++)
        if (inputArray[i].departure===inputArray[n].arrival)
            outputArray.push(inputArray[n]);
            console.log('outputArray',outputArray);
  return outputArray;
}

  directTrips(data, from, to)
  transPointsFrom = deleteRepeatingKeys(findTransitionPoints(data, from));
  transitTrips = transitionalTrips(data, transPointsFrom, to);

  if (directTransport.length!==0)
    console.log(directTransport);
  else {
    let complexTrip = [...transitTransport,...transitTrips];
    transitTrips = composeTrip(complexTrip, transitTrips, to);

    transitTrips = deleteRepeatingKeys2(transitTrips);

    if(travelMode==='cheapest')
      transitTrips = deleteRepeatingKeys2 (findCheapest(transitTrips));
    else {
      console.log('transitTrips in else', transitTrips);
      transitTrips =  findFastest(transitTrips);
    }

    console.log('transitTrips',transitTrips);
    return transitTrips;
  }
}

export default dataFilter;

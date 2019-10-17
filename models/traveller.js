const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map((journey) => {
  return journey.startLocation;
});
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map((journey) => {
  return journey.endLocation;
});
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter((journey) => {
      return journey.transport === transport;
    });
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter((journey) => {
    return journey.distance >= minDistance;
  });
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((total, journey) => {
    return total += journey.distance;
  }, 0);
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  // First, we get all the transporttypes out from all the journeys
  const transportTypes = this.journeys.map((journey) => {
    return journey.transport
  })
  // Then we find the unique ones with filter
  // Filter can use the index of the item we are currently iterating
  // We check if this index is the same as the index of
  // the first occurance in the iterated array
  // IndexOf returns us the index of the first occurance in an array
  // If the indexes match, the condition is true, and the journey is accepted
  // into the new array
  // If it is not, it's rejected
  const uniqueTransportTypes = transportTypes.filter((transportType, index) => {
    return transportTypes.indexOf(transportType) === index;
  })
  return uniqueTransportTypes;
};


module.exports = Traveller;

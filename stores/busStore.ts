import { defineStore, acceptHMRUpdate } from "pinia";
import stations from "~/assets/data/stations.json";
import data from "~/assets/data/data.json";
export const useBusStore = defineStore("bus", {
  state: () => ({
    buses: [],
    stationSearch: [],
    searchResults: [],
        }),
  getters: {
    getStations: (state) => state.stationSearch,
    getSearchResults: (state) => state.searchResults,
  },
  actions: {
async searchStations(query:string) {
  this.stationSearch = stations.filter(station => station.toLowerCase().includes(query.toLowerCase()));
},
async searchBuses(from:string, to:string) {
 const fromRes = data.stations[`${from}`]||[];
  const matchingTrips = fromRes .filter(trip => {
    return trip.nextStations.some(station => station.station === to);
  });
   const result =  matchingTrips.map(trip => {
    const fromStationData = trip.nextStations.find(station => station.station === from);  
    const toStationData = trip.nextStations.find(station => station.station === to);

    return {
      vehicleNumber: trip.vehicleNumber,
      trip: trip,
      fromStation: from,
      departureTime: fromStationData ? fromStationData.arrivalTime : null,
      toStation: to,
      arrivalTime: toStationData ? toStationData.arrivalTime : null
    };
  });
  
  this.searchResults = result; 
    }

},

});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useBusStore, import.meta.hot));
}

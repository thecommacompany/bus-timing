<script setup lang="ts">

const props = defineProps({
  results: {
    type: Array,
    required:false 
  }
})

</script>

<template>
  <div class="bg-customPurple py-10 px-5 flex items-center justify-center">
    <!-- Search Results  -->

    <!-- Result 1 -->
    <div class="h-full overflow-y-auto w-full flex justify-center items-center">
      <div v-if="results && results.length > 0">
        <div v-for="result in results" :key="result"
          class="w-full mt-10 max-w-4xl bg-gray-100 rounded-2xl shadow-xl flex flex-col md:flex-row justify-between p-4 gap-4 items-center">
          <!-- Portion 1: Bus Details -->
          <div class="flex items-center mb-4 md:mb-0 md:pr-4">
            <Icon name="material-symbols:directions-bus-rounded" class="text-gray-700 mr-2 text-6xl" />
            <div class="flex flex-col">
              <label class="text-2xl font-extrabold text-gray-800 font-inter">{{result.vehicleNumber}}</label>
<label class="text-md font-bold text-gray-800 font-inter">
<!-- From -->
 <label>
<label v-if="result.trip.previousStations?.length>0">

{{result.trip.previousStations[0].station??result.fromStation}}
</label><label v-else>{{result.fromStation}}</label>
</label>

<label>
-
<!-- To -->
<label v-if="result.trip.nextStations?.length>0">

{{result.trip.nextStations[0].station??result.toStation}}
</label><label v-else>{{result.toStation}}</label>
</label> 
</label>

              <!-- <label class="text-xl font-extrabold text-gray-500 font-inter">{{result.vehicleNumber}}</label> -->
            </div>
          </div>

          <!-- Route and Time -->
          <div class="flex items-center">
            <div class="flex flex-col items-center text-center md:text-left">
              <label class="text-sm font-bold text-gray-800 font-inter">{{result.toStation}}</label>
<label class="text-sm font-bold text-gray-800 font-inter">{{result.arrivalTime}}</label>
            </div>
          </div>
        </div>
      </div><div v-else>No Buses in this route</div>
    </div>

  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap");

.font-inter {
  font-family: "Inter", sans-serif;
}
</style>

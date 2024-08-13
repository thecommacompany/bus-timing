<script setup lang="ts">
  import {useBusStore} from "@/stores/busStore";
const busStore = useBusStore();
const route = useRoute()
const results = computed(() => busStore.getSearchResults)
watchEffect(async() => {
  if(route.query.from && route.query.to)
    await busStore.searchBuses(route.query.from, route.query.to);
  
})
</script>

<template>
    <div class="max-w-screen overflow-hidden">
       <HomeSearchBar :from="$route.query.from" :to="$route.query.to"/> 
        <ResultsSearchResults :results="results"/>
    </div>
  </template>
  

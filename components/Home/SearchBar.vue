<script setup lang="ts">
import { useBusStore } from "@/stores/busStore";

const props = defineProps({
  from: {
    type: String,
    default: "",
  },
  to: {
    type: String,
    default: "",
  },
});
let searchForm = ref({
  from: "",
  to: "",
});
const busStore = useBusStore();
const searchRes = computed(() => busStore.getStations);

async function searchStation(query: string) {
  await busStore.searchStations(query);
}
const router = useRouter();
async function searchBus() {
  if (searchForm.value.from && searchForm.value.to) {
      router.push({ path: "/search", query: searchForm.value });
     }else{
      alert("Please fill all the fields");
    }
}
onMounted(() => {
  if(props.from && props.to){
    searchForm.value.from = props.from
    searchForm.value.to = props.to
  }
})
</script>

<template>
  <div class="bg-customPurple dark:bg-gray-800 py-5 px-5 flex flex-col items-center justify-center relative">
    <div
      class="bg-gray-100 dark:bg-customPurple rounded-2xl shadow-xl flex flex-col md:flex-row p-4 gap-4 relative flex-wrap">
      <!-- Portion 1: From -->
      <div class="flex items-center pb-4 md:pb-0 md:pr-4 relative">
        <Icon name="material-symbols:directions-bus-rounded" class="text-gray-700 dark:text-white mr-2 text-4xl" />
        <div class="flex flex-col">
          <label class="text-sm font-extrabold text-gray-800 dark:text-white font-inter">From</label>
          <AutoComplete forceSelection v-model="searchForm.from" :suggestions="searchRes" @complete="() => {
              searchStation(searchForm.from);
            }
            " placeholder="Enter Station Name" />
        </div>
        <!-- Overlay Icon between Portion 1 and Portion 2 [Large Devices]-->
      </div>
      <div
        class="absolute md:relative right-0 top-1/2 -translate-y-1/2 md:translate-y-0 md:top-0 flex justify-center item-center">
<Button size="small" class="w-10 h-10" :pt="{root:'!bg-customPurple dark:!bg-gray-100 '}" rounded>
          <Icon name="material-symbols:swap-vert" class="text-white dark:text-customPurple md:hidden" />
 <Icon name="material-symbols:swap-horiz" class="text-white dark:text-customPurple hidden md:block" />
        </Button>
      </div>
      <!-- Portion 2: To -->
      <div class="flex items-center pb-4 md:pb-0 md:pr-4 relative">
        <Icon name="material-symbols:directions-bus-rounded" class="text-gray-700 dark:text-white mr-2 text-4xl" />
        <div class="flex flex-col">
          <label class="text-sm font-extrabold text-gray-800 dark:text-white font-inter">To</label>
          <AutoComplete forceSelection v-model="searchForm.to" :suggestions="searchRes" @complete="() => {
              searchStation(searchForm.to);
            }
            " placeholder="Enter Station Name" />
        </div>
      </div>

      <!-- Portion 3: Date you need to Travel -->
      <div class="flex flex-col md:flex-row items-center pt-4 md:pt-0 md:pl-4 hidden" style="flex-grow: 1">
        <div class="flex items-center">
          <Icon name="material-symbols:calendar-month-rounded" class="text-gray-700 mr-2 text-4xl" />
          <div class="flex flex-col mr-4">
            <label class="text-sm font-bold text-gray-800 font-inter">Date you need to Travel</label>
            <input type="text" value="Friday, 09 Aug"
              class="text-gray-400 font-extrabold font-inter mt-1 rounded bg-transparent" />
          </div>
        </div>
      </div>
      <!--  <div class="flex flex-col md:flex-row flex-wrap">
        <button class="text-sm text-white bg-customPurple hover:bg-purple-900 font-bold py-1 px-3 m-1 rounded-lg">
          Tomorrow
        </button>
        <button class="text-sm text-white bg-customPurple hover:bg-purple-900 font-bold py-1 px-3 m-1 rounded-lg">
          Day After Tomorrow
        </button>
</div> -->
    </div>
    <!-- Search Button placed below the card -->
    <Button asChild >
      <button @click="searchBus"
        class="mt-5 bg-[#3D7184] text-white font-bold text-2xl py-2 bg-opacity-80 px-4 rounded-2xl flex items-center justify-center w-60 hover:bg-opacity-100 transition">
        <Icon name="material-symbols:search-rounded" class="text-4xl mr-2" />
        SEARCH
      </button>
    </Button>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap");

.font-inter {
  font-family: "Inter", sans-serif;
}
</style>

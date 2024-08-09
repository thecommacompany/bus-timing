<script setup lang="ts">
</script>

<template>
    <div class="bg-customPurple py-10 px-5 flex flex-col items-center justify-center">

        <!-- Search Results Card -->
        <div class="w-full md:w-4/5 bg-gray-100 rounded-2xl shadow-xl flex flex-col md:flex-row justify-between p-4 gap-4 items-center mb-8">
            <!-- Portion 1: Bus Details -->
            <div class="flex items-center mb-4 md:mb-0 md:pr-4">
                <Icon name="material-symbols:directions-bus-rounded" class="text-gray-700 mr-2 text-6xl" />
                <div class="flex flex-col">
                    <label class="text-3xl font-extrabold text-gray-800 font-inter">EBT Transports</label>
                    <label class="text-xl font-extrabold text-gray-500 font-inter">KL 09 AA 9876</label>
                </div>
            </div>

            <!-- Route and Time -->
            <div class="flex items-center">
                <div class="flex flex-col items-center text-center md:text-left">
                    <label class="text-xl font-bold text-gray-800 font-inter">VYTILA HUB - THRISSUR</label>
                    <label class="text-sm font-bold text-gray-800 font-inter">10 : 15 am - 12 : 45 pm</label>
                </div>
            </div>
        </div>

        <!-- Showing Bus Count -->
        <div class="items-center justify-center text-center">
            <h3>
                Showing <span class="font-extrabold">01 of 66</span> <br>
                Buses Found
            </h3>
        </div>

        <!-- Left and Right Sections -->
        <div class="w-full md:w-4/5 mt-10 flex flex-col md:flex-row justify-between gap-4">

            <!-- Left Section with Vertical Timeline -->
            <div class="w-full h-full md:w-1/2 bg-gray-100 rounded-2xl shadow-xl p-8 relative flex flex-col justify-start overflow-hidden">
                <!-- Vertical Line with Padding -->
                <div class="absolute inset-y-4 left-1/2 transform -translate-x-1/2">
                    <div class="h-full w-0.5 bg-customPurple"></div>
                </div>

                <!-- Timeline Events -->
                <div class="flex items-center mb-10 relative">
                    <!-- Circle on the Line -->
                    <div class="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-customPurple rounded-full"></div>
                    <!-- Text on the Right -->
                    <div class="flex-1 pl-6">
                        <h4 class="font-extrabold text-gray-800 font-inter">Heading 1</h4>
                        <p class="text-gray-500">Description 1</p>
                        <p class="text-gray-500">Description 2</p>
                    </div>
                </div>
                <div class="flex items-center mb-10 relative">
                    <!-- Text on the Left -->
                    <div class="flex-1 text-right pr-6">
                        <h4 class="font-extrabold text-gray-800 font-inter">Heading 2</h4>
                        <p class="text-gray-500">Description 1</p>
                        <p class="text-gray-500">Description 2</p>
                    </div>
                    <!-- Circle on the Line -->
                    <div class="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-customPurple rounded-full"></div>
                </div>
                <div class="flex items-center mb-10 relative">
                    <!-- Circle on the Line -->
                    <div class="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-customPurple rounded-full"></div>
                    <!-- Text on the Right -->
                    <div class="flex-1 pl-6">
                        <h4 class="font-extrabold text-gray-800 font-inter">Heading 3</h4>
                        <p class="text-gray-500">Description 1</p>
                        <p class="text-gray-500">Description 2</p>
                    </div>
                </div>
                <div class="flex items-center mb-10 relative">
                    <!-- Text on the Left -->
                    <div class="flex-1 text-right pr-6">
                        <h4 class="font-extrabold text-gray-800 font-inter">Heading 4</h4>
                        <p class="text-gray-500">Description 1</p>
                        <p class="text-gray-500">Description 2</p>
                    </div>
                    <!-- Circle on the Line -->
                    <div class="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-customPurple rounded-full"></div>
                </div>
                <div class="flex items-center mb-10 relative">
                    <!-- Circle on the Line -->
                    <div class="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-customPurple rounded-full"></div>
                    <!-- Text on the Right -->
                    <div class="flex-1 pl-6">
                        <h4 class="font-extrabold text-gray-800 font-inter">Heading 5</h4>
                        <p class="text-gray-500">Description 1</p>
                        <p class="text-gray-500">Description 2</p>
                    </div>
                </div>
                <div class="flex items-center mb-10 relative">
                    <!-- Text on the Left -->
                    <div class="flex-1 text-right pr-6">
                        <h4 class="font-extrabold text-gray-800 font-inter">Heading 6</h4>
                        <p class="text-gray-500">Description 1</p>
                        <p class="text-gray-500">Description 2</p>
                    </div>
                    <!-- Circle on the Line -->
                    <div class="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-customPurple rounded-full"></div>
                </div>
                
            </div>

            <!-- Right Section Cards -->
            <div class="w-full h-full md:w-1/2 flex flex-col space-y-4">
                <!-- Heading for Right Section -->
                <h4 class="text-xl font-extrabold font-inter">Other Buses in the Same Route</h4>

                <!-- Card 1 -->
                <div class="bg-gray-100 rounded-2xl shadow-xl p-2 flex flex-col md:flex-row justify-between items-start md:items-center">
                    <!-- Example Content -->
                    <div class="flex items-center mb-2 md:mb-0 md:pr-4 w-full md:w-1/2">
                        <Icon name="material-symbols:directions-bus-rounded" class="text-gray-700 mr-2 text-5xl" />
                        <div class="flex flex-col">
                            <label class="text-2xl font-extrabold text-gray-800 font-inter">EBT Transports</label>
                            <label class="text-xl font-extrabold text-gray-500 font-inter">KL 09 AA 9876</label>
                        </div>
                    </div>
                    <!-- Route and Time -->
                    <div class="flex items-center w-full md:w-1/2 md:justify-end">
                        <div class="flex flex-col items-right text-right md:text-right" >
                            <label class="text-lg font-bold text-gray-800 font-inter">VYTILA HUB - THRISSUR</label>
                            <label class="text-sm font-bold text-gray-800 font-inter">10 : 15 am - 12 : 45 pm</label>
                        </div>
                    </div>
                </div>

                <!-- Card 2 -->
                <div class="bg-gray-100 rounded-2xl shadow-xl p-2 flex flex-col md:flex-row justify-between items-start md:items-center">
                    <!-- Example Content -->
                    <div class="flex items-center mb-2 md:mb-0 md:pr-4 w-full md:w-1/2">
                        <Icon name="material-symbols:directions-bus-rounded" class="text-gray-700 mr-2 text-5xl" />
                        <div class="flex flex-col">
                            <label class="text-xl font-extrabold text-gray-800 font-inter">EBT Transports</label>
                            <label class="text-lg font-extrabold text-gray-500 font-inter">KL 09 AA 9876</label>
                        </div>
                    </div>
                    <!-- Route and Time -->
                    <div class="flex items-center w-full md:w-1/2 md:justify-end">
                        <div class="flex flex-col items-center text-center md:text-right">
                            <label class="text-lg font-bold text-gray-800 font-inter">VYTILA HUB - THRISSUR</label>
                            <label class="text-sm font-bold text-gray-800 font-inter">10 : 15 am - 12 : 45 pm</label>
                        </div>
                    </div>
                </div>

                <!-- Card 3 -->
                <div class="bg-gray-100 rounded-2xl shadow-xl p-2 flex flex-col md:flex-row justify-between items-start md:items-center">
                    <!-- Example Content -->
                    <div class="flex items-center mb-2 md:mb-0 md:pr-4 w-full md:w-1/2">
                        <Icon name="material-symbols:directions-bus-rounded" class="text-gray-700 mr-2 text-5xl" />
                        <div class="flex flex-col">
                            <label class="text-xl font-extrabold text-gray-800 font-inter">EBT Transports</label>
                            <label class="text-lg font-extrabold text-gray-500 font-inter">KL 09 AA 9876</label>
                        </div>
                    </div>
                    <!-- Route and Time -->
                    <div class="flex items-center w-full md:w-1/2 md:justify-end">
                        <div class="flex flex-col items-center text-center md:text-right">
                            <label class="text-lg font-bold text-gray-800 font-inter">VYTILA HUB - THRISSUR</label>
                            <label class="text-sm font-bold text-gray-800 font-inter">10 : 15 am - 12 : 45 pm</label>
                        </div>
                    </div>
                </div>

                <!-- Card 1 -->
                <div class="bg-gray-100 rounded-2xl shadow-xl p-2 flex flex-col md:flex-row justify-between items-start md:items-center">
                    <!-- Example Content -->
                    <div class="flex items-center mb-2 md:mb-0 md:pr-4 w-full md:w-1/2">
                        <Icon name="material-symbols:directions-bus-rounded" class="text-gray-700 mr-2 text-5xl" />
                        <div class="flex flex-col">
                            <label class="text-2xl font-extrabold text-gray-800 font-inter">EBT Transports</label>
                            <label class="text-xl font-extrabold text-gray-500 font-inter">KL 09 AA 9876</label>
                        </div>
                    </div>
                    <!-- Route and Time -->
                    <div class="flex items-center w-full md:w-1/2 md:justify-end">
                        <div class="flex flex-col items-right text-right md:text-right" >
                            <label class="text-lg font-bold text-gray-800 font-inter">VYTILA HUB - THRISSUR</label>
                            <label class="text-sm font-bold text-gray-800 font-inter">10 : 15 am - 12 : 45 pm</label>
                        </div>
                    </div>
                </div>

                <!-- Card 2 -->
                <div class="bg-gray-100 rounded-2xl shadow-xl p-2 flex flex-col md:flex-row justify-between items-start md:items-center">
                    <!-- Example Content -->
                    <div class="flex items-center mb-2 md:mb-0 md:pr-4 w-full md:w-1/2">
                        <Icon name="material-symbols:directions-bus-rounded" class="text-gray-700 mr-2 text-5xl" />
                        <div class="flex flex-col">
                            <label class="text-xl font-extrabold text-gray-800 font-inter">EBT Transports</label>
                            <label class="text-lg font-extrabold text-gray-500 font-inter">KL 09 AA 9876</label>
                        </div>
                    </div>
                    <!-- Route and Time -->
                    <div class="flex items-center w-full md:w-1/2 md:justify-end">
                        <div class="flex flex-col items-center text-center md:text-right">
                            <label class="text-lg font-bold text-gray-800 font-inter">VYTILA HUB - THRISSUR</label>
                            <label class="text-sm font-bold text-gray-800 font-inter">10 : 15 am - 12 : 45 pm</label>
                        </div>
                    </div>
                </div>

                <!-- Card 3 -->
                <div class="bg-gray-100 rounded-2xl shadow-xl p-2 flex flex-col md:flex-row justify-between items-start md:items-center">
                    <!-- Example Content -->
                    <div class="flex items-center mb-2 md:mb-0 md:pr-4 w-full md:w-1/2">
                        <Icon name="material-symbols:directions-bus-rounded" class="text-gray-700 mr-2 text-5xl" />
                        <div class="flex flex-col">
                            <label class="text-xl font-extrabold text-gray-800 font-inter">EBT Transports</label>
                            <label class="text-lg font-extrabold text-gray-500 font-inter">KL 09 AA 9876</label>
                        </div>
                    </div>
                    <!-- Route and Time -->
                    <div class="flex items-center w-full md:w-1/2 md:justify-end">
                        <div class="flex flex-col items-center text-center md:text-right">
                            <label class="text-lg font-bold text-gray-800 font-inter">VYTILA HUB - THRISSUR</label>
                            <label class="text-sm font-bold text-gray-800 font-inter">10 : 15 am - 12 : 45 pm</label>
                        </div>
                    </div>
                </div>

                <!-- Card 1 -->
                <div class="bg-gray-100 rounded-2xl shadow-xl p-2 flex flex-col md:flex-row justify-between items-start md:items-center">
                    <!-- Example Content -->
                    <div class="flex items-center mb-2 md:mb-0 md:pr-4 w-full md:w-1/2">
                        <Icon name="material-symbols:directions-bus-rounded" class="text-gray-700 mr-2 text-5xl" />
                        <div class="flex flex-col">
                            <label class="text-2xl font-extrabold text-gray-800 font-inter">EBT Transports</label>
                            <label class="text-xl font-extrabold text-gray-500 font-inter">KL 09 AA 9876</label>
                        </div>
                    </div>
                    <!-- Route and Time -->
                    <div class="flex items-center w-full md:w-1/2 md:justify-end">
                        <div class="flex flex-col items-right text-right md:text-right" >
                            <label class="text-lg font-bold text-gray-800 font-inter">VYTILA HUB - THRISSUR</label>
                            <label class="text-sm font-bold text-gray-800 font-inter">10 : 15 am - 12 : 45 pm</label>
                        </div>
                    </div>
                </div>

                <!-- Card 2 -->
                <div class="bg-gray-100 rounded-2xl shadow-xl p-2 flex flex-col md:flex-row justify-between items-start md:items-center">
                    <!-- Example Content -->
                    <div class="flex items-center mb-2 md:mb-0 md:pr-4 w-full md:w-1/2">
                        <Icon name="material-symbols:directions-bus-rounded" class="text-gray-700 mr-2 text-5xl" />
                        <div class="flex flex-col">
                            <label class="text-xl font-extrabold text-gray-800 font-inter">EBT Transports</label>
                            <label class="text-lg font-extrabold text-gray-500 font-inter">KL 09 AA 9876</label>
                        </div>
                    </div>
                    <!-- Route and Time -->
                    <div class="flex items-center w-full md:w-1/2 md:justify-end">
                        <div class="flex flex-col items-center text-center md:text-right">
                            <label class="text-lg font-bold text-gray-800 font-inter">VYTILA HUB - THRISSUR</label>
                            <label class="text-sm font-bold text-gray-800 font-inter">10 : 15 am - 12 : 45 pm</label>
                        </div>
                    </div>
                </div>

                <!-- Card 3 -->
                <div class="bg-gray-100 rounded-2xl shadow-xl p-2 flex flex-col md:flex-row justify-between items-start md:items-center">
                    <!-- Example Content -->
                    <div class="flex items-center mb-2 md:mb-0 md:pr-4 w-full md:w-1/2">
                        <Icon name="material-symbols:directions-bus-rounded" class="text-gray-700 mr-2 text-5xl" />
                        <div class="flex flex-col">
                            <label class="text-xl font-extrabold text-gray-800 font-inter">EBT Transports</label>
                            <label class="text-lg font-extrabold text-gray-500 font-inter">KL 09 AA 9876</label>
                        </div>
                    </div>
                    <!-- Route and Time -->
                    <div class="flex items-center w-full md:w-1/2 md:justify-end">
                        <div class="flex flex-col items-center text-center md:text-right">
                            <label class="text-lg font-bold text-gray-800 font-inter">VYTILA HUB - THRISSUR</label>
                            <label class="text-sm font-bold text-gray-800 font-inter">10 : 15 am - 12 : 45 pm</label>
                        </div>
                    </div>
                </div>

                <!-- Card 1 -->
                <div class="bg-gray-100 rounded-2xl shadow-xl p-2 flex flex-col md:flex-row justify-between items-start md:items-center">
                    <!-- Example Content -->
                    <div class="flex items-center mb-2 md:mb-0 md:pr-4 w-full md:w-1/2">
                        <Icon name="material-symbols:directions-bus-rounded" class="text-gray-700 mr-2 text-5xl" />
                        <div class="flex flex-col">
                            <label class="text-2xl font-extrabold text-gray-800 font-inter">EBT Transports</label>
                            <label class="text-xl font-extrabold text-gray-500 font-inter">KL 09 AA 9876</label>
                        </div>
                    </div>
                    <!-- Route and Time -->
                    <div class="flex items-center w-full md:w-1/2 md:justify-end">
                        <div class="flex flex-col items-right text-right md:text-right" >
                            <label class="text-lg font-bold text-gray-800 font-inter">VYTILA HUB - THRISSUR</label>
                            <label class="text-sm font-bold text-gray-800 font-inter">10 : 15 am - 12 : 45 pm</label>
                        </div>
                    </div>
                </div>

                <!-- Card 2 -->
                <div class="bg-gray-100 rounded-2xl shadow-xl p-2 flex flex-col md:flex-row justify-between items-start md:items-center">
                    <!-- Example Content -->
                    <div class="flex items-center mb-2 md:mb-0 md:pr-4 w-full md:w-1/2">
                        <Icon name="material-symbols:directions-bus-rounded" class="text-gray-700 mr-2 text-5xl" />
                        <div class="flex flex-col">
                            <label class="text-xl font-extrabold text-gray-800 font-inter">EBT Transports</label>
                            <label class="text-lg font-extrabold text-gray-500 font-inter">KL 09 AA 9876</label>
                        </div>
                    </div>
                    <!-- Route and Time -->
                    <div class="flex items-center w-full md:w-1/2 md:justify-end">
                        <div class="flex flex-col items-center text-center md:text-right">
                            <label class="text-lg font-bold text-gray-800 font-inter">VYTILA HUB - THRISSUR</label>
                            <label class="text-sm font-bold text-gray-800 font-inter">10 : 15 am - 12 : 45 pm</label>
                        </div>
                    </div>
                </div>

                <!-- Card 3 -->
                <div class="bg-gray-100 rounded-2xl shadow-xl p-2 flex flex-col md:flex-row justify-between items-start md:items-center">
                    <!-- Example Content -->
                    <div class="flex items-center mb-2 md:mb-0 md:pr-4 w-full md:w-1/2">
                        <Icon name="material-symbols:directions-bus-rounded" class="text-gray-700 mr-2 text-5xl" />
                        <div class="flex flex-col">
                            <label class="text-xl font-extrabold text-gray-800 font-inter">EBT Transports</label>
                            <label class="text-lg font-extrabold text-gray-500 font-inter">KL 09 AA 9876</label>
                        </div>
                    </div>
                    <!-- Route and Time -->
                    <div class="flex items-center w-full md:w-1/2 md:justify-end">
                        <div class="flex flex-col items-center text-center md:text-right">
                            <label class="text-lg font-bold text-gray-800 font-inter">VYTILA HUB - THRISSUR</label>
                            <label class="text-sm font-bold text-gray-800 font-inter">10 : 15 am - 12 : 45 pm</label>
                        </div>
                    </div>
                </div>
                

            </div>
            
        </div>
    </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap');

.font-inter {
    font-family: 'Inter', sans-serif;
}
</style>

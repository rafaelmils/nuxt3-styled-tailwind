<script setup></script>

<template>
  <div class="flex flex-col w-full max-w-7xl mx-auto gap-6 flex-1">
    <DashboardStatsWidget />
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <DashboardSalesTrendWidget />
      <DashboardRecentActivityWidget />
    </div>
    <DashboardProductOverviewWidget />
  </div>
</template>

<template>
  <div class="grid grid-cols-12 gap-4">
    <div class="col-span-4 h-screen bg-slate-500">Side bar</div>
    <div class="col-span-8 h-screen bg-slate-50">
      <slot />
    </div>
  </div>
</template>

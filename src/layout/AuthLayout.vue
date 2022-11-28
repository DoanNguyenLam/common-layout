<template>
  <div class="h-screen bg-green-300">
    <h1>Auth layout</h1>
    <div class="w-1/2 mx-auto">
      <slot>
        <h1>Default</h1>
      </slot>
      <div class="w-1/2 mx-auto bg-green-600 h-10">
        <slot name="auth" />
      </div>
    </div>
  </div>
</template>

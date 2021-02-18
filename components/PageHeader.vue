<template>
  <div class="mb-8">
    <h1 class="text-4xl font-bold text-green-800">
      {{ header }}
    </h1>
    <h2 v-if="subheader" class="text-gray-600">
      {{ subheader }}
    </h2>
  </div>
</template>

<script>
export default {
  name: 'PageHeader',
  props: {
    header: {
      type: String,
      required: true
    },
    subheader: {
      type: String,
      required: false,
      default: null
    }
  }
}
</script>

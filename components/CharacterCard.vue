<template>
  <card :title="character.name">
    <div class="flex flex-col text-center items-center">
      <div class="rounded-full w-32 h-32 overflow-hidden mb-8">
        <img class="" :src="character.image" alt="Image of character">
      </div>
      <h2 class="text-lg text-green-800">
        {{ character.name }}
      </h2>
      <h3 class="text-gray-600">
        {{ character.species }} / {{ character.status }} / {{ character.gender }}
      </h3>
    </div>
  </card>
</template>
<script>
import Card from '~/components/Card'

export default {
  components: { Card },
  props: {
    character: {
      type: Object,
      required: true
    }
  }
}
</script>

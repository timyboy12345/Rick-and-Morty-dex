<template>
  <div class="rounded bg-white shadow">
    <div v-if="cardImage">
      <img
        :src="cardImage"
        :alt="cardImageAlt || 'Image of this card'"
        class="w-full h-32 object-center object-cover rounded-t"
      >
    </div>

    <div class="p-4">
      <div v-if="cardTitle || cardSubTitle" :class="{'mb-4': hasFooterSlot}">
        <div v-if="cardTitle" class="text-lg text-green-800 font-bold">
          {{ cardTitle }}
        </div>
        <div v-if="cardSubTitle" class="text-gray-600">
          {{ cardSubTitle }}
        </div>
      </div>

      <slot />

      <div v-if="cardLink">
        <NuxtLink :to="cardLink" class="underline text-green-800 hover:text-green-900 mt-2 block">
          {{ cardLinkTag || "Go here" }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    cardTitle: {
      type: String,
      required: false,
      default: null
    },
    cardSubTitle: {
      type: String,
      required: false,
      default: null
    },
    cardLink: {
      type: String,
      required: false,
      default: null
    },
    cardLinkTag: {
      type: String,
      required: false,
      default: null
    },
    cardImage: {
      type: String,
      required: false,
      default: null
    },
    cardImageAlt: {
      type: String,
      required: false,
      default: null
    }
  },
  computed: {
    hasFooterSlot () {
      return !!this.$slots.footer || this.cardLink
    }
  }
}
</script>

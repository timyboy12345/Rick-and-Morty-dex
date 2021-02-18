<template>
  <div>
    <page-header header="Rick and Morty" subheader="Get all the information available from Rick and Morty" />

    <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
      <card card-title="All characters" card-sub-title="See all characters on the show" card-link="/characters">
        <p>
          Characters make or break a show, and the characters in Rick and Morty are all amazing! See a list of them here.
        </p>
      </card>
    </div>
  </div>
</template>

<script>
import PageHeader from '~/components/PageHeader'
import Card from '~/components/Card'

export default {
  name: 'RickAndMorty',
  components: {
    Card,
    PageHeader
  },
  methods: {
    selectedCharacter (id) {

    }
  }
}
</script>

<template>
  <div>
    <page-header header="Rick and Morty personage" />

    <character-card v-if="character" :character="character" />
  </div>
</template>

<script>
import PageHeader from '~/components/PageHeader'
import GetCharacterQuery from '~/graphql/rickandmorty/characters/getcharacter.gql'
import CharacterCard from '~/components/CharacterCard'

export default {
  name: 'RickAndMorty',
  components: {
    CharacterCard,
    PageHeader
  },
  head () {
    return {
      title: this.character ? this.character.name : 'Loading...',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'These are all the Rick and Morty characters available'
        }
      ]
    }
  },
  methods: {},
  apollo: {
    character: {
      prefetch: false,
      query: GetCharacterQuery,
      variables () {
        return { id: this.$route.params.id }
      },
      update (data) {
        return data.character
      }
    }
  }
}
</script>

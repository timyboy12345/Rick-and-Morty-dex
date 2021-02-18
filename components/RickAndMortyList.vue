<template>
  <div>
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
      <card
        v-for="character of characters"
        :key="character.id"
        :card-title="character.name"
        :card-sub-title="character.species"
        :card-image="character.image"
        :card-link="'characters/' + character.id"
      />
    </div>

    <div v-if="loadingCharacters" class="text-center text-gray-400 text-lg mx-auto mt-8">
      Laden...
    </div>
  </div>
</template>

<script>
import GetCharactersQuery from '../graphql/rickandmorty/characters/getall.gql'
import Card from '~/components/Card'

export default {
  name: 'RickAndMortyList',
  components: { Card },
  data () {
    return {
      loadingCharacters: false
    }
  },
  // mounted () {
  //   this.scroll()
  // },
  methods: {
    loadNextCharactersPage () {
      if (!this.loadingCharacters) {
        this.loadingCharacters = true
      }
    },
    scroll () {
      window.onscroll = () => {
        const bottomOfWindow = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight === document.documentElement.offsetHeight

        if (bottomOfWindow) {
          this.loadNextCharactersPage()
        }
      }
    },
    selectCharacter (character) {
      console.log('BOE')
      this.$emit('selected-character', character.id)
    }
  },
  apollo: {
    characters: {
      prefetch: false,
      query: GetCharactersQuery,
      variables () {
        return { page: 1 }
      },
      update (data) {
        return data.characters.results
      }
    }
  }
}
</script>

<template>
  <div>
    <page-header
      header="Rick and Morty characters"
      subheader="These are all the characters currently and previously in the show"
    />

    <rick-and-morty-list />
  </div>
</template>

<script>
import RickAndMortyList from '~/components/RickAndMortyList'
import PageHeader from '~/components/PageHeader'

export default {
  name: 'RickAndMorty',
  components: {
    PageHeader,
    RickAndMortyList
  },
  head () {
    return {
      title: 'All Characters',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'These are all the Rick and Morty characters available'
        }
      ]
    }
  }
}
</script>

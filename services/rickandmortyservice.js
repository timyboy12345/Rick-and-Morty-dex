// import axios from "axios";

// const apiClient = axios.create({
//     baseURL: 'https://rickandmortyapi.com',
//     withCredentials: false,
//     headers: {
//         Accept: '*/*',
//         'Content-Type': 'application/json',
//     }
// })

export default {
  // getCharacters(page = 0) {
  //   return this.$apollo.query({
  //     query: require('../graphql/rickandmorty/characters/getall.gql'),
  //     variables: {page: page},
  //     fetchPolicy: "cache-first"
  //   }).then((response) => {
  //     return {status: 'success', payload: response.data.characters.results};
  //   }).catch((error) => {
  //     return {status: 'error', payload: error};
  //   });
  // },
  // getCharacter(id) {
  //   return this.$apollo.query({
  //     query: require('../graphql/rickandmorty/characters/getcharacter.gql'),
  //     variables: {id: id},
  //     fetchPolicy: "cache-first"
  //   }).then((response) => {
  //     return {status: 'success', payload: response.data.characters.results};
  //   }).catch((error) => {
  //     return {status: 'error', payload: error};
  //   });
  // },
  // getEpisodes(page = 0) {
  //   return this.$apollo.query({
  //     query: require('../graphql/rickandmorty/episodes/getall.gql'),
  //     variables: {page: page},
  //     fetchPolicy: 'no-cache'
  //   }).then((response) => {
  //     return {status: 'success', payload: response.data.episodes.results};
  //   }).catch((error) => {
  //     return {status: 'error', payload: error};
  //   });
  // }
}

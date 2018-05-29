import musicVueService from './music-vue'

const trackService = {}

trackService.search = (q, offset = 0) => {
  const type = 'track'

  return musicVueService.get('/search', {
    params: {q, type, offset}
  })
    .then(res => res.data)
}

export default trackService

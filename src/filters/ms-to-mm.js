const msToMm = {}

function convertmsToMm (ms) {
  const min = Math.floor(ms / 60000)
  const sec = ((ms % 60000 / 1000).toFixed(0))

  return `${min}:${(sec < 10 ? '0' + sec + ' sec' : sec + ' sec')}`
}

msToMm.install = function (Vue) {
  Vue.filter('ms-to-mm', val => {
    return convertmsToMm(val)
  })
}

export default msToMm

import trae from 'trae'
import configService from './config'

const musicVueService = trae.create({
  baseUrl: configService.apiUrl
})

export default musicVueService

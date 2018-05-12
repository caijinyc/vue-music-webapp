import axios from 'axios'
import {HOST} from 'common/js/config'

export function getSong (id) {
  const url = HOST + `/music/url?id=${id}`

  return axios.get(url)
}

export function getLyric (id) {
  const url = HOST + `/lyric?id=${id}`

  return axios.get(url)
}

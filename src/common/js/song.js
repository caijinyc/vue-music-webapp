
export default class Song {
  constructor ({id, mid, singer, name, album, duration, image, url, aliaName}) {
    this.id = id
    this.singer = singer
    this.name = name
    this.album = album
    this.aliaName = aliaName
    // this.duration = duration
    this.image = image
    // this.url = url
  }
}

function singerName (arr) {
  let name = []
  name = arr.map((item) => {
    // console.log(arr)
    return item.name
  })

  return name.join('/')
}

export function createRecommendSong (music) {
  return new Song({
    id: music.id,
    singer: singerName(music.song.artists),
    name: music.name,
    // aliaName: music.song.alias.join('-'),
    album: music.song.album.name,
    image: music.song.album.picUrl
  })
}

export function createRecommendListSong (music) {
  return new Song({
    id: music.id,
    singer: singerName(music.artists),
    name: music.name,
    // aliaName: music.song.alias.join('-'),
    album: music.album.name,
    image: music.album.picUrl
  })
}

export function createSong (music) {
  return new Song({
    id: music.id,
    singer: singerName(music.ar),
    name: music.name,
    // aliaName: filiterAliaName(music.alia),
    album: music.al.name,
    image: music.al.picUrl
  })
}

export function createSearchSong (music) {
  return new Song({
    id: music.id,
    singer: singerName(music.artists),
    name: music.name,
    // aliaName: filiterAliaName(music.alias),
    album: music.album.name
    // image: `http://p1.music.126.net/-2o0OyBFtfCCoBqL1Q-TjA==/${music.album.picId}.jpg`
    // // url: `http://dl.stream.qqmusic.qq.com/C400${musicData.songid}.m4a?vkey=${getUrl(musicData.songid)}&guid=3304491888&uin=0&fromtag=66`
  })
}

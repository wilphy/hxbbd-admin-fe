import request from '@/utils/request'

const baseUrl = `http://localhost:3000`

export function fetchList(params) {
  return request({
    params,
    url: `${baseUrl}/playlist/list`,
    method: 'get'
  })
}

export function fetchById(params) {
  return request({
    params,
    url: `${baseUrl}/playlist/getById`,
    method: 'get'
  })
}

export function update(params) {
  return request({
    url: `${baseUrl}/playlist/updatePlaylist`,
    data: {
      ...params
    },
    method: 'post'
  })
}

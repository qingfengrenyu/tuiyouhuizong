import request from '@/utils/request'

export function getHuizongList(params) {
  return request({
    url: '/vue-admin-template/huizong/list',
    method: 'get',
    params
  })
}

import request from '@/utils/request'

export function getGithubInfo () {
  return request({
    url: 'https://api.github.com/search/repositories?q=vue&page=1&per_page=20',
    method: 'get'
  })
}

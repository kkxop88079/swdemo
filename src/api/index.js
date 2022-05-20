import request from '@/api/request'

export const getMemberInfo = () => {
  const url = 'Member/MemberInfo'
  const method = 'get'
  return request({
    method,
    url,
  })
}
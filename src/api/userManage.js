import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}

export default{
  getUserList(searchModel){
    return request({
      url: '/user/list',
      method: 'get',
      params:{
        pageNo: searchModel.pageNo,
        pageSize: searchModel.pageSize,
        username: searchModel.username,
        phone: searchModel.phone
      }
    });
  },
  addUser(user){
    return request({
      url: '/user',
      method: 'post',
      data: user
    });
  },
  updateUser(user){
    return request({
      url: '/user',
      method: 'put',
      data: user
    });
  },
  getUserById(id){
    return request({
      // url: '/user' + id,
      url: `/user/${id}`,
      method: 'get',
    });
  },
  save(user) {
    if(user.id == null || user.id == 'undefined') {
      return this.addUser(user);
    }
    return this.updateUser(user);
  },
  deleteUserById(id){
    return request({
      // url: '/user' + id,
      url: `/user/${id}`,
      method: 'delete',
    });
  },
}

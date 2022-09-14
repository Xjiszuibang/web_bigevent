$(function() {  //入口函数  等待页面加载完成后，在加载里面的内容

  // 第一步  调用 getUserInfo 获取用户基本信息  由于需要体现用户的名称头像等 因此需要先获取用户的基本信息 
  //内容过多，因此使用函数的调用的形式  
  getUserInfo()



  let layer = layui.layer


  //  第四步 右上角退出功能
  // 点击按钮，实现退出功能
  $('#btnLogout').on('click', function() {

    // 提示用户是否确认退出
    // layer.confirm(content, options, yes, cancel) - 询问框
    // layer.confirm('is not?', {icon: 3, title:'提示'}, function(index){
    // layer 内置模块 弹出层  询问框 复制使用


    layer.confirm('确定退出登录?', { icon: 3, title: '提示' }, function(index) {
      //do something  
      // 1. 清空本地存储中的 token
      localStorage.removeItem('token')
      // 2. 重新跳转到登录页面
      location.href = '/login.html'

      // 关闭 confirm 询问框
      layer.close(index)
    })
  })
})

// 第一步 获取用户的基本信息  
function getUserInfo() {  //接口函数要求使用GET 形式

  $.ajax({
    method: 'GET',
    url: '/my/userinfo',
    success: function(res) {

     // 由于接口函数要求 所有url 有/my/ 那么需要拼配请求头中的Authorization 信息
     //因为这样子需要请求的太多了，合并到baseAPI 中了
    // headers = {
    // Authorization: localStorage.getItem('token') || ''
    //}


      if (res.status !== 0) {  //如果调取失败，告知调取失败
        return layui.layer.msg('获取用户信息失败！')  
      }

      // 第二步  如果成功把头像更换了   // 调用 renderAvatar 渲染用户的头像
      renderAvatar(res.data)

    }

    // 回调函数有 3种  失败  res  成功 success  和 不论成功还是失败，最终都会调用 complete 回调函数


    //  第三步  操作complete 回调函数 可以控制用户，如果未登录，只能停留到登录页面





    //  由于 complete 回调函数 在接下来很多页面都会使用到，因此把它直接拼接到baseAPI.js 中
    // complete: function(res) {
    //   // console.log('执行了 complete 回调：')
    //   // console.log(res)
    //   // 在 complete 回调函数中，可以使用 res.responseJSON 拿到服务器响应回来的数据
    //   if (res.responseJSON.status === 1 && res.responseJSON.message === '身份认证失败！') {
    //     // 1. 强制清空 token
    //     localStorage.removeItem('token')
    //     // 2. 强制跳转到登录页面
    //     location.href = '/login.html'
    //   }
    // }
  })
}

// 第二步 渲染用户的头像
function renderAvatar(user) {

  // 1. 获取用户的名称   //优先用户昵称 其次是用户名 因此用 || 或链接
  let name = user.nickname || user.username

  // 2. 设置欢迎的文本
  $('#welcome').html('欢迎&nbsp;&nbsp;' + name)
  // 3. 按需渲染用户的头像
  if (user.user_pic !== null) {   //如果用头像不为空，即代表用户上传了头像
    // 3.1 渲染图片头像
    $('.layui-nav-img')
      .attr('src', user.user_pic).show() //用户头像展示
    $('.text-avatar').hide()  //文本头像隐藏

  } else {    //反之
    // 3.2 渲染文本头像
    $('.layui-nav-img').hide()
    var first = name[0].toUpperCase()
    $('.text-avatar')
      .html(first)
      .show()
  }
}

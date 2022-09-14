$(function(){ //入口函数

    getUserInfo();


})//入口函数



// 因为用户登录后，需要显示 个人信息  如头像  名字等  因此需要获取到用户的基本信息
// 其次，由于接口文档了明确 /my/userinfo 的url 必须要有请求头headers
let layer = layui.layer;

// 获取用户的基本信息
function getUserInfo() {
     $.ajax({ 
        method: 'GET', 
        url: '/my/userinfo', 
        // headers 就是请求头配置对象 
        headers: { Authorization: localStorage.getItem('token') || '' },
        success: function(res) { 
          if (res.status !== 0) { 
            return layer.msg('获取用户信息失败！') 
        }//如果获取成功   就调用 renderAvatar函数  渲染用户的头像 
        renderAvatar(res.data) 
    } 
}) 
}

// 渲染用户头像和昵称 的函数

function renderAvatar(user) {
    // 1. 获取用户的名称  用或来链接 如果有用户昵称 优先昵称 没有的用户名
    let name = user.nickname || user.username 
    // 2. 设置欢迎的文本
     $('#welcome').html('欢迎 &nbsp;&nbsp;' + name)  //把前面个的欢迎XXX 可以去掉了
     // 3. 按需渲染用户的头像 
     if (user.user_pic !== null) {  //如果有用户头像
        // 3.1 渲染图片头像 
        $('.layui-nav-img') .attr('src', user.user_pic) .show()// 那么获取到用户头像并展示
        $('.text-avatar').hide() //文本头像隐藏
    } else { 
        // 3.2 渲染文本头像
        $('.layui-nav-img').hide() //用户头像区域隐藏
        let first = name[0].toUpperCase() //获取到用户名的第一个字母并大写
        $('.text-avatar') .html(first) .show() //展示用户名
    } 
}

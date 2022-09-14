$(function() {
  // 点击“去注册账号”的链接
  $('#link_reg').on('click', function() {
    $('.login-box').hide()
    $('.reg-box').show()
  })

  // 点击“去登录”的链接
  $('#link_login').on('click', function() {
    $('.login-box').show()
    $('.reg-box').hide()
  })

<<<<<<< HEAD
<<<<<<< HEAD


// 自定义校验规则
// 从layui 中获取 form 对象 和 layer 对象

let form = layui.form;
let layer = layui.layer;

form.verify ({
    //自定义了一个叫做 pwd 校验规则
    pwd: [ /^[\S]{6,12}$/
    ,'密码必须6到12位，且不能出现空格'],

    // 因为注册页面需要二次验证密码，需要两次密码一致，因此需要判定一下 
    //我们通过 vlaue 这个形参拿到了 再次输入密码的 值
    //然后再获取到密码的值，进行比较
    repwd: function(value){ //value：表单的值、item：表单的DOM对象
        let pwd = $('.reg-box [name=password]').val();
    if(pwd !== value) {
        return alert('密码不一致');
    }  
}
});



//监听注册表单，触发提交事件。 由于内容是用户输入的 因此形参用 e ，好形成事件委托
// 点击提交按钮  触发事件    
//事件为 把用户提交的信息提交到服务器（1、检查是否符合规则 2、如果不符合提示错误信息 3.如果告知提交成功，告知注册成功，自动模拟人工操作，自动跳转到登录页面；

$('#form_reg'). on('submit',function (e) {
    // 阻止事件自动触发
   e.preventDefault(); 
   //2. 发起Ajax的POST请求 -提交用户的注册信息
   let data = {
    username : $('#form_reg [name=username]').val(),
    password : $('#form_reg [name=password]').val()
   }

   $.post('/api/reguser',data,(res)=>{
    if (res.status !== 0) {
        return layer.msg(res.message);
=======
=======
>>>>>>> index
  // 从 layui 中获取 form 对象
  var form = layui.form
  var layer = layui.layer
  // 通过 form.verify() 函数自定义校验规则
  form.verify({
    // 自定义了一个叫做 pwd 校验规则
    pwd: [/^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'],
    // 校验两次密码是否一致的规则
    repwd: function(value) {
      // 通过形参拿到的是确认密码框中的内容
      // 还需要拿到密码框中的内容
      // 然后进行一次等于的判断
      // 如果判断失败,则return一个提示消息即可
      var pwd = $('.reg-box [name=password]').val()
      if (pwd !== value) {
        return '两次密码不一致！'
      }
<<<<<<< HEAD
>>>>>>> index
=======
>>>>>>> index
    }
  })

  // 监听注册表单的提交事件
  $('#form_reg').on('submit', function(e) {
    // 1. 阻止默认的提交行为
    e.preventDefault()
    // 2. 发起Ajax的POST请求
    var data = {
      username: $('#form_reg [name=username]').val(),
      password: $('#form_reg [name=password]').val()
    }
    $.post('/api/reguser', data, function(res) {
      if (res.status !== 0) {
        return layer.msg(res.message)
      }
      layer.msg('注册成功，请登录！')
      // 模拟人的点击行为
      $('#link_login').click()
    })
  })

<<<<<<< HEAD
<<<<<<< HEAD
   });
});



// 监听登录表单的提交事件。
$('#form_login').submit(function(e) {
  // 阻止事件自动触发
  e.preventDefault();
//发起发起Ajax的POST请求 -提交用户的登录信息
$.ajax({
    url:'/api/login',
    method: 'POST', 
    // 快速获取表单中的数据 
    data: $(this).serialize(),
    success: function(res) { 
        if (res.status !== 0) { 
            return layer.msg('登录失败！') 
        } layer.msg('登录成功！') 
        // console.log(token);
        // 将登录成功得到的 token 字符串，保存到 localStorage 中
        localStorage.setItem('token',res.token);
        // 跳转到后台主页 
        location.href = 'index.html';
}
=======
  // 监听登录表单的提交事件
  $('#form_login').submit(function(e) {
    // 阻止默认提交行为
    e.preventDefault()
    $.ajax({
      url: '/api/login',
      method: 'POST',
      // 快速获取表单中的数据
      data: $(this).serialize(),
      success: function(res) {
        if (res.status !== 0) {
          return layer.msg('登录失败！')
        }
        layer.msg('登录成功！')
        // 将登录成功得到的 token 字符串，保存到 localStorage 中
=======
  // 监听登录表单的提交事件
  $('#form_login').submit(function(e) {
    // 阻止默认提交行为
    e.preventDefault()
    $.ajax({
      url: '/api/login',
      method: 'POST',
      // 快速获取表单中的数据
      data: $(this).serialize(),
      success: function(res) {
        if (res.status !== 0) {
          return layer.msg('登录失败！')
        }
        layer.msg('登录成功！')
        // 将登录成功得到的 token 字符串，保存到 localStorage 中
>>>>>>> index
        localStorage.setItem('token', res.token)
        // 跳转到后台主页
        location.href = './index.html'
      }
    })
  })
<<<<<<< HEAD
>>>>>>> index
=======
>>>>>>> index
})

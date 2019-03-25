require.config({
	paths:{
		"mui":"libs/mui.min"
	}
})

require(["mui"],function(mui){
	function init(){
		getData()
	}

	function getData(){
		mui.ajax('/getData',{
			dataType:'json',//服务器返回json格式数据
			type:'get',//HTTP请求类型
			timeout:10000,//超时时间设置为10秒；
			success:function(res){
				var str='';
				res.data.forEach(function(item){
					str+=`
					  <dl>
					    <p>${item.name}</p>
					    <span>${item.goods}</span>
					    <dd>${item.descripts}</dd>
					</dl>
					`
				})
				document.querySelector('.sect').innerHTML=str;
			}
		
		});
	}
	init()
})
//查看操作人员
$(document).ready(function() {
	selectOne();
	
	$('.back').click(function(){
		var index = parent.layer.getFrameIndex(window.name);
		parent.layer.close(index); //关闭当前页
	});
});
var selectOne = function() {
	var thisUrl = decodeURI(document.URL);
	var userId = thisUrl.split('?')[1].split('=')[1];

	var data = {
		"userId": userId
	};
	$.ajax({
		url: 'http://'+ip+':8888/manage_system/userInfo/selectUserByUserId',
		data: data,
		dataType: 'json',
		type: 'GET',
		success: function(res) {
			console.log(res);
			res.data.forEach(function(item) {
				$("#user_name").val(item.userName).attr("disabled","disabled");
				$("input[type=radio][name=status][value=" + item.status + "]").attr("checked", 'checked');
				$(".relartion_user_id").val(item.empName).attr("disabled","disabled");
				if($(".relartion_user_id").find("option:selected").text() ==''){
					var Html = [];
					Html.push('<option>当前员工所在部门不存在<option>');
				
					$(".relartion_user_id").html(Html.join(''));
				}else{
					$(".relartion_user_id").val(item.empName).attr("selected",'selected').attr("disabled","disabled");
				}
				$(".number").val(item.empNum).attr("disabled","disabled");
				$(".located_oil_station").val(item.departmentName).attr("disabled","disabled");
				$('.remark').val(item.remark).attr("disabled","disabled");
				$('.c_time').val(dateFormat(item.cTime)).attr("disabled","disabled");
				$('.m_time').val(dateFormat(item.mTime)).attr("disabled","disabled");
				$(".post").val(item.job).attr("disabled","disabled");
				$(".telephone").val(item.tel).attr("disabled","disabled");
					console.log(res.data);
				
			});
		}
	});
}
// var selectEmp = function() {
// 	$.ajax({
// 		url: 'http://'+ip+':8888/manage_system/empInfo/selectEmpInfoAll',
// 		data: '',
// 		dataType: 'json',
// 		type: 'GET',
// 		success: function(res) {
// 		
// 			var html = [];
// 			html.push('<option value=null>无</option>');
// 			res.data.forEach(function(item) {
// 				html.push('<option class="emp_name" value =' + item.empId + '>' + item.empName +
// 					'</option>');
// 			});
// 			$('.relartion_user_id').html(html.join(''));
// 			selectOne();
// 		}
// 	});
// }

//格式化日期
var dateFormat =function(time) {
	var date=new Date(time);
	var year=date.getFullYear();
	/* 在日期格式中，月份是从0开始的，因此要加0
	* 使用三元表达式在小于10的前面加0，以达到格式统一  如 09:11:05
	* */
	var month= date.getMonth()+1<10 ? "0"+(date.getMonth()+1) : date.getMonth()+1;
	var day=date.getDate()<10 ? "0"+date.getDate() : date.getDate();
	var hours=date.getHours()<10 ? "0"+date.getHours() : date.getHours();	
	var minutes=date.getMinutes()<10 ? "0"+date.getMinutes() : date.getMinutes();
	var seconds=date.getSeconds()<10 ? "0"+date.getSeconds() : date.getSeconds();
	// 拼接
	return year+"-"+month+"-"+day;
}
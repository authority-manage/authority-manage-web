$(function() {
	
	$('#EmpInfo').click(function() {
		window.location.href = "../EmpInfoManagement/EmpInfoManagement.html";
	})
	$('#departmentInfoGl').click(function() {
		window.location.href = "../DepartmentInfoManagement/departmentMainPage.html";
	})
	$('#login').click(function() {
		window.location.href = "login.html";
	})
	$("#Operator").click(function() {
		window.location.href = "../OperatorManagement/OperatorManagement.html";
	})
	//权限管理页面跳转部分
	$("#Rights").click(function() {
		window.location.href = '../ModelInfo/ModelInfo.html'
	});

	$('#Model').off('click').on('click', function() {
		window.location.href = '../ModelInfo/ModelInfo.html'
	});
	$('#Role').off('click').on('click', function() {
		window.location.href = '../roleInfoManagement/rolePrivileges.html'
	});
	$('#Managements').off('click').on('click', function() {
		window.location.href = '../ManagementPrivilegeAuthorityManagement/ManagementPrivilegeAuthorityManagement.html'
	});
	$('#Operators').off('click').on('click', function() {
		window.location.href = '../OperatorRightsManagement/OperatorRightsManagement.html'
	});


	$('.mail').click(function() {
		alert('暂无功能，待实现');
	});
	$('.logInAndOut').click(function() {
		var out = confirm('是否确认注销？');
		if (out) {
			window.location.href = "../registerPage.html";
			alert('注销成功！');
		}
	});
	// selectTime(1);
	$("#begin").val("1980-01-01");
	var data = new Date();
	var an = new Date(data.getTime());
	var nn = dateFormat(an.getFullYear() + "-" + (an.getMonth() + 1) + "-" + an.getDate())
	$("#finish").val(nn);
	$("#begin").attr("disabled", "disabled");
	$("#finish").attr("disabled", "disabled");

	all(1);

// 全选不全新
	layui.use('form', function() {
		var form = layui.form;
		form.render('checkbox');
		form.on('checkbox(Staff)', function(data) {
			//得到美化后的DOM对象
			if (data.value == 'all') {
				console.log('全选');
				var a = data.elem.checked;
				if (a == true) {
					$(".otherCheck").prop("checked", true);
					form.render('checkbox');
				} else {
					$(".otherCheck").prop("checked", false);
					form.render('checkbox');
				}
			}
		});
// -------------------------------------------------------------------

		form.on('select(fangxiang)', function(data) {
			var value = data.value;
			if (value == '1') {
				$("#begin").val("1900-01-01");
				var data = new Date();
				var an = new Date(data.getTime() + 86400000);
				var nn = dateFormat(an.getFullYear() + "-" + (an.getMonth() + 1) + "-" + an.getDate())
				$("#finish").val(nn);
				$("#begin").attr("disabled", "disabled");
				$("#finish").attr("disabled", "disabled");
			} else if (value == '2') {
				var date = new Date();
				var n = new Date(date.getTime() - 86400000 * 1095);
				var a = dateFormat(n.getFullYear() + "-" + (n.getMonth() + 1) + "-" + n.getDate());
				$("#begin").val(a);
				var data = new Date();
				var an = new Date(data.getTime());
				var nn = dateFormat(an.getFullYear() + "-" + (an.getMonth() + 1) + "-" + an.getDate())
				$("#finish").val(nn);
				$("#begin").attr("disabled", "disabled");
				$("#finish").attr("disabled", "disabled");
			} else if (value == '3') {
				var date = new Date();
				var n = new Date(date.getTime() - 86400000 * 365);
				var a = dateFormat(n.getFullYear() + "-" + (n.getMonth() + 1) + "-" + n.getDate());
				$("#begin").val(a);
				var data = new Date();
				var an = new Date(data.getTime());
				var nn = dateFormat(an.getFullYear() + "-" + (an.getMonth() + 1) + "-" + an.getDate())
				$("#finish").val(dateFormat(data));
				$("#begin").attr("disabled", "disabled");
				$("#finish").attr("disabled", "disabled");
			} else if (value == '4') {
				var date = new Date();
				var n = new Date(date.getTime() - 86400000 * 182);
				var a = dateFormat(n.getFullYear() + "-" + (n.getMonth() + 1) + "-" + n.getDate());
				$("#begin").val(a);
				var data = new Date();
				var an = new Date(data.getTime());
				var nn = dateFormat(an.getFullYear() + "-" + (an.getMonth() + 1) + "-" + an.getDate())
				$("#finish").val(dateFormat(data));
				$("#begin").attr("disabled", "disabled");
				$("#finish").attr("disabled", "disabled");
			} else if (value == '5') {
				var date = new Date();
				var n = new Date(date.getTime() - 86400000 * 91);
				var a = dateFormat(n.getFullYear() + "-" + (n.getMonth() + 1) + "-" + n.getDate());
				$("#begin").val(a);
				var data = new Date();
				var an = new Date(data.getTime());
				var nn = dateFormat(an.getFullYear() + "-" + (an.getMonth() + 1) + "-" + an.getDate())
				$("#finish").val(dateFormat(data));
				$("#begin").attr("disabled", "disabled");
				$("#finish").attr("disabled", "disabled");
			} else if (value == '6') {
				var date = new Date();
				var n = new Date(date.getTime() - 86400000 * 30);
				var a = dateFormat(n.getFullYear() + "-" + (n.getMonth() + 1) + "-" + n.getDate());
				$("#begin").val(a);
				var data = new Date();
				var an = new Date(data.getTime());
				var nn = dateFormat(an.getFullYear() + "-" + (an.getMonth() + 1) + "-" + an.getDate())
				$("#finish").val(dateFormat(data));
				$("#begin").attr("disabled", "disabled");
				$("#finish").attr("disabled", "disabled");
			} else if (value == '7') {
				var date = new Date();
				var n = new Date(date.getTime() - 86400000 * 7);
				var a = dateFormat(n.getFullYear() + "-" + (n.getMonth() + 1) + "-" + n.getDate());
				$("#begin").val(a);
				var data = new Date();
				var an = new Date(data.getTime());
				var nn = dateFormat(an.getFullYear() + "-" + (an.getMonth() + 1) + "-" + an.getDate())
				$("#finish").val(dateFormat(data));
				$("#begin").attr("disabled", "disabled");
				$("#finish").attr("disabled", "disabled");
			} else if (value == '8') {
				$("#begin").val("");
				$("#finish").val("");
				$("#begin").removeAttr("disabled");
				$("#finish").removeAttr("disabled");
			}
		});
	});

	$('#selectc').change(() => {
		layui.use('form', function() {
			var form = layui.form; //只有执行了这一步，部分表单元素才会自动修饰成功
			form.render();
		});
		layui.use(['layer', 'form'], function() {
			layui.form.render('select');
		});
	})

	$("#SelectButton").click(function() {
		var begin = $("#begin").val();
		var beginOne = (new Date(begin)).getTime();
		var finish = $("#finish").val();
		var finishOne = (new Date(finish)).getTime();
		if (beginOne <= finishOne) {
			selectCondition(10, 1);
			layui.use(['layer', 'form'], function() {
				layui.form.render('select');
			});
		} else {
			alert("日期错误");
		}

	})
})
var all = function(pagenum) {
	var begin = new Date($("#begin").val()).getTime();
	var finish = new Date($("#finish").val()).getTime();
	$.ajax({
		url: 'http://' + ip + ':8888/manage_system/LogInfo/all',
		data: {
			'pagesize': 10,
			'pagenum': pagenum,
			'fromTime': begin,
			'endTime': finish
		},
		dataType: 'json',
		type: 'GET',
		contentType: 'application/json;charset=utf-8',
		success(res) {
			var Html = [];
			var record = 1;
			res.list.forEach(function(item, indeSx) {
				Html.push(' <tr class="tou">');
				Html.push(
					'<td pane><input name="All" type="checkbox"  lay-skin="primary" lay-filter="Staff" class="otherCheck" value="other"></td>')
				Html.push('<td>' + record + '</td>');
				Html.push('<td class="userName">' + item.userName + '</td>');
				var logType;
				if (item.logType == '1') {
					logType = '登陆';
				}
				Html.push('<td>' + logType + '</td>');
				Html.push('<td>' + item.macCode + '</td>');
				Html.push('<td>' + dateFormata(item.logTime) + '</td>');
				Html.push('<td>' + item.masIp + '</td>');
				Html.push('<td>' + item.logDescription + '</td>');
				record++;
			})
			$('.TableContent').html(Html.join(''));
			// trainschemesPage(res.total,res.pageNum,res.pageSize);
			if(res.total > 10){
				Page(res);
			}
			layui.use('form', function() {
				var form = layui.form;
				//从文档上复制的好像没有这句
				form.render();
				//监听提交
				form.on('submit(formDemo)', function(data) {
					layer.msg(JSON.stringify(data.field));
					return false;
				});
			});
		}
	})
}

var Page = function(data) {
	layui.use('laypage', function() {
		var laypage = layui.laypage;
		//执行一个laypage实例
		laypage.render({
			elem: 'Page' //注意，这里的 test1 是 ID，不用加 # 号
				,
			count: data.total //数据总数，从服务端得到
				,
			limit: '10',
			theme: '#1E9FFF',
			curr: data.pageNum,
			groups: '5',
			jump: function(item, first) {
				if (!first) {
					all(item.curr);
				}
			}
		});
	});
};


var selectCondition = function(pagesize, pagenum) {
	var spinner = $("#spinner").val();
	var begin = $("#begin").val();
	var beginOne = (new Date(begin)).getTime();
	var finish = $("#finish").val();
	var finishOne = (new Date(finish)).getTime();
	$.ajax({
		url: 'http://' + ip + ':8888/manage_system/LogInfo/all',
		data: {
			'pagesize': pagesize,
			'pagenum': pagenum
		},
		dataType: 'json',
		type: 'GET',
		contentType: 'application/json;charset=utf-8',
		success(res) {
			var Html = [];
			var record = 1;
			res.list.forEach(function(item, indeSx) {
				if (spinner == item.userName || spinner == "") {
					var boss = dateFormat(item.logTime);
					var bossOne = (new Date(boss)).getTime();
					if ((bossOne >= beginOne && bossOne <= finishOne)) {
						Html.push(' <tr class="tou">');
						Html.push(
							'<td pane><input name="All" type="checkbox"  lay-skin="primary" lay-filter="Staff" value="all"></td>')
						Html.push('<td>' + record + '</td>');
						Html.push('<td>' + item.userName + '</td>');
						var logType;
						if (item.logType == '1') {
							logType = '登陆';
						}
						Html.push('<td>' + logType + '</td>');
						Html.push('<td>' + item.macCode + '</td>');
						Html.push('<td>' + dateFormata(item.logTime) + '</td>');
						Html.push('<td>' + item.masIp + '</td>');
						Html.push('<td>' + item.logDescription + '</td>');
						record++;
					}
				}
			})
			$('.TableContent').html(Html.join(''));
			if(res.total > 10){
				Page(res);
			}
			$('.userId').hide();
			layui.use('element', function() {
				var element = layui.element;
				element.init();
			});
			layui.use('form', function() {
				var form = layui.form;
				//从文档上复制的好像没有这句
				form.render();
				//监听提交
				form.on('submit(formDemo)', function(data) {
					layer.msg(JSON.stringify(data.field));
					return false;
				});
			});
			layui.use('form', function() {
				var form = layui.form; //只有执行了这一步，部分表单元素才会自动修饰成功
				form.render();
			});
		}
	})
}
var dateFormata = function(time) {
	var date = new Date(time);
	/* 在日期格式中，月份是从0开始的，因此要加0
	 * 使用三元表达式在小于10的前面加0，以达到格式统一  如 09:11:05
	 * */
	var year = date.getFullYear();
	var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
	var day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();
	// 拼接
	return year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds;
}
var dateFormat = function(time) {
	var date = new Date(time);
	var year = date.getFullYear();
	/* 在日期格式中，月份是从0开始的，因此要加0
	 * 使用三元表达式在小于10的前面加0，以达到格式统一  如 09:11:05
	 * */
	var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
	var day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
	var hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
	var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
	var seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
	// 拼接
	return year + "-" + month + "-" + day;
}

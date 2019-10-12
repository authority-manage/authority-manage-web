$(function() {
 	groupRoleselect();
 	$('.selectGroup').click(function() {
 		groupRoleselect();
 	})
 	$('.addRoleUser').click(function() {

 		roleGroupAdd();

 	})
 	$('.endRoleUser').click(function() {
 		var index = parent.layer.getFrameIndex(window.name);
 		parent.layer.close(index); //关闭当前页
 		parent.location.reload()
 	})
 })

 layui.use('form', function() {
 	var form = layui.form;
 	//全选
 	form.on('checkbox(c_all)', function(data) {
 		var a = data.elem.checked;
 		if (a == true) {
 			$(".checkboxGroupSelect").prop("checked", true);
 			form.render('checkbox');
 		} else {
 			$("checkboxGroupSelect").prop("checked", false);
 			form.render('checkbox');
 		}

 	})

 })
 
 var thisUrl = decodeURI(document.URL)
 var roleId = thisUrl.split('?')[1].split('=')[1];
 var roleGroupAdd = function() {
	var Record = 0;
 	$.each($("[name='Staff']:checked"), function(i, val) {
 		var userId = val.value;
 		$.ajax({
 			url: 'http://'+ ip +':8888/manage_system/RoleJRoleModel/selectGroupById',
 			data: {
 				'groupId': userId
 			},
 			dataType: 'json',
 			type: 'GET',
 			success: function(res) {
 				var groupRoleId = res[0].roleId;
 				console.log(groupRoleId)
 				if (res[0].roleId == ''||res[0].roleId == null) {
 					groupRoleId += roleId;
					console.log(groupRoleId)
 				} else {
 					groupRoleId +="," + roleId;
					console.log(groupRoleId)
 				}
 				$.ajax({
 					url: 'http://' + ip + ':8888/manage_system/RoleJRoleModel/updateGroupinfoRoleId',
 					data: {
 						'roleId': groupRoleId,
 						'groupId': userId
 					},
					async: false,
 					dataType: 'json',
 					type: 'POST',
 					// contentType: 'application/json;charset=utf-8',
 					success: function(res) {
							Record++;
 					}
 				})
 			},
 		})
 		//第一个参数表示索引下标，第二个参数表示当前索引元素
 	})
	if (Record >=  1) {
		alert('添加成功')
		var indexa = parent.layer.getFrameIndex(window.name);
		parent.layer.close(indexa); //关闭当前页
		parent.location.reload()
	} else {
		alert('添加失败')
		var indexa = parent.layer.getFrameIndex(window.name);
		parent.layer.close(indexa); //关闭当前页
		parent.location.reload()
	}
 }

 var groupRoleselect = function() {

 	console.log($('.groupName').val())
 	var aaaa = $('.groupName').val();
 	if (aaaa = ' ') {
 		aaaa = null;
 	}

 	$.ajax({
 		url: 'http://' + ip + ':8888/manage_system/RoleJRoleModel/selectRoleGroupAll',
 		data: {
 			'roleId': roleId,
 			'groupName': aaaa
 		},
 		dataType: 'json',
 		type: 'GET',
 		contentType: 'application/json;charset=utf-8',
 		success: function(res) {
 			var Html = [];
 			res.forEach(function(item, index) {
 				Html.push('<tr style="text-align: center;">')
 				Html.push(
 					'<th style="text-align: center;"><input class = "checkboxGroupSelect" name="Staff" type="checkbox"  lay-skin="primary" lay-filter="Staff" value="' +
 					item.groupId +
 					'"></th>')
 				Html.push('<th style="text-align: center;">' + item.groupName + '</th>')
 				Html.push('<th style="text-align: center;">' + item.groupDescription + '</th>')
 				Html.push('</tr>')
 			})
 			$('.TableContent').html(Html.join(''));
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
 		},
 	})

 }

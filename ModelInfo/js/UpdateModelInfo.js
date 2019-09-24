$(function() {
	var query = location.search.substring(1);
	var values = query.split("&");
	for (var i = 0; i < values.length; i++) {
		var pos = values[i].indexOf('=');
		if (pos == -1) continue;
		var paramname = values[i].substring(0, pos);
		var value = values[i].substring(pos + 1);
	};
	selectAllModelInfo(value);
	selectModelInfo(value);
	$('#exit').click(function() {
		var index = parent.layer.getFrameIndex(window.name);
		parent.layer.close(index);
	})
	$('#ok').click(function() {
		if ($('#modelName').val() == '') {
			alert('请填写模块名');
		} else {
			if ($('#selectModelId').val() == value) {
				alert('亲，不能自己选自己');
			} else {
				if ($('#selectModelId').val() == 0){
					updateModelInfo(value);
				} else {
					checkSon(value);
				}
			}
		}
	})
});
var updateModelInfo = function(value) {
	var modelName = $('#modelName').val();
	var parentId = $('#selectModelId').val();
	var data = {
		'modelId': value,
		'modelName': modelName,
		'parentId': parentId
	};

	$.ajax({
		url: 'http://localhost:8888/manage_system/modelInfo/updateModelInfo',
		data: data,
		dataType: 'json',
		type: 'POST',
		success(res) {
			alert('修改成功！');
			var index = parent.layer.getFrameIndex(window.name);
			parent.layer.close(index);
			parent.location.reload();
		}
	});


}
var selectModelInfo = function(value) {
	var Html = [];
	$.ajax({
		url: 'http://localhost:8888/manage_system/modelInfo/selectModelInfo',
		data: {
			'modelId': value
		},
		dataType: 'json',
		type: 'GET',
		success(res) {
			$('#modelName').val(res.data.modelName);
			$('#selectModelId').val(res.data.parentId);
		}
	});
}
var selectAllModelInfo = function(value) {
	var Html = [];
	$.ajax({
		url: 'http://localhost:8888/manage_system/modelInfo/selectAllModelInfoList',
		data: '',
		dataType: 'json',
		type: 'GET',
		success(res) {
			Html.push('<option value="0">顶级父级</option>');
			res.data.forEach(function(item, index) {
				Html.push('<option value="' + item.modelId + '">' + item.modelName + '</option>');
			});
			$('#selectModelId').html(Html.join(''));
		}
	});
};
// 判断不能选择自己的子集
var checkSon = function(value){
	// value 是本身ID
	// parentId是选择上级部门的ID
	var parentId = $('#selectModelId').val();
	$.ajax({
		url: 'http://localhost:8888/manage_system/modelInfo/checkSon',
		data: {
			'parentId': parentId,
			'modelId': value
		},
		dataType: 'json',
		type: 'GET',
		success(res) {
			console.log(res.code);
			if (parentId != value) {
				if (res.code != 88) {
					console.log("%c成功了" , "color: red");
					updateModelInfo(value);
				} else {
					alert("不能选择自己的子集！");
				}
			}
		}
	});
}
function Update_EntrustmentBook(obj) {
	var json_list = EntrustmentBook_json;
	var jc = $
			.confirm({
				title : '痕迹检验鉴定委托书（修改）',
				content : '',
				type : 'blue',
				columnClass : 'col-md-12',
				onOpenBefore : function() {
				},
				onContentReady : function() {
					for (var num = 0; num < json_list.listEntrustmentBookManagementDTO.length; num++) {
						if (obj.id == json_list.listEntrustmentBookManagementDTO[num].xsjsglxt_check_entrustment_book.xsjsglxt_check_entrustment_book_id) {
							break;
						}
					}
					var con = '<input value="'
							+ json_list.listEntrustmentBookManagementDTO[num].xsjsglxt_check_entrustment_book.xsjsglxt_check_entrustment_book_id
							+ '"  class="form-control" id="update_xsjsglxt_check_entrustment_book_id" style="display:none;"/>'
							+ '<hr>'
							+ '<h3>委托人声明</h3>'
							+ '<h4>本人忠于事实真相，送检的检材/样本/材料真实。如有虚假，愿意承担相关法律责任.</h4>'
							+ '<hr style="margin:30px 0;">'
							+ '<table  class="table table-bordered" style="text-align: center;">'
							+ '<tbody><tr>'
							+ '<td><i class="fa fa-warning" style="color:#D9534F;"></i> 负责人：</td><td><input value="'
							+ json_list.listEntrustmentBookManagementDTO[num].xsjsglxt_check_entrustment_book.check_entrustment_book_responsible_person
							+ '"  class="form-control" id="update_check_entrustment_book_responsible_person" /></td>'
							+ '<td><i class="fa fa-warning" style="color:#D9534F;"></i> 委托单位：</td><td><input value="'
							+ json_list.listEntrustmentBookManagementDTO[num].xsjsglxt_check_entrustment_book.check_entrustment_book_entrustment_unit
							+ '"  class="form-control" id="update_check_entrustment_book_entrustment_unit" /></td>'
							+ '<td><i class="fa fa-warning" style="color:#D9534F;"></i> 委托时间：</td><td><input value="'
							+ json_list.listEntrustmentBookManagementDTO[num].xsjsglxt_check_entrustment_book.check_entrustment_book_inspect_time
							+ '" class="form-control" id="update_check_entrustment_book_inspect_time" /></td></tr>'
							+ '</tbody>'
							+ '</table>'
							+ '<br>'
							+ '<br>'
							+ '<table  class="table table-bordered" style="text-align: center;">'
							+ '<tbody>'
							+ '<tr><td>送检人</td><td><i class="fa fa-warning" style="color:#D9534F;"></i> 姓名</td><td><i class="fa fa-warning" style="color:#D9534F;" ></i> 职务</td><td><i class="fa fa-warning" style="color:#D9534F;"></i> 证件名称及号码</td></tr>'
							+ '<tr><td>送检人一：</td><td><input id="update_check_entrustment_book_inspectors1_name" class="form-control" value="'
							+ json_list.listEntrustmentBookManagementDTO[num].xsjsglxt_check_entrustment_book.check_entrustment_book_inspectors1_name
							+ '"/></td><td><input id="update_check_entrustment_book_inspectors1_duty"  class="form-control" value="'
							+ json_list.listEntrustmentBookManagementDTO[num].xsjsglxt_check_entrustment_book.check_entrustment_book_inspectors1_duty
							+ '"/></td><td><input id="update_check_entrustment_book_inspectors1_jobcard_number"  class="form-control" value="'
							+ json_list.listEntrustmentBookManagementDTO[num].xsjsglxt_check_entrustment_book.check_entrustment_book_inspectors1_jobcard_number
							+ '"/></td></tr>'
							+ '<tr><td>送检人二：</td><td><input id="update_check_entrustment_book_inspectors2_name"  class="form-control" value="'
							+ json_list.listEntrustmentBookManagementDTO[num].xsjsglxt_check_entrustment_book.check_entrustment_book_inspectors2_name
							+ '"/></td><td><input  id="update_check_entrustment_book_inspectors2_duty" class="form-control" value="'
							+ json_list.listEntrustmentBookManagementDTO[num].xsjsglxt_check_entrustment_book.check_entrustment_book_inspectors2_duty
							+ '"/></td><td><input  id="update_check_entrustment_book_inspectors2_jobcard_number" class="form-control" value="'
							+ json_list.listEntrustmentBookManagementDTO[num].xsjsglxt_check_entrustment_book.check_entrustment_book_inspectors2_jobcard_number
							+ '"/></td></tr>'
							+ '</tbody>'
							+ '</table>'
							+ '<table  class="table table-bordered" style="text-align: center;">'
							+ '<tbody>'
							+ '<tr><td>通讯地址：</td><td><input class="form-control" id="update_check_entrustment_book_communication_address" value="'
							+ json_list.listEntrustmentBookManagementDTO[num].xsjsglxt_check_entrustment_book.check_entrustment_book_communication_address
							+ '"/></td><td>邮政编码：</td><td><input class="form-control" id="update_check_entrustment_book_zip_code" value="'
							+ json_list.listEntrustmentBookManagementDTO[num].xsjsglxt_check_entrustment_book.check_entrustment_book_zip_code
							+ '"/></td></tr>'
							+ '<tr><td>联系电话：</td><td><input class="form-control" id="update_check_entrustment_book_phone" value="'
							+ json_list.listEntrustmentBookManagementDTO[num].xsjsglxt_check_entrustment_book.check_entrustment_book_phone
							+ '"/></td><td>传真号码：</td><td><input class="form-control" id="update_check_entrustment_book_fax_num" value="'
							+ json_list.listEntrustmentBookManagementDTO[num].xsjsglxt_check_entrustment_book.check_entrustment_book_fax_num
							+ '"/></td></tr>'
							+ '</tbody>'
							+ '</table>'
							+ '<br>'
							+ '<br>'
							+ '<table  class="table table-bordered" style="text-align: center;">'
							+ '<tbody>'
							+ '<tr><td><i class="fa fa-warning" style="color:#D9534F;"></i> 被委托鉴定机构名称：</td>'
							+ '<td><select class="form-control" id="update_check_entrustment_book_entrustment_unit_name"></select></td></tr>'
							+ '</tbody>'
							+ '</table>'
							+ '<br>'
							+ '<br>'
							+ '<table  class="table table-bordered" style="text-align: center;">'
							+ '<tbody>'
							+ '<tr><td><i class="fa fa-warning" style="color:#D9534F;"></i> 案（事）件名称：</td>'
							+ '<td><input class="form-control" id="update_check_entrustment_book_case_name" value="'
							+ json_list.listEntrustmentBookManagementDTO[num].xsjsglxt_check_entrustment_book.check_entrustment_book_case_name
							+ '"/></td></tr>'
							+ '<tr><td>案件编号：</td>'
							+ '<td><input class="form-control" id="update_check_entrustment_book_case_num" value="'
							+ json_list.listEntrustmentBookManagementDTO[num].xsjsglxt_check_entrustment_book.check_entrustment_book_case_num
							+ '"/></td></tr>'
							+ '<tr><td><i class="fa fa-warning" style="color:#D9534F;"></i> 简要案情：</td>'
							+ '<td><textarea class="form-control" style="resize: none;height:100px;" id="update_check_entrustment_book_simple_case_situation" >'
							+ json_list.listEntrustmentBookManagementDTO[num].xsjsglxt_check_entrustment_book.check_entrustment_book_simple_case_situation
							+ '</textarea></td></tr>'
							+ '</tbody>'
							+ '</table>'
							+ '<br>'
							+ '<br>'
							+ '<h4>原鉴定情况：</h4>'
							+ '<textarea class="form-control" style="resize: none;height:100px;" id="update_check_entrustment_book_old_entrustment_situation" >'
							+ json_list.listEntrustmentBookManagementDTO[num].xsjsglxt_check_entrustment_book.check_entrustment_book_old_entrustment_situation
							+ '</textarea>'
							+ '<br>'
							+ '<br>'
							+ '<h4><i class="fa fa-warning" style="color:#D9534F;"></i> 送检的检材和样本等情况（包括名称、数量、性状、包装，检材提取部位和方法等）：</h4>'
							+ '<textarea class="form-control" style="resize: none;height:100px;" id="update_check_entrustment_book_sample_situation" >'
							+ json_list.listEntrustmentBookManagementDTO[num].xsjsglxt_check_entrustment_book.check_entrustment_book_sample_situation
							+ '</textarea>'
							+ '<br>'
							+ '<br>'
							+ '<h4><i class="fa fa-warning" style="color:#D9534F;"></i> 鉴定要求</h4>'
							+ '<textarea class="form-control" style="resize: none;height:100px;" id="update_check_entrustment_book_entrustment_request" >'
							+ json_list.listEntrustmentBookManagementDTO[num].xsjsglxt_check_entrustment_book.check_entrustment_book_entrustment_request
							+ '</textarea>' + '<br>' + '<hr>';
					jc.setContentAppend(con);
					/*
					 * 
					 */
					var update_check_entrustment_book_entrustment_unit_name = document
							.getElementById("update_check_entrustment_book_entrustment_unit_name");
					switch (json_list.listEntrustmentBookManagementDTO[num].xsjsglxt_check_entrustment_book.check_entrustment_book_entrustment_unit_name) {
					case '萍乡市公安司法鉴定中心': {
						update_check_entrustment_book_entrustment_unit_name.innerHTML = '<option value="萍乡市公安司法鉴定中心" selected="selected">萍乡市公安司法鉴定中心</option>'
								+ '<option value="萍乡市公安局物证鉴定所">萍乡市公安局物证鉴定所</option>'
								+ '<option value="萍乡市安源区公安司法鉴定中心">萍乡市安源区公安司法鉴定中心</option>'
								+ '<option value="江西省公安厅物证鉴定中心">江西省公安厅物证鉴定中心</option>'
								+ '<option value="公安部物证鉴定中心">公安部物证鉴定中心</option>';
						break;
					}
					case '萍乡市公安局物证鉴定所': {
						update_check_entrustment_book_entrustment_unit_name.innerHTML = '<option value="萍乡市公安司法鉴定中心">萍乡市公安司法鉴定中心</option>'
								+ '<option value="萍乡市公安局物证鉴定所"  selected="selected">萍乡市公安局物证鉴定所</option>'
								+ '<option value="萍乡市安源区公安司法鉴定中心">萍乡市安源区公安司法鉴定中心</option>'
								+ '<option value="江西省公安厅物证鉴定中心">江西省公安厅物证鉴定中心</option>'
								+ '<option value="公安部物证鉴定中心">公安部物证鉴定中心</option>';
						break;
					}
					case '萍乡市安源区公安司法鉴定中心': {
						update_check_entrustment_book_entrustment_unit_name.innerHTML = '<option value="萍乡市公安司法鉴定中心">萍乡市公安司法鉴定中心</option>'
								+ '<option value="萍乡市公安局物证鉴定所">萍乡市公安局物证鉴定所</option>'
								+ '<option value="萍乡市安源区公安司法鉴定中心" selected="selected">萍乡市安源区公安司法鉴定中心</option>'
								+ '<option value="江西省公安厅物证鉴定中心">江西省公安厅物证鉴定中心</option>'
								+ '<option value="公安部物证鉴定中心">公安部物证鉴定中心</option>';
						break;
					}
					case '江西省公安厅物证鉴定中心': {
						update_check_entrustment_book_entrustment_unit_name.innerHTML = '<option value="萍乡市公安司法鉴定中心">萍乡市公安司法鉴定中心</option>'
								+ '<option value="萍乡市公安局物证鉴定所">萍乡市公安局物证鉴定所</option>'
								+ '<option value="萍乡市安源区公安司法鉴定中心">萍乡市安源区公安司法鉴定中心</option>'
								+ '<option value="江西省公安厅物证鉴定中心" selected="selected">江西省公安厅物证鉴定中心</option>'
								+ '<option value="公安部物证鉴定中心">公安部物证鉴定中心</option>';
						break;
					}
					case '公安部物证鉴定中心': {
						update_check_entrustment_book_entrustment_unit_name.innerHTML = '<option value="萍乡市公安司法鉴定中心">萍乡市公安司法鉴定中心</option>'
								+ '<option value="萍乡市公安局物证鉴定所">萍乡市公安局物证鉴定所</option>'
								+ '<option value="萍乡市安源区公安司法鉴定中心">萍乡市安源区公安司法鉴定中心</option>'
								+ '<option value="江西省公安厅物证鉴定中心">江西省公安厅物证鉴定中心</option>'
								+ '<option value="公安部物证鉴定中心"  selected="selected">公安部物证鉴定中心</option>';
						break;
					}

					}

					/*
					 * 
					 */

				},
				buttons : {
					'确认修改' : {
						btnClass : 'btn-blue',
						action : function() {
							updateTranceCheckBook(jc, obj);

							return false;
						}
					},
					'返回' : function() {
						jc.close();
						Preview_EntrustmentBook(obj);
					}
				}
			});
}
function updateTranceCheckBook(jc, obj) {
	var xhr = false;
	xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		var message;
		if (xhr.readyState == 4) {
			if (xhr.status == 200) {
				console.debug(xhr.responseText);
				if (xhr.responseText == 1) {
					toastr.success("修改成功");
					jc.close();
					List_EntrustmentBook(1);
					Preview_EntrustmentBook(obj);
				} else {
					toastr.error("填写格式错误");
				}
			} else {
				toastr.error(xhr.status);
			}
		}
	}
	/*
	 * 
	 */
	var formData = new FormData();

	/*
	 * 
	 */
	xhr
			.open("POST",
					"/xsjsglxt/inspectionIdentific/EntrustmentBookManagement_updateTranceCheckBook");
	xhr.send(formData);
}
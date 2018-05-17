<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="/struts-tags" prefix="s"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>
<title>经费管理</title>
</head>
<body>
	<!-----------------------------------------引入导航条 ------------------------------------------------------>
	<s:action name="User_navbar" namespace="/user" executeResult="true" />
	<jsp:include page="/technologyManager.jsp" flush="true"></jsp:include>
	<!-----------------------------------------主体内容 -------------------------------------------------------->
	<div id="allPanel">
		<div class="panel" style="width: 95%; margin: 20px auto;">
			<div style="padding: 10px;">
				<button class="btn btn-default managerRole" onclick="">
					<i class="fa fa-pencil-square-o"></i>增加报账
				</button>
				<div id="query" style="float: right;">
					<label>时间筛选</label> <input class="form-control startTime"
						onchange="" type="text" id="timeStart"
						style="width: 150px; display: inline-block;">至 <input
						class="form-control startTime" onchange="" type="text"
						style="width: 150px; display: inline-block;" id="timeEnd">
				</div>
			</div>
			<div id="loadingLayer"
				style="margin: 0 auto; width: 45px; display: none;">
				<i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>
			</div>
			<div id="allInformation" style="margin-top: 10px;">
				<table class="table table-hover table-condensed"
					style="text-align: center;">
					<thead>
						<tr>
							<td><input class="form-control" placeholder="姓名"></td>
							<td><select class="form-control">
									<option value="">经费种类</option>
									<option value="出差">出差</option>
									<option value="学习">学习</option>
									<option value="误餐">误餐</option>
									<option value="特情">特情</option>
									<option value="其他">其他</option>
							</select></td>
							<td><select class="form-control">
									<option value="desc">报账时间（降序）</option>
									<option value="asc">报账时间（升序）</option>
							</select></td>
							<td><input placeholder="所属中队" class="form-control"></td>
							<td>金额</td>
							<td>操作</td>
						</tr>
					</thead>
					<tbody>

					</tbody>
				</table>
				<div id="bottomPage" style="padding: 20px;">
					<span>当前页数:<span id="currPage"></span></span> <span>共:<span
						id="totalPage"></span>页
					</span><span>共:<span id="totalCount"></span>条记录数
					</span> <span onclick="skipToIndexPage()" id="indexPage"
						class="pageOperation">首页</span> <span
						onclick="skipToPrimaryPage()" id="previousPage"
						class="pageOperation">上一页</span> <span onclick="skipToNextPage()"
						id="nextPage" class="pageOperation">下一页</span> <span
						onclick="skipToLastPage()" id="lastPage" class="pageOperation">末页</span>
					<span> <input id="skipPage" class="form-control" type="text"
						style="display: inline-block; text-align: center; width: 60px; height: 30px;"
						class="queryInput">
						<button onclick="skipToArbitrarilyPage()" class="btn btn-default"
							style="height: 30px;">跳转</button>
					</span>
				</div>
			</div>
		</div>
	</div>
</body>
<script type="text/javascript">
	$.datetimepicker.setLocale('ch');
	$('.startTime').datetimepicker({
		yearStart : 1900, // 设置最小年份
		yearEnd : 2100, // 设置最大年份
		yearOffset : 0, // 年偏差
		timepicker : false, // 关闭时间选项
		format : 'Y-m-d', // 格式化日期年-月-日
		minDate : '1900/01/01', // 设置最小日期
		maxDate : '2100/01/01', // 设置最大日期
	});
</script>
<script type="text/javascript">
	var documentWidth = document.body.clientWidth;
	var panelWidth = documentWidth - 160;
	var navbarHeight = document.getElementById("navbar").offsetHeight;
	var panelMargin = navbarHeight + 20;
	document.getElementById("allPanel").setAttribute(
			"style",
			"width:" + panelWidth + "px; float:right; margin-top:"
					+ panelMargin + "px;");
	window.onresize = function() {
		var documentWidth = document.body.clientWidth;
		var panelWidth = documentWidth - 160;
		var navbarHeight = document.getElementById("navbar").offsetHeight;
		var panelMargin = navbarHeight + 20;
		document.getElementById("allPanel").setAttribute(
				"style",
				"width:" + panelWidth + "px; float:right; margin-top:"
						+ panelMargin + "px;");
	}
</script>
</html>
<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
 <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
 <%@ page import ="java.util.*" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">
<!--  ck editor setting -->
<script type="text/javascript" src = "./ckeditor.js"></script>
</head>
<body>
	<!-- editor ���� -->
	<textarea class="ckeditor" id="editor" name="editor"></textarea>
	<input id="transfer" type="text" style="display:none;" value="">	<!-- �ػ�ũ�ο� �� ������ element -->
	
	<script type="text/javascript">
		CKEDITOR.replace("editor", {
			height : 680
		});
		
	</script>
	
	<!-- function script -->
	<script>
		var editor;
	    CKEDITOR.on("instanceReady", function(ev) {
	        editor = ev.editor;
	    });
		   
		//������Լ�
	    function getContent() {
			var content = editor.getData();
			document.getElementById("transfer").value = content;
		}
	</script>
	
</body>
</html>
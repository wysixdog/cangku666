<script type = "text/javascript" >
    var ajax_option={
        url: 127.0.0.1:8081/shangchuan.html,              
        type:GET,             
        dataType: null,   
        clearFomr: true,  
        resetFomr: true,  
        timeout: 3000,    //number，单位ms，限制请求的时间，当请求大于设置的时间后，跳出请求
        success:function(responseText,statusText,xhr,$form){
            console.log(responseText);
            
        },
        beforSubmit: function(formData, jqForm, options){
            console.log(formData);
            //业务提示
        },/
    };
 
    //表单提交事件
    $('#imageForm').submit(function(){
        $("#imageForm").ajaxSubmit(ajax_option);
        return false;
    })
</script>
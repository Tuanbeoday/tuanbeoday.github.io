function htt_orion(){

setTimeout(function(){


swal({  

 title: "Bạn nhận được một món quà !",   
text: "Lê Văn Tuấn vừa gửi bạn một món quà đặc biệt nhân ngày sinh nhật của bạn ", 
 imageUrl: "https://graph.https://scontent.fhan3-3.fna.fbcdn.net/v/t1.6435-9/134364276_396686741612517_5565674842151106908_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=174925&_nc_ohc=0sRRWRKKHwgAX8IIVAw&_nc_ht=scontent.fhan3-3.fna&oh=13c5c9fd9b95606f9147927ebe133ada&oe=616BD31B.com/100004061834192/picture?type=large",
  showCancelButton: true,
   confirmButtonColor: "#DD6B55", 
  confirmButtonText: "Nhận quà ngay",
   cancelButtonText: "Không cần, cám ơn .", 
  closeOnConfirm: false,  
 closeOnCancel: false }, 
function(isConfirm){  
 if (isConfirm) {   
 

swal({  
 title: "Bạn có phải là Khánh Linh ? ", 
  text: "Nhập mã xác nhận ",  
 type: "input",  
 showCancelButton: true,  
 closeOnConfirm: false,   
 showLoaderOnConfirm: true,
animation: "slide-from-top",  
 inputPlaceholder: "Mã xác nhận là gì ?" },
 function(inputValue){   
if (inputValue === false) return false;   
   if (inputValue !== "1909") {   
  swal.showInputError("Nhập sai rồi kìa :v ");   
  return false   }   
 
setTimeout(function(){


swal({  
 title: "Nhập tên món quà nào đó ", 
  text: "Linh muốn nhận quà gì nào ? ",  
 type: "input",  
 showCancelButton: true,  
 closeOnConfirm: false,   
animation: "slide-from-top",  

 inputPlaceholder: "Xe SH , IPhone 13 pro max , Vertu, Tún :> .... " },
 function(inputValue){   
if (inputValue === false) return false;   
   if (inputValue === "") {   
  swal.showInputError("Không thể để trống được ");   
  return false   }  
 swal("OK ! ", "Món quà : " + inputValue + " sẽ tặng cho Linh trong 10s nữa hãy đợi nhé, Chúc một ngày Sinh Nhật thật Vui Vẻ nhé. Love You^^   ", "success"); });


},3000);



});

 }
else {   
  swal("KHÔNG NHẬN ", "Bạn vừa từ chối món quà từ HUỲNH THANH TÙNG ,    Ấn F5 nếu muốn nhận lại quà :D ", "error"); 

  } });



},8000);
}
htt_orion();


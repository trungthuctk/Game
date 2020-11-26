 // Định nghĩa một mảng các phần tử sẽ bỏ vào giỏ hàng
 var shoppingCartItems = [];
 var price_total = 0;
 var quantify_total =0;
 $(document).ready(function () {
     // Kiểm tra nếu đã có sessionStorage["shopping-cart-items"] hay chưa?
     if (sessionStorage["shopping-cart-items"] != null) {
         shoppingCartItems = JSON.parse(sessionStorage["shopping-cart-items"].toString());
     }

     // Hiển thị thông tin từ giỏ hàng
     displayShoppingCartItems();
 });
//  function add_to_cart(name,price) {
//      // var button = $(this); // Lấy đối tượng button mà người dùng click
//      // var id = button.attr("id"); // id của sản phẩm là id của button
//      // var name = button.attr("data-name"); // name của sản phẩm là thuộc tính data-name của button
//      // var price = button.attr("data-price"); // price của sản phẩm là thuộc tính data-price của button
//      var name=name;
//      var price=price;
//      var quantity = 1; // Số lượng
     
  
     
//      quantify_total++;
//      var item = {
//          name: name,
//          price: price,
//          quantity: quantity
//      };
   
//      var exists = false;
//      if (shoppingCartItems.length > 0) {
//          $.each(shoppingCartItems, function (index, value) {
//              // Nếu mặt hàng đã tồn tại trong giỏ hàng thì chỉ cần tăng số lượng mặt hàng đó trong giỏ hàng.
//              if (value.name == item.name) {
//                  value.quantity++;
               
//                  exists = true;
//                  return false;
//              }
//          });
//      }

//      // Nếu mặt hàng chưa tồn tại trong giỏ hàng thì bổ sung vào mảng
//      if (!exists) {
//          shoppingCartItems.push(item);
//      }

//      // Lưu thông tin vào sessionStorage
//      sessionStorage["shopping-cart-items"] = JSON.stringify(shoppingCartItems); // Chuyển thông tin mảng shoppingCartItems sang JSON trước khi lưu vào sessionStorage
//      // Gọi hàm hiển thị giỏ hàng
//      displayShoppingCartItems();
//  };
 
 $("#button-clear").click(function () {
     shoppingCartItems = [];
     sessionStorage["shopping-cart-items"] = JSON.stringify(shoppingCartItems);
     $("#ul-products > tbody").html("");
     $("#soluong").html("");
     $("#soluong_moble").html("");
     $("#price_total").html("");
     price_total=0;                                 
 });
 // Hiển thị giỏ hàng ra table
function displayShoppingCartItems() {
     // if (sessionStorage["shopping-cart-items"] != null) {
     //     shoppingCartItems = JSON.parse(sessionStorage["shopping-cart-items"].toString()); // Chuyển thông tin từ JSON trong sessionStorage sang mảng shoppingCartItems.
     if (shoppingCartItems.length > 0) {

        $("#ul-products > tbody").html("");
         // Duyệt qua mảng shoppingCartItems để append từng item dòng vào table
        $.each(shoppingCartItems, function (index, item) {
             var htmlString = "";
             
             htmlString += "<tr>";
             htmlString += "<td> <span class='soluong'>" + item.quantity + " </span></td>";
             htmlString += "<td  <span> <label  for='modal_input' class='tenmon'>" + item.name + "</lable> </span> </td>";
             
             // htmlString +="<input type='checkbox' name='' class='nav_modal_input' id='moble_input'>"; 
             // htmlString +="<label  for='moble_input' class='modal_overlay'></label> </td>";
             htmlString += "<td class='giamon'><span>" +item.price/1000 * item.quantity + "<span>.000 đ</td>";
             htmlString += "</tr>";
             $("#ul-products > tbody:last").append(htmlString);
             
             quantify_total=quantify_total+item.quantity;
                 
             price_total += (item.price * item.quantity);   
             
        });
         $("#soluong").html("");
         $("#soluong").append(quantify_total);
         $("#soluong_moble").html("");
         $("#soluong_moble").append(quantify_total);
         
         $("#price_total").html("");
         $("#price_total").append(price_total/1000);
     }
 }
 
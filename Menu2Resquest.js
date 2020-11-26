
        // Định nghĩa một mảng các phần tử sẽ bỏ vào giỏ hàng
        var shoppingCartItems = [];
        var price_total = 0;
        var quantify_total=0;
        
        $(document).ready(function () {
            // Kiểm tra nếu đã có sessionStorage["shopping-cart-items"] hay chưa?
            if (sessionStorage["shopping-cart-items"] != null) {
                shoppingCartItems = JSON.parse(sessionStorage["shopping-cart-items"].toString());
            }
    
            // Hiển thị thông tin từ giỏ hàng
            displayShoppingCartItems();
        });
        function add_to_cart(name,price) {
            // var button = $(this); // Lấy đối tượng button mà người dùng click
            // var id = button.attr("id"); // id của sản phẩm là id của button
            // var name = button.attr("data-name"); // name của sản phẩm là thuộc tính data-name của button
            // var price = button.attr("data-price"); // price của sản phẩm là thuộc tính data-price của button
            var name=name;
            var price=price;
            var quantity = 1; // Số lượng
            
         
            
            quantify_total++;
            var item = {
                name: name,
                price: price,
                quantity: quantity
            };
          
            var exists = false;
            if (shoppingCartItems.length > 0) {
                $.each(shoppingCartItems, function (index, value) {
                    // Nếu mặt hàng đã tồn tại trong giỏ hàng thì chỉ cần tăng số lượng mặt hàng đó trong giỏ hàng.
                    if (value.name == item.name) {
                        value.quantity++;
                      
                        exists = true;
                        return false;
                    }
                });
            }
            
            // Nếu mặt hàng chưa tồn tại trong giỏ hàng thì bổ sung vào mảng
            if (!exists) {
                shoppingCartItems.push(item);
            }
    
            // Lưu thông tin vào sessionStorage
            sessionStorage["shopping-cart-items"] = JSON.stringify(shoppingCartItems); // Chuyển thông tin mảng shoppingCartItems sang JSON trước khi lưu vào sessionStorage
            // Gọi hàm hiển thị giỏ hàng
            displayShoppingCartItems();
        };
        // Sự kiện click các button có class=".add-to-cart"
        // $(".add-to-cart").click(function () {
        //     var button = $(this); // Lấy đối tượng button mà người dùng click
        //     var id = button.attr("id"); // id của sản phẩm là id của button
        //     var name = button.attr("data-name"); // name của sản phẩm là thuộc tính data-name của button
        //     var price = button.attr("data-price"); // price của sản phẩm là thuộc tính data-price của button
        //     var quantity = 1; // Số lượng
           
        //     quantify_total++;
        //     var item = {
        //         name: name,
        //         price: price,
        //         quantity: quantity
        //     };
        //     var exists = false;
        //     if (shoppingCartItems.length > 0) {
        //         $.each(shoppingCartItems, function (index, value) {
        //             // Nếu mặt hàng đã tồn tại trong giỏ hàng thì chỉ cần tăng số lượng mặt hàng đó trong giỏ hàng.
        //             if (value.name == item.name) {
        //                 value.quantity++;
                      
        //                 exists = true;
        //                 return false;
        //             }
        //         });
        //     }
    
        //     // Nếu mặt hàng chưa tồn tại trong giỏ hàng thì bổ sung vào mảng
        //     if (!exists) {
        //         shoppingCartItems.push(item);
        //     }
    
        //     // Lưu thông tin vào sessionStorage
        //     sessionStorage["shopping-cart-items"] = JSON.stringify(shoppingCartItems); // Chuyển thông tin mảng shoppingCartItems sang JSON trước khi lưu vào sessionStorage
        //     // Gọi hàm hiển thị giỏ hàng
        //     displayShoppingCartItems();
        // });
        
        
        // Xóa hết giỏ hàng shoppingCartItems
    
        $("#button-clear").click(function () {
            shoppingCartItems = [];
            sessionStorage["shopping-cart-items"] = JSON.stringify(shoppingCartItems);
            $("#ul-products > tbody").html("");
            $("#soluong").html("0");
            
            $("#price_total").html("");
            price_total=0;
        });
    
    
        // Hiển thị giỏ hàng ra table
        function displayShoppingCartItems() {
            if (shoppingCartItems.length > 0) {
                $("#soluong").html("");
                $("#soluong").append(quantify_total);
                $("#soluong_moble").html("");
                $("#soluong_moble").append(quantify_total);
            }
        }
    
    
    ////////////////// JS MENU
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(this.responseText);
            ////////TEST
            var arr=[];
            for( i in obj.data){
                
                // arr.push(obj.data[i].categ_id);
                console.log(obj.data[i].categ_id);
                console.log(obj.data[i].product_name);
               
            }
            console.log("******MON NOI BAT*******");
            for( i in obj.data){
                
                // arr.push(obj.data[i].categ_id);          
                if ((obj.data[i].categ_id[0]==9) && (obj.data[i].categ_id[1] == [4]) || (obj.data[i].categ_id[0]==1)){
                console.log(obj.data[i].categ_id);
                console.log(obj.data[i].product_name);  
                }
            }
            // arr.sort;
            // console.log(arr);
           
            //////////////////
            var x = "";
            var y = "";
            var z = "";
            //MÓN NỔI BẬT
            x+= "<div  id='section1'><h2 ><span class='menuhome' >MÓN NỔI BẬT</h2>";
            x+= "<div class='list_product_related flex_wrap display_flex menu_lists'>";
            for (i in obj.data) {          
                if (obj.data[i].product_category_id === '5d71dc6dad2aba2980db0af2'||obj.data[i].product_category_id === '5d71dc71ad2aba2980db0b3d') {
                    x +="<div class='menu_item'>";
                    x +="<div class='menu_item_image'>";
                    x +="<img src="+obj.data[i].image+"> </div>";
                    x +="<div class='menu_item_info bg_white'>";
                    x +="<h3><a>" + obj.data[i].product_name + "</a></h3>";
                    x +="<div class='price_product_item'>"+ obj.data[i].price/1000 + ",000 Đ</div>";
                    y = obj.data[i].product_name;
                    z = obj.data[i].price;
                    x +=" <div> <button 'id'="+obj.data[i]._id+" data-name=" + obj.data[i].slug + " data-price="+obj.data[i].price+ " onclick='add_to_cart(\"" + y +"\",\""+z+"\")' class='button text' >MUA NGAY </button></div>";
                    x +="</div> </div>";
                 
                }
            }
            x+="</div>";
    
            // CAFFEE
            x+= "<div  id='section2'><h2 ><span class='menuhome' >CÀ PHÊ </h2>";
            x+= "<div class='list_product_related flex_wrap display_flex menu_lists'>";
            for (i in obj.data) {          
                if (obj.data[i].product_category_id === '5d71dc6fad2aba2980db0b24'||obj.data[i].product_category_id === '5d71dc6dad2aba2980db0af8' ||obj.data[i].product_category_id ==='5d71dc6ead2aba2980db0b0e') {
                    x +="<div class='menu_item'>";
                    x +="<div class='menu_item_image'>";
                    x +="<img src="+obj.data[i].image+"> </div>";
                    x +="<div class='menu_item_info bg_white'>";
                    x +="<h3><a>" + obj.data[i].product_name + "</a></h3>";
                    x +="<div class='price_product_item'>"+ obj.data[i].price/1000 + ",000 Đ</div>"
                    y = obj.data[i].product_name;
                    z = obj.data[i].price;
                    x +=" <div> <button 'id'="+obj.data[i]._id+" 'data-name'=" + obj.data[i].slug + " 'data-price'="+obj.data[i].price+"  onclick='add_to_cart(\"" + y +"\",\""+z+"\")' class='button text' >MUA NGAY </button></div>";
                    x +="</div> </div>";
                   
                }
            }
            x+="</div>";
            // TRÀ & MACCHIATO
            x+= "<div  id='section3'><h2 ><span class='menuhome' >TRÀ & MACCHIATO </h2>";
            x+= "<div class='list_product_related flex_wrap display_flex menu_lists'>";
            for (i in obj.data) {          
                if (obj.data[i].product_category_id === '5d71dc6fad2aba2980db0b27') {
                    x +="<div class='menu_item'>";
                    x +="<div class='menu_item_image'>";
                    x +="<img src="+obj.data[i].image+"> </div>";
                    x +="<div class='menu_item_info bg_white'>";
                    x +="<h3><a>" + obj.data[i].product_name + "</a></h3>";
                    x +="<div class='price_product_item'>"+ obj.data[i].price/1000 + ",000 Đ</div>"
                    y = obj.data[i].product_name;
                    z = obj.data[i].price;
                    x +=" <div> <button 'id'="+obj.data[i]._id+" 'data-name'=" + obj.data[i].slug + " 'data-price'="+obj.data[i].price+"  onclick='add_to_cart(\"" + y +"\",\""+z+"\")' class='button text' >MUA NGAY </button></div>";
                    x +="</div> </div>";
                   
                }
            }
            x+="</div>";
            // THỨC UỐNG ĐÁ XAY
            x+= "<div  id='section4'><h2 ><span class='menuhome' >THỨC UỐNG ĐÁ XAY </h2>";
            x+= "<div class='list_product_related flex_wrap display_flex menu_lists'>";
            for (i in obj.data) {          
                if (obj.data[i].product_category_id === '5d71dc6fad2aba2980db0b21') {
                    x +="<div class='menu_item'>";
                    x +="<div class='menu_item_image'>";
                    x +="<img src="+obj.data[i].image+"> </div>";
                    x +="<div class='menu_item_info bg_white'>"
                    x +="<h3><a>" + obj.data[i].product_name + "</a></h3>";
                    x +="<div class='price_product_item'>"+ obj.data[i].price/1000 + ",000 Đ</div>";
                    y = obj.data[i].product_name;
                    z = obj.data[i].price;
                    x +=" <div> <button 'id'="+obj.data[i]._id+" 'data-name'=" + obj.data[i].slug + " 'data-price'="+obj.data[i].price+"  onclick='add_to_cart(\"" + y +"\",\""+z+"\")' class='button text' >MUA NGAY </button></div>";
                    x +="</div> </div>";              
                }
            }
            x+="</div>";
            // THỨC UỐNG TRÁI CÂY
            x+= "<div  id='section5'><h2 ><span class='menuhome' >THỨC UỐNG TRÁI CÂY </h2>";
            x+= "<div class='list_product_related flex_wrap display_flex menu_lists'>";
            for (i in obj.data) {          
                if (obj.data[i].product_category_id === '5d71dc6fad2aba2980db0b22') {
                    x +="<div class='menu_item'>";
                    x +="<div class='menu_item_image'>";
                    x +="<img src="+obj.data[i].image+"> </div>";
                    x +="<div class='menu_item_info bg_white'>";
                    x +="<h3><a>" + obj.data[i].product_name + "</a></h3>";
                    x +="<div class='price_product_item'>"+ obj.data[i].price/1000 + ",000 Đ</div>";
                    y = obj.data[i].product_name;
                    z = obj.data[i].price;
                    x +=" <div> <button 'id'="+obj.data[i]._id+" 'data-name'=" + obj.data[i].slug + " 'data-price'="+obj.data[i].price+" onclick='add_to_cart(\"" + y +"\",\""+z+"\")' class='button text' >MUA NGAY </button></div>";
                    x +="</div> </div>";
                }
            }
            x+="</div>";
            document.getElementById("caffee").innerHTML = x;
        }
    };
    xhttp.open("GET", "https://api.thecoffeehouse.com/api/v2/menu", true);
    xhttp.send();
    
    //////////test
    array=["a","b","c"];
    for (let i in array)
        console.log(array[i]);
    for (const j of array)
        console.log(j); 
    ///////////

        // Định nghĩa một mảng các phần tử sẽ bỏ vào giỏ hàng
    var shoppingCartItems = [];
    var price_total = 0;
    var quantify_total=0;
    
    $(document).ready(function () {
        // Kiểm tra nếu đã có sessionStorage["shopping-cart-items"] hay chưa?
        if (sessionStorage["shopping-cart-items"] != null) {
            shoppingCartItems = JSON.parse(sessionStorage["shopping-cart-items"].toString());
        }
        // if (localStorage["apiTCH"] != null) {
        //     jsonApi = JSON.parse(localStorage["apiTCH"].toString());
        // }
        // Hiển thị thông tin từ giỏ hàng
        displayShoppingCartItems();
        // displayjonApi();
    });
    console.log();
    // console.log(shoppingCartItems);
    function add_to_cart(name,price,image) {
        // var button = $(this); // Lấy đối tượng button mà người dùng click
        // var id = button.attr("id"); // id của sản phẩm là id của button
        // var name = button.attr("data-name"); // name của sản phẩm là thuộc tính data-name của button
              
        // $("#clear").click(function () {
        //     $("#img").html("");
        // });
        
        var quantity = 1 ; // Số lượng       
        quantify_total++;
        var item = {
            name: name,
            price: price,
            quantity: quantity,
            image: image,
            size: size,          
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
        //show anh..
        var htmlString ="";          
        htmlString+="<img  class='img_modal' src="+item.image+">";  
        $("#img").html("");       
        $("#img").append(htmlString);

        //show ten +size
        var htmlString="";
        htmlString+="<p class='bold'>"+item.name+"</p>";
        htmlString+="<p>"+item.size+"</p>";
        htmlString+="<p>topping</p>";
        $("#size").html("");       
        $("#size").append(htmlString);
     
        //show topping
        // var htmlString="";
        // htmlString+="<hr><p>Topping -</p>";  
        // htmlString+="<div class='form-check'>";
        // htmlString+="<input class='form-check-input' type='checkbox' id='defaultCheck1'>";
        // htmlString+="<label class='form-check-label' for='defaultCheck1'>";
        // htmlString+= +item.donate1+"<p>(+10.000 ₫)</p>";
        // htmlString+="</div>";
        
        // $("#topping").html("");       
        // $("#topping").append(htmlString);

        // Lưu thông tin vào sessionStorage
       
        sessionStorage["shopping-cart-items"] = JSON.stringify(shoppingCartItems); // Chuyển thông tin mảng shoppingCartItems sang JSON trước khi lưu vào sessionStorage
        // Gọi hàm hiển thị giỏ hàng
       
        displayShoppingCartItems();
        
    };
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
 
           
       
   


//////////////////////////// JS MENU  /////////////////////////////////////////
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var obj = JSON.parse(this.responseText);
        var x = "";
        var name = "";
        var price = "";
        var anh,size="";
        var y="";
        var donate="";
        //MÓN NỔI BẬT
        x+= "<div  id='section1'><h2 ><span class='menuhome' >MÓN NỔI BẬT</h2>";
        x+= "<div class='list_product_related flex_wrap display_flex menu_lists'>";
        for (let i in obj.data) {          
            if ((obj.data[i].categ_id[0]==9)&&(obj.data[i].categ_id[1]!=18)&&(obj.data[i].categ_id[1]!=19)) {
                x +="<div class='menu_item'>";
                x +="<div class='menu_item_image'>";
                x +="<img src="+obj.data[i].image+"> </div>";
                x +="<div class='menu_item_info bg_white'>";
                x +="<h3><a>" + obj.data[i].product_name + "</a></h3>";
                x +="<div class='price_product_item'>"+ obj.data[i].price/1000 + ",000 Đ</div>";
                name = obj.data[i].product_name;
                price = obj.data[i].price;
                anh = obj.data[i].image;
                // for(let j in obj.data[i].variants)
                //     if(obj.data[i].variants[j].price==price)  size= obj.data[i].variants[j].val;
                console.log(name);
                // for( let j in obj.data[i].topping_list){
                    // if ( Object.entries(obj.data[i].topping_list[j]).length>0){
                
                // console.log("topping: " +donate[0].product_name);
                
                // for( let k in donate){
                //     console.log("topping: " +donate[k].product_name);
                //     y+= "<hr><p>Topping -</p>"; 
                //     y+= "<div class='form-check'>";
                //     y+= "<input class='form-check-input' type='checkbox' id='defaultCheck1'>";
                //     y+="<label class='form-check-label' for='defaultCheck1'>";
                //     y+= donate[k].product_name+"<p>(+10.000 ₫)</p></div>"
                //     document.getElementById("topping").innerHTML = y;
                // }  
                // if (donate[1].product_name===undefined) 
                //     donate[1].product_name="";
                // console.log(donate[1].product_name);        
                x +=" <div> <button data-toggle='modal' data-target='#exampleModal''id'="+obj.data[i]._id+" data-name=" + obj.data[i].slug + " data-price="+obj.data[i].price+ " onclick='add_to_cart(\"" + name +"\",\""+price+"\",\""+anh+"\",)' class='button text' >MUA NGAY </button></div>";
                x +="</div> </div>";
               
               
            }
            // document.getElementById("caffee").innerHTML = x;
        }
        x+="</div>";

        // CAFFEE
        x+= "<div  id='section2'><h2 ><span class='menuhome' >CÀ PHÊ </h2>";
        x+= "<div class='list_product_related flex_wrap display_flex menu_lists'>";
        for (i in obj.data) {          
            if ((obj.data[i].categ_id[0]==1)||(obj.data[i].categ_id[1]==1)) {
                x +="<div class='menu_item'>";
                x +="<div class='menu_item_image'>";
                x +="<img src="+obj.data[i].image+"> </div>";
                x +="<div class='menu_item_info bg_white'>";
                x +="<h3><a>" + obj.data[i].product_name + "</a></h3>";
                x +="<div class='price_product_item'>"+ obj.data[i].price/1000 + ",000 Đ</div>";
                name = obj.data[i].product_name;
                price = obj.data[i].price;
                anh = obj.data[i].image;
                x +=" <div> <button data-toggle='modal' data-target='#exampleModal' 'id'="+obj.data[i]._id+" 'data-name'=" + obj.data[i].slug + " 'data-price'="+obj.data[i].price+"  onclick='add_to_cart(\"" + name +"\",\""+price+"\",\""+anh+"\")' class='button text' >MUA NGAY </button></div>";
                x +="</div> </div>";
               
            }
            // document.getElementById("caffee").innerHTML = x;
        }
        x+="</div>";
        // THỨC UỐNG ĐÁ XAY
        x+= "<div  id='section3'><h2 ><span class='menuhome' >THỨC UỐNG ĐÁ XAY</h2>";
        x+= "<div class='list_product_related flex_wrap display_flex menu_lists'>";
        for (i in obj.data) {          
            if ((obj.data[i].categ_id[0]==2)||(obj.data[i].categ_id[1]==2)||(obj.data[i].categ_id[2]==2)) {
                x +="<div class='menu_item'>";
                x +="<div class='menu_item_image'>";
                x +="<img src="+obj.data[i].image+"> </div>";
                x +="<div class='menu_item_info bg_white'>";
                x +="<h3><a>" + obj.data[i].product_name + "</a></h3>";
                x +="<div class='price_product_item'>"+ obj.data[i].price/1000 + ",000 Đ</div>"
                name = obj.data[i].product_name;
                price = obj.data[i].price;
                anh = obj.data[i].image;
                x +=" <div> <button data-toggle='modal' data-target='#exampleModal' 'id'="+obj.data[i]._id+" 'data-name'=" + obj.data[i].slug + " 'data-price'="+obj.data[i].price+"  onclick='add_to_cart(\"" + name +"\",\""+price+"\",\""+anh+"\")' class='button text' >MUA NGAY </button></div>";
                x +="</div> </div>";            
            }
            // document.getElementById("caffee").innerHTML = x;
        }
        x+="</div>";
        // TRÀ TRÁI CÂY
        x+= "<div  id='section4'><h2 ><span class='menuhome' >TRÀ TRÁI CÂY </h2>";
        x+= "<div class='list_product_related flex_wrap display_flex menu_lists'>";
        for (i in obj.data) {          
            if ((obj.data[i].categ_id[0]==5)||(obj.data[i].categ_id[1]==5)) {
                x +="<div class='menu_item'>";
                x +="<div class='menu_item_image'>";
                x +="<img src="+obj.data[i].image+"> </div>";
                x +="<div class='menu_item_info bg_white'>";
                x +="<h3><a>" + obj.data[i].product_name + "</a></h3>";
                x +="<div class='price_product_item'>"+ obj.data[i].price/1000 + ",000 Đ</div>"
                name = obj.data[i].product_name;
                price = obj.data[i].price;
                anh = obj.data[i].image;
                x +=" <div> <button data-toggle='modal' data-target='#exampleModal' 'id'="+obj.data[i]._id+" 'data-name'=" + obj.data[i].slug + " 'data-price'="+obj.data[i].price+"  onclick='add_to_cart(\"" + name +"\",\""+price+"\",\""+anh+"\")' class='button text' >MUA NGAY </button></div>";
                x +="</div> </div>";
               
            }
            // document.getElementById("caffee").innerHTML = x;
        }
        x+="</div>";
        // THỨC UỐNG TRÁI CÂY
        x+= "<div  id='section5'><h2 ><span class='menuhome' >THỨC UỐNG TRÁI CÂY </h2>";
        x+= "<div class='list_product_related flex_wrap display_flex menu_lists'>";
        for (i in obj.data) {          
            if (obj.data[i].categ_id[1]==6) {
                x +="<div class='menu_item'>";
                x +="<div class='menu_item_image'>";
                x +="<img src="+obj.data[i].image+"> </div>";
                x +="<div class='menu_item_info bg_white'>"
                x +="<h3><a>" + obj.data[i].product_name + "</a></h3>";
                x +="<div class='price_product_item'>"+ obj.data[i].price/1000 + ",000 Đ</div>";
                name = obj.data[i].product_name;
                price = obj.data[i].price;
                anh = obj.data[i].image;
                x +=" <div> <button data-toggle='modal' data-target='#exampleModal' 'id'="+obj.data[i]._id+" 'data-name'=" + obj.data[i].slug + " 'data-price'="+obj.data[i].price+"  onclick='add_to_cart(\"" + name +"\",\""+price+"\",\""+anh+"\")' class='button text' >MUA NGAY </button></div>";
                x +="</div> </div>";              
            }
            // document.getElementById("caffee").innerHTML = x;
        }
        x+="</div>";
        // MACCHIATO
        x+= "<div  id='section6'><h2 ><span class='menuhome' >MACCHIATO </h2>";
        x+= "<div class='list_product_related flex_wrap display_flex menu_lists'>";
        for (i in obj.data) {          
            if ((obj.data[i].categ_id[0]==4)||(obj.data[i].categ_id[1]==4)) {
                x +="<div class='menu_item'>";
                x +="<div class='menu_item_image'>";
                x +="<img src="+obj.data[i].image+"> </div>";
                x +="<div class='menu_item_info bg_white'>";
                x +="<h3><a>" + obj.data[i].product_name + "</a></h3>";
                x +="<div class='price_product_item'>"+ obj.data[i].price/1000 + ",000 Đ</div>";
                name = obj.data[i].product_name;
                price = obj.data[i].price;
                anh = obj.data[i].image;
                x +=" <div> <button data-toggle='modal' data-target='#exampleModal' 'id'="+obj.data[i]._id+" 'data-name'=" + obj.data[i].slug + " 'data-price'="+obj.data[i].price+" onclick='add_to_cart(\"" + name +"\",\""+price+"\",\""+anh+"\")' class='button text' >MUA NGAY </button></div>";
                x +="</div> </div>";
            }
            // document.getElementById("caffee").innerHTML = x;
        }
        x+="</div>";
       
        // THỨC ĂN NHẸ
        x+= "<div  id='section7'><h2 ><span class='menuhome' >THỨC ĂN NHẸ </h2>";
        x+= "<div class='list_product_related flex_wrap display_flex menu_lists'>";
        for (i in obj.data) {          
            if (obj.data[i].categ_id[0]==7){
                x +="<div class='menu_item'>";
                x +="<div class='menu_item_image'>";
                x +="<img src="+obj.data[i].image+"> </div>";
                x +="<div class='menu_item_info bg_white'>";
                x +="<h3><a>" + obj.data[i].product_name + "</a></h3>";
                x +="<div class='price_product_item'>"+ obj.data[i].price/1000 + ",000 Đ</div>";
                name = obj.data[i].product_name;
                price = obj.data[i].price;
                anh = obj.data[i].image;
                x +=" <div> <button data-toggle='modal' data-target='#exampleModal' 'id'="+obj.data[i]._id+" 'data-name'=" + obj.data[i].slug + " 'data-price'="+obj.data[i].price+" onclick='add_to_cart(\"" + name +"\",\""+price+"\",\""+anh+"\")' class='button text' >MUA NGAY </button></div>";
                x +="</div> </div>";
            }
            // document.getElementById("caffee").innerHTML = x;
        }
        x+="</div>";
        //CHOCO -MATCHA
        x+= "<div  id='section8'><h2 ><span class='menuhome' >CHOCO -MATCHA </h2>";
        x+= "<div class='list_product_related flex_wrap display_flex menu_lists'>";
        for (i in obj.data) {          
            if (obj.data[i].categ_id[1]==15) {
                x +="<div class='menu_item'>";
                x +="<div class='menu_item_image'>";
                x +="<img src="+obj.data[i].image+"> </div>";
                x +="<div class='menu_item_info bg_white'>";
                x +="<h3><a>" + obj.data[i].product_name + "</a></h3>";
                x +="<div class='price_product_item'>"+ obj.data[i].price/1000 + ",000 Đ</div>";
                name = obj.data[i].product_name;
                price = obj.data[i].price;
                anh = obj.data[i].image;
                x +=" <div> <button data-toggle='modal' data-target='#exampleModal' 'id'="+obj.data[i]._id+" 'data-name'=" + obj.data[i].slug + " 'data-price'="+obj.data[i].price+" onclick='add_to_cart(\"" + name +"\",\""+price+"\",\""+anh+"\")' class='button text' >MUA NGAY </button></div>";
                x +="</div> </div>";
            }
            // document.getElementById("caffee").innerHTML = x;
        }
        x+="</div>";
        // //CÀ PHÊ GÓI
        // x+= "<div  id='section9'><h2 ><span class='menuhome' >CÀ PHÊ GÓI </h2>";
        // x+= "<div class='list_product_related flex_wrap display_flex menu_lists'>";
        // for (i in obj.data) {          
        //     if (obj.data[i].categ_id[1]==18) {
        //         x +="<div class='menu_item'>";
        //         x +="<div class='menu_item_image'>";
        //         x +="<img src="+obj.data[i].image+"> </div>";
        //         x +="<div class='menu_item_info bg_white'>";
        //         x +="<h3><a>" + obj.data[i].product_name + "</a></h3>";
        //         x +="<div class='price_product_item'>"+ obj.data[i].price/1000 + ",000 Đ</div>";
        //         name = obj.data[i].product_name;
        //         price = obj.data[i].price;
        //         anh = obj.data[i].image;
        //         x +=" <div> <button data-toggle='modal' data-target='#exampleModal' 'id'="+obj.data[i]._id+" 'data-name'=" + obj.data[i].slug + " 'data-price'="+obj.data[i].price+" onclick='add_to_cart(\"" + name +"\",\""+price+"\",\""+anh+"\")' class='button text' >MUA NGAY </button></div>";
        //         x +="</div> </div>";
        //     }
        //     // document.getElementById("caffee").innerHTML = x;
        // }
        // x+="</div>";
        // //GÓI SUBSCRIPTION
        // x+= "<div  id='section10'><h2 ><span class='menuhome' >GÓI SUBSCRIPTION</h2>";
        // x+= "<div class='list_product_related flex_wrap display_flex menu_lists'>";
        // for (i in obj.data) {          
        //     if (obj.data[i].categ_id[1]==19) {
        //         x +="<div class='menu_item'>";
        //         x +="<div class='menu_item_image'>";
        //         x +="<img src="+obj.data[i].image+"> </div>";
        //         x +="<div class='menu_item_info bg_white'>";
        //         x +="<h3><a>" + obj.data[i].product_name + "</a></h3>";
        //         x +="<div class='price_product_item'>"+ obj.data[i].price/1000 + ",000 Đ</div>";
        //         name = obj.data[i].product_name;
        //         price = obj.data[i].price;
        //         anh = obj.data[i].image;
        //         x +=" <div> <button data-toggle='modal' data-target='#exampleModal' 'id'="+obj.data[i]._id+" 'data-name'=" + obj.data[i].slug + " 'data-price'="+obj.data[i].price+" onclick='add_to_cart(\"" + name +"\",\""+price+"\",\""+anh+"\")' class='button text' >MUA NGAY </button></div>";
        //         x +="</div> </div>";
        //     }
        //     document.getElementById("caffee").innerHTML = x;
        // }
        // x+="</div>";
    }
    document.getElementById("caffee").innerHTML = x;
    ////////TEST/////
    // var arr=[];
    // for( i in obj.data){
        
    //     // arr.push(obj.data[i].categ_id);
    //     console.log(obj.data[i].categ_id);
    //     console.log(obj.data[i].product_name);
    // }
};
xhttp.open("GET", "https://api.thecoffeehouse.com/api/v2/menu", true);
xhttp.send();
//
//////////test
// array=["a","b","c"];
// for (let i in array)
//     console.log(array[i]);
// for (const j of array)
//     console.log(j); 
///////////



    
function saveData (){
    {
        // var button = $(this); // Lấy đối tượng button mà người dùng click
        // var id = button.attr("id"); // id của sản phẩm là id của button
        // var name = button.attr("data-name"); // name của sản phẩm là thuộc tính data-name của button
        // var price = button.attr("data-price"); // price của sản phẩm là thuộc tính data-price của button
        // var quantity = 1; // Số lượng
        // var soluong=soluong+1;
        var 
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
    });
}
var obj = {
    data: {
        uuid: '489db197-f024-487b-8b96-e8dc50146699', /*-------------uuid----------------------------*/
        products: [],
    },
    getData: function () {
        vm = this;                               /*-------------把 this物件 指定到vm變數----------------------------*/
        axios.get(`https://course-ec-api.hexschool.io/api/${vm.data.uuid}/ec/products`)/*-------------向伺服器發出請求 像資料庫取出資料----------------------------*/
            .then(function (res) {         /*-------------成功之後取得 res資料  將res.data.data的資料存到 vm.data.products(obj.data.products)----------------------------*/
                console.log(res.data)
                vm.data.products = res.data.data;
                vm.render(); /*-------------畫面渲染----------------------------*/

            })
    },
    render: function () {               /*-------------畫面渲染function----------------------------*/
        var list = document.querySelector(".list");
        var listData = vm.data.products;/*-------------建立listData變數  把vm.data.products的資料起來----------------------------*/
        console.log(listData)
        var str = ""
        listData.forEach(function (item) {    /*-------------listData(陣列)跑迴圈----------------------------*/
            console.log(item)
            str +=                      /*-------------資料串接----------------------------*/
                `<li class="col-4">
                <div>
                <img src="${item.imageUrl[0]}" alt="">
                </div>
                <h3>${item.title}</h3>
                <p></p>
                </li>`

        })
        list.innerHTML = str;
    }


}

obj.getData();
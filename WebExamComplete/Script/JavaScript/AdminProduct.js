var TypeScript;
(function (TypeScript) {
    var AdminProduct;
    (function (AdminProduct) {
        var Product = /** @class */ (function () {
            function Product() {
            }
            Product.prototype.getProduct = function () {
                $.ajax({
                    type: "GET", url: "http://localhost:49834/api/ProductMaster", success: function (response) {
                        $(".data").remove();
                        for (var i = 0; i < response.length; i++) {
                            var productDetails = response[i];
                            var str = "<tr class='data'><td>" + productDetails.ProductID + "</td> <td>" + productDetails.ProductName + "</td><td><button type='button' class='btn btn-dark btnView' data-toggle='modal' data-target='#ViewModel' data-prodid=" + productDetails.ProductID + " onclick='tsProduct.al()'>View</button></td></tr>";
                            $(".ProdTable").append(str);
                        }
                    }, error: function (err) {
                        alert(err);
                        // console.log(err);
                    }
                });
            };
            Product.prototype.searchProduct = function () {
                var productId = $("#txtProdId").val();
                $.ajax({
                    type: "GET", url: "http://localhost:49834/api/ProductMaster?ID=" + productId, success: function (response) {
                        var str = "<tr><td>" + response.ProductID + "</td><td>" + response.ProductName + "</td><td><button type='button' class='btn btn-dark btnView' data-toggle='modal' data-target='#ViewModel' data-prodid=" + response.ProductID + ">View</button></td></tr>";
                        $(".ProdTable").append(str);
                        //alert(str);
                    },
                    error: function (err) {
                        alert(err);
                        console.log(err);
                    }
                });
            };
            // var currentId: string;
            // viewProduct(event:any): void{
            // //target property return the element that triggrered the event.
            // $("#message").html("");
            // // $(".inp").attr('disabled',true);
            // $(".inp").css('border','none');
            // $("#btn-Insert1").css('display','none');
            // $("#btn-Delete").css('display','block');
            // $("#btn-Edit").css('display','block');
            // $("#btn-Update").css('display','block');
            // $("#prod-img").css('display','block');
            // var prodId: any = $(event.target).attr("data-prodid");
            // // currentId = prodId;
            // // currentRow = $(event.target).parent().parent();
            // $.ajax({
            //     type: "GET", url: "http://localhost:49834/api/ProductMaster?ID=" + prodId, success: (response) => {
            //         $("#ViewModel").modal();
            //         alert("whgd")
            //         $("#ip-prodId").val("jfmk");
            //         $("#ip-prodId").val(response.ProductID);
            //         $("#ip-prodName").val(response.ProductName);
            //         $("#ip-prodQty").val(response.Quantity);
            //         $("#ip-prodPrice").val(response.Price);
            //         $("#ip-prodTag").val(response.Tag); 
            //         $("#prod-img").html("<img src="+response.Tag+" alt='Product Image'  width='300px' height='auto'>")  
            //     },
            //     error: (err) => {
            //         alert(err)
            //     }
            // });
            // }
            Product.prototype.insert = function () {
                $(".inp").val("");
                // $(".inp").attr('disabled',false);
                // $("#ip-prodName").attr('disabled',false);
                // $("#ip-prodQty").attr('disabled',false);
                // $("#ip-prodPrice").attr('disabled',false);
                // $("#ip-prodTag").attr('disabled',false);
                $("#btn-Insert1").css('display', 'block');
                $("#btn-Delete").css('display', 'none');
                $("#btn-Edit").css('display', 'none');
                $("#btn-Update").css('display', 'none');
                $("#prod-img").css('display', 'none');
                $("#message").css('display', 'none');
                $(".inp").css('border', '1px solid rgba(174, 173, 173, 0.614)');
                $("#ViewModel").modal();
            };
            Product.prototype.insertProduct = function () {
                $("#message").css('display', 'block');
                var prodId = $("#ip-prodId").val();
                var prodName = $("#ip-prodName").val();
                var prodQty = $("#ip-prodQty").val();
                var prodPrice = $("#ip-prodPrice").val();
                var prodTag = $("#ip-prodTag").val();
                $.ajax({
                    type: "POST", url: "http://localhost:49834/api/ProductMaster", data: { "ProductName": prodName, "Quantity": prodQty, "Price": prodPrice, "Tag": prodTag }, success: function () {
                        // currentRow.find("td:eq(0)").html(prodId);
                        // currentRow.find("td:eq(1)").html(prodName);
                        $("#prod-img").css('display', 'block');
                        $("#prod-img").html("<img src=" + prodTag + " alt='Product Image'  width='300px' height='auto'>");
                        $("#message").html("Data Inserted Successfully");
                        // $(".inp").attr('disabled',true);
                    }, error: function (err) { alert(err); }
                });
            };
            Product.prototype.al = function () {
                alert("dfgc");
            };
            Product.prototype.isValid = function (attribute) {
                var functionName = "isValid";
                var isValid = false;
                try {
                    //Validate the attribute and return True or False accordingly
                    if (attribute != null &&
                        attribute != undefined &&
                        attribute != "undefined" &&
                        attribute != "null" &&
                        attribute != "")
                        isValid = true;
                }
                catch (ex) {
                    throw new Error(functionName + ex.message);
                }
                return isValid;
            };
            Product.prototype.throwError = function (functionNameParam, error) {
                var functionName = "throwError";
                var errorMessage = "";
                try {
                    //Concatenate the Message together
                    errorMessage = functionNameParam + ": Error: " + (error.description || error.message);
                    //Show Error Message
                    alert(errorMessage);
                }
                catch (ex) {
                    //Concatenate the Message together
                    errorMessage = functionNameParam + ": Error: " + (error.description || error.message);
                    //Show Error Message
                    this.showMessage(functionName + " Error: " + (ex.description || ex.message));
                }
            };
            Product.prototype.showMessage = function (message) {
                var functionName = "showMessage";
                try {
                    if (this.isValid(message)) {
                        alert(message);
                    }
                    else {
                        alert(message);
                    }
                }
                catch (ex) {
                    this.throwError(functionName, ex.message);
                }
            };
            return Product;
        }());
        AdminProduct.Product = Product;
    })(AdminProduct = TypeScript.AdminProduct || (TypeScript.AdminProduct = {}));
})(TypeScript || (TypeScript = {}));
var tsProduct = new TypeScript.AdminProduct.Product();

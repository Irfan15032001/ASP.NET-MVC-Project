var TypeScript;
(function (TypeScript) {
    var AdminUserLogin;
    (function (AdminUserLogin) {
        var Login = /** @class */ (function () {
            function Login() {
            }
            //function to check the login credentials
            Login.prototype.logIn = function () {
                //declaring variables
                var functionName = "logIn";
                var email;
                var pass;
                try {
                    //getting values
                    email = document.getElementById("userEmail").value;
                    pass = document.getElementById("password").value;
                    //validating the values
                    if (tsObject.isValid(email) && tsObject.isValid(pass)) {
                        $.ajax({
                            //checking data from database
                            type: "GET", url: "http://localhost:49834/api/SignUp?email=" + email + "&pass=" + pass, success: function (response) {
                                if (response == null) {
                                    $("#message").html("User Not Found - Check The Details You Have entered");
                                }
                                else {
                                    if (response.UserType == "admin") {
                                        $("#message").html("Admin Login Successfull");
                                        window.location.href = "AdminSignUp.html";
                                    }
                                    else {
                                        localStorage.setItem("userIdFromStorage", response.UserID);
                                        localStorage.setItem("userNameFromStorage", response.Names);
                                        $("#message").html("User Login Successfull");
                                        window.location.href = "ShoppingHome.html";
                                    }
                                }
                            },
                            error: function (err) {
                                alert(err);
                            }
                        });
                    }
                    else {
                        //display alert
                        var message = document.getElementById("message");
                        message.innerHTML = "Please enter the details";
                    }
                }
                catch (error) {
                    tsObject.throwError(functionName, error.message);
                }
            };
            Login.prototype.getProduct = function () {
                $.ajax({
                    type: "GET", url: "http://localhost:49834/api/ProductMaster", success: function (response) {
                        $(".data").remove();
                        for (var i = 0; i < response.length; i++) {
                            var productDetails = response[i];
                            var str = "<tr class='data'><td>" + productDetails.ProductID + "</td> <td>" + productDetails.ProductName + "</td><td><button type='button' class='btn btn-dark btnView' data-toggle='modal' data-target='#ViewModel' data-prodid=" + productDetails.ProductID + ">View</button></td></tr>";
                            $(".ProdTable").append(str);
                        }
                    }, error: function (err) {
                        alert(err);
                        // console.log(err);
                    }
                });
            };
            Login.prototype.isValid = function (attribute) {
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
            Login.prototype.throwError = function (functionNameParam, error) {
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
            Login.prototype.showMessage = function (message) {
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
            return Login;
        }());
        AdminUserLogin.Login = Login;
    })(AdminUserLogin = TypeScript.AdminUserLogin || (TypeScript.AdminUserLogin = {}));
})(TypeScript || (TypeScript = {}));
var tsObject = new TypeScript.AdminUserLogin.Login();

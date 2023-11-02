namespace TypeScript{
    export namespace AdminUserLogin{
        export class Login{
            //function to check the login credentials
            logIn():void{
                //declaring variables
                let functionName: string = "logIn";
                let email: string;
                let pass: string;
                try{
                    //getting values
                    email = (<HTMLInputElement>document.getElementById("userEmail")).value;
                    pass = (<HTMLInputElement>document.getElementById("password")).value;
                    //validating the values
                    if(tsObject.isValid(email) && tsObject.isValid(pass)){
                        $.ajax({
                            //checking data from database
                            type:"GET", url:"http://localhost:49834/api/SignUp?email="+email+"&pass="+pass, success:(response)=>{
                                if(response==null){
                                  $("#message").html("User Not Found - Check The Details You Have entered");
                                }
                                else{
                                  if(response.UserType=="admin"){
                                    $("#message").html("Admin Login Successfull");
                                    
                                    window.location.href="AdminSignUp.html";
                                  }
                                  else {
                                
                                    localStorage.setItem("userIdFromStorage",response.UserID);
                                    localStorage.setItem("userNameFromStorage",response.Names);
                                    $("#message").html("User Login Successfull");
                                    window.location.href="ShoppingHome.html"
                                  }
                                }
                                  
                            }, 
                            error: (err)=>{
                              alert(err)
                            }
                            });
                    }
                    else{
                    //display alert
                    let message = <HTMLElement>document.getElementById("message");
                    message.innerHTML = "Please enter the details"
                    }
                }
                catch(error: any){
                    tsObject.throwError(functionName, error.message)
                }
            }


            getProduct(): void{
                $.ajax({
                    type: "GET", url: "http://localhost:49834/api/ProductMaster", success: (response) => {
                        $(".data").remove();
                        for (let i = 0; i < response.length; i++) {
                            let productDetails = response[i];
            
                            let str = "<tr class='data'><td>"+productDetails.ProductID+"</td> <td>"+productDetails.ProductName+"</td><td><button type='button' class='btn btn-dark btnView' data-toggle='modal' data-target='#ViewModel' data-prodid=" + productDetails.ProductID + ">View</button></td></tr>";
                            $(".ProdTable").append(str);
            
                        }
                    }, error: (err) => {
                        alert(err);
                        // console.log(err);
                    }
                });
            }


            isValid(attribute: any): boolean {
                let functionName: string = "isValid";
                let isValid: boolean = false;
                try {
                  //Validate the attribute and return True or False accordingly
                  if (
                    attribute != null &&
                    attribute != undefined &&
                    attribute != "undefined" &&
                    attribute != "null" &&
                    attribute != ""
                  )
                    isValid = true;
                } catch (ex: any) {
                  throw new Error(functionName + ex.message);
                }
                return isValid;
              }


            throwError(functionNameParam: string, error: any) {
                let functionName: string = "throwError";
                let errorMessage: string = "";
                try {
                  //Concatenate the Message together
                  errorMessage = functionNameParam + ": Error: " + (error.description || error.message);
                  //Show Error Message
                  alert(errorMessage);
                }
                catch (ex: any) {
                  //Concatenate the Message together
                  errorMessage = functionNameParam + ": Error: " + (error.description || error.message);
                  //Show Error Message
                  this.showMessage(functionName + " Error: " + (ex.description || ex.message));
                }
              }

              showMessage(message: string) {
                let functionName: string = "showMessage";
                try {
                  if (this.isValid(message)) {
                    alert(message);
                  }
                  else {
                    alert(message);
                  }
                }
                catch (ex: any) {
                  this.throwError(functionName, ex.message);
                }
              }
        }
    }
}

let tsObject = new TypeScript.AdminUserLogin.Login();



using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebExam.Models;
using System.Web.Http.Cors;
using System.Web;

namespace WebExam.ApiControllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*", exposedHeaders: "SampleHeader")]
    public class SignUpController : ApiController
    {
        //Method to get All Customer Details
        public List<SignUp> GetLogin()
        {
            try
            {
                //Creating an object of DataBaseEntity
                WebApiDataBaseEntities2 database = new WebApiDataBaseEntities2();
                List<SignUp> signUpList = database.SignUps.ToList();
                return signUpList;
            }
            catch (Exception)
            {

                throw;
            }

        }
        //Method to get Customer Detail by ID
        public SignUp GetLogin(string email, string pass)
        {
            try
            {
                //Creating an object of DataBaseEntity
                WebApiDataBaseEntities2 database = new WebApiDataBaseEntities2();
                SignUp signUp = database.SignUps.Where(temp => temp.Email == email && temp.Passwords == pass).FirstOrDefault();
                return signUp;
            }
            catch (Exception)
            {

                throw;
            }

        }

        public SignUp GetLogin(int ID)
        {
            try
            {
                //Creating an object of DataBaseEntity
                WebApiDataBaseEntities2 database = new WebApiDataBaseEntities2();
                SignUp signUp = database.SignUps.Where(temp => temp.UserID == ID).FirstOrDefault();
                return signUp;
            }
            catch (Exception)
            {

                throw;
            }

        }

        public void PostSignUp(SignUp signUp)
        {
            try
            {
                //Creating an object of DataBaseEntity
                WebApiDataBaseEntities2 database = new WebApiDataBaseEntities2();
                database.SignUps.Add(signUp);
                database.SaveChanges();
            }
            catch (Exception)
            {

                HttpContext.Current.Response.Write("Kindly Fill the details Properly");
            }

        }

    }
}

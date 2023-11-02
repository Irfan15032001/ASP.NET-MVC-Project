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
    public class CartMasterController : ApiController
    {

        //Method to Get the Order Details
        public List<CartMaster> GetCart()
        {
            try
            {
                //Creating an object of DataBaseEntity
                WebApiDataBaseEntities2 database = new WebApiDataBaseEntities2();
                List<CartMaster> cartList = database.CartMasters.ToList();
                return cartList;
            }
            catch (Exception)
            {

                throw;
            }

        }

        public List<CartMaster> GetCart(int ID)
        {
            try
            {
                //Creating an object of DataBaseEntity
                WebApiDataBaseEntities2 database = new WebApiDataBaseEntities2();
                List<CartMaster> cartList = database.CartMasters.Where(temp => temp.UserID == ID).ToList();
                return cartList;
            }
            catch (Exception)
            {

                throw;
            }

        }
        //Method to Get the Details by ID
        //public CartMaster GetCartItem(int ID)
        //{
        //    try
        //    {
        //        //Creating an object of DataBaseEntity
        //        WebApiDataBaseEntities2 database = new WebApiDataBaseEntities2();
        //        CartMaster cart = database.CartMasters.Where(temp => temp.UserID == ID).FirstOrDefault();
        //        return cart;
        //    }
        //    catch (Exception)
        //    {

        //        throw;
        //    }

        //}
        //Method to Insert the data
        public void PostCart(CartMaster cart)
        {
            try
            {
                //Creating an object of DataBaseEntity
                WebApiDataBaseEntities2 database = new WebApiDataBaseEntities2();
                //Adding the data
                database.CartMasters.Add(cart);
                database.SaveChanges();
            }
            catch (Exception)
            {

                throw;
            }

        }
        //Method to Upadte the Order Details
        public void PutCart(CartMaster cart)
        {
            try
            {
                //Creating an object of DataBaseEntity
                WebApiDataBaseEntities2 database = new WebApiDataBaseEntities2();
                var existingCart = database.CartMasters.Where(temp => temp.CartID == cart.CartID).FirstOrDefault();
                //Updating the data
                existingCart.CartID = cart.CartID;
                existingCart.UserID = cart.UserID;
                existingCart.ProductID = cart.ProductID;
                existingCart.ProdName = cart.ProdName;
                existingCart.ProdQty = cart.ProdQty;
                existingCart.ProdPrice = cart.ProdPrice;
                existingCart.ProdTotal = cart.ProdTotal;
                existingCart.Tag = cart.Tag;
                database.SaveChanges();

            }
            catch (Exception)
            {

                throw;
            }

        }

        //MEthod to delete the Order
        public void DeleteCart(long ID)
        {
            try
            {
                //Creating an object of DataBaseEntity
                WebApiDataBaseEntities2 database = new WebApiDataBaseEntities2();
                var existingCart = database.CartMasters.Where(temp => temp.CartID == ID).FirstOrDefault();
                //Deleting the data
                database.CartMasters.Remove(existingCart);
                database.SaveChanges();
            }
            catch (Exception)
            {

                throw;
            }


        }
    }
}

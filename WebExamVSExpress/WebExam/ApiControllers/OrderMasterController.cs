using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebExam.Models;
using System.Web.Http.Cors;

namespace WebExam.ApiControllers
{                                                                               
    [EnableCors(origins: "*", headers: "*", methods: "*", exposedHeaders: "SampleHeader")]
    public class OrderMasterController : ApiController
    {
        //Method to Get the Order Details
        public List<OrderMaster> GetOrder()
        {
            try
            {
                //Creating an object of DataBaseEntity
                WebApiDataBaseEntities2 database = new WebApiDataBaseEntities2();
                List<OrderMaster> orderList = database.OrderMasters.ToList();
                return orderList;
            }
            catch (Exception)
            {

                throw;
            }
           
        }

        //public List<OrderMaster> GetOrder(int ID)
        //{
        //    try
        //    {
        //        //Creating an object of DataBaseEntity
        //        WebApiDataBaseEntities2 database = new WebApiDataBaseEntities2();
        //        List<OrderMaster> orderList = database.OrderMasters.Where(temp => temp.OrderID == ID).ToList();
        //        return orderList;
        //    }
        //    catch (Exception)
        //    {

        //        throw;
        //    }

        //}

        //Method to Get the Details by ID
        public OrderMaster GetOrder(int ID)
        {
            try
            {
                //Creating an object of DataBaseEntity
                WebApiDataBaseEntities2 database = new WebApiDataBaseEntities2();
                OrderMaster order = database.OrderMasters.Where(temp => temp.OrderID == ID).FirstOrDefault();
                return order;
            }
            catch (Exception)
            {

                throw;
            }

        }
        //Method to Insert the data
        public void PostOrder(OrderMaster order)
        {
            try
            {
                //Creating an object of DataBaseEntity
                WebApiDataBaseEntities2 database = new WebApiDataBaseEntities2();
                //Adding the data
                database.OrderMasters.Add(order);
                database.SaveChanges();
            }
            catch (Exception)
            {

                throw;
            }
       
        }
        //Method to Upadte the Order Details
        public void PutOrder(OrderMaster order)
        {
            try
            {
                //Creating an object of DataBaseEntity
                WebApiDataBaseEntities2 database = new WebApiDataBaseEntities2();
                var existingOrder = database.OrderMasters.Where(temp => temp.OrderID == order.OrderID).FirstOrDefault();
                //Updating the data
                existingOrder.OrderID = order.OrderID;
                existingOrder.UserID = order.UserID;
                existingOrder.ProductID = order.ProductID;
                existingOrder.ProdName = order.ProdName;
                existingOrder.ProdQty = order.ProdQty;
                existingOrder.ProdPrice = order.ProdPrice;
                existingOrder.ProdTotal = order.ProdTotal;
                existingOrder.Tag = order.Tag;
                database.SaveChanges();

            }
            catch (Exception)
            {

                throw;
            }
        
        }

        //MEthod to delete the Order
        public void DeleteOrder(long ID)
        {
            try
            {
                //Creating an object of DataBaseEntity
                WebApiDataBaseEntities2 database = new WebApiDataBaseEntities2();
                var existingOrder = database.OrderMasters.Where(temp => temp.OrderID == ID).FirstOrDefault();
                //Deleting the data
                database.OrderMasters.Remove(existingOrder);
                database.SaveChanges();
            }
            catch (Exception)
            {

                throw;
            }
        

        }
    }
}

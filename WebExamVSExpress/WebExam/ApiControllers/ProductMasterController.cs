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
    public class ProductMasterController : ApiController
    {
        //Method to Get The List of Product
        public List<ProductMaster> GetProduct()
        {
            try
            {
                //Creating an object of DataBaseEntity
                WebApiDataBaseEntities2 database = new WebApiDataBaseEntities2();
                List<ProductMaster> productList = database.ProductMasters.ToList();
                return productList;
            }
            catch (Exception)
            {

                throw;
            }

        }
        //Method to Get the Product by ID
        public ProductMaster GetProduct(int ID)
        {
            try
            {
                //Creating an object of DataBaseEntity
                WebApiDataBaseEntities2 database = new WebApiDataBaseEntities2();
                ProductMaster product = database.ProductMasters.Where(temp => temp.ProductID == ID).FirstOrDefault();
                return product;
            }
            catch (Exception)
            {

                throw;
            }
 
        }
        //Method to Insert the data in product table
        public void PostProduct(ProductMaster product)
        {
            try
            {
                //Creating an object of DataBaseEntity
                WebApiDataBaseEntities2 database = new WebApiDataBaseEntities2();
                //Adding the data
                database.ProductMasters.Add(product);
                database.SaveChanges();
            }
            catch (Exception)
            {

                throw;
            }

        }
        //Method to Update the product table
        public void PutProduct(ProductMaster product)
        {
            try
            {
                //Creating an object of DataBaseEntity
                WebApiDataBaseEntities2 database = new WebApiDataBaseEntities2();
                var existingProduct = database.ProductMasters.Where(temp => temp.ProductID == product.ProductID).FirstOrDefault();
                //Updating the data
                existingProduct.ProductID = product.ProductID;
                existingProduct.ProductName = product.ProductName;
                existingProduct.Quantity = product.Quantity;
                existingProduct.Price = product.Price;
                existingProduct.Tag = product.Tag;
                database.SaveChanges();
            }
            catch (Exception)
            {

                throw;
            }
 
        }

        // Method to delete the product from database
        public void DeleteProduct(long ID)
        {
            try
            {
                //Creating an object of DataBaseEntity
                WebApiDataBaseEntities2 database = new WebApiDataBaseEntities2();
                var existingProduct = database.ProductMasters.Where(temp => temp.ProductID == ID).FirstOrDefault();
                //Deleting the data
                database.ProductMasters.Remove(existingProduct);
                database.SaveChanges();
            }
            catch (Exception)
            {

                throw;
            }
    

        }
        
    }
}

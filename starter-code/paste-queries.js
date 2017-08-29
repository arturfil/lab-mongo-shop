// 1.2 | Insert our first users in users collection
// ------------------------------------------------
// PASTE 3 USER INSERT QUERIES HERE
use myShop
switched to db myShop
> db.users.insertOne(
... {
...   "firstName": "John",
...   "lastName": "Smith",
...   "dateBirth": ISODate("2016-12-10T18:28:09.369Z"),
...   "address": {
...     "streetAddress": "21 2nd Street",
...     "city": "New York",
...     "state": "NY",
...     "postalCode": "10021"
...   }
... }
... )

{
	"acknowledged" : true,
	"insertedId" : ObjectId("59a5d426930c3f3cc0f8319e")
}
> db.users.insertMany(
... {
... ...   "firstName": "John",
... ...   "lastName": "Smith",
... ...   "dateBirth": ISODate("2016-12-10T18:28:09.369Z"),
... ...   "address": {
... ...     "streetAddress": "21 2nd Street",
... ...     "city": "New York",
... ...     "state": "NY",
... ...     "postalCode": "10021"
... ...   }
...
...
> cls

> db.users.insertOne(
... {
... ...   "firstName": "Arturo",
... ...   "lastName": "Filio",
... ...   "dateBirth": ISODate("1988-12-10T18:28:09.369Z"),
... ...   "address": {
... ...     "streetAddress": "22 2nd Street",
... ...     "city": "Miami",
... ...     "state": "FL",
... ...     "postalCode": "33130"
... ...   }
... ... }
... )

db.users.insertOne(
... {
... ...   "firstName": "Ryan",
... ...   "lastName": "Wang",
... ...   "dateBirth": ISODate("1988-12-10T18:28:09.369Z"),
... ...   "address": {
... ...     "streetAddress": "23 2nd Street",
... ...     "city": "Miami",
... ...     "state": "FL",
... ...     "postalCode": "33130"
... ...   }
... ... }
... )



// 1.3 | Insert our first products in products collection
// ------------------------------------------------------
// PASTE 3 PRODUCT INSERT QUERIES HERE
db.products.insertOne(
... {
...    "name": "Water Bottle",
...    "description":"High quality glass bottle provides a healthier way to drink.  Silicone sleeve provides a good grip, a see-through window, and protects the glass vessel.  Eliminates toxic leaching that plastic can cause.  Innovative design holds 22-1/2 ounces.  Dishwasher safe",
...    "category":"Kitchen",
...    "price":23.0
... }
... )

db.products.insertOne(
... {
...    "name": "back pack",
...    "description":"High quality back pack",
...    "category":"lux",
...    "price":2300.0
... }
... )

db.products.insertOne(
... {
...    "name": "nike",
...    "description":"italian leather shoes",
...    "category":"fashion",
...    "price":600.0
... }
... )


// 1.4 | Getting Started with queries
// ----------------------------------
// PASTE SHOPPING CART QUERY HERE
 db.users.update(
   {firstName: 'Ryan'},
    { $push:
      { shoppingCart:
        [
          'ObjectId("59a5d6d0930c3f3cc0f831a2")', 'ObjectId("59a5d74d930c3f3cc0f831a3")'
        ]
      }
    }
  )

 db.users.update(
   {name: 'John'},
   { $push:
     { shoppingCart:
       [
         'ObjectId("59a5d59d930c3f3cc0f831a1")'
       ]
     }
   }
 )

 db.users.update(
   {firstName: 'Arturo'},
   { $push:
     { shoppingCart: 'ObjectId("59a5d6d0930c3f3cc0f831a2")' }
   }
 )


// PASTE LIST PRODUCTS QUERY HERE
db.products.find()


// PASTE CATEGORY PRODUCTS QUERY HERE
> db.products.find({category: "lux"}).pretty()
{
	"_id" : ObjectId("59a5d6d0930c3f3cc0f831a2"),
	"name" : "back pack",
	"description" : "High quality back pack",
	"category" : "lux",
	"price" : 2300
}

// PASTE DELETE PRODUCT QUERY HERE
db.products.deleteOne({name: 'back pack'})
{ "acknowledged" : true, "deletedCount" : 1 }

// PASTE REVIEW QUERY HERE
db.products.updateOne(
  { name: 'nike' },
  { $push:
    { reviews:
      { name: "Arturo" ,comment: "This are comfy",stars: 4.8,date: new Date(2017,5,1)}
    }
  }
)

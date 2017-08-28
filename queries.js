/* Fill out these functions using Mongoose queries*/
var Listing =  require('./ListingSchema.js'),
      mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      config = require('./config');

mongoose.connect('mongodb://JianyiGao:awesome5@ds159493.mlab.com:59493/bootcamp')


var findLibraryWest = function() {
  /*
    Find the document that contains data corresponding to Library West,
    then log it to the console.
   */
    Listing.findOne({name: "Library West"}, function(error, listing){
      if (error) throw error;
      console.log(listing);
    }
  );
};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console.
   */
   Listing.findOne({code: "CABL"}, function(error, listing){
     if (error) throw error;
     console.log(listing);

     listing.remove(function(error){
       if (error) throw error;
     });

   });
};
var updatePhelpsMemorial = function() {
  /*
    Phelps Memorial Hospital Center's address is incorrect. Find the listing, update it, and then
    log the updated document to the console.
   */
   Listing.findOneAndUpdate({name: "Phelps Laboratory"}, {address: "1953 Museum Road, Gainesville, FL 32611, United States"}, function(error, listing){
     if(error) throw error;
     console.log(listing);
   });

};
var retrieveAllListings = function() {
  /*
    Retrieve all listings in the database, and log them to the console.
   */
   Listing.find({}, function(error, listings){
     if (error) throw error;
     console.log(listings);
   });
};

findLibraryWest();
removeCable();
updatePhelpsMemorial();
retrieveAllListings();

'use strict';
/*
  Import modules/files you may need to correctly run the script.
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Listing = require('./ListingSchema.js'),
    config = require('./config');

// var generator = require('mongoose-gen');

/* Connect to your database */
mongoose.connect('mongodb://JianyiGao:awesome5@ds159493.mlab.com:59493/bootcamp')
/*
  Instantiate a mongoose model for each listing object in the JSON file,
  and then save it to your Mongo database
 */
var data = fs.readFileSync('./listings.json', {encoding: 'utf8'});
var listingData = JSON.parse(data).entries;
//console.log(listingData);
//
listingData.forEach(function(listing){
  let newListing = new Listing(listing);
  newListing.save(function(error){
    if (error){
      console.log("Error")
      throw error;
    }
  });
   console.log('listing created');
});





/*
  Once you've written + run the script, check out your MongoLab database to ensure that
  it saved everything correctly.
 */

const { ObjectId } = require("mongodb");
const Hotel = require("../models/Hotel");
const User = require("../models/User")

exports.create = (_req, res) => {
  res.send("OK");
};

exports.read = (req, res) => {
  Hotel.find({})
    .then((response) => {
      if (!response) {
        return res.status(404).send({ msg: "No data found" });
      }
      return res.status(200).json({ data: response });
    })
    .catch((err) => {
      return res.status(500).send({ error: err.message });
    });
};

exports.readOne = (req, res) => {
  const { id } = req.params;

  Hotel.findById(id)
    .then((response) => {
      return res.status(200).json({ data: response });
    })
    .catch((err) => {
      res.status(500).send({ error: err.message });
    });
};

exports.addFavourite = (req,res) => {
  let userId = req.cookies.holidayMakerCookie.split('Bearer')[1]
  console.log(userId)
  let hotelId = req.params.id

   User.findByIdAndUpdate(userId,{$push:{"bookmarkedHotels": hotelId}}, function(err, result){
        if(err){
            res.status(400).send('the')
        }
        else{
            res.send('result')
        }
    })}

exports.deleteFavourite = (req,res) => {
  let userId = req.cookies.holidayMakerCookie.split('Bearer')[1]
  console.log(userId)
  let hotelId = req.params.id

   User.findByIdAndUpdate(userId,{$pull:{"bookmarkedHotels": hotelId}}, function(err, result){
        if(err){
            res.status(200).send(res)
        }
        else{
            res.status(204).send('has been updated :D')
        }
    })
}

exports.getFavourites = (req,res) => {
  let userId = req.cookies.holidayMakerCookie.split('Bearer')[1]
  console.log(userId)
  let hotelId = req.params.id

   User.findByIdAndUpdate(userId,{$pull:{"bookmarkedHotels": hotelId}}, function(err, result){
        if(err){
            res.status(400).send(err)
        }
        else{
            res.status(204).send('has been deleted :D')
        }
    })
}
exports.getStar = (req,res) => {
  let userId = req.cookies.holidayMakerCookie.split('Bearer')[1]
  console.log(userId)

  User.findById(userId)
  .then(response => {
    res.status(200).send(response.bookmarkedHotels)
  })
}




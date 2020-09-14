# Filstruktur
## Models
- Katalog för mongoose schemas

## Routes
- API endpoints enligt CRUD
	- exports.create
	- exports.read
	- exports.update
	- exports.delete
- Logiken för funktionen skrivs sedan i /server/controllers
- index.js exporterar routes till server/server.js där de sedan monteras

## Controllers
- Katalog för express funktionerna till våra endpoints

## Config
- konfigurationer
- miljövariabler


---
# API Specifikation
<br>

### **GET** */flights/*
<br>

> ***Query params:***
> 
> checkIn=new Date.toISOString()\
> checkOut=new Date.toISOString()\
> adults=Number\
> children=Number

<br>


> ***Response body***
> 
> ```
> {
> 	price: Number,
> 	departureDate: new Date.toISOString(),
> 	returnDate: new Date.toISOString()
> }
> ```
<br>

### **POST** */orders/*
<br>

> ***Request body***
> 
> ```
> {
> 	userId: mongoose.Schema.Types.ObjectID,
> 	adults: Number,
> 	children: Number,
> 	hotel: mongoose.Schema.Types.ObjectID,
> 	totalPrice: Number,
> 	rooms: [{
> 		roomNumber: String,
> 		option: String,
> 		extraBed: Boolean,
> 		price: Number
> 	}],
> 	bookingDates: {
> 		start: new Date.toISOString(),
> 		end: new Date.toISOString()
> 	},
> 	flight: null | {
> 		departureDate: new Date.toISOString(),
> 		returnDate: new Date.toISOString(),
> 		price: Number
> 	}
> }
> ```
<br>

> ***Response body***
> 
> ```
> {
> 	_id: mongoose.Schema.Types.ObjectID,
> 	userId: mongoose.Schema.Types.ObjectID,
> 	adults: Number,
> 	children: Number,
> 	hotel: mongoose.Schema.Types.ObjectID,
> 	totalPrice: Number,
> 	rooms: [{
> 		_id: mongoose.Schema.Types.ObjectID,
> 		roomNumber: String,
> 		option: String,
> 		extraBed: Boolean,
> 		price: Number
> 	}],
> 	bookingDates: {
> 		start: new Date.toISOString(),
> 		end: new Date.toISOString()
> 	},
> 	flight: null | {
> 		departureDate: new Date.toISOString(),
> 		returnDate: new Date.toISOString(),
> 		price: Number
> 	}
> }
> ```


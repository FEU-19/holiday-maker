# Miami Agile Documentation

[Go to POST](##-Controllers)

##ER-Diagram

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

### **GET** _/flights/_

<br>

> **_Query params:_**
>
> checkIn=new Date.toISOString()\
> checkOut=new Date.toISOString()\
> adults=Number\
> children=Number

<br>

> **_Response body_**
>
> ```
> {
> 	price: Number,
> 	departureDate: new Date.toISOString(),
> 	returnDate: new Date.toISOString()
> }
> ```
>
> <br>

### **POST** _/orders/_

<br>

> **_Request body_**
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
>
> <br>

> **_Response body_**
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

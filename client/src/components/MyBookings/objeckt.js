 checkIn=new Date.toISOString()
 checkOut=new Date.toISOString()
 adults=Number
 children=Number
<br>

 {
 	price: Number,
 	departureDate: new Date.toISOString(),
 	returnDate: new Date.toISOString()
 }

<br>

 {
 	userId: mongoose.Schema.Types.ObjectID,
 	adults: Number,
 	children: Number,
 	hotel: mongoose.Schema.Types.ObjectID,
 	totalPrice: Number,
 	rooms: [{
 		roomNumber: String,
 		option: String,
 		extraBed: Boolean,
 		price: Number
 	}],
 	bookingDates: {
 		start: new Date.toISOString(),
 		end: new Date.toISOString()
 	},
 	flight: null | {
 		departureDate: new Date.toISOString(),
 		returnDate: new Date.toISOString(),
		price: Number
 	}
 }

<br>

 {
 	_id: mongoose.Schema.Types.ObjectID,
 	userId: mongoose.Schema.Types.ObjectID,
 	adults: Number,
 	children: Number,
 	hotel: mongoose.Schema.Types.ObjectID,
 	totalPrice: Number,
 	rooms: [{
 		_id: mongoose.Schema.Types.ObjectID,
 		roomNumber: String,
 		option: String,
 		extraBed: Boolean,
 		price: Number
 	}],
 	bookingDates: {
 		start: new Date.toISOString(),
 		end: new Date.toISOString()
 	},
 	flight: null | {
 		departureDate: new Date.toISOString(),
 		returnDate: new Date.toISOString(),
 		price: Number
 	}
 }


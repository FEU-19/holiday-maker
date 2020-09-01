# Filstruktur
### Models
- Mongoose Schemas

### Routes
- API endpoints enligt CRUD
	- exports.create
	- exports.read
	- exports.update
	- exports.delete
- Logiken för funktionen skrivs sedan i /server/controllers
- index.js exporterar routes till server/server.js där de sedan monteras

### Controllers
- Här skrivs funktionen för våra endpoints

### Config
- konfigurationer
- miljövariabler
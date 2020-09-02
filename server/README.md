# Filstruktur
### Models
- Katalog för mongoose schemas

### Routes
- API endpoints enligt CRUD
	- exports.create
	- exports.read
	- exports.update
	- exports.delete
- Logiken för funktionen skrivs sedan i /server/controllers
- index.js exporterar routes till server/server.js där de sedan monteras

### Controllers
- Katalog för express funktionerna till våra endpoints

### Config
- konfigurationer
- miljövariabler
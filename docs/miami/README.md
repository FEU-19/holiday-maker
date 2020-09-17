# Miami Agile Documentation

- [Miami Agile Documentation](#miami-agile-documentation)
- [E/R Diagram Med Modeller](#er-diagram-med-modeller)
- [Filstruktur i server mappen](#filstruktur-i-server-mappen)
  - [Models](#models)
  - [Routes](#routes)
  - [Controllers](#controllers)
  - [Config](#config)
- [API Specifikation](#api-specifikation)
    - [**GET** _/flights/_](#get-flights)
    - [**POST** _/orders/_](#post-orders)
- [Wireframes](#wireframes)
  - [Sprint 1](#sprint-1)
  - [Sprint 2](#sprint-2)
- [Beteenden](#beteenden)
  - [Sprint 1](#sprint-1-1)
  - [Sprint 2](#sprint-2-1)
- [Burndown chart](#burndown-chart)
  - [Sprint 1](#sprint-1-2)
  - [Sprint 2](#sprint-2-2)
  - [Sprint 2 - updated](#sprint-2---updated)
  - [Detailed Documentation](#detailed-documentation)
- [UX Force](#ux-force)
  - [Färgpalett](#färgpalett)

<br>

# E/R Diagram Med Modeller

![Miami E/R Diagram Med Modeller](https://i.ibb.co/CJdNJQ4/Miami-E-R-diagram.jpg)

<br>

# Filstruktur i server mappen

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

<br>

# API Specifikation

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

<br>

# Wireframes
## Sprint 1
 ![Sprint 1-SpecHotel](https://i.ibb.co/ScF1q0C/Screen-Shot-2020-09-17-at-1-12-03-PM.png)

 ![Sprint 1-SpecRoom](https://i.imgur.com/nWO7bxz.png)

 ![Sprint 1-SuccessModal](https://i.imgur.com/wBpAFbJ.png)

 ![Sprint 1-FailModal](https://i.imgur.com/zbbfreX.png)
 
 ![Sprint 1-PaymentPage](https://i.imgur.com/Y6LB0uV.png)

## Sprint 2
 ![Sprint 2-PaymentPage2](https://i.imgur.com/eoCKHXx.png)
 
 ![Sprint 2-FlightPage](https://i.imgur.com/c4zWeKd.png)

![Sprint 2-PaymentPage3](https://i.ibb.co/0yBdKxq/Screen-Shot-2020-09-17-at-1-28-57-PM.png)


# Beteenden
## Sprint 1

```
Feature: Tillval av rumstyp - Självhushåll

    Som besökare vill jag kunna välja självhushåll, så vi kan äta alla måltider på 
    boendet.

    Scenario: Välja självhushåll

        Given jag är på bokningssidan,
        And jag ser en checkbox med självhushåll som option
        When jag klickar på den
        Then självhushåll blir utvalt


```
```
Feature: Tillval av rumstyp - Halvpension

    Som besökare vill jag kunna välja Halvpension, så att jag bara behöver betala för frukost.
    
    Scenario: Välja halvpension

        Given jag är på bokningssidan,
        And jag ser en checkbox med halvpension som option
        When jag klickar på den
        Then halvpension blir utvalt
```
```
Feature: Tillval av rumstyp - Helpension

    Som besökare vill jag kunna välja Helpension, så vi kan äta alla måltider på boendet.

    Scenario: Välja helpension

        Given jag är på bokningssidan,
        And jag ser en checkbox med helpension som option
        When jag klickar på den
        Then helpension blir utvalt
```
```
Feature: Tillval av rumstyp - All-inklusiv

    Som besökare vill jag kunna välja All-inclusive, så att jag inte behöver betala separat för mat och dryck på boendet.
    
    Scenario: Välja all-inklusiv
        Given jag är på bokningssidan,
        And jag ser en checkbox med all-inklusiv som option
        When jag klickar på den
        Then all-inklusiv blir utvalt
```

```
Feature: Lägg till extrasäng

    Som besökare vill jag kunna lägga till en extrasäng per rum, så att en person
    till kan sova där.

    Scenario: lägg till extrasäng om möjligt
        Given att användaren är på 'boendebokningssidan'
        And att det går att lägga till 'extrasäng' till 'rummet'
        When användare klickar på select 'extrasäng'
        Then ska möjligheten att lägga till 'extrasäng' finnas
```
```
Feature: Boka flera rum

    Som besökare vill jag kunna boka ett eller flera rum så att hela sällskapet har sovplats.

    Scenario: boka ett eller flera rum.
        Given Att jag är på boknings sidan
        And Jag ser en select där jag kan antigen boka ett eller flera rum
        When jag har valt antalet av rum
        Then jag ser hur många rum jag har bokat
```


## Sprint 2
```
Feature: betalning

    Som besökare vill jag kunna ange mina person- och betaluppgifter så att min betalning kan processas.

    Scenario: genomföra en betalning
        Given att jag är på en betalningsidan
        And att jag har bokningsinfo om min resa
        And att jag har en formulär
        When att jag har fyllt i mina betalningsuppgifter
        Then betalningensprocessen kan genomföras vidare
```
```
Feature: betalning sätt

    Som besökare vill jag kunna betala med betalkort eller faktura.

    Scenario: genomföra en betalning med betalkort
        Given att jag är på en betalningsidan
        And att jag har en formulär
        And att jag har radiobuttons för betalningssätt
        When att jag har klickat i att betala med betalkort
        And att jag fyller i min kortinformation
        And att jag klickar på betala
        Then att betalningsprocessen genomförs



    Scenario: genomföra en betalning med faktura
        Given att jag är på en betalningsidan
        And att jag har en formulär
        And att jag har radiobuttons för betalningssätt
        When att jag har klickat i att betala med faktura
        Given att jag ser en formulär
        When att jag fyller i mina uppgifter
        And att jag klickar på betala
        Then att fakturan skickas till mig
```


```
Feature: Betalningsstatus

    User Story: Som besökare vill jag veta om min betalning gått igenom, så att jag kan agera utefter det.

    Scenario: Betalning lyckas

        Given att jag har valt ett eller flera boenden.
        And jag är på betalningssidan,
        When jag fyller i mina KORREKTA kortuppgifter
        Then ska jag får en form av bekräftelse på att betalningen lyckats och bokningen är genomförd.


    Scenario: Betalning misslyckas
        Given att jag har valt ett eller flera boenden.
        And jag är på betalningssidan,
        When jag fyller i mina INKORREKTA  kortuppgifter
        Then ska jag får en form av meddelande att betalningen oc bokningen misslyckats.
        And jag behöver kompletera eller fylla i korrekta uppgifter.
```

```
Feature: bekräftelse

    USER STORY: Som besökare vill jag få en bekräftelse på min betalning.

    Scenario: bekräftelse

        Given att jag är på paymentsidan.
        And har fyllt i alla uppgifter som är obligatoriska för betalningen.
        And klickat på finish & pay.
        And skapat en bokning.
        When betalningen har gått igenom.
        Then får jag en form av bekräftelse (modal/mail?) på min bokning.
```
```
Feature: boka flygbiljetter

    User Story: Som besökare vill jag kunna boka flygbiljetter för mitt resesällskap som passar mina resedatum, så att resan passar mitt boende.

    Scenario: Besökaren har valt boende och vill ha flygresa

        Given Att jag har valt rum för boende
        When När jag klickar på fortsätt knappen
        Then Då kommer jag till flygresa view
        And jag ser flygrekommendation som passar min flygresa datum
```
```
Feature:  Välja flygplats

    User Story: Som besökare vill jag kunna ange vilken flygplats jag ska resa ifrån.

    Scenario: Välja flygplats
        Given jag är på flygvyn
        When jag väljer avreseflygplats
        Then uppdateras valet
```
```
Feature: Flyg Ankomst

    USER STORY: Som besökare vill jag kunna se vilken flygplats jag kommer att landa på när jag ska till min destination.

    Scenario: Ankomst
        Given jag är på flygvyn
        When jag väljer ankomstflygplats 
        Then uppdateras valet
```
```
Feature: betala flygbiljetter
    User Story: Som besökare vill jag kunna betala mina flygbiljetter som en del av min bokning.

    Scenario: betala flygbiljetter
        Given jag är på betalningsidan
        And jag ser mina flygbiljettsdetaljer med pris
        And flygspriset tillagt i totalpriset
        When jag klickat på payment knappen
        Then betalar jag flygbiljetter också
```

<br>

# Burndown chart
## Sprint 1

![Sprint1 burndown chart](https://i.ibb.co/9nWchgg/burndown-chart-sprint-1.png)

## Sprint 2

![Sprint2 burndown chart](https://i.ibb.co/XsNK1hL/burndown-chart-sprint-2.png)

## Sprint 2 - updated 

![Sprint2 burndown chart](https://i.ibb.co/t2ZBtLH/burndown-chart-sprint-2-updated.png)


## Detailed [Documentation](https://docs.google.com/spreadsheets/d/1d2xGuAfyPO9JmSgjky-BMCE0gUKNhGcccgreUTvCvmk/edit#gid=1406260916)

<br>

# UX Force

## Färgpalett

![Pantones](https://i.ibb.co/0JbkPHq/Pantone-jeg.png)

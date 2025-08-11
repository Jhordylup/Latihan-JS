//LATIHAN 1
// class Book {
//     constructor(title, author) {
//         this.title = title;
//         this.author = author;
//     }
// }

// class Ebook extends Book {
//     constructor(title, author, fileSize) {
//         super(title, author);
//         this.fileSize = fileSize;
//     }

//     info() {
//         return `Ebook: ${this.title}, Author: ${this.author}, File Size: ${this.fileSize}`;
//     }
// }

// const myEbook = new Ebook("Belajar JavaScript", "John Doe", "2MB");
// console.log(myEbook.info());

// const myBook = new Book("Belajar Python", "Jane Doe");
// console.log(myEbook.info());
// console.log(myBook); // Output: Book { title: 'Belajar Python', author: 'Jane Doe' }
// const email = new Email();

            // LATIHAN 2
// class HotelRoom {
//     #isBooked = false;
    
//     bookRoom() {
//         this.#isBooked = true;
//     }

//     checkStatus() {
//         console.log(`Kamar telah ${this.#isBooked ? 'dipesan' : 'tersedia'}`);
//     }
// }

// const room = new HotelRoom();
// room.checkStatus(); // Output: Kamar telah tersedia

            //LATIHAN 3
// class Product {
//     constructor(name) {
//         this.name = name;
//     }
// }

// class Clothing extends Product {
//     constructor(name, size) {
//         super(name);
//         this.size = size;
//     }
//     info() {
//         return `Clothing: ${this.name}, Size: ${this.size}`;
//     }
// }

// const myClothing = new Clothing("Kaos", "L");
// console.log(myClothing.info());

            //LATIHAN 4
// class Ticket {
//     constructor(event, price) {
//         this.event = event;
//         this.price = price;
//     }
// }

// class VIPTicket extends Ticket {
//     constructor(event, price, perks) {
//         super(event, price);
//         this.perks = perks;
//     }

//     info() {
//         return `VIP Ticket for ${this.event} costs $${this.price}. Perks: ${this.perks.join(', ')}`;
//     }
// }

// const myTicket = new Ticket("Pertunjukan Teater", 80000);
// if (myTicket.price > 100.000) {
//     const myVipTicket = new VIPTicket(myTicket.event, myTicket.price, ["Akses VIP", "Makanan Gratis"]);
//     console.log(myVipTicket.info());
// } else {
//     console.log(myTicket);
// }

            //LATIHAN 5
// class Animal {
//     constructor(name, eat, sleep) {
//         this.name = name;
//         this.eat = eat;
//         this.sleep = sleep;
//     }
//     info() {
//         return `${this.name} eats ${this.eat} and sleeps ${this.sleep}`;
//     }
// }

// class Dog extends Animal {
//     constructor(name, eat, sleep, recall_energy) {
//         super(name, eat, sleep);
//         this.recall_energy = recall_energy;
//     }
//     info() {
//         return `${super.info()} anjing ini tidur untuk menambah staminanya ${this.recall_energy}`;
//     }
// }

// const myDog = new Dog("Buddy", "dog food", "8 jam", "2 jam");
// console.log(myDog.info()); // Output: Buddy eats dog food and sleeps 8 hours an

            //LATIHAN 6
// class Account {
//     #balance = 0;

//     deposit(amount) {
//         if (amount > 0) {
//             this.#balance += amount;
//         }
//     }

//     withdraw(amount) {
//         if (amount > 0 && amount <= this.#balance) {
//             this.#balance -= amount;
//         } else {
//             console.log("Penarikan gagal: saldo tidak cukup.");
//         }
//     }

//     getBalance() {
//         return this.#balance;
//     }
// }

// class SavingsAccount extends Account {
//     withdraw(amount) {
//         if (amount > 0 && amount <= this.getBalance() * 0.5) {
//             super.withdraw(amount);
//         } else {
//             console.log("Penarikan gagal: tidak boleh lebih dari 50% saldo.");
//         }
//     }
// }

// // Contoh penggunaan:
// const acc = new Account();
// acc.deposit(1000);
// acc.withdraw(500);
// console.log(acc.getBalance()); // Output: 500

// const savings = new SavingsAccount();
// savings.deposit(1000);
// savings.withdraw(600); // Output: Penarikan gagal: tidak boleh lebih dari 50% saldo.
// savings.withdraw(400); // Penarikan berhasil
// console.log(savings.getBalance()); //

            //LATIHAN 7
// class Vehicle {
//     #speed = 0;

//     accelerate(amount) {
//         if (amount > 0) {
//             this.#speed += amount;
//             if (this.#speed > 180) this.#speed = 180;
//         }
//     }

//     brake(amount) {
//         if (amount > 0) {
//             this.#speed -= amount;
//             if (this.#speed < 0) this.#speed = 0;
//         }
//     }

//     getSpeed() {
//         return this.#speed;
//     }
// }

// class Car extends Vehicle {
//     accelerate(amount) {
//         console.log("Car accelerating");
//         super.accelerate(amount);
//     }
// }

// // Contoh penggunaan:
// const myCar = new Car();
// myCar.accelerate(50); // Car accelerating
// console.log(myCar.getSpeed()); // Output: 50
// myCar.accelerate(150); // Car accelerating
// console.log(myCar.getSpeed()); // Output: 180 (maksimal)
// myCar.brake(30);

            //LATIHAN 8
// class Employee {
//     #workingHours = 0;

//     logHours(hours) {
//         if (hours > 0) {
//             this.#workingHours += hours;
//         }
//     }

//     getWorkingHours() {
//         return this.#workingHours;
//     }
// }

// class RemoteEmployee extends Employee {
//     logHours(hours) {
//         if (hours > 8) {
//             console.log("Exceeded daily work limit");
//         } else {
//             super.logHours(hours);
//         }
//     }
// }

// // Contoh penggunaan:
// const emp = new Employee();
// emp.logHours(5);
// console.log(emp.getWorkingHours()); // Output: 5

// const remoteEmp = new RemoteEmployee();
// remoteEmp.logHours(10); // Output: Exceeded daily work limit
// remoteEmp.logHours(7);
// console.log(remoteEmp.getWorkingHours()); //

            //LATIHAN 9
// class Airplane {
//     #altitude = 0;

//     ascend(meters) {
//         if (meters > 0) {
//             this.#altitude += meters;
//             if (this.#altitude > 12000) this.#altitude = 12000;
//         }
//     }

//     descend(meters) {
//         if (meters > 0) {
//             this.#altitude -= meters;
//             if (this.#altitude < 0) this.#altitude = 0;
//         }
//     }

//     getAltitude() {
//         return this.#altitude;
//     }
// }

// class Jet extends Airplane {
//     ascend(meters) {
//         // Naik dua kali lipat meter, tapi tidak melewati 12000
//         super.ascend(meters * 2);
//     }
// }

// // Contoh penggunaan:
// const plane = new Airplane();
// plane.ascend(5000);
// console.log(plane.getAltitude()); // Output: 5000
// plane.descend(2000);
// console.log(plane.getAltitude()); // Output: 3000

// const jet = new Jet();
// jet.ascend(4000); // Harus naik 8000
// console.log(jet.getAltitude()); // Output: 8000
// jet.ascend(3000); // Harus naik 6000, tapi maksimal 12000
// console.log(jet.getAltitude()); // Output: 12000

            //LATIHAN 10
// class ParkingSpot {
//     #isOccupied = false;

//     occupy() {
//         if (!this.#isOccupied) {
//             this.#isOccupied = true;
//         }
//     }

//     vacate() {
//         if (this.#isOccupied) {
//             this.#isOccupied = false;
//         }
//     }

//     isSpotOccupied() {
//         return this.#isOccupied;
//     }
// }

// class ElectricParkingSpot extends ParkingSpot {
//     occupy(carType) {
//         if (carType !== "electric") {
//             console.log("Only electric cars allowed");
//         } else {
//             super.occupy();
//         }
//     }
// }

// // Contoh penggunaan:
// const spot = new ParkingSpot();
// spot.occupy();
// console.log(spot.isSpotOccupied()); // Output: true
// spot.vacate();
// console.log(spot.isSpotOccupied()); // Output: false

// const eSpot = new ElectricParkingSpot();
// eSpot.occupy("diesel"); // Output: Only electric cars allowed
// console.log(eSpot.isSpotOccupied()); // Output: false
// eSpot.occupy("electric");

            //LATIHAN 11
// class User {
//     #password;
//     constructor(password) {
//         this.#password = password;
//     }

//     checkPassword(input) {
//         if (input === this.#password) {
//             console.log("Benar");
//         } else {
//             console.log("Salah");
//         }
//     }
// }

// // Contoh penggunaan:
// const user1 = new User("rahasia");
// user1.checkPassword("rahasia"); // Output: Benar
// user1.checkPassword("salah");

            //Latihan 12
// class Vehicle {
//     move() {
//         console.log("Kendaraan bergerak");
//     }
// }

// class Car extends Vehicle {
//     move() {
//         console.log("Mobil berjalan di jalan raya");
//     }
// }

// class Boat extends Vehicle {
//     move() {
//         console.log("Perahu berlayar di laut");
//     }
// }

// // Contoh penggunaan:
// const kendaraan = new Vehicle();
// kendaraan.move(); // Output: Kendaraan bergerak

// const mobil = new Car();
// mobil.move(); // Output: Mobil berjalan di jalan raya

// const perahu = new Boat();
// perahu.move(); // Output: Perahu berlayar

            //Latihan 13
// class Order {
//     #status = "Pending";

//     get status() {
//         return this.#status;
//     }

//     set status(newStatus) {
//         if (newStatus === "Delivered" || newStatus === "Cancelled") {
//             this.#status = newStatus;
//         }
//     }
// }

// // Contoh penggunaan:
// const order1 = new Order();
// console.log(order1.status); // Output: Pending
// order1.status = "Delivered";
// console.log(order1.status); // Output: Delivered
// order1.status = "Processing";
// console.log(order1.status); // Output: Delivered (tidak berubah)
// order1.status = "Cancelled";
// console.log(order1.status); //

            //LATIHAN 14
// class Payment {
//     #amount;
//     constructor(amount) {
//         this.#amount = amount;
//     }

//     process() {
//         console.log(`Memproses pembayaran sebesar ${this.#amount}`);
//     }

//     get amount() {
//         return this.#amount;
//     }
// }

// class CreditCardPayment extends Payment {
//     process() {
//         console.log(`Memproses pembayaran kartu kredit sebesar ${this.amount}`);
//     }
// }

// // Contoh penggunaan:
// const bayar1 = new Payment(50000);
// bayar1.process(); // Output: Memproses pembayaran sebesar 50000

// const bayarCC = new CreditCardPayment(100000);
// bayarCC.process(); // Output: Memproses pembayaran kartu

            //LATIHAN 15
// class Account {
//     #balance = 0;

//     constructor(initialBalance = 0) {
//         if (initialBalance > 0) {
//             this.#balance = initialBalance;
//         }
//     }

//     showBalance() {
//         console.log(`Saldo anda adalah: ${this.#balance}`);
//     }

//     // Untuk keperluan subclass
//     get balance() {
//         return this.#balance;
//     }
// }

// class PremiumAccount extends Account {
//     showBalance() {
//         console.log(`Saldo anda adalah: ${this.balance} (Akun Premium)`);
//     }
// }

// // Contoh penggunaan:
// const acc = new Account(5000);
// acc.showBalance(); // Output: Saldo anda adalah: 5000

// const premium = new PremiumAccount(10000);
// premium.showBalance(); // Output: Saldo anda adalah: 10000 (Akun Premium)

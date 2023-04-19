CREATE DATABASE EMedicine;
USE EMedicine;

CREATE Table Usres(ID INT Identity(1,1) PRIMARY KEY, FirstName VARCHAR(100), LastName VARCHAR(100), Password VARCHAR(100), 
Email VARCHAR(100), Fund DECIMAL(18,2), Type VARCHAR(100), Status INT, CreateOn DateTime);

CREATE Table Medicines(ID INT Identity(1,1) PRIMARY KEY, Name VARCHAR(100), Manufacturer VARCHAR(100), UnitePrice DECIMAL(18,2), 
Discount DECIMAL(18,2), Quantity INT, EXPDate DateTime, ImageUrl VARCHAR(100), Status INT)

CREATE Table Cart(ID INT Identity(1,1) PRIMARY KEY, UserId INT, MedicineId INT, UnitePrice DECIMAL(18,2), 
Discount DECIMAL(18,2), Quantity INT, TotalPrice DECIMAL(18,2))

CREATE Table Orders(ID INT Identity(1,1) PRIMARY KEY, UserId INT,OrderNo VARCHAR(100), OrderTotal DECIMAL(18,2), OrderStatus VARCHAR(100))

CREATE Table OrderItems(ID INT Identity(1,1) PRIMARY KEY, OrderId INT,MedicineId INT, UnitPrice DECIMAL(18,2), Discount DECIMAL(18,2),
Quantity INT, TotalPrice DECIMAL(18,2))


SELECT * FROM Usres;
SELECT * FROM Medicines;
SELECT * FROM Cart;
SELECT * FROM Orders;
SELECT * FROM OrderItems;

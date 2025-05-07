/*
* Drop tables
*/

-- drop persons
drop table if exists ImportPersons.dbo.Persons;

-- drop users
drop table if exists ImportPersons.dbo.Users;


/*
* Create tables 
*/

-- create Users
create table ImportPersons.dbo.Users (
    User_id int identity(1,1) not null primary key,
    Username nvarchar(128) not null unique,
    Password nvarchar(256) not null
);

-- create Persons
create table ImportPersons.dbo.Persons (
	Person_id int identity(1,1) not null primary key,
	Firstname nvarchar(128) not null,
	Lastname nvarchar(128) not null,
	Ssn nvarchar(13) not null unique,
	Address nvarchar(128) not null,
	Postcode nvarchar(32) not null,
	Country nvarchar(64) not null
);
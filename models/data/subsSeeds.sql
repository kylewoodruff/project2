-- Create Subscriptions
USE subman_db;
-- userIDs - 1=Jay, 2=George, 3=Kyle
INSERT INTO USERS (googleId,firstName,lastName,fullName,emailAddress,avatar,createdAt,updatedAt) VALUES
(111110855188629999969,"Jay","Miller","Jay Miller","jxmiller5@gmail.com","https://lh4.googleusercontent.com/-NuHVmahLVYY/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rf6E_I3D0FGREUKYdX0B9AgDSr8ag/mo/photo.jpg","2019-06-08 01:40:35","2019-06-08 01:40:35"),
(114849184463251654131,"George","Shpak","George Shpak","gshpak29@gmail.com","https://lh6.googleusercontent.com/-hKbODQTacK4/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rczXQebWvD0DYV3g6wwntg8B1UDoA/mo/photo.jpg","2019-06-08 01:31:26","2019-06-08 01:31:26"),
(116869204014199111998, 'Kyle', 'Woodruff', 'Kyle Woodruff', 'kylewoodruff@gmail.com', 'https://lh3.googleusercontent.com/-UlwUdYlJf_w/AAAAAAAAAAI/AAAAAAAABD8/dPpUeqLhDz8/photo.jpg', '2019-06-08 01:44:42', '2019-06-08 01:44:42');

INSERT INTO subscriptions (subscriptionName,amount,dueDate,userId,createdAt,updatedAt,categoryId)
VALUES 
("hulu",13,5,1,"2019-06-08 01:19:30","2019-06-08 01:19:30",NULL),
("apple",15,12,1,"2019-06-08 01:20:25","2019-06-08 01:20:25",NULL),
("netflix",16,12,1,"2019-06-08 01:21:15","2019-06-08 01:21:15",NULL),
("apple music",30,59,1,"2019-06-08 01:21:50","2019-06-08 01:21:50",NULL),
("amazon music",12,29,1,"2019-06-08 01:22:29","2019-06-08 01:22:29",NULL),
("amazon music",22,12,1,"2019-06-08 01:23:07","2019-06-08 01:23:07",NULL),
("Frys",100,8,2,"2019-06-08 01:31:53","2019-06-08 01:31:53",NULL),
("Hulu",20,15,2,"2019-06-08 01:33:35","2019-06-08 01:33:35",NULL),
("Verizon Wireless Bill",85,23,2,"2019-06-08 01:34:00","2019-06-08 01:34:00",NULL),
("Sirus Radio",9,1,2,"2019-06-08 01:34:46","2019-06-08 01:34:46",NULL),
("Farmers Only",20,13,2,"2019-06-08 01:35:13","2019-06-08 01:35:13",NULL),
("Netflix",18,25,3,"2019-06-08 01:44:56","2019-06-08 01:44:56",NULL),
("VidAngel",10,10,3,"2019-06-08 01:45:24","2019-06-08 01:45:24",NULL),
("HBO",13,15,3,"2019-06-08 01:45:38","2019-06-08 01:45:38",NULL),
("LA Fitness",13,29,3,"2019-06-08 01:45:52","2019-06-08 01:45:52",NULL),
("WWE",21,5,3,"2019-06-08 01:47:32","2019-06-08 01:47:32",NULL);

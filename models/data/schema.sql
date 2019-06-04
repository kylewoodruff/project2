DROP DATABASE IF EXISTS subman_db;
CREATE DATABASE subman_db;
USE subman_db;
CREATE TABLE subscription(
sub_id int(11) NOT NULL AUTO_INCREMENT,
sub_name varchar(200) DEFAULT NULL,
sub_price int(11) DEFAULT NULL,
sub_category VARCHAR(200),
sub_dueDate INT(31), 
  PRIMARY KEY (sub_id)
);

INSERT INTO subscription
  (sub_id, sub_name, sub_price, sub_category, sub_dueDate)
VALUES
  (1, 'Hulu', 20, 'video Streaming', 10),
  (2, 'Spotify', 20,'Music Streaming', 10),
  (3, 'DoorDash', 30, 'Food Delivery', 10),
  (4, 'Amazon Video', 20, 'video Streaming', 10),
  (5, 'Netflix', 15, 'video Streaming', 10);


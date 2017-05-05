-- phpMyAdmin SQL Dump
-- version 4.6.6deb4
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: May 03, 2017 at 01:35 AM
-- Server version: 5.7.17-0ubuntu1
-- PHP Version: 7.0.15-1ubuntu4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `Kaidee_V4`
--

-- --------------------------------------------------------

--
-- Table structure for table `addresses`
--

CREATE TABLE `addresses` (
  `uid` varchar(36) NOT NULL,
  `address` varchar(128) NOT NULL,
  `city` varchar(64) NOT NULL,
  `province` varchar(64) NOT NULL,
  `postcode` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `addresses`
--

INSERT INTO `addresses` (`uid`, `address`, `city`, `province`, `postcode`) VALUES
('012345678', '123/1', 'Bangkok', 'Sathorn', 12345),
('111111111', 'asdf', 'asdf', 'asdf', 12345),
('12345666', 'TEST , TEST CITY , TEST', 'TEST TEST TEST', 'TEST', 5555);

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `cid` varchar(36) NOT NULL,
  `name` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`cid`, `name`) VALUES
('001', 'Phone'),
('002', 'Computer'),
('003', 'Sport'),
('004', 'Bicycle'),
('005', 'Shoes'),
('006', 'Game'),
('007', 'Pet'),
('008', 'Camera'),
('009', 'Car'),
('010', 'Service');

-- --------------------------------------------------------

--
-- Table structure for table `chat_messages`
--

CREATE TABLE `chat_messages` (
  `buyer_uid` varchar(36) NOT NULL,
  `seller_uid` varchar(36) NOT NULL,
  `iid` varchar(36) NOT NULL,
  `message` varchar(256) DEFAULT NULL,
  `flag` int(3) NOT NULL DEFAULT '0',
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `from_buyer` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `chat_messages`
--

INSERT INTO `chat_messages` (`buyer_uid`, `seller_uid`, `iid`, `message`, `flag`, `timestamp`, `from_buyer`) VALUES
('012345678', '123456789', '00001', 'hello!', 0, '2017-05-02 11:25:46', 1),
('012345678', '123456789', '00001', '', 1, '2017-05-02 11:25:47', 0),
('012345678', '123456789', '00001', '', 2, '2017-05-02 11:25:48', 0);

-- --------------------------------------------------------

--
-- Table structure for table `chat_rooms`
--

CREATE TABLE `chat_rooms` (
  `buyer_uid` varchar(36) NOT NULL,
  `seller_uid` varchar(36) NOT NULL,
  `iid` varchar(36) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `chat_rooms`
--

INSERT INTO `chat_rooms` (`buyer_uid`, `seller_uid`, `iid`) VALUES
('012345678', '123456789', '00001'),
('111111111', '012345678', '00004'),
('012345678', '111111111', '00007');

-- --------------------------------------------------------

--
-- Table structure for table `feedbacks`
--

CREATE TABLE `feedbacks` (
  `fid` varchar(36) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `rating` float NOT NULL,
  `comment` varchar(512) DEFAULT NULL,
  `buyer_uid` varchar(36) NOT NULL,
  `seller_uid` varchar(36) NOT NULL,
  `iid` varchar(36) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `feedbacks`
--

INSERT INTO `feedbacks` (`fid`, `timestamp`, `rating`, `comment`, `buyer_uid`, `seller_uid`, `iid`) VALUES
('05725b14-2abf-11e7-9e9d-001c4296d418', '2017-04-26 20:29:17', 4, 'asfdasfdasdf', 'mynameisgod', '123456789', '00002'),
('075d32d7-2b8a-11e7-a028-001c4296d418', '2017-04-27 20:42:28', 2, '', '012345678', '123456789', '00007'),
('077a3b33-2abf-11e7-9e9d-001c4296d418', '2017-04-26 20:29:21', 4, 'asfdasfdasdf', 'mynameisgod', '123456789', '00002'),
('092624f7-2abf-11e7-9e9d-001c4296d418', '2017-04-26 20:29:23', 2, '', 'mynameisgod', '123456789', '00002'),
('0a00afe4-2abf-11e7-9e9d-001c4296d418', '2017-04-26 20:29:25', 3, '', 'mynameisgod', '123456789', '00002'),
('0ab7b7d8-2abf-11e7-9e9d-001c4296d418', '2017-04-26 20:29:26', 5, '', 'mynameisgod', '123456789', '00002'),
('0ae4431b-2abf-11e7-9e9d-001c4296d418', '2017-04-26 20:29:26', 5, '', 'mynameisgod', '123456789', '00002'),
('0b01040e-2abf-11e7-9e9d-001c4296d418', '2017-04-26 20:29:26', 5, '', 'mynameisgod', '123456789', '00002'),
('0b1c3d5a-2abf-11e7-9e9d-001c4296d418', '2017-04-26 20:29:27', 5, '', 'mynameisgod', '123456789', '00002'),
('0bc7c02c-2abf-11e7-9e9d-001c4296d418', '2017-04-26 20:29:28', 4, '', 'mynameisgod', '123456789', '00002'),
('0c7037fb-2abf-11e7-9e9d-001c4296d418', '2017-04-26 20:29:29', 5, '', 'mynameisgod', '123456789', '00002'),
('0c86df1d-2abf-11e7-9e9d-001c4296d418', '2017-04-26 20:29:29', 5, '', 'mynameisgod', '123456789', '00002'),
('0c9ca409-2abf-11e7-9e9d-001c4296d418', '2017-04-26 20:29:29', 5, '', 'mynameisgod', '123456789', '00002'),
('0ea380ac-2af1-11e7-9e9d-001c4296d418', '2017-04-27 02:27:27', 5, '', '012345678', '123456789', '00001'),
('107b7e40-2abf-11e7-9e9d-001c4296d418', '2017-04-26 20:29:36', 4, '', 'mynameisgod', '123456789', '00003'),
('114f3e7a-2abf-11e7-9e9d-001c4296d418', '2017-04-26 20:29:37', 4, '', 'mynameisgod', '123456789', '00003'),
('11662220-2abf-11e7-9e9d-001c4296d418', '2017-04-26 20:29:37', 4, '', 'mynameisgod', '123456789', '00003'),
('1205145b-2abf-11e7-9e9d-001c4296d418', '2017-04-26 20:29:38', 5, '', 'mynameisgod', '123456789', '00003'),
('3bba77c8-2b19-11e7-a028-001c4296d418', '2017-04-27 07:15:03', 4, '', '012345678', '012345678', '00010'),
('3dd4c381-2b19-11e7-a028-001c4296d418', '2017-04-27 07:15:06', 5, '', '012345678', '012345678', '00010'),
('3ffd561f-2b19-11e7-a028-001c4296d418', '2017-04-27 07:15:10', 4, '', '012345678', '123456789', '00003'),
('476aea2c-2b19-11e7-a028-001c4296d418', '2017-04-27 07:15:23', 4, 'This is good, very good game!', '012345678', '123456789', '00008'),
('bd62de9f-2b89-11e7-a028-001c4296d418', '2017-04-27 20:40:24', 4, 'test', '012345678', '123456789', '00003'),
('d4001999-2afe-11e7-a028-001c4296d418', '2017-04-27 04:06:02', 4, '', '012345678', '123456789', '00001'),
('e0f95fe7-2b18-11e7-a028-001c4296d418', '2017-04-27 07:12:31', 5, '', '012345678', '012345678', '00010'),
('e3d933c1-2ac3-11e7-9e9d-001c4296d418', '2017-04-26 21:04:08', 4, 'abx', 'mynameisgod', '123456789', '00001'),
('e66a17b8-2abe-11e7-9e9d-001c4296d418', '2017-04-26 20:28:25', 4, '', 'mynameisgod', '123456789', '00001'),
('e7991e8d-2ac3-11e7-9e9d-001c4296d418', '2017-04-26 21:04:15', 5, '', 'mynameisgod', '123456789', '00001'),
('eb5a883d-2ac3-11e7-9e9d-001c4296d418', '2017-04-26 21:04:21', 5, 'asdf', 'mynameisgod', '123456789', '00001'),
('eccf10dd-2abe-11e7-9e9d-001c4296d418', '2017-04-26 20:28:36', 3, '', 'mynameisgod', '123456789', '00001'),
('efd4f894-2abe-11e7-9e9d-001c4296d418', '2017-04-26 20:28:41', 5, 'spam', 'mynameisgod', '123456789', '00001'),
('ff06554c-2abe-11e7-9e9d-001c4296d418', '2017-04-26 20:29:06', 3, 'asfdasfd', 'mynameisgod', '123456789', '00001');

-- --------------------------------------------------------

--
-- Table structure for table `item_listing`
--

CREATE TABLE `item_listing` (
  `iid` varchar(36) NOT NULL,
  `name` varchar(64) NOT NULL,
  `description` varchar(2048) DEFAULT NULL,
  `price` float NOT NULL,
  `cid` varchar(36) NOT NULL,
  `since` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `seller_uid` varchar(36) NOT NULL,
  `product_location` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `item_listing`
--

INSERT INTO `item_listing` (`iid`, `name`, `description`, `price`, `cid`, `since`, `seller_uid`, `product_location`) VALUES
('00001', 'Samsung Galaxy Note 7', '-good\r\n-non flammable', 9000, '001', '2017-04-08 15:12:56', '123456789', '1600 Amphitheatre Parkway, Mountain View, CA'),
('00002', 'Apple Macbook Pro 2016 13inch', 'Double Touch Bar , Double the price', 90000, '002', '2017-04-08 15:14:51', '123456789', '7 Ang Mo Kio Street 64, Singapore 569086'),
('00003', 'iFone Zero', 'Created by the founders of Orange Inc.\r\nBest performance in market', 1299, '001', '2017-04-08 15:17:03', '123456789', 'Phayathai Rd, Pathum Wan, Khet Pathum Wan, Krung Thep Maha Nakhon 10330'),
('00004', 'Bae- Salt', 'salt from salt bae', 9999, '010', '2017-04-08 15:23:31', '111111111', 'Restaurant Village, Near Four Seasons Hotel، Jumeirah Road - Dubai - United Arab Emirates'),
('00005', 'Black Pearl', 'FAST FAST FAST FAST', 123457000, '009', '2017-04-08 15:25:02', '012345678', 'Caribbean Sea'),
('00006', 'Mermaid Tear', 'Fresh mermaid tear, one drop only , use wisely', 2499, '010', '2017-04-08 15:27:57', '012345678', 'Goldfish , Salt , Pepper'),
('00007', 'One Punch', 'One punch - by chuck norris', 9999, '010', '2017-04-08 15:28:51', '123456789', 'YOUR HOUSE'),
('00008', 'Starcraft CD', 'CD with CDKEY , 20 years old\r\nWindows XP Only', 3000, '006', '2017-04-08 15:30:28', '123456789', 'Blizzard Entertainment SAS \r\nTSA 60001 \r\n78008 Versailles CEDEX \r\nFrance'),
('00009', 'My Bicycle 2.0', 'My dad gave it to me', 5555560, '004', '2017-04-08 15:31:35', '111111111', 'MY HOUSE'),
('00010', 'Monkey', 'Undead Monkey', 78987, '007', '2017-04-08 15:32:23', '012345678', 'MY SHIP'),
('00012', 'Samsung Galaxy Note 7', '-good\r\n-non flammable', 9000, '001', '2017-04-26 23:14:10', '123456789', '1600 Amphitheatre Parkway, Mountain View, CA'),
('this-is-a-test-product', 'test product', 'test description', 192168, '009', '1996-11-12 21:22:34', '123456789', 'test address');

-- --------------------------------------------------------

--
-- Table structure for table `product_images`
--

CREATE TABLE `product_images` (
  `img_id` varchar(36) NOT NULL,
  `url` varchar(512) NOT NULL,
  `name` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `product_images`
--

INSERT INTO `product_images` (`img_id`, `url`, `name`) VALUES
('00001', 'https://cnet1.cbsistatic.com/img/mozjQZ5CI26L7mOYvkPp-eHPDj0=/770x433/2016/08/01/3d009ec0-1ba9-46c1-b1b0-82ca595d5793/spiralbinder-2016-18.jpg', 'Samsung Galaxy Note 7'),
('00002', 'https://cnet3.cbsistatic.com/img/dDZtgN80hNQkyMlv1NNBBBGFm2g=/1600x900/2016/08/05/2d17c618-85b9-44e7-979f-a13aa07f7744/samsung-galaxy-note-7.jpg', 'Samsung Galaxy Note 7'),
('00003', 'https://i.ytimg.com/vi/T7ZqdzO4cm4/maxresdefault.jpg', 'Apple Macbook Pro 2016 13inch'),
('00004', 'https://cnet1.cbsistatic.com/img/TSaODOZF9xhhcRyerjTT6WVu0-Y=/770x433/2016/11/04/d69ba8cc-9209-447b-885f-c3040dcf72e4/apple-macbook-pro-with-touch-bar-13-inch-2016-17.jpg', 'Apple Macbook Pro 2016 13inch'),
('00005', 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS6UrdtUvF6ZLWJ9acg8p5WrQtcVri_pOWx-oWPfahl579CkApYHw', 'Apple Macbook Pro 2016 13inch'),
('00006', 'https://cdn.macrumors.com/article-new/2012/11/ifone_5.jpg', 'iFone Zero'),
('00007', 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRBMsyXaGM4SAKA0Td6syB_oFhEHeVIbpLt__pWS_Vyi1jSFeO9', 'Bae- Salt'),
('00008', 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSN_1FHdBqZ2QlR565ziR-kBlgMUxt_KYVuFNB8v8deDkL5O2XV', 'Black Pearl'),
('00009', 'https://i.ytimg.com/vi/5rObtiPT-18/maxresdefault.jpg', 'Mermaid Tear'),
('00010', 'http://www.threegirlsmedia.com/wp-content/uploads/2012/06/Punch_logo_RGB.FINAL_-300x187.png', 'One Punch'),
('00011', 'http://vignette3.wikia.nocookie.net/starcraft/images/c/cb/Screenshot_SC2_DevGame1.jpg/revision/latest?cb=20080511221659', 'Starcraft CD'),
('00012', 'https://i.ytimg.com/vi/CQ5UMOeF0ok/maxresdefault.jpg', 'My Bicycle 2.0'),
('00013', 'http://i.dailymail.co.uk/i/pix/2014/12/10/23F3C29A00000578-2869031-image-a-1_1418247379173.jpg', 'Monkey');

-- --------------------------------------------------------

--
-- Table structure for table `product_images_relation`
--

CREATE TABLE `product_images_relation` (
  `iid` varchar(36) NOT NULL,
  `img_id` varchar(36) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `product_images_relation`
--

INSERT INTO `product_images_relation` (`iid`, `img_id`) VALUES
('00001', '00001'),
('00001', '00002'),
('00012', '00002'),
('00002', '00003'),
('00002', '00004'),
('00002', '00005'),
('00003', '00006'),
('00004', '00007'),
('00005', '00008'),
('00006', '00009'),
('00007', '00010'),
('00008', '00011'),
('00009', '00012'),
('00010', '00013');

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `sid` varchar(36) NOT NULL,
  `name` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `services`
--

INSERT INTO `services` (`sid`, `name`) VALUES
('c867c546-4778-4a3a-b06d-700864d18e40', 'KerryExpress');

-- --------------------------------------------------------

--
-- Table structure for table `service_offering`
--

CREATE TABLE `service_offering` (
  `buyer_uid` varchar(36) NOT NULL,
  `seller_uid` varchar(36) NOT NULL,
  `iid` varchar(36) NOT NULL,
  `sid` varchar(36) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `uid` varchar(36) NOT NULL,
  `first_name` varchar(64) NOT NULL,
  `last_name` varchar(64) NOT NULL,
  `phone` varchar(16) NOT NULL,
  `email` varchar(64) NOT NULL,
  `profile_pic` varchar(512) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`uid`, `first_name`, `last_name`, `phone`, `email`, `profile_pic`) VALUES
('012345678', 'Jack', 'Sparrow', '01110', 'thecaptain@caribbean.sea', 'https://static2.comicvine.com/uploads/original/11/111746/4352187-pirates4jacksparrowpostercropped.jpg'),
('111111111', 'Nusret', 'Gökçe', '0091100', 'thesaltbae@mysteakis.thebest', 'https://media1.giphy.com/media/26gsl2WC5tRxkemdi/200_s.gif'),
('12345666', 'Test', 'Pass', '5556', 'test@test.com', 'aaaa.jpg'),
('123456789', 'Chuck', 'Norris', '0812345678', 'chuck_norris@chucknorris.org', 'http://cdn.business2community.com/wp-content/uploads/2016/03/Vd3MJo.jpg'),
('mynameisgod', 'Morgan', 'Freeman', '999999', 'IamMorgan@Freeman.com', 'http://media.salon.com/2014/06/morgan_freeman.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `views`
--

CREATE TABLE `views` (
  `count` int(11) NOT NULL,
  `cid` varchar(36) NOT NULL,
  `uid` varchar(36) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `views`
--

INSERT INTO `views` (`count`, `cid`, `uid`) VALUES
(10028, '001', '012345678'),
(2, '001', '111111111'),
(23, '002', '012345678'),
(1234, '002', '123456789'),
(1, '004', '012345678'),
(5, '006', '012345678'),
(7, '007', '012345678'),
(9, '009', '012345678'),
(17, '010', '012345678');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `addresses`
--
ALTER TABLE `addresses`
  ADD PRIMARY KEY (`uid`,`address`,`city`,`province`,`postcode`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`cid`);

--
-- Indexes for table `chat_messages`
--
ALTER TABLE `chat_messages`
  ADD PRIMARY KEY (`buyer_uid`,`seller_uid`,`iid`,`timestamp`),
  ADD KEY `chat_messages_getMessages` (`buyer_uid`,`seller_uid`,`iid`,`timestamp`,`message`,`from_buyer`);

--
-- Indexes for table `chat_rooms`
--
ALTER TABLE `chat_rooms`
  ADD PRIMARY KEY (`buyer_uid`,`seller_uid`,`iid`),
  ADD KEY `fk_iid` (`iid`),
  ADD KEY `fk_uid2` (`seller_uid`),
  ADD KEY `fk_iid_seller` (`seller_uid`,`iid`);

--
-- Indexes for table `feedbacks`
--
ALTER TABLE `feedbacks`
  ADD PRIMARY KEY (`fid`),
  ADD KEY `fk_feedbacks_buyer` (`buyer_uid`),
  ADD KEY `fk_feedbacks_iid` (`iid`),
  ADD KEY `fk_feedbacks_seller` (`seller_uid`) USING BTREE,
  ADD KEY `feedback_getRatingOfSeller` (`seller_uid`,`rating`);

--
-- Indexes for table `item_listing`
--
ALTER TABLE `item_listing`
  ADD PRIMARY KEY (`iid`),
  ADD KEY `item_listing_ibfk1` (`cid`),
  ADD KEY `item_listing_frk2` (`seller_uid`),
  ADD KEY `item_listing_getProductByCategory` (`iid`,`cid`);

--
-- Indexes for table `product_images`
--
ALTER TABLE `product_images`
  ADD PRIMARY KEY (`img_id`);

--
-- Indexes for table `product_images_relation`
--
ALTER TABLE `product_images_relation`
  ADD PRIMARY KEY (`iid`,`img_id`),
  ADD KEY `img_id` (`img_id`),
  ADD KEY `product_images_relation_ibfk_1` (`iid`);

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`sid`);

--
-- Indexes for table `service_offering`
--
ALTER TABLE `service_offering`
  ADD PRIMARY KEY (`buyer_uid`,`seller_uid`,`iid`,`sid`),
  ADD KEY `sid` (`sid`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`uid`);

--
-- Indexes for table `views`
--
ALTER TABLE `views`
  ADD PRIMARY KEY (`cid`,`uid`),
  ADD KEY `uid` (`uid`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `addresses`
--
ALTER TABLE `addresses`
  ADD CONSTRAINT `fk_addresses_uid` FOREIGN KEY (`uid`) REFERENCES `users` (`uid`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `chat_messages`
--
ALTER TABLE `chat_messages`
  ADD CONSTRAINT `fk_chat_rooms` FOREIGN KEY (`buyer_uid`,`seller_uid`,`iid`) REFERENCES `chat_rooms` (`buyer_uid`, `seller_uid`, `iid`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `chat_rooms`
--
ALTER TABLE `chat_rooms`
  ADD CONSTRAINT `fk_buyer_uid` FOREIGN KEY (`buyer_uid`) REFERENCES `users` (`uid`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_iid` FOREIGN KEY (`iid`) REFERENCES `item_listing` (`iid`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_seller` FOREIGN KEY (`seller_uid`) REFERENCES `users` (`uid`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Constraints for table `feedbacks`
--
ALTER TABLE `feedbacks`
  ADD CONSTRAINT `fk_feedbacks_buyer` FOREIGN KEY (`buyer_uid`) REFERENCES `users` (`uid`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_feedbacks_iid` FOREIGN KEY (`iid`) REFERENCES `item_listing` (`iid`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_feedbacks_seller` FOREIGN KEY (`seller_uid`) REFERENCES `users` (`uid`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `item_listing`
--
ALTER TABLE `item_listing`
  ADD CONSTRAINT `item_listing_frk2` FOREIGN KEY (`seller_uid`) REFERENCES `users` (`uid`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `item_listing_ibfk1` FOREIGN KEY (`cid`) REFERENCES `categories` (`cid`) ON DELETE NO ACTION;

--
-- Constraints for table `product_images_relation`
--
ALTER TABLE `product_images_relation`
  ADD CONSTRAINT `product_images_relation_ibfk_1` FOREIGN KEY (`iid`) REFERENCES `item_listing` (`iid`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `product_images_relation_ibfk_2` FOREIGN KEY (`img_id`) REFERENCES `product_images` (`img_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `service_offering`
--
ALTER TABLE `service_offering`
  ADD CONSTRAINT `service_offering_ibfk_1` FOREIGN KEY (`buyer_uid`,`seller_uid`,`iid`) REFERENCES `chat_rooms` (`buyer_uid`, `seller_uid`, `iid`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `service_offering_ibfk_2` FOREIGN KEY (`sid`) REFERENCES `services` (`sid`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `views`
--
ALTER TABLE `views`
  ADD CONSTRAINT `views_ibfk_1` FOREIGN KEY (`cid`) REFERENCES `categories` (`cid`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `views_ibfk_2` FOREIGN KEY (`uid`) REFERENCES `users` (`uid`) ON DELETE NO ACTION ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

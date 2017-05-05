INSERT IGNORE INTO `chat_rooms` (`buyer_uid`, `seller_uid`, `iid`) VALUES
('012345678', '123456789', '00003'),
('111111111', '012345678', '00005');
INSERT INTO `chat_messages` (`buyer_uid`, `seller_uid`, `iid`, `message`, `flag`, `timestamp`, `from_buyer`) VALUES
('012345678', '123456789', '00003', 'Yo man!', 0, '2017-04-27 20:23:02', '0'),
('012345678', '123456789', '00003', 'sent you a Rating Request', 1, '2017-04-27 21:44:31', '0'),
('012345678', '123456789', '00003', 'sent you a Kerry Express Delivery From', 2, '2017-04-27 21:44:51', '0'),
('111111111', '012345678', '00005', 'hahaahahahahhaha sql is funnnnnn soooo funnnn', 0, '2017-04-27 06:15:01', '0'),
('111111111', '012345678', '00005', 'adsfasdfadsfadsfasdf', 0, '2017-04-27 06:15:08', '0'),
('111111111', '012345678', '00005', 'hadsfkafdsfsda', 0, '2017-04-27 06:15:21', '0'),
('111111111', '012345678', '00005', 'asdfadskjflasdjfadsjflkajsdfdasfkljdsfjalsdjfklads', 0, '2017-04-27 06:15:33', '0');
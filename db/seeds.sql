-- INSERT INTO tasks (name) VALUES ('Order Internet Service');
-- INSERT INTO tasks (name) VALUES ('Order Cable TV');
-- INSERT INTO tasks (name, complete) VALUES ('Resign from current job', true);
-- INSERT INTO tasks (name, complete) VALUES ('Find Movers', true);
-- INSERT INTO tasks (name, complete) VALUES ('Identify new neighborhood', true);
-- INSERT INTO tasks (name) VALUES ('Document wiring for TV / Stereo');
-- INSERT INTO tasks (name) VALUES ('Sell Austin Home');
-- INSERT INTO tasks (name) VALUES ('Purchase Refridgerator, Washer/Dryer');
-- INSERT INTO tasks (name) VALUES ('Pull money out of Home Association');


INSERT INTO `tasks` (`id`, `name`, `complete`, `date`, `createdAt`, `updatedAt`)
VALUES
	(1,'Order Internet Service',0,'2016-12-10 22:06:02',NULL,'2016-12-11'),
	(2,'Order Cable TV',1,'2016-12-10 22:06:00',NULL,'2016-12-11'),
	(3,'Resign from current job',1,'2016-11-08 14:42:25',NULL,NULL),
	(4,'Find Movers',1,'2016-11-08 14:42:25',NULL,NULL),
	(5,'Identify new neighborhood',1,'2016-11-08 14:42:25',NULL,NULL),
	(6,'Document wiring for TV / Stereo',0,'2016-11-08 14:42:25',NULL,NULL),
	(7,'Sell Austin Home',0,'2016-11-08 14:42:25',NULL,NULL),
	(8,'Purchase Refridgerator, Washer/Dryer',0,'2016-11-08 14:42:25',NULL,NULL),
	(9,'Pull money out of Home Association',0,'2016-11-08 14:42:25',NULL,NULL);
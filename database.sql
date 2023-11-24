  -- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
  --
  -- Host: localhost    Database: library
  -- ------------------------------------------------------
  -- Server version	8.0.34

  CREATE DATABASE  IF NOT EXISTS `library` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
  USE `library`;

  /*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
  /*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
  /*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
  /*!50503 SET NAMES utf8 */;
  /*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
  /*!40103 SET TIME_ZONE='+00:00' */;
  /*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
  /*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
  /*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
  /*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

  --
  -- Table structure for table `author`
  --

  DROP TABLE IF EXISTS `author`;
  /*!40101 SET @saved_cs_client     = @@character_set_client */;
  /*!50503 SET character_set_client = utf8mb4 */;
  CREATE TABLE `author` (
    `authorID` int NOT NULL AUTO_INCREMENT,
    `authorName` varchar(45) DEFAULT NULL,
    PRIMARY KEY (`authorID`),
    UNIQUE KEY `authorName_UNIQUE` (`authorName`)
  ) ENGINE=InnoDB AUTO_INCREMENT=60 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
  /*!40101 SET character_set_client = @saved_cs_client */;

  --
  -- Dumping data for table `author`
  --

  LOCK TABLES `author` WRITE;
  /*!40000 ALTER TABLE `author` DISABLE KEYS */;
  INSERT INTO `author` VALUES (42,'ádsadas'),(39,'asdsdas'),(38,'bxcvb'),(58,'fadgag'),(41,'fasdf'),(43,'final?'),(37,'làm lại'),(36,'ông nào đó');
  /*!40000 ALTER TABLE `author` ENABLE KEYS */;
  UNLOCK TABLES;

  --
  -- Table structure for table `author_write_book`
  --

  DROP TABLE IF EXISTS `author_write_book`;
  /*!40101 SET @saved_cs_client     = @@character_set_client */;
  /*!50503 SET character_set_client = utf8mb4 */;
  CREATE TABLE `author_write_book` (
    `authorID` int NOT NULL,
    `ISBN` varchar(13) NOT NULL,
    KEY `ISBN_idx` (`ISBN`),
    KEY `author_write_book_ibfk_2_idx` (`authorID`),
    CONSTRAINT `author_write_book_ibfk_1` FOREIGN KEY (`ISBN`) REFERENCES `book` (`ISBN`) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT `author_write_book_ibfk_2` FOREIGN KEY (`authorID`) REFERENCES `author` (`authorID`) ON DELETE CASCADE ON UPDATE CASCADE
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
  /*!40101 SET character_set_client = @saved_cs_client */;

  --
  -- Dumping data for table `author_write_book`
  --

  LOCK TABLES `author_write_book` WRITE;
  /*!40000 ALTER TABLE `author_write_book` DISABLE KEYS */;
  INSERT INTO `author_write_book` VALUES (36,'1111222233'),(38,'127346891'),(39,'123699361'),(39,'12369936114'),(41,'124124124'),(42,'2148971928'),(43,'124214124'),(42,'214897221928'),(42,'214891928'),(42,'1123113'),(42,'712487912'),(42,'1241242566'),(42,'14144141'),(42,'5125'),(42,'14245'),(42,'15412'),(42,'15151515'),(42,'14141444'),(42,'0001302'),(42,'666'),(58,'111111'),(42,'1244562');
  /*!40000 ALTER TABLE `author_write_book` ENABLE KEYS */;
  UNLOCK TABLES;

  --
  -- Table structure for table `book`
  --

  DROP TABLE IF EXISTS `book`;
  /*!40101 SET @saved_cs_client     = @@character_set_client */;
  /*!50503 SET character_set_client = utf8mb4 */;
  CREATE TABLE `book` (
    `ISBN` varchar(13) NOT NULL,
    `title` varchar(100) NOT NULL,
    `desc` text,
    `coverLink` text,
    `publisher` varchar(45) DEFAULT NULL,
    `publishDate` year DEFAULT NULL,
    `coverType` varchar(45) DEFAULT 'Paperback',
    `noPages` int DEFAULT NULL,
    `language` varchar(45) DEFAULT NULL,
    `dateAdded` datetime DEFAULT NULL,
    PRIMARY KEY (`ISBN`),
    UNIQUE KEY `ISBN_UNIQUE` (`ISBN`)
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
  /*!40101 SET character_set_client = @saved_cs_client */;

  --
  -- Dumping data for table `book`
  --

  LOCK TABLES `book` WRITE;
  /*!40000 ALTER TABLE `book` DISABLE KEYS */;
  INSERT INTO `book` VALUES ('0001302','ádasd','fadgag','public\\uploads\\image-1700573698203-952835268.png','ádsad',2000,'Hardcover',131,'Vietnamese','2023-11-21 13:34:58'),('111111','update','update','update','update',2000,'Paperback',1000,'Vietnamese',NULL),('1111222233','Giải tích 1','update mô tả','undefined','BKU',1977,'Paperback',1023,'English',NULL),('1123113','ádasd','fadgag','public\\uploads\\image-1700559265949-294791276.png','ádsad',2000,'Hardcover',131,'English','2023-11-21 09:34:25'),('123699361','dasdasd','moádoihjfoap','public\\uploads\\image-1700552638330-555365587.png','ông nào đó',2000,'Paperback',10,'English','2023-11-21 07:43:58'),('12369936114','dasdasd','moádoihjfoap','public\\uploads\\image-1700552851875-627536726.png','ông nào đó',2000,'Paperback',10,'English','2023-11-21 07:47:31'),('124124124','fafdasf','124142','public\\uploads\\image-1700552938795-2114608.png','ádfasd',2000,'Paperback',142,'English','2023-11-21 07:48:58'),('1241242566','ádasd','fadgag','public\\uploads\\image-1700564674647-807821499.png','ádsad',2000,'Paperback',131,'English','2023-11-21 11:04:34'),('124214124','final?','final?','public\\uploads\\image-1700559081763-540309218.png','final?',2000,'Hardcover',124,'Vietnamese','2023-11-21 09:31:21'),('1244562','ádasd','fadgag','public\\uploads\\image-1700634642174-33535554.png','ádsad',2000,'Paperback',131,'Vietnamese','2023-11-22 06:30:42'),('127346891','react','mô tả','public\\uploads\\image-1700552072451-249185542.png','bxcvbbx',2000,'Paperback',12,'Vietnamese','2023-11-21 07:34:32'),('14141444','ádasd','fadgag','public\\uploads\\image-1700566565373-985852121.png','ádsad',2000,'Hardcover',131,'Vietnamese','2023-11-21 11:36:05'),('14144141','ádasd','fadgag','public\\uploads\\image-1700565128175-800193883.png','ádsad',2000,'',131,'','2023-11-21 11:12:08'),('14245','ádasd','fadgag','public\\uploads\\image-1700565934333-818848861.png','ádsad',2000,'Paperback',131,'English','2023-11-21 11:25:34'),('15151515','ádasd','fadgag','public\\uploads\\image-1700566446503-57093533.png','ádsad',2000,'Paperback',131,'Vietnamese','2023-11-21 11:34:06'),('15412','ádasd','fadgag','public\\uploads\\image-1700566017214-258145401.png','ádsad',2000,'Paperback',131,'English','2023-11-21 11:26:57'),('214891928','ádasd','fadgag','public\\uploads\\image-1700559237267-182372400.png','ádsad',2000,'Hardcover',131,'English','2023-11-21 09:33:57'),('2148971928','ádasd','fadgag','public\\uploads\\image-1700552995474-569979152.png','ádsad',2000,'Paperback',131,'Vietnamese','2023-11-21 07:49:55'),('214897221928','ádasd','fadgag','public\\uploads\\image-1700559208599-64378883.png','ádsad',2000,'Hardcover',131,'English','2023-11-21 09:33:28'),('5125','ádasd','fadgag','public\\uploads\\image-1700565889722-30944112.png','ádsad',2000,'Hardcover',131,'Vietnamese','2023-11-21 11:24:49'),('666','ádasd','fadgag','public\\uploads\\image-1700574125905-845308962.png','ádsad',2000,'',131,'','2023-11-21 13:42:05'),('712487912','ádasd','fadgag','public\\uploads\\image-1700564332759-798119371.png','ádsad',2000,'Paperback',131,'English','2023-11-21 10:58:52');
  /*!40000 ALTER TABLE `book` ENABLE KEYS */;
  UNLOCK TABLES;

  --
  -- Table structure for table `genre_of_book`
  --

  DROP TABLE IF EXISTS `genre_of_book`;
  /*!40101 SET @saved_cs_client     = @@character_set_client */;
  /*!50503 SET character_set_client = utf8mb4 */;
  CREATE TABLE `genre_of_book` (
    `genre` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
    `ISBN` varchar(13) NOT NULL,
    PRIMARY KEY (`genre`,`ISBN`),
    KEY `ISBN_idx` (`ISBN`),
    CONSTRAINT `ISBN` FOREIGN KEY (`ISBN`) REFERENCES `book` (`ISBN`) ON DELETE CASCADE ON UPDATE CASCADE
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
  /*!40101 SET character_set_client = @saved_cs_client */;

  --
  -- Dumping data for table `genre_of_book`
  --

  LOCK TABLES `genre_of_book` WRITE;
  /*!40000 ALTER TABLE `genre_of_book` DISABLE KEYS */;
  INSERT INTO `genre_of_book` VALUES ('mystery','0001302'),('horror','1111222233'),('mystery','1111222233'),('\"','1123113'),('[','1123113'),('e','1123113'),('m','1123113'),('r','1123113'),('s','1123113'),('t','1123113'),('y','1123113'),('a','123699361'),('d','123699361'),('e','123699361'),('n','123699361'),('r','123699361'),('t','123699361'),('u','123699361'),('v','123699361'),('adventure','12369936114'),('horror','12369936114'),('horror','124124124'),('mystery','124124124'),('e','1241242566'),('m','1241242566'),('r','1241242566'),('s','1241242566'),('t','1241242566'),('y','1241242566'),('\"','124214124'),('[','124214124'),('a','124214124'),('d','124214124'),('e','124214124'),('n','124214124'),('r','124214124'),('t','124214124'),('u','124214124'),('v','124214124'),('mystery','1244562'),('adventure','127346891'),('horror','127346891'),('mystery','127346891'),('e','14141444'),('m','14141444'),('r','14141444'),('s','14141444'),('t','14141444'),('y','14141444'),('e','14144141'),('m','14144141'),('r','14144141'),('s','14144141'),('t','14144141'),('y','14144141'),('e','14245'),('m','14245'),('r','14245'),('s','14245'),('t','14245'),('y','14245'),('e','15151515'),('m','15151515'),('r','15151515'),('s','15151515'),('t','15151515'),('y','15151515'),('e','15412'),('m','15412'),('r','15412'),('s','15412'),('t','15412'),('y','15412'),('\"','214891928'),('[','214891928'),('a','214891928'),('d','214891928'),('e','214891928'),('n','214891928'),('r','214891928'),('t','214891928'),('u','214891928'),('v','214891928'),('\"','214897221928'),('[','214897221928'),('a','214897221928'),('d','214897221928'),('e','214897221928'),('n','214897221928'),('r','214897221928'),('t','214897221928'),('u','214897221928'),('v','214897221928'),('horror','5125'),('mystery','5125'),('horror','666'),('mystery','666'),('e','712487912'),('m','712487912'),('r','712487912'),('s','712487912'),('t','712487912'),('y','712487912');
  /*!40000 ALTER TABLE `genre_of_book` ENABLE KEYS */;
  UNLOCK TABLES;




  DROP TABLE IF EXISTS `copy`;
  CREATE TABLE `copy` (
    `ISBN`        varchar(13) NOT NULL,
    `noEdition`   int NOT NULL,
    `copyId`      varchar(9) NOT NULL, -- LIBrabry base - TITle - Edition - SoThuTu // BKUDSA223
    `status`      bool DEFAULT 1, -- 0 = borrowed
    PRIMARY KEY (`ISBN`, `noEdition`, `copyId`),
    KEY `ISBN_copied_idx` (`ISBN`),
    INDEX `noEdition_idx` (`noEdition`),
	INDEX `copyId_idx` (`copyId`)
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

  ALTER Table `copy`
      ADD CONSTRAINT `FK_ISBN_copy_to_book` FOREIGN KEY (`ISBN`) REFERENCES `book` (`ISBN`);

  DROP TABLE IF EXISTS `borrow`;
  CREATE TABLE `borrow` (
    `ISBN`        varchar(13) NOT NULL,
    `noEdition`   int NOT NULL,
    `copyId`      varchar(9) NOT NULL, -- LIBrabry base - TITle - Edition - SoThuTu // BKUDSA223
    `readerId`    char(9) NOT NULL, -- first 2 chars is type (MS for manager, ST for student), 7 chars left is used to define owner 
    PRIMARY KEY (`ISBN`, `noEdition`, `copyId`, `readerId`),
    KEY `ISBN_borrow_idx` (`ISBN`),
	INDEX `copyId_idx` (`copyId`),
    INDEX `readerID_idx` (`readerId`),
	INDEX `noEdition_idx` (`noEdition`)
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

  ALTER TABLE `borrow`
      ADD CONSTRAINT `FK_ISBN_borrow_to_copy` FOREIGN KEY (`ISBN`) REFERENCES `copy` (`ISBN`);
  ALTER TABLE `borrow`
      ADD CONSTRAINT `FK_noEdition_borrow_to_copy` FOREIGN KEY (`noEdition`) REFERENCES `copy` (`noEdition`);
  ALTER TABLE `borrow`
      ADD CONSTRAINT `FK_copyId_borrow_to_copy` FOREIGN KEY (`copyId`) REFERENCES `copy` (`copyId`);

  DROP TABLE IF EXISTS `borrowTimes`;
  CREATE TABLE `borrowTimes` (
    `ISBN`        varchar(13) NOT NULL,
    `noEdition`   int NOT NULL,
    `copyId`      varchar(9) NOT NULL, -- LIBrabry base - TITle - Edition - SoThuTu // BKUDSA223
    `readerId`    char(9) NOT NULL, -- first 2 chars is type (MS for manager, ST for student), 7 chars left is used to define owner 
    `borrowedDate` date,
    `givebackDate` date,
    PRIMARY KEY (`ISBN`, `noEdition`, `copyId`, `readerId`),
    KEY `ISBN_borrowedTimes_idx` (`ISBN`)
    
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

  ALTER TABLE `borrowTimes`
      ADD CONSTRAINT `FK_ISBN_borrowTimes_to_borrow` FOREIGN KEY (`ISBN`) REFERENCES `borrow` (`ISBN`);
  ALTER TABLE `borrowTimes`
      ADD CONSTRAINT `FK_noEdition_borrowTimes_to_borrow` FOREIGN KEY (`noEdition`) REFERENCES `borrow` (`noEdition`);
  ALTER TABLE `borrowTimes`
      ADD CONSTRAINT `FK_copyId_borrowTimes_to_borrow` FOREIGN KEY (`copyId`) REFERENCES `borrow` (`copyId`);
  ALTER Table `borrowTimes`
      ADD CONSTRAINT `FK_readerId_borrowTimes_to_borrow` FOREIGN KEY (`readerId`) REFERENCES `borrow` (`readerId`);


  DROP TABLE IF EXISTS `manager`;
  /*!40101 SET @saved_cs_client     = @@character_set_client */;
  /*!50503 SET character_set_client = utf8mb4 */;
  CREATE TABLE `manager` (
    `managerId`       char(9) NOT NULL, -- first 2 chars is type (MS for manager, ST for student), 7 chars left is used to define owner 
    `name`            varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
    `sex`             varchar(1) NOT NULL, -- M male, F female, N other
    `dob`             date,
    `phoneNumber`     varchar(12),
    `email`           varchar(50),
    `accountId`       char(9) NOT NULL,
    `username`        varchar(20) NOT NULL,
    `password`        varchar(256) NOT NULL,
    `openedDay`       date,
    `accountType`     varchar(2) DEFAULT 'MS', -- MS, ST
    PRIMARY KEY (`managerId`),
    UNIQUE KEY `MANAGER_UNIQUE` (`managerId`)
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;




  DROP TABLE IF EXISTS `reader`;
  /*!40101 SET @saved_cs_client     = @@character_set_client */;
  /*!50503 SET character_set_client = utf8mb4 */;
  CREATE TABLE `reader` (
    `readerId`        char(9) NOT NULL, -- first 2 chars is type (MS for manager, ST for student), 7 chars left is used to define owner 
    `name`            varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
    `sex`             varchar(1) NOT NULL, -- M male, F female, N other
    `dob`             date,
    `phoneNumber`     varchar(12),
    `email`           varchar(50),
    `university`      varchar(100),
    `accountId`       char(9) NOT NULL,
    `username`        varchar(20) NOT NULL,
    `password`        varchar(256) NOT NULL,
    `openedDay`       date,
    `accountType`     varchar(2) DEFAULT 'MS', -- MS, ST
    PRIMARY KEY (`readerId`),
    UNIQUE KEY `READER_UNIQUE` (`readerId`)
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;




  --
  -- Dumping events for database 'library'
  --

  --
  -- Dumping routines for database 'library'
  --
  /*!50003 DROP PROCEDURE IF EXISTS `InsertBook` */;
  /*!50003 SET @saved_cs_client      = @@character_set_client */ ;
  /*!50003 SET @saved_cs_results     = @@character_set_results */ ;
  /*!50003 SET @saved_col_connection = @@collation_connection */ ;
  /*!50003 SET character_set_client  = utf8mb4 */ ;
  /*!50003 SET character_set_results = utf8mb4 */ ;
  /*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
  /*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
  /*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
  DELIMITER ;;
  CREATE DEFINER=`root`@`localhost` PROCEDURE `InsertBook`(
      IN p_ISBN VARCHAR(13),
      IN p_title VARCHAR(100),
      IN p_coverlink TEXT,
      IN p_desc TEXT,
      IN p_authorName VARCHAR(45),
      IN p_publisher VARCHAR(45),
      IN p_publishDate YEAR(4),
      IN p_coverType VARCHAR(45),
      IN p_noPages INT,
      IN p_language VARCHAR(45),
      IN p_dateAdded DATETIME
  )
  BEGIN
      DECLARE author_id INT;
    
      -- Insert book information
      INSERT INTO book(ISBN, title, coverlink, `desc`, publisher, publishDate, coverType, noPages, `language`, dateAdded)
      VALUES(p_ISBN, CONVERT(p_title USING utf8mb4), CONVERT(p_coverlink USING utf8mb4), CONVERT(p_desc USING utf8mb4), CONVERT(p_publisher USING utf8mb4), p_publishDate, CONVERT(p_coverType USING utf8mb4), p_noPages, CONVERT(p_language USING utf8mb4), p_dateAdded);

      -- Insert author if not exists
      INSERT IGNORE INTO author(authorName)
    VALUES(CONVERT(p_authorName USING utf8mb4));
    
      -- Retrieve or insert author_id
      SELECT authorID INTO author_id
      FROM author
      WHERE CONVERT(authorName USING utf8mb4) = CONVERT(p_authorName USING utf8mb4);
      
      -- Insert into author_write_book
      INSERT INTO author_write_book(authorID, ISBN)
      VALUES(author_id, CONVERT(p_ISBN USING utf8mb4));

  END ;;
  DELIMITER ;
  /*!50003 SET sql_mode              = @saved_sql_mode */ ;
  /*!50003 SET character_set_client  = @saved_cs_client */ ;
  /*!50003 SET character_set_results = @saved_cs_results */ ;
  /*!50003 SET collation_connection  = @saved_col_connection */ ;
  /*!50003 DROP PROCEDURE IF EXISTS `UpdateBook` */;
  /*!50003 SET @saved_cs_client      = @@character_set_client */ ;
  /*!50003 SET @saved_cs_results     = @@character_set_results */ ;
  /*!50003 SET @saved_col_connection = @@collation_connection */ ;
  /*!50003 SET character_set_client  = utf8mb4 */ ;
  /*!50003 SET character_set_results = utf8mb4 */ ;
  /*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
  /*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
  /*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
  DELIMITER ;;
  CREATE DEFINER=`root`@`localhost` PROCEDURE `UpdateBook`(
      IN p_ISBN VARCHAR(13),
      IN p_title VARCHAR(100),
      IN p_coverlink TEXT,
      IN p_desc TEXT,
      IN p_authorName VARCHAR(45),
      IN p_publisher VARCHAR(45),
      IN p_publishDate YEAR(4),
      IN p_coverType VARCHAR(45),
      IN p_noPages INT,
      IN p_language VARCHAR(45)
  )
  BEGIN
      DECLARE author_id INT;

      -- Update book information
      UPDATE book
      SET
          title = CONVERT(p_title USING utf8mb4),
          coverlink = CONVERT(p_coverlink USING utf8mb4),
          `desc` = CONVERT(p_desc USING utf8mb4),
          publisher = CONVERT(p_publisher USING utf8mb4),
          publishDate = p_publishDate,
          coverType = CONVERT(p_coverType USING utf8mb4),
          noPages = p_noPages,
          `language` = CONVERT(p_language USING utf8mb4)
      WHERE
          ISBN = p_ISBN;

      -- Insert author if not exists
      INSERT IGNORE INTO author(authorName)
      VALUES(CONVERT(p_authorName USING utf8mb4));

      -- Retrieve or insert author_id
      SELECT authorID INTO author_id
      FROM author
      WHERE CONVERT(authorName USING utf8mb4) = CONVERT(p_authorName USING utf8mb4);

      -- Update author_write_book
      DELETE FROM author_write_book
      WHERE ISBN = p_ISBN;

      -- Insert into author_write_book
      INSERT INTO author_write_book(authorID, ISBN)
      VALUES(author_id, CONVERT(p_ISBN USING utf8mb4));

  END ;;
  DELIMITER ;
  /*!50003 SET sql_mode              = @saved_sql_mode */ ;
  /*!50003 SET character_set_client  = @saved_cs_client */ ;
  /*!50003 SET character_set_results = @saved_cs_results */ ;
  /*!50003 SET collation_connection  = @saved_col_connection */ ;
  /*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

  /*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
  /*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
  /*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
  /*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
  /*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
  /*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
  /*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

  -- Dump completed on 2023-11-22 13:34:46



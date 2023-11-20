CREATE DATABASE  IF NOT EXISTS `library` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `library`;
-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: library
-- ------------------------------------------------------
-- Server version	8.0.34

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
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `author`
--

LOCK TABLES `author` WRITE;
/*!40000 ALTER TABLE `author` DISABLE KEYS */;
INSERT INTO `author` VALUES (37,'làm lại'),(36,'ông nào đó');
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
INSERT INTO `author_write_book` VALUES (36,'1111222233'),(37,'111111');
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
INSERT INTO `book` VALUES ('111111','làm lại','1111','undefined','làm lại',2023,'Paperback',111,'English',NULL),('1111222233','Giải tích 1','update mô tả','undefined','BKU',1977,'Paperback',1023,'English',NULL);
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
INSERT INTO `genre_of_book` VALUES ('horror','1111222233'),('mystery','1111222233');
/*!40000 ALTER TABLE `genre_of_book` ENABLE KEYS */;
UNLOCK TABLES;

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
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-20 17:14:18

CREATE DATABASE  IF NOT EXISTS `library` 
/*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ 
/*!80016 DEFAULT ENCRYPTION='N' */;
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
) ENGINE=InnoDB AUTO_INCREMENT=111 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `author`
--

LOCK TABLES `author` WRITE;
/*!40000 ALTER TABLE `author` DISABLE KEYS */;
INSERT INTO `author` VALUES (81,'Blake Crouch'),(87,'Bram Stoker'),(82,'Colleen Hoover'),(77,'Freida McFadden'),(80,'Harper Lee'),(79,'Karin Slaughter'),(76,'Kelly Rimmer'),(78,'Lisa Jewell'),(91,'Madeline Miller'),(106,'parseInt'),(107,'parseInt(isbn)'),(83,'Riley Sager'),(85,'Shirley Jackson'),(75,'Stephen King'),(92,'test'),(105,'trsd');
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
INSERT INTO `author_write_book` VALUES (75,'9781668016138'),(76,'9781525823565'),(77,'9798352831533'),(78,'9781501154652'),(79,'9780062499554'),(80,'9780060935467'),(81,'9781101904244'),(82,'9781335004888'),(83,'9780593183212'),(75,'9781501142970'),(85,'9780143039976'),(75,'9781982110581'),(87,'9780141196886'),(91,'9780062060624');
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
  `copyNumber` int DEFAULT '20',
  PRIMARY KEY (`ISBN`),
  UNIQUE KEY `ISBN_UNIQUE` (`ISBN`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `book`
--

LOCK TABLES `book` WRITE;
/*!40000 ALTER TABLE `book` DISABLE KEYS */;
INSERT INTO `book` VALUES ('9780060935467','To Kill a Mockingbird','One of the most cherished stories of all time, To Kill a Mockingbird has been translated into more than forty languages, sold more than forty million copies worldwide, served as the basis for an enormously popular motion picture, and was voted one of the best novels of the twentieth century by librarians across the country. A gripping, heart-wrenching, and wholly remarkable tale of coming-of-age in a South poisoned by virulent prejudice, it views a world of great beauty and savage inequities through the eyes of a young girl, as her father—a crusading local lawyer—risks everything to defend a black man unjustly accused of a terrible crime.','http://localhost:3001/books/covers/image-1702050763426-386079086.jpg','Harper Perennial',2002,'Hardcover',335,'English','2023-12-08 15:52:43',20),('9780062060624','The Song of Achilles','A tale of gods, kings, immortal fame, and the human heart, The Song of Achilles is a dazzling literary feat that brilliantly reimagines Homer’s enduring masterwork, The Iliad. An action-packed adventure, an epic love story, a marvelously conceived and executed page-turner, Miller’s monumental debut novel has already earned resounding acclaim from some of contemporary fiction’s brightest lights—and fans of Mary Renault, Bernard Cornwell, Steven Pressfield, and Colleen McCullough’s Masters of Rome series will delight in this unforgettable journey back to ancient Greece in the Age of Heroes.','http://localhost:3001/books/covers/image-1702215153872-875702494.jpg','Ecco',2011,'Paperback',416,'English','2023-12-10 13:32:33',13),('9780062499554','Pretty Girls','Sisters. Strangers. Survivors.  More than twenty years ago, Claire and Lydi’s teenaged sister Julia vanished without a trace. The two women have not spoken since, and now their lives could not be more different. Claire is the glamorous trophy wife of an Atlanta millionaire. Lydia, a single mother, dates an ex-con and struggles to make ends meet. But neither has recovered from the horror and heartbreak of their shared loss - a devastating wound that’s cruelly ripped open when Claire’s husband is killed. The disappearance of a teenage girl and the murder of a middle-aged man, almost a quarter-century apart: what could connect them? Forming a wary truce, the surviving sisters look to the past to find the truth, unearthing the secrets that destroyed their family all those years ago... and uncovering the possibility of redemption, and revenge, where they least expect it.','http://localhost:3001/books/covers/image-1702050569746-967200579.jpg','William Morrow',2017,'Paperback',432,'English','2023-12-08 15:49:29',20),('9780141196886','Dracula','Part of Penguin’s beautiful hardback Clothbound Classics series, designed by the award-winning Coralie Bickford-Smith, these delectable and collectible editions are bound in high-quality colourful, tactile cloth with foil stamped into the design When Jonathan Harker visits Transylvania to help Count Dracula with the purchase of a London house, he makes a series of horrific discoveries about his client. Soon afterwards, various bizarre incidents unfold in England: an apparently unmanned ship is wrecked off the coast of Whitby; a young woman discovers strange puncture marks on her neck; and the inmate of a lunatic asylum raves about the ‘Master’ and his imminent arrival. In Dracula, Bram Stoker created one of the great masterpieces of the horror genre, brilliantly evoking a nightmare world of vampires and vampire hunters and also illuminating the dark corners of Victorian sexuality and desire.','http://localhost:3001/books/covers/image-1702052471225-265251131.jpg','Penguin Classics',2011,'Hardcover',512,'English','2023-12-08 16:21:11',20),('9780143039976','We Have Always Lived in the Castle','Shirley Jackson’s beloved gothic tale of a peculiar girl named Merricat and her family’s dark secret  Taking readers deep into a labyrinth of dark neurosis, We Have Always Lived in the Castle is a deliciously unsettling novel about a perverse, isolated, and possibly murderous family and the struggle that ensues when a cousin arrives at their estate. This edition features a new introduction by Jonathan Lethem.  For more than seventy years, Penguin has been the leading publisher of classic literature in the English-speaking world. With more than 1,700 titles, Penguin Classics represents a global bookshelf of the best works throughout history and across genres and disciplines. Readers trust the series to provide authoritative texts enhanced by introductions and notes by distinguished scholars and contemporary authors, as well as up-to-date translations by award-winning translators.','http://localhost:3001/books/covers/image-1702052258307-549492895.jpg','Penguin Classics',2006,'Hardcover',146,'English','2023-12-08 16:17:38',20),('9780593183212','The House Across the Lake','Casey Fletcher, a recently widowed actress trying to escape a streak of bad press, has retreated to the peace and quiet of her family’s lake house in Vermont. Armed with a pair of binoculars and several bottles of bourbon, she passes the time watching Tom and Katherine Royce, the glamorous couple living in the house across the lake. They make for good viewing—a tech innovator, Tom is powerful; and a former model, Katherine is gorgeous.  One day on the lake, Casey saves Katherine from drowning, and the two strike up a budding friendship. But the more they get to know each other—and the longer Casey watches—it becomes clear that Katherine and Tom’s marriage isn’t as perfect as it appears. When Katherine suddenly vanishes, Casey immediately suspects Tom of foul play. What she doesn’t realize is that there’s more to the story than meets the eye—and that shocking secrets can lurk beneath the most placid of surfaces.','http://localhost:3001/books/covers/image-1702052004821-468729739.jpg','Dutton',2023,'Paperback',384,'English','2023-12-08 16:13:24',20),('9781101904244','Dark Matter','Those are the last words Jason Dessen hears before the masked abductor knocks him unconscious. Before he awakens to find himself strapped to a gurney, surrounded by strangers in hazmat suits. Before a man Jason’s never met smiles down at him and says, \"Welcome back, my friend.\" In this world he’s woken up to, Jason’s life is not the one he knows. His wife is not his wife. His son was never born. And Jason is not an ordinary college physics professor, but a celebrated genius who has achieved something remarkable. Something impossible.','http://localhost:3001/books/covers/image-1702051169893-996882585.jpg','Ballantine Books',2017,'Paperback',368,'English','2023-12-08 15:59:29',20),('9781335004888','Never Never','Charlie Wynwood and Silas Nash have been best friends since they could walk. They’ve been in love since the age of fourteen. But as of this morning...they are complete strangers. Their first kiss, their first fight, the moment they fell in love...every memory has vanished. Now Charlie and Silas must work together to uncover the truth about what happened to them and why.  But the more they learn about the couple they used to be...the more they question why they were ever together to begin with. Forgetting is terrifying, but remembering may be worse.','http://localhost:3001/books/covers/image-1702051651794-509970591.jpg','Canary Street Press',2023,'Paperback',416,'English','2023-12-08 16:07:31',0),('9781501142970','It','Welcome to Derry, Maine. It’s a small city, a place as hauntingly familiar as your own hometown. Only in Derry the haunting is real.  They were seven teenagers when they first stumbled upon the horror. Now they are grown-up men and women who have gone out into the big world to gain success and happiness. But the promise they made twenty-eight years ago calls them reunite in the same place where, as teenagers, they battled an evil creature that preyed on the city’s children. Now, children are being murdered again and their repressed memories of that terrifying summer return as they prepare to once again battle the monster lurking in Derry’s sewers.  Readers of Stephen King know that Derry, Maine, is a place with a deep, dark hold on the author. It reappears in many of his books, including Bag of Bones, Hearts in Atlantis, and 11/22/63. But it all starts with It.','http://localhost:3001/books/covers/image-1702109120951-228140415.jpg','Scribner',2016,'Paperback',1168,'English','2023-12-08 16:16:08',20),('9781501154652','Then She Was Gone','Ellie Mack was the perfect daughter. She was fifteen, the youngest of three. Beloved by her parents, friends, and teachers, and half of a teenaged golden couple. Ellie was days away from an idyllic post-exams summer vacation, with her whole life ahead of her.  And then she was gone.  Now, her mother Laurel Mack is trying to put her life back together. It’s been ten years since her daughter disappeared, seven years since her marriage ended, and only months since the last clue in Ellie’s case was unearthed. So when she meets an unexpectedly charming man in a café, no one is more surprised than Laurel at how quickly their flirtation develops into something deeper. Before she knows it, she’s meeting Floyd’s daughters—and his youngest, Poppy, takes Laurel’s breath away.  Because looking at Poppy is like looking at Ellie. And now, the unanswered questions she’s tried so hard to put to rest begin to haunt Laurel anew. Where did Ellie go? Did she really run away from home, as the police have long suspected, or was there a more sinister reason for her disappearance? Who is Floyd, really? And why does his daughter remind Laurel so viscerally of her own missing girl?','http://localhost:3001/books/covers/image-1702049724035-923856281.jpg','Atria Books',2018,'Paperback',384,'English','2023-12-08 15:35:24',18),('9781525823565','The Things We Cannot Say','In 1942, Europe remains in the relentless grip of war. Just beyond the tents of the refugee camp she calls home, a young woman speaks her wedding vows. It’s a decision that will alter her destiny…and it’s a lie that will remain buried until the next century.  Since she was nine years old, Alina Dziak knew she would marry her best friend, Tomasz. Now fifteen and engaged, Alina is unconcerned by reports of Nazi soldiers at the Polish border, believing her neighbors that they pose no real threat, and dreams instead of the day Tomasz returns from college in Warsaw so they can be married. But little by little, injustice by brutal injustice, the Nazi occupation takes hold, and Alina’s tiny rural village, its families, are divided by fear and hate.  Then, as the fabric of their lives is slowly picked apart, Tomasz disappears. Where Alina used to measure time between visits from her beloved, now she measures the spaces between hope and despair, waiting for word from Tomasz and avoiding the attentions of the soldiers who patrol her parents’ farm. But for now, even deafening silence is preferable to grief.','http://localhost:3001/books/covers/image-1702048276295-952557804.jpg','Graydon House',2019,'Paperback',440,'English','2023-12-08 15:11:16',20),('9781668016138','Holly','Stephen King’s Holly marks the triumphant return of beloved King character Holly Gibney. Readers have witnessed Holly’s gradual transformation from a shy (but also brave and ethical) recluse in Mr. Mercedes to Bill Hodges’s partner in Finders Keepers to a full-fledged, smart, and occasionally tough private detective in The Outsider. In King’s new novel, Holly is on her own, and up against a pair of unimaginably depraved and brilliantly disguised adversaries.  When Penny Dahl calls the Finders Keepers detective agency hoping for help locating her missing daughter, Holly is reluctant to accept the case. Her partner, Pete, has Covid. Her (very complicated) mother has just died. And Holly is meant to be on leave. But something in Penny Dahl’s desperate voice makes it impossible for Holly to turn her down.  Mere blocks from where Bonnie Dahl disappeared live Professors Rodney and Emily Harris. They are the picture of bourgeois respectability: married octogenarians, devoted to each other, and semi-retired lifelong academics. But they are harboring an unholy secret in the basement of their well-kept, book-lined home, one that may be related to Bonnie’s disappearance. And it will prove nearly impossible to discover what they are up to: they are savvy, they are patient, and they are ruthless.','http://localhost:3001/books/covers/image-1702048119006-875617641.jpg','Scribner',2023,'Paperback',464,'English','2023-12-08 15:08:39',19),('9781982110581','The Institute','In the middle of the night, in a house on a quiet street in suburban Minneapolis, intruders silently murder Luke Ellis’s parents and load him into a black SUV. The operation takes less than two minutes. Luke will wake up at The Institute, in a room that looks just like his own, except there’s no window. And outside his door are other doors, behind which are other kids with special talents—telekinesis and telepathy—who got to this place the same way Luke did: Kalisha, Nick, George, Iris, and ten-year-old Avery Dixon. They are all in Front Half. Others, Luke learns, graduated to Back Half, “like the roach motel,” Kalisha says. “You check in, but you don’t check out.”  In this most sinister of institutions, the director, Mrs. Sigsby, and her staff are ruthlessly dedicated to extracting from these children the force of their extranormal gifts. There are no scruples here. If you go along, you get tokens for the vending machines. If you don’t, punishment is brutal. As each new victim disappears to Back Half, Luke becomes more and more desperate to get out and get help. But no one has ever escaped from the Institute.','http://localhost:3001/books/covers/image-1702052375011-47281983.jpg','Gallery Books',2020,'Paperback',576,'English','2023-12-08 16:19:35',20),('9798352831533','Never Lie: An addictive psychological thriller','Newlyweds Tricia and Ethan are searching for the house of their dreams.  But when they visit the remote manor that once belonged to Dr. Adrienne Hale, a renowned psychiatrist who vanished without a trace four years earlier, a violent winter storm traps them at the estate… with no chance of escape until the blizzard comes to an end.  In search of a book to keep her entertained until the snow abates, Tricia happens upon a secret room. One that contains audio transcripts from every single patient Dr. Hale has ever interviewed. As Tricia listens to the cassette tapes, she learns about the terrifying chain of events leading up to Dr. Hale’s mysterious disappearance.  Tricia plays the tapes one by one, late into the night. With each one, another shocking piece of the puzzle falls into place, and Dr. Adrienne Hale’s web of lies slowly unravels.  And then Tricia reaches the final cassette.','http://localhost:3001/books/covers/image-1702048384777-16870033.jpg','Independently published',2022,'Paperback',336,'English','2023-12-08 15:13:04',20);
/*!40000 ALTER TABLE `book` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `borrow`
--

DROP TABLE IF EXISTS `borrow`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `borrow` (
  `ISBN` varchar(13) NOT NULL,
  `readerId` char(9) NOT NULL,
  `borrowDate` datetime NOT NULL,
  `givebackDate` datetime NOT NULL,
  `registerDate` datetime DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`ISBN`,`readerId`,`borrowDate`,`givebackDate`),
  KEY `ISBN_borrow_idx` (`ISBN`),
  KEY `readerID_idx` (`readerId`),
  CONSTRAINT `borrow_book` FOREIGN KEY (`ISBN`) REFERENCES `book` (`ISBN`) ON UPDATE CASCADE,
  CONSTRAINT `borrow_reader` FOREIGN KEY (`readerId`) REFERENCES `reader` (`readerId`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

DROP TABLE IF EXISTS `borrow_dashboard`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `borrow_dashboard` (
	`year` VARCHAR(10) NOT NULL,
    `month` VARCHAR(2) NOT NULL,
    `total_borrowed` INT DEFAULT 0,
    `total_givedback` INT DEFAULT 0,
    PRIMARY KEY (`year`, `month`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DELIMITER ;;
DROP TRIGGER IF EXISTS `borrow_dashboard_trigger`;
CREATE TRIGGER `borrow_dashboard_trigger` AFTER INSERT ON `borrow`
FOR EACH ROW
BEGIN
  IF (NEW.ISBN IS NOT NULL) THEN
    SET @year = YEAR(NEW.givebackDate);
    SET @month = MONTH(NEW.givebackDate);
    SET @borrowed = (SELECT COUNT(*) FROM borrow WHERE YEAR(givebackDate) = @year AND MONTH(givebackDate) = @month);
    SET @givedback = (SELECT COUNT(*) FROM borrow WHERE YEAR(givebackDate) = @year AND MONTH(givebackDate) = @month AND status = 'Hoàn thành');
    IF (@borrowed = 0) THEN
      SET @borrowed = 1;
    END IF;
    IF (@givedback = 0) THEN
      SET @givedback = 1;
    END IF;
    INSERT INTO borrow_dashboard VALUES (@year, @month, @borrowed, @givedback) ON DUPLICATE KEY UPDATE total_borrowed = @borrowed, total_givedback = @givedback;
  END IF;
END;
;;

DELIMITER ;

DELIMITER ;;
DROP PROCEDURE IF EXISTS `GetBorrowChartInfomation`;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetBorrowChartInfomation` (
  IN `p_year` VARCHAR(10)
)
BEGIN
  SELECT * FROM borrow_dashboard WHERE `year` = `p_year`;
END;;

DELIMITER ;

--
-- Dumping data for table `borrow`
--

LOCK TABLES `borrow` WRITE;
/*!40000 ALTER TABLE `borrow` DISABLE KEYS */;
INSERT INTO `borrow` VALUES ('9780060935467','ST1000001','2023-11-12 13:05:03','2023-11-23 13:05:03','2023-11-01 13:05:03','Quá hạn'),('9780141196886','ST1000000','2023-12-08 13:27:19','2023-12-09 13:27:19','2023-12-08 11:44:44','Chờ nhận sách'),('9780141196886','ST1000001','2023-12-12 13:05:03','2023-12-23 13:05:03','2023-11-23 13:05:03','Đang mượn'),('9781101904244','ST1000000','2023-12-01 13:05:03','2023-12-04 13:05:03','2023-11-23 13:05:03','Hoàn thành'),('9781101904244','ST1000001','2023-11-01 13:05:03','2023-11-02 13:05:03','2023-10-10 13:05:03','Quá hạn'),('9781501142970','ST1000000','2024-01-01 10:00:00','2024-02-09 10:00:00','2023-12-09 10:00:00','Đang mượn'),('9781501154652','ST1000000','2023-11-08 14:27:19','2023-11-15 09:27:19','2023-11-09 09:43:13','Hoàn thành'),('9781501154652','ST1000000','2023-12-08 14:27:19','2023-12-15 09:27:19','2023-12-09 09:41:21','Chờ nhận sách'),('9781501154652','ST1000001','2023-12-08 14:27:19','2023-12-15 09:27:19','2023-12-09 09:43:13','Chờ nhận sách'),('9781668016138','ST1000000','2024-02-05 00:00:00','2024-02-19 00:00:00','2023-12-09 16:55:00','Chờ nhận sách'),('9781668016138','ST1000001','2023-12-10 14:27:19','2024-01-01 09:27:19','2023-12-09 09:48:45','Chờ nhận sách'),('9781982110581','ST1000000','2023-12-09 13:05:03','2023-12-29 13:27:19','2023-12-09 10:27:19','Đang mượn');
/*!40000 ALTER TABLE `borrow` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `borrow_details`
--

DROP TABLE IF EXISTS `borrow_details`;
/*!50001 DROP VIEW IF EXISTS `borrow_details`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `borrow_details` AS SELECT 
 1 AS `readerId`,
 1 AS `title`,
 1 AS `authorName`,
 1 AS `registerDate`,
 1 AS `borrowDate`,
 1 AS `givebackDate`,
 1 AS `status`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `dashboard_book`
--

DROP TABLE IF EXISTS `dashboard_book`;
/*!50001 DROP VIEW IF EXISTS `dashboard_book`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `dashboard_book` AS SELECT 
 1 AS `coverLink`,
 1 AS `title`,
 1 AS `copyNumber`,
 1 AS `borrowCount`,
 1 AS `givebackCount`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `dashboard_info`
--

DROP TABLE IF EXISTS `dashboard_info`;
/*!50001 DROP VIEW IF EXISTS `dashboard_info`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `dashboard_info` AS SELECT 
 1 AS `readerCount`,
 1 AS `bookCount`,
 1 AS `borrowCount`,
 1 AS `givebackCount`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `dashboard_reader`
--

DROP TABLE IF EXISTS `dashboard_reader`;
/*!50001 DROP VIEW IF EXISTS `dashboard_reader`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `dashboard_reader` AS SELECT 
 1 AS `readerId`,
 1 AS `readerName`,
 1 AS `borrowCount`,
 1 AS `givebackCount`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `favorite`
--

DROP TABLE IF EXISTS `favorite`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `favorite` (
  `readerId` char(9) NOT NULL,
  `ISBN` varchar(13) NOT NULL,
  PRIMARY KEY (`readerId`,`ISBN`),
  KEY `fav_book_idx` (`ISBN`),
  CONSTRAINT `fav_book` FOREIGN KEY (`ISBN`) REFERENCES `book` (`ISBN`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fav_reader` FOREIGN KEY (`readerId`) REFERENCES `reader` (`readerId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `favorite`
--

LOCK TABLES `favorite` WRITE;
/*!40000 ALTER TABLE `favorite` DISABLE KEYS */;
INSERT INTO `favorite` VALUES ('ST1000000','9780060935467'),('ST1000001','9780060935467'),('ST1000000','9780062060624'),('ST1000000','9780062499554'),('ST1000000','9780141196886'),('ST1000000','9781501142970');
/*!40000 ALTER TABLE `favorite` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `favorite_book`
--

DROP TABLE IF EXISTS `favorite_book`;
/*!50001 DROP VIEW IF EXISTS `favorite_book`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `favorite_book` AS SELECT 
 1 AS `ISBN`,
 1 AS `title`,
 1 AS `coverLink`,
 1 AS `authorName`,
 1 AS `readerId`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `general_borrow_info`
--

DROP TABLE IF EXISTS `general_borrow_info`;
/*!50001 DROP VIEW IF EXISTS `general_borrow_info`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `general_borrow_info` AS SELECT 
 1 AS `latestDeadline`,
 1 AS `notGiveBack`,
 1 AS `giveBack`,
 1 AS `borrowNo`*/;
SET character_set_client = @saved_cs_client;

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
  CONSTRAINT `genre_book` FOREIGN KEY (`ISBN`) REFERENCES `book` (`ISBN`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `genre_of_book`
--

LOCK TABLES `genre_of_book` WRITE;
/*!40000 ALTER TABLE `genre_of_book` DISABLE KEYS */;
INSERT INTO `genre_of_book` VALUES ('Adventure','9780060935467'),('Historical-Fiction','9780062060624'),('Mythology','9780062060624'),('Romance','9780062060624'),('Horror','9780062499554'),('Mystery','9780062499554'),('Adventure','9780141196886'),('Horror','9780141196886'),('Horror','9780143039976'),('Horror','9780593183212'),('Horror','9781101904244'),('Mystery','9781335004888'),('Horror','9781501142970'),('Mystery','9781501154652'),('Adventure','9781525823565'),('Horror','9781525823565'),('Horror','9781668016138'),('Mystery','9781668016138'),('Horror','9781982110581'),('Mystery','9781982110581'),('Mystery','9798352831533');
/*!40000 ALTER TABLE `genre_of_book` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `manager`
--

DROP TABLE IF EXISTS `manager`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `manager` (
  `managerId` char(9) NOT NULL,
  `name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `sex` varchar(1) NOT NULL,
  `dob` date DEFAULT NULL,
  `phoneNumber` varchar(12) DEFAULT NULL,
  `email` varchar(50) NOT NULL,
  `accountId` char(9) NOT NULL,
  `username` varchar(100) DEFAULT NULL,
  `password` varchar(256) NOT NULL,
  `openedDay` date DEFAULT NULL,
  `accountType` varchar(2) DEFAULT 'MS',
  PRIMARY KEY (`managerId`),
  UNIQUE KEY `MANAGER_UNIQUE` (`managerId`),
  UNIQUE KEY `Manager_email_unique` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

-- Table structure for table `reader`
--
-- SET FOREIGN_KEY_CHECKS = 0;
-- DROP TABLE IF EXISTS `reader`;
-- SET FOREIGN_KEY_CHECKS = 1;
DROP TABLE IF EXISTS `reader`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reader` (
  `readerId` char(9) NOT NULL,
  `name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `sex` varchar(1) NOT NULL,
  `dob` date DEFAULT NULL,
  `phoneNumber` varchar(12) DEFAULT NULL,
  `email` varchar(50) NOT NULL,
  `university` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `accountId` char(9) NOT NULL,
  `username` varchar(100) DEFAULT NULL,
  `password` varchar(256) NOT NULL,
  `openedDay` date DEFAULT NULL,
  `accountType` varchar(2) DEFAULT 'MS',
  PRIMARY KEY (`readerId`),
  UNIQUE KEY `READER_UNIQUE` (`readerId`),
  UNIQUE KEY `Reader_email_unique` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;


--
-- Table structure for table `suggested_book`
--
DROP TABLE IF EXISTS `suggested_book`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `suggested_book` (
  `id` int NOT NULL AUTO_INCREMENT,
  `readerName` varchar(100) NOT NULL,
  `title` varchar(100) NOT NULL,
  `authorName` varchar(100) NOT NULL,
  `email` varchar(50) NOT NULL,
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP PROCEDURE IF EXISTS `SuggestBook`;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `SuggestBook`
(
  IN readerName VARCHAR(100),
  IN email VARCHAR(50), 
  IN title VARCHAR(100), 
  IN authorName VARCHAR(45)
)
BEGIN
    INSERT INTO suggested_book (readerName, title, authorName, email) VALUES (readerName, title, authorName, email);
END ;;
DELIMITER ;

--
-- Dumping data for table `reader`
--

LOCK TABLES `reader` WRITE;
/*!40000 ALTER TABLE `reader` DISABLE KEYS */;
INSERT INTO `reader` VALUES ('ST1000000','Cù Hoàng Nguyễn Sơn','M','2003-04-01','0123456789','soncu@hcmut.edu.vn','Đại học Bách Khoa','ST1000000','soncuvippro','$2b$10$YmPEKIZ6FUlvN8/nyzIKKun85.5GeV4jCzX0107e/R0H6NoKJdho2','2023-11-01','ST'),('ST1000001','Phạm Bá Hoàng','M','2003-06-21','0123456789','hoangpham@hcmut.edu.vn','Đại học Bách Khoa','ST1000001','hoangphamt1con','$2b$10$YmPEKIZ6FUlvN8/nyzIKKun85.5GeV4jCzX0107e/R0H6NoKJdho2','2023-11-01','ST');
/*!40000 ALTER TABLE `reader` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'library'
--

--
-- Dumping routines for database 'library'
--
/*!50003 DROP PROCEDURE IF EXISTS `GetGeneralBorrowInfo` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetGeneralBorrowInfo`(IN ISBN VARCHAR(13))
BEGIN
    SELECT 
        (SELECT DATE_FORMAT(MAX(givebackDate), "%Y-%m-%d %H:%i:%s") FROM borrow WHERE borrow.readerId = ISBN) AS latestDeadline,
        (SELECT COUNT(*) FROM borrow WHERE borrow.readerId = ISBN AND borrow.status != 'Hoàn thành' AND borrow.status != 'Chờ nhận sách') AS notGiveBackCount,
        (SELECT COUNT(*) FROM borrow WHERE borrow.readerId = ISBN AND borrow.status = 'Hoàn thành') AS giveBackCount,
        (SELECT COUNT(*) FROM borrow WHERE borrow.readerId = ISBN) AS borrowCount;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
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
      IN p_dateAdded DATETIME,
      IN p_copyNumber INT
  )
BEGIN
      DECLARE author_id INT;
    
      -- Insert book information
      INSERT INTO book(ISBN, title, coverlink, `desc`, publisher, publishDate, coverType, noPages, `language`, dateAdded, copyNumber)
      VALUES(p_ISBN, CONVERT(p_title USING utf8mb4), CONVERT(p_coverlink USING utf8mb4), CONVERT(p_desc USING utf8mb4), CONVERT(p_publisher USING utf8mb4), p_publishDate, CONVERT(p_coverType USING utf8mb4), p_noPages, CONVERT(p_language USING utf8mb4), p_dateAdded, p_copyNumber);

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
/*!50003 DROP PROCEDURE IF EXISTS `InsertManager` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `InsertManager`(
    IN p_managerId CHAR(9),
    IN p_name VARCHAR(100),
    IN p_sex VARCHAR(1),
    IN p_dob DATE,
    IN p_phoneNumber VARCHAR(12),
    IN p_email VARCHAR(50),
    IN p_accountId CHAR(9),
    IN p_username VARCHAR(100),
    IN p_password VARCHAR(256),
    IN p_openedDay DATE,
    IN p_accountType VARCHAR(2)
)
BEGIN
    
    INSERT INTO `manager` (
        `managerId`,
        `name`,
        `sex`,
        `dob`,
        `phoneNumber`,
        `email`,
        `accountId`,
        `username`,
        `password`,
        `openedDay`,
        `accountType`
    ) VALUES (
        p_managerId,
        CONVERT(p_name USING utf8mb4),
        p_sex,
        p_dob,
        p_phoneNumber,
        p_email,
        p_accountId,
        p_username,
        p_password,
        p_openedDay,
        p_accountType
	);
END ;;
DELIMITER ;

CALL InsertManager(
	'MS1000000', 
	'Đỗ Văn Bâng', 
    'M', 
    '2003-09-29',
    '0123456789', 
    'example1@gmail.com',
    'MS1000000', 
    'example1@gmail.com',
    '$2b$10$boMWeggqt7pKp8eNtx89ju58GqNANGIIIkMgjKh5uRw6RbsDqTEqe',
    '2023-12-01', 
    'MS');

CALL InsertManager(
	'MS1000001', 
	'Trương Đức Dũng', 
    'M', 
    '2003-01-01',
    '0123456789', 
    'example2@gmail.com',
    'MS1000001', 
    'example2@gmail.com',
    '$2b$10$boMWeggqt7pKp8eNtx89ju58GqNANGIIIkMgjKh5uRw6RbsDqTEqe',
    '2023-12-01', 
    'MS');


/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `UpdateManager` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `UpdateManager`(
    IN p_name VARCHAR(100),
    IN p_sex VARCHAR(1),
    IN p_dob DATE,
    IN p_phoneNumber VARCHAR(12),
    IN p_email VARCHAR(50),
    IN p_password VARCHAR(256)
)
BEGIN
  UPDATE `manager` 
    SET
        `name` = CONVERT(p_name USING utf8mb4),
        `sex` = p_sex,
        `dob` = p_dob,
        `phoneNumber` = p_phoneNumber,
        `password` = p_password
    WHERE `email` = p_email;
END ;;
DELIMITER ;



/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `InsertReader` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `InsertReader`(
    IN p_readerId CHAR(9),
    IN p_name VARCHAR(100),
    IN p_sex VARCHAR(1),
    IN p_dob DATE,
    IN p_phoneNumber VARCHAR(12),
    IN p_email VARCHAR(50),
    IN p_university VARCHAR(100),
    IN p_accountId CHAR(9),
    IN p_username VARCHAR(100),
    IN p_password VARCHAR(256),
    IN p_openedDay DATE,
    IN p_accountType VARCHAR(2)
)
BEGIN
    INSERT INTO `reader` (
        `readerId`,
        `name`,
        `sex`,
        `dob`,
        `phoneNumber`,
        `email`,
        `university`,
        `accountId`,
        `username`,
        `password`,
        `openedDay`,
        `accountType`
    ) VALUES (
        p_readerId,
        CONVERT(p_name USING utf8mb4),
        p_sex,
        p_dob,
        p_phoneNumber,
        p_email,
        CONVERT(p_university USING utf8mb4),
        p_accountId,
        p_username,
        p_password,
        p_openedDay,
        p_accountType
	);
END ;;
DELIMITER ;


/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `UpdateReader` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `UpdateReader`(
    IN p_name VARCHAR(100),
    IN p_sex VARCHAR(1),
    IN p_dob DATE,
    IN p_phoneNumber VARCHAR(12),
    IN p_university VARCHAR(100),
    IN p_email VARCHAR(50),
    IN p_password VARCHAR(256)
)
BEGIN
    UPDATE `reader` 
    SET
        `name` = CONVERT(p_name USING utf8mb4),
        `sex` = p_sex,
        `dob` = p_dob,
        `phoneNumber` = p_phoneNumber,
        `university` = CONVERT(p_university USING utf8mb4),
        `password` = p_password
    WHERE `email` = p_email;
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
      IN p_language VARCHAR(45),
      IN p_copyNumber INT
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
          `language` = CONVERT(p_language USING utf8mb4),
          copyNumber = p_copyNumber
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

--
-- Final view structure for view `borrow_details`
--

/*!50001 DROP VIEW IF EXISTS `borrow_details`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `borrow_details` AS select `borrow`.`readerId` AS `readerId`,`book`.`title` AS `title`,`author`.`authorName` AS `authorName`,date_format(`borrow`.`registerDate`,'%Y-%m-%d %H:%i:%s') AS `registerDate`,date_format(`borrow`.`borrowDate`,'%Y-%m-%d %H:%i:%s') AS `borrowDate`,date_format(`borrow`.`givebackDate`,'%Y-%m-%d %H:%i:%s') AS `givebackDate`,`borrow`.`status` AS `status` from (((`borrow` join `book` on((`borrow`.`ISBN` = `book`.`ISBN`))) join `author_write_book` on((`borrow`.`ISBN` = `author_write_book`.`ISBN`))) join `author` on((`author_write_book`.`authorID` = `author`.`authorID`))) order by date_format(`borrow`.`registerDate`,'%Y-%m-%d %H:%i:%s') desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `dashboard_book`
--

/*!50001 DROP VIEW IF EXISTS `dashboard_book`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `dashboard_book` AS select `book`.`coverLink` AS `coverLink`,`book`.`title` AS `title`,`book`.`copyNumber` AS `copyNumber`,count(0) AS `borrowCount`,count((case when (`borrow`.`status` = 'Hoàn thành') then 1 end)) AS `givebackCount` from (`book` join `borrow` on((`book`.`ISBN` = `borrow`.`ISBN`))) group by `book`.`coverLink`,`book`.`title`,`book`.`copyNumber` order by `borrowCount` desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `dashboard_info`
--

/*!50001 DROP VIEW IF EXISTS `dashboard_info`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `dashboard_info` AS select (select count(0) from `reader`) AS `readerCount`,(select count(0) from `book`) AS `bookCount`,(select count(0) from `borrow`) AS `borrowCount`,(select count(0) from `borrow` where (`borrow`.`status` = 'Hoàn thành')) AS `givebackCount` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `dashboard_reader`
--

/*!50001 DROP VIEW IF EXISTS `dashboard_reader`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `dashboard_reader` AS select `reader`.`readerId` AS `readerId`,`reader`.`name` AS `readerName`,count(0) AS `borrowCount`,count((case when (`borrow`.`status` = 'Hoàn thành') then 1 end)) AS `givebackCount` from (`reader` join `borrow` on((`reader`.`readerId` = `borrow`.`readerId`))) group by `reader`.`readerId`,`reader`.`name` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `favorite_book`
--

/*!50001 DROP VIEW IF EXISTS `favorite_book`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `favorite_book` AS select `book`.`ISBN` AS `ISBN`,`book`.`title` AS `title`,`book`.`coverLink` AS `coverLink`,`author`.`authorName` AS `authorName`,`favorite`.`readerId` AS `readerId` from (((`book` join `author_write_book` on((`book`.`ISBN` = `author_write_book`.`ISBN`))) join `author` on((`author_write_book`.`authorID` = `author`.`authorID`))) join `favorite` on((`book`.`ISBN` = `favorite`.`ISBN`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `general_borrow_info`
--

/*!50001 DROP VIEW IF EXISTS `general_borrow_info`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `general_borrow_info` AS select (select max(`borrow`.`givebackDate`) from `borrow` where (`borrow`.`readerId` = 'ST1000000')) AS `latestDeadline`,(select count(0) from `borrow` where ((`borrow`.`readerId` = 'ST1000000') and (`borrow`.`status` <> 'Hoàn thành') and (`borrow`.`status` <> 'Chờ nhận sách'))) AS `notGiveBack`,(select count(0) from `borrow` where ((`borrow`.`readerId` = 'ST1000000') and (`borrow`.`status` = 'Hoàn thành'))) AS `giveBack`,(select count(0) from `borrow` where (`borrow`.`readerId` = 'ST1000000')) AS `borrowNo` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-12-12 20:22:29
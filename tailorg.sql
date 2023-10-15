-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 15, 2023 at 07:48 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tailorg`
--

-- --------------------------------------------------------

--
-- Table structure for table `tg_body_part_master`
--

CREATE TABLE `tg_body_part_master` (
  `id` int(11) NOT NULL,
  `part_name` varchar(30) NOT NULL,
  `status` tinyint(1) NOT NULL,
  `dtm_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tg_customer_dress_measurement`
--

CREATE TABLE `tg_customer_dress_measurement` (
  `id` int(11) NOT NULL,
  `dtp_id` int(11) NOT NULL,
  `value` int(11) NOT NULL,
  `note` varchar(50) NOT NULL,
  `dmm_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tg_customer_master`
--

CREATE TABLE `tg_customer_master` (
  `id` int(11) NOT NULL,
  `cus_name` varchar(30) NOT NULL,
  `cus_city` varchar(30) NOT NULL,
  `cus_email` varchar(100) NOT NULL,
  `cus_address` varchar(50) NOT NULL,
  `cus_gender` varchar(10) NOT NULL,
  `cus_number` varchar(10) NOT NULL,
  `date` date NOT NULL,
  `time` time NOT NULL,
  `sm_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tg_customer_master`
--

INSERT INTO `tg_customer_master` (`id`, `cus_name`, `cus_city`, `cus_email`, `cus_address`, `cus_gender`, `cus_number`, `date`, `time`, `sm_id`) VALUES
(1, 'Nofal Basan', '385210', 'basannofal8@gmail.com', 'Rajosana', 'male', '9023789087', '2023-10-15', '10:42:07', 1),
(2, 'Hussain', '223366', 'husen@gmail.com', 'tenivada', 'female', '8985893345', '2023-10-15', '10:50:46', 1),
(3, 'Nofal', '334445', 'basannol@gmail.com', 'Rajosana', 'male', '9988778888', '2023-10-15', '10:51:49', 4),
(4, 'ss', '', 's', '', 'male', 's', '2023-10-15', '11:11:32', 1),
(5, 'ee', '', '', '', 'male', '', '2023-10-15', '11:14:36', 1),
(6, 'jkk', '', '', '', 'female', '', '2023-10-15', '11:17:38', 1);

-- --------------------------------------------------------

--
-- Table structure for table `tg_dress_measurement_master`
--

CREATE TABLE `tg_dress_measurement_master` (
  `id` int(11) NOT NULL,
  `measurment_name` varchar(30) NOT NULL,
  `note` tinytext NOT NULL,
  `date` date NOT NULL,
  `cus_id` int(11) NOT NULL,
  `dtm_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tg_dress_type_master`
--

CREATE TABLE `tg_dress_type_master` (
  `id` int(11) NOT NULL,
  `dress_name` varchar(30) NOT NULL,
  `default_price` int(11) NOT NULL,
  `gender` varchar(10) NOT NULL,
  `date` date NOT NULL,
  `time` time NOT NULL,
  `sm_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tg_dress_type_part`
--

CREATE TABLE `tg_dress_type_part` (
  `id` int(11) NOT NULL,
  `part_name` varchar(30) NOT NULL,
  `status` tinyint(1) NOT NULL,
  `dtm_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tg_order_master`
--

CREATE TABLE `tg_order_master` (
  `id` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `note` tinytext NOT NULL,
  `order_date` date NOT NULL,
  `delivery_date` date NOT NULL,
  `urgent` tinyint(1) NOT NULL DEFAULT 0,
  `status` int(11) NOT NULL DEFAULT 1,
  `cus_id` int(11) NOT NULL,
  `dtm_id` int(11) NOT NULL,
  `dmm_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tg_shop_master`
--

CREATE TABLE `tg_shop_master` (
  `id` int(11) NOT NULL,
  `shop_name` varchar(50) NOT NULL,
  `fname` varchar(30) NOT NULL,
  `lname` varchar(30) NOT NULL,
  `mobile_number` varchar(10) NOT NULL,
  `address` varchar(30) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(20) NOT NULL,
  `date` date NOT NULL,
  `time` time NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tg_shop_master`
--

INSERT INTO `tg_shop_master` (`id`, `shop_name`, `fname`, `lname`, `mobile_number`, `address`, `email`, `password`, `date`, `time`, `status`) VALUES
(1, 'nofal', 'basan', 'nofal', '3355444555', '', 'basannofal@gmail.com', '66553322', '2023-10-11', '18:32:35', 1),
(2, 'Bombay collection ', 'Hussain', 'Sunasara', '9023789087', '', 'statusword9@gmail.com', '123456', '2023-10-15', '07:36:51', 1),
(3, 'Collection.', 'New sho.', 'On.', '9194276284', '', 'basannofal4@gmail.com', '1222233', '2023-10-15', '07:43:42', 1),
(4, 'valudas tailor', 'aakib', 'valuda', '8877556633', '', 'valudaaakib@gmail.com', '123456', '2023-10-15', '09:27:52', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tg_body_part_master`
--
ALTER TABLE `tg_body_part_master`
  ADD PRIMARY KEY (`id`),
  ADD KEY `dtm_id` (`dtm_id`);

--
-- Indexes for table `tg_customer_dress_measurement`
--
ALTER TABLE `tg_customer_dress_measurement`
  ADD PRIMARY KEY (`id`),
  ADD KEY `dtp_id` (`dtp_id`),
  ADD KEY `dmm_id` (`dmm_id`);

--
-- Indexes for table `tg_customer_master`
--
ALTER TABLE `tg_customer_master`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sm_id` (`sm_id`);

--
-- Indexes for table `tg_dress_measurement_master`
--
ALTER TABLE `tg_dress_measurement_master`
  ADD PRIMARY KEY (`id`),
  ADD KEY `dtm_id` (`dtm_id`),
  ADD KEY `cus_id` (`cus_id`);

--
-- Indexes for table `tg_dress_type_master`
--
ALTER TABLE `tg_dress_type_master`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sm_id` (`sm_id`);

--
-- Indexes for table `tg_dress_type_part`
--
ALTER TABLE `tg_dress_type_part`
  ADD PRIMARY KEY (`id`),
  ADD KEY `dtm_id` (`dtm_id`);

--
-- Indexes for table `tg_order_master`
--
ALTER TABLE `tg_order_master`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cus_id` (`cus_id`),
  ADD KEY `dtm_id` (`dtm_id`),
  ADD KEY `dmm_id` (`dmm_id`);

--
-- Indexes for table `tg_shop_master`
--
ALTER TABLE `tg_shop_master`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tg_body_part_master`
--
ALTER TABLE `tg_body_part_master`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tg_customer_dress_measurement`
--
ALTER TABLE `tg_customer_dress_measurement`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tg_customer_master`
--
ALTER TABLE `tg_customer_master`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `tg_dress_measurement_master`
--
ALTER TABLE `tg_dress_measurement_master`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tg_dress_type_master`
--
ALTER TABLE `tg_dress_type_master`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tg_dress_type_part`
--
ALTER TABLE `tg_dress_type_part`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tg_order_master`
--
ALTER TABLE `tg_order_master`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tg_shop_master`
--
ALTER TABLE `tg_shop_master`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tg_body_part_master`
--
ALTER TABLE `tg_body_part_master`
  ADD CONSTRAINT `tg_body_part_master_ibfk_1` FOREIGN KEY (`dtm_id`) REFERENCES `tg_dress_type_master` (`id`);

--
-- Constraints for table `tg_customer_dress_measurement`
--
ALTER TABLE `tg_customer_dress_measurement`
  ADD CONSTRAINT `tg_customer_dress_measurement_ibfk_1` FOREIGN KEY (`dmm_id`) REFERENCES `tg_dress_measurement_master` (`id`),
  ADD CONSTRAINT `tg_customer_dress_measurement_ibfk_2` FOREIGN KEY (`dtp_id`) REFERENCES `tg_dress_type_part` (`id`);

--
-- Constraints for table `tg_customer_master`
--
ALTER TABLE `tg_customer_master`
  ADD CONSTRAINT `tg_customer_master_ibfk_1` FOREIGN KEY (`sm_id`) REFERENCES `tg_shop_master` (`id`);

--
-- Constraints for table `tg_dress_measurement_master`
--
ALTER TABLE `tg_dress_measurement_master`
  ADD CONSTRAINT `tg_dress_measurement_master_ibfk_1` FOREIGN KEY (`cus_id`) REFERENCES `tg_customer_master` (`id`),
  ADD CONSTRAINT `tg_dress_measurement_master_ibfk_2` FOREIGN KEY (`dtm_id`) REFERENCES `tg_dress_type_master` (`id`);

--
-- Constraints for table `tg_dress_type_master`
--
ALTER TABLE `tg_dress_type_master`
  ADD CONSTRAINT `tg_dress_type_master_ibfk_1` FOREIGN KEY (`sm_id`) REFERENCES `tg_shop_master` (`id`);

--
-- Constraints for table `tg_dress_type_part`
--
ALTER TABLE `tg_dress_type_part`
  ADD CONSTRAINT `tg_dress_type_part_ibfk_1` FOREIGN KEY (`dtm_id`) REFERENCES `tg_dress_type_master` (`id`);

--
-- Constraints for table `tg_order_master`
--
ALTER TABLE `tg_order_master`
  ADD CONSTRAINT `tg_order_master_ibfk_1` FOREIGN KEY (`cus_id`) REFERENCES `tg_customer_master` (`id`),
  ADD CONSTRAINT `tg_order_master_ibfk_2` FOREIGN KEY (`dmm_id`) REFERENCES `tg_dress_measurement_master` (`id`),
  ADD CONSTRAINT `tg_order_master_ibfk_3` FOREIGN KEY (`dtm_id`) REFERENCES `tg_dress_type_master` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

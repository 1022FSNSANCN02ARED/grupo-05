-- phpMyAdmin SQL Dump
-- version 5.1.4
-- https://www.phpmyadmin.net/
--
-- Servidor: mysql-npcgames.alwaysdata.net
-- Tiempo de generación: 24-04-2023 a las 15:07:33
-- Versión del servidor: 10.6.11-MariaDB
-- Versión de PHP: 7.4.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `npcgames_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `assessment`
--

CREATE TABLE `assessment` (
  `id` int(11) NOT NULL,
  `value` int(11) NOT NULL,
  `productId` int(11) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carts`
--

CREATE TABLE `carts` (
  `id` int(11) NOT NULL,
  `amount` int(11) NOT NULL,
  `productId` int(11) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `category`
--

INSERT INTO `category` (`id`, `name`) VALUES
(1, 'aventura'),
(2, 'autos'),
(3, 'shooters'),
(4, 'indie');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comments`
--

CREATE TABLE `comments` (
  `id` int(11) NOT NULL,
  `description` varchar(500) NOT NULL,
  `productId` int(11) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `details`
--

CREATE TABLE `details` (
  `id` int(11) NOT NULL,
  `amount` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `orderId` int(11) DEFAULT NULL,
  `productId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `orderProduct`
--

CREATE TABLE `orderProduct` (
  `id` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `orderId` int(11) DEFAULT NULL,
  `productId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `orderReturn`
--

CREATE TABLE `orderReturn` (
  `id` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `status` varchar(255) NOT NULL,
  `reasons` varchar(255) NOT NULL,
  `orderId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `status` varchar(255) NOT NULL,
  `userId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `payments`
--

CREATE TABLE `payments` (
  `id` int(11) NOT NULL,
  `amount` int(11) NOT NULL,
  `method` varchar(255) NOT NULL,
  `fecha` date NOT NULL,
  `orderId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` int(11) NOT NULL,
  `description` varchar(500) NOT NULL,
  `image` varchar(255) NOT NULL,
  `stock` int(11) NOT NULL,
  `categoryId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(500) NOT NULL,
  `userName` varchar(500) NOT NULL,
  `email` varchar(80) NOT NULL,
  `avatar` varchar(255) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `userName`, `email`, `avatar`, `password`) VALUES
(1, 'Marketa', 'mamey0', 'mhowison0@de.vu', 'http://dummyimage.com/174x100.png/cc0000/ffffff', 'XZl3b4X5'),
(2, 'Whitney', 'wmcinteer1', 'wgridon1@squarespace.com', 'http://dummyimage.com/119x100.png/cc0000/ffffff', 'NcmTpi'),
(3, 'Barret', 'bslayford2', 'bfodden2@vimeo.com', 'http://dummyimage.com/249x100.png/5fa2dd/ffffff', 'OKVqMPPL'),
(4, 'Toinette', 'tfawthorpe3', 'tloughman3@va.gov', 'http://dummyimage.com/189x100.png/cc0000/ffffff', 'dTs8duWjD'),
(5, 'Gerardo', 'ghull4', 'gdunstan4@google.co.jp', 'http://dummyimage.com/248x100.png/5fa2dd/ffffff', 'jjCJ5vOgk'),
(6, 'Armstrong', 'acronkshaw5', 'awegman5@europa.eu', 'http://dummyimage.com/197x100.png/cc0000/ffffff', 'RtwmKo7lMg'),
(7, 'Rebbecca', 'rdalliwatr6', 'rgellion6@freewebs.com', 'http://dummyimage.com/212x100.png/dddddd/000000', 'PrI6T7k0CtGA'),
(8, 'Ramsay', 'rmaker7', 'rfoan7@ifeng.com', 'http://dummyimage.com/111x100.png/dddddd/000000', 'VwipQfzBMB'),
(9, 'Drake', 'darsey8', 'dsaxon8@spotify.com', 'http://dummyimage.com/243x100.png/cc0000/ffffff', '0wQUYswcc8'),
(10, 'Burch', 'btarbox9', 'bdillet9@cocolog-nifty.com', 'http://dummyimage.com/246x100.png/5fa2dd/ffffff', 'yzT2Mecf'),
(11, 'Worth', 'wpapesa', 'wravenscrafta@livejournal.com', 'http://dummyimage.com/209x100.png/5fa2dd/ffffff', 'lfO3le'),
(12, 'Fidole', 'fstockbridgeb', 'ffochb@cornell.edu', 'http://dummyimage.com/212x100.png/5fa2dd/ffffff', 'yzMncr6I0SZ'),
(13, 'Thorn', 'tastmanc', 'tlonghirstc@usnews.com', 'http://dummyimage.com/202x100.png/ff4444/ffffff', 'uX1fRjgKlIe'),
(14, 'Woodrow', 'wgiannazzod', 'wkellyd@marriott.com', 'http://dummyimage.com/209x100.png/5fa2dd/ffffff', 'pkNP9uNHA'),
(15, 'Alick', 'arutiglianoe', 'ahesslee@diigo.com', 'http://dummyimage.com/115x100.png/dddddd/000000', 'EpSuBW2MN4'),
(16, 'Felisha', 'fjakobssenf', 'fpoutressf@reuters.com', 'http://dummyimage.com/111x100.png/cc0000/ffffff', '6Tm8Ztzr'),
(17, 'Olivie', 'oabelevitzg', 'ojesseg@lycos.com', 'http://dummyimage.com/238x100.png/5fa2dd/ffffff', 'WWJXj7y'),
(18, 'Lexine', 'lschulzh', 'lsendleyh@privacy.gov.au', 'http://dummyimage.com/213x100.png/5fa2dd/ffffff', 'HMOOp6'),
(19, 'Paule', 'pclaughtoni', 'pslyi@indiegogo.com', 'http://dummyimage.com/250x100.png/ff4444/ffffff', 'zPDOyMjsGo5a'),
(20, 'Paulie', 'pburdasj', 'pcumberlandj@technorati.com', 'http://dummyimage.com/185x100.png/5fa2dd/ffffff', 'pmzoPDoXAlaf'),
(21, 'Donna', 'dstoffelsk', 'dtemplemank@google.nl', 'http://dummyimage.com/125x100.png/dddddd/000000', 'RXBT04l5OUq'),
(22, 'Kissie', 'kthomblesonl', 'khellewelll@gov.uk', 'http://dummyimage.com/192x100.png/dddddd/000000', 'O5j8LJ9'),
(23, 'Eachelle', 'eribbensm', 'echarletm@cpanel.net', 'http://dummyimage.com/111x100.png/dddddd/000000', '95N6aXN8P'),
(24, 'Ianthe', 'ihigginbottamn', 'icurteisn@mit.edu', 'http://dummyimage.com/119x100.png/cc0000/ffffff', 'lAeP4M6'),
(25, 'Ewan', 'eblesingo', 'eboultono@issuu.com', 'http://dummyimage.com/219x100.png/5fa2dd/ffffff', 'P95se413'),
(26, 'Janeen', 'jwebsdalep', 'jvanhaeftenp@kickstarter.com', 'http://dummyimage.com/177x100.png/cc0000/ffffff', 'o2Gxx7'),
(27, 'Eda', 'esimeonovq', 'eciccarelliq@google.com', 'http://dummyimage.com/246x100.png/ff4444/ffffff', 'jgaEOIy27'),
(28, 'Shel', 'spaiger', 'shordler@virginia.edu', 'http://dummyimage.com/116x100.png/5fa2dd/ffffff', 'PT8ySaS'),
(29, 'Tally', 'tcamplens', 'tscraggs@sitemeter.com', 'http://dummyimage.com/107x100.png/ff4444/ffffff', '7vH55DSmeQT'),
(30, 'Sophronia', 'slansberryt', 'starquiniot@indiegogo.com', 'http://dummyimage.com/141x100.png/5fa2dd/ffffff', 'yXUXeN8UO'),
(31, 'Candie', 'casmusu', 'cllewhellinu@fda.gov', 'http://dummyimage.com/172x100.png/5fa2dd/ffffff', 'ZAQ23HcgHI3l'),
(32, 'Kev', 'kdominiquev', 'kpolliev@google.com.br', 'http://dummyimage.com/154x100.png/dddddd/000000', 'SaNbxYve8XV'),
(33, 'Fons', 'fthirskw', 'fdoudneyw@dell.com', 'http://dummyimage.com/237x100.png/dddddd/000000', '3rZRgwoMrsZP'),
(34, 'Julie', 'jlemarquisx', 'jdannehlx@google.it', 'http://dummyimage.com/193x100.png/5fa2dd/ffffff', 'TD6MiRGXg'),
(35, 'Hubert', 'hhastiey', 'hblacketty@home.pl', 'http://dummyimage.com/114x100.png/ff4444/ffffff', 'yyEEMr7c'),
(36, 'Rheba', 'rmaccaguez', 'rduboisz@tamu.edu', 'http://dummyimage.com/241x100.png/dddddd/000000', 'CO6HTyCaHlfe'),
(37, 'Georgeta', 'glammerich10', 'gkellie10@princeton.edu', 'http://dummyimage.com/155x100.png/5fa2dd/ffffff', 'H10aB1qOneuC'),
(38, 'Ernestus', 'ebindley11', 'edudny11@php.net', 'http://dummyimage.com/155x100.png/ff4444/ffffff', 'B7Q856S2gti'),
(39, 'Reece', 'rhablot12', 'ropfer12@twitpic.com', 'http://dummyimage.com/141x100.png/5fa2dd/ffffff', 'tpkWVoL'),
(40, 'Rudolf', 'rashworth13', 'rwhitten13@pen.io', 'http://dummyimage.com/169x100.png/dddddd/000000', 'mUGj2Phi1'),
(41, 'Ricard', 'rgrunbaum14', 'rdorsay14@nps.gov', 'http://dummyimage.com/143x100.png/cc0000/ffffff', 'Wi4BM4ucxm3v'),
(42, 'Tess', 'tullock15', 'tyaneev15@ocn.ne.jp', 'http://dummyimage.com/240x100.png/5fa2dd/ffffff', 'S7imTnKsVAA'),
(43, 'Kristoffer', 'kvelti16', 'kthrower16@harvard.edu', 'http://dummyimage.com/172x100.png/5fa2dd/ffffff', 'TwOhCNj'),
(44, 'Wright', 'wportigall17', 'wgulberg17@csmonitor.com', 'http://dummyimage.com/203x100.png/cc0000/ffffff', '9zz1v2SAc4T'),
(45, 'Monti', 'mpillinger18', 'mwestnedge18@mysql.com', 'http://dummyimage.com/136x100.png/cc0000/ffffff', 'mk7fhFT'),
(46, 'Fawnia', 'fheball19', 'favery19@rakuten.co.jp', 'http://dummyimage.com/153x100.png/dddddd/000000', 'ZjQ1H5Dhylz'),
(47, 'Lezley', 'lnewlan1a', 'lelvin1a@tripadvisor.com', 'http://dummyimage.com/198x100.png/dddddd/000000', 'efjJZE2HY'),
(48, 'Renata', 'rvarlow1b', 'regleton1b@dion.ne.jp', 'http://dummyimage.com/193x100.png/ff4444/ffffff', '1wX5PKgw6yL'),
(49, 'Valera', 'vgoodger1c', 'vsambiedge1c@jigsy.com', 'http://dummyimage.com/242x100.png/ff4444/ffffff', 'GPLjP7QZBGY6'),
(50, 'Chaim', 'ciorns1d', 'cgeorgiades1d@myspace.com', 'http://dummyimage.com/202x100.png/cc0000/ffffff', 'JJ2FfM'),
(51, 'Selle', 'slawrie1e', 'snockalls1e@psu.edu', 'http://dummyimage.com/230x100.png/ff4444/ffffff', 'mzp13Q7YAaC'),
(52, 'Essa', 'ebeckson1f', 'emuzzini1f@sitemeter.com', 'http://dummyimage.com/165x100.png/cc0000/ffffff', 'JrIvn0iyXy9'),
(53, 'Calli', 'cdawton1g', 'ccornock1g@paypal.com', 'http://dummyimage.com/207x100.png/cc0000/ffffff', 'JYqo25se4'),
(54, 'Noland', 'nnoller1h', 'nmcgarvey1h@usatoday.com', 'http://dummyimage.com/176x100.png/5fa2dd/ffffff', 'egRql4sD7HQW'),
(55, 'Marlin', 'mjeger1i', 'mbrundill1i@washingtonpost.com', 'http://dummyimage.com/110x100.png/cc0000/ffffff', 'q0Wfwy'),
(56, 'Lissa', 'lkitchingman1j', 'lmachel1j@nih.gov', 'http://dummyimage.com/156x100.png/ff4444/ffffff', 'sYKhI2oLd'),
(57, 'Aube', 'amcshee1k', 'achaffer1k@cafepress.com', 'http://dummyimage.com/194x100.png/dddddd/000000', 'kzDObVnGw'),
(58, 'Desdemona', 'dmoran1l', 'dmacgill1l@hhs.gov', 'http://dummyimage.com/155x100.png/cc0000/ffffff', '33v18U9BEt'),
(59, 'Theodosia', 'tvelten1m', 'thanburybrown1m@webmd.com', 'http://dummyimage.com/219x100.png/ff4444/ffffff', 'pwH413zxIt'),
(60, 'Analiese', 'anapolione1n', 'abalston1n@wiley.com', 'http://dummyimage.com/127x100.png/dddddd/000000', 'MeEx8bZLM'),
(61, 'Clo', 'cgateley1o', 'cjoyce1o@nytimes.com', 'http://dummyimage.com/140x100.png/dddddd/000000', 'EEPWDgP'),
(62, 'Lindy', 'lcrippen1p', 'lwigfall1p@psu.edu', 'http://dummyimage.com/225x100.png/ff4444/ffffff', 'mcNosLwd44T6'),
(63, 'Timmy', 'tgawkes1q', 'tduinbleton1q@reference.com', 'http://dummyimage.com/110x100.png/cc0000/ffffff', 'bJ3hXWyjIv'),
(64, 'Shepard', 'sbowart1r', 'stimmis1r@webs.com', 'http://dummyimage.com/186x100.png/cc0000/ffffff', 'TWI5XdNa2jc'),
(65, 'Ronnica', 'rgianinotti1s', 'rshaw1s@unesco.org', 'http://dummyimage.com/126x100.png/ff4444/ffffff', '9cqsAxqY1'),
(66, 'Aluin', 'amaingot1t', 'abull1t@smh.com.au', 'http://dummyimage.com/133x100.png/ff4444/ffffff', 'JO6uWB'),
(67, 'Merilee', 'mbolter1u', 'mlaister1u@mozilla.org', 'http://dummyimage.com/206x100.png/ff4444/ffffff', 'kZQXImpQ4I'),
(68, 'Shirl', 'smichiel1v', 'sviveash1v@wunderground.com', 'http://dummyimage.com/169x100.png/cc0000/ffffff', 'eZZIw16qgqU'),
(69, 'Charlot', 'ccorradetti1w', 'cduddin1w@moonfruit.com', 'http://dummyimage.com/202x100.png/cc0000/ffffff', 'XotkpdBdaEN'),
(70, 'Rosalynd', 'rgriston1x', 'rmassimo1x@weibo.com', 'http://dummyimage.com/137x100.png/5fa2dd/ffffff', 'GyTLdgym4nG9'),
(71, 'Brennen', 'bpessel1y', 'bdorricott1y@nymag.com', 'http://dummyimage.com/171x100.png/dddddd/000000', 'sPHDVgPs'),
(72, 'Abey', 'apollendine1z', 'aseymark1z@miitbeian.gov.cn', 'http://dummyimage.com/217x100.png/cc0000/ffffff', 'ADDe9DY'),
(73, 'Corine', 'cmckenney20', 'cgiovani20@dell.com', 'http://dummyimage.com/116x100.png/dddddd/000000', 'o6p2vm5wfs3y'),
(74, 'Kitti', 'kpigrome21', 'kmacgeffen21@github.com', 'http://dummyimage.com/226x100.png/cc0000/ffffff', '9K49QIYgy'),
(75, 'Kimberly', 'kruoff22', 'kalabone22@princeton.edu', 'http://dummyimage.com/167x100.png/5fa2dd/ffffff', 'lHYV17by'),
(76, 'Sanderson', 'sboshell23', 'sbeamond23@upenn.edu', 'http://dummyimage.com/180x100.png/dddddd/000000', '8cZrgzV'),
(77, 'Judd', 'jmatches24', 'jlowbridge24@list-manage.com', 'http://dummyimage.com/212x100.png/ff4444/ffffff', 'v7twCFVVfH'),
(78, 'Kort', 'kdeath25', 'kconklin25@webs.com', 'http://dummyimage.com/216x100.png/cc0000/ffffff', 'wF4Xk7k6'),
(79, 'Britte', 'bdunmuir26', 'bobrien26@goo.gl', 'http://dummyimage.com/108x100.png/cc0000/ffffff', '9XCLxywe'),
(80, 'Georgiana', 'ghorlock27', 'gscrammage27@vk.com', 'http://dummyimage.com/241x100.png/5fa2dd/ffffff', 'NArB7MCYb'),
(81, 'Tammie', 'tmoss28', 'tdebeauchamp28@cloudflare.com', 'http://dummyimage.com/177x100.png/5fa2dd/ffffff', 'XuhH6WAlq'),
(82, 'Rockwell', 'rreeme29', 'rmarc29@japanpost.jp', 'http://dummyimage.com/149x100.png/5fa2dd/ffffff', 'VCOvVIrU3bG'),
(83, 'Cissiee', 'csharvell2a', 'cstrangman2a@acquirethisname.com', 'http://dummyimage.com/245x100.png/cc0000/ffffff', 'A6w3xp5NS7V'),
(84, 'Martica', 'mcorder2b', 'mclymo2b@npr.org', 'http://dummyimage.com/237x100.png/5fa2dd/ffffff', 'bSabwrpk'),
(85, 'Zea', 'zferrie2c', 'zrobrow2c@godaddy.com', 'http://dummyimage.com/105x100.png/ff4444/ffffff', 'uHQXvtl'),
(86, 'Tiena', 'tbattershall2d', 'tragsdale2d@yahoo.com', 'http://dummyimage.com/108x100.png/5fa2dd/ffffff', 'E7kAxDiqxcR9'),
(87, 'Aggy', 'adeeson2e', 'amccahey2e@addthis.com', 'http://dummyimage.com/113x100.png/ff4444/ffffff', '7pJMNyYxBHz'),
(88, 'Anthiathia', 'afetherstone2f', 'ahenstone2f@sohu.com', 'http://dummyimage.com/138x100.png/5fa2dd/ffffff', 'IeQK4Lv0soA'),
(89, 'Humphrey', 'hnevins2g', 'hbearman2g@imgur.com', 'http://dummyimage.com/166x100.png/cc0000/ffffff', '4Vbm4VUlB'),
(90, 'Lucy', 'lred2h', 'ljanning2h@newyorker.com', 'http://dummyimage.com/223x100.png/cc0000/ffffff', 'ChwBwM'),
(91, 'Benetta', 'bsvanetti2i', 'bvandrill2i@angelfire.com', 'http://dummyimage.com/121x100.png/cc0000/ffffff', 'JXQoNDa'),
(92, 'Oren', 'ojope2j', 'oblaxter2j@tripadvisor.com', 'http://dummyimage.com/191x100.png/cc0000/ffffff', 'lOrLBSOuKXo8'),
(93, 'Dixie', 'dcathersides2k', 'dwhylie2k@boston.com', 'http://dummyimage.com/211x100.png/5fa2dd/ffffff', 'VsK2du1Sb'),
(94, 'Clarke', 'cwoodworth2l', 'cjanssens2l@scientificamerican.com', 'http://dummyimage.com/152x100.png/ff4444/ffffff', 'wtYgT5nn'),
(95, 'Milty', 'mtadman2m', 'mspinks2m@smh.com.au', 'http://dummyimage.com/129x100.png/dddddd/000000', 'mMUhbqU'),
(96, 'Berri', 'bgaller2n', 'bporker2n@canalblog.com', 'http://dummyimage.com/239x100.png/5fa2dd/ffffff', 'D9KvCE'),
(97, 'Fraser', 'freuble2o', 'fhuggen2o@ed.gov', 'http://dummyimage.com/213x100.png/cc0000/ffffff', 'C2eVYjM'),
(98, 'Aggie', 'afackney2p', 'akerwen2p@furl.net', 'http://dummyimage.com/133x100.png/cc0000/ffffff', 'gt99Ua'),
(99, 'Kylen', 'kmoreland2q', 'kmacauley2q@wikispaces.com', 'http://dummyimage.com/117x100.png/cc0000/ffffff', '1vjr8zi1VdYc'),
(100, 'Corrina', 'cphillpot2r', 'cboggish2r@mediafire.com', 'http://dummyimage.com/184x100.png/ff4444/ffffff', 'V3Tj5SwnoIX');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `assessment`
--
ALTER TABLE `assessment`
  ADD PRIMARY KEY (`id`),
  ADD KEY `productId` (`productId`),
  ADD KEY `userId` (`userId`);

--
-- Indices de la tabla `carts`
--
ALTER TABLE `carts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `productId` (`productId`),
  ADD KEY `userId` (`userId`);

--
-- Indices de la tabla `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `productId` (`productId`),
  ADD KEY `userId` (`userId`);

--
-- Indices de la tabla `details`
--
ALTER TABLE `details`
  ADD PRIMARY KEY (`id`),
  ADD KEY `orderId` (`orderId`),
  ADD KEY `productId` (`productId`);

--
-- Indices de la tabla `orderProduct`
--
ALTER TABLE `orderProduct`
  ADD PRIMARY KEY (`id`),
  ADD KEY `orderId` (`orderId`),
  ADD KEY `productId` (`productId`);

--
-- Indices de la tabla `orderReturn`
--
ALTER TABLE `orderReturn`
  ADD PRIMARY KEY (`id`),
  ADD KEY `orderId` (`orderId`);

--
-- Indices de la tabla `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indices de la tabla `payments`
--
ALTER TABLE `payments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `orderId` (`orderId`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `categoryId` (`categoryId`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `userName` (`userName`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `assessment`
--
ALTER TABLE `assessment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `carts`
--
ALTER TABLE `carts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `details`
--
ALTER TABLE `details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `orderProduct`
--
ALTER TABLE `orderProduct`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `orderReturn`
--
ALTER TABLE `orderReturn`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `payments`
--
ALTER TABLE `payments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=101;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `assessment`
--
ALTER TABLE `assessment`
  ADD CONSTRAINT `assessment_ibfk_1` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `assessment_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `users` (`id`);

--
-- Filtros para la tabla `carts`
--
ALTER TABLE `carts`
  ADD CONSTRAINT `carts_ibfk_1` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `carts_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `users` (`id`);

--
-- Filtros para la tabla `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `comments_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `users` (`id`);

--
-- Filtros para la tabla `details`
--
ALTER TABLE `details`
  ADD CONSTRAINT `details_ibfk_1` FOREIGN KEY (`orderId`) REFERENCES `orders` (`id`),
  ADD CONSTRAINT `details_ibfk_2` FOREIGN KEY (`productId`) REFERENCES `products` (`id`);

--
-- Filtros para la tabla `orderProduct`
--
ALTER TABLE `orderProduct`
  ADD CONSTRAINT `orderProduct_ibfk_1` FOREIGN KEY (`orderId`) REFERENCES `orders` (`id`),
  ADD CONSTRAINT `orderProduct_ibfk_2` FOREIGN KEY (`productId`) REFERENCES `products` (`id`);

--
-- Filtros para la tabla `orderReturn`
--
ALTER TABLE `orderReturn`
  ADD CONSTRAINT `orderReturn_ibfk_1` FOREIGN KEY (`orderId`) REFERENCES `orders` (`id`);

--
-- Filtros para la tabla `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`);

--
-- Filtros para la tabla `payments`
--
ALTER TABLE `payments`
  ADD CONSTRAINT `payments_ibfk_1` FOREIGN KEY (`orderId`) REFERENCES `orders` (`id`);

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`categoryId`) REFERENCES `category` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

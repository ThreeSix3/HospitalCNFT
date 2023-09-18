-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 18-09-2023 a las 05:34:54
-- Versión del servidor: 10.4.20-MariaDB
-- Versión de PHP: 7.3.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `hospital_inet`
--
CREATE DATABASE IF NOT EXISTS `hospital_inet` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `hospital_inet`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `areas`
--

CREATE TABLE `areas` (
  `id_area` int(11) NOT NULL,
  `nombre_area` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `areas`
--

INSERT INTO `areas` (`id_area`, `nombre_area`) VALUES
(1, 'EMERGENCIAS');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `enfermeros`
--

CREATE TABLE `enfermeros` (
  `id_enfermero` int(11) NOT NULL,
  `id_usuario` int(11) DEFAULT NULL,
  `nombre_enfermero` varchar(20) NOT NULL,
  `apellido_enfermero` varchar(20) NOT NULL,
  `dni_enfermero` varchar(9) NOT NULL,
  `telefono_enfermero` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `enfermeros`
--

INSERT INTO `enfermeros` (`id_enfermero`, `id_usuario`, `nombre_enfermero`, `apellido_enfermero`, `dni_enfermero`, `telefono_enfermero`) VALUES
(1, NULL, 'enfermero', 'garcia', '27097145', '2235417454'),
(2, NULL, 'enfermero2', 'garcia', '27097145', '46546545');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `grupo_factor`
--

CREATE TABLE `grupo_factor` (
  `id_grupo_factor` int(11) NOT NULL,
  `desc_grupo_factor` varchar(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `grupo_factor`
--

INSERT INTO `grupo_factor` (`id_grupo_factor`, `desc_grupo_factor`) VALUES
(1, 'A+'),
(2, 'AB+'),
(3, 'B+'),
(4, '0+'),
(5, 'A-'),
(6, 'AB-'),
(7, 'B-'),
(8, '0-');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `llamados`
--

CREATE TABLE `llamados` (
  `id_llamado` int(11) NOT NULL,
  `id_tipo_llamado` int(11) NOT NULL,
  `estado_llamado` tinyint(1) NOT NULL DEFAULT 0,
  `fhora_llamado` timestamp NOT NULL DEFAULT current_timestamp(),
  `fhora_atencion_llamado` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
  `id_ubicacion` int(11) NOT NULL,
  `id_origen_llamado` int(11) DEFAULT NULL,
  `id_paciente` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `llamados`
--

INSERT INTO `llamados` (`id_llamado`, `id_tipo_llamado`, `estado_llamado`, `fhora_llamado`, `fhora_atencion_llamado`, `id_ubicacion`, `id_origen_llamado`, `id_paciente`) VALUES
(2, 2, 0, '2023-09-16 03:20:06', NULL, 1, NULL, NULL),
(3, 1, 1, '2023-09-17 21:25:14', '2023-09-18 03:18:32', 1, 2, 1),
(4, 1, 1, '2023-09-17 22:00:01', '2023-09-18 03:18:32', 1, 2, 2),
(5, 1, 0, '2023-09-18 03:14:47', NULL, 1, 1, 1),
(6, 2, 0, '2023-09-18 03:32:48', NULL, 1, 2, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `origen_llamados`
--

CREATE TABLE `origen_llamados` (
  `id_origen_llamado` int(11) NOT NULL,
  `desc_origen_llamado` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `origen_llamados`
--

INSERT INTO `origen_llamados` (`id_origen_llamado`, `desc_origen_llamado`) VALUES
(1, 'CAMA'),
(2, 'BAÑO');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pacientes`
--

CREATE TABLE `pacientes` (
  `id_paciente` int(11) NOT NULL,
  `nombre_paciente` varchar(20) NOT NULL,
  `apellido_paciente` varchar(40) NOT NULL,
  `dni_paciente` varchar(10) NOT NULL,
  `telefono_paciente` varchar(15) NOT NULL,
  `id_grupo_factor_paciente` int(11) NOT NULL,
  `fnac_paciente` date NOT NULL,
  `fingreso_paciente` date NOT NULL,
  `falta_paciente` date DEFAULT NULL,
  `domicilio_paciente` varchar(50) NOT NULL,
  `historia_clinica_paciente` text NOT NULL,
  `motivo_ingreso_paciente` text NOT NULL,
  `id_ubicacion` int(11) NOT NULL,
  `id_enfermero` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `pacientes`
--

INSERT INTO `pacientes` (`id_paciente`, `nombre_paciente`, `apellido_paciente`, `dni_paciente`, `telefono_paciente`, `id_grupo_factor_paciente`, `fnac_paciente`, `fingreso_paciente`, `falta_paciente`, `domicilio_paciente`, `historia_clinica_paciente`, `motivo_ingreso_paciente`, `id_ubicacion`, `id_enfermero`) VALUES
(1, 'camila', 'sanchez', '46557196', '2236807908', 4, '2005-03-23', '2023-09-17', NULL, 'Pasaje Mar del Plata 582', '-', '-', 1, 1),
(2, 'camila', 'sanchez', '46557196', '2236807908', 1, '2005-03-23', '2023-09-17', NULL, 'Pasaje Mar del Plata 582', '\r\n+', '+', 1, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipos_llamados`
--

CREATE TABLE `tipos_llamados` (
  `id_tipo_llamado` int(11) NOT NULL,
  `desc_tipo_llamado` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tipos_llamados`
--

INSERT INTO `tipos_llamados` (`id_tipo_llamado`, `desc_tipo_llamado`) VALUES
(1, 'NORMAL'),
(2, 'EMERGENCIA');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ubicaciones`
--

CREATE TABLE `ubicaciones` (
  `id_ubicacion` int(11) NOT NULL,
  `id_area` int(11) NOT NULL,
  `nombre_ubicacion` varchar(25) NOT NULL,
  `numero_ubicacion` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `ubicaciones`
--

INSERT INTO `ubicaciones` (`id_ubicacion`, `id_area`, `nombre_ubicacion`, `numero_ubicacion`) VALUES
(1, 1, 'QUIROFANO', 8);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id_usuario` int(11) NOT NULL,
  `nombre_usuario` varchar(20) NOT NULL,
  `contrasena_usuario` text NOT NULL,
  `super_usuario` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `nombre_usuario`, `contrasena_usuario`, `super_usuario`) VALUES
(1, 'admin', 'U2FsdGVkX1/LwFJY6J1h5OClF3NxO9oWhSMa/yp8FPE=', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `areas`
--
ALTER TABLE `areas`
  ADD PRIMARY KEY (`id_area`);

--
-- Indices de la tabla `enfermeros`
--
ALTER TABLE `enfermeros`
  ADD PRIMARY KEY (`id_enfermero`),
  ADD KEY `FK_Enfermeros_Usuario` (`id_usuario`);

--
-- Indices de la tabla `grupo_factor`
--
ALTER TABLE `grupo_factor`
  ADD PRIMARY KEY (`id_grupo_factor`);

--
-- Indices de la tabla `llamados`
--
ALTER TABLE `llamados`
  ADD PRIMARY KEY (`id_llamado`),
  ADD KEY `FK_Llamados_Paciente` (`id_paciente`),
  ADD KEY `FK_Llamados_Origen` (`id_origen_llamado`),
  ADD KEY `FK_Llamados_Ubicacion` (`id_ubicacion`),
  ADD KEY `FK_Llamados_Tipo` (`id_tipo_llamado`);

--
-- Indices de la tabla `origen_llamados`
--
ALTER TABLE `origen_llamados`
  ADD PRIMARY KEY (`id_origen_llamado`);

--
-- Indices de la tabla `pacientes`
--
ALTER TABLE `pacientes`
  ADD PRIMARY KEY (`id_paciente`),
  ADD KEY `FK_Pacientes_Enfermeros` (`id_enfermero`),
  ADD KEY `FK_Pacientes_GrupoFactor` (`id_grupo_factor_paciente`),
  ADD KEY `FK_Pacientes_Ubicaciones` (`id_ubicacion`);

--
-- Indices de la tabla `tipos_llamados`
--
ALTER TABLE `tipos_llamados`
  ADD PRIMARY KEY (`id_tipo_llamado`);

--
-- Indices de la tabla `ubicaciones`
--
ALTER TABLE `ubicaciones`
  ADD PRIMARY KEY (`id_ubicacion`),
  ADD KEY `FK_Ubicaciones_Areas` (`id_area`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_usuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `areas`
--
ALTER TABLE `areas`
  MODIFY `id_area` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `enfermeros`
--
ALTER TABLE `enfermeros`
  MODIFY `id_enfermero` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `grupo_factor`
--
ALTER TABLE `grupo_factor`
  MODIFY `id_grupo_factor` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `llamados`
--
ALTER TABLE `llamados`
  MODIFY `id_llamado` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `origen_llamados`
--
ALTER TABLE `origen_llamados`
  MODIFY `id_origen_llamado` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `pacientes`
--
ALTER TABLE `pacientes`
  MODIFY `id_paciente` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `tipos_llamados`
--
ALTER TABLE `tipos_llamados`
  MODIFY `id_tipo_llamado` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `ubicaciones`
--
ALTER TABLE `ubicaciones`
  MODIFY `id_ubicacion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `enfermeros`
--
ALTER TABLE `enfermeros`
  ADD CONSTRAINT `FK_Enfermeros_Usuario` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `llamados`
--
ALTER TABLE `llamados`
  ADD CONSTRAINT `FK_Llamados_Origen` FOREIGN KEY (`id_origen_llamado`) REFERENCES `origen_llamados` (`id_origen_llamado`) ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_Llamados_Paciente` FOREIGN KEY (`id_paciente`) REFERENCES `pacientes` (`id_paciente`) ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_Llamados_Tipo` FOREIGN KEY (`id_tipo_llamado`) REFERENCES `tipos_llamados` (`id_tipo_llamado`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_Llamados_Ubicacion` FOREIGN KEY (`id_ubicacion`) REFERENCES `ubicaciones` (`id_ubicacion`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `pacientes`
--
ALTER TABLE `pacientes`
  ADD CONSTRAINT `FK_Pacientes_Enfermeros` FOREIGN KEY (`id_enfermero`) REFERENCES `enfermeros` (`id_enfermero`) ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_Pacientes_GrupoFactor` FOREIGN KEY (`id_grupo_factor_paciente`) REFERENCES `grupo_factor` (`id_grupo_factor`),
  ADD CONSTRAINT `FK_Pacientes_Ubicaciones` FOREIGN KEY (`id_ubicacion`) REFERENCES `ubicaciones` (`id_ubicacion`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `ubicaciones`
--
ALTER TABLE `ubicaciones`
  ADD CONSTRAINT `FK_Ubicaciones_Areas` FOREIGN KEY (`id_area`) REFERENCES `areas` (`id_area`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

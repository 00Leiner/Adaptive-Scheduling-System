-- Create the "adaptive-scheduling-system" database
CREATE DATABASE IF NOT EXISTS adaptive_scheduling_system_db;

-- Use created database
USE adaptive_scheduling_system;

-- Create the "courses" table
CREATE TABLE courses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    code VARCHAR(255) NOT NULL,
    description TEXT,
    units INT
);

-- Create the "users" table
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);
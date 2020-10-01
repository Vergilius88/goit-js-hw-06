"use strict";

import users from "./users.js";

// Первое задание - получить массив имен всех пользователей

const getUserNames = (users) => users.map((user) => user.name);

console.log(getUserNames(users));

// Второе задание - получить массив объектов пользователей по цвету глаз (поле eyeColor).

const getUsersWithEyeColor = (users, eyeColor) =>
  users.filter((user) => user.eyeColor === eyeColor).map((names) => names.name);

console.log(getUsersWithEyeColor(users, "green"));

// Третье задание - получить массив имен пользователей по полу (поле gender).

const getUsersWithGender = (users, genderFeature) =>
  users
    .filter((user) => user.gender === genderFeature)
    .map((names) => names.name);

console.log(getUsersWithGender(users, "male"));

// Четвертое задание - Получить массив только неактивных пользователей (поле isActive).

const getInactiveUsers = (users, activity) =>
  users.filter((user) => user.isActive !== activity).map((names) => names.name);

console.log(getInactiveUsers(users, true));

// Пятое задание - получить пользоваля (не массив) по email (поле email, он уникальный).

const getUserWithEmail = (users, email) =>
  users.filter((user) => user.email === email);

console.table(getUserWithEmail(users, "shereeanthony@kog.com"));
console.table(getUserWithEmail(users, "elmahead@omatom.com"));

//Шестое задание - Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age).

const getUsersWithAge = (users, min, max) =>
  users.filter((user) => user.age >= min && user.age <= max);

console.log(getUsersWithAge(users, 20, 30));

console.log(getUsersWithAge(users, 30, 40));

// Седьмое задание - получить общую сумму баланса (поле balance) всех пользователей.

const calculateTotalBalance = (users) =>
  users.reduce((vault, valueBalance) => vault + valueBalance.balance, 0);

console.log(calculateTotalBalance(users));

// Восьмое задание - Массив имен всех пользователей у которых есть друг с указанным именем.

const getUsersWithFriend = (users, friendName) =>
  users
    .filter((user) => user.friends.find((friend) => friend === friendName))
    .map((names) => names.name);

console.log(getUsersWithFriend(users, "Briana Decker"));
console.log(getUsersWithFriend(users, "Goldie Gentry"));

//  Девятое задание - Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)

const getNamesSortedByFriendsCount = (users) =>
  users
    .sort((a, b) => a.friends.lenght - b.friends.lenght)
    .map((names) => names.name);

console.log(getNamesSortedByFriendsCount(users));

// Десятое задание - получить массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.

const getSortedUniqueSkills = (users) =>
  users
    .map((user) => user.skills)
    .reduce((vault, skill) => [...vault, ...skill], [])
    .filter((skill, index, arr) => arr.indexOf(skill))
    .sort();

console.log(getSortedUniqueSkills(users));

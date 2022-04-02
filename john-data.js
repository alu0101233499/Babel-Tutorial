/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  * Babel Tutorial
  *
  * @author Lorenzo Gabriel Pérez González
  * @since April 1 2022
  * @module john-data.js
  * @desc This program takes a JSON file with the data for a man called John
  *       Johnson. Once it takes the file, it shows the information with the
  *       correct format.
  * @see {@link https://github.com/alu0101233499/Babel-Tutorial.git}
  */

'use strict';

import * as fs from 'fs';
import * as process from 'process';

const myArgs = process.argv.slice(2);
const FILE = fs.readFileSync('./json/John.json', 'utf8');
export const JSON_OBJECT = JSON.parse(FILE);

const ERROR_MESSAGE = 'Bad input. ' +
  'The correct way to execute the program is: ' +
  'node john-data.js';

/**
 * This function shows the json's data.
 * @param {Object} jsonObject Object with John Johnson's information.
 * @return {String} String with the information about John.
 */
export const showData = function(jsonObject) {
  let data = '';
  for (const property in jsonObject) {
    data += `${property}: ${jsonObject[property]}` + '\n';
  }
  return data;
};

try {
  if (myArgs.length > 0) {
    throw new Error();
  }
  console.log(showData(JSON_OBJECT));
} catch (error) {
  console.log(ERROR_MESSAGE);
}

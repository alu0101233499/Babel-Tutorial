/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 * Babel Tutorial
 *
 * @author Lorenzo Gabriel Pérez González
 * @since April 1 2022
 * @desc john-data.js tests.
 *       This file has all the tests that verify the functions
 *       that are defined in the john-data.js.
 * @see {@link https://github.com/alu0101233499/Babel-Tutorial.git}
 *
 */

import {JOHN_ERROR, JSON_OBJECT, showData} from './john-data.js';

const DATA = 'firstName: John\nlastName: Johnson\nnickname: Json\n' +
  'age: 29\njob: Musician\ninstrument: Violin\n';

describe('Tests of john-data.js', () => {
  test('Tests for showData', () => {
    expect(showData(JSON_OBJECT)).toEqual(DATA);
    expect(() => showData()).toThrow(JOHN_ERROR);
  });
});

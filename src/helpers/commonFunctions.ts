/**
 * Функция для удаления свойства из объекта
 *
 * @param {string} prop - свойство объекта, которое следует удалить
 * @returns {Record<string, any>} объект без свойства prop
 *
 * const user = {
 *  id: 100,
 *  name: 'John Smith',
 *  password: 'password'
 * }
 * const removePassword = removeProperty('password')
 * removePassword(user) //=> { id: 100, name: 'John Smith' }
 */
const removeObjectProperty =
  (prop: string): Record<string, any> =>
  ({ [prop]: _, ...rest }) =>
    rest;

export { removeObjectProperty };

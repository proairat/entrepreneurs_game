/**
 * Функция для получения пути к изображению по названию изображения
 *
 * @param {string} name - название файла с изображением
 * @param {string} extension - расширение файла
 * @returns {string | undefined} путь к файлу изображения
 *
 * getImageUrlAwaitImport('academic-cap')
 */
async function getImageUrlAwaitImport(name: string, extension = "svg") {
  try {
    const dynamicImport = await import(`@/assets/img/${name}.${extension}`);
    return dynamicImport.default;
  } catch (err) {
    console.error("Мы знаем об ошибке и пытаемся её устранить", err);
  }
}

export { getImageUrlAwaitImport };

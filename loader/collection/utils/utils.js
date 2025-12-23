/**
 * Formata uma string com o nome completo
 *
 * @param first - O primeiro nome
 * @param middle - O nome do meio
 * @param last - O último nome
 *
 * @returns A string com o nome completo
 */
export function format(first, middle, last) {
    return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

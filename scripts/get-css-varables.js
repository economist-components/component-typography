/**
 * Returns array of definitions for CSS variables.
 * @param rules
 * @returns {*}
 */
function getCssVarables(rules) {
  if (typeof rules === 'object') {
    if (rules.prefix) {
      return Object.keys(rules)
        .filter((key) => key !== 'prefix')
        .sort((left, right) => parseInt(right, 10) - parseInt(left, 10))
        .map((key) => `${ rules.prefix }-${ key }: ${ rules[key] };`);
    }
    return Object.keys(rules)
      .reduce((res, key) => {
        const variables = getCssVarables(rules[key]);
        if (variables && variables.length) {
          res.push(...variables);
        }
        return res;
      }, []);
  }
  return [];
}
export default getCssVarables;

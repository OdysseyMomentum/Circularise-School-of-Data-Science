// Given an object with a key value scheme + a key => return the value or a default one
// @param {Object} cases An object with a key value scheme
// @param {string} chosenCase The key
// @param {any} the default value to return if there is no match
export function switchcase(cases, chosenCase, defaultCase) {
	return cases[chosenCase] || defaultCase;
}

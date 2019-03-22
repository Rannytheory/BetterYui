/**
 * Credit: https://gist.github.com/Gim949/5aeb9f4feb6bd0181944faac62590120.js
 * 
 * oh wait that's me 
 * -Gim949
 */

import { promisify } from 'util';
import { readdir, readFile } from 'fs';

/**
 * Creates a sorted Set from an array and returns it
 * 
   ```
   let foo = createOrderedSet([4, 2, 8]);
   let bar = createOrderedSet([4, 2, 8], (a, b) => b - a);
   // foo: [2, 4, 8]
   // bar: [8, 4, 2]
   ```
 * @param {Array} arr
 * @returns {Set} Set Object. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 */
export let createOrderedSet = (arr: Array<any>, compareFn = (a: unknown, b: unknown) => <number>a - <number>b) => new Set<any>(arr.sort(compareFn));

/**
 * @param {Array} arr
 * @returns a random element from the array
 */
export function random(arr: any[]){ return arr[Math.floor(Math.random() * arr.length)] }

/**
 * Converts a number into its specified base
 * 
 * *Note: For binary operations, use convertBinary()*
 * @param {number} base @param {number} num
 */
export let convert = (base: number, num: number) => num.toString(base);

/**
 * Randomly shuffles the elements in an array and returns the modified array
 * @param {Array} arr
 * @returns {Array} A modified array
 */
export function shuffle(arr: any[])
{
    let temp = new Set<any>();
    do
    {
        temp.add(random(arr));
    }
    while(temp.size != arr.length);

    return Array.from(temp);
}

/**
 * Allows you to sort parts of an array
 * @param {Array} arr
 */
export function sort(arr: any[], start = 0, end = arr.length, compareFn = (a: unknown, b: unknown) => <number>a - <number>b)
{
    let modifiedArray = arr.slice(start, end);
    if(!modifiedArray) return;
    arr.splice(start, end - start, ...modifiedArray.sort(compareFn));
}

/**
 * Returns a modified string that capatilizes each word in the string
   ```
   let foo = "zucc > mark zuckerberg";
   let bar = toProperCase(foo);
   // bar: "Zucc > Mark Zuckerberg"
   ```
 * @param {String} str
 */
export function toProperCase(str: string): string
{
    const regex = /([^\W_]+[^\s-]*) */g;
    return str.replace(regex, val => val.charAt(0).toUpperCase() + val.slice(1).toLowerCase());
}

/**
 * Convert to and from binary numbers
   ```
   convertBinary("0101");
   // Output: 5
   convertBinary(5);
   // Output: `0b101`
   // Also works with negative numbers, uses two's complement format
   // https://en.wikipedia.org/wiki/Two%27s_complement
   convertBinary(-2);
   // Output: `0b11111111111111111111111111111110`
   ```
 * @returns {number | string} the binary string or number, depending on what you're converting from
 */
export function convertBinary(num: number | string)
{
    // True for binary, false for decimal
    let conversion; 
    if(typeof num == "number")
        conversion = true;
    else if(typeof num == "string")
        conversion = false;
    else 
        return;

    return conversion ? `0b${(<number>num >>> 0).toString(2)}` : parseInt(<string>num, 2);
}

// Promisified functions
export let wait = promisify(setTimeout);
export let readDir = promisify(readdir);
export let readfile = promisify(readFile);
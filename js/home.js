//IMPORT
import { suma } from './components/algebra/suma.js';
import { dalyba } from './components/algebra/dalyba.js';
import { vientisasTekstas } from './components/tekstas/vientisasTekstas.js';


//EXECUTION
const a = dalyba
console.log(a);
const b = suma(8, 5);

console.log(b);

const s1 = vientisasTekstas(['labas', 'rytas']);
console.log(s1, '->', 'lbsrts');

const s2 = vientisasTekstas(['mano', 'namas', 'yra', 'geltonas']);
console.log(s2, '->', 'maonmsyragts');

const s3 = vientisasTekstas(['as', 'i', 'ten']);
console.log(s3, '->', 'aasiiiten');
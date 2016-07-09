export class User{}
export class Vprasanja{}
export class Odgovori{}

let user = new User();
user= [
{name: Tomaz},

]
let vprasanja = new Vprasanja();
let vprasanja= [
{vpr: "kaj si pil?"}

]

let odgovori= new Odgovori();
let odgovori= [
 { odg:"burek"},
  {odg:"kebab"},
  {odg:"tuna"},
  {odg: "frajer"},
]

export function getUser() {return user;}
export function getVprasanja() {return vprasanja;}
export function getOdgovori() {return Odgovori;}



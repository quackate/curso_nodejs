//teclas ctrl y . para convertir de require a module
import { platform, release, arch, cpus, freemem, totalmem, uptime } from 'node:os'
//also posible => import os from 'node:os'

console.log('Info del sistema operativo:')
console.log('---------------------------')
console.log('Nombre:', platform())
console.log('Versión:', release())
console.log('Arquitectura:', arch())
console.log('CPUs:', cpus())
console.log('Memoria Libre:', freemem())
console.log('Memoria Total:', totalmem())
console.log('Uptime:', uptime() / 60 / 60 )
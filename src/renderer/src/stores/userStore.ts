import { writable } from 'svelte/store'
import { IUser } from './interfaces/user.interface'

export const user = writable<IUser>()

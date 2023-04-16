import { electronAPI } from '@electron-toolkit/preload'
import { contextBridge } from 'electron'
// Configuración de variables de entorno
import * as dotenv from 'dotenv'
dotenv.config()

// Interface con lasvariables de entorno de firebase
interface IFirebaseEnvironment {
  apiKey: string
  authDomain: string
  projectId: string
  storageBucket: string
  messagingSenderId: string
  appId: string
}

// Custom APIs for renderer
const api: IFirebaseEnvironment = {
  apiKey: process.env.API_KEY!,
  authDomain: process.env.AUTH_DOMAIN!,
  projectId: process.env.PROJECT_ID!,
  storageBucket: process.env.STORAGE_BUCKET!,
  messagingSenderId: process.env.MESSAGING_SENDER_ID!,
  appId: process.env.APP_ID!
}

// Declrar en la ventana para tener el tipado
declare global {
  interface Window {
    api: IFirebaseEnvironment
  }
}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.

if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI
  // @ts-ignore (define in dts)
  window.api = api
}

import { ElectronAPI } from '@electron-toolkit/preload'

interface IFirebaseEnvironment {
  apiKey: string
  authDomain: string
  projectId: string
  storageBucket: string
  messagingSenderId: string
  appId: string
}

export declare global {
  interface Window {
    electron: ElectronAPI
    api: IFirebaseEnvironment
  }
}

// declare global {
//   const api: IFirebaseEnvironment
// }

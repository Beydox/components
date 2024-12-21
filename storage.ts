export interface LocalStorage {
    apiKey?: string 
  }

export type LocalStorageKey = keyof LocalStorage

export function setStoredApiKey(apiKey: string): Promise<void> {
    const val: LocalStorage = {
      apiKey
    }

    return new Promise((resolve) => {
        chrome.storage.local.set(val, () => {
          resolve()
        })
    })
}

export function getStoredApiKey(): Promise<string> {
    const key: LocalStorageKey = 'apiKey'
    return new Promise((resolve) => {
      chrome.storage.local.get(key, (res: LocalStorage) => {
        resolve(res.apiKey ?? '')
      })
    })
}
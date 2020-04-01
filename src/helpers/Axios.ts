import axios, { Method } from "axios"

type HttpParams = {
  url: string
  method: Method
}

/**
 * Executes an async HTTP request
 * @param url
 * @param method
 */
export const http = async ({ url, method }: HttpParams): Promise<any> =>
  new Promise((resolve, reject) =>
    axios({ url, method })
      .then(({ data }) => resolve(data))
      .catch((error) => reject(error))
  )

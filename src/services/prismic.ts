import * as prismic from '@prismicio/client'

import { enableAutoPreviews } from '@prismicio/next'

import sm from '../../sm.json'

export const endpoint = sm.apiEndpoint;
export const repositoryName = prismic.getRepositoryName(endpoint);

export function linkResolver(doc) {
  switch (doc.type) {
    case 'homepage':
      return '/'
    case 'page':
      return `/posts/${doc.uid}`
    default:
      return null
  }
}

export function createClient(config: any = {}) {
  const client = prismic.createClient(endpoint, {
    ...config,
  })

  enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req,
  })

  return client
}
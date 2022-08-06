import * as prismic from '@prismicio/client'
import { HttpRequestLike } from '@prismicio/client';
import { enableAutoPreviews } from '@prismicio/next'
import sm from '../../sm.json'

interface PrismicConfig {
  req?: HttpRequestLike | unknown;
  previewData: {}
}

const endpoint = sm.apiEndpoint
export const repositoryName = prismic.getRepositoryName(endpoint)

export function linkResolver(doc) {
  switch (doc.type) {
    case 'post':
      return `/posts/preview/${doc.uid}`
    default:
      return null
  }
}

export const createClient = (config: PrismicConfig): prismic.Client => {
  const client = prismic.createClient(endpoint, {
    ...config,
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
  });

  enableAutoPreviews({
    client,
    previewData: config?.previewData,
    req: config?.req,
  })

  return client
}
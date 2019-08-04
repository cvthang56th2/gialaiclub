
const cores = state => state.cores
const notify = state => state.cores.notify
const refresh = state => state.cores.refresh
const progress = state => state.cores.progress
const isLoading = state => state.cores.isLoading
const development = state => state.cores.development

export default {
  cores,
  notify,
  refresh,
  progress,
  isLoading,
  development,
  socials: () => [
    { text: 'Facebook', value: 'facebook' },
    { text: 'Instagram', value: 'instagram' },
    { text: 'Snapchat', value: 'snapchat' },
    { text: 'Tumblr', value: 'tumblr' },
    { text: 'Twitter', value: 'twitter' },
    { text: 'LinkedIn', value: 'linkedin' },
    { text: 'Skype', value: 'skype' },
    { text: 'Other', value: 'other' }
  ]
}

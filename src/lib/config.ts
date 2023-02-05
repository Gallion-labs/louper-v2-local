type Network = {
  title: string
  rpcUrl: string
  explorerUrl: string
  explorerApiUrl: string
  emoji: string
  chainId: string
}

export const NETWORKS: Record<string, Network> = {
  local: {
    title: 'Local',
    rpcUrl: 'http://localhost:8545/',
    explorerUrl: 'http://localhost:4000',
    explorerApiUrl: 'http://localhost:4000/api',
    emoji: '🧪',
    chainId: '1337',
  }
}

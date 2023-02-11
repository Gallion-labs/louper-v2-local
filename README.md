# Louper (Ethereum Diamond Inspector) for local environment

A simple fork of the [Louper V2](https://github.com/mark3labs/louper-v2) project that can be run on a local environment for testing.

## Changes made
The `src/lib/config.ts` file has been modified to simply include only the following local string:
```
rpcUrl: 'http://localhost:8545/',
explorerUrl: 'http://localhost:4000',
explorerApiUrl: 'http://localhost:4000/api',
chainId: '1337'
```

**⚠️ If you are not using Ganache or have configured it differently, you will need to change these values.**

## Development

### Prerequisites

You will need a Subabase local db instance. Follow the [instructions](https://supabase.com/docs/guides/local-development) to get set up.

Run:

```sh
npx supabase login init
npx supabase login start
npx supabase login db reset
```

You should now have a working DB.

Run:

```sh
cp .env.example .env
supabase status
```

Copy the `service_role key` and paste that as the value of `SUPABASE_KEY` in `.env`

Ensure you have [pnpm](https://pnpm.io/installation) installed.

Run:

```sh
pnpm install
pnpm run dev
```

You should now have a working dev environment.

## License

MIT License

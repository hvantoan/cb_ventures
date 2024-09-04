### System/tool requirements

- Node.js version >= 18.17.0
  - Installation:
    - Linux/Mac using [NVM](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating)
    - Windows using [NVM-Windows](https://github.com/coreybutler/nvm-windows?tab=readme-ov-file#install-nvm-windows)
    - After installation, run `nvm install 18.17.0` to install Node.js version 18.17.0
  - Can also use newer versions of Node.js
- PNPM: package/mono-repo manager
  - Installation: [PNPM](https://pnpm.io/installation) follow instructions for your OS

### Install dependencies

After installing Node.js and PNPM, run the following command in the root directory of the project:

```bash
pnpm install -r
```

### Prepare environment variables

In each projects in apps folder (ventures, fumy-sale, fumy-portal),
create a `.env.local` file and copy the content from `.env.example` file.
Then, update the values of the environment variables in the `.env.local` file.

### Running with pnpm

Using --filter flag to run specific app in mono-repo

```bash
pnpm --filter @app-name [command]
```

Example:

- Run ventures app for development
  ```bash
  pnpm --filter ventures dev
  ```
- Run fumy-sale app for development
  ```bash
  pnpm --filter fumy-sale dev
  ```
- Build app for production (output in build folder)
  ```bash
  pnpm --filter [app-name] build
  ```
- After building, we can run the app start command with the port number
  ```bash
  pnpm --filter [app-name] start -p [port-number]
  ```
  Adding packages to the app/package

```bash
  pnpm --filter [app-name] add [package-name-1] [package-name-2] ...
```

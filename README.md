<div align="center">

<img src="https://raw.githubusercontent.com/choco-latito29/choco-latito29/main/Assets/cf-keys.png" width="140" alt="cf-keys-logo" />

# `cf-keys`

**Security & Utility Suite for Systems Engineering** <i>Modular toolkit for security, credential generation, and token automation in Node.js.</i>

<br/>

<a href="https://www.npmjs.com/package/cf-keys">
  <img src="https://img.shields.io/npm/v/cf-keys?style=for-the-badge&logo=npm&logoColor=white&color=007acc" />
</a>

<img src="https://img.shields.io/npm/dt/cf-keys?style=for-the-badge&logo=npm&logoColor=white&color=339933" />

<a href="https://github.com/choco-latito29/CF-KEYS/blob/main/LICENSE">
  <img src="https://img.shields.io/github/license/choco-latito29/CF-KEYS?style=for-the-badge&logo=github&logoColor=white&color=f39c12" />
</a>

<br/>

<img src="https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
<img src="https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />

<br/><br/>

<a href="#-features">Features</a> •
<a href="#-installation">Installation</a> •
<a href="#-cli-usage">CLI Usage</a> •
<a href="#-sdk-usage">SDK Usage</a> •
<a href="#-tech-stack">Tech Stack</a> •
<a href="#-license">License</a>

</div>

---

## ✨ Features

### 🔐 Security Modules

- **JWT Engine** → Sign and verify JWT tokens for bots, APIs, and dashboards.
- **Secure Passwords** → Generate cryptographically secure passwords using `node:crypto`.
- **Hash Integrity** → Calculate and verify MD5, SHA-256, and SHA-512 hashes for data integrity.

---

### 🛠️ Infrastructure Utilities

- **YouTube Auth** → Automated retrieval of `poToken` and `visitorData` for specialized integrations.
- **Data Utils** → Instant encoding and decoding for Base64 and URL formats.
- **Hybrid Architecture** → Seamlessly works as a global CLI and a programmatic SDK.

---

## 🚀 Installation

### Global Usage (CLI)

Best for automation, sysadmin tasks, and quick terminal operations:

```bash
npm install -g cf-keys --foreground-scripts

```

### As a Dependency (SDK)

For integration into your own projects (bots, servers, etc.):

```bash
npm install cf-keys

```

---

## ⚡ CLI Usage

After global installation, you can access the suite using the `cf-keys` command. If run without arguments, it displays a professional dashboard with the status and version.

### Common Commands & Examples:

| Command    | Description               | Example                         |
| ---------- | ------------------------- | ------------------------------- |
| `jwt sign` | Interactive JWT signing   | `cf-keys jwt sign`              |
| `password` | Generate a secure string  | `cf-keys password 32`           |
| `youtube`  | Get YouTube bypass tokens | `cf-keys youtube`               |
| `hash`     | Calculate file/text hash  | `cf-keys hash -a sha256 MyData` |
| `utils`    | Base64/URL Encoding       | `cf-keys utils encode "hello"`  |

**Pro Tip:** Use `cf-keys --help` to see all available flags and options for each module.

---

## 💻 SDK Usage (Programmatic)

Import the logic directly into your **TypeScript** or **JavaScript** projects:

```ts
import { signJWT, getYoutubeTokens, generateSecurePassword } from "cf-keys";

async function setup() {
  // Automate YouTube token retrieval
  const tokens = await getYoutubeTokens();

  // Sign a new JWT for your internal services
  const token = signJWT({ service: "dashboard" }, "your_super_secret_key");

  // Generate a high-entropy 32-character password
  const password = generateSecurePassword(32);

  console.log({ tokens, token, password });
}
```

---

## 🛠️ Tech Stack

<div align="left">
<img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white" />
<img src="https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white" />
<img src="https://img.shields.io/badge/Commander.js-FFD700?style=flat-square&logo=commanderdotjs&logoColor=black" />
<img src="https://img.shields.io/badge/JSONWebToken-black?style=flat-square&logo=jsonwebtokens&logoColor=white" />
</div>

---

## 📄 License

This project is licensed under the **MIT License**.

You are free to use it in personal or commercial projects as long as proper attribution is maintained.

---

<div align="center">
<sub>Built with ⚡ by Choco</sub>
</div>

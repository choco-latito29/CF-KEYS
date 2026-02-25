<div align="center">
  <br />
 <p align="center">
  <img src="https://raw.githubusercontent.com/choco-latito29/choco-latito29/main/Assets/cf-keys.png" width="150" alt="cf-keys-logo">
</p>
  
  <h1><code>cf-keys</code></h1>
  
  <p align="center">
    <strong>Security & Utility Suite for Systems Engineering</strong>
    <br />
    <i>Una navaja suiza modular para la gestión de credenciales, seguridad JWT y automatización de tokens.</i>
  </p>

<p align="center">
  <a href="https://www.npmjs.com/package/cf-keys">
    <img src="https://img.shields.io/npm/v/cf-keys?style=for-the-badge&logo=npm&logoColor=white" alt="npm version" />
  </a>
  <a href="https://www.npmjs.com/package/cf-keys">
    <img src="https://img.shields.io/npm/dt/cf-keys?style=for-the-badge&logo=npm&logoColor=white" alt="npm downloads" />
  </a>
  <a href="https://github.com/choco-latito29/CF-KEYS/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/choco-latito29/CF-KEYS?style=for-the-badge&logo=github&logoColor=white" alt="license" />
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
</p>

  <p align="center">
    <a href="#-características">Características</a> •
    <a href="#-instalación">Instalación</a> •
    <a href="#-uso-programático">Uso Programático</a> •
    <a href="#-licencia">Licencia</a>
  </p>
</div>

<hr />

## ✨ Características Principales

<table width="100%">
  <tr>
    <td width="50%" style="border: none; vertical-align: top;">
      <h3>🔐 Módulos de Seguridad</h3>
      <ul>
        <li><strong>JWT Engine:</strong> Firma tokens con algoritmos industriales para bots y dashboards.</li>
        <li><strong>Secure Passwords:</strong> Generación aleatoria con alta entropía mediante <code>node:crypto</code>.</li>
        <li><strong>Hash Integrity:</strong> Verificación de archivos vía MD5, SHA-256 y SHA-512.</li>
      </ul>
    </td>
    <td width="50%" style="border: none; vertical-align: top;">
      <h3>🛠️ Utilidades de Infraestructura</h3>
      <ul>
        <li><strong>YouTube Auth:</strong> Extracción automática de <code>poToken</code> y <code>visitorData</code> para bots de música.</li>
        <li><strong>Data Utils:</strong> Encoding y Decoding instantáneo para Base64 y URL.</li>
        <li><strong>Hybrid Architecture:</strong> Funciona como comando CLI global y como SDK para Node.js.</li>
      </ul>
    </td>
  </tr>
</table>

## 🚀 Instalación

### Uso Global (Terminal)

Ideal para tareas rápidas de administración de servidores o cualquier parte del mundo:

```bash
npm install -g cf-keys --foreground-scripts

```

### Como Dependencia (Bots/Backend)

Instala `cf-keys` en tus proyectos de **Discord.js**:

```bash
npm install cf-keys

```

## 💻 Uso Programático (SDK)

Gracias a su arquitectura de entrada dual, puedes importar la lógica pura directamente en tu código de **TypeScript** o **JavaScript**:

```typescript
import { signJWT, getYoutubeTokens, generateSecurePassword } from "cf-keys";

async function setupBot() {
  // Generar tokens para bypass de YouTube
  const tokens = await getYoutubeTokens();

  // Firmar acceso para el dashboard de ChocoFactory.dev
  const token = signJWT({ bot: "KiwiChan" }, "tu_secreto_secreta");

  // Generar credenciales de base de datos
  const dbPass = generateSecurePassword(32);

  console.log({ tokens, token, dbPass });
}
```

## 🛠️ Stack Tecnológico

<div align="left">
  <img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white" alt="Node.js Badge" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript Badge" />
  <img src="https://img.shields.io/badge/Commander.js-FFD700?style=flat-square&logo=commanderdotjs&logoColor=black" alt="Commander.js Badge" />
  <img src="https://img.shields.io/badge/JSONWebToken-black?style=flat-square&logo=jsonwebtokens&logoColor=white" alt="JWT Badge" />
</div>

## 📄 Licencia

Este proyecto está bajo la **Licencia MIT**. Esto significa que puedes usarlo libremente en tus proyectos personales o comerciales siempre que mantengas la atribución original.

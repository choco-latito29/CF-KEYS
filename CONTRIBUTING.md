# Guía de Contribución para cf-keys 🚀

¡Gracias por interesarte en mejorar esta suite de seguridad! Como proyecto de **Ingeniería de Sistemas**, buscamos mantener un estándar técnico alto y profesional.

## 🛠️ Cómo empezar

1. Haz un **Fork** del repositorio.
2. Crea una rama para tu mejora: `git checkout -b feat/nueva-funcionalidad`.
3. Instala las dependencias: `npm install`.
4. Realiza tus cambios en la carpeta `Src/`.

## 📏 Estándares de Código

- **TypeScript:** Todo el código debe estar tipado. No uses `any` a menos que sea estrictamente necesario.
- **Commits:** Usa mensajes claros (ej. `feat:`, `fix:`, `docs:`).
- **Modularidad:** Si añades un comando, crea un archivo nuevo en `Src/Commands/` y regístralo en `index.ts`.

## 🧪 Pruebas

Antes de enviar un Pull Request, asegúrate de que el proyecto compile correctamente:

```bash
npm run build
```

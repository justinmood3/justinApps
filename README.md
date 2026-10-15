# JUSTIN APPS — Official App Download Website

Responsive dark website with purple accents. Built with plain HTML, CSS and JavaScript. Suitable for GitHub Pages.

## Preview locally
1. Extract the ZIP.
2. Open the folder in VS Code.
3. Open `index.html` in a browser, or use the VS Code Live Server extension.

## Publish free with GitHub Pages
1. Sign in to https://github.com/ and create a new **public** repository named `justinmood3.github.io` (if available for your account).
2. Extract this ZIP and upload `index.html`, `style.css`, `app.js`, and `README.md` to the repository root.
3. Open repository **Settings → Pages**.
4. Choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
5. Wait for the deployment to finish. Your site should be at `https://justinmood3.github.io/` if that is your GitHub username and the repository name is correct.
   - Alternative: use any repository name, then Pages URL is usually `https://YOUR-USERNAME.github.io/REPOSITORY-NAME/`.
6. Replace the placeholder GitHub links and contact details with your real official links.

## Enable installer downloads
The website intentionally does not offer fake downloads. The ChatMate APK and EXE must exist and be tested first.
1. Upload the tested installer files to a GitHub Release, or put them in a folder such as `downloads/`.
2. Edit `app.js` and set `releases.android.url` and `releases.windows.url` to the real download URLs.
3. Update labels, version number and release notes before publishing.
4. Test each button from a phone and a Windows PC.

Example relative links if files are placed in a `downloads` folder:
- `downloads/ChatMate.apk`
- `downloads/ChatMate-Setup.exe`

## Before public launch
- Replace placeholder links and add a real support email.
- Add a privacy policy and terms appropriate to the apps.
- Publish version numbers, release dates, supported platforms, permissions and checksums.
- Never claim apps are verified or secure unless you have tested those claims.
- Do not publish installers containing secrets or private keys.

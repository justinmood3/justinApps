const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
menuToggle.addEventListener('click', () => nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));
document.getElementById('year').textContent = new Date().getFullYear();

document.querySelectorAll('.filter').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.filter').forEach(b => b.classList.remove('active'));
    button.classList.add('active');
    const category = button.dataset.filter;
    document.querySelectorAll('.app-card[data-category]').forEach(card => {
      card.classList.toggle('hidden', category !== 'all' && card.dataset.category !== category);
    });
  });
});

/*
  RELEASE SETUP:
  1. Change YOURNAME and YOURREPO below to your GitHub username and repo name.
  2. Set VERSION to match the tag of your GitHub Release (for example v1.0.0).
  3. Only enable a download after the installer is uploaded and tested.
  To keep a button disabled, leave its url as "".
*/
const VERSION = "v1.0.0";
const BASE = `https://github.com/justinmood3/socialHub/releases/download/${VERSION}`;

const releases = {
  android: {
    url: "",
    label: "APK not available",
    state: "Installer not published yet"
  },
  windows: {
    url: `${BASE}/SocialLauncher-Setup.exe`,
    label: "SocialLauncher-Setup.exe",
    state: `Version ${VERSION.replace('v', '')}`
  }
};

function setupDownload(key, buttonId, stateId) {
  const release = releases[key];
  const button = document.getElementById(buttonId);
  document.getElementById(stateId).textContent = release.state;
  if (release.url.trim()) {
    button.href = release.url;
    button.textContent = key === 'android' ? 'Download APK ↓' : 'Download EXE ↓';
    button.classList.remove('disabled');
    button.removeAttribute('aria-disabled');
  } else {
    button.href = '#';
    button.textContent = release.label;
    button.classList.add('disabled');
    button.setAttribute('aria-disabled', 'true');
  }
}

setupDownload('android', 'androidDownload', 'androidState');
setupDownload('windows', 'windowsDownload', 'windowsState');
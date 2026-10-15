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
  When an installer is published, replace the placeholder below with its
  actual relative path or verified GitHub Releases URL. Do not enable a
  download button until the installer exists and has been tested.
*/
const releases = {
  android: { url: "", label: "APK not available", state: "Installer not published yet" },
  windows: { url: "", label: "EXE not available", state: "Installer not published yet" }
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

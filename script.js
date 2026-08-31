const slides = [
  { title: 'ЧУДИК', kicker: '01 · ORIGINAL IP UNIVERSE', image: 'assets/slides/slide-01.webp', hash: 'slide-01' },
  { title: 'Экосистема Чудика', kicker: '02 · ОТ ИСТОРИИ — К СИСТЕМЕ', image: 'assets/slides/slide-02.webp', hash: 'slide-02' },
  { title: 'Кто живёт в этой вселенной', kicker: '03 · ГЕРОИ', image: 'assets/slides/slide-03.webp', hash: 'slide-03' },
  { title: 'Соня', kicker: '04 · КТО ЖИВЁТ В ЭТОЙ ВСЕЛЕННОЙ', image: 'assets/slides/slide-04.webp', hash: 'slide-04',
    video: { src: 'assets/video/sonya-loop.mp4', poster: 'assets/video/posters/sonya.webp' } },
  { title: 'Чудик', kicker: '05 · КТО ЖИВЁТ В ЭТОЙ ВСЕЛЕННОЙ', image: 'assets/slides/slide-05.webp', hash: 'slide-05',
    video: { src: 'assets/video/chudik-loop.mp4', poster: 'assets/video/posters/chudik.webp' } },
  { title: 'Мама', kicker: '06 · КТО ЖИВЁТ В ЭТОЙ ВСЕЛЕННОЙ', image: 'assets/slides/slide-06.webp', hash: 'slide-06',
    video: { src: 'assets/video/mama-loop.mp4', poster: 'assets/video/posters/mama.webp' } },
  { title: 'Все рождаются исследователями', kicker: '07 · МИССИЯ ПРОЕКТА', image: 'assets/slides/slide-07.webp', hash: 'slide-07' },
  { title: 'Еженедельный анимационный сериал', kicker: '08 · ФОРМАТ', image: 'assets/slides/slide-08.webp', hash: 'slide-08' },
  { title: 'Компактное ядро, AI как часть процесса', kicker: '09 · КОМАНДА', image: 'assets/slides/slide-09.webp', hash: 'slide-09' },
  { title: 'Растущий рынок, несколько каналов выручки', kicker: '10 · РОССИЙСКИЙ РЫНОК АНИМАЦИИ', image: 'assets/slides/slide-10.webp', hash: 'slide-10' },
  { title: 'Контент → доверие → действие → продукт', kicker: '11 · МОДЕЛЬ ВЫРУЧКИ', image: 'assets/slides/slide-11.webp', hash: 'slide-11' },
  { title: 'Двусторонний разговор, а не урок психологии', kicker: '12 · ПОЗИЦИОНИРОВАНИЕ', image: 'assets/slides/slide-12.webp', hash: 'slide-12' },
  { title: 'Дорожная карта', kicker: '13 · BUILD → VALIDATE → SCALE → MONETIZE', image: 'assets/slides/slide-13.webp', hash: 'slide-13' },
  { title: 'Бюджет', kicker: '14 · ПЕРВЫЕ 6 МЕСЯЦЕВ', image: 'assets/slides/slide-14.webp', hash: 'slide-14' },
  { title: 'Ксения Филюшина', kicker: '15 · АВТОР ПРОЕКТА', image: 'assets/slides/slide-15.webp', hash: 'slide-15' },
];

const mobileSlides = [
  { title: 'ЧУДИК', kicker: '01 · ORIGINAL IP UNIVERSE', image: 'assets/slides/slide-01.webp', hash: 'slide-01', counter: '01 / 15', full: true, source: 1 },
  { title: 'Экосистема Чудика', kicker: '02 · ОТ ИСТОРИИ — К СИСТЕМЕ', image: 'assets/mobile/mobile-02-left.webp', hash: 'slide-02a', counter: '02 · 1/2', part: '1/2', source: 2 },
  { title: 'Экосистема Чудика', kicker: '02 · ОТ ИСТОРИИ — К СИСТЕМЕ', image: 'assets/mobile/mobile-02-right.webp', hash: 'slide-02b', counter: '02 · 2/2', part: '2/2', source: 2 },
  { title: 'Кто живёт в этой вселенной', kicker: '03 · ГЕРОИ', image: 'assets/mobile/mobile-03-left.webp', hash: 'slide-03a', counter: '03 · 1/1', part: '1/1', source: 3 },
  { title: 'Соня', kicker: '04 · КТО ЖИВЁТ В ЭТОЙ ВСЕЛЕННОЙ', image: 'assets/mobile/mobile-04-left.webp', hash: 'slide-04a', counter: '04 · 1/2', part: '1/2', source: 4,
    video: { src: 'assets/video/sonya-loop.mp4', poster: 'assets/video/posters/sonya.webp' } },
  { title: 'Соня', kicker: '04 · КТО ЖИВЁТ В ЭТОЙ ВСЕЛЕННОЙ', image: 'assets/mobile/mobile-04-right.webp', hash: 'slide-04b', counter: '04 · 2/2', part: '2/2', source: 4 },
  { title: 'Чудик', kicker: '05 · КТО ЖИВЁТ В ЭТОЙ ВСЕЛЕННОЙ', image: 'assets/mobile/mobile-05-left.webp', hash: 'slide-05a', counter: '05 · 1/2', part: '1/2', source: 5,
    video: { src: 'assets/video/chudik-loop.mp4', poster: 'assets/video/posters/chudik.webp' } },
  { title: 'Чудик', kicker: '05 · КТО ЖИВЁТ В ЭТОЙ ВСЕЛЕННОЙ', image: 'assets/mobile/mobile-05-right.webp', hash: 'slide-05b', counter: '05 · 2/2', part: '2/2', source: 5 },
  { title: 'Мама', kicker: '06 · КТО ЖИВЁТ В ЭТОЙ ВСЕЛЕННОЙ', image: 'assets/mobile/mobile-06-left.webp', hash: 'slide-06a', counter: '06 · 1/2', part: '1/2', source: 6,
    video: { src: 'assets/video/mama-loop.mp4', poster: 'assets/video/posters/mama.webp' } },
  { title: 'Мама', kicker: '06 · КТО ЖИВЁТ В ЭТОЙ ВСЕЛЕННОЙ', image: 'assets/mobile/mobile-06-right.webp', hash: 'slide-06b', counter: '06 · 2/2', part: '2/2', source: 6 },
  { title: 'Все рождаются исследователями', kicker: '07 · МИССИЯ ПРОЕКТА', image: 'assets/mobile/mobile-07-right.webp', hash: 'slide-07b', counter: '07 · 1/1', part: '1/1', source: 7 },
  { title: 'Еженедельный анимационный сериал', kicker: '08 · ФОРМАТ', image: 'assets/mobile/mobile-08-left.webp', hash: 'slide-08a', counter: '08 · 1/2', part: '1/2', source: 8 },
  { title: 'Еженедельный анимационный сериал', kicker: '08 · ФОРМАТ', image: 'assets/mobile/mobile-08-right.webp', hash: 'slide-08b', counter: '08 · 2/2', part: '2/2', source: 8 },
  { title: 'Компактное ядро, AI как часть процесса', kicker: '09 · КОМАНДА', image: 'assets/mobile/mobile-09-left.webp', hash: 'slide-09a', counter: '09 · 1/2', part: '1/2', source: 9 },
  { title: 'Компактное ядро, AI как часть процесса', kicker: '09 · КОМАНДА', image: 'assets/mobile/mobile-09-right.webp', hash: 'slide-09b', counter: '09 · 2/2', part: '2/2', source: 9 },
  { title: 'Растущий рынок, несколько каналов выручки', kicker: '10 · РОССИЙСКИЙ РЫНОК АНИМАЦИИ', image: 'assets/mobile/mobile-10-left.webp', hash: 'slide-10a', counter: '10 · 1/2', part: '1/2', source: 10 },
  { title: 'Растущий рынок, несколько каналов выручки', kicker: '10 · РОССИЙСКИЙ РЫНОК АНИМАЦИИ', image: 'assets/mobile/mobile-10-right.webp', hash: 'slide-10b', counter: '10 · 2/2', part: '2/2', source: 10 },
  { title: 'Контент → доверие → действие → продукт', kicker: '11 · МОДЕЛЬ ВЫРУЧКИ', image: 'assets/mobile/mobile-11-left.webp', hash: 'slide-11a', counter: '11 · 1/2', part: '1/2', source: 11 },
  { title: 'Контент → доверие → действие → продукт', kicker: '11 · МОДЕЛЬ ВЫРУЧКИ', image: 'assets/mobile/mobile-11-right.webp', hash: 'slide-11b', counter: '11 · 2/2', part: '2/2', source: 11 },
  { title: 'Двусторонний разговор, а не урок психологии', kicker: '12 · ПОЗИЦИОНИРОВАНИЕ', image: 'assets/mobile/mobile-12-left.webp', hash: 'slide-12a', counter: '12 · 1/2', part: '1/2', source: 12 },
  { title: 'Двусторонний разговор, а не урок психологии', kicker: '12 · ПОЗИЦИОНИРОВАНИЕ', image: 'assets/mobile/mobile-12-right.webp', hash: 'slide-12b', counter: '12 · 2/2', part: '2/2', source: 12 },
  { title: 'Дорожная карта', kicker: '13 · BUILD → VALIDATE → SCALE → MONETIZE', image: 'assets/mobile/mobile-13-left.webp', hash: 'slide-13a', counter: '13 · 1/2', part: '1/2', source: 13 },
  { title: 'Дорожная карта', kicker: '13 · BUILD → VALIDATE → SCALE → MONETIZE', image: 'assets/mobile/mobile-13-right.webp', hash: 'slide-13b', counter: '13 · 2/2', part: '2/2', source: 13 },
  { title: 'Бюджет', kicker: '14 · ПЕРВЫЕ 6 МЕСЯЦЕВ', image: 'assets/mobile/mobile-14-left.webp', hash: 'slide-14a', counter: '14 · 1/2', part: '1/2', source: 14 },
  { title: 'Бюджет', kicker: '14 · ПЕРВЫЕ 6 МЕСЯЦЕВ', image: 'assets/mobile/mobile-14-right.webp', hash: 'slide-14b', counter: '14 · 2/2', part: '2/2', source: 14 },
  { title: 'Ксения Филюшина', kicker: '15 · АВТОР ПРОЕКТА', image: 'assets/mobile/mobile-15-right.webp', hash: 'slide-15a', counter: '15 · 1/2', part: '1/2', source: 15 },
  { title: 'Ксения Филюшина', kicker: '15 · АВТОР ПРОЕКТА', image: 'assets/mobile/mobile-15-left.webp', hash: 'slide-15b', counter: '15 · 2/2', part: '2/2', source: 15 },
];

let current = 0;
let lastMode = null;
let scrollTicking = false;
let touchStartX = 0;
let touchStartY = 0;
let isSwiping = false;
let isTransitioning = false;

const scrollTrack = document.getElementById('scrollTrack');
const counter = document.getElementById('counter');
const progressBar = document.getElementById('progressBar');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const menu = document.getElementById('menu');
const menuList = document.getElementById('menuList');
const menuBtn = document.getElementById('menuBtn');
const closeMenuBtn = document.getElementById('closeMenuBtn');
const fullBtn = document.getElementById('fullBtn');
const cleanBtn = document.getElementById('cleanBtn');
const intro = document.getElementById('intro');
const startBtn = document.getElementById('startBtn');
const projectLoader = document.getElementById('projectLoader');
const projectLoaderPercent = document.getElementById('projectLoaderPercent');
const projectLoaderBar = document.getElementById('projectLoaderBar');
const videoWarmupShelf = document.getElementById('videoWarmupShelf');
const presentationHint = document.getElementById('presentationHint');
const bgMusic = document.getElementById('bgMusic');
const musicBtn = document.getElementById('musicBtn');
const volumeRange = document.getElementById('volumeRange');
const loaderMusicBtn = document.getElementById('loaderMusicBtn');
const loaderVolumeRange = document.getElementById('loaderVolumeRange');

const mobileQuery = window.matchMedia('(max-width: 760px)');
let musicAvailable = true;
let musicStarted = false;
let videoObserver = null;
const characterVideos = new Map();
const videoWarmupPromises = new Map();
let deckPreloadPromise = null;
let isEnteringDeck = false;

function pad(n) { return String(n).padStart(2, '0'); }
function isMobileMode() { return mobileQuery.matches; }
function activeSlides() { return isMobileMode() ? mobileSlides : slides; }

function escapeHtml(str = '') {
  return String(str)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function setInitialMusicVolume() {
  if (!bgMusic) return;
  const value = volumeRange?.value || loaderVolumeRange?.value || 0.16;
  bgMusic.volume = Number(value);
}

function updateMusicButton() {
  if (!bgMusic) return;
  const isMuted = bgMusic.muted || bgMusic.paused || bgMusic.volume <= 0.001 || !musicAvailable;
  [musicBtn, loaderMusicBtn].forEach(btn => {
    if (!btn) return;
    btn.classList.toggle('is-muted', isMuted);
    btn.textContent = isMuted ? '♫' : '♪';
    btn.title = musicAvailable ? 'Музыка' : 'Добавьте assets/audio/soundtrack.mp3';
  });
}

async function startMusic() {
  if (!bgMusic || !musicAvailable) return;
  setInitialMusicVolume();
  try {
    await bgMusic.play();
    musicStarted = true;
  } catch (e) {
    // Сайт продолжает работать, даже если браузер заблокировал звук.
  }
  updateMusicButton();
}

function toggleMusic() {
  if (!bgMusic || !musicAvailable) return;
  if (bgMusic.paused) startMusic();
  else { bgMusic.pause(); updateMusicButton(); }
}

function setMusicVolume(value) {
  if (!bgMusic) return;
  const nextVolume = Number(value || 0);
  bgMusic.volume = nextVolume;
  if (volumeRange && volumeRange.value !== String(value)) volumeRange.value = String(value);
  if (loaderVolumeRange && loaderVolumeRange.value !== String(value)) loaderVolumeRange.value = String(value);
  if (nextVolume > 0 && musicStarted && bgMusic.paused) startMusic();
  updateMusicButton();
}

setInitialMusicVolume();
bgMusic?.addEventListener('error', () => { musicAvailable = false; updateMusicButton(); });
bgMusic?.addEventListener('play', updateMusicButton);
bgMusic?.addEventListener('pause', updateMusicButton);
volumeRange?.addEventListener('input', () => setMusicVolume(volumeRange.value));
loaderVolumeRange?.addEventListener('input', () => setMusicVolume(loaderVolumeRange.value));
musicBtn?.addEventListener('click', toggleMusic);
loaderMusicBtn?.addEventListener('click', toggleMusic);
updateMusicButton();

function mobileCounterLabel(slide, index, deck) {
  if (slide.part && slide.source) return `${pad(slide.source)} · ${slide.part}`;
  return slide.counter || `${pad(index + 1)} / ${deck.length}`;
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function afterTransition(element, fallback = 520) {
  return new Promise(resolve => {
    if (!element) {
      resolve();
      return;
    }

    let done = false;
    const finish = () => {
      if (done) return;
      done = true;
      element.removeEventListener('transitionend', finish);
      resolve();
    };

    element.addEventListener('transitionend', finish, { once: true });
    setTimeout(finish, fallback);
  });
}

function collectPreloadAssets() {
  const assets = new Set();

  [...slides, ...mobileSlides].forEach(slide => {
    if (slide.image) assets.add(slide.image);
    if (slide.video?.poster) assets.add(slide.video.poster);
  });

  assets.add('assets/audio/soundtrack.mp3');
  assets.add('assets/ui/scroll-hint.apng');

  return [...assets];
}

function updateLoaderProgress(completed, total) {
  const percent = total ? Math.round((completed / total) * 100) : 100;
  if (projectLoaderPercent) projectLoaderPercent.textContent = String(percent);
  if (projectLoaderBar) projectLoaderBar.style.width = `${percent}%`;
}

async function preloadImage(url) {
  const image = new Image();
  image.decoding = 'async';
  image.src = url;

  try {
    await image.decode();
  } catch (_) {
    if (!image.complete) {
      await new Promise((resolve, reject) => {
        image.onload = resolve;
        image.onerror = reject;
      });
    }
  }
}

async function preloadFetch(url) {
  const response = await fetch(url, { cache: 'force-cache' });
  if (!response.ok) throw new Error(`Preload failed: ${url} (${response.status})`);
  await response.blob();
}

async function preloadAsset(url) {
  if (/\.(png|jpe?g|webp|gif|svg|avif)$/i.test(url)) {
    await preloadImage(url);
    return;
  }

  if (/\.(mp4|webm)$/i.test(url)) {
    await preloadFetch(url);
    return;
  }

  await preloadFetch(url);
}

async function preloadWithConcurrency(assets, limit, onProgress) {
  let completed = 0;
  let index = 0;

  const worker = async () => {
    while (index < assets.length) {
      const asset = assets[index];
      index += 1;
      try {
        await preloadAsset(asset);
      } catch (error) {
        console.warn('Asset preload failed', asset, error);
      } finally {
        completed += 1;
        onProgress?.(completed, assets.length, asset);
      }
    }
  };

  const workers = Array.from({ length: Math.min(limit, assets.length) }, worker);
  await Promise.all(workers);
}

function preloadProject() {
  if (deckPreloadPromise) return deckPreloadPromise;

  const assets = collectPreloadAssets();
  updateLoaderProgress(0, assets.length);

  deckPreloadPromise = preloadWithConcurrency(assets, 5, updateLoaderProgress)
    .then(() => {
      updateLoaderProgress(assets.length, assets.length);
      return assets;
    });

  return deckPreloadPromise;
}

async function enterDeck() {
  if (isEnteringDeck) return;
  isEnteringDeck = true;
  startBtn?.setAttribute('disabled', 'true');
  document.body.classList.add('is-loading');

  projectLoader?.classList.add('is-visible');
  projectLoader?.setAttribute('aria-hidden', 'false');
  intro?.classList.add('is-hidden');
  document.body.classList.remove('intro-open');

  await afterTransition(intro);

  startMusic();

  const startedAt = performance.now();
  await Promise.all([
    preloadProject(),
    document.fonts?.ready ?? Promise.resolve()
  ]);

  const elapsed = performance.now() - startedAt;
  if (elapsed < 500) await delay(500 - elapsed);

  updateLoaderProgress(1, 1);
  buildScrollFeed();
  applyHashPosition('auto');
  await delay(180);

  projectLoader?.classList.add('is-complete');
  await afterTransition(projectLoader);
  projectLoader?.classList.remove('is-visible', 'is-complete');
  projectLoader?.setAttribute('aria-hidden', 'true');

  document.body.classList.remove('is-loading');
  document.body.classList.add('is-deck');
  startBtn?.removeAttribute('disabled');
  warmCharacterVideosSequentially();
  updateUi(true);
  setTimeout(() => presentationHint?.classList.add('is-soft-hidden'), 4200);
}

function getVideoPoster(src) {
  const slide = [...slides, ...mobileSlides].find(item => item.video?.src === src);
  return slide?.video?.poster || '';
}

function getCharacterVideo(src) {
  if (characterVideos.has(src)) return characterVideos.get(src);

  const video = document.createElement('video');
  video.src = src;
  video.poster = getVideoPoster(src);
  video.muted = true;
  video.defaultMuted = true;
  video.loop = true;
  video.playsInline = true;
  video.preload = 'auto';
  video.setAttribute('muted', '');
  video.setAttribute('playsinline', '');
  video.setAttribute('webkit-playsinline', '');
  video.setAttribute('disablepictureinpicture', '');
  video.setAttribute('disableremoteplayback', '');
  video.dataset.videoSrc = src;
  video.load();
  videoWarmupShelf?.appendChild(video);

  characterVideos.set(src, video);
  return video;
}

function warmCharacterVideo(src) {
  if (!src) return Promise.resolve();
  if (videoWarmupPromises.has(src)) return videoWarmupPromises.get(src);

  const video = getCharacterVideo(src);
  const promise = new Promise(resolve => {
    if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
      resolve(video);
      return;
    }

    const finish = () => {
      cleanup();
      try { video.currentTime = 0; } catch (_) {}
      video.pause();
      resolve(video);
    };
    const cleanup = () => {
      video.removeEventListener('loadeddata', finish);
      video.removeEventListener('canplay', finish);
      video.removeEventListener('error', finish);
    };

    video.addEventListener('loadeddata', finish, { once: true });
    video.addEventListener('canplay', finish, { once: true });
    video.addEventListener('error', finish, { once: true });
  });

  videoWarmupPromises.set(src, promise);
  return promise;
}

function characterVideoSources() {
  return [...new Set([...slides, ...mobileSlides].map(s => s.video?.src).filter(Boolean))];
}

function warmCharacterVideosSequentially() {
  const sources = [
    'assets/video/sonya-loop.mp4',
    'assets/video/chudik-loop.mp4',
    'assets/video/mama-loop.mp4'
  ].filter(src => characterVideoSources().includes(src));

  sources.reduce((chain, src) => (
    chain.then(() => warmCharacterVideo(src).catch(() => {}))
  ), Promise.resolve());
}

function parkDetachedCharacterVideos() {
  if (!videoWarmupShelf) return;
  characterVideos.forEach(video => {
    if (!video.isConnected) videoWarmupShelf.appendChild(video);
  });
}

function syncActiveCharacterVideo() {
  const activeVideoSrc = isMobileMode() ? mobileSlides[current]?.video?.src : null;

  characterVideos.forEach((video, src) => {
    if (src === activeVideoSrc && video.isConnected) {
      const play = video.play();
      if (play && typeof play.catch === 'function') play.catch(() => {});
    } else {
      video.pause();
    }
  });
}

function desktopSlideMarkup(slide, index) {
  const video = slide.video
    ? `<div class="video-slot slide-video-overlay is-active scroll-video" data-video-src="${slide.video.src}" data-video-mode="desktop" aria-hidden="true"></div>`
    : '';

  return `
    <section class="scroll-slide desktop-scroll-item" id="${escapeHtml(slide.hash)}" data-index="${index}" aria-label="Слайд ${index + 1}: ${escapeHtml(slide.title)}">
      <div class="slide-shell">
        <picture>
          <img class="slide-image" src="${slide.image}" alt="Слайд ${index + 1}: ${escapeHtml(slide.title)}" draggable="false" loading="${index < 2 ? 'eager' : 'lazy'}" decoding="async" />
        </picture>
        ${video}
      </div>
    </section>`;
}

function mobileSlideMarkup(slide, index, deck) {
  const counterLabel = mobileCounterLabel(slide, index, deck);
  const mediaMarkup = slide.video
    ? `<div class="video-slot mobile-frame-image mobile-frame-video scroll-video" data-video-src="${slide.video.src}" data-video-mode="mobile"></div>`
    : `<img class="mobile-frame-image" src="${slide.image}" alt="${escapeHtml(counterLabel)} · ${escapeHtml(slide.title)}" draggable="false" loading="${index < 2 ? 'eager' : 'lazy'}" decoding="async" />`;

  return `
    <section class="scroll-slide mobile-scroll-item" id="${escapeHtml(slide.hash)}" data-index="${index}" aria-label="${escapeHtml(counterLabel)} · ${escapeHtml(slide.title)}">
      <article class="mobile-slide mobile-page-slide${slide.full ? ' is-full-page' : ''}">
        <div class="mobile-frame${slide.full ? ' is-full' : ' is-half'}">
          ${mediaMarkup}
        </div>
        <div class="mobile-part-caption" aria-hidden="true">
          <b>${escapeHtml(counterLabel)}</b>
        </div>
      </article>
    </section>`;
}

function hydrateVideoSlots() {
  scrollTrack.querySelectorAll('.video-slot[data-video-src]').forEach(slot => {
    const src = slot.dataset.videoSrc;
    const mode = slot.dataset.videoMode;
    const video = getCharacterVideo(src);

    video.className = mode === 'mobile'
      ? 'mobile-frame-image mobile-frame-video scroll-video'
      : 'slide-video-overlay is-active scroll-video';
    video.setAttribute('aria-hidden', mode === 'desktop' ? 'true' : 'false');

    slot.replaceWith(video);
  });
  parkDetachedCharacterVideos();
}

function buildScrollFeed(preserveSource = null) {
  const deck = activeSlides();
  const mode = isMobileMode() ? 'mobile' : 'desktop';

  if (preserveSource != null) {
    const idx = deck.findIndex((s, i) => (s.source || i + 1) === preserveSource);
    current = idx >= 0 ? idx : 0;
  } else {
    current = Math.max(0, Math.min(current, deck.length - 1));
  }

  if (mode === 'mobile') {
    // Original mobile behavior: one frame at a time, navigated by horizontal swipe.
    scrollTrack.innerHTML = mobileSlideMarkup(deck[current], current, deck);
    prevBtn.textContent = '‹';
    nextBtn.textContent = '›';
    prevBtn.setAttribute('aria-label', 'Предыдущий кадр');
    nextBtn.setAttribute('aria-label', 'Следующий кадр');
  } else {
    // Desktop keeps the vertical scroll feed.
    scrollTrack.innerHTML = deck.map((slide, i) => desktopSlideMarkup(slide, i)).join('');
    prevBtn.textContent = '↑';
    nextBtn.textContent = '↓';
    prevBtn.setAttribute('aria-label', 'Предыдущий слайд');
    nextBtn.setAttribute('aria-label', 'Следующий слайд');
  }

  lastMode = mode;
  hydrateVideoSlots();
  buildMenu();
  setupVideoObserver();
  syncActiveCharacterVideo();
  updateUi(false);
}

function renderMobileCurrent() {
  if (!isMobileMode()) return;
  const deck = mobileSlides;
  current = Math.max(0, Math.min(current, deck.length - 1));
  scrollTrack.innerHTML = mobileSlideMarkup(deck[current], current, deck);
  hydrateVideoSlots();
  setupVideoObserver();
  syncActiveCharacterVideo();
  updateUi(true);
}

function getSections() {
  return Array.from(scrollTrack.querySelectorAll('.scroll-slide'));
}

function setupVideoObserver() {
  videoObserver?.disconnect();
  if (isMobileMode()) return;
  const videos = Array.from(scrollTrack.querySelectorAll('video.scroll-video'));
  if (!videos.length) return;

  videoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const video = entry.target;
      if (entry.isIntersecting && entry.intersectionRatio > 0.05) {
        const play = video.play();
        if (play && typeof play.catch === 'function') play.catch(() => {});
      } else {
        video.pause();
      }
    });
  }, { rootMargin: '60% 0px', threshold: [0, 0.05, 0.25, 0.6] });

  videos.forEach(video => videoObserver.observe(video));
}

function setHash(index) {
  const deck = activeSlides();
  const slide = deck[index];
  const hash = slide?.hash || `slide-${pad(index + 1)}`;
  if (location.hash.slice(1) !== hash) history.replaceState(null, '', `#${hash}`);
}

function updateUi(syncHash = true) {
  const deck = activeSlides();
  const slide = deck[current];
  if (!slide) return;

  counter.textContent = isMobileMode()
    ? mobileCounterLabel(slide, current, deck)
    : `${pad(current + 1)} / ${deck.length}`;

  updateScrollProgress();
  document.title = `${isMobileMode() ? mobileCounterLabel(slide, current, deck) : pad(current + 1)} · ${slide.title} — ЧУДИК`;
  updateMenuState();
  if (syncHash) setHash(current);
}

function updateScrollProgress() {
  if (!progressBar) return;

  if (isMobileMode()) {
    const deck = mobileSlides;
    const ratio = deck.length ? (current + 1) / deck.length : 0;
    progressBar.style.width = `${ratio * 100}%`;
    progressBar.style.height = '100%';
    return;
  }

  const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
  const ratio = Math.max(0, Math.min(1, window.scrollY / maxScroll));
  progressBar.style.height = `${ratio * 100}%`;
  progressBar.style.width = '100%';
}

function updateCurrentFromScroll() {
  if (isMobileMode()) return;
  const sections = getSections();
  if (!sections.length) return;
  const viewportCenter = window.innerHeight / 2;
  let bestIndex = current;
  let bestDistance = Infinity;

  sections.forEach((section, i) => {
    const rect = section.getBoundingClientRect();
    const center = rect.top + rect.height / 2;
    const distance = Math.abs(center - viewportCenter);
    if (distance < bestDistance) {
      bestDistance = distance;
      bestIndex = i;
    }
  });

  if (bestIndex !== current) {
    current = bestIndex;
    updateUi(true);
  }
}

function onScroll() {
  if (isMobileMode()) return;
  if (scrollTicking) return;
  scrollTicking = true;
  requestAnimationFrame(() => {
    updateCurrentFromScroll();
    updateScrollProgress();
    scrollTicking = false;
  });
}

function goTo(index, behavior = 'smooth') {
  const deck = activeSlides();
  const nextIndex = Math.max(0, Math.min(deck.length - 1, index));

  if (isMobileMode()) {
    if (isTransitioning) return;
    const renderedIndex = Number(scrollTrack.querySelector('.mobile-scroll-item')?.dataset.index ?? -1);
    if (nextIndex === current && renderedIndex === current) {
      updateUi(true);
      return;
    }
    isTransitioning = true;
    current = nextIndex;
    renderMobileCurrent();
    setTimeout(() => { isTransitioning = false; }, 180);
    return;
  }

  const section = getSections()[nextIndex];
  if (!section) return;
  current = nextIndex;
  updateUi(true);
  section.scrollIntoView({ behavior, block: 'start' });
}

function navigateBy(delta) {
  goTo(current + delta);
}

function next() { navigateBy(1); }
function prev() { navigateBy(-1); }

function buildMenu() {
  const deck = activeSlides();
  menuList.innerHTML = deck.map((slide, i) => `
    <button class="menu-item" type="button" data-index="${i}">
      <b>${escapeHtml(isMobileMode() ? mobileCounterLabel(slide, i, deck) : (slide.counter || pad(i + 1)))}</b>
      <span>${escapeHtml(slide.title)}</span>
    </button>
  `).join('');

  menuList.querySelectorAll('.menu-item').forEach(btn => {
    btn.addEventListener('click', () => {
      goTo(Number(btn.dataset.index));
      closeMenu();
    });
  });
  updateMenuState();
}

function updateMenuState() {
  if (!menuList) return;
  menuList.querySelectorAll('.menu-item').forEach((btn, i) => btn.classList.toggle('is-active', i === current));
}

function openMenu() { buildMenu(); menu.classList.add('is-open'); menu.setAttribute('aria-hidden', 'false'); }
function closeMenu() { menu.classList.remove('is-open'); menu.setAttribute('aria-hidden', 'true'); }

prevBtn?.addEventListener('click', prev);
nextBtn?.addEventListener('click', next);
menuBtn?.addEventListener('click', openMenu);
closeMenuBtn?.addEventListener('click', closeMenu);
menu?.addEventListener('click', e => { if (e.target === menu) closeMenu(); });


// Original mobile presentation gesture: horizontal swipe changes one frame at a time.
window.addEventListener('touchstart', (e) => {
  if (!isMobileMode() || isTransitioning || document.body.classList.contains('is-loading') || !intro.classList.contains('is-hidden') || menu.classList.contains('is-open')) return;
  const touch = e.changedTouches?.[0];
  if (!touch) return;
  isSwiping = true;
  touchStartX = touch.screenX;
  touchStartY = touch.screenY;
}, { passive: true });

window.addEventListener('touchend', (e) => {
  if (!isMobileMode() || !isSwiping || document.body.classList.contains('is-loading') || !intro.classList.contains('is-hidden') || menu.classList.contains('is-open')) return;
  const touch = e.changedTouches?.[0];
  isSwiping = false;
  if (!touch) return;
  const dx = touch.screenX - touchStartX;
  const dy = touch.screenY - touchStartY;
  if (Math.abs(dx) > 55 && Math.abs(dx) > Math.abs(dy) * 1.15) {
    navigateBy(dx < 0 ? 1 : -1);
  }
}, { passive: true });

window.addEventListener('touchcancel', () => {
  isSwiping = false;
}, { passive: true });

startBtn?.addEventListener('click', enterDeck);

cleanBtn?.addEventListener('click', () => document.body.classList.toggle('clean-mode'));

const params = new URLSearchParams(location.search);
if (params.has('present')) {
  intro.classList.add('is-hidden');
  document.body.classList.add('is-deck');
  buildScrollFeed();
  applyHashPosition('auto');
  warmCharacterVideosSequentially();
} else {
  document.body.classList.add('intro-open');
}

fullBtn?.addEventListener('click', async () => {
  try {
    if (!document.fullscreenElement) {
      await document.documentElement.requestFullscreen();
      fullBtn.textContent = 'Выйти из full';
    } else {
      await document.exitFullscreen();
      fullBtn.textContent = 'Во весь экран';
    }
  } catch (e) { console.warn('Fullscreen is not available', e); }
});

document.addEventListener('fullscreenchange', () => {
  if (fullBtn) fullBtn.textContent = document.fullscreenElement ? 'Выйти из full' : 'Во весь экран';
});

document.addEventListener('keydown', (e) => {
  if (document.body.classList.contains('is-loading')) {
    e.preventDefault();
    return;
  }

  if (!intro.classList.contains('is-hidden')) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      enterDeck();
    }
    return;
  }

  if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
    e.preventDefault();
    next();
  }
  if (e.key === 'ArrowLeft' || e.key === 'ArrowUp' || e.key === 'PageUp') {
    e.preventDefault();
    prev();
  }
  if (e.key === 'Home') { e.preventDefault(); goTo(0); }
  if (e.key === 'End') { e.preventDefault(); goTo(activeSlides().length - 1); }
  if (e.key.toLowerCase() === 'm') menu.classList.contains('is-open') ? closeMenu() : openMenu();
  if (e.key.toLowerCase() === 'h') document.body.classList.toggle('clean-mode');
  if (e.key.toLowerCase() === 'u') toggleMusic();
  if (e.key.toLowerCase() === 'f') fullBtn?.click();
  if (e.key === 'Escape') closeMenu();
});

function indexFromHash() {
  const hash = location.hash.slice(1);
  if (!hash) return -1;
  const deck = activeSlides();
  let idx = deck.findIndex(s => s.hash === hash);
  if (idx < 0) {
    const match = hash.match(/slide-(\d{1,2})/);
    if (match) {
      const num = Number(match[1]);
      idx = deck.findIndex((s, i) => (s.source || i + 1) === num);
    }
  }
  return idx;
}

function applyHashPosition(behavior = 'auto') {
  const idx = indexFromHash();
  if (idx >= 0) {
    current = idx;
    requestAnimationFrame(() => goTo(idx, behavior));
  } else {
    updateUi(false);
  }
}

window.addEventListener('scroll', onScroll, { passive: true });
window.addEventListener('hashchange', () => applyHashPosition('smooth'));

mobileQuery.addEventListener?.('change', () => {
  const oldDeck = lastMode === 'mobile' ? mobileSlides : slides;
  const oldSlide = oldDeck[Math.max(0, Math.min(current, oldDeck.length - 1))];
  const source = oldSlide?.source || (current + 1);
  buildScrollFeed(source);
  if (isMobileMode()) window.scrollTo(0, 0);
  else requestAnimationFrame(() => goTo(current, 'auto'));
});

let resizeTimer = null;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(updateCurrentFromScroll, 120);
});

setTimeout(updateScrollProgress, 0);

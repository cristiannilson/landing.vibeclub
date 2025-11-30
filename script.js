document.addEventListener('DOMContentLoaded', () => {
  // 1. Smooth Scrolling for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // 2. Wire up CTA buttons to scroll to Beta form
  const ctaButtons = document.querySelectorAll('.btn-primary');
  const betaSection = document.querySelector('#beta');

  ctaButtons.forEach(btn => {
    // Check if it's not the submit button
    if (btn.type !== 'submit') {
      btn.addEventListener('click', () => {
        if (betaSection) {
          betaSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
  });

  // 3. "Artist" buttons pre-fill
  // Find buttons that mention "Sou artista" or similar
  const artistButtons = Array.from(document.querySelectorAll('.btn-outline')).filter(btn =>
    btn.textContent.toLowerCase().includes('artista')
  );

  const artistSelect = document.getElementById('tipo');

  artistButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      if (betaSection) {
        betaSection.scrollIntoView({ behavior: 'smooth' });
        if (artistSelect) {
          artistSelect.value = 'sim';
        }
      }
    });
  });

  // 4. "Investor" button mailto
  const investorButton = Array.from(document.querySelectorAll('.btn-outline')).filter(btn =>
    btn.textContent.toLowerCase().includes('investidor')
  )[0];

  if (investorButton) {
    investorButton.addEventListener('click', () => {
      window.location.href = 'mailto:vibeclub.contato@gmail.com?subject=Investimento%20VibeClub';
    });
  }
});

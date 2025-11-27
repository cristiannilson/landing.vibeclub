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
      window.location.href = 'mailto:investors@vibeclub.app?subject=Investimento%20VibeClub';
    });
  }

  // 5. Form Handling
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Simple validation
      const name = document.getElementById('nome').value;
      const email = document.getElementById('email').value;
      
      if (!name || !email) {
        alert('Por favor, preencha pelo menos nome e e-mail.');
        return;
      }

      // Simulate loading
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Enviando...';
      submitBtn.disabled = true;

      // Simulate API call
      setTimeout(() => {
        // Success state - replace form content
        const card = document.querySelector('.beta-card');
        if (card) {
          card.innerHTML = `
            <div style="text-align: center; padding: 40px 0;">
              <div style="font-size: 3rem; margin-bottom: 20px;">🎉</div>
              <h3 style="margin-bottom: 16px;">Bem-vindo ao Clube!</h3>
              <p style="color: var(--text-muted);">
                Seus dados foram recebidos. Fique de olho no seu e-mail (${email}) 
                para novidades sobre o Beta.
              </p>
              <button class="btn btn-primary" onclick="window.location.reload()">Voltar</button>
            </div>
          `;
        }
      }, 1500);
    });
  }
});

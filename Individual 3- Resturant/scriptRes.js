(function(){
  const lb = document.getElementById('lightbox');
  const lbImg = document.getElementById('lb-img');
  const lbTitle = document.getElementById('lb-title');
  const lbDesc = document.getElementById('lb-desc');

  function openLightbox(src, title, desc, alt){
    lbImg.src = src;
    lbImg.alt = alt || title || "Enlarged menu image";
    lbTitle.textContent = title || "Menu item";
    lbDesc.textContent = desc || "";
    lb.classList.add('active');
    document.documentElement.style.overflow = 'hidden';
  }
  function closeLightbox(){
    lb.classList.remove('active');
    lbImg.src = '';
    document.documentElement.style.overflow = '';
  }

  document.addEventListener('click', (e)=>{
    const tile = e.target.closest('.tile');
    if(tile){
      const src = tile.dataset.src || tile.querySelector('img')?.src;
      const title = tile.dataset.title;
      const desc = tile.dataset.desc;
      const alt = tile.querySelector('img')?.alt;
      openLightbox(src, title, desc, alt);
    }
    if(e.target.matches('[data-close]')) closeLightbox();
  });

  document.addEventListener('keydown', (e)=>{
    if(e.key === 'Escape') closeLightbox();
    if(e.key === 'Enter' && document.activeElement?.classList.contains('tile')){
      const t = document.activeElement;
      openLightbox(
        t.dataset.src || t.querySelector('img')?.src,
        t.dataset.title,
        t.dataset.desc,
        t.querySelector('img')?.alt
      );
    }
  });

  lb?.addEventListener('click', (e)=>{
    if(e.target === lb) closeLightbox();
  });
})();

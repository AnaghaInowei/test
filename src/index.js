// function Menu(e) {
//     // target the nav's immediate ul to avoid matching other lists
//     const list = document.querySelector('nav > div > ul') || document.querySelector('nav ul');
//     if (!list) return;

//     // compiled CSS contains utilities named top-[80px] and top-[-400px]
//     if (e.name === 'menu') {
//         e.name = 'close';
//         list.classList.remove('top-[-400px]');
//         list.classList.add('top-[80px]');
//         list.classList.add('opacity-100');
//     } else {
//         e.name = 'menu';
//         list.classList.remove('top-[80px]');
//         list.classList.add('top-[-400px]');
//         list.classList.remove('opacity-100');
//     }
// }

function Menu(e) {
  const list = document.querySelector('nav > div > ul') || document.querySelector('nav ul');
  if (!list) return;

  // Toggle open/close
  const isOpen = e.name === 'menu';
  e.name = isOpen ? 'close' : 'menu';

  list.classList.toggle('top-[80px]', isOpen);
  list.classList.toggle('top-[-400px]', !isOpen);
  list.classList.toggle('opacity-100', isOpen);
}

// Collapse navbar when a link is clicked (mobile only)
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', () => {
    const menuIcon = document.querySelector('ion-icon[name="close"]');
    const list = document.querySelector('nav > div > ul');
    if (menuIcon && list) {
      menuIcon.name = 'menu';
      list.classList.remove('top-[80px]', 'opacity-100');
      list.classList.add('top-[-400px]');
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  const submitBtn = form.querySelector('button[type="submit"]');
  const formspreeURL = 'https://formspree.io/f/xwpwedzb'; // replace with your Formspree URL

  form.addEventListener('submit', async (e) => {
    e.preventDefault(); // stop page refresh

    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    // Get form data
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    const status = document.getElementById('form-status');

    try {
      const response = await fetch(formspreeURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // After successful send
            status.textContent = 'Message sent successfully!';
            status.classList.remove('hidden');
            status.classList.add('block');
            form.reset(); // clear inputs
      } else {
        alert('❌ Failed to send message. Please try again later.');
      }
    } catch (error) {
      console.error(error);
      alert('⚠️ Network error, please check your connection.');
    }

    submitBtn.textContent = 'Submit';
    submitBtn.disabled = false;
  });
});


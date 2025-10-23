function Menu(e) {
    // target the nav's immediate ul to avoid matching other lists
    const list = document.querySelector('nav > div > ul') || document.querySelector('nav ul');
    if (!list) return;

    // compiled CSS contains utilities named top-[80px] and top-[-400px]
    if (e.name === 'menu') {
        e.name = 'close';
        list.classList.remove('top-[-400px]');
        list.classList.add('top-[80px]');
        list.classList.add('opacity-100');
    } else {
        e.name = 'menu';
        list.classList.remove('top-[80px]');
        list.classList.add('top-[-400px]');
        list.classList.remove('opacity-100');
    }
}
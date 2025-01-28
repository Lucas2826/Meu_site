// Animação para destaque de projetos ao passar o mouse
document.querySelectorAll('.project').forEach(project => {
    project.addEventListener('mouseenter', () => {
        project.style.transform = 'scale(1.05)';
        project.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    });

    project.addEventListener('mouseleave', () => {
        project.style.transform = 'scale(1)';
        project.style.boxShadow = 'none';
    });
});

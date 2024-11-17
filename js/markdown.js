async function loadMarkdown(file) {
    try {
        const response = await fetch(file);
        if (!response.ok) throw new Error(`Error al cargar ${file}`);
        
        const markdown = await response.text();
        
        const htmlContent = marked.parse(markdown);
        
        document.getElementById('content').innerHTML = htmlContent;
    } catch (error) {
        document.getElementById('content').innerHTML = `<p>Error al cargar el contenido.</p>`;
        console.error(error);
    }
}
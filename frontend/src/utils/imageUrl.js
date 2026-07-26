/**
 * Retorna a URL completa de uma imagem.
 * Se o caminho for relativo (começa com /uploads/), 
 * prefixamos com a URL do backend.
 * Se já for uma URL absoluta (http/https), retornamos como está.
 * Se for nulo/vazio, retornamos o fallback.
 * 
 * @param {string|null} path - Caminho da imagem vindo do banco de dados
 * @param {string} fallback - Imagem padrão caso path seja nulo
 * @returns {string}
 */
export function resolveImageUrl(path, fallback = '') {
    if (!path) return fallback
    if (path.startsWith('http://') || path.startsWith('https://')) return path
    // Caminho relativo vindo do banco — aponta para /uploads/ no backend
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3000'
    return `${backendUrl}${path}`
}

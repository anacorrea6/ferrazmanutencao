import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Projects from '@/components/Projects'
import Blog from '@/components/Blog'
import SocialConnect from '@/components/SocialConnect'
import Footer from '@/components/Footer'
import WhatsAppBtn from '@/components/WhatsAppBtn';
import Advantages from '@/components/Advantages';

const BACKEND_URL = process.env.BACKEND_API_URL || 'http://localhost:3000'

console.log('[page.js] BACKEND_URL =', BACKEND_URL)

async function getServices() {
    try {
        console.log('[getServices] chamando:', `${BACKEND_URL}/servicos`)
        const res = await fetch(`${BACKEND_URL}/servicos`, { 
            cache: 'no-store',
            headers: { 'Content-Type': 'application/json' } 
        })
        console.log('[getServices] status:', res.status)
        if (!res.ok) return []
        const json = await res.json()
        console.log('[getServices] total recebido:', json.total)
        return json.dados || []
    } catch(e) {
        console.error('[getServices] ERRO:', e.message)
        return []
    }
}

async function getProjects() {
    try {
        const res = await fetch(`${BACKEND_URL}/projetos`, { 
            cache: 'no-store',
            headers: { 'Content-Type': 'application/json' } 
        })
        console.log('[getProjects] status:', res.status)
        if (!res.ok) {
            console.log('[getProjects] resposta não ok, retornando []')
            return []
        }
        const json = await res.json()
        console.log('[getProjects] total recebido:', json.total)
        return json.dados || []
    } catch(e) {
        console.error('[getProjects] ERRO:', e.message)
        return []
    }
}

async function getArticles() {
    try {
        console.log('[getArticles] chamando:', `${BACKEND_URL}/artigos`)
        const res = await fetch(`${BACKEND_URL}/artigos`, { 
            cache: 'no-store',
            headers: { 'Content-Type': 'application/json' } 
        })
        console.log('[getArticles] status:', res.status)
        if (!res.ok) return []
        const json = await res.json()
        console.log('[getArticles] total recebido:', json.total)
        return json.dados || []
    } catch(e) {
        console.error('[getArticles] ERRO:', e.message)
        return []
    }
}

export default async function HomePage() {
    const [servicos, projetos, artigos] = await Promise.all([
        getServices(),
        getProjects(),
        getArticles()
    ])

    return (
        <>
            <Header />
            <main>
                <Hero />
                <Services servicos={servicos} />
                <Projects projetos={projetos} />
                <Blog artigos={artigos} />
                <SocialConnect />
                <Advantages />
            </main>
            <Footer />
            <WhatsAppBtn />
        </>
    )
}

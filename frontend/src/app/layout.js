import './globals.css'

export const metadata = {
    title: 'Ferraz Automação Industrial | Engenharia e Automação',
    description: 'Automação inteligente para aumentar a produtividade da sua empresa. Robôs Industriais, Injetoras, NR-12, Retrofit, Programação CLP e IoT Industrial.',
    keywords: 'Automação Industrial, Robôs Cartesianos, Euromap67, Programação CLP, Retrofit Injetoras, NR-12, Salto SP',
    authors: [{ name: 'Ferraz Automação Industrial' }],
    openGraph: {
        title: 'Ferraz Automação Industrial | Engenharia e Automação',
        description: 'Soluções avançadas em automação de injetoras, robótica industrial e engenharia.',
        url: 'https://ferrazautomacao.com.br',
        siteName: 'Ferraz Automação',
        images: [
            {
                url: '/img/LOGO - FERRAZ.jpeg',
                width: 800,
                height: 600,
                alt: 'Logo Ferraz Automação Industrial',
            },
        ],
        locale: 'pt_BR',
        type: 'website',
    },
    icons: {
        icon: '/img/LOGO - FERRAZ.jpeg',
    },
}

export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR">
            <body>
                {children}
            </body>
        </html>
    )
}

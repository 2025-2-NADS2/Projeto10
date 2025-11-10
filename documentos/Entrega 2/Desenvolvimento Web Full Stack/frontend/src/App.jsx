import React from 'react';
// IMPORTAÇÕES OFICIAIS DO REACT ROUTER DOM
import { Routes, Route } from 'react-router-dom';
// IMPORTS DO STRIPE
import { Elements } from '@stripe/react-stripe-js'; 
import { loadStripe } from '@stripe/stripe-js'; 

// 🚀 IMPORTAÇÃO DE COMPONENTES DE PÁGINA (Arquivos Reais)
import Header from './components/Header';
import DoarPageReal from './pages/DoarPage';
import HomePage from './pages/HomePage';
import PortalPage from './pages/PortalPage';
// Assumindo que o DashboardPage também vem de um arquivo real, ou o usaremos como uma definição simples.


// --- LAYOUTS E COMPONENTES AUXILIARES ---

const PublicLayout = ({ children }) => (
    <div className="min-h-screen bg-gray-50 p-4">
        {/* O cabeçalho secundário do PublicLayout foi removido, o Header principal é renderizado no App.js */}
        <main className="container mx-auto">{children}</main>
    </div>
);

const ProtectedLayout = ({ children, allowedRoles }) => {
    // Lógica de autenticação e autorização seria aplicada aqui
    const userRole = 'admin'; // Simulação de role para compilação
    if (!allowedRoles.includes(userRole)) {
        return <div className="text-center text-red-500 p-8">Acesso Negado (Role: {userRole})</div>;
    }
    return (
        <div className="bg-indigo-100 p-8 min-h-screen">
            <h2 className="text-lg font-semibold mb-4 text-indigo-800">Layout Protegido (Permitido: {allowedRoles.join(', ')})</h2>
            {children}
        </div>
    );
};

const PageContainer = ({ title, children }) => (
    <div className="bg-white p-6 rounded-lg shadow-xl mb-4">
        <h3 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">{title}</h3>
        {children}
    </div>
);

// 🛑 DEFINIÇÕES SIMULADAS LOCAIS REMOVIDAS
// Se estes componentes vierem de arquivos, remova estas definições
// e adicione os imports no topo.
const DashboardPage = () => (
    <PageContainer title="Dashboard Protegido">
        <p>Dados confidenciais para Doador, Voluntário ou Admin.</p>
    </PageContainer>
);
// 🛑HomePage e PortalPage foram removidos daqui para usar a versão importada do topo.


// --- CONFIGURAÇÃO CORRIGIDA DO STRIPE ---
const STRIPE_PK_TEST = 'pk_test_51SRw5k7WqbVaFSulYVkw2Qtvx2tMvRIVDSiARK6HJ0D3TJXfgRVF0zUpEsleJ4t6DicH7D4dNDcFTxcmF5Mi4ipB002ktvgMBg'; 
const stripePromise = loadStripe(STRIPE_PK_TEST); 


function App() {
    return (
        <div className="font-sans">
            {/* O HEADER É RENDERIZADO UMA ÚNICA VEZ ACIMA DO CONTEÚDO */}
            <Header /> 
            
            <div className="p-8">
                {/* 🚀 SISTEMA DE ROTAS OFICIAL COM <Routes> */}
                <Routes>
                    {/* Rota Raiz (Agora usa o HomePage importado) */}
                    <Route path="/" element={<PublicLayout><HomePage /></PublicLayout>} />
                    
                    {/* Rotas Públicas */}
                    <Route path="/portal" element={<PublicLayout><PortalPage /></PublicLayout>} />
                    
                    {/* Rota de Doação (Envolta pelo Elements) */}
                    <Route path="/doar" element={
                        <PublicLayout>
                            <Elements stripe={stripePromise}>
                                <DoarPageReal />
                            </Elements>
                        </PublicLayout>
                    } />
                    
                    {/* Rotas Protegidas */}
                    <Route 
                        path="/dashboard" 
                        element={<ProtectedLayout allowedRoles={['doador', 'voluntario', 'admin']}><DashboardPage /></ProtectedLayout>} 
                    />
                    <Route 
                        path="/admin" 
                        element={<ProtectedLayout allowedRoles={['admin']}><DashboardPage /></ProtectedLayout>} 
                    />
                    
                    {/* Rotas secundárias que podem ser usadas pelos botões no Header/HomePage */}
                    <Route path="/relatorios" element={<PublicLayout><PageContainer title="Relatórios">Conteúdo de Relatórios</PageContainer></PublicLayout>} /> 
                    <Route path="/governanca" element={<PublicLayout><PageContainer title="Governança">Conteúdo de Governança</PageContainer></PublicLayout>} />
                    
                    {/* Rota Padrão (404) - Coloque por último */}
                    <Route path="*" element={<div className="text-center p-10 text-red-700">Página Não Encontrada!</div>} />

                </Routes>
            </div>
        </div>
    );
}

export default App;
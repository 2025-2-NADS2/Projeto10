// DoarPage.jsx

import React, { useState } from 'react';
import CheckoutForm from '../components/CheckoutForm'; // Caminho assumido: src/components/CheckoutForm.jsx
// REMOVIDO: import { Link } from 'react-router-dom'; 

function DoarPage() { 
    const [selectedAmount, setSelectedAmount] = useState(null); 
    const [customAmount, setCustomAmount] = useState('');
    const [clientSecret, setClientSecret] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleAmountClick = (amount) => {
        setSelectedAmount(amount);
        setCustomAmount('');
    };

    const handleCustomAmountChange = (e) => {
        // Garante que o input customizado limpa a seleção de botão
        setSelectedAmount(null); 
        setCustomAmount(e.target.value);
    };

    // Valor final que será enviado ao backend.
    const finalAmount = selectedAmount || customAmount;
    
    // Função para iniciar o fluxo de pagamento (criação do PaymentIntent no backend)
    const handleDoarClick = async (e) => {
        e.preventDefault();
        setError(null);
        setLoading(true);

        const amountToSend = parseFloat(finalAmount);
        
        // Validações aprimoradas
        if (isNaN(amountToSend) || amountToSend < 0.5) {
            setError("Por favor, insira um valor de doação válido (mínimo R$ 0,50).");
            setLoading(false);
            return;
        }
        if (amountToSend > 50000) { 
            setError("Valor máximo permitido: R$ 50.000.");
            setLoading(false);
            return;
        }

        try {
            // 1. Chamada ao seu backend para criar o PaymentIntent
            const response = await fetch('/api/create-payment-intent', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    amount: amountToSend.toFixed(2), // Formato R$ XX.XX
                }),
            });

            if (!response.ok) {
                // Tenta ler o erro do corpo da resposta se não for um erro de rede
                const errorBody = await response.text();
                throw new Error(`Erro HTTP ${response.status}: ${errorBody.substring(0, 100)}`);
            }

            const data = await response.json();
            
            if (data.clientSecret) {
                // 2. Se o backend retornar o clientSecret, mostra o CheckoutForm
                setClientSecret(data.clientSecret);
            } else if (data.success) {
                // Caso raro de aprovação instantânea
                setError(null);
                alert(data.message); 
                setClientSecret(null); 
            } else {
                setError(data.message || 'Erro ao iniciar o pagamento. Tente novamente.');
            }

        } catch (err) {
            console.error('Erro na requisição ao backend:', err);
            setError(`Ocorreu um erro de conexão: ${err.message}. Verifique o servidor.`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <main 
            className="donation-page-wrapper" 
            style={{ backgroundImage: "linear-gradient(rgba(17, 31, 68, 0.7), rgba(17, 31, 68, 0.7)), url('/documentos/paginadoar.JPG')" }}
        >
            <div className="donation-header">
                <h1>SEJA UM DOADOR</h1>
                <div className="thin-bar" style={{ backgroundColor: '#6efff1' }}></div>
            </div>

            <div className="donation-box">
                <h2>Faça sua Doação</h2>
                <p>Sua contribuição é a esperança de muitas famílias. Escolha um valor e faça parte da mudança!</p>

                {/* Condicional que alterna entre a seleção de valor (Form) e o formulário do Stripe (CheckoutForm) */}
                {clientSecret ? (
                    // 3. Se o clientSecret existe, renderiza o formulário do Stripe Elements
                    <CheckoutForm clientSecret={clientSecret} amount={finalAmount} />
                ) : (
                    // 1. Se não, mostra a seleção de valor e o botão "Doar Agora"
                    <form className="donation-form" onSubmit={handleDoarClick}>
                        <div className="form-group">
                            <label className="form-label">Escolha um valor:</label>
                            <div className="amount-options">
                                <button 
                                    type="button" 
                                    className={`btn ${selectedAmount === 20 ? 'active' : ''}`} 
                                    onClick={() => handleAmountClick(20)}
                                >
                                    R$ 20
                                </button>
                                <button 
                                    type="button" 
                                    className={`btn ${selectedAmount === 50 ? 'active' : ''}`} 
                                    onClick={() => handleAmountClick(50)}
                                >
                                    R$ 50
                                </button>
                                <button 
                                    type="button" 
                                    className={`btn ${selectedAmount === 100 ? 'active' : ''}`} 
                                    onClick={() => handleAmountClick(100)}
                                >
                                    R$ 100
                                </button>
                            </div>
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="custom-amount" className="form-label">Ou digite outro valor (R$):</label>
                            <input 
                                type="number" 
                                id="custom-amount" 
                                className="form-input custom-amount" 
                                placeholder="Ex: 30" 
                                value={customAmount}
                                onChange={handleCustomAmountChange}
                                disabled={selectedAmount !== null} // Desativa se um botão for selecionado
                            />
                        </div>
                        
                        {error && <div style={{ color: 'red', textAlign: 'center', margin: '10px 0' }}>{error}</div>}

                        <button 
                            type="submit" 
                            className="btn btn-red btn-doar" 
                            // O botão só fica ativo se houver um valor selecionado ou digitado
                            disabled={!finalAmount || loading} 
                        >
                            {loading ? 'Preparando Pagamento...' : 'Doar Agora (Pix ou Cartão)'}
                        </button>

                        <p style={{ fontSize: '14px', textAlign: 'center', marginTop: '20px', marginBottom: '0' }}>
                            Ambiente 100% seguro.
                        </p>
                    </form>
                )}
            </div>

            <div className="bottom-color-bars">
                {/* Barras de cor */}
                <div className="bottom-bar" style={{ backgroundColor: '#f06678' }}></div>
                <div className="bottom-bar" style={{ backgroundColor: '#ffc9fc' }}></div>
                <div className="bottom-bar" style={{ backgroundColor: '#111F44' }}></div>
                <div className="bottom-bar" style={{ backgroundColor: '#ffc9fc' }}></div>
                <div className="bottom-bar" style={{ backgroundColor: '#f06678' }}></div>
                <div className="bottom-bar" style={{ backgroundColor: '#111F44' }}></div>
                <div className="bottom-bar" style={{ backgroundColor: '#ffc9fc' }}></div>
                <div className="bottom-bar" style={{ backgroundColor: '#f06678' }}></div>
            </div>
        </main>
    );
}

export default DoarPage;
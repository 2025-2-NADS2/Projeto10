import React, { useEffect, useState } from 'react';
import {
    PaymentElement,
    useStripe,
    useElements
} from '@stripe/react-stripe-js';

// Componente recebe o clientSecret e o valor da doação como props
const CheckoutForm = ({ clientSecret, amount }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [message, setMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    // Efeito para tratar o estado de retorno da doação (após Pix ou 3D Secure)
    useEffect(() => {
        if (!stripe) {
            return;
        }
        
        // Verifica o status do PaymentIntent após um redirecionamento 
        const clientSecretParam = new URLSearchParams(window.location.search).get(
            'payment_intent_client_secret'
        );

        if (!clientSecretParam) {
            return;
        }

        stripe.retrievePaymentIntent(clientSecretParam).then(({ paymentIntent }) => {
            switch (paymentIntent.status) {
                case 'succeeded':
                    setMessage("✅ Doação aprovada! Obrigado!");
                    break;
                case 'processing':
                    setMessage("⏳ Sua doação está sendo processada. Aguarde.");
                    break;
                case 'requires_payment_method':
                    setMessage("❌ Falha na doação. Tente novamente.");
                    break;
                default:
                    setMessage("Algo deu errado. Status: " + paymentIntent.status);
                    break;
            }
        });
    }, [stripe, clientSecret]);

    // Função que é chamada ao submeter o formulário de pagamento
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        setIsLoading(true);
        setMessage(null);

        // Confirma o pagamento usando o Client Secret obtido do backend
        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                // A URL de retorno para onde o usuário volta após a autenticação (Pix/3DS)
                return_url: window.location.origin + '/doar', 
            },
        });

        if (error) {
            if (error.type === "card_error" || error.type === "validation_error") {
                setMessage(error.message);
            } else {
                setMessage("Ocorreu um erro inesperado: " + error.message);
            }
        } else {
            setMessage("Processando seu pagamento...");
        }

        setIsLoading(false);
    };

    const paymentElementOptions = {
        layout: "tabs",
        fields: {
            billingDetails: {
                email: 'auto',
            }
        }
    };

    return (
        <form id="payment-form" onSubmit={handleSubmit} className="donation-form">
            <p style={{ textAlign: 'center', marginBottom: '15px', color: '#111F44' }}>
                Valor Final: <strong>R$ {parseFloat(amount).toFixed(2)}</strong>
            </p>

            {/* O PaymentElement renderiza o formulário de cartão/Pix do Stripe */}
            {clientSecret && (
                <PaymentElement id="payment-element" options={paymentElementOptions} />
            )}
            
            <button 
                disabled={isLoading || !stripe || !elements || !clientSecret} 
                id="submit"
                className="btn btn-red btn-doar" 
                style={{ marginTop: '20px' }}
            >
                <span id="button-text">
                    {isLoading ? "Processando..." : "Confirmar Doação"}
                </span>
            </button>

            {/* Mostra mensagens de status ou erro */}
            {message && <div id="payment-message" style={{ 
                color: message.includes('✅') ? 'green' : message.includes('❌') ? 'red' : '#C6421E', 
                textAlign: 'center', marginTop: '10px', fontWeight: 'bold' }}>{message}</div>}
        </form>
    );
};

export default CheckoutForm;
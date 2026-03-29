// Función para calcular las métricas del trade
function calcularTrade() {
    const entrada = parseFloat(document.getElementById('entrada').value);
    const stopLoss = parseFloat(document.getElementById('stopLoss').value);
    const takeProfit = parseFloat(document.getElementById('takeProfit').value);
    const cantidad = parseFloat(document.getElementById('cantidad').value);

    if (entrada && stopLoss && takeProfit && cantidad) {
        const riesgoTotal = Math.abs(entrada - stopLoss) * cantidad;
        const beneficioTotal = Math.abs(take_profit - entrada) * cantidad;
        const ratio = beneficioTotal / riesgoTotal;

        // Mostrar resultados en el HTML
        document.getElementById('resultadoRiesgo').innerText = `Riesgo: $${riesgoTotal.toFixed(2)}`;
        document.getElementById('resultadoRR').innerText = `Ratio R/B: 1:${ratio.toFixed(2)}`;
    }
}// 1. Efecto de escritura
window.onload = typeWriter; 

let totalPnL = 0;

// 2. Calculadora de Riesgo
function calculateRisk() {
    const capital = document.getElementById('capital').value;
    const riskPercent = document.getElementById('risk-percent').value;
    const stopTicks = document.getElementById('stop-ticks').value;
    const resultDiv = document.getElementById('result');

    if (capital && riskPercent && stopTicks) {
        const riskAmount = capital * (riskPercent / 100);
        const costPerTrade = stopTicks * 1.25;
        const contracts = Math.floor(riskAmount / costPerTrade);

        resultDiv.innerHTML = `
            <p>Riesgo máximo: <strong>$${riskAmount.toFixed(2)}</strong></p>
            <p>Contratos recomendados: <span class="highlight-val">${contracts} MES</span></p>
        `;
    } else {
        resultDiv.innerHTML = "Por favor, completa todos los campos.";
    }
}

// 3. Bitácora de Trades
function addTrade() {
    const asset = document.getElementById('trade-asset').value;
    const result = parseFloat(document.getElementById('trade-result').value);
    const tableBody = document.getElementById('trade-body');

    if (asset && !isNaN(result)) {
        const row = tableBody.insertRow();
        const status = result >= 0 ? '🟢 Win' : '🔴 Loss';
        const statusClass = result >= 0 ? 'win-text' : 'loss-text';

        row.innerHTML = `
            <td>${asset}</td>
            <td class="${statusClass}">$${result.toFixed(2)}</td>
            <td>${status}</td>
        `;

        totalPnL += result;
        const totalDisplay = document.getElementById('total-pnl');
        totalDisplay.innerText = `$${totalPnL.toFixed(2)}`;
        totalDisplay.className = totalPnL >= 0 ? 'win-text' : 'loss-text';
let highPrice = 5500.00;
let lowPrice = 5500.00;
        document.getElementById('trade-asset').value = '';
        document.getElementById('trade-result').value = '';
    }
}// VARIABLES PARA EL MONITOR
let lastPrice = 5500.00; // Precio inicial simulado
let currentPrice = 5500.00;

// 1. FUNCIÓN QUE SIMULA EL MOVIMIENTO DEL MERCADO
function updateMarket() {
    // Genera un movimiento aleatorio (como en la vida real)
    const movement = (Math.random() - 0.5) * 4; 
    lastPrice = currentPrice;
    currentPrice += movement;

    // Mostrar el precio en pantalla
    const priceDiv = document.getElementById('live-price');
    priceDiv.innerText = currentPrice.toFixed(2);

    // Cambiar color según si sube o baja
    priceDiv.className = currentPrice >= lastPrice ? 'price-up' : 'price-down';

    checkVolatility(movement);
}

// 2. LA LÓGICA DE LA ALERTA
function checkVolatility(change) {
    const alertBox = document.getElementById('volatility-alert');
    
    // Si el movimiento es brusco (más de 1.5 puntos en un segundo)
    if (Math.abs(change) > 1.5) {
        alertBox.innerText = "⚠️ ALERTA: VOLATILIDAD ALTA";
        alertBox.style.backgroundColor = "#ff4c4c"; // Rojo
        alertBox.style.color = "white";
        
        // Efecto de parpadeo (opcional)
        alertBox.classList.add('blink');
    } else {
        alertBox.innerText = "Mercado Estable";
        alertBox.style.backgroundColor = "transparent";
        alertBox.style.color = "#00ff88";
        alertBox.classList.remove('blink');
    }
}

// 3. ARRANCAR EL MONITOR (Cada 1 segundo)
setInterval(updateMarket, 1000);
// --- LÓGICA DE MEMORIA (Añadir dentro del setInterval) ---
    if (newPrice > highPrice) {
        highPrice = newPrice;
        document.getElementById('day-high').innerText = highPrice.toFixed(2);
    }
    
    if (newPrice < lowPrice) {
        lowPrice = newPrice;
        document.getElementById('day-low').innerText = lowPrice.toFixed(2);
    }
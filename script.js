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

        document.getElementById('trade-asset').value = '';
        document.getElementById('trade-result').value = '';
    }
}
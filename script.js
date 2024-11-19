// Função para converter números em palavras
function numeroParaPalavra(num) {
    const palavras = [
        "0", "10", "20", "30", "40", "50",
        "60", "70", "80", "90", "100", "110", "120",
        "130", "140", "150", "160", "170",
        "180", "190", "200"
    ];
    return palavras[num] || num.toString(); // Retorna o número como string se não estiver na lista
}

const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Pikachu', 'Bulbasaur', 'Charmander', 'Squirtle', 'Eevee'],
        datasets: [{
            label: 'Capturas',
            data: [500, 300, 450, 400, 550], // Dados fictícios de capturas
            backgroundColor: [
                'rgba(255, 204, 0, 0.5)', // Amarelo (Pikachu)
                'rgba(0, 255, 0, 0.5)', // Verde (Bulbasaur)
                'rgba(255, 69, 0, 0.5)', // Laranja (Charmander)
                'rgba(0, 0, 255, 0.5)', // Azul (Squirtle)
                'rgba(255, 182, 193, 0.5)' // Rosa (Eevee)
            ],
            borderColor: [
                'rgba(255, 204, 0, 1)', // Amarelo
                'rgba(0, 255, 0, 1)', // Verde
                'rgba(255, 69, 0, 1)', // Laranja
                'rgba(0, 0, 255, 1)', // Azul
                'rgba(255, 182, 193, 1)' // Rosa
            ],
            borderWidth: 1,
            datalabels: {
                anchor: 'end',
                align: 'end',
                formatter: (value) => numeroParaPalavra(value), // Converte os números em palavras
                color: '#FFCC00' // Cor amarela para os rótulos de dados
            }
        }]
    },
    options: {
        plugins: {
            datalabels: {
                display: true,
                color: '#FFCC00', // Cor amarela para os rótulos
                font: {
                    weight: 'bold'
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: '#FFCC00' // Cor amarela para os rótulos dos Pokémon
                },
                title: {
                    display: true,
                    text: 'Pokémon',
                    color: '#FFCC00'
                }
            },
            y: {
                beginAtZero: true,
                ticks: {
                    color: '#FFCC00', // Cor amarela para os números
                    callback: function(value) {
                        return numeroParaPalavra(value); // Substitui os números por palavras
                    }
                },
                title: {
                    display: true,
                    text: 'Capturas',
                    color: '#FFCC00'
                }
            }
        },
        layout: {
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            }
        },
        elements: {
            bar: {
                borderWidth: 2,
                borderSkipped: 'bottom'
            }
        }
    },
    plugins: [ChartDataLabels] // Inclui o plugin
});

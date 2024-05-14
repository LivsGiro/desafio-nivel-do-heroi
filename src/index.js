let nomeDoHeroi = 'Livia';
let experienciaDoHeroi = 9999;

function nivelDoHeroi() {
    if (experienciaDoHeroi < 1000) {
        return "Ferro";
    } else if (experienciaDoHeroi >= 1001 && experienciaDoHeroi <= 2000) {
        return "Bronze";
    } else if (experienciaDoHeroi >= 2001 && experienciaDoHeroi <= 5000) {
        return "Prata";
    } else if (experienciaDoHeroi >= 5001 && experienciaDoHeroi <= 7000) {
        return "Ouro";
    } else if (experienciaDoHeroi >= 7001 && experienciaDoHeroi <= 8000) {
        return "Platina";
    } else if (experienciaDoHeroi >= 8001 && experienciaDoHeroi <= 9000) {
        return "Ascendente";
    } else if (experienciaDoHeroi >= 9001 && experienciaDoHeroi <= 10000) {
        return "Imortal";
    } else (experienciaDoHeroi > 10001)
    return "Radiante";
};

nivelDoHeroi();

console.log(`O herói de nome ${nomeDoHeroi} está no nível ${nivelDoHeroi(experienciaDoHeroi)}`);

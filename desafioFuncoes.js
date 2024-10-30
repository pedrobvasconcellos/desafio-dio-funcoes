function rankeadas(vitorias, derrotas){
	return vitorias - derrotas
}

let sub = rankeadas(70, 25)

if(sub > 20 && sub < 51)
{
 console.log("O herói tem de saldo de " + sub + " está no nível de prata")
}

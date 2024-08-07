// Procura itens em um array:

const lista = ["Banana", "Melão","Melancia", "Maçã" ]
test("Identifica'maçã' no array", ()=>{
    expect(lista).toContain("Maçã")
    expect(lista).not.toContain("Jabuticaba")
    // Conta quantos itens a no array
    expect(lista).toHaveLength(4)
})
// Verifica se a um erro
function retornaErro(Erro){
    throw new Erro("Isso é um erro!")
}
test("Retorna um erro ", ()=>{
      expect(() => retornaErro()).toThrow()
})
// Testando funções assíncronas
const fetchData = async () =>"Ford Ka";

test("Espera que o dado seja um 'Ford Ka'", async() => {
    const carro = await fetchData();
    expect(carro).toBe("Ford Ka");
})

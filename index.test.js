function soma (a, b) {
    return a + b;
    // MATCHERS PARA NÚMEROS
}
test("Soma 1 + 4 e retorna 5", () => {
    expect(soma(1, 4)).toBe(5) 
    expect(soma(2, 3)).toBe(5) 
    expect(soma(2.5 , 2.5)).toEqual(5) 
});
test("18 é maior de idade", () => {
    const numero = 18
    expect(20).toBeGreaterThan(numero)
    expect(18).toBeGreaterThanOrEqual(numero)
});
// MATCHERS PARA STRING

test("Procura letra C na palavra", ()=>{
    const nome = "Cauã"
    expect(nome).toMatch(/C/)
    expect(nome).not.toMatch(/I/)
});
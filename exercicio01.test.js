function Area (a){
return a * a
} 
test("Me retorne a area do quadrado 'area'", () =>{
    expect(Area(2)).toBe(4)
})
function media (a, b, c){
return (a + b + c) / 3
}
test("Me retorne a media'media'", () => {
    expect(media(2, 6, 5)).toBeCloseTo(4.33333333333);
})
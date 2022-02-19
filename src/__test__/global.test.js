const text = "hola mundo";
test('debe tener un texto', ()=>{
    expect(text).toMatch(/mundo/); 
})
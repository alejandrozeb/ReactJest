const text = "hola mundo";
const fruits = ['manzana', 'melon', 'banana'];

test('debe tener un texto', ()=>{
    expect(text).toMatch(/mundo/); 
})

test('¿tenemos una banana?', ()=>{
    expect(fruits).toContain('banana');
});

test('Mayor que', ()=>{
    expect(10).toBeGreaterThan(9);
});

test('Verdadero', ()=>{
    expect(true).toBeTruthy();
});

const reverseString = (str, callback) => {
    callback(str.split("").reverse().join(""))
};

test('probar un callback', ()=>{
    reverseString('hola', (str) => {
        expect(str).toBe('aloh');
    });
});
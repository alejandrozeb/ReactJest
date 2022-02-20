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

const reverseString2 = str =>{
    return new Promise((resolve, reject)=>{
        if(!str){
            reject(Error('Error'))
        }
        resolve(str.split("").reverse().join(""));
    });
}

test('Probar una promesa', () =>{
    return reverseString2('Hola')
    .then(string=>{
        expect(string).toBe('aloH')
    })
});

test('Probar async/await', async()=>{
    const string = await reverseString2('hola');
    expect(string).toBe('aloh');
});


//correr codigo antes y despues de cada prueba

/* afterEach(()=> console.log('Despues de cada prueba'));
afterAll(()=> console.log('Despues de todas las pruebas'));

beforeEach(()=> console.log('antes de cada prueba'));
beforeAll(()=> console.log('antes de todas las pruebas')); */
//para reiniciar mocks y stubs 

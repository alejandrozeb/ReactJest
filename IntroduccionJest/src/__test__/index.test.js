const randomString = require('../index');

describe('Probar funcionalidades de randomStrings', () =>{
    test('Probar funcionlaidad', ()=>{
        expect(typeof(randomString())).toBe('string');
    });
    test('comprobar que no existe una ciudad', ()=>{
        expect(randomString()).not.toMatch(/Cordoba/);
    });
});
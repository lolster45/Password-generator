

const {generatePassword, updateDisplay, changePassWordLength} = require('../script');



describe('Generate Password Test', () => {

    const characters = ['A', 'B', 'C', '1', '2', '3'];
    const passwordLength = 15;



    test('should generate a password of the correct length', () => {
        const password = generatePassword(passwordLength, characters);
        expect(password).toHaveLength(passwordLength);
    });


    test('should retrieve a password', () => {
        const password = generatePassword(passwordLength, characters);
        expect(typeof password).toBe('string');
        expect(password.length).toBeGreaterThan(0);
    });


    



})



describe('update password length', () => {

    let e, displayLength, object;

   
    beforeEach(() => {
        e = {
            target: {
                dataset: {
                    action: ''
                }
            }
        }
        displayLength = {textContent: ''};
        object = {passwordLength: 15};
    })


    test('update the diplay showing password length', () => {
        updateDisplay(displayLength, object);

        expect(displayLength.textContent).toBe('15')
        
    })

    test('increase password length', () => {
        e.target.dataset.action = 'increase';

        changePassWordLength(e, object, displayLength);

        expect(object.passwordLength).toBe(16);
        expect(displayLength.textContent).toBe('16');
    });


    test('decrease password length', () => {
        e.target.dataset.action = 'decrease';

        changePassWordLength(e, object, displayLength);

        expect(object.passwordLength).toBe(14);
        expect(displayLength.textContent).toBe('14');
    });


    test('password length does not go above 35', () => {
        e.target.dataset.action = 'increase';
        object.passwordLength = 35;

        changePassWordLength(e, object, displayLength);

        expect(object.passwordLength).toBe(35);
        expect(displayLength.textContent).toBe('35');
    });

    test('password length does not go below 0', () => {
        e.target.dataset.action = 'decrease';
        object.passwordLength = 0;


        changePassWordLength(e, object, displayLength);

        expect(object.passwordLength).toBe(0);
        expect(displayLength.textContent).toBe('0');
    });


})
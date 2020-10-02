describe('canGregBuyBeer', () => {
    describe('when greg is over 17', () => {
      it('should return true ', () => { 
    
        const originalAge = greg.age;
        greg.age = 18

        const result = canGregBuyBeer();
     
        expect(result).toBe("Greg is 18, he can buy beer!");
        greg.age = originalAge;
    });
    });

    describe('when greg is younger than 18', () => {
        it('should return false', () => {

            const originalAge = greg.age;
            greg.age = 17

            const result = canGregBuyBeer();

            expect(result).toBe("Greg is 17, he can't buy beer :(");
            greg.age = originalAge;
        })
    })
});

describe('canBuyBeer', () => {
    describe('when age is 18 plus', () => {
        it('should return true', () => {
       
            const result = canBuyBeer(27);
            
            expect(result).toBe(true)
        });
    });

    describe('when age is less than 18', () => {
        it('should return false', () => {
            const result = canBuyBeer(4);
            expect(result).toBe(false)
        });
    });
})
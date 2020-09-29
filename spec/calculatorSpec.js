describe('Calculator', () => {
  describe('#add', () => {
    describe('when passed a string as a number', () => {
      it('should throw an error', () => {
        const calculator = new Calculator();

        expect(() => calculator.add('1', 2)).toThrow();
        expect(() => calculator.add(1, '2')).toThrow();
      });
    });

    describe('when passed two numbers', () => {
      it('should not throw an error', () => {
        const calculator = new Calculator();

        expect(() => calculator.add(1, 2)).not.toThrow();
      });

      it('should add the numbers together', () => {
        const calculator = new Calculator();

        const result = calculator.add(1, 2);

        expect(result).toBe(3);
      });
    });
  });

  describe('#subtract', () => {
    describe('when passed a string as a number', () => {
      it('should throw an error', () => {
        const calculator = new Calculator();

        expect(() => calculator.subtract('1', 2)).toThrow();
        expect(() => calculator.subtract(2, '2')).toThrow();
      });
    });

    describe('when passed two numbers', () => {
      it('should not throw an error', () =>  {
        const calculator = new Calculator();

        expect(() => calculator.subtract(2, 2)).not.toThrow();
      });

      it('should subtract the first number from the second', () => {
        const calculator = new Calculator();

        const result = calculator.subtract(2, 2);

        expect(result).toBe(0);

      });
    });
  });

    describe('#multiply', () => {
      describe('when passed a string as a number', () => {
        it('should throw an error',() => {
          const calculator = new Calculator();

          expect(() => calculator.multiply('2', 3)).toThrow();
          expect(() => calculator.multiply(3, '2')).toThrow();
        });
      });

      describe('when passed two numbers', () => {
        it('should not throw an error', () => {
          const calculator = new Calculator();

          expect(() => calculator.multiply(2, 3)).not.toThrow();
        });
  

        it('should multiply the two numbers', () => {
          const calculator = new Calculator();

          const result = calculator.multiply(2, 3);

          expect(result).toBe(6);
        });
      });  
    });

    describe('#divide', () => {
      describe('when passed a string as a number', () => {
        it('should throw an error', () => {
          const calculator = new Calculator();

          expect(() => calculator.divide('2', 3)).toThrow();
          expect(() => calculator.divide(2, '3')).toThrow();
        });
      });

      describe('when passed two numbers', () => {
        it('should not throw an error', () => {
          const calculator = new Calculator();

        expect(()=> calculator.divide(4, 2)).not.toThrow();
        });  
      });

      describe('when passed y as zero', () => {
         it('should throw an error', () => {
          const calculator = new Calculator();

          expect(() => calculator.divide(2, 0)).toThrow();
        });
      });
      
        it('should divide the two numbers', () => {
          const calculator = new Calculator();

          const result = calculator.divide(4, 2);

          expect(result).toBe(2);
        });
      });
    });


  

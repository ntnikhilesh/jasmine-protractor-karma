describe('hello test',()=>{


    // it('check if hello test is hello',()=>{
    //     expect('hello').toBe('hello')
    // })


    // it('check if hello test is not hello',()=>{
    //     expect('hello').not.toBe('hello1')
    // })


    //using varibale
    //will intialize variable inside method called beforeEach

    let expected='';
    beforeEach(()=>{
        expected='hello'
    })

    it('check if hello test is hello',()=>{
        expect('hello').toBe(expected)
    })

})
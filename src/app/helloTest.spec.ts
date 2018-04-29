xdescribe('hello test',()=>{

//1
    // it('check if hello test is hello',()=>{
    //     expect('hello').toBe('hello')
    // })

//2
    // it('check if hello test is not hello',()=>{
    //     expect('hello').not.toBe('hello1')
    // })

//3
    //using varibale
    //will intialize variable inside method called beforeEach

    // let expected='';
    // beforeEach(()=>{
    //     expected='hello'
    // })

    // //cleaning variable
    // afterEach(()=>{
    //     expected='';
    // })

    // it('check if hello test is hello',()=>{
    //     expect('hello').toBe(expected)
    // })

//4
    //using regex
    let expectMatch=null; //bx regex will be object not string thats y null instead of ''

    beforeEach(()=>{
        expectMatch=new RegExp(/^hello/);
    })

      it('check if hello test is hello using regex',()=>{
        expect('hello').toMatch(expectMatch);
    })
})
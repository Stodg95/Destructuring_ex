describe('#obj', function(){
  it('should call a,b and return the obj', function(){
    expect({a,b}).toEqual({
      a: 1,
      b: 2
    })
  })
})

describe('#arr swap', function(){
  it('should swap the elements in the array', function(){
    expect(arr).toEqual([2,1])
  })
})

describe('#raceResults', function(){
  it('should take the runners and place them in order to 3rd place then put the rest in an array', function(){
    expect(raceResults(['Joey', 'Anna', 'Mark', 'Todd', 'Sarah', 'Kyle'])).toEqual({
      first: "Joey",
      second: "Anna",
      third: "Mark",
      rest: ['Todd', 'Sarah', 'Kyle']
    })
  })
})
import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { useState } from 'react';


function Code4() {
  const codeString = `
    num2 = 100
    newNumber1 = 90
    newNumber2 = 7
    thala_for_a__reason = 18

    if (newNumber1 <=0):
      print(newNumber2)
    elif (newNumber1 % 2 == 0):
      print((newNumber2 % 2) + 1 * 4)
    elif ((newNumber2+9) == thala_for_a__reason):
      print(".")
    print((newNumber1 / 10) * 2);
    thala_for_a__reason * 2 + 4 / 2;

    def something1(x, y):
      if x == 0 and y == 0:
        return 0,0
      elif x == 0:
        return y, y
      elif y == 0:
        return x*2
      else:
        return something1(x-1, y-1)
      
    printSomething1 = something1(3,1)

    one_more = [11,2,312,224, 12, 45, 98, 45, 65]

    one_more.sort()
    print(one_more[-3])


    def something2(num1, num3):
      if num1 == 4 and num3 == 0:
        print(num3)
      elif num1 == 0:
        return num2
      else:
        return "."


    def something4(num3, num7):
      newthing = [num3*4, num7 *0, num3, num7*1, num3*2, num2/10]
      firstElement = newthing[-1]
      lastElement = newthing[0]
      print((lastElement * 1) / 3 + 12)


    something4(3,1)
    something2(4,4)
    print(printSomething1)
    print(one_more[-2])
  `

  const [input , setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input == "126451229") {
      alert("Congratulations! You guessed it right!")
    } else {
      alert("Oops! Try again."  )
    }
  }

  return (
    <div className='w-full m-5 flex flex-col'>
      <SyntaxHighlighter language="python">
        {codeString}
      </SyntaxHighlighter>
      <div className='flex justify-center items-center mt-3'>
        <form onSubmit={handleSubmit} className='flex gap-5'>  

          <input 
            value={input}
            className='p-2 text-lg border border-gray-400 rounded'
            placeholder='Enter guessed output'
            onChange={(e) => setInput(e.target.value)}
          />
          <button className='bg-sorbus-500 text-xl text-gray-100 rounded-sm px-2 py-0.5'>
            Submit
          </button>
        </form>
      </div>

    </div>
  )
}

export default Code4
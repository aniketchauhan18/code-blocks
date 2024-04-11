import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { useState } from 'react';

function Code3() {
  const codeString = `
    num5 = 20
    num6 = 3
    num8 = 5
    nimbus_event = 10

    if (num5 > num8):
        print(num6 * 2)
    elif (num5 % 4 == 0):
        print((num6 % 3) + 2 * 5)
    elif ((num8 - 1) == nimbus_event):
        print(".")

    print((num5 / 5) * 3)
    print((nimbus_event * 2 + 5 / 2) - 0.5)

    def something3(a, b):
        if a == 0 and b == 0:
            return 0, 0
        elif a == 0:
            return b, b
        elif b == 0:
            return a * 2
        else:
            return something3(a - 1, b - 1)

    printSomething3 = something3(4, 2)
    print(printSomething3)

    def something5(num9, num10):
        if num9 == 5 and num10 == 0:
            print(num10)
        elif num9 == 0:
            return num5
        else:
            return "."

    def something6(num11, num12):
        new_thing = [num11 * 2, num12 * 3, num11, num12 * 2, num11 - 5, num5 / 5]
        first_element = new_thing[-1]
        second_element = new_thing[0]
        print((first_element * 2) / 4 + 10)

    something6(2, 3)
    something5(5, 5)
  `

  const [input , setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input == "61222412") {
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
  );
}

export default Code3
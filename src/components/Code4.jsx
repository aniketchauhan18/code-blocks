import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { useState } from 'react';


function Code4() {
  const codeString = `
    num_a = 15
    num_b = 4
    num_c = 7
    eila_jaadu = 21

    if num_a > num_c:
        print(num_b * 3)
    elif num_a % 5 == 0:
        print((num_b % 2) + 3 * 4)
    elif (num_c + 3) == eila_jaadu:
        print(".")

    print((num_a / 5) * 2)
    print(eila_jaadu * 2 + 6 / 2)

    def calculate_something(x, y):
        if x == 0 and y == 0:
            return 0, 0
        elif x == 0:
            return y, y
        elif y == 0:
            return x * 3
        else:
            return calculate_something(x - 1, y - 1)

    print_calculate = calculate_something(6, 2)
    print(print_calculate)

    def check_number(num_d, num_e):
        if num_d == 6 and num_e == 0:
            print(num_e)
        elif num_d == 0:
            return num_a
        else:
            return "."

    def calculate_result(num_f, num_g):
        new_list = [num_f * 3, num_g * 2, num_f, num_g * 2, num_f - 5, num_a / 5]
        first_item = new_list[-1]
        second_item = new_list[0]
        print((second_item * 2) + 11)

    calculate_result(3, 5)
    check_number(6, 6)
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
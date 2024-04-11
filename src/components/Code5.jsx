import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { useState } from 'react';


function Code5() {
  const codeString = `
    num_x = 12
    num_y = 3
    num_z = 6
    code_blocks = 18

    if num_x > num_z:
        print(num_y * 4)
    elif num_x % 3 == 0:
        print((num_y % 2) + 2 * 6)
    elif (num_z + 6) == code_blocks:
        print(".")

    print((num_x / 4) * 3)
    print(code_blocks * 2 + 4 / 2)

    def calculate_recursive(a, b):
        if a == 0 and b == 0:
            return 0, 0
        elif a == 0:
            return b, b
        elif b == 0:
            return a * 4
        else:
            return calculate_recursive(a - 2, b - 1)

    print_recursive = calculate_recursive(8, 2)
    print(print_recursive)

    def check_value(num_p, num_q):
        if num_p == 8 and num_q == 0:
            print(num_q)
        elif num_p == 0:
            return num_x
        else:
            return "."

    def calculate_result(num_r, num_s):
        new_list = [num_r * 2, num_s * 3, num_r, num_s * 2, num_r - 4, num_x / 4]
        first_item = new_list[-1]
        second_item = new_list[0]
        print((second_item * 3) / 5 + 8)

    calculate_result(5, 3)
    check_value(8, 8)
  `

  const [input , setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input == "129381614") {
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

export default Code5
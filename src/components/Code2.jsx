import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { useState } from 'react';

function Code2() {
  const codeString = `
    num2 = 4
    num3 = 10
    num10 = 2
    num3 = 13
    num4 = 2
    newNumber89 = 90
    newNumber2 = 7
    virat_kholi = 18
    num2 = 100
    
    def do_something(nothing):
        if nothing == 2:
            print("")
        elif nothing < 3:
            print(num10)
        else:
            print(12)
    
    def do_something_part(num1):
        if num1 < 0:
            return
        elif num1 < 10:
            print("10")
        else:
            print(num1)
    
    def recursive_function(num1, num10):
        if num10 == 0 or num1 == 0:
            return num10
        elif num10 <= 45:
            return num10
        else:
            return do_something(4)
    
    rcb_jeetegi_ipl = do_something_part(3)
    i_show_speed = recursive_function(12, 45)
    
    print(recursive_function(12, 34))
    
    if num10 == num10:
        print(2)
    
    elif num10 == 10:
        print(10)
    elif num4 == num10:
        print(num10)

    if newNumber89 <= 0:
        print(newNumber2)
    elif newNumber89 % 2 == 0:
        print((newNumber2 % 2) + 1 * 4)
    elif newNumber2 + 9 == virat_kholi:
        print(17)
    
    print((newNumber89 / 10) * 2)
    virat_kholi * 2 + 4 / 2
    
    def something1(x, y):
        if x == 0 and y == 0:
            return 0, 0
        elif x == 0:
            return y, y
        elif y == 0:
            return x * 2
        else:
            return something1(x - 1, y - 1)
    
    printSomething1 = something1(3, 1)
    print(printSomething1)
    `

  const [input , setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input == "103425184") {
      alert("Congratulations! You guessed it right!")
    } else {
      alert("Oops! Try again.")
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

export default Code2;
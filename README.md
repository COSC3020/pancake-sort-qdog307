# Pancake Sort

There is an abstract data type (ADT) called a *pancake array*, which provides
the function `flip(array, n)`, which takes the top (first) $n$ items in the
array and "flips them over", i.e. reverses their order.

For example, if you called `flip([1, 2, 3, 4], 2)`, the result would
be the array  `[2, 1, 3, 4]`, because the order of the (first) top 2
elements in the array has been reversed.

If $n$ is larger than the number of items in the array, the entire array gets
reversed. The intuition for the name "pancake array" is that with a stack of
pancakes, you can insert a spatula at any point in the stack and use it to flip
over all pancakes above that point.

Implement a sorting function that will sort an array of pancakes such that the
smallest pancake is at the top. You may use only the `flip()` function to
manipulate the array. You may break ties arbitrarily. Test your new function;
I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`, but it only tests
`pancakeSort()`, not `flip()`.

Hint: Start by thinking about the calls to `flip()` required to move a *single*
element into its correct position.

## Runtime Analysis

What is the asymptotic runtime ($\Theta$) of your algorithm in terms of the
number of comparisons? What is it in terms of the number of flips? Add your
answer to this markdown file.

The algorithm processes the array by iterating through each element, where the total number of elements is represented by `n`. For each iteration, the `flip` operation is invoked twice: first to bring the largest unsorted pancake to the top of the stack and then again to move it to its correct position at the end of the unsorted portion of the stack.

The algorithm identifies the largest element in the unsorted portion by examining each item within it. This process is repeated for progressively smaller portions of the array, resulting in a total comparison runtime of `Θ(n^2)`. 

As for flips, the algorithm performs two flips per iteration, resulting in a runtime for flips of `Θ(2n)`.

## Sources 

For this I used the sorting lecture slides. I used Chatgpt and asked what sorting method this was most similar to. I used Geeks for Geeks to better understand of the use of flips and comparisons. https://www.geeksforgeeks.org/pancake-sorting/ 

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.

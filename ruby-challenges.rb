# # ASSESSMENT 4: Ruby Coding Practical Questions
# # MINASWAN

# # --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'


def oddOrEven(int)
    if int % 2 == 0 
        return "#{int} is even"
    else
        return "#{int} is odd"
    end
end

p oddOrEven num1
p oddOrEven num2
p oddOrEven num3



# # -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
album3 = 'Abbey Road'
# Expected output: 'bby Rd'


def remove(str)
    string_array = str.split("")
    vowels = "AEIOUaeiou"
    i = 0
    while i < str.length
      if vowels.include?(str[i])
        string_array[i] =  nil
      end
      i +=1
    end

    return string_array.join
end

p remove album1
p remove album2
p remove album3


# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'



def pali_Test(string)
    lowerString = string.downcase()

    if lowerString === lowerString.reverse
        return "#{string} is a palindrome"
    else
        return "#{string} is not a palindrome"
    end
end

p pali_Test palindrome_tester1
p pali_Test palindrome_tester2
p pali_Test palindrome_tester3





# Sorting Visualizer

### Video Demo:  <https://www.youtube.com/watch?v=IHIBQ0xY5Go>

### Decsription:

Made as a final project to CS50
I was clueless on what to do for the CS50 project. Where do people go to get some idea..Yes by googling it..I  stumbled upon <https://www.crio.do/projects/category/web-development-projects> then i chose to go with SORTING VISUALISER.
<https://www.crio.do/projects/javascript-sorting-visualiser/>

Why sorting Visualizer? :

Data structures and algorithms part of CS50 course was a challenging task for me.I was really happy when i was able solve the problem set for that week. In the week 3 algorithms chapter, I got to know about sorting algorithms like bubble sort,selection sort,merge sort, etc..That's when i realised how important it is to sort data in an efficient manner. So, when i thought about a project to do... I thought why don't i implement those algorithms.It would help me deep dive into the world of algorithms and it would help me understand the logic behind those algorithms.I considered it as a learning opportunity and went on with the project

Bubble sort,selection sort,insertion sort were realtively simple to implement.But Quick and Merge were challenging.The real challenge was to make the sorts visualize in a way that that others can comprehend what is happening with each sort. Along with understanding how to implemant the algorithms.I also got introduced to async, await functionalities of javascript.I had my fair share of struggles.But i am happy that finally,i was able to complete it.

The project showcases 6 buttons and 2 sliders
1) New Array: Creates new array with random numbers each time
2) Buttons to visualize each sorts
3) Slider for resizing the array
4) Slider for changing the speed of sort

I have also added colors on distince steps of sorting so that people can easily comprehend whats happening with each sort.I have disabled other sort buttons.resize-slider to eliminate conflicts

#### Bubble Sort:
Conceptually bubble-sort was relatively easier to understand.The process checks for the largest element of rest of the array and bubble it outward.
The challenge was to implement the how to visualize the sort.I ended up giving sorted elements green color and for the un-sorted white. To emphasis that the sorting is going on i added red color as a way to visualize searching through the array for the largest element.

#### Selection Sort:
selection sort was more or like a bubble sort in reverse.The code was searching for the lowest element in remaining array and push it to the front.I decided to go with same theme of color where green represents sorted array and red represents searching through the array.To signify elements being swapped, I added blue color for the swapping elements

#### Insertion Sort:
Insertion sort consider first element as sorted and place the next element accroding to its order.That means it is contantly grabbing the first element of un-sorted array and place it inside the sorted array where it belong.

#### Quick Sort:
Quick sort was the toughest sort I have done so far.I have gone through the **geeksforgeeks** documentation of quick-sort  several times to understand the sort.
It comprised of two functions **Quick sort-function** as well as **partition function** .It chooses a pivot point and pushes all elements greater than the pivot point after it.then sort it so that every thing is in order. I acheived the visualization using the same idea where i put green for sorted array and red for the process of sorting. As the elements in unsorted part is also had a displacement i chose to go with yellow to signify that the elements have moved but not yet sorted.I gave pivot points green to identify it.

#### Merge Sort:
Merge sort was similar to quick sort .It takes more discplined way of sorting an array i would say.It divides the array in to halves recursively and sort them by comparing them at the lowest level possible.Then merges and sorts them together to take it's final form.It was also difficult to implement but i found ti easier than quick sort..but not by much...Like my previous sorts,I chose to go with green for sorted array and red for the process of getting sorted.To signify that the array are semi-sorted i used yellow color.

#### Size Slider:
I saw a functionality of resizing the array on the project template.So i went on to implement it so that my project can be more interactive. I changed the createBars() function to take an argument. I attached an event listener to the slider and added tha value as a parameter to the function.That introduced a bug where bars where not showing when **New Array** button was clicked .I quickly solved it by adding them slider input inside the eventlistner attached to the array button

#### Speed Slider:
I implemented delay variable to take the value of slider value.But the speed was reducing when slider is at maximum .so i chose to add a substraction method to make the slider more straight-forward to work with.It works in between *1ms* to *100ms* delay. 

#### Design:
I added both sliders as a span element in the index.html file for not to add an additinal class for adding some padding to the slider.I used align-items: center to vertically align the slider inside the div.It was looking weird before.I selected both sliders using **span** and went on to declare padding. 

I chose to go with a darker shades to be easy on eyes.I didn't try to make it responsive on smaller screen.I wish to add a media-query and some alignment changes for better small-screen usability.It needs more work.I used boot-strap design for buttons.

I hope to implement notes on each algorithms in the website itself so that people can more info about each sorting algorithms in the website itself. I have hosted the website on github. And I will be updating it.
<https://sanishchirayath1.github.io/sorting-visualiser/>




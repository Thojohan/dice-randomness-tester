# dice-randomness-tester

<h1>Testing randomness of virtual dice</h2>

Prompted by several discussions on online board game platforms/communities, I decided to make this simple tester that let you roll a whole lot of virtual dice - in multiple batches - to see
how random they really are. You can also compare the simplest dice rolling code to using a crypto key generator, and even cheat!

<h2>How does it roll a die?</h2>
The “regular” dice roller use the native Math.random method in JavaScript. To get a die roll, 
the recipe is simply <b>Math.floor(Math.random() * range + 1))</b>. Math.random() creates a pseudo random float between 0 and 1 with tons of decimals. This decimal number is multiplied with the (die) range, all decimals are cut, and 1 is added to bring the value anywhere between 1 and the desired max as defined by the "range" property. So if you select a range of 6, that is equivalent to rolling a D6.

The cryptographically secure method uses the crypto interface where it generates a random 32bit crypto key, which is then converted to a float number and multiplied to be within the desired range.

<h2>Why are the tests batched?</h2>
In order to calculate randomness I use the P value in statistics. For the P value you need a zero hypothesis. In this case the zero
hypothesis is that the dice are random, which we assume by default. To get more reliable and stable P values it's better to batch the dice rolls into
many tests and use the average. If the dice are truly random you would expect the P-values to be all across the scale except from in 
the 0.05 range that would suggest that it is not likely that the dice are random.

<h2>The result</h2>
As you would expect, the more dice you roll, the more stable the result. I've chosen to colour code the bar chart to visualize this. In the extreme end of the scale, the bars are red if they deviate 25% or more from the average, and dark green if they deviate less than
1% from the average. Please note that this does not mean the result isn't random, with a low number of dice rolled this is totally 
expected. Don't confuse randomness with even distribution (although the distribution will even out percentage-wise with higher number of 
rolls).

<h2>Testing the method by CHEATING</h2>
To see whether this method could indeed pick up fishy business, I introduced a cheat mode. It’s very simple. Once all the virtual dice are rolled it goes through all the dice thrown and each has a X % chance to be converted into the max value. You can select the desired value from the drop down menu. This means the actual cheat rate is also somewhat prone to randomness. Of course the higher the number of rolls and batches, the more consistent it will cheat, and the more likely the P value will drop like a stone even with a mildly loaded die.

<h2>Development</h2>
This website is scaffolded with Vite, and coded in React + TypeScript. 
Other technologies used are React Styled Components, React Hook Form, 
Recharts, React Icons and the Incomplete gamma function from Stdlib

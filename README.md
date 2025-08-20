_See setup howto at end to obtain and run project source code on local computer._

# Question 1

The vanilla javascript code in javascript.js does the following:

* requests data and creating thumbnails using Promises
* executing the network requests in parallel
* creating the thumbnails in the same order as the Promises were created
* not waiting for all network requests to settle before creating thumbnails, thumbnails should be created as soon as all the Promises before them have settled

### Part 1

_Q: How would Angular and its built-in features, simply this?_

A:
By using subjects, observers and the concat operator of rxjs, see Question 1 Part 1
in sample app and a sample screenshot.

[<img src="https://raw.githubusercontent.com/elardus3/ng-rxjs/refs/heads/main/public/q1p1.webp" alt="Question 1 Part 1 screenshot" style="width:33%; height:auto;">](https://raw.githubusercontent.com/elardus3/ng-rxjs/refs/heads/main/public/q1p1.webp{target="_blank"})

### Part 2

_Q: If you were to change this to show thumbnails as they come in what would you
change (using the solution before)._

A: Use the merge operator instead of concat, see Question 1 Part 2 in sample app.

[<img src="https://raw.githubusercontent.com/elardus3/ng-rxjs/refs/heads/main/public/q1p2.webp" alt="Question 1 Part 2 screenshot" style="width:33%; height:auto;">](https://raw.githubusercontent.com/elardus3/ng-rxjs/refs/heads/main/public/q1p2.webp{target="_blank"})

### Part 3

_Q: If this code was behind a button how would I prevent the existing network calls
from completing / running (cancel them) or just to wait for the current calls to run._

A: Unsubscribe the observable, see Question 1 Part 3 in sample app.

[<img src="https://raw.githubusercontent.com/elardus3/ng-rxjs/refs/heads/main/public/q1p3.webp" alt="Question 1 Part 3 screenshot" style="width:33%; height:auto;">](https://raw.githubusercontent.com/elardus3/ng-rxjs/refs/heads/main/public/q1p3.webp{target="_blank"})

# Question 2

A: I created the sample layout using CSS grid, see Question 2 in sample app.

_All routes in the app are dark mode aware depending on the operating system default._

[<img src="https://raw.githubusercontent.com/elardus3/ng-rxjs/refs/heads/main/public/q2.webp" alt="Question 2 screenshot" style="width:33%; height:auto;">](https://raw.githubusercontent.com/elardus3/ng-rxjs/refs/heads/main/public/q2.webp{target="_blank"})

# Question 3

_Q: The current implementation of the multistep form includes multiple form sections
(eg: Type, Personal, Identification, Documentation, Finalize) rendered as adjacent
components inside a horizontally scrollable container. Only one step is visible at
a time through a constrained viewport, while the others remain hidden off-screen._

_Each step is represented as a separate form group or component, and the user
navigates through them using "Back" and "Next" buttons, with a visual stepper
indicating their current progress._

_From an Angular perspective, how might this implementation be improved in terms of
maintainability, performance, and best practices?_

A: My first question is whether user experience A/B testing reveals whether clients
prefer a "section" based viewport (eg all Type, Personal, Identification, etc info
grouped together, like in the current implementation screenshot). Or, if perhaps,
a "line-item" based approach is easier for end users to understand and keep focused
in the flow. That is, all the Type, Personal, Identification, etc data of a single
item is grouped together in the viewport.

Vertical scrolling is a more common user expected interaction than horizontal scrolling
on a desktop, and even moreso on mobile devices. See Question 3 in sample app.

[<img src="https://raw.githubusercontent.com/elardus3/ng-rxjs/refs/heads/main/public/q3.webp" alt="Question 3 screenshot" style="width:33%; height:auto;">](https://raw.githubusercontent.com/elardus3/ng-rxjs/refs/heads/main/public/q3.webp{target="_blank"})

# Question 4

_Q: In the interview, we discussed some of the challenges we’ve experienced with
working from home. With that in mind, do you have any recommendations for fostering
stronger mentorship and collaboration in a remote or hybrid environment?_

A: Regular status meetings could be held once or twice a week where progress is shown
and discussed via screen share. That way we are accountable to make progress towards
a milestone. A quick daily standup could also be implemented if not already. That is,
a very short meeting where every team member gives feedback about what was done the
previous day and what is planned that day. Blocking and risk factors could be mentioned
and mitigation perhaps discussed in a separate meeting with the parties involved.

As far as mentoring is concerned, perhaps knowledge transfer or emerging tech sessions
could be organized, say every second or third week. It could also be a time to discuss
testing, coding standards and so forth.

## How to setup project

Clone repository from GitHub.

```
git clone https://github.com/elardus3/ng-rxjs.git
```

Open new terminal in IDE to install project dependencies.

```
npm i
```

Start Angular project.

```
npm start
```

[Open project in browser.](http://localhost:4200/)

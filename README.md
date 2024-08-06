# English Learning Assistant

The website generates random English words, along with their definitions, synonyms, and pronunciations, to provide a comprehensive learning experience.

## Work-in-Progress & To-Dos

- [ ] Add SSR to prevent exposing the dictionary api key with client side calls and improve performance.
- [ ] Add favorite words.
- [ ] Add login w/ Google.
- [ ] Make every word on screen be clickable and when clicked show their definition as well.
- [x] Fix the vertical scrollbar pushing the page content to the side.
  - Options found so far:
    - Have a scrollbar showing up at all times with overflow:scroll, and since on mobile the scrollbar doesn't take up any space I need to account for it using media queries.
    - Calculating the width of the scrollbar and experimenting with a padding-left or a minus margin-right.
    - --> Hid the scrollbar but kept the functionality so it can no longer push the content.

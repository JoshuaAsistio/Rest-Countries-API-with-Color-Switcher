# About Project

    - This is a front end mentor project that displays details about all the countries in the world.
    - It has a color theme switcher functionality that would allow you to switch between two themes: Light or Dark.
    - It also has a search functionality where you can search for a certain country.
    - It has a filter functionality that would allow the user to filter out the countries depending on what region they belong to.

## Theme Switcher Functionality

    - If you clicked the dark mode/light mode button, the color will change to a light or dark color depending on what boolean value the darkMode state is on. I used inline color and background color styling in addition to conditional styling to achieve this. I thought about using classNames but decided that I don't want the added confusion in my css code.

## Search Mode Functionality

    - I implemented this by adding an onChange method in the input.
    - When the user types in anything in the input, it will filter the data array using the e.target.value. I made sure to turn the input and the country names into lowercase first, then I made a substring of the country names using the slice method and used that to compare to the e.target.value. After that, the new array we get will be set to the countries array and that is what's going to be rendered on the screen.

## Filter Functionality

    - The filter functionality works similarly to the search functionality except the filter functionality is filtering by region the country belongs in.
    - The dropdown menu is a div element that contains different buttons with names of different regions in the world inside them.
    - When the "Filter by Region" button is clicked, the state showDropdown would be set to true and the dropdown will be shown.
    - When one of the options is clicked, the data array will be filtered using the region and then the countries state is changed using the setCountries method. After that, we set the showDropdown state to false to hide the dropdown.

## Countries Buttons

    - I just mapped over the countries array to render the 250 objects in the data array into buttons with the image of the country's flag, the country's name, position, and capital inside it.
    - When you click on one of those buttons, the showModal state would be set to true and the currentCountry state would be set to the country button that was clicked.

## Modal

    - The modal would show up when the showModal state is set to true. It would disappear when you click close, which would set the showModal state to false.

## Additional stuff

    - If you want to try out this project, visit it in the [Challenge Hub of Front End Mentor.](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca/hub)

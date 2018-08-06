# Restaurant Reviews App Project

## Ways to Interact or Develop:
1. Fork the repository
2. Clone the repository to your machine *you will need a code editor*
3. Download the ZIP file and open the .html file from your file explorer in your favorite browser *static only, you will need to spin up a local server to interact with or develop this application*

## Description
A responsive restaurant reviews application with offline capabilities built as project number five of the Grow with Google Udacity Front End Web developer challenge

## Project Requirements
*The project challenge was to build an app that satisfies the following:*
- Insert Map API keys into the project
- Spin up a local server to use for development
- Convert the site to a responsive site that works with various devices
- Add accessibility (ARIA)
- Add a service worker (sw.js) so the application has offline functionality

## How I Built the App:
- I built the app with JavaScript, CSS, HTML, and Node.js

- Inserted Mapbox API Keys into main.js and restaurant_info.js files
- spun up a local server using Node.js command line and 'http-serve'
- Changed the port in dbhelper.js to my local host (which was 8080)
- Converted the site to responsive using flexbox in styles.css
- added tab index and image alt attributes to assist with accessibility (some of this was done dynamically in the    restaurant_info.js files)
- Added a service worker for offline capabilities - created sw.js and registered my sw before adding code for the
  specific resources to be cashed

## Instructions for Interacting:
1. Select a neighborhood
2. Select a cuisine
3. The app will filter the results and deliver them to you
4. Click on the restaurant you are interested in to find out more about it and read reviews

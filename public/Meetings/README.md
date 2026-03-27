# Meeting Screenshots

Place your Google Meet screenshots here!

## How to Add Screenshots

1. Add your meeting screenshot images to this folder (e.g., `meeting1.png`, `meeting2.png`, etc.)
2. Open `src/components/MeetingScreenshots/MeetingScreenshots.js`
3. Import your images at the top of the file:
   ```javascript
   import meeting1 from '../../Assets/Meetings/meeting1.png';
   import meeting2 from '../../Assets/Meetings/meeting2.png';
   // ... add more imports
   ```
4. Add them to the `meetingScreenshots` array:
   ```javascript
   const meetingScreenshots = [
     meeting1,
     meeting2,
     // ... add all your screenshots
   ];
   ```

The carousel will automatically display all your screenshots in an infinite scrolling animation!


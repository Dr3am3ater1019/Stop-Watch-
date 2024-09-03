# Stop-Watch-
Stopwatch App: A React Native app for tracking elapsed time. Features include start/stop and reset functions. Utilizes useState for state management and useEffect for updating the timer. 
# Stopwatch App

A simple stopwatch app built using React Native. The app allows you to start, stop, and reset a timer. It is designed to be a straightforward example of using React Native's `useState` and `useEffect` hooks.

## Features

- Start and stop the stopwatch
- Reset the stopwatch to zero
- Display the elapsed time in seconds

## Getting Started

### Prerequisites

- Node.js installed on your machine
- Expo CLI installed (`npm install -g expo-cli`)
- A React Native environment setup (Expo or React Native CLI)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/stopwatch-app.git
Navigate to the project directory:

bash
Copy code
cd stopwatch-app
Install dependencies:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm start
Open the app on an iOS or Android simulator/emulator or on your mobile device using the Expo Go app.

Usage
Start/Stop: Click the "Start" button to begin timing, and click it again to stop the timer.
Reset: Click the "Reset" button to set the timer back to zero.
Code Overview
App.js: Main application entry point, renders the Stopwatch component.
Stopwatch.js: Contains the stopwatch logic and UI.
License
This project is licensed under the MIT License - see the LICENSE file for details.

Contributing
Feel free to open issues and submit pull requests. Contributions are welcome!

python
Copy code

### Detailed Document

#### Overview

This document provides a line-by-line explanation of the `Stopwatch` component in React Native.

#### `Stopwatch.js` Code

```javascript
import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';: Import React library and hooks (useState, useEffect) used for managing state and side effects.
import { View, Text, Button, StyleSheet } from 'react-native';: Import components and styles from React Native library.
javascript
Copy code
const Stopwatch = () => {
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);
const Stopwatch = () => {: Defines the Stopwatch functional component.
const [time, setTime] = useState(0);: Initializes time state variable to 0, with a function setTime to update it.
const [running, setRunning] = useState(false);: Initializes running state variable to false, with a function setRunning to toggle the timer.
javascript
Copy code
    useEffect(() => {
        let interval;
        if (running) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);
        } else if (!running) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [running]);
useEffect(() => { ... }, [running]);: Sets up a side effect to start or stop the interval timer based on running state.
let interval;: Declares a variable to hold the interval ID.
if (running) { ... }: Checks if the stopwatch is running.
interval = setInterval(() => { ... }, 1000);: Sets up an interval to update the time every second.
setTime((prevTime) => prevTime + 1);: Updates the time state with the incremented value.
else if (!running) { clearInterval(interval); }: Clears the interval if the stopwatch is not running.
return () => clearInterval(interval);: Cleans up the interval when the component unmounts or running state changes.
javascript
Copy code
    return (
        <View style={styles.container}>
            <Text style={styles.timerText}>{time} seconds</Text>
            <View style={styles.buttonContainer}>
                <Button title={running ? "Stop" : "Start"} onPress={() => setRunning(!running)} />
                <Button title="Reset" onPress={() => setTime(0)} />
            </View>
        </View>
    );
};
return (<View style={styles.container}>...</View>);: Returns the JSX to render the stopwatch UI.
<Text style={styles.timerText}>{time} seconds</Text>: Displays the elapsed time in seconds.
<View style={styles.buttonContainer}>: Container for buttons.
<Button title={running ? "Stop" : "Start"} onPress={() => setRunning(!running)} />: Button to start/stop the timer, toggles the running state.
<Button title="Reset" onPress={() => setTime(0)} />: Button to reset the timer to zero, updates time state to 0.
javascript
Copy code
const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    timerText: {
        fontSize: 48,
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%',
    }
});
const styles = StyleSheet.create({ ... });: Defines the styles for the component.
container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }: Centers content vertically and horizontally, with a white background.
timerText: { fontSize: 48, marginBottom: 20 }: Styles for the timer text, with large font size and margin below.
buttonContainer: { flexDirection: 'row', justifyContent: 'space-between', width: '60%' }: Aligns buttons in a row with space between them.

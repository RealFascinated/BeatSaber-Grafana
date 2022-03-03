# BeatSaber-Grafana
I wanted to store all of my historical data in Grafana, so I made this.
It's fairly easy to setup if you have the prerequisites.

# Prerequisites
- Grafana
- Prometheus
- Node (I used v17)
- Git (to clone the repo)

# Setup

Clone the Repo
```bash
git clone https://github.com/RealFascinated/BeatSaber-Grafana.git
```
Cd into the newly cloned directory
```bash
cd BeatSaber-Grafana
```
Install the dependencies
```bash
npm i
# or
yarn
```
Load the program
```bash
node .
# or (if you have/use pm2)
pm2 start ./src/index.js
```
Add the metrics to Prometheus (My config below)
```bash
- job_name: "beatsaber"
    static_configs:
      - targets: ["<your machines ip>:8084"]
```
Add the dashboard to Grafana
```
Import the dashboard using the provided `dash.json` file from the repo
```
If all is good, it should just start working.

# Todo
Just a todo list on what I have planned
- Make the pp min and max ranges 10 below the min and 10 above the max so you can actually see the small changes in pp
- Make it so the inverted graphs don't show negative values
- Make the average ranked accuracy graph min and max 5% above and below the current accuracy similar to the pp

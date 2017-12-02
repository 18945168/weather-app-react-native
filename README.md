# Weather-App-React-Native

iOS app for comparing weather forecast with historical data built with [react-native](https://facebook.github.io/react-native/).
The source code is published for knowledge sharing purposes. This repo in particular is a fork for it to run on [Expo](https://expo.io)

# Run it on Expo

- Open https://expo.io/@community/weather-app-react-native

# Run it on the App Store
<table>
    <tr>
        <td><a href="https://www.youtube.com/watch?v=Z0eKfLKoo7w"><img src="http://i.giphy.com/Ow17HWlGTmtfG.gif" alt="Weather-App-React-Native"/></a></td>
        <td><a title="iOS app for comparing weather forecast with historical data" href="https://itunes.apple.com/us/app/zowni/id1140299292?ls=1&mt=8"><img src="http://i.imgur.com/VWmlW7M.png" alt="Get invite on Apple TestFlight"/></a></td>
    </tr>
</table>


* [Veiw full screencast on YouTube](https://www.youtube.com/watch?v=Z0eKfLKoo7w)
* [Download from AppStore](https://itunes.apple.com/us/app/zowni/id1140299292?ls=1&mt=8)


# Used components

* react-native
* redux
* d3.js (interpolate, scale, shape)
* react-native-svg

Check `package.json` for details

# Used API

* [DarkSky](https://darksky.net/dev/) for weather forecast and historical data
* [Mapzen](https://mapzen.com/developers/sign_in) for city search

# Install

* clone repo
* type`$ npm install`
* create file `./credentials.json`

```
{
    "DARK_SKY_API_KEY": "{DARK_SKY_API_KEY}",
    "MAPZEN_API_KEY": "{MAPZEN_API_KEY}"
}
```
* `npm i -g exp`
* `exp start --ios`

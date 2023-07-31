# Geauxfur | Courier Web-App

Courier App designed to ship items with ease.

![overview](https://media.giphy.com/media/fV8VzjDkrdrHcQFhrG/giphy.gif)

# Walkthrough

View a tour of the website. _Live site no longer in service_

## Step 1

The user is presented with an option to either send or recieve items.
![titlepage](https://s3.amazonaws.com/personal-uploader/LandingPage.png)

## Login

After deciding which path they would like to start, the user is asked to log in using Auth0's log in functionality.
![loginPage](https://s3.amazonaws.com/personal-uploader/LoginPage.png)

## Dashboard

Once the user is logged in, they are presented with the main map showing their current location.
A dialog box sits in the main screen of the map waiting for the user to begin.
![dashboard](https://s3.amazonaws.com/personal-uploader/DashboardMap.png)

## Questions

The user is prompted with a few questions to determine the address, the type of item, and weight. Once all questions have been answered, a calculation is made to determine a shipping cost.

![questionWalkthrough](https://media.giphy.com/media/LNl5t0S1ADImVPyoy1/giphy.gif)

Each question is conditionally rendered based on the index of the array the map is pulling from and by the users question number.

```
const displayQuestions = questions.map((value, index) => {
      if (count === index) {
        return value;
      }
      return null;
    });
```

## Stripe Integration

The payment platform chosen to process orders were completed using the Stripe API.

![overview](https://media.giphy.com/media/jn2364VCqNN85BTDWR/giphy.gif)

## On Route

Once the user has completed the payment, different function calls are made to grab the users location, the drivers location, plot the points of the route of the driver, and paint it on the users map.

```
findDistance(lat1, lon1, lat2, lon2) {
    if (lat1 === lat2 && lon1 === lon2) {
      return 0;
    } else {
      var radlat1 = (Math.PI * lat1) / 180;
      var radlat2 = (Math.PI * lat2) / 180;
      var theta = lon1 - lon2;
      var radtheta = (Math.PI * theta) / 180;
      var dist =
        Math.sin(radlat1) * Math.sin(radlat2) +
        Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
      if (dist > 1) {
        dist = 1;
      }
      dist = Math.acos(dist);
      dist = (dist * 180) / Math.PI;
      dist = dist * 60 * 1.1515;

      return Math.round(dist * 100) / 100;
    }
  }
```

```
callGeauxfur() {
  const { updateCardsClass, drawRoute, updateActivePanel } = this.props;
  await updateCardsClass("cardsActive");
  await drawRoute();
  await updateActivePanel(["activeRoute", "activeDriverContainer-left"]);
  this.setState({ displayTotal: "hidden" });
}
```

![overview](https://media.giphy.com/media/fV8VzjDkrdrHcQFhrG/giphy.gif)

## Profile Page

Once everything is said and done, the user can choose to update their information and give drivers reviews.

![profilepage](https://s3.amazonaws.com/personal-uploader/ProfilePage.png)

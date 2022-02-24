# The-A68-Market
 
## About The A68 Market

The A68 Market is a fictional black market that exists within the Star Wars Universe. Building on that, I was interested in simulating a web app that "bounty hunters" and "shady individuals" might frequent for their weapon needs. As the data required for this was insufficient on most Star Wars APIs, I created a Firebase database and filled that in with both weapons from the Star Wars Universe, and my own creations.


### Built With
* [React.js](https://reactjs.org/)
* [Firebase](https://firebase.google.com/)


## Usage
* Browse the different collections of weapons available:
*** Rifles
*** Cannons
*** Pistols
* If there is a specific weapon you would like to find, enter it within the search bar.

* As an additional aesthetic feature, a Bounties page has been added
The page consists of a carousel constantly displaying a list of different character types and their associated bounties. Hovering over each will showcase their value.

## Difficulties

### Firebase REST API
One of the issues faced was that Firebase is usually connected through the Firestore. As one of the requirements for this project was to use REST APIs, I had to search for the API address of my own database. 

 ```sh
   const bountyApiCall = async () => {
    try {
      const res = await fetch(
        "https://firestore.googleapis.com/v1/projects/star-wars-weapons-info/databases/(default)/documents/bounties"
      );
      const bountJson = await res.json();
      for (const element of bountJson.documents) {
        const newObject = [];
        newObject.name = element.fields.name.stringValue;
        newObject.url1 = element.fields.url1.stringValue;
        newObject.bounty = element.fields.bounty.integerValue;

        setBountyData((prevState) => [...prevState, newObject]);
      }
    } catch (err) {
      console.log(err.message);
    }
  };
   ```
   
This is an example; the REST API for the bounties page. After retrieving the data, I had to restructure the data into a format that the app could read easier.

### Carousel
The Carousel was created by mapping the data taken from the bounties page, and wrapping each element in SplideJS's <Splide> tags.

   ```sh
 <SplideSlide
              data-aos="fade-right"
              data-aos-easing="ease-in-out"
              data-aos-delay="50"
              data-aos-duration="1000"
            >
              <div className={styles.bountyCard}>
                <img
                  className={styles.bountyImage}
                  src={element.url1}
                  alt=""
                ></img>
                <div className={styles.bountyInfo}>
                  <h2 className={styles.bountyName}>{element.name}</h2>
                  <h3 className={styles.bountyPrice}>
                    {element.bounty} CREDITS
                  </h3>
                </div>
              </div>
            </SplideSlide>
          );
  ```

## Acknowledgments
* [SPLIDEJS](https://splidejs.com/)
* [AOS](https://github.com/michalsnik/aos)

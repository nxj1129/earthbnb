import { Button } from "@material-ui/core";
import React from "react";
import "../css/SearchPage.css";
import SearchResult from "./SearchResult.js";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>62 stays · 26 August to 30 August · 2 guest</p>
        <h1>Stays Nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>
      <SearchResult
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
        location="Private room in center of London"
        title="Stay at this spacious Edwardian House"
        description="1 guest · 1 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Kitchen · Free parking · Washing Machine"
        star={4.73}
        price="£30 / night"
        total="£117 total"
      />
      <SearchResult
        img="https://www.expatkings.com/wp-content/uploads/2018/10/Airbnb-rental-tips.-Hostmaker-1-620x349.jpg"
        location="Private room in center of London"
        title="Independent luxury studio apartment"
        description="2 guest · 3 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Kitchen"
        star={4.3}
        price="£40 / night"
        total="£157 total"
      />
      <SearchResult
        img="https://www.smartertravel.com/uploads/2017/07/Untitled-design-8.jpg"
        location="Private room in center of London"
        title="London Studio Apartments"
        description="4 guest · 4 bedroom · 4 bed · 2 bathrooms · Free parking · Washing Machine"
        star={3.8}
        price="£35 / night"
        total="£207 total"
      />
      <SearchResult
        img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.irvinecompanyapartments.com%2Frental-living%2Fwp-content%2Fuploads%2F2018%2F09%2Fstudio-apartment.jpg&f=1&nofb=1"
        location="Private room in center of London"
        title="30 mins to Oxford Street, Excel London"
        description="2 guest · 3 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Kitchen"
        star={4.1}
        price="£55 / night"
        total="£320 total"
      />
      <SearchResult
        img="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fi.dmarge.com%2F2016%2F03%2F004-london-loft-apartment-sigmar-1050x700.jpg&f=1&nofb=1"
        location="Private room in center of London"
        title="Spacious Peaceful Modern Bedroom"
        description="3 guest · 1 bedroom · 3 bed · 1.5 shared bathrooms · Wifi · Dry Cleaning"
        star={5.0}
        price="£60 / night"
        total="£450 total"
      />
      <SearchResult
        img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fkeyassets.timeincuk.net%2Finspirewp%2Flive%2Fwp-content%2Fuploads%2Fsites%2F8%2F2015%2F10%2Fneo-bankside-apartment.jpg&f=1&nofb=1"
        location="Private room in center of London"
        title="The Blue Room In London"
        description="2 guest · 1 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Kitchen"
        star={4.23}
        price="£65 / night"
        total="£480 total"
      />
      <SearchResult
        img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fodis.homeaway.com%2Fodis%2Flisting%2F5f7fc9f6-4630-4d09-b8cf-6ac3f65edca1.c10.jpg&f=1&nofb=1"
        location="Private room in center of London"
        title="5 Star Luxury Apartment"
        description="3 guest · 1 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Free parking"
        star={4.33}
        price="£90 / night"
        total="£650 total"
      />
    </div>
  );
}

export default SearchPage;

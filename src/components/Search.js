import React from "react";
import "./css/Search.css";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange, DateRangePicker } from "react-date-range";
import { useState } from "react";
import { People } from "@material-ui/icons";
import { Button } from "@material-ui/core";

function Search() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  return (
    <div className="search">
      <div className="search__web">
        <DateRangePicker
          ranges={[selectionRange]}
          months={2}
          direction="horizontal"
          onChange={handleSelect}
        />
      </div>
      <div className="search__mob">
        <DateRange
          className="search__mob"
          ranges={[selectionRange]}
          onChange={handleSelect}
        />
      </div>
      <h4>
        Number of guests <People />
      </h4>
      <input min={1} defaultValue={2} type="number" />
      <Button>Search Airbnb</Button>
    </div>
  );
}

export default Search;

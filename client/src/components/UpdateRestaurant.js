import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import RestaurantFinder from "../apis/RestaurantFinder";

const UpdateRestaurant = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("");

  const { id } = useParams();
  let history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      const response = await RestaurantFinder.get(`/${id}`);
      console.log(response.data.data);
      setName(response.data.data.restaurant.name);
      setLocation(response.data.data.restaurant.location);
      setPriceRange(response.data.data.restaurant.price_range);
    };
    fetchData();
  }, [id]);

  const submitHandler = async (e) => {
    e.preventDefault();
    const updatedRestaurant = await RestaurantFinder.put(`/${id}`, {
      name,
      location,
      price_range: priceRange,
    });
    console.log(updatedRestaurant);
    history.push("/");
  };

  return (
    <div>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="name"
            type="text"
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            id="location"
            type="text"
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label htmlFor="price_range">Price Range</label>
          <select
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            className="form-control"
            id="price_range"
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>

        <button
          onClick={submitHandler}
          className="btn btn-primary"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdateRestaurant;

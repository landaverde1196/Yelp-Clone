import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { RestaurantsContext } from "../context/RestaurantsContext";
import RestaurantFinder from "../apis/RestaurantFinder";
import Reviews from "./Reviews";
import AddReview from "./AddReview";

const RestaurantDetail = (props) => {
  const { id } = useParams();
  const { selectedRestaurant, setSelectedRestaurant } = useContext(
    RestaurantsContext
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RestaurantFinder.get(`/${id}`);
        console.log(response);
        setSelectedRestaurant(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [id, setSelectedRestaurant]);

  return (
    <div>
      {selectedRestaurant && (
        <>
          <h1 className="display-1 text-center">
            {selectedRestaurant.restaurant.name}
          </h1>

          <div className="mt-3">
            <Reviews reviews={selectedRestaurant.reviews} />
          </div>
          <AddReview />
        </>
      )}
    </div>
  );
};

export default RestaurantDetail;

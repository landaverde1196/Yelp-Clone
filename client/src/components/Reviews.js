import React from "react";
import StarRating from "./StarRating";

const Reviews = (props) => {
  return (
    <div className="row row-cols-3 mb-2">
      {props.reviews.map((review) => {
        return (
          <div
            key={review.id}
            className="card text-white bg-primary mb-3 mr-4"
            style={{ maxWidth: "30%" }}
          >
            <div className="card-header d-flex justify-content-between">
              <span>{review.name}</span>
              <span>
                <StarRating rating={review.rating} />
              </span>
            </div>
            <div className="card-body">
              <p className="card-text">{review.review}</p>
            </div>
          </div>
        );
      })}

      {/* <div
        className="card text-white bg-primary mb-3 mr-4"
        style={{ maxWidth: "30%" }}
      >
        <div className="card-header d-flex justify-content-between">
          <span>Alex</span>
          <span>
            <StarRating rating={3.5} />
          </span>
        </div>
        <div className="card-body">
          <p className="card-text">The food was awesome!</p>
        </div>
      </div>

      <div
        className="card text-white bg-primary mb-3 mr-4"
        style={{ maxWidth: "30%" }}
      >
        <div className="card-header d-flex justify-content-between">
          <span>Alex</span>
          <span>
            <StarRating rating={3.5} />
          </span>
        </div>
        <div className="card-body">
          <p className="card-text">The food was awesome!</p>
        </div>
      </div>

      <div
        className="card text-white bg-primary mb-3 mr-4"
        style={{ maxWidth: "30%" }}
      >
        <div className="card-header d-flex justify-content-between">
          <span>Alex</span>
          <span>
            <StarRating rating={3.5} />
          </span>
        </div>
        <div className="card-body">
          <p className="card-text">The food was awesome!</p>
        </div>
      </div>

      <div
        className="card text-white bg-primary mb-3 mr-4"
        style={{ maxWidth: "30%" }}
      >
        <div className="card-header d-flex justify-content-between">
          <span>Alex</span>
          <span>
            <StarRating rating={3.5} />
          </span>
        </div>
        <div className="card-body">
          <p className="card-text">The food was awesome!</p>
        </div>
      </div> */}
    </div>
  );
};

export default Reviews;

-- postgresqltutorial.com
-- Create table POSTGRES
CREATE TABLE reviews (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    restaurant_id BIGINT NOT NULL REFERENCES restaurants(id),
    name VARCHAR(50) NOT NULL,
    review TEXT NOT NULL,
    rating INT check(
        rating >= 1
        and rating <= 5
    )
);

-- PSQL aggregate functions  --
-- select as (name)---------------------------------
select
    count(rating) as rating_count
from
    reviews;

-- 2------------------------------------------------------------------
select
    trunc(avg(rating), 2) as ratings
from
    reviews
where
    restaurant_id = 2;

-- //group by---------------------------------------------------------------
select
    name,
    count(name)
from
    reviews
group by
    name;

--2-------------------------------------------------------------
select
    restaurant_id,
    avg(rating)
from
    reviews
group by
    restaurant_id;

-- trunc decimals---------------------------------------------------------
select
    trunc(avg(rating), 2) as avg_rating
from
    reviews;

--- inner Joins  ---------------------------------------------------------
select
    *
from
    restaurants
    inner join reviews on restaurants.id = reviews.restaurant_id;

--- inner Joins 2 (left join) ---------------------------------------------------------
select
    *
from
    restaurants
    left join reviews on restaurants.id = reviews.restaurant_id;

--- Left join (big query)--------------------------------    
select
    *
from
    restaurants
    left join (
        select
            restaurant_id,
            count(*),
            trunc(avg(rating), 1) as average_rating
        from
            reviews
        group by
            restaurant_id
    ) reviews on restaurants.id = reviews.restaurant_id;
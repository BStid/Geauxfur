SELECT * FROM
(SELECT * 
    FROM reviews
    WHERE reviewed_user_id = $1) AS reviews
JOIN userz on reviews.user_id = userz.id;
UPDATE userz
SET current_longitude = $1, current_latitude = $2
WHERE auth_id = $3;

-- SELECT * FROM userz WHERE auth_id = $3;
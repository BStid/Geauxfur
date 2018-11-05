UPDATE userz
SET dob = $1, email = $2, phone = $3, gender = $4, first_name = $5, last_name = $6
WHERE auth_id = $7;

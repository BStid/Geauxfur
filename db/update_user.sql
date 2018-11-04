UPDATE userz
SET dob = $1, email = $2, phone = $3, gender = $4
WHERE auth_id = $5;

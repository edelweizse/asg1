# Auth Controller
 ## Register
 parse data
 checks if user exists
 checks if all poles are not empty
 hashing password
 adding user into db
 returns Success Register
 
 ## Login
 parse data
 checks if user exists
 compares hash and password
 creates jwt token
 signs it with secret key
 creates cookie with signed jwt
 returns Success Login
 
 ## User
 checks jwt in cookie
 parse it
 returns user object from database
 
 ## Logout
 clears cookie

# Routes
Creates all routs for methods in controller

# Connection
Establishes connection with db/creating db
Migrates from user.go

# User
creates type User with gorm

# Main
Connection with db
creating fiber app object
CORS parameters
setup routes
listens port 8000
To run backend server:

npm start

To test via thunder client:
--> Signup
POST --> http://localhost:3000/api/signup
Body --> Form --> fill in username, email, password

--> Signin
POST --> http://localhost:3000/api/signin
Body --> Form --> fill in account(username or email), password

--> Upload videos
POST --> http://localhost:3000/api/video
Body --> Form --> fill in name, videopath

--> Delete account
POST --> http://localhost:3000/api/delete
Body --> Form --> fill in email

--> All accounts
GET --> http://localhost:3000/api/findall

--> Like
GET --> http://localhost:3000/api/video-like/videopath

--> Dislike
GET --> http://localhost:3000/api/video-dislike/videopath
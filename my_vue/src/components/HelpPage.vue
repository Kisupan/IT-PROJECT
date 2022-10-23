<template>
  <body>
    <div class="container">
      <div class="row clearfix">
        <div class="col-md-12 column">
          <div class="row">
            <div class="col-md-4">
              <div class="thumbnail">
                <img
                  alt="300x200"
                  src="resources/help1.png"
                  width="200"
                  height="100"
                />
                <div class="caption">
                  <h3>how to change an account?</h3>
                  <p>
                    if you want to change an account please sign out first, and
                    sign in or sign up a new account, if you want to delete an
                    account,please contact the administer,she will help you to
                    delete your account.
                  </p>
                  <br /><br />
                  <p>
                    <router-link
                      class="btn btn-outline-primary"
                      to="/profile"
                      role="button"
                      target="_blank"
                      >my account</router-link
                    >
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="thumbnail">
                <img
                  alt="300x200"
                  src="resources/help4.png"
                  width="100"
                  height="100"
                /><img
                  alt="300x200"
                  src="resources/help2.png"
                  width="100"
                  height="100"
                />
                <div class="caption">
                  <h3>How to upload the vedio ?</h3>
                  <p>
                    To upload a vedio, click the acount and find the button
                    (upload the vedio), and then, you can upload the vedio in
                    your computer
                  </p>
                  <br /><br /><br /><br />
                  <p>
                    <router-link
                      class="btn btn-outline-primary"
                      to="/upload"
                      role="button"
                      target="_blank"
                      >Upload Video</router-link
                    >
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="thumbnail">
                <img
                  alt="300x200"
                  src="resources/help4.png"
                  width="100"
                  height="100"
                /><img
                  alt="300x200"
                  src="resources/help3.png"
                  width="100"
                  height="100"
                />
                <div class="caption">
                  <h3>How to see uploaded vedio?</h3>
                  <p>
                    Go to your own account, it is on the top right of the page,
                    go to the first label "my vedio" and then all your uploaded
                    vedio is here
                  </p>
                  <br /><br /><br /><br />
                  <p>
                    <router-link
                      class="btn btn-outline-primary"
                      to="/profile"
                      role="button"
                      target="_blank"
                      >my Video</router-link
                    >
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row clearfix">
        <div class="col-md-12 column">
          <div class="row">
            <div class="col-md-4">
              <div class="thumbnail">
                <img
                  alt="300x200"
                  src="resources/help4.png"
                  width="100"
                  height="100"
                />
                <div class="caption">
                  <h3>How to change your account data</h3>
                  <p>
                    if you want to see vedio ,lika a vedio or see your account
                    page,you should log first, see the picture above. To sign
                    in, you need to provide account name and password. To
                    register , you need to provide email account name ,genderand
                    password
                  </p>
                  <br /><br />
                  <p>
                    <router-link
                      class="btn btn-outline-primary"
                      to="/profile"
                      role="button"
                      target="_blank"
                      >my account</router-link
                    >
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
export default {
  name: "TermPage",
};
</script>
<style>
.top {
  margin-left: 20px;
  margin-top: 10px;
}

.carousel-item {
  height: 32em;
  background: rgb(4, 0, 248);
  color: white;
  position: relative;
}

.carousel-item-container {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding-bottom: 50px;
  padding-left: 100px;
}

.video-title {
  text-decoration: none;
  color: white;
}

.overlay-image {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  background-position: center;
  background-size: cover;
  opacity: 0.5;
}

#search-bar {
  width: 400px;
}

.recommend-videos-area {
  margin-top: 30px;
}

.col {
  padding: 30px;
}

.row {
  padding-left: 15px;
}

.account-avatar {
  border-radius: 50%;
}

.channel-items {
  grid-template-columns: repeat(9, 1fr);
  padding-right: 20px;
  display: grid;
  width: 100%;
  grid-auto-flow: column;
  grid-column: span 4;
  grid-gap: 10px;
  border-right: 1px solid var(--line_regular);
}

.channel-link {
  font-size: large;
  height: 22px;
  text-decoration: none;
  line-height: 22px;
  display: inline-block;
  box-sizing: content-box;
  width: 90%;
  height: 100%;
  border: 1px solid var(--line_light);
  border-radius: 10px;
  background-color: rgb(86, 121, 182);
  color: white;
  text-align: center;
  font-weight: 400;
  transition: background-color 0.3s, color 0.3s;
}

.homepage-channel-navigation-bar {
  padding-left: 30px;
  padding-top: 40px;
}

a:hover {
  background-color: #fff;
  color: black;
}

.foot-homepage {
  background-color: aliceblue;
  height: 200px;
}

#homepage-carousel {
  padding-top: 20px;
}

.foot-logo {
  padding-top: 60px;
}

.foot-btn {
  display: inline-block;
}

.btn-light {
  color: black;
  background-color: aliceblue;
}

.btn-light:hover {
  background-color: white;
  color: black;
  border-color: rgb(86, 121, 182);
  transition: background-color 0.3s, color 0.3s;
}

* {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
}

.top li {
  float: left;
  width: 100px;
  height: 50px;
  margin-right: 10px;
  margin-top: 10px;
}

.top la {
  float: left;
  width: 300px;
  height: 50px;
  margin-right: 10px;
  margin-top: 10px;
  margin-left: 100px;
}

.top le {
  float: left;
  width: 50px;
  height: 50px;
  margin-right: 400px;
  margin-top: 10px;
  margin-left: 100px;
}

.mybox {
  max-width: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.banner {
  width: 1200px;
  height: 50px;
  margin: 10px auto;
}

.banner li {
  width: 150px;
  height: 30px;
  margin-left: 10px auto;
}

.box {
  width: 1200px;
  margin: 10px auto;
  height: 300px;
  margin-bottom: 20px;
}

.box li {
  float: left;
  width: 300px;
  height: 300px;
  margin-right: 150px;
}

.box la {
  float: left;
  width: 300px;
  height: 300px;
}

.box le {
  float: left;
  width: 50px;
  height: 30px;
  margin-top: 200px;
  margin-left: 40px;
}

.bar {
  padding-left: 30px;
  padding-top: 40px;
}

.footer {
  height: 30px;
  margin-top: 10px;
}

.footer li {
  float: left;
  width: 30px;
  height: 30px;
  margin-right: 10px;
}
</style>
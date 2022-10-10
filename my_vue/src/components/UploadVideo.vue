<template>
    <div class="upload-body">
        <div class="account-area">
            <nav class="navbar bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="profilepage.html">
                        <img src="resources/ZCC.JPG" alt="" width="100" height="100"
                            class="d-inline-block align-text-center" style="border-radius: 50%;">
                        <p class="web-name" style="color:black; display: inline-block;">Congcong Zhao</p>
                    </a>
                </div>
            </nav>
        </div>

        <div class="upload-area">
            <div class="video-file-container">
                <input type="file" class="video-file" v-on="myfile" accept="video/">
            </div>
            <div class="video-info-container">
                <form class="video-info">
                    Title: <input type="text" class="video-title" maxlength="100" v-model="title"> <br>
                    <!-- Category: <select id="inputCate" class="cate">
                        <option selected>Please select</option>
                        <option>Sports</option>
                        <option>Music</option>
                        <option>Food</option>
                        <option>Fashion</option>
                        <option>Technology</option>
                        <option>News</option>
                        <option>Pet</option>
                        <option>Travel</option>
                    </select> -->
                </form>
            </div>
            <div class="video-cover">
                <input type="file" class="video-cover-image" accept="image/*">
            </div>
            <div class="submit-container">
                <button type="submit" class="btn btn-primary" @click="uploadVideo()" id="upload-button">Submit</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "UploadVideo",

    data() {
        return {
            uploadVideoData: {
                _id: "",
                title: "",
                myfile: ""
            }
        }
    },

    methods: {
            getProfileInfoServer: function () {
                var that = this;
                this.axios.get('http://localhost:3000/api/findall', {
                    params: {
                        email: ""
                    }
                })
                    .then(function (response) {
                        // handle success
                        var result = response.data;
                        console.log(result);
                        if (result.status == 200) {
                            that.uploadVideoData._id = result._id;
                        }
                    })
                    .catch(function (error) {
                        // handle error
                        console.log(error);
                    })
                    .then(function () {
                        // always executed
                    });
            },

            uploadVideo: function () {
                this.axios.post('http://localhost:3000/api/video', {
                    _id: this.uploadVideoData._id,
                    title: this.uploadVideoData.title,
                    file: this.uploadVideoData.myfile
                })
                    .then(function (response) {
                        console.log(response);
                        if (response.status == 201) {
                            alert("Update successful!");
                        } else {
                            alert("Update Unsuccessful, please try again!");
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
        },
}
</script>

<style>
    .account-area {
        padding-top: 30px;
        margin-left: 70px;
        margin-right: 70px;
    }

    #upload-button {
        margin-bottom: 30px;
    }

    .upload-area {
        margin-top: 40px;
        margin-left: 450px;
    }

    .video-file-container {
        border-style: solid;
        width: 500px;
        height: 400px;
        border-width: 2px;
        border-color: black;
    }

    .video-info-container {
        margin-top: 50px;
        margin-left: 130px;
    }

    .submit-container {
        margin-top: 30px;
        margin-left: 190px;
    }

    .video-cover-image {
        margin-top: 30px;
        margin-left: 150px;
    }


    .video-file {
        margin-top: 180px;
        margin-left: 150px;
    }

    .upload-body {
        background-image: url(../assets/7171662534038_.pic_hd.jpg);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center top;
        background-attachment: fixed;
    }
</style>
<template>
    <div class="profile-intro-upload">
        <div class="nav-area">
            <nav class="navbar bg-light">
                <div class="container-fluid">
                    <div class="navbar-brand" href="profilepage.html" v-for="info in infoList" :key="info._id">
                        <img src="/resources/ZCC.JPG" alt="" width="100" height="100"
                            class="d-inline-block align-text-center" style="border-radius: 50%;">
                        <p class="web-name" style="color:black; display: inline-block;">
                            {{info.username}}</p>
                    </div>
                    <div class="text-container">
                        <p v-for="info in infoList" :key="info._id">
                            {{info.intro}}
                        </p>
                    </div>
                    <div class="upload">
                        <a class="btn btn-outline-primary" href="uploadpage.html" role="button"
                            target="_blank">Upload Video</a>
                    </div>
                </div>
            </nav>
        </div>


        <div class="tabs">
            <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="my-video-tab" data-bs-toggle="tab"
                        data-bs-target="#my-video-tab-pane" type="button" role="tab"
                        aria-controls="my-video-tab-pane" aria-selected="true">My Video</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="favourite-tab" data-bs-toggle="tab"
                        data-bs-target="#favourite-tab-pane" type="button" role="tab"
                        aria-controls="favourite-tab-pane" aria-selected="false">Favourite</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="intro-tab" data-bs-toggle="tab" data-bs-target="#intro-tab-pane"
                        type="button" role="tab" aria-controls="intro-tab-pane"
                        aria-selected="false">Profile</button>
                </li>
            </ul>
            <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="my-video-tab-pane" role="tabpanel"
                    aria-labelledby="my-video-tab" tabindex="0">
                    <div class="my-videos-area">
                        <div class="row row-cols-4">
                            <div class="col" v-for="video in myVideoList" :key="video._id">
                                <div class="card">
                                    <a href="blankpage.html" target="_blank">
                                        <img src="resources/ZCC.JPG" class="card-img-top" alt="...">
                                    </a>
                                    <div class="card-body">
                                        <h5>{{video.title}}</h5>
                                        <p>{{video.author}}</p>
                                        <p>{{video.date}}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="favourite-tab-pane" role="tabpanel" aria-labelledby="favourite-tab"
                    tabindex="0">
                    <div class="favourite-videos-area">
                        <div class="row row-cols-4">
                            <div class="col" v-for="video in favouriteVideoList" :key="video._id">
                                <div class="card">
                                    <a href="blankpage.html" target="_blank">
                                        <img src="resources/ZCC.JPG" class="card-img-top" alt="...">
                                    </a>
                                    <div class="card-body">
                                        <h5>{{video.title}}</h5>
                                        <p>{{video.author}}</p>
                                        <p>{{video.date}}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="intro-tab-pane" role="tabpanel" aria-labelledby="intro-tab"
                    tabindex="0">
                    <ul type="none">
                        <li class="profile-info" v-for="info in infoList" :key="info._id">
                            <!-- {{info.email}} - {{info.password}} - {{info.username}} - {{info.dateOfBirth}} - {{info.gender}} -->
                            E-Mail: {{info.email}} <br>
                            Password: {{info.password}} <br>
                            Username: {{info.username}} <br>
                            Date of birth: {{info.dateOfBirth}} <br>
                            Gender: {{info.gender}} <br>
                        </li>
                    </ul>
                    <!-- Button trigger modal -->
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                        data-bs-target="#manage-profile">
                        Manange profile
                    </button>
                    <div class="modal fade" id="manage-profile" tabindex="-1" aria-labelledby="myModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="myModalLabel">Manage profile</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form class="row g-3">
                                        <div class="col-md-12">
                                            <label class="form-label" for="inputPhoto">Photo</label>
                                            <input type="file" class="form-control" id="inputPhoto">
                                        </div>
                                        <div class="col-md-12">
                                            <label for="inputEmail4" class="form-label">Email</label>
                                            <input type="email" class="form-control" id="inputEmail4"
                                                v-model="profileFormData.email" disabled>
                                        </div>
                                        <div class="col-6">
                                            <label for="inputUsername" class="form-label">Username</label>
                                            <input type="text" class="form-control" id="inputUsername"
                                                v-model="profileFormData.username" maxlength="16">
                                        </div>
                                        <div class="col-md-6">
                                            <label for="inputPassword4" class="form-label">Password</label>
                                            <input type="password" class="form-control" id="inputPassword4"
                                                v-model="profileFormData.password" maxlength="16">
                                        </div>
                                        <div class="col-md-6">
                                            <label for="inputDOB" class="form-label">DateOfBirth</label>
                                            <input type="date" class="form-control" id="inputDOB"
                                                v-model="profileFormData.dateOfBirth">
                                        </div>
                                        <div class="col-md-6">
                                            <label for="inputGender" class="form-label">Gender</label>
                                            <select id="inputGender" class="form-select"
                                                v-model="profileFormData.gender">
                                                <option selected>Please select</option>
                                                <option>Male</option>
                                                <option>Female</option>
                                                <option>Others</option>
                                            </select>
                                        </div>
                                        <div class="col-12">
                                            <label for="introduction" class="form-label">Introduction</label>
                                            <textarea id="introduction" class="form-control" rows="3"
                                                maxlength="350" v-model="profileFormData.intro"></textarea>
                                        </div>
                                    </form>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary"
                                        data-bs-dismiss="modal">Close</button>
                                    <button type="submit" class="btn btn-primary"
                                        @click="updateInfo()">Update</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProfileBody",
    data() {
        return {
            infoList: [{_id: "",
                email: "abccc@gmail.com",
                avatar: "",
                password: "hxx211",
                username: "hxx",
                dateOfBirth: "01/09/2022",
                gender: "Male",
                intro: ""}],
            profileFormData: {
                _id: "",
                email: "abccc@gmail.com",
                avatar: "",
                password: "hxx211",
                username: "hxx",
                dateOfBirth: "01/09/2022",
                gender: "Male",
                intro: ""
            },
            myVideoList: [{ id: 0, title: "Title", author: "ZCC", date: "1/9/2022" }, { id: 0, title: "Title", author: "ZCC", date: "1/9/2022" }, { id: 0, title: "Title", author: "ZCC", date: "1/9/2022" }, { id: 0, title: "Title", author: "ZCC", date: "1/9/2022" }, { id: 0, title: "Title", author: "ZCC", date: "1/9/2022" }],
            videoData: {
                id: 0,
                imageAddr: "resources/ZCC.JPG",
                videoAddr: "blankpage.html",
                title: "Title",
                author: "ZCC",
                date: "1/9/2022"
            },
            favouriteVideoList: [{ id: 0, title: "Title", author: "HXX", date: "2/9/2022" }, { id: 0, title: "Title", author: "ZCC", date: "1/9/2022" }, { id: 0, title: "Title", author: "ZCC", date: "1/9/2022" }, { id: 0, title: "Title", author: "ZCC", date: "1/9/2022" }, { id: 0, title: "Title", author: "ZCC", date: "1/9/2022" }],
        }
    },

    mounted() {
        this.getProfileInfo();
    },

    methods: {
        getProfileInfo: function () {
            var profileInfo = window.localStorage.getItem("profileInfo");
            if (profileInfo) {
                this.infoList = JSON.parse(profileInfo);
            }
        },

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
                        that.profileFormData = result;
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


        updateInfo: function () {
            var profileFormData = {
                email: this.profileFormData.email,
                password: this.profileFormData.password,
                username: this.profileFormData.username,
                dateOfBirth: this.profileFormData.dateOfBirth,
                gender: this.profileFormData.gender,
                intro: this.profileFormData.intro
            };
            this.infoList.splice(0, 1);
            this.infoList.push(profileFormData);
            window.localStorage.setItem("profileInfo", JSON.stringify(this.infoList));
            // axios.post('http://localhost:3000/api/update/:email', {
            //     email: this.profileFormData.email,
            //     username: this.profileFormData.username,
            //     password: this.profileFormData.password,
            // })
            //     .then(function (response) {
            //         console.log(response);
            //         if (result.status != 200) {
            //             alert("Update Unsuccessful. Please Try Again!");
            //         }
            //     })
            //     .catch(function (error) {
            //         console.log(error);
            //     });
            this.axios.post('http://localhost:3000/api/password-reset', {
                email: this.profileFormData.email,
                password: this.profileFormData.password,
            })
                .then(function (response) {
                    console.log(response);
                    if (response.status != 200) {
                        alert("Update Unsuccessful. Please Try Again!");
                    } else {
                        alert("Update successful!");
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        },



        getMyVideoInfo: function () {
            var that = this;
            // Make a request for a user with a given ID
            this.axios.get('/user?ID=12345')
                .then(function (response) {
                    // handle success
                    var result = response.data;
                    console.log(result);
                    if (result.status == 200) {
                        that.myVideoList = result;
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

        getFavouriteVideoInfo: function () {
            var that = this;
            // Make a request for a user with a given ID
            this.axios.get('/user?ID=12345')
                .then(function (response) {
                    // handle success
                    var result = response.data;
                    console.log(result);
                    if (result.status == 200) {
                        that.favouriteVideoList = result;
                    }
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .then(function () {
                    // always executed
                });
        }
    },
}
</script>

<style>
    .profile-intro-upload {
        margin-left: 70px;
        margin-top: 40px;
        margin-right: 70px;
    }

    .text-container {
        width: 600px;
        height: 125px;
        background-color: white;
        align-items: center;
    }
    .tabs {
    margin-top: 30px;
    }

    .my-videos-area {
        padding-top: 20px;
    }

    .favourite-videos-area {
        padding-top: 20px;
    }


    .col {
        padding: 30px
    }

    #intro-tab-pane {
        margin-top: 30px;
    }

    .update-button {
        margin-top: 20px;
    }

    .profile-info {
        font-size: 20px;
        font-style: normal;
    }
</style>
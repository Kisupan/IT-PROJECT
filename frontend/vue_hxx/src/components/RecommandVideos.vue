<template>
    <div class="recommend-videos-area">
        <div class="row row-cols-4">
            <div class="col" v-for="video in recommandVideoList" :key="video.id">
                <div class="card">
                    <router-link target="_blank" :to="{
                        path: '/video',
                        query: {
                            id: video.id,
                            title: video.title
                        }
                    }">
                        <img src="resources/avatar.JPG" class="card-img-top" alt="...">
                    </router-link>
                    <div class="card-body">
                        <h5>{{video.title}}</h5>
                        <p>{{video.author}}</p>
                        <p>{{video.date}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "RecommandVideos",
    data() {
        return {
            recommandVideoList: [{ id: 0, title: "Title", author: "ZCC", date: "1/9/2022" }, { id: 1, title: "Title", author: "ZCC", date: "1/9/2022" }, { id: 2, title: "Title", author: "ZCC", date: "1/9/2022" }, { id: 3, title: "Title", author: "ZCC", date: "1/9/2022" }, { id: 4, title: "Title", author: "ZCC", date: "1/9/2022" }],
        }
    },

    methods: {
        getRecommandVideoInfo: function () {
            var that = this;
            // Make a request for a user with a given ID
            this.axios.get('/user?ID=12345')
                .then(function (response) {
                    // handle success
                    var result = response.data;
                    console.log(result);
                    if (result.status == 200) {
                        that.recommandVideoList = result;
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
    }
    
}
</script>

<style>
    .recommend-videos-area {
        margin-top: 30px;
    }

    .col {
        padding: 30px;
    }

    .row {
        padding-left: 15px;
    }
</style>
<template>
    <div class="recommend-videos-area">
        <div class="row row-cols-4">
            <div class="col" v-for="video in recommandVideoList" :key="video.id">
                <div class="card">
                    <a href="blankpage.html" target="_blank">
                        <img src="resources/avatar.JPG" class="card-img-top" alt="...">
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
</template>

<script>
export default {
    name: "RecommandVideos",
    data() {
        return {
            recommandVideoList: [{ id: 0, title: "Title", author: "ZCC", date: "1/9/2022" }, { id: 1, title: "Title", author: "ZCC", date: "1/9/2022" }, { id: 2, title: "Title", author: "ZCC", date: "1/9/2022" }, { id: 3, title: "Title", author: "ZCC", date: "1/9/2022" }, { id: 4, title: "Title", author: "ZCC", date: "1/9/2022" }],
        }
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
<template>
    <div>
    <div class="homepage-channel-navigation-bar">
        <div class="channel-container" >
            <div class="channel-items"> 
                <router-link v-for="m in messageList" :key="m.id" class="channel-link" target="_blank" :to="{
                    path:'/Pages',
                    query:{
                        id:m.id,
                        title:m.title
                    }
                }">
                    {{m.title}}
                </router-link>
            </div>
        </div>
    </div>
   
</div>
</template>

<script>
export default {
    name: "HomePageChannel",
    data() {
        return {
            messageList: [
                { id: '001', title: 'Sports' },
                { id: '002', title: 'Music' },
                { id: '003', title: 'Games' },
                { id: '004', title: 'Fashion' },
                { id: '005', title: 'Technology' },
                { id: '006', title: 'News' },
                { id: '007', title: 'Pet' },
                { id: '008', title: 'Travel'},
                { id: '009', title: 'Others'},
            ]
        }

    },
}
</script>
<style>

a {
    text-decoration: none;
}

.router-link-active {
    text-decoration: none;
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
    transition: background-color .3s, color .3s;
}

.homepage-channel-navigation-bar {
    padding-left: 30px;
    padding-top: 40px;
}

a:hover {
    background-color: #fff;
    color: black;
}
</style>
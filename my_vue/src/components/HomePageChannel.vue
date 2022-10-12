<template>
    <div class="homepage-channel-navigation-bar">
        <div class="channel-container">
            <div class="channel-items">
                <a href="blankpage.html" class="channel-link" target="_blank">Sports</a>
                <a href="blankpage.html" class="channel-link" target="_blank">Music</a>
                <a href="blankpage.html" class="channel-link" target="_blank">Games</a>
                <a href="blankpage.html" class="channel-link" target="_blank">Food</a>
                <a href="blankpage.html" class="channel-link" target="_blank">Fashion</a>
                <a href="blankpage.html" class="channel-link" target="_blank">Technology</a>
                <a href="blankpage.html" class="channel-link" target="_blank">News</a>
                <a href="blankpage.html" class="channel-link" target="_blank">Pet</a>
                <a href="blankpage.html" class="channel-link" target="_blank">Travel</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"HomePageChannel"
}
</script>

<style>
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
<template>
    <div>
        <main role="main">
                    <h1 class="title">一緒に盛り上げ！！</h1>
                    <img class="top-img" src="https://images.unsplash.com/photo-1567942712661-82b9b407abbf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80">
            <div class="album py-5 bg-dark">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4" v-for="(item,index) in FeaturedPlaylistCategoriesData.data">
                            <div class="card mb-4 shadow-sm">
                                <img :src="item.images[1].url" alt="">
                                <div class="card-body">
                                    <p class="card-text text-center">
                                        {{ item.title }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                    
        </main>
    </div>
</template>

<script>
    import qs from "querystring";
    export default {
        name: "home",
        data() {
            return {
                token: "",
                kkboxData: "",
                FeaturedPlaylistCategoriesData: "",
                newRealseList:""
            };
        },
        methods: {
            getToken() {
                console.log(process.env.CLIENT_ID);
                const config = {
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                };
                const oauth = {
                    grant_type: "client_credentials",
                    client_id: process.env.VUE_APP_CLIENT_ID,
                    client_secret: process.env.VUE_APP_CLIENT_SECRET,
                };
                this.$http.post("/token", qs.stringify(oauth), config).then(res => {
                    this.token = res.data.access_token;
                    this.getFeaturedPlaylistCategories();
                    this.getNewList();
                });
            },
            getSearch() {
                const config = {
                    headers: {
                        Authorization: `Bearer ${this.token}`,
                    },
                };
                this.$http
                    .get(
                        "https://api.kkbox.com/v1.1/search?q=為你我受冷風吹&type=track&territory=TW",
                        config
                    )
                    .then(res => {
                        console.log(res);
                        this.kkboxData = res.data;
                    });
            },
            getFeaturedPlaylistCategories() {
                const config = {
                    headers: {
                        Accept: "application/json",
                        Authorization: `Bearer ${this.token}`,
                    },
                };
                this.$http
                    .get(
                        "https://api.kkbox.com/v1.1/featured-playlist-categories?territory=JP&offset=0&limit=500",
                        config
                    )
                    .then(res => {
                        console.log(res);
                        this.FeaturedPlaylistCategoriesData = res.data;
                    });
            },
            getNewList() {
                const config = {
                    headers: {
                        Accept: "application/json",
                        Authorization: `Bearer ${this.token}`,
                    },
                };
                this.$http
                    .get(
                        "https://api.kkbox.com/v1.1/featured-playlist-categories/4nGmSyTjrx6qrvDb3J/playlists?territory=JP&limit=10",
                        config
                    )
                    .then(res => {
                        console.log(res);
                        this.newRealseList = res.data;
                    });
            }

        },
        created() {
            this.getToken();
        },
    };
</script>
<style scoped>
    .title{
        position: absolute;
        color:white;
        margin: 250px 200px 150px 450px;
    }
    .top-img{
        width:100%;
        height: 550px;
    }
</style>
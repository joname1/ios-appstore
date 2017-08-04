<template>
    <div class="home">
        <Search></Search>
        <Banner></Banner>
        <div class="mod-con0">
            <div class="mod-in">
                <div class="mod-nav0 mod-nav0-col4">
                    <div class="opt opt4">
                        <a href="#">
                            <span class="pic"></span>
                            <span class="txt">网游</span>
                        </a>
                    </div>
                    <div class="opt opt5">
                        <a href="#">
                            <span class="pic"></span>
                            <span class="txt">必备</span>
                        </a>
                    </div>
                    <div class="opt opt6">
                        <a href="#">
                            <span class="pic"></span>
                            <span class="txt">免费</span>
                        </a>
                    </div>
                    <div class="opt opt7">
                        <a href="#">
                            <span class="pic"></span>
                            <span class="txt">专题</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <divider>优秀新软</divider>
        <flexbox>
            <flexbox-item v-for="item in newest" :key="item.Code">
                <div class="flex-demo">
                    <img :src="item.icon" height="40" width="40">
                    <span>{{item.resName}}</span>
                </div>
            </flexbox-item>
        </flexbox>
        <div class="applists">
            <div class="weui-media-box weui-media-box_appmsg" v-for="item in nlist">
                <div class="weui-media-box__hd">
                    <img class="weui-media-box__thumb" :src="item.icon">
                </div>
                <div class="weui-media-box__bd">
                    <h4 class="weui-media-box__title">{{item.resName}}</h4>
                    <p class="weui-media-box__des">{{item.downloadNum}}</p>
                    <p class="weui-media-box__des">{{item.size}}</p>
                </div>
                <a :href="'itms-services://?action=download-manifest&url='+item.downloadUrl"><span class="weui-cell__ft weui-btn weui-btn_mini weui-btn_default">安装</span></a>
            </div>
        </div>
        <divider>时下热门</divider>
        <flexbox>
            <flexbox-item v-for="item in popular" :key="item.Code">
                <div class="flex-demo">
                    <img :src="item.icon" height="40" width="40">
                    <span>{{item.resName}}</span>
                </div>
            </flexbox-item>
        </flexbox>
        <div class="applists">
            <div class="weui-media-box weui-media-box_appmsg" v-for="item in plist">
                <div class="weui-media-box__hd">
                    <img class="weui-media-box__thumb" :src="item.icon">
                </div>
                <div class="weui-media-box__bd">
                    <h4 class="weui-media-box__title">{{item.resName}}</h4>
                    <p class="weui-media-box__des">{{item.downloadNum}}</p>
                    <p class="weui-media-box__des">{{item.size}}</p>
                </div>
                <a :href="'itms-services://?action=download-manifest&url='+item.downloadUrl"><span class="weui-cell__ft weui-btn weui-btn_mini weui-btn_default">安装</span></a>
            </div>
        </div>
        <divider>精品推荐</divider>
        <flexbox>
            <flexbox-item v-for="item in recommend" :key="item.Code">
                <div class="flex-demo">
                    <img :src="item.icon" height="40" width="40">
                    <span>{{item.resName}}</span>
                </div>
            </flexbox-item>
        </flexbox>
        <div class="applists">
            <div class="weui-media-box weui-media-box_appmsg" v-for="item in rlist">
                <div class="weui-media-box__hd">
                    <img class="weui-media-box__thumb" :src="item.icon">
                </div>
                <div class="weui-media-box__bd">
                    <h4 class="weui-media-box__title">{{item.resName}}</h4>
                    <p class="weui-media-box__des">{{item.downloadNum}}</p>
                    <p class="weui-media-box__des">{{item.size}}</p>
                </div>
                <a :href="'itms-services://?action=download-manifest&url='+item.downloadUrl"><span class="weui-cell__ft weui-btn weui-btn_mini weui-btn_default">安装</span></a>
            </div>
        </div>
    </div>
</template>
<script>
import Search from '@/components/pages/search'
import Banner from '@/components/pages/banner'
import {Divider,FlexboxItem,Flexbox,Panel,Group} from 'vux'
export default {
    components: {
        Divider,
        FlexboxItem,
        Flexbox,
        Panel,
        Group,
        Search,
        Banner
    },
    data() {
        return {
            newest: '',
            nlist: '',
            popular: '',
            plist: '',
            recommend: '',
            rlist: ''
        }
    },
    created: function() {
        this.getNewest();
        this.getNlist();
        this.getPopular();
        this.getPlist();
        this.getRecommend();
        this.getRlist();
    },
    methods: {
        getNewest: function() {
            this.$http.jsonp("https://exp.pgzs.com/soft.ashx?act=257&pi=1&ps=5").then(response => {
                this.newest = response.body.Result.items
            }, error => {
                console.log(error);
            });
        },
        getNlist: function() {
            this.$http.jsonp("https://exp.pgzs.com/soft.ashx?act=257&pi=5&ps=10").then(response => {
                this.nlist = response.body.Result.items
            }, error => {
                console.log(error);
            });
        },
        getPopular: function() {
            this.$http.jsonp("https://exp.pgzs.com/soft.ashx?act=242&pi=1&ps=5").then(response => {
                this.popular = response.body.Result.items
            }, error => {
                console.log(error);
            });
        },
        getPlist: function() {
            this.$http.jsonp("https://exp.pgzs.com/soft.ashx?act=242&pi=5&ps=10").then(response => {
                this.plist = response.body.Result.items
            }, error => {
                console.log(error);
            });
        },
        getRecommend: function() {
            this.$http.jsonp("https://exp.pgzs.com/soft.ashx?act=202&pi=0&ps=5").then(response => {
                this.recommend = response.body.Result.items
            }, error => {
                console.log(error);
            });
        },
        getRlist: function() {
            this.$http.jsonp("https://exp.pgzs.com/soft.ashx?act=202&pi=5&ps=10").then(response => {
                this.rlist = response.body.Result.items
            }, error => {
                console.log(error);
            });
        }
    }
}
</script>
<style lang="less" scoped>
.flex-demo {
    text-align: center;
    color: black;
    margin-bottom: 10px;
    span {
        white-space: nowrap;
        display: block;
        overflow: hidden;
        font-size: 11px;
    }
}

.applists {
    margin-bottom: 50px;
}

.mod-nav0 {
    overflow: hidden;
    padding-top: 10px;
    border-top: 1px solid #e6e6e6;
}

.mod-nav0 .opt {
    width: 33.3%;
    display: block;
    float: left;
    padding: 10px 0 2px;
    cursor: pointer;
}

.mod-nav0 .opt .pic {
    display: block;
    width: 40px;
    height: 40px;
    margin: auto;
    background: url(https://i.loli.net/2017/08/03/598309af10dbe.png) no-repeat 0 0;
    background-size: 50px 1100px;
    opacity: 1;
}

.mod-nav0 .opt .txt {
    display: block;
    font-size: 13px;
    color: #4c4c4c;
    line-height: 32px;
    width: 100%;
    text-align: center;
}

.mod-nav0 .opt:hover .pic,
.mod-nav0 .opt:active .pic,
.mod-nav0 a.on .opt .pic {
    opacity: 0.6;
}

.mod-nav0 .opt0 .pic {
    background-position: -5px -455px;
}

.mod-nav0 .opt1 .pic {
    background-position: -5px -505px;
}

.mod-nav0 .opt2 .pic {
    background-position: -5px -555px;
}

.mod-nav0 .opt3 .pic {
    background-position: -5px -605px;
}

.mod-nav0 .opt4 .pic {
    background-position: -5px -655px;
}

.mod-nav0 .opt5 .pic {
    background-position: -5px -705px;
}

.mod-nav0 .opt6 .pic {
    background-position: -5px -755px;
}

.mod-nav0 .opt7 .pic {
    background-position: -5px -805px;
}

.mod-nav0-col3 .opt {
    width: 33.3%;
}

.mod-nav0-col4 .opt {
    width: 24.9%;
}

.weui-media-box__des {
    color: #999;
    font-size: 13px;
    overflow: hidden;
    text-overflow: ellipsis;
}

.weui-cell__ft {
    color: #0080fc;
}
</style>

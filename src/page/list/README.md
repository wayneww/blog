---
lang: zh-CN
pageClass: list_index
meta:
  - name: description
    content: 网站全部文章列表页面
  - name: keywords
    content: 前端一锅煮,markdown,vuepress
---

# 历史文章

***




<style lang="less">
    .list_index{
        .cont{
            ol{
                list-style: none;
                padding-left: 0;
            }
            span{
                margin-right: 6px;
            }
        }
    }
</style>

<template>
    <div class="cont">
        <ol>
            <li v-for="(item, index) in datas">
                <span>{{index + 1}}.</span><a href="javascript:;" @click="go(item.url)">{{item.name}}</a>
            </li>
        </ol>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                datas: [
                    {
                        name: '经典资源收藏',
                        url: '/page/list/source_link.html',
                    },
                    {
                        name: 'css 布局：两边固定中间自适应',
                        url: '/page/list/css_layout_two.html',
                    },
                    {
                        name: 'Shell 脚本编写教程',
                        url: '/page/list/sh.html',
                    },
                    {
                        name: 'Markdown 表情代码',
                        url: '/page/list/emoji.html',
                    },
                    {
                        name: 'VuePress 笔记',
                        url: '/page/vuepress/',
                    },
                    {
                        name: '关于',
                        url: '/page/about/',
                    },
                    {
                        name: '首页',
                        url: '/',
                    },
                ]
            }
        },
        mounted() {

        },
        methods: {
            go(url) {
                this.$router.push(url)
            }
        }
    }
</script>


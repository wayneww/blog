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
            .list_num{
                margin-right: 5px;
            }
            .date{
                margin-left: 10px;
                color: #666;
                font-size: 14px;
            }
        }
    }
</style>

<template>
    <div class="cont">
        <ol>
            <li v-for="(item, index) in datas">
                <span class="list_num">{{index + 1}}.</span>
                <a href="javascript:;" @click="go(item.url)">{{item.name}}</a>
                <span class="date">{{item.date}}</span>
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
                        name: 'App 二三记~',
                        url: '/page/list/app.html',
                        date: '',
                    },
                    {
                        name: '前端修炼之路',
                        url: '/page/list/fe_up.html',
                        date: '',
                    },
                    {
                        name: 'npm cnpm npx nvm 傻傻分不清',
                        url: '/page/list/npm.html',
                        date: '',
                    },
                    {
                        name: '经典资源收藏',
                        url: '/page/list/source_link.html',
                        date: '',
                    },
                    {
                        name: 'webpack4 一点通',
                        url: '/page/list/webpack4.html',
                        date: '2018-11-21',
                    },
                    {
                        name: '网贷理财平台收益概览',
                        url: '/page/list/money_rate.html',
                        date: '2018-11-19',
                    },
                    {
                        name: 'vue 无痕刷新',
                        url: '/page/list/vue_reload.html',
                        date: '2018-11-16',
                    },
                    {
                        name: '前端项目模板',
                        url: '/page/list/project_template.html',
                        date: '2018-11-15',
                    },
                    {
                        name: 'Vue ui 大法哪家强？',
                        url: '/page/list/vue_ui_contrast.html',
                        date: '2018-11-3',
                    },
                    {
                        name: 'css 布局：两边固定中间自适应',
                        url: '/page/list/css_layout_two.html',
                        date: '2018-10-16',
                    },
                    {
                        name: 'Shell 脚本编写教程',
                        url: '/page/list/sh.html',
                        date: '2018-10-11',
                    },
                    {
                        name: 'Markdown 表情代码',
                        url: '/page/list/emoji.html',
                        date: '2018-10-11',
                    },
                    {
                        name: 'VuePress 笔记',
                        url: '/page/vuepress/',
                        date: '2018-10-11',
                    },
                    {
                        name: '关于',
                        url: '/page/about/',
                        date: '2018-10-11',
                    },
                    {
                        name: '首页',
                        url: '/',
                        date: '2018-10-11',
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


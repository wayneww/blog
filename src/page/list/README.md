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
                        name: '前端标准规范-v1.0',
                        url: '/page/list/fe.html',
                        date: '2019-11-19',
                    },
                    {
                        name: 'vscode 使用指南',
                        url: '/page/list/vscode.html',
                        date: '2019-10-01',
                    },
                    {
                        name: 'js 拾遗',
                        url: '/page/list/base_summary.html',
                        date: '2019-06-28',
                    },
                    {
                        name: '听说你在找工作',
                        url: '/page/list/need_work.html',
                        date: '2019-04-07',
                    },
                    {
                        name: 'JS 加法知多少？',
                        url: '/page/list/add.html',
                        date: '2019-03-06',
                    },
                    {
                        name: 'App 二三记~',
                        url: '/page/list/app.html',
                        date: '2019-02-06',
                    },
                    {
                        name: '前端修炼之路',
                        url: '/page/list/fe_up.html',
                        date: '2019-01-28',
                    },
                    {
                        name: 'npm cnpm npx nvm 傻傻分不清',
                        url: '/page/list/npm.html',
                        date: '2019-01-16',
                    },
                    {
                        name: '经典资源收藏',
                        url: '/page/list/source_link.html',
                        date: '2018-11-27',
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
                    }
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


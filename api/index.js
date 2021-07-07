import req from '@/utils/request'

export function getMenuConfig(params) {
    return req({
        url: '/menu/watabe/list/China',
        method: 'get',
        params
    })
}
// 首页
export function getIndexData(params) {
    return req({
        url: '/resource/watabe/production/single/China/5e4a4da2b5c1951d163ead96/5e4a4da2b5c1951d163ead96',
        method: 'get',
        params
    })
}
// 全球婚礼
export function getWeddingByType(pid, id) {
    return req({
        url: `/resource/watabe/production/single/China/${pid}/${id}`,
        method: 'get',
        params: {}
    })
}
export function getWeddingListByType(pid) {
    return req({
        url: `/resource/watabe/production/list/China/${pid}`,
        method: 'get',
        params:{}
    })
}
export function getWeddingDetailByType(pid, id) {
    return req({
        url: `/resource/watabe/production/single/China/${pid}/${id}`,
        method: 'get',
        params: {}
    })
}
// 常见问题
export function getFaqList(params) {
    return req({
        url: `/resource/watabe/production/single/China/5e44091bbede2879e6afd75d/5e44091bbede2879e6afd75d`,
        method: 'get',
        params
    })
}
// 高端定制
export function getCustom(params) {
    return req({
        url: `/resource/watabe/production/single/China/5e4408f0bede2879e6afd758/5e4408f0bede2879e6afd758`,
        method: 'get',
        params
    })
}
// 全球旅拍
export function getTravel(pid, id) {
    return req({
        url: `/resource/watabe/production/single/China/${pid}/${id}`,
        method: 'get',
        params: {}
    })
}
// 婚纱礼服
export function getDress(params) {
    return req({
        url: `/resource/watabe/production/single/China/5e440907bede2879e6afd75b/5e440907bede2879e6afd75b`,
        method: 'get',
        params
    })
}
// 精彩样照
export function getPhotos(id) {
    return req({
        url: `/resource/watabe/production/single/China/${id}/${id}`,
        method: 'get',
        params: {}
    })
}
// 关于我们/品牌简介
export function getBrand(params) {
    return req({
        url: `/resource/watabe/production/single/China/5e4408d6bede2879e6afd756/5e4e26d0b5c1951d163eadad`,
        method: 'get',
        params
    })
}
// 关于我们/新闻与活动
export function getNews(pid) {
    return req({
        url: `/resource/news/watabe/production/list/China/${pid}`,
        method: 'get',
        params:{}
    })
}
// 关于我们/新闻详情
export function getNewsDetail(pid, id) {
    return req({
        url: `/resource/watabe/production/single/China/${pid}/${id}`,
        method: 'get',
        params: {}
    })
}
// 关于我们/团队介绍
export function getTeams(params) {
    return req({
        url: `/resource/watabe/production/single/China/5e4408d6bede2879e6afd756/5e4e26c0b5c1951d163eadac`,
        method: 'get',
        params
    })
}
// 关于我们/全球门店
export function getShop(pid, id) {
    return req({
        url: `/resource/watabe/production/single/China/5e4408d6bede2879e6afd756/5e4e26deb5c1951d163eadae`,
        method: 'get',
        params: {}
    })
}
// 使用条款
export function getRule(params) {
    return req({
        url: `/resource/watabe/production/single/China/5e4408d6bede2879e6afd756/5eec954c3e46768cc2393e52`,
        method: 'get',
        params
    })
}
// 个人信息
export function getPolicy(params) {
    return req({
        url: `/resource/watabe/production/single/China/5e4408d6bede2879e6afd756/5eecb25b3e46768cc239ebd7`,
        method: 'get',
        params
    })
}
// 全球教堂
export function getChurchs(pid) {
    return req({
        url: `/resource/watabe/production/single/China/${pid}/5e4408e7bede2879e6afd757`,
        method: 'get',
        params:{}
    })
}
// 全网搜索
export function search(key) {
    return req({
        url: `/search/watabe/production/single/China/${key}`,
        method: 'get',
        params:{}
    })
}
// 获取关键字
export function getKeywords() {
    return req({
        url: `/search/watabechina/production/single/searchRank`,
        method: 'get',
        params:{}
    })
}
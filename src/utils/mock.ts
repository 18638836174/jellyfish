export interface PaginationParams {
  page: number
  pageSize: number
}

export interface PaginationResponse<T> {
  list: T[]
  total: number
  page: number
  pageSize: number
  hasMore: boolean
}

export interface MockGoods {
  id: number
  image: string
  title: string
  price: string
  originalPrice: string
  shopName: string
  location: string
  isNew: boolean
}

export interface MockNearby {
  id: number
  avatar: string
  name: string
  type: string
  distance: string
  description: string
  tags: string[]
}

export interface MockCollect {
  id: number
  image: string
  title: string
  price: string
  originalPrice: string
  shopName: string
  collectTime: string
}

export interface MockHistory {
  id: number
  image: string
  title: string
  price: string
  browseTime: string
  location: string
}

export interface MockFollow {
  id: number
  avatar: string
  name: string
  type: string
  description: string
  followTime: string
}

export interface MockPublish {
  id: number
  image: string
  title: string
  price: string
  status: string
  viewCount: number
  publishTime: string
}

export interface MockSpace {
  id: number
  image: string
  name: string
  memberCount: number
  description: string
  createTime: string
}

const goodsImages = [
  'https://img.yzcdn.cn/vant/apple-1.jpg',
  'https://img.yzcdn.cn/vant/apple-2.jpg',
  'https://img.yzcdn.cn/vant/cat.jpeg',
  'https://img.yzcdn.cn/vant/dog.jpeg',
  'https://img.yzcdn.cn/vant/tomato-1.jpg',
  'https://img.yzcdn.cn/vant/tomato-2.jpg',
]

const titles = [
  '新鲜红富士苹果 5斤装 当季水果 脆甜多汁',
  '有机青菜 新鲜采摘 当日送达',
  '精装单间出租 家电齐全 近地铁',
  '家电维修 快速上门 质保3个月',
  '正宗赣南脐橙 10斤装 甜度高',
  '白菜萝卜套餐 新鲜蔬菜',
  '专业保洁服务 深度清洁 满意付款',
  '二手手机回收 高价上门回收',
  '新鲜草莓 基地直发 坏果包赔',
  '瑜伽课程 团购价 专业教练指导',
]

const shopNames = [
  '老王水果店',
  '绿色菜园',
  '房东直租',
  '老李维修',
  '果园直发',
  '农场直供',
  '家政无忧',
  '数码回收',
]

const locations = ['天河区', '白云区', '番禺区', '全市上门', '增城区', '花都区', '海珠区', '越秀区']

const randomItem = <T>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)]

const generateGoods = (startId: number, count: number): MockGoods[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: startId + i,
    image: randomItem(goodsImages),
    title: randomItem(titles),
    price: (Math.random() * 100 + 10).toFixed(1),
    originalPrice: Math.random() > 0.5 ? (Math.random() * 100 + 30).toFixed(1) : '',
    shopName: randomItem(shopNames),
    location: randomItem(locations),
    isNew: Math.random() > 0.7,
  }))
}

const generateNearby = (startId: number, count: number): MockNearby[] => {
  const types = ['美食', '商家', '活动', '服务', '租房']
  const names = ['张三大厨', '李四小店', '王五水果摊', '赵六维修', '钱七便利店']
  const tags = ['诚信经营', '服务热情', '品质保证', '价格实惠', '环境优雅']

  return Array.from({ length: count }, (_, i) => ({
    id: startId + i,
    avatar: randomItem(goodsImages),
    name: randomItem(names) + (startId + i),
    type: randomItem(types),
    distance: (Math.random() * 5 + 0.1).toFixed(1) + 'km',
    description: '附近优质商家，服务周到，品质保障',
    tags: [randomItem(tags), randomItem(tags)].filter((v, i, a) => a.indexOf(v) === i),
  }))
}

const generateCollect = (startId: number, count: number): MockCollect[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: startId + i,
    image: randomItem(goodsImages),
    title: randomItem(titles),
    price: (Math.random() * 100 + 10).toFixed(1),
    originalPrice: Math.random() > 0.5 ? (Math.random() * 100 + 30).toFixed(1) : '',
    shopName: randomItem(shopNames),
    collectTime: `${Math.floor(Math.random() * 24) + 1}小时前`,
  }))
}

const generateHistory = (startId: number, count: number): MockHistory[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: startId + i,
    image: randomItem(goodsImages),
    title: randomItem(titles),
    price: (Math.random() * 100 + 10).toFixed(1),
    browseTime: `${Math.floor(Math.random() * 24) + 1}小时前`,
    location: randomItem(locations),
  }))
}

const generateFollow = (startId: number, count: number): MockFollow[] => {
  const types = ['商家', '达人', '博主', '作者', '用户']
  const names = ['小明的店', '美食达人', '生活博主', '租房专家', '维修师傅']

  return Array.from({ length: count }, (_, i) => ({
    id: startId + i,
    avatar: randomItem(goodsImages),
    name: randomItem(names) + (startId + i),
    type: randomItem(types),
    description: '专注于提供优质内容，分享生活点滴',
    followTime: `${Math.floor(Math.random() * 30) + 1}天前`,
  }))
}

const generatePublish = (startId: number, count: number): MockPublish[] => {
  const statuses = ['已发布', '审核中', '已下架']

  return Array.from({ length: count }, (_, i) => ({
    id: startId + i,
    image: randomItem(goodsImages),
    title: randomItem(titles),
    price: (Math.random() * 100 + 10).toFixed(1),
    status: randomItem(statuses),
    viewCount: Math.floor(Math.random() * 1000) + 100,
    publishTime: `${Math.floor(Math.random() * 30) + 1}天前`,
  }))
}

const generateSpace = (startId: number, count: number): MockSpace[] => {
  const names = ['美食交流群', '租房互助', '二手交易', '生活服务', '社区活动']

  return Array.from({ length: count }, (_, i) => ({
    id: startId + i,
    image: randomItem(goodsImages),
    name: randomItem(names) + (startId + i),
    memberCount: Math.floor(Math.random() * 1000) + 100,
    description: '欢迎加入我们，一起交流分享',
    createTime: `${Math.floor(Math.random() * 365) + 1}天前`,
  }))
}

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export const mockGoodsList = async (
  params: PaginationParams,
  category?: string
): Promise<PaginationResponse<MockGoods>> => {
  await delay(800)

  const page = params.page || 1
  const pageSize = params.pageSize || 10
  const total = 50

  const list = generateGoods((page - 1) * pageSize + 1, pageSize)

  return {
    list,
    total,
    page,
    pageSize,
    hasMore: page * pageSize < total,
  }
}

export const mockNearbyList = async (
  params: PaginationParams
): Promise<PaginationResponse<MockNearby>> => {
  await delay(800)

  const page = params.page || 1
  const pageSize = params.pageSize || 10
  const total = 30

  const list = generateNearby((page - 1) * pageSize + 1, pageSize)

  return {
    list,
    total,
    page,
    pageSize,
    hasMore: page * pageSize < total,
  }
}

export const mockCollectList = async (
  params: PaginationParams
): Promise<PaginationResponse<MockCollect>> => {
  await delay(800)

  const page = params.page || 1
  const pageSize = params.pageSize || 10
  const total = 25

  const list = generateCollect((page - 1) * pageSize + 1, pageSize)

  return {
    list,
    total,
    page,
    pageSize,
    hasMore: page * pageSize < total,
  }
}

export const mockHistoryList = async (
  params: PaginationParams
): Promise<PaginationResponse<MockHistory>> => {
  await delay(800)

  const page = params.page || 1
  const pageSize = params.pageSize || 10
  const total = 40

  const list = generateHistory((page - 1) * pageSize + 1, pageSize)

  return {
    list,
    total,
    page,
    pageSize,
    hasMore: page * pageSize < total,
  }
}

export const mockFollowList = async (
  params: PaginationParams
): Promise<PaginationResponse<MockFollow>> => {
  await delay(800)

  const page = params.page || 1
  const pageSize = params.pageSize || 10
  const total = 20

  const list = generateFollow((page - 1) * pageSize + 1, pageSize)

  return {
    list,
    total,
    page,
    pageSize,
    hasMore: page * pageSize < total,
  }
}

export const mockPublishList = async (
  params: PaginationParams
): Promise<PaginationResponse<MockPublish>> => {
  await delay(800)

  const page = params.page || 1
  const pageSize = params.pageSize || 10
  const total = 15

  const list = generatePublish((page - 1) * pageSize + 1, pageSize)

  return {
    list,
    total,
    page,
    pageSize,
    hasMore: page * pageSize < total,
  }
}

export const mockSpaceList = async (
  params: PaginationParams
): Promise<PaginationResponse<MockSpace>> => {
  await delay(800)

  const page = params.page || 1
  const pageSize = params.pageSize || 10
  const total = 12

  const list = generateSpace((page - 1) * pageSize + 1, pageSize)

  return {
    list,
    total,
    page,
    pageSize,
    hasMore: page * pageSize < total,
  }
}

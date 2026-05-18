export interface SpaceExample {
  name: string
  description: string
  coverImage: string
  contact: {
    phone: string
    wechat: string
  }
  address: string
  tags: string[]
}

export const spaceExamples: SpaceExample[] = [
  {
    name: '老王的水果铺',
    description: '10年老店，专注新鲜水果配送！主营各类国产精品水果，进口热带水果。所有水果当天采摘，隔日送达，新鲜看得见！支持同城配送，买满99元免配送费，欢迎选购~',
    coverImage: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=750&q=80',
    contact: {
      phone: '13812345678',
      wechat: 'laowang_fruit888'
    },
    address: '广东省广州市天河区珠江新城花城大道88号优托邦商场B1层水果区A-12号铺',
    tags: ['10年老店', '新鲜直达', '同城配送', '坏果包赔']
  },
  {
    name: '小李家电维修',
    description: '专业家电维修服务20年！精通空调、冰箱、洗衣机、热水器等各类家电维修与保养。快速上门，收费透明，质保3个月。紧急维修30分钟响应，是您值得信赖的家电好帮手！',
    coverImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=750&q=80',
    contact: {
      phone: '13987654321',
      wechat: 'xiaoli_fix666'
    },
    address: '广东省深圳市福田区华强北街道振华路105号家电维修服务中心',
    tags: ['20年经验', '快速上门', '收费透明', '质保3个月']
  },
  {
    name: '甜蜜时光烘焙工作室',
    description: '私人定制蛋糕甜品工作室！主打生日蛋糕、婚礼甜品台、企业茶歇等。所有甜品纯手工制作，选用进口食材，无添加更新鲜。支持深圳全城配送，当日下单次日送达~',
    coverImage: 'https://images.unsplash.com/photo-1556217477-d325251ece38?w=750&q=80',
    contact: {
      phone: '13698765432',
      wechat: 'sweet_time123'
    },
    address: '广东省深圳市南山区科技园南区高新南七道R2-B栋1楼烘焙工作室',
    tags: ['私人定制', '纯手工', '进口食材', '全城配送']
  },
  {
    name: '安心家政服务',
    description: '专业家政保洁服务团队！提供日常保洁、开荒保洁、家电清洗、皮具护理等服务。员工均经过专业培训，服务标准化。首单8折，办理会员更优惠，欢迎预约~',
    coverImage: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=750&q=80',
    contact: {
      phone: '13567890123',
      wechat: 'anxin_jiayi99'
    },
    address: '广东省广州市白云区白云新城云城西路50号白云万达广场A座1208室',
    tags: ['专业团队', '标准服务', '首单8折', '会员优惠']
  },
  {
    name: '优居租房管家',
    description: '专业租房中介服务！海量房源，涵盖整租、合租、短租多种类型。经纪人全程陪同看房，签约透明无套路。承诺不收中介费，只收房东服务费，租客完全免费！',
    coverImage: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=750&q=80',
    contact: {
      phone: '13765432109',
      wechat: 'youju_zufang'
    },
    address: '广东省广州市番禺区大学城贝岗村商业街28号二楼优居租房门店',
    tags: ['海量房源', '免费服务', '透明签约', '全程陪同']
  }
]

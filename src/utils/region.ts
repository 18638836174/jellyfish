export interface Region {
  name: string
  code: string
  pinyin: string
  letter: string
}

export interface RegionGroup {
  letter: string
  list: Region[]
}

export const hotCities: Region[] = [
  { name: '全国', code: '00', pinyin: 'quanguo', letter: 'Q' },
  { name: '北京', code: '110000', pinyin: 'beijing', letter: 'B' },
  { name: '上海', code: '310000', pinyin: 'shanghai', letter: 'S' },
  { name: '深圳', code: '440300', pinyin: 'shenzhen', letter: 'S' },
  { name: '广州', code: '440100', pinyin: 'guangzhou', letter: 'G' },
  { name: '杭州', code: '330100', pinyin: 'hangzhou', letter: 'H' },
  { name: '成都', code: '510100', pinyin: 'chengdu', letter: 'C' },
  { name: '武汉', code: '420100', pinyin: 'wuhan', letter: 'W' },
  { name: '南京', code: '320100', pinyin: 'nanjing', letter: 'N' },
  { name: '西安', code: '610100', pinyin: 'xian', letter: 'X' },
  { name: '重庆', code: '500000', pinyin: 'chongqing', letter: 'C' },
  { name: '天津', code: '120000', pinyin: 'tianjin', letter: 'T' },
]

export const provinces: Region[] = [
  { name: '北京', code: '110000', pinyin: 'beijing', letter: 'B' },
  { name: '天津', code: '120000', pinyin: 'tianjin', letter: 'T' },
  { name: '河北省', code: '130000', pinyin: 'hebei', letter: 'H' },
  { name: '山西省', code: '140000', pinyin: 'shanxi', letter: 'S' },
  { name: '内蒙古', code: '150000', pinyin: 'neimenggu', letter: 'N' },
  { name: '辽宁省', code: '210000', pinyin: 'liaoning', letter: 'L' },
  { name: '吉林省', code: '220000', pinyin: 'jilin', letter: 'J' },
  { name: '黑龙江省', code: '230000', pinyin: 'heilongjiang', letter: 'H' },
  { name: '上海', code: '310000', pinyin: 'shanghai', letter: 'S' },
  { name: '江苏省', code: '320000', pinyin: 'jiangsu', letter: 'J' },
  { name: '浙江省', code: '330000', pinyin: 'zhejiang', letter: 'Z' },
  { name: '安徽省', code: '340000', pinyin: 'anhui', letter: 'A' },
  { name: '福建省', code: '350000', pinyin: 'fujian', letter: 'F' },
  { name: '江西省', code: '360000', pinyin: 'jiangxi', letter: 'J' },
  { name: '山东省', code: '370000', pinyin: 'shandong', letter: 'S' },
  { name: '河南省', code: '410000', pinyin: 'henan', letter: 'H' },
  { name: '湖北省', code: '420000', pinyin: 'hubei', letter: 'H' },
  { name: '湖南省', code: '430000', pinyin: 'hunan', letter: 'H' },
  { name: '广东省', code: '440000', pinyin: 'guangdong', letter: 'G' },
  { name: '广西', code: '450000', pinyin: 'guangxi', letter: 'G' },
  { name: '海南省', code: '460000', pinyin: 'hainan', letter: 'H' },
  { name: '重庆', code: '500000', pinyin: 'chongqing', letter: 'C' },
  { name: '四川省', code: '510000', pinyin: 'sichuan', letter: 'S' },
  { name: '贵州省', code: '520000', pinyin: 'guizhou', letter: 'G' },
  { name: '云南省', code: '530000', pinyin: 'yunnan', letter: 'Y' },
  { name: '西藏', code: '540000', pinyin: 'xizang', letter: 'X' },
  { name: '陕西省', code: '610000', pinyin: 'shaanxi', letter: 'S' },
  { name: '甘肃省', code: '620000', pinyin: 'gansu', letter: 'G' },
  { name: '青海省', code: '630000', pinyin: 'qinghai', letter: 'Q' },
  { name: '宁夏', code: '640000', pinyin: 'ningxia', letter: 'N' },
  { name: '新疆', code: '650000', pinyin: 'xinjiang', letter: 'X' },
]

export const cities: Region[] = [
  // 河北省
  { name: '石家庄', code: '130100', pinyin: 'shijiazhuang', letter: 'S' },
  { name: '唐山', code: '130200', pinyin: 'tangshan', letter: 'T' },
  { name: '秦皇岛', code: '130300', pinyin: 'qinhuangdao', letter: 'Q' },
  { name: '邯郸', code: '130400', pinyin: 'handan', letter: 'H' },
  { name: '邢台', code: '130500', pinyin: 'xingtai', letter: 'X' },
  { name: '保定', code: '130600', pinyin: 'baoding', letter: 'B' },
  { name: '张家口', code: '130700', pinyin: 'zhangjiakou', letter: 'Z' },
  { name: '承德', code: '130800', pinyin: 'chengde', letter: 'C' },
  { name: '沧州', code: '130900', pinyin: 'cangzhou', letter: 'C' },
  { name: '廊坊', code: '131000', pinyin: 'langfang', letter: 'L' },
  { name: '衡水', code: '131100', pinyin: 'hengshui', letter: 'H' },
  { name: '雄安新区', code: '139900', pinyin: 'xiongxinqu', letter: 'X' },
  
  // 山西省
  { name: '太原', code: '140100', pinyin: 'taiyuan', letter: 'T' },
  { name: '大同', code: '140200', pinyin: 'datong', letter: 'D' },
  { name: '阳泉', code: '140300', pinyin: 'yangquan', letter: 'Y' },
  { name: '长治', code: '140400', pinyin: 'changzhi', letter: 'C' },
  { name: '晋城', code: '140500', pinyin: 'jincheng', letter: 'J' },
  { name: '朔州', code: '140600', pinyin: 'shuozhou', letter: 'S' },
  { name: '晋中', code: '140700', pinyin: 'jinzhong', letter: 'J' },
  { name: '运城', code: '140800', pinyin: 'yuncheng', letter: 'Y' },
  { name: '忻州', code: '140900', pinyin: 'xinzhou', letter: 'X' },
  { name: '临汾', code: '141000', pinyin: 'linfen', letter: 'L' },
  { name: '吕梁', code: '141100', pinyin: 'lvliang', letter: 'L' },
  
  // 内蒙古
  { name: '呼和浩特', code: '150100', pinyin: 'huhehaote', letter: 'H' },
  { name: '包头', code: '150200', pinyin: 'baotou', letter: 'B' },
  { name: '乌海', code: '150300', pinyin: 'wuhai', letter: 'W' },
  { name: '赤峰', code: '150400', pinyin: 'chifeng', letter: 'C' },
  { name: '通辽', code: '150500', pinyin: 'tongliao', letter: 'T' },
  { name: '鄂尔多斯', code: '150600', pinyin: 'eerduosi', letter: 'E' },
  { name: '呼伦贝尔', code: '150700', pinyin: 'hulunbeier', letter: 'H' },
  { name: '巴彦淖尔', code: '150800', pinyin: 'bayannaoer', letter: 'B' },
  { name: '乌兰察布', code: '150900', pinyin: 'wulanchabu', letter: 'W' },
  { name: '兴安盟', code: '152200', pinyin: 'xinganmeng', letter: 'X' },
  { name: '锡林郭勒盟', code: '152500', pinyin: 'xilinguolemeng', letter: 'X' },
  { name: '阿拉善盟', code: '152900', pinyin: 'alashanmeng', letter: 'A' },
  
  // 辽宁省
  { name: '沈阳', code: '210100', pinyin: 'shenyang', letter: 'S' },
  { name: '大连', code: '210200', pinyin: 'dalian', letter: 'D' },
  { name: '鞍山', code: '210300', pinyin: 'anshan', letter: 'A' },
  { name: '抚顺', code: '210400', pinyin: 'fushun', letter: 'F' },
  { name: '本溪', code: '210500', pinyin: 'benxi', letter: 'B' },
  { name: '丹东', code: '210600', pinyin: 'dandong', letter: 'D' },
  { name: '锦州', code: '210700', pinyin: 'jinzhou', letter: 'J' },
  { name: '营口', code: '210800', pinyin: 'yingkou', letter: 'Y' },
  { name: '阜新', code: '210900', pinyin: 'fuxin', letter: 'F' },
  { name: '辽阳', code: '211000', pinyin: 'liaoyang', letter: 'L' },
  { name: '盘锦', code: '211100', pinyin: 'panjin', letter: 'P' },
  { name: '铁岭', code: '211200', pinyin: 'tieling', letter: 'T' },
  { name: '朝阳', code: '211300', pinyin: 'chaoyang', letter: 'C' },
  { name: '葫芦岛', code: '211400', pinyin: 'huludao', letter: 'H' },
  
  // 吉林省
  { name: '长春', code: '220100', pinyin: 'changchun', letter: 'C' },
  { name: '吉林', code: '220200', pinyin: 'jilin', letter: 'J' },
  { name: '四平', code: '220300', pinyin: 'siping', letter: 'S' },
  { name: '辽源', code: '220400', pinyin: 'liaoyuan', letter: 'L' },
  { name: '通化', code: '220500', pinyin: 'tonghua', letter: 'T' },
  { name: '白山', code: '220600', pinyin: 'baishan', letter: 'B' },
  { name: '松原', code: '220700', pinyin: 'songyuan', letter: 'S' },
  { name: '白城', code: '220800', pinyin: 'baicheng', letter: 'B' },
  { name: '延边', code: '222400', pinyin: 'yanbian', letter: 'Y' },
  
  // 黑龙江省
  { name: '哈尔滨', code: '230100', pinyin: 'haerbin', letter: 'H' },
  { name: '齐齐哈尔', code: '230200', pinyin: 'qiqihaer', letter: 'Q' },
  { name: '鸡西', code: '230300', pinyin: 'jixi', letter: 'J' },
  { name: '鹤岗', code: '230400', pinyin: 'hegang', letter: 'H' },
  { name: '双鸭山', code: '230500', pinyin: 'shuangyashan', letter: 'S' },
  { name: '大庆', code: '230600', pinyin: 'daqing', letter: 'D' },
  { name: '伊春', code: '230700', pinyin: 'yichun', letter: 'Y' },
  { name: '佳木斯', code: '230800', pinyin: 'jiamusi', letter: 'J' },
  { name: '七台河', code: '230900', pinyin: 'qitaihe', letter: 'Q' },
  { name: '牡丹江', code: '231000', pinyin: 'mudanjiang', letter: 'M' },
  { name: '黑河', code: '231100', pinyin: 'heihe', letter: 'H' },
  { name: '绥化', code: '231200', pinyin: 'suihua', letter: 'S' },
  { name: '大兴安岭', code: '232700', pinyin: 'daxinganling', letter: 'D' },
  
  // 江苏省
  { name: '南京', code: '320100', pinyin: 'nanjing', letter: 'N' },
  { name: '无锡', code: '320200', pinyin: 'wuxi', letter: 'W' },
  { name: '徐州', code: '320300', pinyin: 'xuzhou', letter: 'X' },
  { name: '常州', code: '320400', pinyin: 'changzhou', letter: 'C' },
  { name: '苏州', code: '320500', pinyin: 'suzhou', letter: 'S' },
  { name: '南通', code: '320600', pinyin: 'nantong', letter: 'N' },
  { name: '连云港', code: '320700', pinyin: 'lianyungang', letter: 'L' },
  { name: '淮安', code: '320800', pinyin: 'huaian', letter: 'H' },
  { name: '盐城', code: '320900', pinyin: 'yancheng', letter: 'Y' },
  { name: '扬州', code: '321000', pinyin: 'yangzhou', letter: 'Y' },
  { name: '镇江', code: '321100', pinyin: 'zhenjiang', letter: 'Z' },
  { name: '泰州', code: '321200', pinyin: 'taizhou', letter: 'T' },
  { name: '宿迁', code: '321300', pinyin: 'suqian', letter: 'S' },
  
  // 浙江省
  { name: '杭州', code: '330100', pinyin: 'hangzhou', letter: 'H' },
  { name: '宁波', code: '330200', pinyin: 'ningbo', letter: 'N' },
  { name: '温州', code: '330300', pinyin: 'wenzhou', letter: 'W' },
  { name: '嘉兴', code: '330400', pinyin: 'jiaxing', letter: 'J' },
  { name: '湖州', code: '330500', pinyin: 'huzhou', letter: 'H' },
  { name: '绍兴', code: '330600', pinyin: 'shaoxing', letter: 'S' },
  { name: '金华', code: '330700', pinyin: 'jinhua', letter: 'J' },
  { name: '衢州', code: '330800', pinyin: 'quzhou', letter: 'Q' },
  { name: '舟山', code: '330900', pinyin: 'zhoushan', letter: 'Z' },
  { name: '台州', code: '331000', pinyin: 'taizhou', letter: 'T' },
  { name: '丽水', code: '331100', pinyin: 'lishui', letter: 'L' },
  
  // 安徽省
  { name: '合肥', code: '340100', pinyin: 'hefei', letter: 'H' },
  { name: '芜湖', code: '340200', pinyin: 'wuhu', letter: 'W' },
  { name: '蚌埠', code: '340300', pinyin: 'bengbu', letter: 'B' },
  { name: '淮南', code: '340400', pinyin: 'huainan', letter: 'H' },
  { name: '马鞍山', code: '340500', pinyin: 'maanshan', letter: 'M' },
  { name: '淮北', code: '340600', pinyin: 'huaibei', letter: 'H' },
  { name: '铜陵', code: '340700', pinyin: 'tongling', letter: 'T' },
  { name: '安庆', code: '340800', pinyin: 'anqing', letter: 'A' },
  { name: '黄山', code: '341000', pinyin: 'huangshan', letter: 'H' },
  { name: '滁州', code: '341100', pinyin: 'chuzhou', letter: 'C' },
  { name: '阜阳', code: '341200', pinyin: 'fuyang', letter: 'F' },
  { name: '宿州', code: '341300', pinyin: 'suzhou', letter: 'S' },
  { name: '六安', code: '341500', pinyin: 'liuan', letter: 'L' },
  { name: '亳州', code: '341600', pinyin: 'bozhou', letter: 'B' },
  { name: '池州', code: '341700', pinyin: 'chizhou', letter: 'C' },
  { name: '宣城', code: '341800', pinyin: 'xuancheng', letter: 'X' },
  
  // 福建省
  { name: '福州', code: '350100', pinyin: 'fuzhou', letter: 'F' },
  { name: '厦门', code: '350200', pinyin: 'xiamen', letter: 'X' },
  { name: '莆田', code: '350300', pinyin: 'putian', letter: 'P' },
  { name: '三明', code: '350400', pinyin: 'sanming', letter: 'S' },
  { name: '泉州', code: '350500', pinyin: 'quanzhou', letter: 'Q' },
  { name: '漳州', code: '350600', pinyin: 'zhangzhou', letter: 'Z' },
  { name: '南平', code: '350700', pinyin: 'nanping', letter: 'N' },
  { name: '龙岩', code: '350800', pinyin: 'longyan', letter: 'L' },
  { name: '宁德', code: '350900', pinyin: 'ningde', letter: 'N' },
  
  // 江西省
  { name: '南昌', code: '360100', pinyin: 'nanchang', letter: 'N' },
  { name: '景德镇', code: '360200', pinyin: 'jingdezhen', letter: 'J' },
  { name: '萍乡', code: '360300', pinyin: 'pingxiang', letter: 'P' },
  { name: '九江', code: '360400', pinyin: 'jiujiang', letter: 'J' },
  { name: '新余', code: '360500', pinyin: 'xinyu', letter: 'X' },
  { name: '鹰潭', code: '360600', pinyin: 'yingtan', letter: 'Y' },
  { name: '赣州', code: '360700', pinyin: 'ganzhou', letter: 'G' },
  { name: '吉安', code: '360800', pinyin: 'jian', letter: 'J' },
  { name: '宜春', code: '360900', pinyin: 'yichun', letter: 'Y' },
  { name: '抚州', code: '361000', pinyin: 'fuzhou', letter: 'F' },
  { name: '上饶', code: '361100', pinyin: 'shangrao', letter: 'S' },
  
  // 山东省
  { name: '济南', code: '370100', pinyin: 'jinan', letter: 'J' },
  { name: '青岛', code: '370200', pinyin: 'qingdao', letter: 'Q' },
  { name: '淄博', code: '370300', pinyin: 'zibo', letter: 'Z' },
  { name: '枣庄', code: '370400', pinyin: 'zaozhuang', letter: 'Z' },
  { name: '东营', code: '370500', pinyin: 'dongying', letter: 'D' },
  { name: '烟台', code: '370600', pinyin: 'yantai', letter: 'Y' },
  { name: '潍坊', code: '370700', pinyin: 'weifang', letter: 'W' },
  { name: '济宁', code: '370800', pinyin: 'jining', letter: 'J' },
  { name: '泰安', code: '370900', pinyin: 'taian', letter: 'T' },
  { name: '威海', code: '371000', pinyin: 'weihai', letter: 'W' },
  { name: '日照', code: '371100', pinyin: 'rizhao', letter: 'R' },
  { name: '临沂', code: '371300', pinyin: 'linyi', letter: 'L' },
  { name: '德州', code: '371400', pinyin: 'dezhou', letter: 'D' },
  { name: '聊城', code: '371500', pinyin: 'liaocheng', letter: 'L' },
  { name: '滨州', code: '371600', pinyin: 'binzhou', letter: 'B' },
  { name: '菏泽', code: '371700', pinyin: 'heze', letter: 'H' },
  
  // 河南省
  { name: '郑州', code: '410100', pinyin: 'zhengzhou', letter: 'Z' },
  { name: '开封', code: '410200', pinyin: 'kaifeng', letter: 'K' },
  { name: '洛阳', code: '410300', pinyin: 'luoyang', letter: 'L' },
  { name: '平顶山', code: '410400', pinyin: 'pingdingshan', letter: 'P' },
  { name: '安阳', code: '410500', pinyin: 'anyang', letter: 'A' },
  { name: '鹤壁', code: '410600', pinyin: 'hebi', letter: 'H' },
  { name: '新乡', code: '410700', pinyin: 'xinxiang', letter: 'X' },
  { name: '焦作', code: '410800', pinyin: 'jiaozuo', letter: 'J' },
  { name: '濮阳', code: '410900', pinyin: 'puyang', letter: 'P' },
  { name: '许昌', code: '411000', pinyin: 'xuchang', letter: 'X' },
  { name: '漯河', code: '411100', pinyin: 'luohe', letter: 'L' },
  { name: '三门峡', code: '411200', pinyin: 'sanmenxia', letter: 'S' },
  { name: '南阳', code: '411300', pinyin: 'nanyang', letter: 'N' },
  { name: '商丘', code: '411400', pinyin: 'shangqiu', letter: 'S' },
  { name: '信阳', code: '411500', pinyin: 'xinyang', letter: 'X' },
  { name: '周口', code: '411600', pinyin: 'zhoukou', letter: 'Z' },
  { name: '驻马店', code: '411700', pinyin: 'zhumadian', letter: 'Z' },
  { name: '济源', code: '419001', pinyin: 'jiyuan', letter: 'J' },
  
  // 湖北省
  { name: '武汉', code: '420100', pinyin: 'wuhan', letter: 'W' },
  { name: '黄石', code: '420200', pinyin: 'huangshi', letter: 'H' },
  { name: '十堰', code: '420300', pinyin: 'shiyan', letter: 'S' },
  { name: '宜昌', code: '420500', pinyin: 'yichang', letter: 'Y' },
  { name: '襄阳', code: '420600', pinyin: 'xiangyang', letter: 'X' },
  { name: '鄂州', code: '420700', pinyin: 'ezhou', letter: 'E' },
  { name: '荆门', code: '420800', pinyin: 'jingmen', letter: 'J' },
  { name: '孝感', code: '420900', pinyin: 'xiaogan', letter: 'X' },
  { name: '荆州', code: '421000', pinyin: 'jingzhou', letter: 'J' },
  { name: '黄冈', code: '421100', pinyin: 'huanggang', letter: 'H' },
  { name: '咸宁', code: '421200', pinyin: 'xianning', letter: 'X' },
  { name: '随州', code: '421300', pinyin: 'suizhou', letter: 'S' },
  { name: '恩施', code: '422800', pinyin: 'enshi', letter: 'E' },
  { name: '仙桃', code: '429004', pinyin: 'xiantao', letter: 'X' },
  { name: '潜江', code: '429005', pinyin: 'qianjiang', letter: 'Q' },
  { name: '天门', code: '429006', pinyin: 'tianmen', letter: 'T' },
  { name: '神农架', code: '429021', pinyin: 'shennongjia', letter: 'S' },
  
  // 湖南省
  { name: '长沙', code: '430100', pinyin: 'changsha', letter: 'C' },
  { name: '株洲', code: '430200', pinyin: 'zhuzhou', letter: 'Z' },
  { name: '湘潭', code: '430300', pinyin: 'xiangtan', letter: 'X' },
  { name: '衡阳', code: '430400', pinyin: 'hengyang', letter: 'H' },
  { name: '邵阳', code: '430500', pinyin: 'shaoyang', letter: 'S' },
  { name: '岳阳', code: '430600', pinyin: 'yueyang', letter: 'Y' },
  { name: '常德', code: '430700', pinyin: 'changde', letter: 'C' },
  { name: '张家界', code: '430800', pinyin: 'zhangjiajie', letter: 'Z' },
  { name: '益阳', code: '430900', pinyin: 'yiyang', letter: 'Y' },
  { name: '郴州', code: '431000', pinyin: 'chenzhou', letter: 'C' },
  { name: '永州', code: '431100', pinyin: 'yongzhou', letter: 'Y' },
  { name: '怀化', code: '431200', pinyin: 'huaihua', letter: 'H' },
  { name: '娄底', code: '431300', pinyin: 'loudi', letter: 'L' },
  { name: '湘西', code: '433100', pinyin: 'xiangxi', letter: 'X' },
  
  // 广东省
  { name: '广州', code: '440100', pinyin: 'guangzhou', letter: 'G' },
  { name: '韶关', code: '440200', pinyin: 'shaoguan', letter: 'S' },
  { name: '深圳', code: '440300', pinyin: 'shenzhen', letter: 'S' },
  { name: '珠海', code: '440400', pinyin: 'zhuhai', letter: 'Z' },
  { name: '汕头', code: '440500', pinyin: 'shantou', letter: 'S' },
  { name: '佛山', code: '440600', pinyin: 'foshan', letter: 'F' },
  { name: '江门', code: '440700', pinyin: 'jiangmen', letter: 'J' },
  { name: '湛江', code: '440800', pinyin: 'zhanjiang', letter: 'Z' },
  { name: '茂名', code: '440900', pinyin: 'maoming', letter: 'M' },
  { name: '肇庆', code: '441200', pinyin: 'zhaoqing', letter: 'Z' },
  { name: '惠州', code: '441300', pinyin: 'huizhou', letter: 'H' },
  { name: '梅州', code: '441400', pinyin: 'meizhou', letter: 'M' },
  { name: '汕尾', code: '441500', pinyin: 'shanwei', letter: 'S' },
  { name: '河源', code: '441600', pinyin: 'heyuan', letter: 'H' },
  { name: '阳江', code: '441700', pinyin: 'yangjiang', letter: 'Y' },
  { name: '清远', code: '441800', pinyin: 'qingyuan', letter: 'Q' },
  { name: '东莞', code: '441900', pinyin: 'dongguan', letter: 'D' },
  { name: '中山', code: '442000', pinyin: 'zhongshan', letter: 'Z' },
  { name: '潮州', code: '445100', pinyin: 'chaozhou', letter: 'C' },
  { name: '揭阳', code: '445200', pinyin: 'jieyang', letter: 'J' },
  { name: '云浮', code: '445300', pinyin: 'yunfu', letter: 'Y' },
  
  // 广西
  { name: '南宁', code: '450100', pinyin: 'nanning', letter: 'N' },
  { name: '柳州', code: '450200', pinyin: 'liuzhou', letter: 'L' },
  { name: '桂林', code: '450300', pinyin: 'guilin', letter: 'G' },
  { name: '梧州', code: '450400', pinyin: 'wuzhou', letter: 'W' },
  { name: '北海', code: '450500', pinyin: 'beihai', letter: 'B' },
  { name: '防城港', code: '450600', pinyin: 'fangchenggang', letter: 'F' },
  { name: '钦州', code: '450700', pinyin: 'qinzhou', letter: 'Q' },
  { name: '贵港', code: '450800', pinyin: 'guigang', letter: 'G' },
  { name: '玉林', code: '450900', pinyin: 'yulin', letter: 'Y' },
  { name: '百色', code: '451000', pinyin: 'baise', letter: 'B' },
  { name: '贺州', code: '451100', pinyin: 'hezhou', letter: 'H' },
  { name: '河池', code: '451200', pinyin: 'hechi', letter: 'H' },
  { name: '来宾', code: '451300', pinyin: 'laibin', letter: 'L' },
  { name: '崇左', code: '451400', pinyin: 'chongzuo', letter: 'C' },
  
  // 海南省
  { name: '海口', code: '460100', pinyin: 'haikou', letter: 'H' },
  { name: '三亚', code: '460200', pinyin: 'sanya', letter: 'S' },
  { name: '三沙', code: '460300', pinyin: 'sansha', letter: 'S' },
  { name: '儋州', code: '460400', pinyin: 'danzhou', letter: 'D' },
  { name: '五指山', code: '469001', pinyin: 'wuzhishan', letter: 'W' },
  { name: '琼海', code: '469002', pinyin: 'qionghai', letter: 'Q' },
  { name: '文昌', code: '469005', pinyin: 'wenchang', letter: 'W' },
  { name: '万宁', code: '469006', pinyin: 'wanning', letter: 'W' },
  { name: '东方', code: '469007', pinyin: 'dongfang', letter: 'D' },
  
  // 四川省
  { name: '成都', code: '510100', pinyin: 'chengdu', letter: 'C' },
  { name: '自贡', code: '510300', pinyin: 'zigong', letter: 'Z' },
  { name: '攀枝花', code: '510400', pinyin: 'panzhihua', letter: 'P' },
  { name: '泸州', code: '510500', pinyin: 'luzhou', letter: 'L' },
  { name: '德阳', code: '510600', pinyin: 'deyang', letter: 'D' },
  { name: '绵阳', code: '510700', pinyin: 'mianyang', letter: 'M' },
  { name: '广元', code: '510800', pinyin: 'guangyuan', letter: 'G' },
  { name: '遂宁', code: '510900', pinyin: 'suining', letter: 'S' },
  { name: '内江', code: '511000', pinyin: 'neijiang', letter: 'N' },
  { name: '乐山', code: '511100', pinyin: 'leshan', letter: 'L' },
  { name: '南充', code: '511300', pinyin: 'nanchong', letter: 'N' },
  { name: '眉山', code: '511400', pinyin: 'meishan', letter: 'M' },
  { name: '宜宾', code: '511500', pinyin: 'yibin', letter: 'Y' },
  { name: '广安', code: '511600', pinyin: 'guangan', letter: 'G' },
  { name: '达州', code: '511700', pinyin: 'dazhou', letter: 'D' },
  { name: '雅安', code: '511800', pinyin: 'yaan', letter: 'Y' },
  { name: '巴中', code: '511900', pinyin: 'bazhong', letter: 'B' },
  { name: '资阳', code: '512000', pinyin: 'ziyang', letter: 'Z' },
  { name: '阿坝', code: '513200', pinyin: 'aba', letter: 'A' },
  { name: '甘孜', code: '513300', pinyin: 'ganzi', letter: 'G' },
  { name: '凉山', code: '513400', pinyin: 'liangshan', letter: 'L' },
  
  // 贵州省
  { name: '贵阳', code: '520100', pinyin: 'guiyang', letter: 'G' },
  { name: '六盘水', code: '520200', pinyin: 'liupanshui', letter: 'L' },
  { name: '遵义', code: '520300', pinyin: 'zunyi', letter: 'Z' },
  { name: '安顺', code: '520400', pinyin: 'anshun', letter: 'A' },
  { name: '毕节', code: '520500', pinyin: 'bijie', letter: 'B' },
  { name: '铜仁', code: '520600', pinyin: 'tongren', letter: 'T' },
  { name: '黔西南', code: '522300', pinyin: 'qianxinan', letter: 'Q' },
  { name: '黔东南', code: '522600', pinyin: 'qiandongnan', letter: 'Q' },
  { name: '黔南', code: '522700', pinyin: 'qiannan', letter: 'Q' },
  
  // 云南省
  { name: '昆明', code: '530100', pinyin: 'kunming', letter: 'K' },
  { name: '曲靖', code: '530300', pinyin: 'qujing', letter: 'Q' },
  { name: '玉溪', code: '530400', pinyin: 'yuxi', letter: 'Y' },
  { name: '保山', code: '530500', pinyin: 'baoshan', letter: 'B' },
  { name: '昭通', code: '530600', pinyin: 'zhaotong', letter: 'Z' },
  { name: '丽江', code: '530700', pinyin: 'lijiang', letter: 'L' },
  { name: '普洱', code: '530800', pinyin: 'puer', letter: 'P' },
  { name: '临沧', code: '530900', pinyin: 'lincang', letter: 'L' },
  { name: '楚雄', code: '532300', pinyin: 'chuxiong', letter: 'C' },
  { name: '红河', code: '532500', pinyin: 'honghe', letter: 'H' },
  { name: '文山', code: '532600', pinyin: 'wenshan', letter: 'W' },
  { name: '西双版纳', code: '532800', pinyin: 'xishuangbanna', letter: 'X' },
  { name: '大理', code: '532900', pinyin: 'dali', letter: 'D' },
  { name: '德宏', code: '533100', pinyin: 'dehong', letter: 'D' },
  { name: '怒江', code: '533300', pinyin: 'nujiang', letter: 'N' },
  { name: '迪庆', code: '533400', pinyin: 'diqing', letter: 'D' },
  
  // 西藏
  { name: '拉萨', code: '540100', pinyin: 'lasa', letter: 'L' },
  { name: '日喀则', code: '540200', pinyin: 'rikaze', letter: 'R' },
  { name: '昌都', code: '540300', pinyin: 'changdu', letter: 'C' },
  { name: '林芝', code: '540400', pinyin: 'linzhi', letter: 'L' },
  { name: '山南', code: '540500', pinyin: 'shannan', letter: 'S' },
  { name: '那曲', code: '540600', pinyin: 'naqu', letter: 'N' },
  { name: '阿里', code: '542500', pinyin: 'ali', letter: 'A' },
  
  // 陕西省
  { name: '西安', code: '610100', pinyin: 'xian', letter: 'X' },
  { name: '铜川', code: '610200', pinyin: 'tongchuan', letter: 'T' },
  { name: '宝鸡', code: '610300', pinyin: 'baoji', letter: 'B' },
  { name: '咸阳', code: '610400', pinyin: 'xianyang', letter: 'X' },
  { name: '渭南', code: '610500', pinyin: 'weinan', letter: 'W' },
  { name: '延安', code: '610600', pinyin: 'yanan', letter: 'Y' },
  { name: '汉中', code: '610700', pinyin: 'hanzhong', letter: 'H' },
  { name: '榆林', code: '610800', pinyin: 'yulin', letter: 'Y' },
  { name: '安康', code: '610900', pinyin: 'ankang', letter: 'A' },
  { name: '商洛', code: '611000', pinyin: 'shangluo', letter: 'S' },
  
  // 甘肃省
  { name: '兰州', code: '620100', pinyin: 'lanzhou', letter: 'L' },
  { name: '嘉峪关', code: '620200', pinyin: 'jiayuguan', letter: 'J' },
  { name: '金昌', code: '620300', pinyin: 'jinchang', letter: 'J' },
  { name: '白银', code: '620400', pinyin: 'baiyin', letter: 'B' },
  { name: '天水', code: '620500', pinyin: 'tianshui', letter: 'T' },
  { name: '武威', code: '620600', pinyin: 'wuwei', letter: 'W' },
  { name: '张掖', code: '620700', pinyin: 'zhangye', letter: 'Z' },
  { name: '平凉', code: '620800', pinyin: 'pingliang', letter: 'P' },
  { name: '酒泉', code: '620900', pinyin: 'jiuquan', letter: 'J' },
  { name: '庆阳', code: '621000', pinyin: 'qingyang', letter: 'Q' },
  { name: '定西', code: '621100', pinyin: 'dingxi', letter: 'D' },
  { name: '陇南', code: '621200', pinyin: 'longnan', letter: 'L' },
  { name: '临夏', code: '622900', pinyin: 'linxia', letter: 'L' },
  { name: '甘南', code: '623000', pinyin: 'gannan', letter: 'G' },
  
  // 青海省
  { name: '西宁', code: '630100', pinyin: 'xining', letter: 'X' },
  { name: '海东', code: '630200', pinyin: 'haidong', letter: 'H' },
  { name: '海北', code: '632200', pinyin: 'haibei', letter: 'H' },
  { name: '黄南', code: '632300', pinyin: 'huangnan', letter: 'H' },
  { name: '海南州', code: '632500', pinyin: 'hainanzhou', letter: 'H' },
  { name: '果洛', code: '632600', pinyin: 'guoluo', letter: 'G' },
  { name: '玉树', code: '632700', pinyin: 'yushu', letter: 'Y' },
  { name: '海西', code: '632800', pinyin: 'haixi', letter: 'H' },
  
  // 宁夏
  { name: '银川', code: '640100', pinyin: 'yinchuan', letter: 'Y' },
  { name: '石嘴山', code: '640200', pinyin: 'shizuishan', letter: 'S' },
  { name: '吴忠', code: '640300', pinyin: 'wuzhong', letter: 'W' },
  { name: '固原', code: '640400', pinyin: 'guyuan', letter: 'G' },
  { name: '中卫', code: '640500', pinyin: 'zhongwei', letter: 'Z' },
  
  // 新疆
  { name: '乌鲁木齐', code: '650100', pinyin: 'wulumuqi', letter: 'W' },
  { name: '克拉玛依', code: '650200', pinyin: 'kelamayi', letter: 'K' },
  { name: '吐鲁番', code: '650400', pinyin: 'tulufan', letter: 'T' },
  { name: '哈密', code: '650500', pinyin: 'hami', letter: 'H' },
  { name: '昌吉', code: '652300', pinyin: 'changji', letter: 'C' },
  { name: '博尔塔拉', code: '652700', pinyin: 'boertala', letter: 'B' },
  { name: '巴音郭楞', code: '652800', pinyin: 'bayinguoleng', letter: 'B' },
  { name: '阿克苏', code: '652900', pinyin: 'akesu', letter: 'A' },
  { name: '克孜勒苏', code: '653000', pinyin: 'kezilesu', letter: 'K' },
  { name: '喀什', code: '653100', pinyin: 'kashi', letter: 'K' },
  { name: '和田', code: '653200', pinyin: 'hetian', letter: 'H' },
  { name: '伊犁', code: '654000', pinyin: 'yili', letter: 'Y' },
  { name: '塔城', code: '654200', pinyin: 'tacheng', letter: 'T' },
  { name: '阿勒泰', code: '654300', pinyin: 'aletai', letter: 'A' },
  { name: '石河子', code: '659001', pinyin: 'shihezi', letter: 'S' },
  { name: '阿拉尔', code: '659002', pinyin: 'alaer', letter: 'A' },
  { name: '图木舒克', code: '659003', pinyin: 'tumushuke', letter: 'T' },
  { name: '五家渠', code: '659004', pinyin: 'wujiaqu', letter: 'W' },
  { name: '北屯', code: '659005', pinyin: 'beitun', letter: 'B' },
  { name: '铁门关', code: '659006', pinyin: 'tiemenguan', letter: 'T' },
  { name: '双河', code: '659007', pinyin: 'shuanghe', letter: 'S' },
  { name: '可克达拉', code: '659008', pinyin: 'kekedala', letter: 'K' },
  { name: '昆玉', code: '659009', pinyin: 'kunyu', letter: 'K' },
  { name: '胡杨河', code: '659010', pinyin: 'huyanghe', letter: 'H' },
]

export function getAllRegions(): Region[] {
  return [...hotCities, ...provinces, ...cities]
}

export function getRegionGroups(): RegionGroup[] {
  const all = getAllRegions()
  const groups: Record<string, Region[]> = {}
  
  all.forEach(region => {
    const letter = region.letter
    if (!groups[letter]) {
      groups[letter] = []
    }
    groups[letter].push(region)
  })
  
  return Object.keys(groups)
    .sort()
    .map(letter => ({
      letter,
      list: groups[letter].sort((a, b) => a.pinyin.localeCompare(b.pinyin))
    }))
}

export function getLetters(): string[] {
  return 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
}

export function searchRegions(keyword: string, list: Region[]): Region[] {
  if (!keyword) return list
  const kw = keyword.toLowerCase()
  return list.filter(r => 
    r.name.includes(keyword) || 
    r.pinyin.includes(kw) ||
    r.letter.toLowerCase() === kw
  )
}

export function saveSelectedRegion(region: Region) {
  uni.setStorageSync('selectedRegion', region)
}

export function getSelectedRegion(): Region | null {
  return uni.getStorageSync('selectedRegion') || null
}

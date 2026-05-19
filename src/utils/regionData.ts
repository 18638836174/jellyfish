export interface Province {
  code: string
  name: string
  cities: City[]
}

export interface City {
  code: string
  name: string
  districts: District[]
}

export interface District {
  code: string
  name: string
}

export const provinces: Province[] = [
  {
    code: '110000',
    name: '北京市',
    cities: [
      {
        code: '110100',
        name: '市辖区',
        districts: [
          { code: '110101', name: '东城区' },
          { code: '110102', name: '西城区' },
          { code: '110105', name: '朝阳区' },
          { code: '110106', name: '丰台区' },
          { code: '110107', name: '石景山区' },
          { code: '110108', name: '海淀区' },
          { code: '110109', name: '门头沟区' },
          { code: '110111', name: '房山区' },
          { code: '110112', name: '通州区' },
          { code: '110113', name: '顺义区' },
          { code: '110114', name: '昌平区' },
          { code: '110115', name: '大兴区' },
          { code: '110116', name: '怀柔区' },
          { code: '110117', name: '平谷区' },
          { code: '110118', name: '密云区' },
          { code: '110119', name: '延庆区' }
        ]
      }
    ]
  },
  {
    code: '120000',
    name: '天津市',
    cities: [
      {
        code: '120100',
        name: '市辖区',
        districts: [
          { code: '120101', name: '和平区' },
          { code: '120102', name: '河东区' },
          { code: '120103', name: '河西区' },
          { code: '120104', name: '南开区' },
          { code: '120105', name: '河北区' },
          { code: '120106', name: '红桥区' },
          { code: '120110', name: '东丽区' },
          { code: '120111', name: '西青区' },
          { code: '120112', name: '津南区' },
          { code: '120113', name: '北辰区' },
          { code: '120114', name: '武清区' },
          { code: '120115', name: '宝坻区' },
          { code: '120116', name: '滨海新区' },
          { code: '120117', name: '宁河区' },
          { code: '120118', name: '静海区' },
          { code: '120119', name: '蓟州区' }
        ]
      }
    ]
  },
  {
    code: '310000',
    name: '上海市',
    cities: [
      {
        code: '310100',
        name: '市辖区',
        districts: [
          { code: '310101', name: '黄浦区' },
          { code: '310104', name: '徐汇区' },
          { code: '310105', name: '长宁区' },
          { code: '310106', name: '静安区' },
          { code: '310107', name: '普陀区' },
          { code: '310109', name: '虹口区' },
          { code: '310110', name: '杨浦区' },
          { code: '310112', name: '闵行区' },
          { code: '310113', name: '宝山区' },
          { code: '310114', name: '嘉定区' },
          { code: '310115', name: '浦东新区' },
          { code: '310116', name: '金山区' },
          { code: '310117', name: '松江区' },
          { code: '310118', name: '青浦区' },
          { code: '310120', name: '奉贤区' },
          { code: '310151', name: '崇明区' }
        ]
      }
    ]
  },
  {
    code: '440000',
    name: '广东省',
    cities: [
      {
        code: '440100',
        name: '广州市',
        districts: [
          { code: '440103', name: '荔湾区' },
          { code: '440104', name: '越秀区' },
          { code: '440105', name: '海珠区' },
          { code: '440106', name: '天河区' },
          { code: '440111', name: '白云区' },
          { code: '440112', name: '黄埔区' },
          { code: '440113', name: '番禺区' },
          { code: '440114', name: '花都区' },
          { code: '440115', name: '南沙区' },
          { code: '440117', name: '从化区' },
          { code: '440118', name: '增城区' }
        ]
      },
      {
        code: '440300',
        name: '深圳市',
        districts: [
          { code: '440303', name: '罗湖区' },
          { code: '440304', name: '福田区' },
          { code: '440305', name: '南山区' },
          { code: '440306', name: '宝安区' },
          { code: '440307', name: '龙岗区' },
          { code: '440308', name: '盐田区' },
          { code: '440309', name: '龙华区' },
          { code: '440310', name: '坪山区' },
          { code: '440311', name: '光明区' },
          { code: '440312', name: '大鹏新区' }
        ]
      },
      {
        code: '440400',
        name: '珠海市',
        districts: [
          { code: '440402', name: '香洲区' },
          { code: '440403', name: '斗门区' },
          { code: '440404', name: '金湾区' }
        ]
      },
      {
        code: '440500',
        name: '汕头市',
        districts: [
          { code: '440507', name: '龙湖区' },
          { code: '440511', name: '金平区' },
          { code: '440512', name: '濠江区' },
          { code: '440513', name: '潮阳区' },
          { code: '440514', name: '潮南区' },
          { code: '440515', name: '澄海区' },
          { code: '440523', name: '南澳县' }
        ]
      },
      {
        code: '440600',
        name: '佛山市',
        districts: [
          { code: '440604', name: '禅城区' },
          { code: '440605', name: '南海区' },
          { code: '440606', name: '顺德区' },
          { code: '440607', name: '三水区' },
          { code: '440608', name: '高明区' }
        ]
      },
      {
        code: '440700',
        name: '江门市',
        districts: [
          { code: '440703', name: '蓬江区' },
          { code: '440704', name: '江海区' },
          { code: '440705', name: '新会区' },
          { code: '440781', name: '台山市' },
          { code: '440783', name: '开平市' },
          { code: '440784', name: '鹤山市' },
          { code: '440785', name: '恩平市' }
        ]
      },
      {
        code: '440800',
        name: '湛江市',
        districts: [
          { code: '440802', name: '赤坎区' },
          { code: '440803', name: '霞山区' },
          { code: '440804', name: '坡头区' },
          { code: '440811', name: '麻章区' },
          { code: '440823', name: '遂溪县' },
          { code: '440825', name: '徐闻县' },
          { code: '440881', name: '廉江市' },
          { code: '440882', name: '雷州市' },
          { code: '440883', name: '吴川市' }
        ]
      },
      {
        code: '440900',
        name: '茂名市',
        districts: [
          { code: '440902', name: '茂南区' },
          { code: '440904', name: '电白区' },
          { code: '440981', name: '高州市' },
          { code: '440982', name: '化州市' },
          { code: '440983', name: '信宜市' }
        ]
      },
      {
        code: '441200',
        name: '肇庆市',
        districts: [
          { code: '441202', name: '端州区' },
          { code: '441203', name: '鼎湖区' },
          { code: '441204', name: '高要区' },
          { code: '441223', name: '广宁县' },
          { code: '441224', name: '怀集县' },
          { code: '441225', name: '封开县' },
          { code: '441226', name: '德庆县' },
          { code: '441284', name: '四会市' }
        ]
      },
      {
        code: '441300',
        name: '惠州市',
        districts: [
          { code: '441302', name: '惠城区' },
          { code: '441303', name: '惠阳区' },
          { code: '441322', name: '博罗县' },
          { code: '441323', name: '惠东县' },
          { code: '441324', name: '龙门县' }
        ]
      },
      {
        code: '441400',
        name: '梅州市',
        districts: [
          { code: '441402', name: '梅江区' },
          { code: '441403', name: '梅县区' },
          { code: '441422', name: '大埔县' },
          { code: '441423', name: '丰顺县' },
          { code: '441424', name: '五华县' },
          { code: '441426', name: '平远县' },
          { code: '441427', name: '蕉岭县' },
          { code: '441481', name: '兴宁市' }
        ]
      },
      {
        code: '441500',
        name: '汕尾市',
        districts: [
          { code: '441502', name: '城区' },
          { code: '441521', name: '海丰县' },
          { code: '441523', name: '陆河县' },
          { code: '441581', name: '陆丰市' }
        ]
      },
      {
        code: '441600',
        name: '河源市',
        districts: [
          { code: '441602', name: '源城区' },
          { code: '441621', name: '紫金县' },
          { code: '441622', name: '龙川县' },
          { code: '441623', name: '连平县' },
          { code: '441624', name: '和平县' },
          { code: '441625', name: '东源县' }
        ]
      },
      {
        code: '441700',
        name: '阳江市',
        districts: [
          { code: '441702', name: '江城区' },
          { code: '441704', name: '阳东区' },
          { code: '441721', name: '阳西县' },
          { code: '441781', name: '阳春市' }
        ]
      },
      {
        code: '441800',
        name: '清远市',
        districts: [
          { code: '441802', name: '清城区' },
          { code: '441803', name: '清新区' },
          { code: '441821', name: '佛冈县' },
          { code: '441823', name: '阳山县' },
          { code: '441825', name: '连山壮族瑶族自治县' },
          { code: '441826', name: '连南瑶族自治县' },
          { code: '441881', name: '英德市' },
          { code: '441882', name: '连州市' }
        ]
      },
      {
        code: '441900',
        name: '东莞市',
        districts: [
          { code: '441901', name: '东莞市' }
        ]
      },
      {
        code: '442000',
        name: '中山市',
        districts: [
          { code: '442001', name: '中山市' }
        ]
      },
      {
        code: '445100',
        name: '潮州市',
        districts: [
          { code: '445102', name: '湘桥区' },
          { code: '445103', name: '潮安区' },
          { code: '445122', name: '饶平县' }
        ]
      },
      {
        code: '445200',
        name: '揭阳市',
        districts: [
          { code: '445202', name: '榕城区' },
          { code: '445203', name: '揭东区' },
          { code: '445222', name: '揭西县' },
          { code: '445224', name: '惠来县' },
          { code: '445281', name: '普宁市' }
        ]
      },
      {
        code: '445300',
        name: '云浮市',
        districts: [
          { code: '445302', name: '云城区' },
          { code: '445303', name: '云安区' },
          { code: '445321', name: '新兴县' },
          { code: '445322', name: '郁南县' },
          { code: '445381', name: '罗定市' }
        ]
      }
    ]
  },
  {
    code: '330000',
    name: '浙江省',
    cities: [
      {
        code: '330100',
        name: '杭州市',
        districts: [
          { code: '330102', name: '上城区' },
          { code: '330105', name: '拱墅区' },
          { code: '330106', name: '西湖区' },
          { code: '330108', name: '滨江区' },
          { code: '330109', name: '萧山区' },
          { code: '330110', name: '余杭区' },
          { code: '330111', name: '临平区' },
          { code: '330112', name: '钱塘区' },
          { code: '330113', name: '富阳区' },
          { code: '330114', name: '临安区' },
          { code: '330122', name: '桐庐县' },
          { code: '330127', name: '淳安县' },
          { code: '330182', name: '建德市' }
        ]
      },
      {
        code: '330200',
        name: '宁波市',
        districts: [
          { code: '330203', name: '海曙区' },
          { code: '330205', name: '江北区' },
          { code: '330206', name: '北仑区' },
          { code: '330211', name: '镇海区' },
          { code: '330212', name: '鄞州区' },
          { code: '330213', name: '奉化区' },
          { code: '330225', name: '象山县' },
          { code: '330226', name: '宁海县' },
          { code: '330281', name: '余姚市' },
          { code: '330282', name: '慈溪市' }
        ]
      },
      {
        code: '330300',
        name: '温州市',
        districts: [
          { code: '330302', name: '鹿城区' },
          { code: '330303', name: '龙湾区' },
          { code: '330304', name: '瓯海区' },
          { code: '330305', name: '洞头区' },
          { code: '330324', name: '永嘉县' },
          { code: '330326', name: '平阳县' },
          { code: '330327', name: '苍南县' },
          { code: '330328', name: '文成县' },
          { code: '330329', name: '泰顺县' },
          { code: '330381', name: '瑞安市' },
          { code: '330382', name: '乐清市' },
          { code: '330383', name: '龙港市' }
        ]
      },
      {
        code: '330400',
        name: '嘉兴市',
        districts: [
          { code: '330402', name: '南湖区' },
          { code: '330411', name: '秀洲区' },
          { code: '330421', name: '嘉善县' },
          { code: '330424', name: '海盐县' },
          { code: '330481', name: '海宁市' },
          { code: '330482', name: '平湖市' },
          { code: '330483', name: '桐乡市' }
        ]
      },
      {
        code: '330500',
        name: '湖州市',
        districts: [
          { code: '330502', name: '吴兴区' },
          { code: '330503', name: '南浔区' },
          { code: '330521', name: '德清县' },
          { code: '330522', name: '长兴县' },
          { code: '330523', name: '安吉县' }
        ]
      },
      {
        code: '330600',
        name: '绍兴市',
        districts: [
          { code: '330602', name: '越城区' },
          { code: '330603', name: '柯桥区' },
          { code: '330604', name: '上虞区' },
          { code: '330624', name: '新昌县' },
          { code: '330681', name: '诸暨市' },
          { code: '330683', name: '嵊州市' }
        ]
      },
      {
        code: '330700',
        name: '金华市',
        districts: [
          { code: '330702', name: '婺城区' },
          { code: '330703', name: '金东区' },
          { code: '330723', name: '武义县' },
          { code: '330726', name: '浦江县' },
          { code: '330727', name: '磐安县' },
          { code: '330781', name: '兰溪市' },
          { code: '330782', name: '义乌市' },
          { code: '330783', name: '东阳市' },
          { code: '330784', name: '永康市' }
        ]
      },
      {
        code: '330800',
        name: '衢州市',
        districts: [
          { code: '330802', name: '柯城区' },
          { code: '330803', name: '衢江区' },
          { code: '330822', name: '常山县' },
          { code: '330823', name: '开化县' },
          { code: '330824', name: '龙游县' },
          { code: '330881', name: '江山市' }
        ]
      },
      {
        code: '330900',
        name: '舟山市',
        districts: [
          { code: '330902', name: '定海区' },
          { code: '330903', name: '普陀区' },
          { code: '330906', name: '岱山县' },
          { code: '330921', name: '嵊泗县' }
        ]
      },
      {
        code: '331000',
        name: '台州市',
        districts: [
          { code: '331002', name: '椒江区' },
          { code: '331003', name: '黄岩区' },
          { code: '331004', name: '路桥区' },
          { code: '331022', name: '三门县' },
          { code: '331023', name: '天台县' },
          { code: '331024', name: '仙居县' },
          { code: '331081', name: '温岭市' },
          { code: '331082', name: '临海市' },
          { code: '331083', name: '玉环市' }
        ]
      },
      {
        code: '331100',
        name: '丽水市',
        districts: [
          { code: '331102', name: '莲都区' },
          { code: '331121', name: '青田县' },
          { code: '331122', name: '缙云县' },
          { code: '331123', name: '遂昌县' },
          { code: '331124', name: '松阳县' },
          { code: '331125', name: '云和县' },
          { code: '331126', name: '庆元县' },
          { code: '331127', name: '景宁畲族自治县' },
          { code: '331181', name: '龙泉市' }
        ]
      }
    ]
  },
  {
    code: '320000',
    name: '江苏省',
    cities: [
      {
        code: '320100',
        name: '南京市',
        districts: [
          { code: '320102', name: '玄武区' },
          { code: '320104', name: '秦淮区' },
          { code: '320105', name: '建邺区' },
          { code: '320106', name: '鼓楼区' },
          { code: '320111', name: '浦口区' },
          { code: '320113', name: '栖霞区' },
          { code: '320114', name: '雨花台区' },
          { code: '320115', name: '江宁区' },
          { code: '320116', name: '六合区' },
          { code: '320117', name: '溧水区' },
          { code: '320118', name: '高淳区' }
        ]
      },
      {
        code: '320200',
        name: '无锡市',
        districts: [
          { code: '320205', name: '锡山区' },
          { code: '320206', name: '惠山区' },
          { code: '320211', name: '滨湖区' },
          { code: '320213', name: '梁溪区' },
          { code: '320214', name: '新吴区' },
          { code: '320281', name: '江阴市' },
          { code: '320282', name: '宜兴市' }
        ]
      },
      {
        code: '320300',
        name: '徐州市',
        districts: [
          { code: '320302', name: '鼓楼区' },
          { code: '320303', name: '云龙区' },
          { code: '320305', name: '贾汪区' },
          { code: '320311', name: '泉山区' },
          { code: '320312', name: '铜山区' },
          { code: '320321', name: '丰县' },
          { code: '320322', name: '沛县' },
          { code: '320324', name: '睢宁县' },
          { code: '320381', name: '新沂市' },
          { code: '320382', name: '邳州市' }
        ]
      },
      {
        code: '320400',
        name: '常州市',
        districts: [
          { code: '320402', name: '天宁区' },
          { code: '320404', name: '钟楼区' },
          { code: '320411', name: '新北区' },
          { code: '320412', name: '武进区' },
          { code: '320413', name: '金坛区' },
          { code: '320481', name: '溧阳市' }
        ]
      },
      {
        code: '320500',
        name: '苏州市',
        districts: [
          { code: '320505', name: '虎丘区' },
          { code: '320506', name: '吴中区' },
          { code: '320507', name: '相城区' },
          { code: '320508', name: '姑苏区' },
          { code: '320509', name: '吴江区' },
          { code: '320581', name: '常熟市' },
          { code: '320582', name: '张家港市' },
          { code: '320583', name: '昆山市' },
          { code: '320585', name: '太仓市' }
        ]
      },
      {
        code: '320600',
        name: '南通市',
        districts: [
          { code: '320602', name: '崇川区' },
          { code: '320611', name: '港闸区' },
          { code: '320612', name: '通州区' },
          { code: '320623', name: '如东县' },
          { code: '320681', name: '启东市' },
          { code: '320682', name: '如皋市' },
          { code: '320684', name: '海门市' },
          { code: '320685', name: '海安市' }
        ]
      },
      {
        code: '320700',
        name: '连云港市',
        districts: [
          { code: '320703', name: '连云区' },
          { code: '320706', name: '海州区' },
          { code: '320707', name: '赣榆区' },
          { code: '320722', name: '东海县' },
          { code: '320723', name: '灌云县' },
          { code: '320724', name: '灌南县' }
        ]
      },
      {
        code: '320800',
        name: '淮安市',
        districts: [
          { code: '320803', name: '淮安区' },
          { code: '320804', name: '淮阴区' },
          { code: '320812', name: '清江浦区' },
          { code: '320813', name: '洪泽区' },
          { code: '320826', name: '涟水县' },
          { code: '320830', name: '盱眙县' },
          { code: '320831', name: '金湖县' }
        ]
      },
      {
        code: '320900',
        name: '盐城市',
        districts: [
          { code: '320902', name: '亭湖区' },
          { code: '320903', name: '盐都区' },
          { code: '320904', name: '大丰区' },
          { code: '320921', name: '响水县' },
          { code: '320922', name: '滨海县' },
          { code: '320923', name: '阜宁县' },
          { code: '320924', name: '射阳县' },
          { code: '320925', name: '建湖县' },
          { code: '320981', name: '东台市' }
        ]
      },
      {
        code: '321000',
        name: '扬州市',
        districts: [
          { code: '321002', name: '广陵区' },
          { code: '321003', name: '邗江区' },
          { code: '321012', name: '江都区' },
          { code: '321023', name: '宝应县' },
          { code: '321081', name: '仪征市' },
          { code: '321084', name: '高邮市' }
        ]
      },
      {
        code: '321100',
        name: '镇江市',
        districts: [
          { code: '321102', name: '京口区' },
          { code: '321111', name: '润州区' },
          { code: '321112', name: '丹徒区' },
          { code: '321181', name: '丹阳市' },
          { code: '321182', name: '扬中市' },
          { code: '321183', name: '句容市' }
        ]
      },
      {
        code: '321200',
        name: '泰州市',
        districts: [
          { code: '321202', name: '海陵区' },
          { code: '321203', name: '高港区' },
          { code: '321204', name: '姜堰区' },
          { code: '321281', name: '兴化市' },
          { code: '321282', name: '靖江市' },
          { code: '321283', name: '泰兴市' }
        ]
      },
      {
        code: '321300',
        name: '宿迁市',
        districts: [
          { code: '321302', name: '宿城区' },
          { code: '321311', name: '宿豫区' },
          { code: '321322', name: '沭阳县' },
          { code: '321323', name: '泗阳县' },
          { code: '321324', name: '泗洪县' }
        ]
      }
    ]
  },
  {
    code: '500000',
    name: '重庆市',
    cities: [
      {
        code: '500100',
        name: '市辖区',
        districts: [
          { code: '500101', name: '万州区' },
          { code: '500102', name: '涪陵区' },
          { code: '500103', name: '渝中区' },
          { code: '500104', name: '大渡口区' },
          { code: '500105', name: '江北区' },
          { code: '500106', name: '沙坪坝区' },
          { code: '500107', name: '九龙坡区' },
          { code: '500108', name: '南岸区' },
          { code: '500109', name: '北碚区' },
          { code: '500110', name: '綦江区' },
          { code: '500111', name: '大足区' },
          { code: '500112', name: '渝北区' },
          { code: '500113', name: '巴南区' },
          { code: '500114', name: '黔江区' },
          { code: '500115', name: '长寿区' },
          { code: '500116', name: '江津区' },
          { code: '500117', name: '合川区' },
          { code: '500118', name: '永川区' },
          { code: '500119', name: '南川区' },
          { code: '500120', name: '璧山区' },
          { code: '500151', name: '铜梁区' },
          { code: '500152', name: '潼南区' },
          { code: '500153', name: '荣昌区' },
          { code: '500154', name: '开州区' },
          { code: '500155', name: '梁平区' },
          { code: '500156', name: '武隆区' }
        ]
      },
      {
        code: '500200',
        name: '县',
        districts: [
          { code: '500229', name: '城口县' },
          { code: '500230', name: '丰都县' },
          { code: '500231', name: '垫江县' },
          { code: '500233', name: '忠县' },
          { code: '500235', name: '云阳县' },
          { code: '500236', name: '奉节县' },
          { code: '500237', name: '巫山县' },
          { code: '500238', name: '巫溪县' },
          { code: '500240', name: '石柱土家族自治县' },
          { code: '500241', name: '秀山土家族苗族自治县' },
          { code: '500242', name: '酉阳土家族苗族自治县' },
          { code: '500243', name: '彭水苗族土家族自治县' }
        ]
      }
    ]
  }
]

export const getProvinces = (): Province[] => {
  return provinces
}

export const getCities = (provinceCode: string): City[] => {
  const province = provinces.find(p => p.code === provinceCode)
  return province ? province.cities : []
}

export const getDistricts = (provinceCode: string, cityCode: string): District[] => {
  const province = provinces.find(p => p.code === provinceCode)
  if (!province) return []
  
  const city = province.cities.find(c => c.code === cityCode)
  return city ? city.districts : []
}

export const getProvinceName = (provinceCode: string): string => {
  const province = provinces.find(p => p.code === provinceCode)
  return province ? province.name : ''
}

export const getCityName = (provinceCode: string, cityCode: string): string => {
  const province = provinces.find(p => p.code === provinceCode)
  if (!province) return ''
  
  const city = province.cities.find(c => c.code === cityCode)
  return city ? city.name : ''
}

export const getDistrictName = (provinceCode: string, cityCode: string, districtCode: string): string => {
  const districts = getDistricts(provinceCode, cityCode)
  const district = districts.find(d => d.code === districtCode)
  return district ? district.name : ''
}

export const getFullAddress = (provinceCode: string, cityCode: string, districtCode: string): string => {
  return `${getProvinceName(provinceCode)}${getCityName(provinceCode, cityCode)}${getDistrictName(provinceCode, cityCode, districtCode)}`
}

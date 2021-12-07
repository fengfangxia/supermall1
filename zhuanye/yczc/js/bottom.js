﻿document.writeln("    <script type=\"text/javascript\" src=\"/style/sdk/index.js\"></script>");
document.writeln("    <script type=\"text/javascript\" src=\"/style/sdk/console.js\"></script>");
// 易观sdk
(function(c) {
    window.AnalysysAgent = window.AnalysysAgent || {}
    var a = window.AnalysysAgent || {}
    var ans = ['identify', 'alias', 'reset', 'track', 'profileSet', 'profileSetOnce', 'profileIncrement', 'profileAppend', 'profileUnset', 'profileDelete', 'registerSuperProperty', 'registerSuperProperties', 'unRegisterSuperProperty', 'clearSuperProperties', 'getSuperProperty', 'getSuperProperties', 'pageView', 'getDistinctId']
    a['config'] = c
    a['param'] = []

    function factory(b) {
        return function() {
            a['param'].push([b, arguments])
            return window.AnalysysAgent
        }
    }
    for (var i = 0; i < ans.length; i++) {
        a[ans[i]] = factory(ans[i])
    }
    if (c.name) {
        window[c.name] = a
    }
})({
    appkey: "ac7f0255710f2746", //APPKEY
    debugMode: 0,
    uploadURL: 'https://ubaxhjycloud.analysysdata.com',
    visitorConfigURL: 'https://ubaxhjycloud.analysysdata.com',
    /**如无自定义配置，则与uploadURL相同**/
    autoHeatmap: true
})
document.writeln("    <script type=\"text/javascript\" src=\"/style/sdk/AnalysysAgent_PageViewStayTime.min.js\"></script>");
document.writeln("    <script type=\"text/javascript\" src=\"/style/sdk/AnalysysAgent_JS_SDK.min.js\"></script>");


(function() {
    var lis = document.querySelectorAll('.select .left li')
    lis.forEach(function(v, k) {
        v.addEventListener('mouseover', function() {
            // 对本身class进行处理
            var lis = document.querySelectorAll('.select .left li')
            for (var i = 0; i < lis.length; i++) {
                console.dir(lis[i])
                lis[i].classList.remove('cur')
            }
            v.classList.add('cur')

            // 对应的内容进行处理
            var clis = document.querySelectorAll('.select .right li')
            for (var i = 0; i < clis.length; i++) {
                clis[i].classList.remove('cur')
            }
            // 根据当前的元素的下标去获取对应的元素对象
            clis[k].classList.add('cur')
                // console.log(clis[k]);
        })
    })
})()

document.writeln('<style>')
document.writeln('.combottom {')
document.writeln('  background: #f7f7f7;')
document.writeln('-moz-box-sizing: content-box;')
document.writeln('       box-sizing: content-box;')
document.writeln('  -webkit-box-sizing: content-box;')
document.writeln('  padding-bottom: 30px;')
document.writeln('}')
document.writeln('.combottom a {')
document.writeln('  color: #333333;')
document.writeln('}')
document.writeln('.bot_1 {')
document.writeln('  width: 1200px;')
document.writeln('  margin: 0 auto;')
document.writeln('  height: 210px;')
document.writeln('  background: #f7f7f7;')
document.writeln('  padding-top: 30px;')
document.writeln('  margin-top: 30px;')
document.writeln('}')
document.writeln('.bottom_1 {')
document.writeln('  height: 50px;')
document.writeln('}')
document.writeln('.bottom_1 div {')
document.writeln('  width: 24%;')
document.writeln('  float: left;')
document.writeln('  padding-left: 5.3%;')
document.writeln('  height: 50px;')
document.writeln('  margin-left: 4%;')
document.writeln('}')
document.writeln('.bottom_1 div h2,')
document.writeln('.zt_bottom_2 div h2 {')
document.writeln('  font-size: 18px;')
document.writeln('}')
document.writeln('.bottom_1 div p,')
document.writeln('.zt_bottom_2 div p {')
document.writeln('  line-height: 30px;')
document.writeln('}')
document.writeln('.icon1 {')
document.writeln('  background: url(/style/icon1.png) left center no-repeat;')
document.writeln('-moz-box-sizing: content-box;')
document.writeln('       box-sizing: content-box;')
document.writeln('  -webkit-box-sizing: content-box;')
document.writeln('}')
document.writeln('.bottom_1 h2 {')
document.writeln('  font-weight: normal;')
document.writeln('}')
document.writeln('.icon2 {')
document.writeln('  background: url(/style/icon2.png) left center no-repeat;')
document.writeln('-moz-box-sizing: content-box;')
document.writeln('       box-sizing: content-box;')
document.writeln('  -webkit-box-sizing: content-box;')
document.writeln('}')
document.writeln('.icon3 {')
document.writeln('  background: url(/style/icon3.png) left center no-repeat;')
document.writeln('-moz-box-sizing: content-box;')
document.writeln('       box-sizing: content-box;')
document.writeln('  -webkit-box-sizing: content-box;')
document.writeln('}')
document.writeln('.bottom_2 {')
document.writeln('  margin-top: 45px;')
document.writeln('  height: 80px;')
document.writeln('  padding: 0 50px;')
document.writeln('}')
document.writeln('.bottom_2 div {')
document.writeln('  height: 50px;')
document.writeln('  width: 150px;')
document.writeln('  border: 1px solid #dcdcdc;')
document.writeln('  float: left;')
document.writeln('  margin-right: 4px;')
document.writeln('  padding: 15px 0 15px 120px;')
document.writeln('}')
document.writeln('.bottom_2 div.icon7 {')
document.writeln('  margin-right: 0;')
document.writeln('}')
document.writeln('.bottom_2 div p b {')
document.writeln('  background: #fa4b54;')
document.writeln('  width: 110px;')
document.writeln('  height: 30px;')
document.writeln('  border-radius: 5px;')
document.writeln('  display: block;')
document.writeln('  color: #fff;')
document.writeln('  text-align: center;')
document.writeln('  line-height: 30px;')
document.writeln('}')
document.writeln('.bottom_2 div p i {')
document.writeln('  color: #70a7e2;')
document.writeln('  font-style: normal;')
document.writeln('  font-size: 16px;')
document.writeln('}')
document.writeln('.bottom_2 h2 a {')
document.writeln('  font-weight: normal;')
document.writeln('  color: #333333;')
document.writeln('}')
document.writeln('.bottom_2 h2 {')
document.writeln('  font-weight: normal;')
document.writeln('}')
document.writeln('.icon4 {')
document.writeln('  background: url(/style/icon4.png) 40px center no-repeat;')
document.writeln('-moz-box-sizing: content-box;')
document.writeln('       box-sizing: content-box;')
document.writeln('  -webkit-box-sizing: content-box;')
document.writeln('}')
document.writeln('.icon5 {')
document.writeln('  background: url(/style/icon5.png) 40px center no-repeat;')
document.writeln('-moz-box-sizing: content-box;')
document.writeln('       box-sizing: content-box;')
document.writeln('  -webkit-box-sizing: content-box;')
document.writeln('}')
document.writeln('.icon6 {')
document.writeln('  background: url(/style/icon6.png) 40px center no-repeat;')
document.writeln('-moz-box-sizing: content-box;')
document.writeln('       box-sizing: content-box;')
document.writeln('  -webkit-box-sizing: content-box;')
document.writeln('}')
document.writeln('.icon7 {')
document.writeln('  background: url(/style/icon7.png) 40px center no-repeat;')
document.writeln('-moz-box-sizing: content-box;')
document.writeln('       box-sizing: content-box;')
document.writeln('  -webkit-box-sizing: content-box;')
document.writeln('}')
document.writeln('')
document.writeln('</style>')

document.writeln('<div class="combottom">')
document.writeln('    <div class="bot_1">')
document.writeln('        <div class="w_1200 ">')
document.writeln('          <div class="bottom_1">')
document.writeln('            <a href="/QQ.html" target="_blank">')
document.writeln('            <div class="icon1">')
document.writeln('              <h2>技能+学籍</h2>')
document.writeln('              <p>技能加学籍，学信网可查，真实可信</p>')
document.writeln('            </div>')
document.writeln('            </a>')
document.writeln('            <a href="/QQ.html" target="_blank">')
document.writeln('            <div class="icon2">')
document.writeln('              <h2>20项热门专业自由选择</h2>')
document.writeln('              <p>丰富的专业课程设置，完全自由选择</p>')
document.writeln('            </div>')
document.writeln('            </a>')
document.writeln('            <a href="/QQ.html" target="_blank">')
document.writeln('            <div class="icon3">')
document.writeln('              <h2>毕业推荐就业</h2>')
document.writeln('              <p>5重就业帮扶体系，4项就业指导服务</p>')
document.writeln('            </div>')
document.writeln('            </a>')
document.writeln('          </div>')
document.writeln('          <div class="bottom_2">')
document.writeln('            <a href="/p/luxian/" target="_blank">')
document.writeln('            <div class="icon4">')
document.writeln('              <h2>')
document.writeln('                学校地址')
document.writeln('              </h2>')
document.writeln('              <p>最方便的乘车路线</p>')
document.writeln('            </div>')
document.writeln('            </a>')
document.writeln('            <a href="/QQ.html" target="_blank">')
document.writeln('                <div class="icon5">')
document.writeln('                <h2>')
document.writeln('                    在线咨询')
document.writeln('                </h2>')
document.writeln('                <p>来校讲解答疑</p>')
document.writeln('                </div>')
document.writeln('            </a>')
document.writeln('            <a href="/QQ.html" target="_blank">')
document.writeln('            <div class="icon6">')
document.writeln('              <h2>')
document.writeln('                企业助学')
document.writeln('              </h2>')
document.writeln('              <p>')
document.writeln('                <b>预约助学金名额</b>')
document.writeln('              </p>')
document.writeln('            </div>')
document.writeln('            </a>')
document.writeln('            <a href="/2015/2016lxb/">')
document.writeln('            <div class="icon7">')
document.writeln('              <h2>咨询热线</h2>')
document.writeln('              <p>')
document.writeln('                <i>020-39973999</i>')
document.writeln('              </p>')
document.writeln('            </div>')
document.writeln('            </a>')
document.writeln('          </div>')
document.writeln('        </div>')
document.writeln('    </div>')
document.writeln('</div>')

document.writeln('<div class="clear"></div>')
document.writeln('<div class="newfoot">')
document.writeln('	<div class="nfcont">')
document.writeln('		<div class="dbmk">')
document.writeln('			<a href="/QQ.html" target="_blank"><p class="dbmkbt">热门专业推荐</p></a>')
document.writeln('			<a href="/2017/yuecai/" target="_blank">粤菜专业</a>')
document.writeln('			<a href="/2017/chuanxiang/" target="_blank">川湘专业</a>')
document.writeln('			<a href="/zt/zhxd/" target="_blank">西点专业</a>')
document.writeln('			<a href="/2017/xican/" target="_blank">西餐专业</a>')
document.writeln('			<a href="/QQ.html" target="_blank">更多专业</a>')
document.writeln('		</div>')
document.writeln('		')
document.writeln('		<div class="dbmk">')
document.writeln('			<a href="/p/jiuye/" target="_blank"><p class="dbmkbt">我的就业</p></a>')
document.writeln('			<a href="/p/jiuye/" target="_blank">就业帮扶</a>')
document.writeln('			<a href="/QQ.html" target="_blank">校企合作</a>')
document.writeln('			<a href="/QQ.html" target="_blank">优秀学子</a>')
document.writeln('			<a href="/QQ.html" target="_blank">考证相关</a>')
document.writeln('			<a href="/QQ.html" target="_blank">咨询就业</a>')
document.writeln('		</div>')
document.writeln('		')
document.writeln('		<div class="dbmk">')
document.writeln(
    '			<a href="/p/huanjing/shenghuo/" target="_blank"><p class="dbmkbt">我的生活</p></a>'
)
document.writeln('			<a href="/p/huanjing/xiaoneihuanjing/" target="_blank">校园环境</a>')
document.writeln('			<a href="/p/huanjing/monijiudian/" target="_blank">实训环境</a>')
document.writeln('			<a href="/p/huanjing/shenghuo/" target="_blank">校园生活</a>')
document.writeln('			<a href="/p/huanjing/huodong/" target="_blank">精彩活动</a>')
document.writeln('			<a href="/p/zuopin/" target="_blank">学生作品</a>')
document.writeln('		</div>')
document.writeln('		')
document.writeln('		<div class="dbmk dbrbm">')
document.writeln('			<p class="dbmkbt">在线报名</p>')
document.writeln('			<div class="ndbbm">')
document.writeln(
    '				<form name="feedback" method="post" enctype="multipart/form-data" action="/e/enews/index.php"  onsubmit="return dcheck()">	'
)
document.writeln('					<input name="enews" value="AddFeedback" type="hidden">')
document.writeln('					<input value="9" name="bid" type="hidden">')
document.writeln('					<input value="9" name="ecmsfrom" type="hidden" id="ecmsfrom">')
document.writeln(
    '					<input  name="title" value="姓名" onfocus="if(this.value==\'姓名\'){this.value=\'\';};" onblur="if(this.value==\'\'){this.value=\'姓名\';};" id="username" type="text">'
)
document.writeln(
    '					<input name="mycall" value="请输入您的电话" onfocus="if(this.value==\'请输入您的电话\'){this.value=\'\';};" onblur="if(this.value==\'\'){this.value=\'请输入您的电话\';};" id="phone" type="text">'
)
document.writeln('					<select name="zhuanye" >')
document.writeln('						<option value="未选择专业">请选择您的专业</option>')
document.writeln('						<option value="粤菜专业">粤菜专业</option>')
document.writeln('					  <option value="川湘菜专业">川湘菜专业</option>')
document.writeln('						<option value="西点专业">西点专业</option>')
document.writeln('						<option value="西餐专业">西餐专业</option>')
document.writeln('						<option value="日本料理">日本料理</option>')
document.writeln('						<option value="其他专业">其他专业</option>')
document.writeln('					</select>')
document.writeln('					<input name="submit" value="提交" class="dbtijiao" type="submit">')
document.writeln('				</form>')
document.writeln('			</div>')
document.writeln('		</div>')
document.writeln('		<div class="clear"></div>')
document.writeln('		')
document.writeln('		<div class="dbbeian">')
document.writeln('			<div class="ldbba">')
document.writeln('				<a href="/" target="_blank"><img src="/style/dblogo.png"></a>')
document.writeln('			</div>')
document.writeln('			<div class="dbba">')
document.writeln('				<a href="/2015/2016lxb/" target="_blank">报名热线:020-39973999</a>')
document.writeln(
    '				<a href="/p/luxian/" target="_blank">番禺校区地址：广州市番禺区石基镇新桥村泰安路47号</a>'
)
document.writeln(
    '				<a href="/p/luxian/" target="_blank">南沙校区地址：广州市南沙区东涌镇小乌村市鱼路233号</a>'
)
document.writeln(
        '				<a href="/p/luxian/" target="_blank">海珠校区地址：广州市海珠区宝岗大道268号中新大厦4楼</a>'
    )
    // document.writeln("				<p><a href=\"http://beian.miit.gov.cn\" target=\"_blank\" class=\"beian\">粤ICP备11053362号</a> 广州市新东方烹饪职业培训学校有限公司</p>");
document.writeln('<p>版权所有：广州市新东方烹饪职业培训学校有限公司</p>')
document.writeln(
    '                                <p class="beian1"><a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44011302002724"><img src="/style/beiancon.png"><span>粤公网安备 44011302002724号<span></a><a href="http://beian.miit.gov.cn" target="_blank" class="beian" rel="nofollow">粤ICP备11053362号</a> </p>'
)
document.writeln('			</div>')
document.writeln('			')
document.writeln('			<div class="dbwx">')
document.writeln('				<div class="wximg">')
document.writeln('					<img src="/style/fuwu.jpg">')
document.writeln('					<p>关注服务号</p>')
document.writeln('				</div>')
document.writeln('				<div class="wximg">')
document.writeln('					<img src="/style/dingyue.jpg">')
document.writeln('					<p>关注订阅号</p>')
document.writeln('				</div>')
document.writeln('			</div>')
document.writeln('			<div class="clear"></div>')
document.writeln('		</div>')
document.writeln('		')
document.writeln('	</div>')
document.writeln('	')
document.writeln('</div>')
document.writeln('<style>')
document.writeln('	.clear {')
document.writeln('		clear:both;	')
document.writeln('	}')
document.writeln('	.newfoot {')
document.writeln('	background-color:#262626;')
document.writeln('	padding-top:36px;')
document.writeln('	margin-top:36px;')
document.writeln('	width:100%;')
document.writeln('	margin:0 auto;')
document.writeln('}')
document.writeln('.newfoot .nfcont {')
document.writeln('	width:1200px;	')
document.writeln('	color:#a0a0a0;')
document.writeln('	margin:0 auto;')
document.writeln('}')
document.writeln('.newfoot .nfcont .dbmk {')
document.writeln('	float:left;')
document.writeln('	width:186px;')
document.writeln('	margin-right:93px;')
document.writeln('}')
document.writeln('.newfoot .nfcont .dbmk a {')
document.writeln('	display:block;')
document.writeln('	color:#a0a0a0;	')
document.writeln('	font-size:15px;')
document.writeln('	margin:6px 0;')
document.writeln('}')
document.writeln('.newfoot .nfcont .dbmk a:hover {')
document.writeln('	color:#E67015;	')
document.writeln('}')
document.writeln('.newfoot .nfcont .dbmk .dbmkbt {')
document.writeln('	font-size:17px;')
document.writeln('	border-bottom: 1px solid #535353;')
document.writeln('	padding:6px 0;')
document.writeln('	color:#BBBBBB;')
document.writeln('}')
document.writeln('.newfoot .nfcont .dbmk.dbrbm {')
document.writeln('	width:360px;')
document.writeln('	float:right;')
document.writeln('	margin-right:0;	')
document.writeln('}')
document.writeln('')
document.writeln('.dbrbm input, .dbrbm select{')
document.writeln('  width: 165px;')
document.writeln('  height: 35px;')
document.writeln('  line-height: 35px;')
document.writeln('  border: 1px solid #626262;')
document.writeln('  color: #a0a0a0;')
document.writeln('  border-radius: 3px;')
document.writeln('  background-color: transparent;')
document.writeln('  padding-left: 5px;')
document.writeln('  font-size: 16px;')
document.writeln('  float: left;')
document.writeln('  margin-top:16px;')
document.writeln('}')
document.writeln('.dbrbm select option {')
document.writeln('	color:#555555;	')
document.writeln('}')
document.writeln('.dbrbm #phone {')
document.writeln('	float:right;	')
document.writeln('}')
document.writeln('.dbrbm input.dbtijiao {')
document.writeln('  background-color: #E67015;')
document.writeln('  padding-left: 0;')
document.writeln('  color: #ffffff;')
document.writeln('  border: none;')
document.writeln('  float:right;')
document.writeln('  cursor: pointer;')
document.writeln('}')
document.writeln('.newfoot .dbbeian {')
document.writeln('	border-top: 1px solid #535353;	')
document.writeln('	margin-top:16px;')
document.writeln('	padding:16px 0;')
document.writeln('}')
document.writeln('.newfoot .ldbba {')
document.writeln('	float:left;')
document.writeln('	padding:60px 16px;')
document.writeln('	border-right: 1px solid #535353;')
document.writeln('	margin-left: 136px;')
document.writeln('}')
document.writeln('.newfoot .dbba {')
document.writeln('	float:left;	')
document.writeln('}')
document.writeln('.newfoot .dbba a, .newfoot .dbba p {')
document.writeln('	display:block;	')
document.writeln('	font-size:15px;')
document.writeln('	color: #a0a0a0;')
document.writeln('	margin:9px 16px;')
document.writeln('}')
document.writeln('.newfoot .dbwx {')
document.writeln('	float:left;	')
document.writeln('	padding-top: 60px;	')
document.writeln('}')
document.writeln('.newfoot .dbwx .wximg {')
document.writeln('	float:left;	')
document.writeln('	margin-right:16px;')
document.writeln('}')
document.writeln('.newfoot .dbwx .wximg img {')
document.writeln('	width:100px;	')
document.writeln('}')
document.writeln('.newfoot .dbwx .wximg p {')
document.writeln('	text-align:center;')
document.writeln('	font-size:14px;')
document.writeln('	line-height:20px;	')
document.writeln('}')
document.writeln('.newfoot .dbba a.beian {')
document.writeln('    display: block;')
document.writeln('    float: left;')
document.writeln('    margin-left: 10px;')
document.writeln('}')
document.writeln('.newfoot .beian1 a {')
document.writeln('    overflow: hidden;')
document.writeln('    float: left;')
document.writeln('    margin: 0;')
document.writeln('}')
document.writeln('.newfoot .beian1 img {')
document.writeln('    float: left;')
document.writeln('    margin-right: 4px;')
document.writeln('}')
document.writeln('.newfoot .beian1 span {')
document.writeln('    display: block;')
document.writeln('    float: left;')
document.writeln('}')
document.writeln('</style>')

document.writeln('<div class="fdhead">')
document.writeln('	<div class="fdcont">')
document.writeln('		<a href="/" target="_blank" class="fdlogo"><img src="/style/fdlogo.png"></a>')
document.writeln('		<ul>')
document.writeln('			<li><a href="/" target="_blank">网站首页</a></li>')
document.writeln('			<li><a href="/p/gaikuang/" target="_blank">学校简介</a></li>')
document.writeln('<li><a href="/zt/xuefei/" target="_blank">学费标准</a></li>')
document.writeln('			<li><a href="/p/zhuanye/" target="_blank">专业设置</a></li>')
document.writeln('			<li><a href="/msgt/" target="_blank">烹饪教师</a></li>')
document.writeln('			<li><a href="/p/zuopin/" target="_blank">学生作品</a></li>')
document.writeln('			<li><a href="/p/jiuye/" target="_blank">就业帮扶</a></li>')
document.writeln('			<li><a href="/p/huanjing/" target="_blank">校园环境</a></li>')
document.writeln('			<li><a href="/p/ruxue/" target="_blank">入学须知</a></li>')
document.writeln('			<li><a href="/p/baoming/" target="_blank">在线报名</a></li>')
document.writeln('			<div class="clear"></div>')
document.writeln('		</ul>')
document.writeln('		<div class="clear"></div>')
document.writeln('	</div>')
document.writeln('</div>')
document.writeln('')

document.writeln('<style>')
document.writeln('.fdhead {')
document.writeln('  background-color:#E67015;')
document.writeln('  display: none;')
document.writeln('  height: 66px;')
document.writeln('  left: 0;')
document.writeln('  line-height: 66px;')
document.writeln('  position: fixed;')
document.writeln('  top: 0;')
document.writeln('  width: 100%;')
document.writeln('  z-index: 999;')
document.writeln('}')
document.writeln('.fdhead .fdcont {')
document.writeln('	width:1216px;	')
document.writeln('	margin:0 auto;')
document.writeln('}')
document.writeln('.fdhead a.fdlogo {')
document.writeln('		float:left;')
document.writeln('		float:left;')
document.writeln('		padding-top:8px;')
document.writeln('}')
document.writeln('.fdhead .fdcont ul {')
document.writeln('	width:861px;')
document.writeln('	float:right;	')
document.writeln('}')
document.writeln('.fdhead .fdcont li {')
document.writeln('	float:left;')
document.writeln('	width:10%;')
document.writeln('	text-align:center;')
document.writeln('}')
document.writeln('.fdhead .fdcont li a {')
document.writeln('	color:#ffffff;')
document.writeln('	font-size:17px;	')
document.writeln('}')
document.writeln('.disnone')
document.writeln('	display:none !important;')
document.writeln('}')
document.writeln('.jesong-container-mini-badge {')
document.writeln('	z-index: 9999;')
document.writeln('}')
document.writeln('</style>')
showScroll()

function showScroll() {
    $(window).scroll(function() {
        var scrollValue = $(window).scrollTop()
        scrollValue > 160 ? $('.fdhead').fadeIn() : $('.fdhead').fadeOut()
    })
}

document.writeln('<style>')
document.writeln('.hfixedr {')
document.writeln('    width: 78px;')
document.writeln('    position: fixed;')
document.writeln('    right: 0;')
document.writeln('    top: 25%;')
document.writeln('}')
document.writeln('')
document.writeln('.hfixedr ul li {')
document.writeln('    text-align: center;')
document.writeln('    font-size: 14px;')
document.writeln('    margin-bottom: 5px;')
document.writeln('}')
document.writeln('')
document.writeln('.hfixedr ul li a {')
document.writeln('    display: block;')
document.writeln('    width: 100%;')
document.writeln('    height: 78px;')
document.writeln('    background: #f69001;')
document.writeln('    color: #fff;')
document.writeln('    border-radius: 15px;')
document.writeln('}')
document.writeln('')
document.writeln('.hfixedr ul li a:hover {')
document.writeln('    background: #e64d60;')
document.writeln('}')
document.writeln('')
document.writeln('.hfixedr ul li a img {')
document.writeln('    display: block;')
document.writeln('    margin: auto;')
document.writeln('    padding: 13px 0 5px;')
document.writeln('}')
document.writeln('')
document.writeln('.hfixedr {')
document.writeln('    z-index: 999999 !important;')
document.writeln('}')
document.writeln('')
document.writeln('.hfixedr .online {')
document.writeln('    background-color: #fdad29;')
document.writeln('}')
document.writeln('')
document.writeln('.hfixedr .baoming {')
document.writeln('    background-color: #fd9229;')
document.writeln('}')
document.writeln('')
document.writeln('.hfixedr #backToTop {')
document.writeln('    background-color: #fd9229;')
document.writeln('}')
document.writeln('.right-fixed-box {')
document.writeln('    width: 135px;')
document.writeln('    position: fixed;')
document.writeln('    top: 240px;')
document.writeln('    left: -100%;')
document.writeln('    transition: 2s;')
document.writeln('    margin: 0;')
document.writeln('}')
document.writeln('')
document.writeln('.right-fixed-box-active {')
document.writeln('    left: 5px;')
document.writeln('    transition: 0.5s;')
document.writeln('    z-index: 9999;')
document.writeln('}')
document.writeln('')
document.writeln('.right-fixed-box ul {')
document.writeln('    margin-left: 0;')
document.writeln('    position: absolute;')
document.writeln('    top: 128px;')
document.writeln('    left: 0;')
document.writeln('}')
document.writeln('')
document.writeln('.right-fixed-box ul li {')
document.writeln('    width: 135px;')
document.writeln('    height: 26px;')
document.writeln('    margin-bottom: 6px;')
document.writeln('}')
document.writeln('')
document.writeln('.right-fixed-box ul li a {')
document.writeln('    display: block;')
document.writeln('    width: 135px;')
document.writeln('    height: 26px;')
document.writeln('}')
document.writeln('')
document.writeln('.right-fixed-box ul li:hover a {')
document.writeln('    color: #fff !important;')
document.writeln('}')
document.writeln('')
document.writeln('.right-fixed-box .left-close {')
document.writeln('    width: 18px;')
document.writeln('    height: 18px;')
document.writeln('    line-height: 18px;')
document.writeln('    font-size: 16px;')
document.writeln('    top: 0;')
document.writeln('    right: 0;')
document.writeln('    cursor: pointer;')
document.writeln('    position: absolute;')
document.writeln('}')

document.writeln('</style>')
document.writeln('<div class="right-fixed-box">')
document.writeln('        <div class="left-close"></div>')
document.writeln('        <a href="/QQ.html"><img src="/style/leftnav.png" alt=""></a>')
document.writeln('        <ul>')
document.writeln('            <li>')
document.writeln('                <a href="/QQ.html" target="_blank"></a>')
document.writeln('            </li>')
document.writeln('            <li>')
document.writeln('                <a href="/zt/xuefei/" target="_blank"></a>')
document.writeln('            </li>')
document.writeln('            <li>')
document.writeln('                <a href="/2018/czs/" target="_blank"></a>')
document.writeln('            </li>')
document.writeln('            <li>')
document.writeln('                <a href="/2018/gzs/" target="_blank"></a>')
document.writeln('            </li>')
document.writeln('            <li>')
document.writeln('                <a href="/QQ.html" target="_blank"></a>')
document.writeln('            </li>')
document.writeln('            <li>')
document.writeln('                <a href="/QQ.html" target="_blank"></a>')
document.writeln('            </li>')
document.writeln('            <li>')
document.writeln('                <a href="/zhuanye/youer/" target="_blank"></a>')
document.writeln('            </li>')
document.writeln('            <li>')
document.writeln('                <a href="/QQ.html" target="_blank"></a>')
document.writeln('            </li>')
document.writeln('        </ul>')
document.writeln('    </div>')
document.writeln('')
document.writeln('')
document.writeln('<style>')
document.writeln('.rightnav {')
document.writeln('  width: 158px;')
document.writeln('  position: fixed;')
document.writeln('  right: 0;')
document.writeln('  top: 280px;')
document.writeln('  z-index: 999;')
document.writeln('  box-sizing: unset !important;')
document.writeln('}')
document.writeln('.rightnav ul {')
document.writeln('  margin-left: 40px;')
document.writeln('  box-sizing: unset !important;')
document.writeln('}')
document.writeln('.rightnav ul li img {')
document.writeln('  display: inline-block;')
document.writeln('  margin-top: 18px;')
document.writeln('  margin-bottom: 5px;')
document.writeln('  box-sizing: unset !important;')
document.writeln('}')
document.writeln('.rightnav ul li a {')
document.writeln('  display: block;')
document.writeln('  margin: 0;')
document.writeln('  position: relative;')
document.writeln('  text-align: center;')
document.writeln('  width: 94px;')
document.writeln('  height: 94px;')
document.writeln('  box-sizing: unset !important;')
document.writeln('}')
document.writeln('.rightnav ul li .phone {')
document.writeln('  background: #ff991a;')
document.writeln('  box-sizing: unset !important;')
document.writeln('}')
document.writeln('.rightnav ul li .baoming {')
document.writeln('  background: #ff6600;')
document.writeln('  box-sizing: unset !important;')
document.writeln('}')
document.writeln('.rightnav ul li .xuefei {')
document.writeln('  background: #fbc50c;')
document.writeln('  box-sizing: unset !important;')
document.writeln('}')
document.writeln('.rightnav ul li #backToTop {')
document.writeln('  background: #5c1003;')
document.writeln('  border-radius: 0 0 3px 3px;')
document.writeln('  box-sizing: unset !important;')
document.writeln('}')
document.writeln('.rightnav ul li p {')
document.writeln('  font-size: 18px;')
document.writeln('  color: white;')
document.writeln('  box-sizing: unset !important;')
document.writeln('}')
document.writeln('</style>')

document.writeln('<div class="rightnav">')
document.writeln(
    '        <div class="headimg"><img src="/style/update/rightnav/head.png" alt=""></div>'
)
document.writeln('        <ul>')
document.writeln('            <li>')
document.writeln('                <a href="/QQ.html" target="_blank" class="phone">')
document.writeln('                    <img src="/style/update/rightnav/icon01.png" alt="">')
document.writeln('                    <p>在线电话</p>')
document.writeln('                </a>')
document.writeln('            </li>')
document.writeln('            <li>')
document.writeln('                <a href="/QQ.html" target="_blank" class="baoming">')
document.writeln('                    <img src="/style/update/rightnav/icon02.png" alt="">')
document.writeln('                    <p>在线报名</p>')
document.writeln('                </a>')
document.writeln('            </li>')
document.writeln('            <li>')
document.writeln('                <a href="/QQ.html" target="_blank" class="xuefei">')
document.writeln('                    <img src="/style/update/rightnav/icon03.png" alt="">')
document.writeln('                    <p>学费咨询</p>')
document.writeln('                </a>')
document.writeln('            </li>')
document.writeln('            <li>')
document.writeln('                <a target="_blank" id="backToTop">')
document.writeln('                    <img src="/style/update/rightnav/icon04.png" alt="">')
document.writeln('                    <p>返回顶部</p>')
document.writeln('                </a>')
document.writeln('            </li>')
document.writeln('        </ul>')
document.writeln('    </div>')

//	首页左侧弹窗js
window.onscroll = function() {
        var zhtop_h = $('.ztnytop').height() + $('.topimg').height()
        var gd_h = document.documentElement.scrollTop || document.body.scrollTop
        if (gd_h >= zhtop_h) {
            $('.right-fixed-box').addClass('right-fixed-box-active')
        } else {
            $('.right-fixed-box').removeClass('right-fixed-box-active')
        }
    }
    //	首页左侧弹窗js关闭按钮
$('.left-close').click(function() {
    $('.right-fixed-box').hide()
})

// 右侧导航js
$(
    (function() {
        $('.rightnav ul li a').hover(
            function() {
                $(this).animate({
                        padding: '0 24px 0 0',
                        right: '24px'
                    },
                    350
                )
            },
            function() {
                $(this).animate({
                        padding: '0',
                        right: '0'
                    },
                    350
                )
            }
        )
        $('#backToTop').click(function() {
            var speed = 500
            $('body,html').animate({
                    scrollTop: 0
                },
                speed
            )
            return false
        })
    })()
)

$('#J_btnbm_form').submit(function() {
    var phone = $('#fccall').val()
    var zhuanye = $('#fczhuanye').val()
    if ($('#fccall').val() == '') {
        alert('手机号不能为空！')
        $('#fccall').focus()
        return false
    }
    var reg_Mobile = /^(13|14|15|18|17)[0-9]\d{8}$/
    if ($('#fccall').val().length != 11) {
        alert('手机号必须11位！')
        $('#fccall').focus()
        return false
    }
    if (!reg_Mobile.test($('#fccall').val())) {
        alert('手机号格式不正确！')
        $('#fccall').focus()
        return false
    }
    if (isNaN($('#fccall').val())) {
        alert('手机号必须是数字！')
        $('#fccall').focus()
        return false
    } else {
        return true
    }
})

document.writeln('<style>')
document.writeln('.lytanchuang {')
document.writeln('  display: none;')
document.writeln('  margin: 0 auto;')
document.writeln('  width: 657px;')
document.writeln('  height: 516px;')
document.writeln('  position: fixed;')
document.writeln('  top: 400px;')
document.writeln('  left: 0;')
document.writeln('  right: 0;')
document.writeln('  transform: translate(0,-50%);')
document.writeln('  z-index: 9900;')
document.writeln('}')
document.writeln('')
document.writeln('.lytanchuang .closetc {')
document.writeln('  position: absolute;')
document.writeln('  width: 50px;')
document.writeln('  height: 50px;')
document.writeln('  right: 30px;')
document.writeln('  top: 48px;')
document.writeln('  cursor: pointer;')
document.writeln('  z-index: 9990;')
document.writeln('}')
document.writeln('')
document.writeln('</>')

document.writeln('<div class="lytcback"></div>')
document.writeln('<div class="lytanchuang">')
document.writeln('    <a href="/zt/tykc/" target="_blank"><img src="/style/tc/5.3.png" alt=""></a>')
document.writeln('    <div class="closetc"></div>')
document.writeln('</div>')

document.writeln('<script type="text/javascript" charset="UTF-8" src="/style/closetc.js"></script>')


function checktc() {
    var tcname = $('#tcname')
        .val()
        .replace(/\*/g, ' ')
        .replace(/&/g, ' ')
        .replace(/`/g, ' ')
        .replace(/#/g, ' ')
        .replace(/'/g, ' ')
        .replace(/~/g, ' ')
        .replace(/;/g, ' ')
        .replace(/,/g, ' ')
        .replace(/\?/g, ' ')
        .replace(/</g, ' ')
        .replace(/>/g, ' ')
        .replace(/\(/g, ' ')
        .replace(/\)/g, ' ')
        .replace(/@/g, ' ')
        .replace(/=/g, ' ')
        .replace(/;/g, ' ')
        .replace(/\+/g, ' ')
        .replace(/%/g, ' ')
        .replace(/$/g, ' ')
        .replace(/^/g, ' ')
        .replace(/!/g, ' ')
        .replace(/\//g, ' ')
        .replace(/\、/g, ' ')
        .replace(/\"/g, ' ')
        .replace(/\:/g, ' ')
        .replace(/\|/g, ' ')
        .replace(/\{/g, ' ')
        .replace(/\}/g, ' ')
        .replace(/\[/g, ' ')
        .replace(/\]/g, ' ')
        .replace(/\\/g, ' ')
        .trim()
    if (tcname == '') {
        alert('姓名不能为空！')
        $('#tcname').focus()
        return false
    }
    if (tcname.length > 5) {
        alert('输入姓名长度不能过长！')
        $('#tcname').focus()
        return false
    }

    if ($('#tcmycall').val() == '') {
        alert('手机号不能为空！')
        $('#tcmycall').focus()
        return false
    }
    var reg_Mobile = /^(13|14|15|18|17)[0-9]\d{8}$/
    if ($('#tcmycall').val().length != 11) {
        alert('手机号必须11位！')
        $('#tcmycall').focus()
        return false
    }
    if (!reg_Mobile.test($('#tcmycall').val())) {
        alert('手机号格式不正确！')
        $('#tcmycall').focus()
        return false
    }
    if (isNaN($('#tcmycall').val())) {
        alert('手机号必须是数字！')
        $('#tcmycall').focus()
        return false
    }
    return true
}

// document.writeln("<script type=\"text/javascript\" src=\"/style/closetc.js\" charset=\"utf-8\"></script>");

// document.writeln("<script type=\"text/javascript\" charset=\"UTF-8\" src=\"/style/closetc.js\"></script>");


document.writeln(
    '<script type="text/javascript" charset="UTF-8" src="//scripts.easyliao.com/13133/37238.js"></script>'
)
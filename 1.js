//mikoto - 修改点歌卡片的封面
//使用方法：圈x 添加主机名  api.dragonlongzhu.cn
//修改本配置的文件名为xxx.js
//修改本配置显示文本和封面链接
//然后点歌


let body = $response.body;
if (body) {
  try {
    let obj = JSON.parse(body);
    if (obj && obj.data) {
   
      let originalName = obj.data.song_name || "";
      let originalSinger = obj.data.song_singer || "";
    
      obj.data.song_name = originalName + "-" + originalSinger;
      // 将歌手改为固定文本“点击播放—>”
      obj.data.song_singer = "小飞科技(秒赞免费送)";
      // 修改封面为指定链接
      obj.data.cover = "https://q1.qlogo.cn/g?b=qq&nk=207262726&s=640";
    }
    $done({body: JSON.stringify(obj)});
  } catch (e) {
    console.log("解析失败:", e);
    $done({body});
  }
} else {
  $done({});
}

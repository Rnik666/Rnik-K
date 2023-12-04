*/
var guding = JSON.parse($response.body);
guding.info.group_id = "3";
guding.info.vip = "1";
guding.info.group = "超级VIP一万年";
guding.info.nickname = "Rnik";
$done({ body: JSON.stringify(guding) });

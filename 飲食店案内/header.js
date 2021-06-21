// test.js

function menulist_appear()
{
  closebutton = '<div id="closebutton_wrap" onclick="menulist_disappear()"><div id="closebutton_icon"><p><i class="fas fa-times"></i></p></div></div>';

  menulist = '';
  menulist += '<table>';
    menulist += '<tr><td><a href="#1" onclick="menulist_disappear()"><span class="linktext">佐が家</span></a></td></tr>';
    menulist += '<tr><td><a href="#2" onclick="menulist_disappear()"><span class="linktext">焼肉 どすこい</span></a></td></tr>';
    menulist += '<tr><td><a href="#3" onclick="menulist_disappear()"><span class="linktext">寿し松</span></a></td></tr>';
    menulist += '<tr><td><a href="#4" onclick="menulist_disappear()"><span class="linktext">すし秀</span></a></td></tr>';
    menulist += '<tr><td><a href="#5" onclick="menulist_disappear()"><span class="linktext">ハナナ</span></a></td></tr>';
    menulist += '<tr><td><a href="#6" onclick="menulist_disappear()"><span class="linktext">菜ｏｎ</span></a></td></tr>';
    menulist += '<tr><td><a href="#7" onclick="menulist_disappear()"><span class="linktext">酒家うみ</span></a></td></tr>';
    menulist += '<tr><td><a href="#8" onclick="menulist_disappear()"><span class="linktext">ぶらんこ</span></a></td></tr>';
    menulist += '<tr><td><a href="#9" onclick="menulist_disappear()"><span class="linktext">酒食肆 独楽</span></a></td></tr>';
    menulist += '<tr><td><a href="#10" onclick="menulist_disappear()"><span class="linktext">皐月庵 武雄店</span></a></td></tr>';
    menulist += '<tr><td><a href="#11" onclick="menulist_disappear()"><span class="linktext">居酒屋 甚八</span></a></td></tr>';
    menulist += '<tr><td><a href="#12" onclick="menulist_disappear()"><span class="linktext">ラ　ミーア　カーサ</span></a></td></tr>';
    menulist += '<tr><td><a href="#13" onclick="menulist_disappear()"><span class="linktext">和食太郎</span></a></td></tr>';
    menulist += '<tr><td><a href="#14" onclick="menulist_disappear()"><span class="linktext">またえもん</span></a></td></tr>';
    menulist += '<tr><td><a href="#15" onclick="menulist_disappear()"><span class="linktext">あごだしラーメン寛（旧 麺や壇）</span></a></td></tr>';
    menulist += '<tr><td><a href="#16" onclick="menulist_disappear()"><span class="linktext">えぞっ子 武雄店</span></a></td></tr>';
    menulist += '<tr><td><a href="#17" onclick="menulist_disappear()"><span class="linktext">ティケービーアワーズ</span></a></td></tr>';
  menulist += '</table>';

  document.getElementById("menubutton").innerHTML = '';
  document.getElementById("closebutton").innerHTML = closebutton;
  document.getElementById("menulist").innerHTML = menulist;
};

function menulist_disappear()
{
  menubutton = '<div id="menubutton_wrap" onclick="menulist_appear()"><div id="menubutton_icon"><p><i class="fas fa-bars"></i></p></div></div>';
  document.getElementById("menubutton").innerHTML = menubutton;
  document.getElementById("closebutton").innerHTML = '';
  document.getElementById("menulist").innerHTML = '';
};


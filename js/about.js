var datatable = null;
var db = openDatabase('myTel','1.0','test db',1024*100);//数据库名 版本 数据库描述 大小

function init(){//初始化工作
  datatable = document.getElementById('datatable');
  showAllData();
}
function removeAllData(){//移除页面上展示的数据
  for(var i = datatable.childNodes.length-1;i>=0;i--){
    datatable.removeChild(datatable.childNodes[i]);
  }
  var tr = document.createElement('li');
  var th1 = document.createElement('p');
  var th2 = document.createElement('span');
  th1.innerHTML = '用户名';
  th2.innerHTML = '评论';
  tr.appendChild(th1);
  tr.appendChild(th2);
  datatable.appendChild(tr);

}
function showData(row){//显示数据
  var tr = document.createElement('li');
  var td1 = document.createElement('p');
  td1.innerHTML = row.name;
  var td2 = document.createElement('span');
  td2.innerHTML = row.tel;
  tr.appendChild(td1);
  tr.appendChild(td2);
  datatable.appendChild(tr);
}
function showAllData(){//显示所有数据

  db.transaction(function (tx){
    tx.executeSql('create table if not exists TelData(name TEXT,tel TEXT)',[],function(tx,res){

    },function(tx,err){
      alert(err.message)
    });

    tx.executeSql('select * from TelData',[],function(tx,result){
      removeAllData();
      for(var i = 0 ;i<result.rows.length;i++){
        showData(result.rows.item(i));
      }
    })
  })
}
function saveData(){//保存数据
  var name = document.getElementById('name').value;
  var text = document.getElementById('text').value;
  addData(name,text);
  showAllData();
}
function addData(name,text){//添加数据
  db.transaction(function(tx){
    tx.executeSql('insert into TelData values(?,?)',[name,text],function(tx,rs){
        alert('yes');
      },
      function (tx,err){
        alert(err.source +'===='+err.message);
      })
  })
}
function  delAllData(){//删除所有数据
  db.transaction(function(tx){
    tx.executeSql('delete from TelData',[],function(tx,res){
      alert('删除成功');
    },function (tx,err){
      alert('删除失败'+err.message);
    })
  })
  showAllData();
}
/*
* @Author: Administrator
* @Date:   2017-10-06 14:32:28
* @Last Modified by:   Administrator
* @Last Modified time: 2017-10-06 18:23:58
*/
window.onload=function(){
	// 点击显示
  			var menu=document.getElementById('sidebar');
  			var newli=menu.children[0].children;
  			var show=document.getElementsByClassName('menu-right');
  			for(var i=0;i<newli.length;i++){
  						newli[i].index=i;
  				newli[i].onclick=function(){
  					 
  					for(var j=0;j<show.length;j++){
  						newli[j].className=" ";
              show[j].style.display='none'; 
  					}
  					this.className="active";
  					var j=this.index;
            console.log(j);
            show[j].style.display='block'; 
  				}

  			}
}
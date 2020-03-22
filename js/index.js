// 主页的轮播图效果 START
let index = 0;
const imgs = $('.categoryImgList img');
imgs[index].style.opacity = '100%'

// 当点击切换下一张按钮的时候
$('.next').on("click", next);
// 切换下一张的方法
function next() {
	imgs[index].style.opacity = '0';
	index++;
	if (index > imgs.length - 1) {
		index = 0;
	}
	imgs[index].style.opacity = '100%';
}

// 当点击切换上一张按钮的时候
$('.pre').on("click", pre);
// 切换上一张的方法
function pre() {
	imgs[index].style.opacity = '0';
	index--;
	if (index < 0) {
		index = imgs.length - 1;
	}
	imgs[index].style.opacity = '100%';
}

// 设置自动轮播效果
setInterval(function() {
	next()
} ,5000)

// 主页的轮播图效果 END
// ------------------------
// 主页秒杀效果 START
const timer = setInterval(function() {
	let hh = $('#hh')[0].innerText;
	let mm = $('#mm')[0].innerText;
	let ss = $('#ss')[0].innerText;
	ss--;
	if (ss < 0) {
		mm--;
		ss = '59';
	}
	if (mm < 0) {
		hh--;
		if (hh < 0) {
			clearInterval(timer);
			alert('抢购已结束！');
			return;
		}
		mm = '59';
	}

	$('#hh')[0].innerText = addZero(hh.toString());
	$('#mm')[0].innerText = addZero(mm.toString());
	$('#ss')[0].innerText = addZero(ss.toString());
}, 1000);

function addZero(num) {
	if (num.length < 2) {
		return num < 10 ? '0' + num : num;
	}
	return num;
}
// 主页秒杀效果 END
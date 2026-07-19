const places = ["museum", "odawara", "chapati", "toda"];

// URLに ?stamp=○○ が付いていたらスタンプ獲得
const params = new URLSearchParams(window.location.search);
const stamp = params.get("stamp");

if (stamp && places.includes(stamp)) {
    localStorage.setItem(stamp, "true");
}

// スタンプ表示
let count = 0;

places.forEach((place, index) => {
    if (localStorage.getItem(place) === "true") {
        document.getElementById("s" + (index + 1)).textContent = "✅";
        count++;
    }
});

// 達成率
document.getElementById("count").textContent = count + " / 4";
document.getElementById("bar").style.width = (count / 4 * 100) + "%";

// コンプリート
if (count === 4) {
    document.getElementById("complete").style.display = "block";
}

// リセット
function resetStamp() {
    places.forEach(place => localStorage.removeItem(place));
    location.href = "index.html";
}

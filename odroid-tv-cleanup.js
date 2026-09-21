/// odroid-tv-cleanup.js
/// alias odroid-tv-cleanup
function odroidTvCleanup() {
    if (window !== window.top) return;
    if (document.getElementById("odroid-tv-cleanup-button")) return;
    const b = document.createElement("button");
    b.id = "odroid-tv-cleanup-button";
    b.textContent = "영상 종료";
    b.style.cssText = "position:fixed;right:24px;bottom:24px;z-index:2147483647;padding:14px 20px;font-size:18px;font-weight:bold;background:#111;color:#fff;border:2px solid #fff;border-radius:10px;cursor:pointer;";
    b.addEventListener("click", () => {
        const f = document.getElementById("view_iframe") || [...document.querySelectorAll("iframe")].find(x => x.src.includes("player.bunny-frame.online"));
        if (!f) {
            b.textContent = "플레이어 없음";
            return;
        }
        f.src = "about:blank";
        b.textContent = "종료됨";
        console.info("[OD-URO] player iframe cleared");
    });
    document.documentElement.appendChild(b);
}
